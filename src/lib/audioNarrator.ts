export type AudioTrack = {
  id: string;
  title: string;
  subtitle?: string;
  family?: string;
  section?: string;
  text: string;
};

export type AudioNarratorStatus = "idle" | "speaking" | "paused";

export const AUDIO_SPEEDS = [1, 1.25, 1.5, 0.85] as const;
export type AudioSpeed = typeof AUDIO_SPEEDS[number];

export type AudioNarratorSnapshot = {
  readonly activeTrack: AudioTrack | null;
  readonly status: AudioNarratorStatus;
  readonly speed: AudioSpeed;
  readonly isSupported: boolean;
};

export const DEFAULT_SERVER_SNAPSHOT: AudioNarratorSnapshot = Object.freeze({
  activeTrack: null,
  status: "idle",
  speed: 1,
  isSupported: false,
});

type Listener = () => void;

class AudioNarrator {
  private activeTrack: AudioTrack | null = null;
  private status: AudioNarratorStatus = "idle";
  private speed: AudioSpeed = 1;
  private isSupported = false;
  private snapshot: AudioNarratorSnapshot = DEFAULT_SERVER_SNAPSHOT;
  private listeners = new Set<Listener>();
  private activeUtterance: SpeechSynthesisUtterance | null = null;
  private heartbeatTimer: ReturnType<typeof setInterval> | null = null;
  private epoch = 0;
  private voices: SpeechSynthesisVoice[] = [];
  private selectedVoice: SpeechSynthesisVoice | null = null;
  private initialized = false;

  constructor() {
    if (typeof window !== "undefined") {
      try {
        this.isSupported = "speechSynthesis" in window && typeof window.speechSynthesis !== "undefined";
      } catch {
        this.isSupported = false;
      }
      this.updateSnapshot();

      if (this.isSupported) {
        try {
          this.initVoices();
          if (typeof window.speechSynthesis.onvoiceschanged !== "undefined") {
            window.speechSynthesis.onvoiceschanged = () => this.initVoices();
          }
        } catch {
          // Entornos con restricciones
        }

        if (typeof document !== "undefined") {
          document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "hidden" && this.status === "speaking") {
              this.pause();
            }
          });
        }
      }
    }
  }

  private initVoices() {
    if (typeof window === "undefined" || !this.isSupported) return;
    try {
      this.voices = window.speechSynthesis.getVoices() || [];
      this.selectedVoice = this.pickBestSpanishVoice(this.voices);
      this.initialized = true;
    } catch {
      this.voices = [];
      this.selectedVoice = null;
    }
  }

  private pickBestSpanishVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
    if (!voices || voices.length === 0) return null;

    // Prioridad 1: Voces en español neuronales o naturales (Edge / Chrome / Siri)
    const naturalSpanish = voices.find(
      (v) =>
        v.lang.toLowerCase().startsWith("es") &&
        /(natural|neural|online|premium|enhanced|google|paulina|jorge|monica|mónica|sabina|diego)/i.test(v.name)
    );
    if (naturalSpanish) return naturalSpanish;

    // Prioridad 2: Voces de español de México o Latinoamérica
    const esMx = voices.find((v) => /^es[-_](mx|419|us)/i.test(v.lang));
    if (esMx) return esMx;

    // Prioridad 3: Cualquier voz en español
    const anySpanish = voices.find((v) => v.lang.toLowerCase().startsWith("es"));
    if (anySpanish) return anySpanish;

    // Fallback: Voz predeterminada del sistema
    return voices.find((v) => v.default) ?? voices[0] ?? null;
  }

  private updateSnapshot() {
    this.snapshot = Object.freeze({
      activeTrack: this.activeTrack,
      status: this.status,
      speed: this.speed,
      isSupported: this.isSupported,
    });
    this.notify();
  }

  public getSnapshot(): AudioNarratorSnapshot {
    return this.snapshot;
  }

  public subscribe(listener: Listener) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((listener) => listener());
  }

  private clearHeartbeat() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
  }

  public speak(track: AudioTrack) {
    if (typeof window === "undefined" || !this.isSupported) return;

    this.epoch++;
    const currentEpoch = this.epoch;

    this.clearHeartbeat();

    try {
      window.speechSynthesis.cancel();
    } catch {
      // ignore
    }

    this.activeTrack = track;
    this.status = "speaking";
    this.updateSnapshot();

    if (!this.initialized || this.voices.length === 0) {
      this.initVoices();
    }

    try {
      const utterance = new SpeechSynthesisUtterance(track.text);
      this.activeUtterance = utterance;

      if (this.selectedVoice) {
        utterance.voice = this.selectedVoice;
      }
      utterance.lang = this.selectedVoice?.lang || "es-MX";
      utterance.rate = this.speed;
      utterance.pitch = 1.0;

      utterance.onend = () => {
        if (this.epoch !== currentEpoch) return;
        this.clearHeartbeat();
        this.status = "idle";
        this.activeUtterance = null;
        this.updateSnapshot();
      };

      utterance.onerror = () => {
        if (this.epoch !== currentEpoch) return;
        this.clearHeartbeat();
        this.status = "idle";
        this.activeUtterance = null;
        this.updateSnapshot();
      };

      utterance.onpause = () => {
        if (this.epoch !== currentEpoch) return;
        this.status = "paused";
        this.updateSnapshot();
      };

      utterance.onresume = () => {
        if (this.epoch !== currentEpoch) return;
        this.status = "speaking";
        this.updateSnapshot();
      };

      window.speechSynthesis.speak(utterance);

      // Heartbeat cada 9.5s para evitar suspensión en Chromium
      this.heartbeatTimer = setInterval(() => {
        try {
          if (this.epoch === currentEpoch && window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
            window.speechSynthesis.pause();
            window.speechSynthesis.resume();
          }
        } catch {
          // ignore
        }
      }, 9500);
    } catch {
      this.status = "idle";
      this.activeUtterance = null;
      this.updateSnapshot();
    }
  }

  public pause() {
    if (typeof window === "undefined" || !this.isSupported) return;
    if (this.status === "speaking") {
      try {
        window.speechSynthesis.pause();
      } catch {
        // ignore
      }
      this.status = "paused";
      this.updateSnapshot();
    }
  }

  public resume() {
    if (typeof window === "undefined" || !this.isSupported) return;
    if (this.status === "paused") {
      try {
        window.speechSynthesis.resume();
      } catch {
        // ignore
      }
      this.status = "speaking";
      this.updateSnapshot();
    } else if (this.activeTrack && this.status === "idle") {
      this.speak(this.activeTrack);
    }
  }

  public stop() {
    if (typeof window === "undefined" || !this.isSupported) return;
    this.epoch++;
    this.clearHeartbeat();
    try {
      window.speechSynthesis.cancel();
    } catch {
      // ignore
    }
    this.status = "idle";
    this.activeUtterance = null;
    this.updateSnapshot();
  }

  public toggle(track: AudioTrack) {
    if (this.activeTrack?.id === track.id) {
      if (this.status === "speaking") {
        this.pause();
      } else if (this.status === "paused") {
        this.resume();
      } else {
        this.speak(track);
      }
    } else {
      this.speak(track);
    }
  }

  public setSpeed(newSpeed: AudioSpeed) {
    this.speed = newSpeed;
    if (this.status === "speaking" && this.activeTrack) {
      this.speak(this.activeTrack);
    } else {
      this.updateSnapshot();
    }
  }

  public cycleSpeed() {
    const currentIndex = AUDIO_SPEEDS.indexOf(this.speed);
    const nextSpeed = AUDIO_SPEEDS[(currentIndex + 1) % AUDIO_SPEEDS.length] ?? 1;
    this.setSpeed(nextSpeed);
  }
}

export const audioNarrator = new AudioNarrator();
