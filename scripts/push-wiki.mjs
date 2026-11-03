import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const wikiDir = path.resolve(__dirname, "../wiki");

let token = "";
try {
  token = execFileSync("gh", ["auth", "token"], { encoding: "utf8" }).trim();
} catch {
  token = process.env.GITHUB_TOKEN || "";
}

if (!token) {
  console.error("Error: No se encontro token de GitHub. Inicia sesion con 'gh auth login' o define GITHUB_TOKEN.");
  process.exit(1);
}

const remoteUrl = `https://x-access-token:${token}@github.com/Luics415/Dev-Visualizer.wiki.git`;
const tempDir = path.resolve(__dirname, "../.wiki-git-sync");

console.log("Preparando sincronizacion de la Wiki de Dev Visualizer...");

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
  execFileSync("git", ["init"], { cwd: tempDir, stdio: "ignore" });
  execFileSync("git", ["checkout", "-b", "master"], { cwd: tempDir, stdio: "ignore" });
  execFileSync("git", ["config", "user.name", "Luics415"], { cwd: tempDir, stdio: "ignore" });
  execFileSync("git", ["config", "user.email", "luics@users.noreply.github.com"], { cwd: tempDir, stdio: "ignore" });
  execFileSync("git", ["add", "."], { cwd: tempDir, stdio: "ignore" });
  execFileSync(
    "git",
    [
      "commit",
      "-m",
      "docs(wiki): enciclopedia tecnica para 73 colecciones y 7410 conceptos\n\nCo-authored-by: Azlynn17 <Azlynn17@users.noreply.github.com>",
    ],
    { cwd: tempDir, stdio: "ignore" },
  );
  execFileSync("git", ["remote", "add", "origin", remoteUrl], { cwd: tempDir, stdio: "ignore" });

  console.log(`Subiendo ${files.length} paginas a https://github.com/Luics415/Dev-Visualizer/wiki...`);
  execFileSync("git", ["push", "--force", "-u", "origin", "master"], { cwd: tempDir, stdio: "inherit" });
  console.log("Exito: Wiki sincronizada correctamente en GitHub.");
} catch {
  console.warn("\nNota sobre la inicializacion de la Wiki en GitHub:");
  console.warn("GitHub requiere que la Wiki sea activada por primera vez creando una pagina desde la interfaz web.");
  console.warn("1. Ingresa a: https://github.com/Luics415/Dev-Visualizer/wiki");
  console.warn("2. Haz clic en 'Create the first page' y guarda.");
  console.warn("3. Luego ejecuta 'npm run wiki:push' y todas las 86 paginas de la enciclopedia se sincronizaran automaticamente.\n");
} finally {
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}
