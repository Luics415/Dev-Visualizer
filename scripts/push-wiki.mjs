import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const wikiDir = path.resolve(__dirname, "../wiki");

let token = "";
try {
  token = execSync("gh auth token", { encoding: "utf8" }).trim();
} catch {
  token = process.env.GITHUB_TOKEN || "";
}

if (!token) {
  console.error("❌ No se encontró token de GitHub. Inicia sesión con 'gh auth login' o define GITHUB_TOKEN.");
  process.exit(1);
}

const remoteUrl = `https://x-access-token:${token}@github.com/Luics415/Dev-Visualizer.wiki.git`;
const tempDir = path.resolve(__dirname, "../.wiki-git-sync");

console.log("🌌 Preparando sincronización de la Wiki de Dev Visualizer...");

if (fs.existsSync(tempDir)) {
  fs.rmSync(tempDir, { recursive: true, force: true });
}
fs.mkdirSync(tempDir, { recursive: true });

// Copy all files from wiki/ into tempDir
const files = fs.readdirSync(wikiDir);
for (const file of files) {
  fs.copyFileSync(path.join(wikiDir, file), path.join(tempDir, file));
}

try {
  execSync("git init", { cwd: tempDir, stdio: "ignore" });
  execSync("git checkout -b master", { cwd: tempDir, stdio: "ignore" });
  execSync("git config user.name \"Luics415\"", { cwd: tempDir, stdio: "ignore" });
  execSync("git config user.email \"luics@users.noreply.github.com\"", { cwd: tempDir, stdio: "ignore" });
  execSync("git add .", { cwd: tempDir, stdio: "ignore" });
  execSync("git commit -m \"docs(wiki): enciclopedia técnica completa con 73 colecciones y 7410 conceptos\n\nCo-authored-by: Azlynn17 <Azlynn17@users.noreply.github.com>\"", { cwd: tempDir, stdio: "ignore" });
  execSync(`git remote add origin "${remoteUrl}"`, { cwd: tempDir, stdio: "ignore" });

  console.log(`Subiendo ${files.length} páginas a https://github.com/Luics415/Dev-Visualizer/wiki...`);
  execSync("git push --force -u origin master", { cwd: tempDir, stdio: "inherit" });
  console.log("✅ ¡Wiki sincronizada con éxito en GitHub!");
} catch {
  console.warn("\n⚠️ Nota sobre la inicialización de la Wiki en GitHub:");
  console.warn("GitHub requiere que la Wiki sea activada por primera vez creando una página desde la interfaz web.");
  console.warn("👉 Ingresa a: https://github.com/Luics415/Dev-Visualizer/wiki");
  console.warn("👉 Haz clic en 'Create the first page' (puedes poner cualquier texto) y guarda.");
  console.warn("👉 Luego ejecuta 'npm run wiki:push' y todas las 86 páginas de la enciclopedia se subirán automáticamente.\n");
} finally {
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}
