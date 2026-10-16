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

type Listener = () => void;

class AudioNarrator {
  private activeTrack: AudioTrack | null = null;
  private status: AudioNarratorStatus = "idle";
  private speed: AudioSpeed = 1;
  private listeners = new Set<Listener>();
  private activeUtterance: SpeechSynthesisUtterance | null = null;
  private heartbeatTimer: ReturnType<typeof setInterval> | null = null;
  private epoch = 0;
  private voices: SpeechSynthesisVoice[] = [];
  private selectedVoice: SpeechSynthesisVoice | null = null;
  private initialized = false;

  constructor() {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      this.initVoices();
      if (typeof window.speechSynthesis.onvoiceschanged !== "undefined") {
        window.speechSynthesis.onvoiceschanged = () => this.initVoices();
      }

      // Detener audio al cambiar de pestaña para no perturbar al usuario ni gastar recursos
      if (typeof document !== "undefined") {
        document.addEventListener("visibilitychange", () => {
          if (document.visibilityState === "hidden" && this.status === "speaking") {
            this.pause();
          }
        });
      }
    }
  }

  private initVoices() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    this.voices = window.speechSynthesis.getVoices();
    this.selectedVoice = this.pickBestSpanishVoice(this.voices);
    this.initialized = true;
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

  public getSnapshot() {
    return {
      activeTrack: this.activeTrack,
      status: this.status,
      speed: this.speed,
      isSupported: typeof window !== "undefined" && "speechSynthesis" in window,
    };
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
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    // Incrementar epoch para invalidar llamadas asíncronas anteriores (evita audios superpuestos)
    this.epoch++;
    const currentEpoch = this.epoch;

    this.clearHeartbeat();
    window.speechSynthesis.cancel();

    this.activeTrack = track;
    this.status = "speaking";
    this.notify();

    if (!this.initialized || this.voices.length === 0) {
      this.initVoices();
    }

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
      this.notify();
    };

    utterance.onerror = () => {
      // "interrupted" y "canceled" son normales cuando el usuario cambia de tarjeta o detiene
      if (this.epoch !== currentEpoch) return;
      this.clearHeartbeat();
      this.status = "idle";
      this.activeUtterance = null;
      this.notify();
    };

    utterance.onpause = () => {
      if (this.epoch !== currentEpoch) return;
      this.status = "paused";
      this.notify();
    };

    utterance.onresume = () => {
      if (this.epoch !== currentEpoch) return;
      this.status = "speaking";
      this.notify();
    };

    window.speechSynthesis.speak(utterance);

    // Heartbeat cada 9.5s para evitar que Chrome detenga silenciosamente la locución larga
    this.heartbeatTimer = setInterval(() => {
      if (this.epoch === currentEpoch && window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      }
    }, 9500);
  }

  public pause() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    if (this.status === "speaking") {
      window.speechSynthesis.pause();
      this.status = "paused";
      this.notify();
    }
  }

  public resume() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    if (this.status === "paused") {
      window.speechSynthesis.resume();
      this.status = "speaking";
      this.notify();
    } else if (this.activeTrack && this.status === "idle") {
      this.speak(this.activeTrack);
    }
  }

  public stop() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    this.epoch++;
    this.clearHeartbeat();
    window.speechSynthesis.cancel();
    this.status = "idle";
    this.activeUtterance = null;
    this.notify();
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
      // Reiniciar suavemente la pista actual con la nueva velocidad
      this.speak(this.activeTrack);
    } else {
      this.notify();
    }
  }

  public cycleSpeed() {
    const currentIndex = AUDIO_SPEEDS.indexOf(this.speed);
    const nextSpeed = AUDIO_SPEEDS[(currentIndex + 1) % AUDIO_SPEEDS.length] ?? 1;
    this.setSpeed(nextSpeed);
  }
}

export const audioNarrator = new AudioNarrator();
