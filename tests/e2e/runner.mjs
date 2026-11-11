#!/usr/bin/env node
/**
 * Dev Visualizer — E2E Master Test Runner
 * tests/e2e/runner.mjs
 * 
 * Executes Tier 1, Tier 2, Tier 3, and Tier 4 tests using Node 24 native node:test
 * with tsx loader for path aliases, deterministic reporting, and strict exit codes.
 */

import { existsSync, readdirSync } from "node:fs";
import { resolve, join, relative } from "node:path";
import { parseArgs } from "node:util";
import { run } from "node:test";
import { spec, tap, dot, junit } from "node:test/reporters";
import { fileURLToPath } from "node:url";

const __dirname = resolve(fileURLToPath(import.meta.url), "..");
const PROJECT_ROOT = resolve(__dirname, "../..");

// Configuración oficial de Tiers conforme a TEST_INFRA.md
const TIER_DEFINITIONS = [
  {
    id: 1,
    key: "1",
    name: "Tier 1: Feature Coverage (F1 - F22)",
    dir: "tier1",
    minExpectedTests: 110,
  },
  {
    id: 2,
    key: "2",
    name: "Tier 2: Boundary & Corner Cases",
    dir: "tier2",
    minExpectedTests: 110,
  },
  {
    id: 3,
    key: "3",
    name: "Tier 3: Pairwise Combinatorial Matrix",
    dir: "tier3",
    minExpectedTests: 22,
  },
  {
    id: 4,
    key: "4",
    name: "Tier 4: Real-World Application Scenarios",
    dir: "tier4",
    minExpectedTests: 5,
  },
];

function getReporterStream(reporterName) {
  switch (reporterName?.toLowerCase()) {
    case "tap":
      return tap;
    case "dot":
      return dot;
    case "junit":
      return junit;
    case "spec":
    default:
      return spec;
  }
}

function findTestFiles(dirPath, filterPattern = null) {
  if (!existsSync(dirPath)) return [];
  const entries = readdirSync(dirPath, { withFileTypes: true, recursive: true });
  return entries
    .filter((entry) => entry.isFile() && /\.(test|spec)\.(m?js|ts)$/.test(entry.name))
    .map((entry) => join(entry.parentPath ?? dirPath, entry.name))
    .filter((filePath) => {
      if (!filterPattern) return true;
      return new RegExp(filterPattern, "i").test(filePath);
    })
    .sort();
}

async function runTier(tier, files, reporterStream) {
  console.log(`\n======================================================================`);
  console.log(`▶ EJECUTANDO ${tier.name.toUpperCase()}`);
  console.log(`  Archivos detectados: ${files.length}`);
  for (const f of files) {
    console.log(`   - ${relative(PROJECT_ROOT, f)}`);
  }
  console.log(`======================================================================\n`);

  const startTime = performance.now();
  const testStream = run({
    files,
    execArgv: ["--import", "tsx"],
    isolation: "process",
    concurrency: true,
  });

  let tierSummary = null;
  testStream.on("test:summary", (s) => {
    tierSummary = s;
  });

  // Pipe to selected reporter
  testStream.compose(reporterStream).pipe(process.stdout);

  // Wait for stream to finish
  await new Promise((resolveStream) => {
    testStream.on("end", resolveStream);
  });

  const durationMs = performance.now() - startTime;

  return {
    tierId: tier.id,
    tierName: tier.name,
    filesCount: files.length,
    passed: tierSummary?.counts?.passed ?? 0,
    failed: tierSummary?.counts?.failed ?? 0,
    skipped: tierSummary?.counts?.skipped ?? 0,
    total: tierSummary?.counts?.tests ?? 0,
    success: (tierSummary?.counts?.failed ?? 0) === 0 && (tierSummary?.counts?.tests ?? 0) > 0,
    durationMs,
  };
}

export async function main() {
  const optionsConfig = {
    tier: { type: "string", short: "t" },
    all: { type: "boolean" },
    filter: { type: "string", short: "f" },
    reporter: { type: "string", short: "r", default: "spec" },
    "fail-fast": { type: "boolean" },
    help: { type: "boolean", short: "h" },
  };

  const { values } = parseArgs({
    args: process.argv.slice(2),
    options: optionsConfig,
    allowPositionals: true,
  });

  if (values.help) {
    console.log(`
Dev Visualizer E2E Test Runner
Uso: node tests/e2e/runner.mjs [opciones]

Opciones:
  -t, --tier <1|2|3|4|all>   Ejecuta únicamente el Tier especificado (por defecto: all)
  -f, --filter <patrón>      Filtra archivos de prueba por nombre o ruta
  -r, --reporter <spec|tap>  Formato de reporte de salida (spec, tap, dot, junit)
  --fail-fast                Detiene la ejecución si algún Tier falla
  -h, --help                 Muestra esta ayuda
    `);
    process.exit(0);
  }

  const selectedTierKey = values.tier?.toLowerCase() ?? (values.all ? "all" : "all");
  const reporterStream = getReporterStream(values.reporter);

  let tiersToExecute = TIER_DEFINITIONS;
  if (selectedTierKey !== "all") {
    tiersToExecute = TIER_DEFINITIONS.filter((t) => t.key === selectedTierKey);
    if (tiersToExecute.length === 0) {
      console.error(`[ERROR] Tier inválido: "${values.tier}". Opciones válidas: 1, 2, 3, 4, all.`);
      process.exit(1);
    }
  }

  console.log(`╔════════════════════════════════════════════════════════════════════╗`);
  console.log(`║      DEV VISUALIZER — SUITE DE PRUEBAS END-TO-END (NODE 24)        ║`);
  console.log(`╚════════════════════════════════════════════════════════════════════╝`);
  console.log(`Modo de ejecución : ${selectedTierKey === "all" ? "Todos los Tiers (1 - 4)" : `Tier ${selectedTierKey}`}`);
  console.log(`Filtro de archivos: ${values.filter ?? "Ninguno (todos los archivos)"}`);
  console.log(`Reporter          : ${values.reporter ?? "spec"}`);

  const results = [];
  let globalHasFailure = false;

  for (const tier of tiersToExecute) {
    const tierDir = resolve(__dirname, tier.dir);
    const files = findTestFiles(tierDir, values.filter);

    if (files.length === 0) {
      console.log(`\n[AVISO] No se encontraron archivos de prueba en: ${relative(PROJECT_ROOT, tierDir)}`);
      results.push({
        tierId: tier.id,
        tierName: tier.name,
        filesCount: 0,
        passed: 0,
        failed: 0,
        skipped: 0,
        total: 0,
        success: false,
        durationMs: 0,
        empty: true,
      });
      continue;
    }

    const tierResult = await runTier(tier, files, reporterStream);
    results.push(tierResult);

    if (!tierResult.success) {
      globalHasFailure = true;
      if (values["fail-fast"]) {
        console.error(`\n[FAIL-FAST] Tier ${tier.id} falló. Abortando tiers restantes.`);
        break;
      }
    }
  }

  // Dashboard de Consolidación Final
  console.log(`\n\n══════════════════════════════════════════════════════════════════════`);
  console.log(`          RESUMEN CONSOLIDADO DE EJECUCIÓN E2E`);
  console.log(`══════════════════════════════════════════════════════════════════════`);

  let grandTotalPassed = 0;
  let grandTotalFailed = 0;
  let grandTotalSkipped = 0;
  let grandTotalDuration = 0;

  for (const res of results) {
    grandTotalPassed += res.passed;
    grandTotalFailed += res.failed;
    grandTotalSkipped += res.skipped;
    grandTotalDuration += res.durationMs;

    const statusBadge = res.empty
      ? "⚠ SIN PRUEBAS"
      : res.success
      ? "✔ APROBADO"
      : "✖ FALLIDO";

    console.log(
      `${res.tierName.padEnd(45)} | ${statusBadge} | ${String(res.passed).padStart(3)} pasadas | ${String(res.failed).padStart(2)} fallos | ${(res.durationMs / 1000).toFixed(2)}s`
    );
  }

  const grandTotal = grandTotalPassed + grandTotalFailed;
  const passRate = grandTotal > 0 ? ((grandTotalPassed / grandTotal) * 100).toFixed(1) : "0.0";

  console.log(`──────────────────────────────────────────────────────────────────────`);
  console.log(
    `TOTAL GENERAL : ${grandTotalPassed}/${grandTotal} pruebas aprobadas (${passRate}%)` +
    (grandTotalSkipped > 0 ? ` [${grandTotalSkipped} omitidas]` : "") +
    ` en ${(grandTotalDuration / 1000).toFixed(2)}s`
  );

  if (globalHasFailure || grandTotalPassed === 0) {
    console.log(`ESTADO FINAL  : ✖ RECHAZADO — Se detectaron fallos o suite vacía`);
    console.log(`══════════════════════════════════════════════════════════════════════\n`);
    process.exitCode = 1;
  } else {
    console.log(`ESTADO FINAL  : ✔ APROBADO 100% — Toda la suite pasó exitosamente`);
    console.log(`══════════════════════════════════════════════════════════════════════\n`);
    process.exitCode = 0;
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  main().catch((err) => {
    console.error("Error fatal en el runner E2E:", err);
    process.exit(1);
  });
}
