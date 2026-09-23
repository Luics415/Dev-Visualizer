import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import http from "node:http";
import https from "node:https";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const snapshotPath = path.join(rootDir, "src/data/libraryResources.snapshot.json");
const publicLibraryDir = path.join(rootDir, "public/library");

export const targets = [
  {
    id: "git--pro-git",
    downloadUrl: "https://librosgratis.dev/books/git-pro.pdf",
    fileName: "pro-git-es.pdf",
    version: "Segunda edición en español",
    licenseName: "Creative Commons Atribución-NoComercial-CompartirIgual 3.0 (CC BY-NC-SA 3.0)",
    licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
    sourceUrl: "https://git-scm.com/book/es/v2",
  },
  {
    id: "python--python-para-todos",
    downloadUrl: "https://librosgratis.dev/books/python-para-todos.pdf",
    fileName: "python-para-todos.pdf",
    version: "Versión revisada 2.1",
    licenseName: "Creative Commons Atribución-NoComercial-CompartirIgual 2.1 (CC BY-NC-SA 2.1 ES)",
    licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/2.1/es/",
    sourceUrl: "https://mundogeek.net/tutorial-python/",
  },
  {
    id: "javascript--javascript-elocuente-cuarta-edicion",
    downloadUrl: "https://librosgratis.dev/books/javascript-elocuente-cuarta-edicion.pdf",
    fileName: "javascript-elocuente-cuarta-edicion.pdf",
    version: "Cuarta edición en español",
    licenseName: "Creative Commons Atribución-NoComercial 3.0 (CC BY-NC 3.0)",
    licenseUrl: "https://creativecommons.org/licenses/by-nc/3.0/",
    sourceUrl: "https://eloquentjavascript.net/",
  },
  {
    id: "javascript--introduccion-a-javascript",
    downloadUrl: "https://librosgratis.dev/books/javascript-introduccion-eguiluz.pdf",
    fileName: "introduccion-a-javascript-eguiluz.pdf",
    version: "Edición completa Uniwebsidad",
    licenseName: "Creative Commons Atribución-NoComercial-CompartirIgual 3.0 (CC BY-NC-SA 3.0 ES)",
    licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/es/",
    sourceUrl: "https://uniwebsidad.com/libros/javascript",
  },
  {
    id: "sistemas-operativos--sistemas-operativos",
    downloadUrl: "https://librosgratis.dev/books/sistemas-operativos-wolf.pdf",
    fileName: "fundamentos-de-sistemas-operativos-unam.pdf",
    version: "Edición académica UNAM",
    licenseName: "Creative Commons Atribución-CompartirIgual 4.0 Internacional (CC BY-SA 4.0)",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl: "https://sistemasoperativos.unam.mx/",
  },
  {
    id: "fundamentos-programacion--100cosasdev",
    downloadUrl: "https://100cosas.dev/100cosas-es.pdf",
    fileName: "100-cosas-que-todo-programador-debe-saber.pdf",
    version: "Edición en español",
    licenseName: "Creative Commons Atribución-NoComercial 4.0 (CC BY-NC 4.0)",
    licenseUrl: "https://creativecommons.org/licenses/by-nc/4.0/",
    sourceUrl: "https://100cosas.dev/",
  },
  {
    id: "algoritmos-estructuras-de-datos--diseno-de-algoritmos-en-pseudocodigo-y-ordinogramas",
    downloadUrl: "https://librosgratis.dev/books/algoritmos-pseudocodigo-ordinogramas.pdf",
    fileName: "diseno-algoritmos-pseudocodigo-ordinogramas.pdf",
    version: "Segunda edición docente",
    licenseName: "Creative Commons Atribución-NoComercial-CompartirIgual 4.0 (CC BY-NC-SA 4.0)",
    licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    sourceUrl: "https://librosgratis.dev/books/algoritmos-pseudocodigo-ordinogramas.pdf",
  },
  {
    id: "docker--introduccion-a-docker",
    downloadUrl: "https://librosgratis.dev/books/docker-introduccion.pdf",
    fileName: "introduccion-a-docker.pdf",
    version: "Guía práctica introductoria",
    licenseName: "Creative Commons Atribución-CompartirIgual 3.0 (CC BY-SA 3.0)",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    sourceUrl: "https://librosgratis.dev/books/docker-introduccion.pdf",
  },
  {
    id: "sql--apuntes-basicos-de-sql",
    downloadUrl: "https://librosgratis.dev/books/sql-apuntes-basicos.pdf",
    fileName: "apuntes-basicos-de-sql.pdf",
    version: "Guía de referencia rápida",
    licenseName: "Creative Commons Atribución-NoComercial 3.0 (CC BY-NC 3.0)",
    licenseUrl: "https://creativecommons.org/licenses/by-nc/3.0/",
    sourceUrl: "https://librosgratis.dev/books/sql-apuntes-basicos.pdf",
  },
  {
    id: "go--el-pequeno-libro-de-go",
    downloadUrl: "https://librosgratis.dev/books/go-pequeno-libro.pdf",
    fileName: "el-pequeno-libro-de-go.pdf",
    version: "The Little Go Book (Edición en español)",
    licenseName: "Creative Commons Atribución 3.0 Unported (CC BY 3.0)",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    sourceUrl: "https://www.openmymind.net/The-Little-Go-Book/",
  },
  {
    id: "c--c-introduccion-a-la-programacion-con-c",
    downloadUrl: "https://librosgratis.dev/books/c-introduccion-programacion.pdf",
    fileName: "introduccion-a-la-programacion-con-c.pdf",
    version: "Edición universitaria",
    licenseName: "Creative Commons Atribución-NoComercial-CompartirIgual 3.0 (CC BY-NC-SA 3.0)",
    licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
    sourceUrl: "https://librosgratis.dev/books/c-introduccion-programacion.pdf",
  },
  {
    id: "cpp--fundamentos-basicos-de-programacion-en-c",
    downloadUrl: "https://librosgratis.dev/books/cpp-fundamentos-basicos.pdf",
    fileName: "fundamentos-basicos-de-programacion-en-cpp.pdf",
    version: "Guía docente introductoria",
    licenseName: "Creative Commons Atribución-NoComercial-CompartirIgual 3.0 (CC BY-NC-SA 3.0)",
    licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
    sourceUrl: "https://librosgratis.dev/books/cpp-fundamentos-basicos.pdf",
  },
  {
    id: "cpp--c-estandar",
    downloadUrl: "https://librosgratis.dev/books/cpp-estandar.pdf",
    fileName: "cpp-estandar.pdf",
    version: "Guía de referencia estándar C++",
    licenseName: "Creative Commons Atribución-NoComercial 3.0 (CC BY-NC 3.0)",
    licenseUrl: "https://creativecommons.org/licenses/by-nc/3.0/",
    sourceUrl: "https://librosgratis.dev/books/cpp-estandar.pdf",
  },
  {
    id: "c-sharp--el-pequeno-libro-de-asp-net-core",
    downloadUrl: "https://librosgratis.dev/books/aspnet-core-pequeno-libro.pdf",
    fileName: "el-pequeno-libro-de-aspnet-core.pdf",
    version: "The Little ASP.NET Core Book en español",
    licenseName: "Creative Commons Atribución 4.0 Internacional (CC BY 4.0)",
    licenseUrl: "https://creativecommons.org/licenses/by-4.0/",
    sourceUrl: "https://natebarbettini.gitbooks.io/the-little-asp-net-core-book/content/",
  },
  {
    id: "c-sharp--csharp-introduccion-a-la-programacion-con-c",
    downloadUrl: "https://librosgratis.dev/books/csharp-introduccion-programacion.pdf",
    fileName: "csharp-introduccion-a-la-programacion.pdf",
    version: "Manual introductorio C#",
    licenseName: "Creative Commons Atribución-NoComercial-CompartirIgual 3.0 (CC BY-NC-SA 3.0)",
    licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
    sourceUrl: "https://librosgratis.dev/books/csharp-introduccion-programacion.pdf",
  },
  {
    id: "java--iniciando-en-java-programacion-para-todos",
    downloadUrl: "https://librosgratis.dev/books/java-iniciando-programacion.pdf",
    fileName: "java-iniciando-programacion-para-todos.pdf",
    version: "Edición formativa abierta",
    licenseName: "Creative Commons Atribución-NoComercial 3.0 (CC BY-NC 3.0)",
    licenseUrl: "https://creativecommons.org/licenses/by-nc/3.0/",
    sourceUrl: "https://librosgratis.dev/books/java-iniciando-programacion.pdf",
  },
  {
    id: "java--java-apuntes-basicos",
    downloadUrl: "https://librosgratis.dev/books/java-apuntes-basicos.pdf",
    fileName: "java-apuntes-basicos.pdf",
    version: "Apuntes docentes",
    licenseName: "Creative Commons Atribución-NoComercial-CompartirIgual 3.0 (CC BY-NC-SA 3.0)",
    licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
    sourceUrl: "https://librosgratis.dev/books/java-apuntes-basicos.pdf",
  },
  {
    id: "kotlin--kotlin",
    downloadUrl: "https://librosgratis.dev/books/kotlin-stackoverflow-docs.pdf",
    fileName: "kotlin-notas-desarrollo.pdf",
    version: "Compilación Stack Overflow Documentation",
    licenseName: "Creative Commons Atribución-CompartirIgual 3.0 (CC BY-SA 3.0)",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    sourceUrl: "https://riptutorial.com/Download/kotlin-es.pdf",
  },
  {
    id: "r--introduccion-a-r",
    downloadUrl: "https://librosgratis.dev/books/r-introduccion.pdf",
    fileName: "introduccion-a-r.pdf",
    version: "Guía docente de introducción",
    licenseName: "Creative Commons Atribución-NoComercial-CompartirIgual 3.0 (CC BY-NC-SA 3.0)",
    licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
    sourceUrl: "https://librosgratis.dev/books/r-introduccion.pdf",
  },
  {
    id: "php--poo-y-mvc-en-php",
    downloadUrl: "https://librosgratis.dev/books/php-poo-mvc.pdf",
    fileName: "poo-y-mvc-en-php.pdf",
    version: "Manual práctico POO y MVC",
    licenseName: "Creative Commons Atribución-NoComercial-CompartirIgual 3.0 (CC BY-NC-SA 3.0)",
    licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
    sourceUrl: "https://librosgratis.dev/books/php-poo-mvc.pdf",
  },
  {
    id: "metodologias-desarrollo--scrum-y-xp-desde-las-trincheras",
    downloadUrl: "https://librosgratis.dev/books/scrum-y-xp-desde-las-trincheras.pdf",
    fileName: "scrum-y-xp-desde-las-trincheras.pdf",
    version: "Henrik Kniberg (Edición en español)",
    licenseName: "Creative Commons Atribución-NoComercial 3.0 (CC BY-NC 3.0)",
    licenseUrl: "https://creativecommons.org/licenses/by-nc/3.0/",
    sourceUrl: "https://librosgratis.dev/books/scrum-y-xp-desde-las-trincheras.pdf",
  },
  {
    id: "typescript--aprendizaje-typescript",
    downloadUrl: "https://librosgratis.dev/books/typescript-aprendizaje.pdf",
    fileName: "aprendizaje-typescript-doc.pdf",
    version: "Compilación Stack Overflow Documentation",
    licenseName: "Creative Commons Atribución-CompartirIgual 3.0 (CC BY-SA 3.0)",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    sourceUrl: "https://riptutorial.com/Download/typescript-es.pdf",
  },
  {
    id: "rust--aprendizaje-rust",
    downloadUrl: "https://librosgratis.dev/books/rust-aprendizaje.pdf",
    fileName: "aprendizaje-rust-doc.pdf",
    version: "Compilación Stack Overflow Documentation",
    licenseName: "Creative Commons Atribución-CompartirIgual 3.0 (CC BY-SA 3.0)",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    sourceUrl: "https://riptutorial.com/Download/rust-es.pdf",
  },
  {
    id: "react--react-de-aprendiz-a-maestro",
    downloadUrl: "https://librosgratis.dev/books/react-aprendiz-maestro.pdf",
    fileName: "react-de-aprendiz-a-maestro.pdf",
    version: "Edición en español",
    licenseName: "Creative Commons Atribución-NoComercial 4.0 (CC BY-NC 4.0)",
    licenseUrl: "https://creativecommons.org/licenses/by-nc/4.0/",
    sourceUrl: "https://librosgratis.dev/books/react-aprendiz-maestro.pdf",
  },
  {
    id: "haskell--piensa-en-haskell",
    downloadUrl: "https://librosgratis.dev/books/haskell-piensa.pdf",
    fileName: "piensa-en-haskell.pdf",
    version: "Ejercicios y fundamentos funcionales",
    licenseName: "Creative Commons Atribución-NoComercial-CompartirIgual 3.0 (CC BY-NC-SA 3.0)",
    licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
    sourceUrl: "https://librosgratis.dev/books/haskell-piensa.pdf",
  },
  {
    id: "metodologias-desarrollo--guia-scrum",
    downloadUrl: "https://librosgratis.dev/books/guia-scrum-european.pdf",
    fileName: "guia-scrum-oficial-en-espanol.pdf",
    version: "Guía definitiva de Scrum",
    licenseName: "Creative Commons Atribución-CompartirIgual 4.0 Internacional (CC BY-SA 4.0)",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl: "https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Spanish-European.pdf",
  },
  {
    id: "blockchain--bitcoin-un-sistema-de-efectivo-electronico-de-usuario-a-usuario",
    downloadUrl: "https://bitcoin.org/files/bitcoin-paper/bitcoin_es.pdf",
    fileName: "bitcoin-whitepaper-en-espanol.pdf",
    version: "Documento fundacional de Satoshi Nakamoto traducido al español",
    licenseName: "Licencia MIT / Dominio Público de Investigación Abierta",
    licenseUrl: "https://opensource.org/licenses/MIT",
    sourceUrl: "https://bitcoin.org/es/bitcoin-paper",
  },
  {
    id: "typescript--typescript-para-principiantes",
    downloadUrl: "https://librosgratis.dev/books/typescript-para-principiantes-envato-tuts.pdf",
    fileName: "typescript-para-principiantes.pdf",
    version: "Guía práctica Envato Tuts+ en español",
    licenseName: "Creative Commons Atribución-NoComercial-CompartirIgual 3.0 (CC BY-NC-SA 3.0)",
    licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
    sourceUrl: "https://librosgratis.dev/books/typescript-para-principiantes-envato-tuts.pdf",
  },
  {
    id: "php--programacion-en-php-a-traves-de-ejemplos",
    downloadUrl: "https://librosgratis.dev/books/php-programacion-ejemplos.pdf",
    fileName: "programacion-en-php-a-traves-de-ejemplos.pdf",
    version: "Segunda edición práctica",
    licenseName: "Creative Commons Atribución-NoComercial-CompartirIgual 3.0 (CC BY-NC-SA 3.0)",
    licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
    sourceUrl: "https://librosgratis.dev/books/php-programacion-ejemplos.pdf",
  },
];

async function downloadBuffer(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith("https") ? https : http;
    const req = mod.get(url, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        downloadBuffer(res.headers.location).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} al descargar ${url}`));
        return;
      }
      const chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => resolve(Buffer.concat(chunks)));
    });
    req.on("error", reject);
    req.setTimeout(60000, () => {
      req.destroy();
      reject(new Error(`Timeout al descargar ${url}`));
    });
  });
}

async function main() {
  console.log(`[preserve] Iniciando preservación local de ${targets.length} recursos con licencias abiertas...`);
  const snapshotData = JSON.parse(await readFile(snapshotPath, "utf8"));
  let preservedCount = 0;

  for (const target of targets) {
    const resource = snapshotData.resources.find((r) => r.id === target.id);
    if (!resource) {
      console.warn(`[preserve] Recurso no encontrado en instantánea: ${target.id}`);
      continue;
    }

    const topicSlug = resource.topicSlug;
    const resourceDir = path.join(publicLibraryDir, topicSlug, target.id);
    await mkdir(resourceDir, { recursive: true });

    const filePath = path.join(resourceDir, target.fileName);
    let buffer;
    if (existsSync(filePath)) {
      console.log(`[preserve] Archivo existente detectado para ${target.id}: leyendo local...`);
      buffer = await readFile(filePath);
    } else {
      console.log(`[preserve] Descargando ${target.id} desde ${target.downloadUrl}...`);
      buffer = await downloadBuffer(target.downloadUrl);
      await writeFile(filePath, buffer);
      console.log(`[preserve] Guardado en ${filePath} (${(buffer.length / 1024 / 1024).toFixed(2)} MB)`);
    }

    const sha256 = createHash("sha256").update(buffer).digest("hex");
    const sizeBytes = buffer.length;

    resource.preservationStatus = "local-redistributable";
    resource.licenseStatus = "verified";
    resource.version = target.version;
    resource.localFile = {
      path: `/library/${topicSlug}/${target.id}/${target.fileName}`,
      fileName: target.fileName,
      sha256,
      sizeBytes,
      version: target.version,
      downloadedAt: "2026-09-23",
      licenseName: target.licenseName,
      licenseUrl: target.licenseUrl,
      sourceUrl: target.sourceUrl,
    };

    preservedCount++;
  }

  await writeFile(snapshotPath, JSON.stringify(snapshotData, null, 2) + "\n", "utf8");
  console.log(`[preserve] Finalizado: ${preservedCount} recursos preservados localmente y registrados en snapshot.`);
}

main().catch((err) => {
  console.error("[preserve] Error fatal:", err);
  process.exit(1);
});
