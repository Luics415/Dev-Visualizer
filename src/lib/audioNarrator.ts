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

export type SpanishVoiceOption = {
  voiceURI: string;
  name: string;
  lang: string;
  region: string;
  isNeural: boolean;
};

export type AudioNarratorSnapshot = {
  readonly activeTrack: AudioTrack | null;
  readonly status: AudioNarratorStatus;
  readonly speed: AudioSpeed;
  readonly isSupported: boolean;
  readonly currentChunkIndex: number;
  readonly totalChunks: number;
  readonly chunks: readonly string[];
  readonly progress: number; // 0 a 1
  readonly availableVoices: readonly SpanishVoiceOption[];
  readonly selectedVoiceURI: string | null;
};

export const DEFAULT_SERVER_SNAPSHOT: AudioNarratorSnapshot = Object.freeze({
  activeTrack: null,
  status: "idle",
  speed: 1,
  isSupported: false,
  currentChunkIndex: 0,
  totalChunks: 0,
  chunks: [],
  progress: 0,
  availableVoices: [],
  selectedVoiceURI: null,
});

type Listener = () => void;

/**
 * Divide el texto de la locución en frases breves y naturales (<= 140 caracteres).
 * Esto evita el límite de buffer en los motores TTS de Android y elimina la necesidad
 * de heartbeats de pause/resume en Chromium que cortan abruptamente el audio en móviles.
 */
export function splitTextIntoNarrationChunks(text: string): string[] {
  if (!text || typeof text !== "string") return [];
  const clean = text.replace(/\s+/g, " ").trim();
  if (!clean) return [];

  // Paso 1: Dividir por puntuación fuerte: punto, exclamación, interrogación
  const rawParts = clean.split(/(?<=[.!?])\s+/);
  const chunks: string[] = [];

  for (const part of rawParts) {
    const trimmed = part.trim();
    if (!trimmed) continue;

    // Si el bloque cabe cómodamente (<= 140 caracteres), usarlo directamente
    if (trimmed.length <= 140) {
      chunks.push(trimmed);
      continue;
    }

    // Si excede 140 caracteres, subdividir por punto y coma, dos puntos o comas
    const subParts = trimmed.split(/(?<=[;:])\s+|(?<=,)\s+/);
    let current = "";

    for (const sub of subParts) {
      if (!current) {
        current = sub;
      } else if ((current + " " + sub).length <= 140) {
        current += " " + sub;
      } else {
        chunks.push(current.trim());
        current = sub;
      }
    }
    if (current.trim()) {
      chunks.push(current.trim());
    }
  }

  return chunks.length > 0 ? chunks : [clean];
}

// Conjunto a nivel de módulo para evitar que el Garbage Collector de V8 en Android
// destruya la referencia al SpeechSynthesisUtterance en reproducción activa.
const activeUtterancesSet = new Set<SpeechSynthesisUtterance>();

const VOICE_STORAGE_KEY = "dev-visualizer-narrator-voice-uri";

function getVoiceRegionLabel(lang: string, name: string): string {
  const normalizedLang = (lang || "").toLowerCase().replace(/_/g, "-");
  if (normalizedLang.includes("mx")) return "México";
  if (normalizedLang.includes("es")) return "España";
  if (normalizedLang.includes("co")) return "Colombia";
  if (normalizedLang.includes("ar")) return "Argentina";
  if (normalizedLang.includes("cl")) return "Chile";
  if (normalizedLang.includes("pe")) return "Perú";
  if (normalizedLang.includes("us")) return "EE. UU.";
  if (normalizedLang.includes("419")) return "Latinoamérica";
  if (/mexic|méxic/i.test(name)) return "México";
  if (/spain|españ/i.test(name)) return "España";
  return "Español";
}

class AudioNarrator {
  private activeTrack: AudioTrack | null = null;
  private status: AudioNarratorStatus = "idle";
  private speed: AudioSpeed = 1;
  private isSupported = false;
  private currentChunkIndex = 0;
  private chunks: string[] = [];
  private snapshot: AudioNarratorSnapshot = DEFAULT_SERVER_SNAPSHOT;
  private listeners = new Set<Listener>();
  private activeUtterance: SpeechSynthesisUtterance | null = null;
  private watchdogTimer: ReturnType<typeof setTimeout> | null = null;
  private epoch = 0;
  private voices: SpeechSynthesisVoice[] = [];
  private availableVoices: SpanishVoiceOption[] = [];
  private selectedVoice: SpeechSynthesisVoice | null = null;
  private selectedVoiceURI: string | null = null;
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
      const spanishVoices = this.voices.filter((v) => v.lang.toLowerCase().startsWith("es"));
      const targetList = spanishVoices.length > 0 ? spanishVoices : this.voices.slice(0, 5);

      this.availableVoices = targetList.map((v) => ({
        voiceURI: v.voiceURI,
        name: v.name.replace(/(Microsoft|Google|Apple)\s*/gi, "").trim() || v.name,
        lang: v.lang,
        region: getVoiceRegionLabel(v.lang, v.name),
        isNeural: /(natural|neural|online|premium|enhanced|google)/i.test(v.name),
      }));

      let savedVoiceURI: string | null = null;
      try {
        savedVoiceURI = localStorage.getItem(VOICE_STORAGE_KEY);
      } catch {
        // Entornos sin acceso a localStorage
      }

      if (savedVoiceURI && this.voices.some((v) => v.voiceURI === savedVoiceURI)) {
        this.selectedVoice = this.voices.find((v) => v.voiceURI === savedVoiceURI) ?? null;
      } else {
        this.selectedVoice = this.pickBestSpanishVoice(this.voices);
      }

      this.selectedVoiceURI = this.selectedVoice?.voiceURI ?? null;
      this.initialized = true;
    } catch {
      this.voices = [];
      this.availableVoices = [];
      this.selectedVoice = null;
      this.selectedVoiceURI = null;
    }
  }

  private pickBestSpanishVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
    if (!voices || voices.length === 0) return null;

    // Prioridad 1: Voces en español neuronales o naturales (Edge / Chrome / Google / Siri)
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
    const total = this.chunks.length;
    const progress =
      total > 0 && this.status !== "idle"
        ? Math.min(1, Math.max(0, (this.currentChunkIndex + (this.status === "speaking" ? 0.5 : 0)) / total))
        : 0;

    this.snapshot = Object.freeze({
      activeTrack: this.activeTrack,
      status: this.status,
      speed: this.speed,
      isSupported: this.isSupported,
      currentChunkIndex: this.currentChunkIndex,
      totalChunks: total,
      chunks: this.chunks,
      progress,
      availableVoices: this.availableVoices,
      selectedVoiceURI: this.selectedVoiceURI,
    });
    this.notify();
  }

  public ensureClientSupported(): boolean {
    if (typeof window === "undefined") return false;
    if (!this.isSupported) {
      try {
        this.isSupported = "speechSynthesis" in window && typeof window.speechSynthesis !== "undefined";
        if (this.isSupported && !this.initialized) {
          this.initVoices();
          if (typeof window.speechSynthesis.onvoiceschanged !== "undefined") {
            window.speechSynthesis.onvoiceschanged = () => this.initVoices();
          }
        }
      } catch {
        this.isSupported = false;
      }
      this.updateSnapshot();
    }
    return this.isSupported;
  }

  public getSnapshot(): AudioNarratorSnapshot {
    if (typeof window !== "undefined" && !this.isSupported) {
      this.ensureClientSupported();
    }
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

  private clearWatchdog() {
    if (this.watchdogTimer) {
      clearTimeout(this.watchdogTimer);
      this.watchdogTimer = null;
    }
  }

  private cancelNativeSpeech() {
    activeUtterancesSet.clear();
    if (typeof window !== "undefined" && window.speechSynthesis) {
      try {
        window.speechSynthesis.cancel();
      } catch {
        // ignore
      }
    }
  }

  public speak(track: AudioTrack, startChunkIndex = 0) {
    if (typeof window === "undefined" || !this.ensureClientSupported()) return;

    this.epoch++;
    this.clearWatchdog();
    this.cancelNativeSpeech();

    this.activeTrack = track;
    this.chunks = splitTextIntoNarrationChunks(track.text);
    this.currentChunkIndex = Math.max(0, Math.min(startChunkIndex, Math.max(0, this.chunks.length - 1)));
    this.status = "speaking";
    this.updateSnapshot();

    if (!this.initialized || this.voices.length === 0) {
      this.initVoices();
    }

    this.speakCurrentChunk();
  }

  private speakCurrentChunk() {
    if (typeof window === "undefined" || !this.isSupported) return;
    if (!this.activeTrack || this.chunks.length === 0) {
      this.finishPlayback();
      return;
    }

    if (this.currentChunkIndex >= this.chunks.length) {
      this.finishPlayback();
      return;
    }

    const currentEpoch = this.epoch;
    const chunkText = this.chunks[this.currentChunkIndex];
    if (!chunkText) {
      this.finishPlayback();
      return;
    }

    this.clearWatchdog();

    try {
      window.speechSynthesis.cancel();
    } catch {
      // ignore
    }

    try {
      const utterance = new SpeechSynthesisUtterance(chunkText);
      this.activeUtterance = utterance;
      activeUtterancesSet.add(utterance);

      if (this.selectedVoice) {
        utterance.voice = this.selectedVoice;
      }
      utterance.lang = this.selectedVoice?.lang || "es-MX";
      utterance.rate = this.speed;
      utterance.pitch = 1.0;

      utterance.onend = () => {
        activeUtterancesSet.delete(utterance);
        if (this.epoch !== currentEpoch) return;
        this.clearWatchdog();

        if (this.currentChunkIndex + 1 < this.chunks.length) {
          this.currentChunkIndex++;
          this.updateSnapshot();
          this.speakCurrentChunk();
        } else {
          this.finishPlayback();
        }
      };

      utterance.onerror = (e) => {
        activeUtterancesSet.delete(utterance);
        if (this.epoch !== currentEpoch) return;
        this.clearWatchdog();

        // Si fue cancelación voluntaria por pausa, stop o salto, ignorar
        if (e.error === "canceled" || e.error === "interrupted") {
          return;
        }

        // Si falló este fragmento por el motor TTS, avanzar al siguiente para no bloquear la lectura
        if (this.currentChunkIndex + 1 < this.chunks.length) {
          this.currentChunkIndex++;
          this.updateSnapshot();
          this.speakCurrentChunk();
        } else {
          this.finishPlayback();
        }
      };

      // Watchdog de seguridad contra cuelgues del motor TTS en móviles
      const estimatedSeconds = Math.max(8, Math.ceil((chunkText.length / 8) / this.speed) + 4);
      this.watchdogTimer = setTimeout(() => {
        if (this.epoch === currentEpoch && this.status === "speaking") {
          activeUtterancesSet.delete(utterance);
          if (this.currentChunkIndex + 1 < this.chunks.length) {
            this.currentChunkIndex++;
            this.updateSnapshot();
            this.speakCurrentChunk();
          } else {
            this.finishPlayback();
          }
        }
      }, estimatedSeconds * 1000);

      window.speechSynthesis.speak(utterance);
    } catch {
      this.finishPlayback();
    }
  }

  private finishPlayback() {
    this.clearWatchdog();
    this.cancelNativeSpeech();
    this.status = "idle";
    this.currentChunkIndex = 0;
    this.activeUtterance = null;
    this.updateSnapshot();
  }

  public pause() {
    if (typeof window === "undefined" || !this.ensureClientSupported()) return;
    if (this.status === "speaking") {
      this.clearWatchdog();
      this.cancelNativeSpeech();
      this.status = "paused";
      this.updateSnapshot();
    }
  }

  public resume() {
    if (typeof window === "undefined" || !this.ensureClientSupported()) return;
    if (this.status === "paused" && this.activeTrack) {
      this.status = "speaking";
      this.updateSnapshot();
      this.speakCurrentChunk();
    } else if (this.activeTrack && this.status === "idle") {
      this.speak(this.activeTrack);
    }
  }

  public stop() {
    if (typeof window === "undefined" || !this.ensureClientSupported()) return;
    this.epoch++;
    this.finishPlayback();
  }

  public toggle(track: AudioTrack) {
    if (typeof window === "undefined" || !this.ensureClientSupported()) return;
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

  public seekChunk(index: number) {
    if (typeof window === "undefined" || !this.ensureClientSupported() || !this.activeTrack) return;
    if (index < 0 || index >= this.chunks.length) return;
    this.epoch++;
    this.currentChunkIndex = index;
    if (this.status === "speaking") {
      this.speakCurrentChunk();
    } else {
      this.updateSnapshot();
    }
  }

  public setSpeed(newSpeed: AudioSpeed) {
    this.speed = newSpeed;
    if (this.status === "speaking" && this.activeTrack) {
      this.epoch++;
      this.speakCurrentChunk();
    } else {
      this.updateSnapshot();
    }
  }

  public cycleSpeed() {
    const currentIndex = AUDIO_SPEEDS.indexOf(this.speed);
    const nextSpeed = AUDIO_SPEEDS[(currentIndex + 1) % AUDIO_SPEEDS.length] ?? 1;
    this.setSpeed(nextSpeed);
  }

  public setVoice(voiceURI: string) {
    if (typeof window === "undefined" || !this.ensureClientSupported()) return;
    const target = this.voices.find((v) => v.voiceURI === voiceURI);
    if (!target) return;

    this.selectedVoice = target;
    this.selectedVoiceURI = target.voiceURI;

    try {
      localStorage.setItem(VOICE_STORAGE_KEY, target.voiceURI);
    } catch {
      // ignore
    }

    if (this.status === "speaking" && this.activeTrack) {
      this.epoch++;
      this.speakCurrentChunk();
    } else {
      this.updateSnapshot();
    }
  }
}

export const audioNarrator = new AudioNarrator();
