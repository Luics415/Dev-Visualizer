"use client";

import { useState } from "react";
import type { StudyConcept } from "@/data/conceptTypes";
import type { OfficialReference } from "@/data/officialReferences";
import type { CollectionPrimer } from "@/data/collectionPrimers";
import {
  generateCollectionMarkdownCheatSheet,
  downloadMarkdownFile,
  copyMarkdownToClipboard,
} from "@/lib/studyNotesExporter";
import { slugify } from "@/lib/slugify";

type StudyNotesExportButtonProps = {
  collectionId: string;
  collectionNumber: string;
  title: string;
  eyebrow: string;
  description: string;
  concepts: readonly StudyConcept[];
  primer?: CollectionPrimer;
  sources?: readonly OfficialReference[];
};

export function StudyNotesExportButton(props: StudyNotesExportButtonProps) {
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const md = generateCollectionMarkdownCheatSheet(props);
    const filename = `ficha-repaso-${slugify(props.title)}`;
    downloadMarkdownFile(filename, md);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  const handleCopy = async () => {
    const md = generateCollectionMarkdownCheatSheet(props);
    const ok = await copyMarkdownToClipboard(md);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="study-notes-export" role="region" aria-label="Exportar ficha de estudio en Markdown">
      <div className="study-notes-export__info">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
        <span>Ficha de repaso</span>
      </div>

      <div className="study-notes-export__actions">
        <button
          type="button"
          className="study-notes-export__btn study-notes-export__btn--download"
          onClick={handleDownload}
          title="Descargar apuntes completos en formato Markdown para Obsidian, Notion o estudio offline"
          aria-label="Descargar ficha de repaso en Markdown"
        >
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <b>{downloaded ? "¡Descargada! ✓" : "Descargar .md"}</b>
        </button>

        <button
          type="button"
          className="study-notes-export__btn study-notes-export__btn--copy"
          onClick={handleCopy}
          title="Copiar contenido Markdown al portapapeles"
          aria-label="Copiar ficha de repaso al portapapeles"
        >
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          <span>{copied ? "Copiado ✓" : "Copiar"}</span>
        </button>
      </div>
    </div>
  );
}
