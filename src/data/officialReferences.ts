import type { StudyConcept } from "./conceptTypes";
import { collectionManifest } from "./collectionManifest";

export type OfficialReferenceKind = "standard" | "specification" | "official-docs" | "official-api" | "primary-manual" | "archival-primary";
export type OfficialReferenceStatus = "active" | "legacy" | "historical";

export type OfficialReference = {
  id: string;
  label: string;
  href: string;
  authority: string;
  kind: OfficialReferenceKind;
  version: string;
  status: OfficialReferenceStatus;
  verifiedAt: string;
  coverage: string;
  keywords: readonly string[];
};

type CollectionReferenceProfile = {
  collectionId: string;
  sourceIds: readonly string[];
  defaultIds: readonly string[];
};

const verifiedAt = "2026-08-21";
const r = (
  id: string,
  label: string,
  href: string,
  authority: string,
  kind: OfficialReferenceKind,
  version: string,
  coverage: string,
  keywords: readonly string[],
  status: OfficialReferenceStatus = "active",
): OfficialReference => ({ id, label, href, authority, kind, version, status, verifiedAt, coverage, keywords });

const referenceList: readonly OfficialReference[] = [
  r("ecma-262", "ECMAScript 2026 Language Specification", "https://tc39.es/ecma262/2026/multipage/", "Ecma International / TC39", "standard", "ECMA-262, 17.ª edición (2026)", "Lenguaje, tipos, objetos, funciones, colecciones, módulos, promesas y memoria.", ["javascript", "tipo", "objeto", "función", "array", "map", "set", "módulo", "promise", "memoria", "proxy", "iterator"]),
  r("ecma-402", "ECMA-402: Internationalization API", "https://ecma-international.org/publications-and-standards/standards/ecma-402/", "Ecma International / TC39-TG2", "standard", "13.ª edición (2026)", "Texto, locale, fechas, números y segmentación internacionalizada.", ["intl", "internacional", "locale", "fecha", "tiempo", "número", "texto", "segment"]),
  r("html-event-loops", "HTML Living Standard: Event loops", "https://html.spec.whatwg.org/multipage/webappapis.html#event-loops", "WHATWG", "specification", "Living Standard", "Event loop, tareas, microtareas y actualización del render.", ["event loop", "microtask", "tarea", "asincron", "runtime", "timer", "cola"]),

  r("ts-handbook", "TypeScript Handbook", "https://www.typescriptlang.org/docs/handbook/intro.html", "Microsoft / TypeScript", "official-docs", "TypeScript 7.x", "Sistema de tipos, narrowing, funciones, objetos, genéricos y módulos.", ["tipo", "narrow", "función", "objeto", "generic", "genéric", "módulo", "clase", "interface"]),
  r("tsconfig-reference", "TSConfig Reference", "https://www.typescriptlang.org/tsconfig/", "Microsoft / TypeScript", "official-api", "TypeScript 7.x", "Opciones del compilador, emisión, resolución y producción.", ["tsconfig", "compiler", "compil", "emit", "target", "module", "strict", "build", "producción"]),
  r("ts-architecture", "TypeScript 7 native compiler", "https://github.com/microsoft/typescript-go", "Microsoft / TypeScript", "primary-manual", "TypeScript 7.0 estable", "Compilador y servidor de lenguaje nativos, arquitectura, compatibilidad y rendimiento.", ["parser", "binder", "checker", "ast", "compilador", "arquitectura", "intern", "rendimiento"]),

  r("python-beginners", "Beginner's Guide for Non-Programmers", "https://wiki.python.org/moin/BeginnersGuide/NonProgrammers", "Python Software Foundation / Python Wiki", "official-docs", "Guía vigente (2026)", "Primeros pasos, instalación y rutas de aprendizaje para personas sin experiencia previa en programación.", ["principiante", "primer programa", "instal", "introducción", "fundamento", "aprender", "no programador"]),
  r("python-tutorial", "The Python Tutorial", "https://docs.python.org/3.14/tutorial/", "Python Software Foundation", "official-docs", "Python 3.14.7", "Tutorial progresivo del lenguaje: control de flujo, funciones, estructuras de datos, módulos, clases, errores y entorno virtual.", ["sintaxis", "variable", "control", "flujo", "función", "lista", "diccionario", "módulo", "clase", "excepción", "entorno virtual"]),
  r("python-language-reference", "Python Language Reference", "https://docs.python.org/3.14/reference/", "Python Software Foundation", "specification", "Python 3.14.7", "Gramática y semántica normativa de expresiones, sentencias, modelos de datos, importación y ejecución.", ["gramática", "semántica", "expresión", "sentencia", "modelo de datos", "scope", "ámbito", "import", "ejecución", "descriptor", "metaclase"]),
  r("python-stdlib", "Python Standard Library", "https://docs.python.org/3.14/library/", "Python Software Foundation", "official-api", "Python 3.14.7", "Referencia de tipos, funciones y módulos incluidos en la biblioteca estándar.", ["biblioteca estándar", "stdlib", "módulo", "archivo", "json", "fecha", "ruta", "sistema", "logging", "colección"]),
  r("python-howtos", "Python HOWTOs", "https://docs.python.org/3.14/howto/", "Python Software Foundation", "official-docs", "Python 3.14.7", "Guías oficiales orientadas a tareas sobre descriptores, logging, regex, sockets, Unicode, free-threading y más.", ["howto", "guía", "descriptor", "logging", "regex", "socket", "unicode", "instrumentación", "free-threading"]),
  r("python-peps", "Python Enhancement Proposals", "https://peps.python.org/", "Python Software Foundation / Python Steering Council", "specification", "Índice vivo; Python 3.14", "Registro primario de diseño, procesos, estándares y evolución del lenguaje y su ecosistema.", ["pep", "propuesta", "evolución", "diseño", "compatibilidad", "deprec", "versión", "gobernanza"]),
  r("pep8", "PEP 8 — Style Guide for Python Code", "https://peps.python.org/pep-0008/", "Python Software Foundation", "specification", "PEP 8 vigente", "Convenciones oficiales de estilo, nombres, formato, imports y legibilidad del código Python.", ["estilo", "pep 8", "pep8", "nombre", "formato", "legibilidad", "convención", "lint"]),
  r("python-devguide", "Python Developer's Guide", "https://devguide.python.org/", "Python Software Foundation / CPython Core Team", "primary-manual", "CPython 3.14 / main (2026)", "Desarrollo de CPython: ciclo de contribución, pruebas, documentación, compilación, internals y mantenimiento.", ["cpython", "contribuir", "compilar", "internals", "intérprete", "bytecode", "ceval", "parser", "desarrollo", "prueba"]),
  r("cpython-source", "CPython source repository", "https://github.com/python/cpython", "Python Software Foundation / CPython Core Team", "primary-manual", "CPython 3.14 / main (2026)", "Implementación de referencia del intérprete, compilador, recolector, módulos y biblioteca estándar.", ["cpython", "código fuente", "intérprete", "compilador", "bytecode", "gc", "recolector", "memoria", "c api", "internals"]),

  r("pypa-guide", "Python Packaging User Guide", "https://packaging.python.org/en/latest/", "Python Packaging Authority (PyPA)", "official-docs", "Guía viva (2026)", "Instalación, entornos, distribución, publicación y gestión moderna de proyectos y dependencias.", ["paquete", "packaging", "pip", "venv", "entorno", "dependencia", "pyproject", "wheel", "publicar", "distribución"]),
  r("pypa-specs", "PyPA Specifications", "https://packaging.python.org/en/latest/specifications/", "Python Packaging Authority (PyPA)", "specification", "Especificaciones vigentes (2026)", "Estándares de interoperabilidad para metadatos, pyproject.toml, wheels, índices, builds y entornos.", ["pyproject", "wheel", "metadata", "metadatos", "índice", "build", "editable", "lock", "instalador", "interoperabilidad"]),
  r("python-typing-spec", "Python Typing Specification", "https://typing.python.org/en/latest/spec/", "Python Typing Council / Python Software Foundation", "specification", "Especificación viva (2026)", "Semántica interoperable de anotaciones, genéricos, protocolos, narrowing, overloads y verificadores estáticos.", ["typing", "tipo", "anotación", "generic", "genéric", "protocol", "narrow", "overload", "type checker", "mypy", "pyright"]),
  r("python-asyncio", "asyncio — Asynchronous I/O", "https://docs.python.org/3.14/library/asyncio.html", "Python Software Foundation", "official-api", "Python 3.14.7", "Event loop, coroutines, tasks, streams, subprocesses, synchronization and structured asynchronous I/O.", ["asyncio", "async", "await", "coroutine", "corutina", "event loop", "task", "stream", "subprocess", "asincron"]),
  r("python-concurrency", "concurrent.futures", "https://docs.python.org/3.14/library/concurrent.futures.html", "Python Software Foundation", "official-api", "Python 3.14.7", "Abstracciones Executor, Future y pools de hilos, procesos e intérpretes para concurrencia y paralelismo.", ["concurrent", "future", "executor", "thread", "hilo", "process", "proceso", "pool", "parallel", "paralel"]),
  r("python-free-threading", "Python support for free threading", "https://docs.python.org/3.14/howto/free-threading-python.html", "Python Software Foundation", "official-docs", "Python 3.14.7; free-threaded build", "Ejecución sin GIL, compatibilidad de extensiones, seguridad de hilos y medición del paralelismo.", ["free-thread", "gil", "hilo", "thread", "paralel", "extensión", "concurr", "cpu"]),
  r("python-unittest", "unittest — Unit testing framework", "https://docs.python.org/3.14/library/unittest.html", "Python Software Foundation", "official-api", "Python 3.14.7", "Casos, suites, fixtures, mocks, assertions, descubrimiento y ejecución de pruebas automatizadas.", ["unittest", "testcase", "prueba", "assert", "fixture", "mock", "suite", "coverage", "tdd"]),
  r("pytest-docs", "pytest documentation", "https://docs.pytest.org/en/stable/", "pytest Development Team", "official-docs", "Documentación estable vigente (2026)", "Pruebas expresivas, fixtures, parametrización, plugins, marcadores, captura y ejecución distribuida.", ["pytest", "fixture", "parametr", "plugin", "marker", "prueba", "assert", "test"]),

  r("django-docs", "Django documentation", "https://docs.djangoproject.com/en/6.0/", "Django Software Foundation", "official-docs", "Django 6.0", "Framework web completo: modelos, ORM, vistas, plantillas, formularios, seguridad, pruebas y despliegue.", ["django", "orm", "modelo", "view", "vista", "template", "form", "middleware", "admin", "migración", "web"]),
  r("flask-docs", "Flask documentation", "https://flask.palletsprojects.com/en/stable/", "Pallets", "official-docs", "Flask 3.1.x", "Framework WSGI, routing, requests, responses, templates, contextos, extensiones, pruebas y despliegue.", ["flask", "wsgi", "route", "routing", "request", "response", "jinja", "context", "blueprint", "web"]),
  r("fastapi-docs", "FastAPI documentation", "https://fastapi.tiangolo.com/", "FastAPI Project", "official-docs", "Documentación vigente (2026)", "APIs tipadas sobre ASGI: validación, OpenAPI, dependencias, autenticación, asincronía, WebSockets y despliegue.", ["fastapi", "asgi", "api", "openapi", "pydantic", "dependencia", "endpoint", "websocket", "autentic", "web"]),
  r("sqlalchemy-docs", "SQLAlchemy 2.0 Documentation", "https://docs.sqlalchemy.org/en/20/", "SQLAlchemy Project", "official-docs", "SQLAlchemy 2.0.x", "SQL toolkit y ORM: engine, Core, sesiones, modelos, relaciones, transacciones, consultas y asincronía.", ["sqlalchemy", "orm", "sql", "database", "base de datos", "engine", "session", "modelo", "relación", "transacción", "query"]),

  r("numpy-docs", "NumPy documentation", "https://numpy.org/doc/stable/", "NumPy Developers / NumFOCUS", "official-docs", "Stable documentation (2026)", "Arrays N-dimensionales, dtypes, broadcasting, ufuncs, álgebra, aleatoriedad, rendimiento y C API.", ["numpy", "ndarray", "array", "dtype", "broadcast", "ufunc", "álgebra", "vector", "matriz", "cálculo"]),
  r("pandas-docs", "pandas documentation", "https://pandas.pydata.org/docs/", "pandas Development Team / NumFOCUS", "official-docs", "Stable documentation (2026)", "Series, DataFrame, índices, limpieza, joins, agrupación, series temporales, I/O y rendimiento.", ["pandas", "dataframe", "series", "dato", "csv", "excel", "limpieza", "join", "groupby", "índice", "tabular"]),
  r("scipy-docs", "SciPy documentation", "https://docs.scipy.org/doc/scipy/", "SciPy Developers / NumFOCUS", "official-docs", "Stable documentation (2026)", "Algoritmos científicos para optimización, integración, señales, estadística, álgebra y cálculo numérico.", ["scipy", "científico", "optimización", "integración", "señal", "estadística", "álgebra", "numérico"]),
  r("jupyter-docs", "Project Jupyter documentation", "https://docs.jupyter.org/en/latest/", "Project Jupyter / NumFOCUS", "official-docs", "Documentación vigente (2026)", "Notebooks, kernels, JupyterLab, archivos .ipynb, ejecución interactiva, extensiones y despliegue.", ["jupyter", "notebook", "cuaderno", "kernel", "jupyterlab", "ipynb", "celda", "interactivo"]),
  r("sklearn-docs", "scikit-learn User Guide", "https://scikit-learn.org/stable/user_guide.html", "scikit-learn Developers", "official-docs", "Stable documentation (2026)", "Aprendizaje supervisado y no supervisado, pipelines, preprocesamiento, selección, evaluación y persistencia.", ["scikit", "sklearn", "machine learning", "aprendizaje", "modelo", "pipeline", "clasificación", "regresión", "clustering", "métrica"]),
  r("pytorch-docs", "PyTorch documentation", "https://docs.pytorch.org/docs/stable/", "PyTorch Foundation / Linux Foundation", "official-docs", "Stable documentation (2026)", "Tensores, autograd, módulos, optimización, datasets, dispositivos, compilación y entrenamiento distribuido.", ["pytorch", "torch", "tensor", "autograd", "red neuronal", "gpu", "cuda", "dataset", "entrenamiento", "deep learning"]),
  r("tensorflow-python", "TensorFlow Python API", "https://www.tensorflow.org/api_docs/python", "Google / TensorFlow", "official-api", "API estable vigente (2026)", "Tensores, Keras, autodiferenciación, datos, entrenamiento, aceleradores, guardado y serving.", ["tensorflow", "keras", "tensor", "gradient", "autodifer", "gpu", "tpu", "dataset", "entrenamiento", "serving"]),
  r("opencv-python", "OpenCV-Python Tutorials", "https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html", "OpenCV Project", "official-docs", "OpenCV 4.x", "Visión artificial con Python: imágenes, video, geometría, features, calibración, ML y procesamiento.", ["opencv", "cv2", "visión", "imagen", "video", "cámara", "feature", "calibración", "detección", "procesamiento"]),

  r("mediapipe-release", "MediaPipe v1.0.0 release", "https://github.com/google-ai-edge/mediapipe/releases/tag/v1.0.0", "Google AI Edge", "primary-manual", "MediaPipe 1.0.0 (2026-07-28)", "Publicación primaria de la línea 1.x, cambios del framework y contexto de las APIs MediaPipe.", ["mediapipe", "1.0", "release", "versión", "sdk", "compatibilidad"]),
  r("mediapipe-pypi", "mediapipe 1.0.1 on PyPI", "https://pypi.org/project/mediapipe/1.0.1/", "Google AI Edge / Python Packaging Index", "official-api", "MediaPipe 1.0.1 (2026-08-14)", "Distribución oficial vigente para Python, wheels publicados, plataformas, requisitos y metadatos verificables del paquete.", ["mediapipe", "1.0.1", "pypi", "wheel", "paquete", "plataforma", "instal", "distribución"]),
  r("mediapipe-python-setup", "MediaPipe Tasks: Setup guide for Python", "https://developers.google.com/edge/mediapipe/solutions/setup_python", "Google AI Edge", "official-docs", "Actualizada 2026-08-17; Python 3.9+", "Instalación del paquete mediapipe, requisitos de Python y pip, modelos, empaquetado y preparación del entorno.", ["mediapipe", "instal", "setup", "pip", "requisito", "modelo", "entorno", "python 3.9", "pyinstaller"]),
  r("mediapipe-python-api", "MediaPipe Python API", "https://ai.google.dev/edge/api/mediapipe/python/mp", "Google AI Edge", "official-api", "Referencia publicada: 0.10.35", "Referencia del módulo Python de MediaPipe; se registra por separado de la versión 1.0.1 distribuida porque la página oficial aún no refleja la misma versión.", ["mediapipe", "framework", "image", "imagen", "tasks", "solution", "api", "módulo"]),
  r("mediapipe-tasks-api", "MediaPipe Tasks Python API", "https://developers.google.com/edge/api/mediapipe/python/mp/tasks", "Google AI Edge", "official-api", "Referencia oficial vigente (2026)", "API Python de MediaPipe Tasks para visión, texto y audio, con opciones base y resultados tipados.", ["mediapipe", "tasks", "vision", "visión", "audio", "text", "texto", "baseoptions", "api"]),
  r("mediapipe-gesture", "Gesture Recognizer task for Python", "https://developers.google.com/edge/mediapipe/solutions/vision/gesture_recognizer/python", "Google AI Edge", "official-docs", "Guía oficial vigente (2026)", "Caso oficial de una tarea visual en modos IMAGE, VIDEO y LIVE_STREAM, timestamps, callbacks y resultados.", ["mediapipe", "gesto", "gesture", "live stream", "imagen", "video", "callback", "timestamp", "cámara", "tiempo real"]),

  r("micropython-docs", "MicroPython documentation", "https://docs.micropython.org/en/latest/", "MicroPython Project", "official-docs", "Latest documentation (2026)", "Python para microcontroladores: lenguaje, machine, hardware, REPL, memoria, rendimiento, red y portabilidad.", ["micropython", "microcontrol", "embedded", "machine", "gpio", "repl", "hardware", "memoria", "firmware", "iot"]),
  r("pygame-docs", "pygame documentation", "https://www.pygame.org/docs/", "pygame Project", "official-api", "pygame 2.x", "Bucle de juego, ventanas, eventos, superficies, sprites, audio, tiempo, entrada y gráficos 2D.", ["pygame", "juego", "game", "sprite", "evento", "surface", "audio", "gráfico", "bucle", "teclado"]),
  r("tkinter-docs", "tkinter — Python interface to Tcl/Tk", "https://docs.python.org/3.14/library/tkinter.html", "Python Software Foundation", "official-api", "Python 3.14.7 / Tcl-Tk", "GUI de escritorio con widgets, geometría, eventos, variables, diálogos y bucle principal.", ["tkinter", "tcl", "tk", "gui", "widget", "ventana", "evento", "desktop", "interfaz", "mainloop"]),
  r("python-ssl", "ssl — TLS/SSL wrapper for socket objects", "https://docs.python.org/3.14/library/ssl.html", "Python Software Foundation", "official-api", "Python 3.14.7 / OpenSSL", "Contextos TLS, certificados, validación, hostname, sockets protegidos, versiones y suites criptográficas.", ["ssl", "tls", "https", "certificado", "openssl", "socket", "cifrado", "hostname", "seguridad", "context"]),
  r("python-secrets", "secrets — Generate secure random numbers", "https://docs.python.org/3.14/library/secrets.html", "Python Software Foundation", "official-api", "Python 3.14.7", "Aleatoriedad criptográfica, tokens, comparaciones seguras y prácticas para contraseñas y autenticación.", ["secrets", "seguridad", "token", "aleatorio", "criptográf", "contraseña", "autentic", "compare_digest"]),

  r("xml10", "XML 1.0 Fifth Edition", "https://www.w3.org/TR/xml/", "W3C XML Core Working Group", "standard", "W3C Recommendation, Fifth Edition", "Sintaxis XML, documentos bien formados, DTD, entidades, caracteres, atributos y comportamiento del procesador.", ["xml", "documento", "bien formado", "elemento", "atributo", "doctype", "entidad", "cdata", "prólogo", "encoding", "raíz", "whitespace"]),
  r("xml-names10", "Namespaces in XML 1.0 Third Edition", "https://www.w3.org/TR/xml-names/", "W3C XML Core Working Group", "standard", "W3C Recommendation, Third Edition", "URIs de namespace, QNames, prefijos, alcance, cualificación y nombres expandidos.", ["namespace", "uri", "qname", "prefijo", "nombre expandido", "cualificación", "targetnamespace"]),
  r("xml-infoset", "XML Information Set Second Edition", "https://www.w3.org/TR/xml-infoset/", "W3C", "standard", "W3C Recommendation, Second Edition", "Modelo lógico de information items y propiedades expuestas por procesadores XML.", ["infoset", "information item", "árbol lógico", "modelo de información", "serializado", "psvi"]),
  r("xml-base", "XML Base Second Edition", "https://www.w3.org/TR/xmlbase/", "W3C", "standard", "W3C Recommendation, Second Edition", "Resolución de URIs base mediante xml:base.", ["xml:base", "base uri", "resolución", "uri relativa"]),
  r("xinclude11", "XInclude 1.1", "https://www.w3.org/TR/xinclude-11/", "W3C XML Core Working Group", "standard", "W3C Recommendation 2014", "Inclusión de recursos XML o texto, procesamiento y fallback.", ["xinclude", "include", "fallback", "resolver", "inclusión"]),
  r("xsd10-structures", "XML Schema Part 1: Structures Second Edition", "https://www.w3.org/TR/xmlschema-1/", "W3C XML Schema Working Group", "standard", "XSD 1.0, Second Edition", "Compatibilidad XSD 1.0: schemas, declaraciones, tipos complejos, identidad y assessment.", ["xsd 1.0", "schema", "declaración", "complextype", "key", "assessment"]),
  r("xsd11-structures", "XSD 1.1 Part 1: Structures", "https://www.w3.org/TR/xmlschema11-1/", "W3C XML Schema Working Group", "standard", "XSD 1.1", "Elementos, tipos complejos, modelos de contenido, composición, identidad, assertions, alternativas y PSVI.", ["xsd", "schema", "complextype", "sequence", "choice", "all", "occurs", "key", "keyref", "assert", "psvi", "derivación", "nillable", "targetnamespace", "substitution"]),
  r("xsd11-datatypes", "XSD 1.1 Part 2: Datatypes", "https://www.w3.org/TR/xmlschema11-2/", "W3C XML Schema Working Group", "standard", "XSD 1.1", "Tipos simples, espacios léxicos y de valores, facets, fechas, números, QNames y binarios.", ["datatype", "tipo simple", "facet", "pattern", "decimal", "datetime", "whitespace", "enumeration", "totaldigits", "fractiondigits", "qname", "base64"]),
  r("xpath31", "XPath 3.1", "https://www.w3.org/TR/xpath-31/", "W3C", "standard", "XPath 3.1", "Secuencias, context item, paths, ejes, node tests, predicados, funciones y namespaces.", ["xpath", "context item", "secuencia", "location path", "eje", "node test", "predicado", "select"]),
  r("xslt30", "XSLT 3.0", "https://www.w3.org/TR/xslt-30/", "W3C", "standard", "XSLT 3.0", "Templates, match patterns, modes, transformación, agrupación, serialización y streaming.", ["xslt", "template", "apply-templates", "match", "mode", "transformación", "streaming", "serialización"]),
  r("xml-c14n11", "Canonical XML 1.1", "https://www.w3.org/TR/xml-c14n11/", "W3C", "standard", "Canonical XML 1.1", "Representación canónica XML para comparación, digest y firmas.", ["canonical xml", "canonicalización", "c14n", "digest", "firma", "octetos"]),
  r("xmldsig11", "XML Signature 1.1", "https://www.w3.org/TR/xmldsig-core1/", "W3C", "standard", "XML Signature 1.1", "Firmas XML, referencias, transforms, digest y validación criptográfica.", ["xml signature", "firma", "digest", "referencia", "transform", "canonicalización"]),
  r("xmlenc11", "XML Encryption 1.1", "https://www.w3.org/TR/xmlenc-core1/", "W3C", "standard", "XML Encryption 1.1", "Cifrado de datos, elementos o contenido XML y representación del cipher data.", ["xml encryption", "cifrado", "encrypteddata", "cipher", "seguridad"]),
  r("rfc7303", "RFC 7303: XML Media Types", "https://www.rfc-editor.org/rfc/rfc7303.html", "IETF / RFC Editor", "standard", "RFC 7303", "application/xml, text/xml, sufijo +xml, charset, BOM, URIs base y seguridad.", ["application/xml", "text/xml", "media type", "charset", "bom", "+xml", "content-type", "codificación"]),
  r("owasp-xxe", "OWASP XML External Entity Prevention", "https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html", "OWASP Foundation", "official-docs", "Cheat Sheet vigente (2026)", "Configuración defensiva frente a XXE, entidades externas, DTD y resolvers por plataforma.", ["xxe", "ssrf", "entidad externa", "doctype", "resolver", "billion laughs", "seguridad xml"]),
  r("rfc8259", "RFC 8259: JSON Data Interchange Format", "https://www.rfc-editor.org/rfc/rfc8259.html", "IETF / RFC Editor", "standard", "RFC 8259", "Gramática JSON, valores, Unicode, objetos, arrays, números, strings e interoperabilidad.", ["json", "objeto", "array", "string", "número", "unicode", "duplicado", "null", "parse", "utf-8", "application/json"]),
  r("ecma404", "ECMA-404: The JSON Data Interchange Syntax", "https://ecma-international.org/publications-and-standards/standards/ecma-404/", "Ecma International", "standard", "ECMA-404, 2nd edition", "Sintaxis JSON independiente del lenguaje y sus reglas estructurales.", ["json", "sintaxis", "objeto", "array", "string", "number", "boolean", "null", "gramática"]),
  r("json-schema-core", "JSON Schema Core 2020-12", "https://json-schema.org/draft/2020-12/json-schema-core", "JSON Schema Project", "specification", "Draft 2020-12", "Modelo de evaluación, dialectos, vocabularios, IDs, referencias, anchors y output.", ["json schema", "$schema", "$id", "$ref", "$anchor", "$dynamicanchor", "$dynamicref", "dialecto", "vocabulario", "subschema", "output"]),
  r("json-schema-validation", "JSON Schema Validation 2020-12", "https://json-schema.org/draft/2020-12/json-schema-validation", "JSON Schema Project", "specification", "Draft 2020-12", "Assertions y annotations para tipos, números, strings, objetos, arrays, composición y formatos.", ["json schema", "properties", "required", "items", "unevaluated", "enum", "const", "format", "oneof", "allof", "if", "contains", "patternproperties"]),
  r("rfc6901", "RFC 6901: JSON Pointer", "https://www.rfc-editor.org/rfc/rfc6901.html", "IETF / RFC Editor", "standard", "RFC 6901", "Identificación de ubicaciones dentro de documentos JSON y escaping de tokens.", ["json pointer", "pointer", "~0", "~1", "ubicación", "token", "slash"]),
  r("rfc6902", "RFC 6902: JSON Patch", "https://www.rfc-editor.org/rfc/rfc6902.html", "IETF / RFC Editor", "standard", "RFC 6902", "Operaciones add, remove, replace, move, copy y test, errores y aplicación secuencial.", ["json patch", "patch", "add", "remove", "replace", "move", "copy", "test", "concurrencia", "atómica"]),
  r("rfc7386", "RFC 7386: JSON Merge Patch", "https://www.rfc-editor.org/rfc/rfc7386.html", "IETF / RFC Editor", "standard", "RFC 7386", "Actualización parcial por forma de objeto, eliminación con null y reemplazo de valores.", ["merge patch", "json merge", "null elimina", "actualización parcial", "reemplazo"]),
  r("rfc7464", "RFC 7464: JSON Text Sequences", "https://www.rfc-editor.org/rfc/rfc7464.html", "IETF / RFC Editor", "standard", "RFC 7464", "Framing incremental de textos JSON mediante record separator.", ["json text sequences", "record separator", "streaming json", "secuencia", "framing"]),
  r("rfc7493", "RFC 7493: I-JSON", "https://www.rfc-editor.org/rfc/rfc7493.html", "IETF / RFC Editor", "standard", "RFC 7493", "Perfil restringido de JSON para máxima interoperabilidad.", ["i-json", "interoperabilidad", "ieee 754", "duplicado", "unicode", "perfil"]),
  r("rfc8785", "RFC 8785: JSON Canonicalization Scheme", "https://www.rfc-editor.org/rfc/rfc8785.html", "IETF / RFC Editor", "standard", "RFC 8785", "Serialización determinista JCS, orden de propiedades y representación de primitivas.", ["jcs", "json canonicalization", "canonicalización", "determinista", "digest", "firma"]),
  r("rfc9535", "RFC 9535: JSONPath", "https://www.rfc-editor.org/rfc/rfc9535.html", "IETF / RFC Editor", "standard", "RFC 9535", "Sintaxis y semántica estandarizadas para seleccionar nodos JSON.", ["jsonpath", "consulta", "selector", "nodelist", "segmento", "filter"]),
  r("jsonld11", "JSON-LD 1.1", "https://www.w3.org/TR/json-ld11/", "W3C", "standard", "JSON-LD 1.1", "Contextos, IRIs, expansión, compactación, flattening y framing de datos enlazados.", ["json-ld", "contexto", "iri", "@id", "expansión", "compactación", "framing", "flattening", "datos enlazados"]),

  r("iso-c", "ISO/IEC 9899:2024 — Programming languages C", "https://www.iso.org/standard/82075.html", "ISO/IEC JTC 1/SC 22", "standard", "C23, edición 5 (2024)", "Norma del lenguaje C, semántica, biblioteca y conformidad.", ["c23", "lenguaje", "tipo", "puntero", "memoria", "biblioteca", "undefined", "abi"]),
  r("wg14-c", "WG14 — C language working group", "https://www.open-std.org/jtc1/sc22/wg14/", "ISO/IEC JTC 1/SC 22/WG14", "official-docs", "C23 / trabajo C2y", "Mantenimiento, borradores, defectos y evolución de la norma C.", ["c23", "defecto", "evolución", "draft", "estándar"]),
  r("gcc-c", "GCC: C implementation", "https://gcc.gnu.org/onlinedocs/gcc/C-Implementation.html", "GNU Project", "primary-manual", "GCC current", "Implementación, extensiones, compilación, optimización y diagnósticos de C.", ["gcc", "compil", "link", "optimiz", "warning", "diagnóst", "toolchain"]),
  r("cert-c", "SEI CERT C Coding Standard", "https://wiki.sei.cmu.edu/confluence/display/c", "Carnegie Mellon SEI", "standard", "Edición viva", "Seguridad de memoria, enteros, strings, concurrencia y recursos en C.", ["seguridad", "buffer", "overflow", "entero", "string", "memoria", "concurr", "recurso", "valid"]),

  r("iso-cpp", "ISO/IEC 14882:2024 — Programming languages C++", "https://www.iso.org/standard/83626.html", "ISO/IEC JTC 1/SC 22", "standard", "C++23, edición 7 (2024)", "Norma, evolución y requisitos oficiales del lenguaje y biblioteca C++.", ["c++", "tipo", "template", "concept", "constexpr", "language", "standard"]),
  r("cpp-guidelines", "C++ Core Guidelines", "https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines", "Standard C++ Foundation", "primary-manual", "Edición viva", "RAII, ownership, interfaces, concurrencia, recursos y seguridad.", ["raii", "ownership", "recurso", "memoria", "puntero", "concurr", "thread", "interface", "seguridad"]),
  r("cmake-docs", "CMake Documentation", "https://cmake.org/documentation/", "Kitware / CMake", "official-docs", "CMake current", "Configuración, targets, toolchains, pruebas y builds portables.", ["cmake", "build", "target", "toolchain", "compil", "test", "paquete"]),

  r("csharp-spec", "C# Language Specification", "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/", "Microsoft", "standard", "ECMA-334 + especificación viva", "Semántica del lenguaje, tipos, miembros, expresiones y ejecución.", ["c#", "tipo", "patrón", "objeto", "genéric", "expresión", "memoria"]),
  r("csharp-guide", "C# documentation", "https://learn.microsoft.com/en-us/dotnet/csharp/", "Microsoft", "official-docs", "C# 14 / .NET 10", "Características modernas, LINQ, asincronía, concurrencia y tooling.", ["linq", "async", "await", "task", "concurr", "record", "pattern", "nullable"]),
  r("csharplang", "C# language design", "https://github.com/dotnet/csharplang", ".NET Foundation / Microsoft", "primary-manual", "Diseño activo", "Propuestas, especificaciones y decisiones de diseño del lenguaje.", ["diseño", "propuesta", "versión", "feature", "evolución"]),

  r("objc-guide", "Programming with Objective-C", "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html", "Apple", "archival-primary", "Archivo oficial", "Mensajería, objetos, propiedades, protocolos, categorías y Foundation.", ["objective-c", "mensaje", "objeto", "propiedad", "protocolo", "categor", "foundation"], "legacy"),
  r("objc-runtime", "Objective-C Runtime", "https://developer.apple.com/documentation/objectivec", "Apple", "official-api", "Documentación vigente", "Runtime, clases, selectores, asociaciones e introspección.", ["runtime", "selector", "dispatch", "class", "method", "introspec", "swizz"], "legacy"),
  r("clang-arc", "Clang Automatic Reference Counting", "https://clang.llvm.org/docs/AutomaticReferenceCounting.html", "LLVM Project", "specification", "Clang current", "Semántica ARC, ownership, weak/strong, bridging y bloques.", ["arc", "retain", "release", "weak", "strong", "bridge", "memoria"], "legacy"),

  r("cstar-user", "C* User's Guide 6.0.2", "https://www.sthmuseum.org/downloads/CM5/CM5_CStar_UsersGuide_Version6-0-2.pdf", "Thinking Machines Corporation (archivo STHM)", "archival-primary", "Version 6.0.2", "Lenguaje C* y ejecución data-parallel sobre Connection Machine.", ["c*", "connection machine", "parallel", "domain", "shape", "processor"], "historical"),
  r("cstar-programming", "C* Programming Guide 6.0.2", "https://people.csail.mit.edu/bradley/cm5docs/CStarProgrammingGuide-Version6-0-2.pdf", "Thinking Machines Corporation (archivo MIT)", "archival-primary", "Version 6.0.2", "Patrones, rendimiento, distribución de datos y herramientas de C*.", ["rendimiento", "grid", "comunicación", "distribución", "debug", "compil"], "historical"),

  r("cweb-stanford", "CWEB — Knuth and Levy", "https://cs.stanford.edu/~knuth/cweb.html", "Donald Knuth / Stanford", "primary-manual", "CWEB 4.x", "Sistema de programación literaria, CTANGLE, CWEAVE y distribución.", ["cweb", "literaria", "ctangle", "cweave", "web", "change file", "tex"], "historical"),
  r("cweb-manual", "The CWEB System of Structured Documentation", "https://tug.ctan.org/web/cweb/cwebman.pdf", "Donald Knuth y Silvio Levy / CTAN", "archival-primary", "CWEB 4.12.2 (2025)", "Sintaxis, secciones, macros, índices, tangling y weaving.", ["sección", "macro", "índice", "document", "tangle", "weave"], "historical"),

  r("cmsis", "Arm CMSIS 6", "https://arm-software.github.io/CMSIS_6/latest/General/index.html", "Arm", "official-api", "CMSIS 6", "Core, drivers, RTOS2, registros, interrupciones y DSP para microcontroladores Arm.", ["registro", "interrup", "nvic", "cmsis", "driver", "microcontrol", "rtos", "dma"]),
  r("freertos", "FreeRTOS documentation", "https://www.freertos.org/Documentation/RTOS_book.html", "FreeRTOS / AWS", "primary-manual", "FreeRTOS current", "Tasks, queues, interrupts, scheduling, synchronization and production use.", ["task", "queue", "rtos", "scheduler", "mutex", "semaphore", "interrupt", "watchdog"]),

  r("vb-guide", "Visual Basic documentation", "https://learn.microsoft.com/en-us/dotnet/visual-basic/", "Microsoft", "official-docs", "Visual Basic current", "Sintaxis, objetos, eventos, LINQ, asincronía e interoperabilidad .NET.", ["visual basic", "vb", "evento", "linq", "async", "objeto", "interoper"]),
  r("vb-spec", "Visual Basic Language Specification", "https://learn.microsoft.com/en-us/dotnet/visual-basic/reference/language-specification/", "Microsoft", "standard", "Especificación vigente", "Gramática, tipos, expresiones, declaraciones y semántica de Visual Basic.", ["sintaxis", "tipo", "expresión", "declaración", "lenguaje"]),
  r("winforms", "Windows Forms documentation", "https://learn.microsoft.com/en-us/dotnet/desktop/winforms/", "Microsoft", "official-docs", ".NET 10", "Controles, eventos, data binding, accesibilidad y aplicaciones Windows.", ["winforms", "form", "control", "evento", "windows", "binding", "ui"]),

  r("wcag22", "Web Content Accessibility Guidelines 2.2", "https://www.w3.org/TR/WCAG22/", "W3C", "standard", "WCAG 2.2 Recommendation", "Perceptible, operable, understandable and robust accessible experiences.", ["accesib", "contraste", "teclado", "foco", "error", "percept", "operable"]),
  r("wai-aria", "WAI-ARIA 1.2", "https://www.w3.org/TR/wai-aria-1.2/", "W3C", "standard", "WAI-ARIA 1.2", "Roles, estados y propiedades para semántica accesible.", ["aria", "role", "semánt", "lector", "estado", "propiedad"]),
  r("wai-usability", "Accessibility, Usability and Inclusion", "https://www.w3.org/WAI/fundamentals/accessibility-usability-inclusion/", "W3C WAI", "official-docs", "Guía vigente", "Relación entre accesibilidad, usabilidad, investigación e inclusión.", ["ux", "usabilidad", "inclusión", "investigación", "usuario", "prueba"]),

  r("html-standard", "HTML Living Standard", "https://html.spec.whatwg.org/", "WHATWG", "specification", "Living Standard", "Elementos, semántica, formularios, DOM, carga y APIs de HTML.", ["html", "semánt", "elemento", "form", "dom", "document", "imagen", "link"]),
  r("css-snapshot", "CSS Snapshot 2026", "https://www.w3.org/TR/css-2026/", "W3C CSS Working Group", "official-docs", "CSS Snapshot 2026", "Mapa oficial de módulos CSS, niveles de estabilidad, cascade, layout y render.", ["css", "cascade", "selector", "layout", "grid", "flex", "color", "responsive", "container"]),

  r("bootstrap-docs", "Bootstrap 5.3 Documentation", "https://getbootstrap.com/docs/5.3/getting-started/introduction/", "Bootstrap Team", "official-docs", "5.3.8", "Grid, utilities, components, Sass, JavaScript plugins and customization.", ["bootstrap", "grid", "utility", "componente", "sass", "plugin", "token", "responsive"]),
  r("bootstrap-a11y", "Bootstrap Accessibility", "https://getbootstrap.com/docs/5.3/getting-started/accessibility/", "Bootstrap Team", "official-docs", "5.3.x", "Limitaciones, color, contenido interactivo, teclado y ARIA.", ["accesib", "aria", "teclado", "color", "foco", "contraste"]),

  r("angularjs-guide", "AngularJS Developer Guide", "https://docs.angularjs.org/guide", "Google / AngularJS", "archival-primary", "1.8.x final", "Modules, scopes, digest, directives, services, routing and tests.", ["angularjs", "scope", "digest", "directive", "service", "module", "template", "controller"], "legacy"),
  r("angularjs-status", "AngularJS Version Support Status", "https://docs.angularjs.org/misc/version-support-status", "Google / AngularJS", "official-docs", "Support ended January 2022", "Estado de fin de soporte y contexto para mantenimiento o migración.", ["soporte", "legacy", "migración", "fin", "mantenimiento"], "legacy"),

  r("react-reference", "React API Reference", "https://react.dev/reference/react", "React Team / React Foundation", "official-api", "React 19.2", "Components, hooks, APIs, effects, transitions and server features.", ["react", "hook", "component", "effect", "state", "transition", "memo", "context", "action"]),
  r("react-learn", "React Learn", "https://react.dev/learn", "React Team / React Foundation", "official-docs", "React 19.2", "Modelo declarativo, render, estado, eventos, reducers y sincronización.", ["render", "reconcil", "evento", "estado", "reducer", "form", "sincron", "declar"]),
  r("react-dom", "React DOM APIs", "https://react.dev/reference/react-dom", "React Team / React Foundation", "official-api", "React DOM 19.2", "DOM, forms, resource loading, hydration and client/server boundaries.", ["dom", "hydrate", "form", "resource", "client", "server", "portal"]),

  r("rn-docs", "React Native Documentation", "https://reactnative.dev/docs/getting-started", "React Native Team / Meta", "official-docs", "React Native 0.86", "Components, APIs, styling, platform integration and application lifecycle.", ["react native", "componente", "layout", "style", "platform", "device", "appstate"]),
  r("rn-architecture", "React Native New Architecture", "https://reactnative.dev/architecture/landing-page", "React Native Team / Meta", "official-docs", "New Architecture current", "Fabric, TurboModules, JSI, rendering and native interoperability.", ["fabric", "turbomodule", "jsi", "architecture", "runtime", "native", "bridge"]),
  r("rn-performance", "React Native Performance Overview", "https://reactnative.dev/docs/performance", "React Native Team / Meta", "official-docs", "Current stable", "Frame budgets, JS/UI threads, lists, images and profiling.", ["performance", "frame", "thread", "list", "image", "profil", "fps"]),

  r("rfc9110", "RFC 9110: HTTP Semantics", "https://www.rfc-editor.org/rfc/rfc9110.html", "IETF", "standard", "STD 97", "HTTP methods, fields, status codes, representations and caching semantics.", ["http", "método", "header", "status", "cache", "uri", "request", "response"]),
  r("rfc9846", "RFC 9846: The Transport Layer Security (TLS) Protocol Version 1.3", "https://www.rfc-editor.org/rfc/rfc9846.html", "IETF", "standard", "RFC 9846 (2026); obsoletes RFC 8446", "TLS 1.3 handshake, record protection, certificates, PSK, 0-RTT, key updates and current security requirements.", ["tls", "ssl", "https", "certificate", "certificado", "cipher", "cifrado", "handshake", "psk", "0-rtt", "seguridad"]),
  r("openapi32", "OpenAPI Specification 3.2.0", "https://spec.openapis.org/oas/v3.2.0.html", "OpenAPI Initiative", "specification", "3.2.0", "HTTP API contracts, schemas, parameters, callbacks, webhooks and security.", ["openapi", "contrato", "schema", "rest", "endpoint", "webhook", "document", "sdk"]),
  r("graphql", "GraphQL Specification", "https://spec.graphql.org/", "GraphQL Foundation", "specification", "Current specification", "Schema, types, operations, validation, execution and introspection.", ["graphql", "query", "mutation", "subscription", "resolver", "schema", "introspection"]),
  r("grpc", "gRPC Documentation", "https://grpc.io/docs/", "Cloud Native Computing Foundation / gRPC", "official-docs", "Current", "Protocol Buffers contracts, RPC modes, deadlines, metadata and streaming.", ["grpc", "protobuf", "rpc", "deadline", "stream", "metadata"]),
  r("websocket-rfc", "RFC 6455: The WebSocket Protocol", "https://www.rfc-editor.org/rfc/rfc6455.html", "IETF", "standard", "RFC 6455", "Handshake, frames, messages, closing and security for WebSockets.", ["websocket", "tiempo real", "frame", "handshake", "socket"]),
  r("asyncapi", "AsyncAPI Specification 3.0.0", "https://www.asyncapi.com/docs/reference/specification/v3.0.0", "AsyncAPI Initiative", "specification", "3.0.0", "Contracts for event-driven APIs, channels, messages, servers and operations.", ["asyncapi", "evento", "message", "channel", "broker", "pub", "sub", "webhook"]),
  r("oauth9700", "RFC 9700: OAuth 2.0 Security Best Current Practice", "https://www.rfc-editor.org/rfc/rfc9700.html", "IETF", "standard", "BCP 240 (2025)", "OAuth threats, PKCE, redirect URIs, tokens and secure authorization.", ["oauth", "auth", "token", "pkce", "seguridad", "autoriz"]),
  r("problem9457", "RFC 9457: Problem Details for HTTP APIs", "https://www.rfc-editor.org/rfc/rfc9457.html", "IETF", "standard", "RFC 9457", "Interoperable machine-readable errors for HTTP APIs.", ["error", "problem", "valid", "status", "exception"]),

  r("otel", "OpenTelemetry Specification", "https://opentelemetry.io/docs/specs/otel/", "OpenTelemetry / CNCF", "specification", "1.59.0", "Traces, metrics, logs, context, resources and telemetry pipelines.", ["trace", "metric", "log", "observab", "span", "telemetr", "diagnóst"]),
  r("node-api", "Node.js API", "https://nodejs.org/api/", "Node.js / OpenJS Foundation", "official-api", "v26 Current; v24 LTS", "Runtime, modules, process, events, buffers, networking and diagnostics.", ["node", "runtime", "process", "module", "event", "buffer", "network", "diagnostic"]),
  r("node-event-loop", "Don't block the Event Loop", "https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop", "Node.js / OpenJS Foundation", "official-docs", "Current", "Event loop, worker pool, fairness, latency and blocking work.", ["event loop", "worker pool", "bloque", "latencia", "async", "cpu"]),
  r("node-stream", "Node.js Streams API", "https://nodejs.org/api/stream.html", "Node.js / OpenJS Foundation", "official-api", "Current", "Readable, writable, transform, pipeline, buffering and backpressure.", ["stream", "backpressure", "readable", "writable", "pipeline", "buffer"]),
  r("node-worker", "Node.js Worker Threads", "https://nodejs.org/api/worker_threads.html", "Node.js / OpenJS Foundation", "official-api", "Stable", "Parallel JavaScript, messaging, pools and shared memory.", ["worker", "thread", "parallel", "message", "shared", "atomics"]),
  r("node-packages", "Node.js Packages", "https://nodejs.org/api/packages.html", "Node.js / OpenJS Foundation", "official-api", "Current", "CommonJS, ESM, package exports/imports and package metadata.", ["package", "commonjs", "esm", "módulo", "exports", "import"]),

  r("laravel-release", "Laravel 13 Release Notes", "https://laravel.com/docs/13.x/releases", "Laravel LLC", "official-docs", "Laravel 13", "Requirements, support policy, release changes and upgrade context.", ["laravel", "release", "versión", "php", "soporte"]),
  r("laravel-http", "Laravel Routing and Validation", "https://laravel.com/docs/13.x/validation", "Laravel LLC", "official-docs", "Laravel 13", "Request validation, rules, form requests and error responses.", ["request", "valid", "route", "form", "error", "entrada"]),
  r("laravel-eloquent", "Laravel Eloquent ORM", "https://laravel.com/docs/13.x/eloquent", "Laravel LLC", "official-api", "Laravel 13", "Models, relationships, scopes, events and persistence.", ["eloquent", "model", "relation", "database", "query", "persist"]),
  r("laravel-auth", "Laravel Authorization", "https://laravel.com/docs/13.x/authorization", "Laravel LLC", "official-docs", "Laravel 13", "Gates, policies, abilities and authorization responses.", ["policy", "gate", "authoriz", "permiso", "ability"]),
  r("laravel-queues", "Laravel Queues", "https://laravel.com/docs/13.x/queues", "Laravel LLC", "official-docs", "Laravel 13", "Jobs, workers, retries, failures, batches and production queues.", ["queue", "job", "worker", "retry", "batch", "failed"]),
  r("laravel-events", "Laravel Events", "https://laravel.com/docs/13.x/events", "Laravel LLC", "official-docs", "Laravel 13", "Events, listeners, queued listeners and decoupling.", ["event", "listener", "evento", "dispatch", "cola"]),

  r("n8n-release", "n8n 2.34.5 stable release", "https://github.com/n8n-io/n8n/releases/tag/n8n%402.34.5", "n8n GmbH", "primary-manual", "2.34.5 (2026-08-12)", "Release estable verificada, cambios, artefactos y firma del proyecto.", ["version", "release", "upgrade", "stable", "n8n"]),
  r("n8n-workflows", "n8n Workflows", "https://docs.n8n.io/workflows/", "n8n GmbH", "official-docs", "n8n 2.x", "Nodes, connections, execution, activation and workflow states.", ["workflow", "node", "nodo", "execution", "trigger", "data"]),
  r("n8n-webhook", "n8n Webhook node", "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/", "n8n GmbH", "official-api", "n8n 2.x", "Endpoints, authentication, payloads and webhook responses.", ["webhook", "http", "request", "response", "trigger"]),
  r("n8n-errors", "n8n Error handling", "https://docs.n8n.io/flow-logic/error-handling/", "n8n GmbH", "official-docs", "n8n 2.x", "Error workflows, retries, failures and recovery paths.", ["error", "retry", "reintento", "recovery", "fallo"]),
  r("n8n-credentials", "n8n Credentials", "https://docs.n8n.io/credentials/", "n8n GmbH", "official-docs", "n8n 2.x", "Credentials, OAuth, encryption and controlled access.", ["credential", "secret", "oauth", "auth", "cifrado"]),
  r("n8n-queue", "n8n Queue mode", "https://docs.n8n.io/hosting/scaling/queue-mode/", "n8n GmbH", "official-docs", "n8n 2.x", "Workers, Redis, concurrency and horizontal scaling.", ["queue", "worker", "redis", "scale", "concurr"]),

  r("dotnet-policy", ".NET Support Policy", "https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-core", "Microsoft", "official-docs", ".NET 10 LTS", "Release cadence, patches, LTS and end-of-support dates.", [".net", "support", "versión", "sdk", "lts", "release"]),
  r("dotnet-clr", "Common Language Runtime", "https://learn.microsoft.com/en-us/dotnet/standard/clr", "Microsoft", "official-docs", ".NET 10", "CLR, IL, CTS, metadata, managed execution and interoperability.", ["clr", "il", "jit", "runtime", "metadata", "managed", "interop"]),
  r("dotnet-cli", ".NET CLI", "https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet", "Microsoft", "official-api", "SDK 10.x", "Restore, build, test, publish, tools and workloads.", ["cli", "dotnet", "restore", "build", "test", "publish", "sdk"]),
  r("dotnet-gc", ".NET Garbage Collection fundamentals", "https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals", "Microsoft", "official-docs", ".NET 10", "Generations, managed heap, roots, LOH and collection pauses.", ["gc", "garbage", "heap", "generation", "memory", "memoria", "loh"]),
  r("dotnet-aot", ".NET Native AOT deployment", "https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/", "Microsoft", "official-docs", ".NET 10", "Ahead-of-time compilation, trimming and self-contained binaries.", ["aot", "native", "trim", "publish", "binary", "compil"]),
  r("dotnet-diagnostics", ".NET diagnostics", "https://learn.microsoft.com/en-us/dotnet/core/diagnostics/", "Microsoft", "official-docs", ".NET 10", "Logs, traces, metrics, dumps, counters and diagnostic tools.", ["diagnostic", "trace", "metric", "dump", "counter", "profil"]),

  r("firebase-docs", "Firebase Documentation", "https://firebase.google.com/docs", "Google", "official-docs", "Rolling", "Firebase products, SDKs, architecture and platform operation.", ["firebase", "sdk", "app", "platform", "project"]),
  r("firebase-firestore", "Cloud Firestore", "https://firebase.google.com/docs/firestore", "Google", "official-api", "Current", "Documents, queries, indexes, listeners, offline data and transactions.", ["firestore", "document", "query", "index", "listener", "transaction", "offline"]),
  r("firebase-auth", "Firebase Authentication", "https://firebase.google.com/docs/auth", "Google", "official-docs", "Current", "Identity providers, sessions, tokens and user management.", ["auth", "identity", "token", "session", "user", "provider"]),
  r("firebase-rules", "Firebase Security Rules", "https://firebase.google.com/docs/rules", "Google", "specification", "Rules v2 where applicable", "Declarative authorization, validation, indexes and rule testing.", ["rule", "security", "permission", "valid", "authoriz", "firestore"]),
  r("firebase-functions", "Cloud Functions for Firebase", "https://firebase.google.com/docs/functions", "Google", "official-docs", "2nd generation", "HTTP and event functions, deployment, scaling and retries.", ["function", "event", "trigger", "http", "scale", "retry"]),
  r("firebase-emulator", "Firebase Local Emulator Suite", "https://firebase.google.com/docs/emulator-suite", "Google", "official-docs", "Current", "Integrated local development and testing for Firebase services.", ["emulator", "local", "test", "debug", "integration"]),

  r("scxml", "State Chart XML 1.0", "https://www.w3.org/TR/scxml/", "W3C", "standard", "Recommendation", "State machines, transitions, events, guards, hierarchy and parallel states.", ["state machine", "estado", "transition", "event", "guard", "parallel", "xstate"]),
  r("react-state", "React: Managing State", "https://react.dev/learn/managing-state", "React Team / Meta", "official-docs", "React 19.x", "Local state, lifting, reducers, context and state preservation.", ["react", "local", "reducer", "context", "lifting", "preserv"]),
  r("redux-guide", "Redux Style Guide", "https://redux.js.org/style-guide/", "Redux Team", "official-docs", "Redux Toolkit current", "Store, reducers, normalization, serializability and immutable updates.", ["redux", "store", "reducer", "normaliz", "serializ", "immutable"]),
  r("xstate", "XState Documentation", "https://stately.ai/docs", "Stately / XState", "official-docs", "XState v5", "Statecharts, actors, guards, effects, persistence and inspection.", ["xstate", "actor", "statechart", "guard", "machine", "effect"]),
  r("tanstack-query", "TanStack Query Overview", "https://tanstack.com/query/latest/docs/framework/react/overview", "TanStack", "official-docs", "v5", "Server state, cache, invalidation, retries and synchronization.", ["query", "server state", "cache", "invalid", "retry", "stale", "remote"]),

  r("sql-standard", "ISO/IEC 9075-1:2023 SQL Framework", "https://www.iso.org/standard/76583.html", "ISO/IEC", "standard", "SQL:2023", "SQL framework, sessions, transactions, conformance and terminology.", ["sql", "relation", "table", "join", "transaction", "schema", "query"]),
  r("postgres", "PostgreSQL 18 Manual", "https://www.postgresql.org/docs/current/", "PostgreSQL Global Development Group", "primary-manual", "PostgreSQL 18", "SQL, data types, indexes, planning, administration and extensions.", ["postgres", "index", "planner", "query", "sql", "backup", "role"]),
  r("postgres-mvcc", "PostgreSQL MVCC", "https://www.postgresql.org/docs/current/mvcc.html", "PostgreSQL Global Development Group", "primary-manual", "PostgreSQL 18", "Transactions, isolation, snapshots, concurrency and locking.", ["mvcc", "isolation", "snapshot", "lock", "concurr", "transaction"]),
  r("sqlite-format", "SQLite Database File Format", "https://sqlite.org/fileformat.html", "SQLite Project", "specification", "Format 3", "Pages, B-trees, WAL and physical database representation.", ["sqlite", "file", "page", "b-tree", "wal", "storage"]),
  r("mongodb", "MongoDB Manual", "https://www.mongodb.com/docs/manual/", "MongoDB Inc.", "primary-manual", "Current", "Documents, queries, indexes, aggregation, replication and sharding.", ["mongo", "document", "aggregation", "replication", "shard", "nosql"]),
  r("redis-types", "Redis Data Types", "https://redis.io/docs/latest/develop/data-types/", "Redis", "official-docs", "Latest", "Strings, hashes, lists, sets, streams and probabilistic structures.", ["redis", "string", "hash", "list", "set", "stream", "cache"]),

  r("git-manual", "Git Manual", "https://git-scm.com/docs/git", "Git Project", "primary-manual", "Git 2.55.x", "Commands, global options, repository discovery and execution.", ["git", "command", "status", "add", "commit", "restore", "switch", "config"]),
  r("git-layout", "gitrepository-layout", "https://git-scm.com/docs/gitrepository-layout", "Git Project", "specification", "Git 2.55.x", "Objects, refs, index, HEAD, logs and worktree layout.", ["object", "blob", "tree", "commit", "ref", "head", "index", "staging", ".git"]),
  r("git-revisions", "gitrevisions", "https://git-scm.com/docs/gitrevisions", "Git Project", "specification", "Git 2.55.x", "Revision names, ranges, ancestry, reflog selectors and traversal.", ["revision", "range", "branch", "tag", "ancestor", "reflog", "history"]),
  r("git-protocol", "Git protocol v2", "https://git-scm.com/docs/gitprotocol-v2", "Git Project", "specification", "Protocol v2", "Capabilities, fetch negotiation and transport protocol.", ["protocol", "fetch", "push", "remote", "clone", "negotiation"]),
  r("git-reflog", "git-reflog", "https://git-scm.com/docs/git-reflog", "Git Project", "primary-manual", "Git 2.55.x", "Reference logs, expiration and recovery of moved references.", ["reflog", "recover", "reset", "lost", "gc", "unreachable"]),
  r("git-rebase", "git-rebase", "https://git-scm.com/docs/git-rebase", "Git Project", "primary-manual", "Git 2.55.x", "Rebase modes, conflicts, continue, abort and interactive rewriting.", ["rebase", "conflict", "interactive", "rewrite", "merge"]),

  r("github-pr", "GitHub: Collaborating with pull requests", "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests", "GitHub", "official-docs", "GitHub.com rolling", "Forks, branches, reviews, merge, conflicts and collaboration.", ["pull request", "review", "fork", "merge", "comment", "codeowners", "draft"]),
  r("github-rulesets", "GitHub Rulesets", "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets", "GitHub", "official-docs", "GitHub.com rolling", "Branch and tag protections, required checks, signatures and policies.", ["ruleset", "protected", "required", "policy", "approval", "branch"]),
  r("github-security", "GitHub Security Features", "https://docs.github.com/en/code-security/getting-started/github-security-features", "GitHub", "official-docs", "GitHub.com rolling", "Secret scanning, Dependabot, code scanning and repository security.", ["security", "secret", "dependabot", "codeql", "scanning", "advisory"]),
  r("github-actions", "GitHub Actions reference", "https://docs.github.com/en/actions/reference/workflows-and-actions", "GitHub", "official-api", "GitHub.com rolling", "Workflow syntax, events, jobs, runners, permissions and environments.", ["actions", "workflow", "runner", "job", "check", "environment", "oidc"]),
  r("github-api", "GitHub REST API versions", "https://docs.github.com/en/rest/about-the-rest-api/api-versions?apiVersion=2026-03-10", "GitHub", "official-api", "2026-03-10", "REST versioning, authentication, headers and compatibility.", ["rest", "api", "version", "pagination", "rate", "token", "app"]),
  r("github-releases", "GitHub Releases", "https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases", "GitHub", "official-docs", "GitHub.com rolling", "Tags, release notes, assets, prereleases and distribution.", ["release", "tag", "asset", "package", "pages"]),

  r("source-maps", "ECMA-426 Source Map Format", "https://tc39.es/ecma426/", "Ecma International / TC39", "standard", "ECMA-426", "Mappings, VLQ, scopes and original locations for generated code.", ["source map", "mapping", "javascript", "typescript", "stack trace"]),
  r("dap", "Debug Adapter Protocol", "https://microsoft.github.io/debug-adapter-protocol/", "Microsoft", "specification", "Protocol 1.71.0", "Sessions, breakpoints, stepping, variables and exceptions.", ["debug adapter", "breakpoint", "step", "variable", "exception", "session"]),
  r("cdp", "Chrome DevTools Protocol 1.3", "https://chromedevtools.github.io/devtools-protocol/1-3/", "Chromium Project", "official-api", "Stable subset 1.3", "Debugger, Runtime, Network, Profiler, Performance and Console domains.", ["devtools", "browser", "network", "profiler", "console", "runtime", "performance"]),
  r("dwarf5", "DWARF 5 Standard", "https://dwarfstd.org/dwarf5std.html", "DWARF Standards Committee", "standard", "DWARF 5", "Native debug information, types, line tables and call frames.", ["dwarf", "native", "binary", "symbol", "call frame", "line"]),
  r("gdb", "GNU GDB Manual", "https://sourceware.org/gdb/current/onlinedocs/gdb.html", "GNU Project / FSF", "primary-manual", "Current", "Breakpoints, watchpoints, threads, core dumps and remote debugging.", ["gdb", "watchpoint", "core dump", "thread", "remote", "memory"]),

  r("posix", "POSIX.1-2024, Issue 8", "https://pubs.opengroup.org/onlinepubs/9799919799/", "IEEE / The Open Group", "standard", "Issue 8", "Shell, utilities, processes, files, threads and system interfaces.", ["shell", "process", "file", "permission", "signal", "thread", "posix", "utility"]),
  r("kernel-docs", "Linux Kernel Documentation", "https://docs.kernel.org/", "Linux Kernel Project", "primary-manual", "Mainline rolling", "Kernel subsystems, APIs, development, administration and security.", ["kernel", "memory", "scheduler", "filesystem", "network", "driver", "module", "security"]),
  r("linux-uapi", "Linux Userspace API", "https://www.kernel.org/doc/html/latest/userspace-api/index.html", "Linux Kernel Project", "official-api", "Latest", "System calls, ABI, ioctl, seccomp, eBPF and userspace interfaces.", ["syscall", "abi", "ioctl", "seccomp", "ebpf", "userspace"]),
  r("systemd", "systemd Documentation", "https://systemd.io/", "systemd Project", "official-docs", "Rolling", "Units, services, journal, targets, sockets and boot.", ["systemd", "service", "unit", "journal", "boot", "daemon", "socket"]),

  r("aws-waf", "AWS Well-Architected Framework", "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html", "Amazon Web Services", "primary-manual", "Rolling", "Architecture, reliability, security, performance, cost and sustainability.", ["architecture", "reliab", "cost", "performance", "sustain", "well-architected"]),
  r("aws-iam", "AWS IAM User Guide", "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html", "Amazon Web Services", "official-docs", "Rolling", "Users, roles, policies, federation and least privilege.", ["iam", "identity", "role", "policy", "permission", "sts", "oidc"]),
  r("aws-cloudformation", "AWS CloudFormation User Guide", "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html", "Amazon Web Services", "official-api", "Rolling", "Infrastructure as code, stacks, change sets and rollback.", ["cloudformation", "iac", "stack", "template", "change set", "rollback"]),
  r("aws-orgs", "AWS Organizations", "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html", "Amazon Web Services", "official-docs", "Rolling", "Accounts, organizational units, SCPs and governance.", ["organization", "account", "scp", "govern", "control tower"]),
  r("aws-endpoints", "AWS service endpoints and quotas", "https://docs.aws.amazon.com/general/latest/gr/aws-service-information.html", "Amazon Web Services", "official-api", "Rolling", "Regions, endpoints, quotas and service capabilities.", ["region", "endpoint", "quota", "availability", "service"]),

  r("slsa12", "SLSA Specification 1.2", "https://slsa.dev/spec/v1.2/", "OpenSSF / Linux Foundation", "specification", "1.2", "Build provenance, trust levels and supply-chain threat resistance.", ["slsa", "provenance", "supply chain", "builder", "attestation"]),
  r("spdx", "SPDX Specification", "https://spdx.github.io/spdx-spec/", "Linux Foundation", "standard", "3.0.1", "SBOM packages, files, relationships, licensing and profiles.", ["spdx", "sbom", "license", "package", "component"]),
  r("cyclonedx", "CycloneDX Specification", "https://cyclonedx.org/specification/overview/", "OWASP / Ecma International", "standard", "1.7 / ECMA-424", "SBOM, SaaSBOM, vulnerabilities and attestations.", ["cyclonedx", "sbom", "vulnerability", "component", "dependency"]),
  r("sigstore", "Sigstore keyless signing", "https://docs.sigstore.dev/cosign/signing/overview/", "Sigstore / OpenSSF", "official-docs", "Rolling", "OIDC identities, Fulcio certificates, Rekor transparency and signing.", ["sign", "firma", "cosign", "sigstore", "fulcio", "rekor", "oidc"]),
  r("oci-distribution", "OCI Distribution Specification", "https://github.com/opencontainers/distribution-spec/blob/main/spec.md", "Open Container Initiative", "specification", "1.1 family", "Registry push/pull, manifests, blobs, digests and referrers.", ["registry", "push", "pull", "manifest", "blob", "digest", "artifact"]),

  r("k8s-deployment", "Kubernetes Deployments", "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/", "Kubernetes / CNCF", "official-api", "Kubernetes 1.36", "ReplicaSets, rolling updates, rollback, progress and availability.", ["kubernetes", "deployment", "replicaset", "rollout", "rollback", "canary"]),
  r("k8s-probes", "Kubernetes Container Probes", "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#container-probes", "Kubernetes / CNCF", "official-api", "Kubernetes 1.36", "Liveness, readiness, startup and traffic admission.", ["probe", "health", "readiness", "liveness", "startup"]),
  r("k8s-config", "Kubernetes ConfigMaps", "https://kubernetes.io/docs/concepts/configuration/configmap/", "Kubernetes / CNCF", "official-api", "Kubernetes 1.36", "External configuration, mounts, variables and rollout behavior.", ["config", "configmap", "environment", "variable", "mount"]),
  r("oci-image", "OCI Image Specification 1.1.1", "https://github.com/opencontainers/image-spec/blob/v1.1.1/spec.md", "Open Container Initiative", "specification", "1.1.1", "Image manifests, configs, layers, digests and platforms.", ["image", "layer", "manifest", "digest", "platform", "container"]),

  r("nginx-docs", "NGINX Documentation", "https://nginx.org/en/docs/", "F5 / NGINX", "primary-manual", "1.31 mainline / 1.30 stable", "Architecture, configuration, request processing and modules.", ["nginx", "architecture", "worker", "config", "directive", "process"]),
  r("nginx-core", "NGINX HTTP Core Module", "https://nginx.org/en/docs/http/ngx_http_core_module.html", "F5 / NGINX", "official-api", "Current", "Server and location selection, request processing, buffers and limits.", ["location", "server", "uri", "request", "limit", "buffer"]),
  r("nginx-proxy", "NGINX Proxy Module", "https://nginx.org/en/docs/http/ngx_http_proxy_module.html", "F5 / NGINX", "official-api", "Current", "Reverse proxy, upstream headers, buffering, cache and timeouts.", ["proxy", "upstream", "header", "buffer", "cache", "timeout"]),
  r("nginx-upstream", "NGINX Upstream Module", "https://nginx.org/en/docs/http/ngx_http_upstream_module.html", "F5 / NGINX", "official-api", "Current", "Pools, algorithms, health state, keepalive and load balancing.", ["upstream", "load balance", "health", "keepalive", "hash"]),
  r("nginx-tls", "NGINX SSL Module", "https://nginx.org/en/docs/http/ngx_http_ssl_module.html", "F5 / NGINX", "official-api", "Current", "TLS certificates, sessions, OCSP and secure configuration.", ["ssl", "tls", "certificate", "ocsp", "session", "http/2", "http/3"]),

  r("docker-engine", "Docker Engine", "https://docs.docker.com/engine/", "Docker Inc.", "official-docs", "Engine 29.x", "Daemon, containers, images, runtime security and operation.", ["docker", "engine", "daemon", "container", "runtime", "security"]),
  r("dockerfile", "Dockerfile Reference", "https://docs.docker.com/reference/dockerfile/", "Docker Inc.", "specification", "Rolling syntax", "Stages, RUN, COPY, ARG, mounts, build contexts and heredocs.", ["dockerfile", "run", "copy", "arg", "stage", "build", "context"]),
  r("compose", "Compose Specification", "https://docs.docker.com/reference/compose-file/", "Docker Inc. / Compose Specification", "specification", "Unified rolling spec", "Services, networks, volumes, configs, secrets and dependencies.", ["compose", "service", "network", "volume", "config", "secret"]),
  r("buildkit", "Docker Build / BuildKit", "https://docs.docker.com/build/concepts/overview/", "Docker Inc.", "official-docs", "BuildKit current", "LLB, cache, builders, Buildx and multi-platform builds.", ["buildkit", "buildx", "cache", "builder", "multi-platform", "llb"]),
  r("docker-network", "Docker Networking", "https://docs.docker.com/engine/network/", "Docker Inc.", "official-docs", "Engine 29.x", "Bridge, host, overlay, DNS, ports and isolation.", ["network", "bridge", "overlay", "dns", "port", "routing"]),
  r("docker-storage", "Docker Storage", "https://docs.docker.com/engine/storage/", "Docker Inc.", "official-docs", "Engine 29.x", "Volumes, bind mounts, tmpfs and persistent data.", ["storage", "volume", "bind", "mount", "tmpfs", "persist"]),
];

const p = (collectionId: string, defaultIds: readonly string[], sourceIds: readonly string[] = defaultIds): CollectionReferenceProfile => ({ collectionId, defaultIds, sourceIds });

const profiles: readonly CollectionReferenceProfile[] = [
  p("javascript", ["ecma-262", "html-event-loops"], ["ecma-262", "ecma-402", "html-event-loops"]),
  p("typescript", ["ts-handbook", "tsconfig-reference"], ["ts-handbook", "tsconfig-reference", "ts-architecture"]),
  p("python", ["python-beginners", "python-tutorial"], ["python-beginners", "python-tutorial", "python-language-reference", "python-stdlib", "python-howtos", "python-peps", "pep8", "python-devguide", "cpython-source", "pypa-guide", "pypa-specs", "python-typing-spec", "python-asyncio", "python-concurrency", "python-free-threading", "python-unittest", "pytest-docs", "django-docs", "flask-docs", "fastapi-docs", "sqlalchemy-docs", "numpy-docs", "pandas-docs", "scipy-docs", "jupyter-docs", "sklearn-docs", "pytorch-docs", "tensorflow-python", "opencv-python", "mediapipe-release", "mediapipe-pypi", "mediapipe-python-setup", "mediapipe-python-api", "mediapipe-tasks-api", "mediapipe-gesture", "micropython-docs", "pygame-docs", "tkinter-docs", "python-ssl", "python-secrets", "rfc9846"]),
  p("xml-xsd-json", ["xml10", "rfc8259"], ["xml10", "xml-names10", "xml-infoset", "xml-base", "xinclude11", "xsd10-structures", "xsd11-structures", "xsd11-datatypes", "xpath31", "xslt30", "xml-c14n11", "xmldsig11", "xmlenc11", "rfc7303", "owasp-xxe", "rfc8259", "ecma404", "json-schema-core", "json-schema-validation", "rfc6901", "rfc6902", "rfc7386", "rfc7464", "rfc7493", "rfc8785", "rfc9535", "jsonld11"]),
  p("c", ["iso-c", "wg14-c"], ["iso-c", "wg14-c", "gcc-c", "cert-c"]),
  p("cpp", ["iso-cpp", "cpp-guidelines"], ["iso-cpp", "cpp-guidelines", "cmake-docs"]),
  p("c-sharp", ["csharp-spec", "csharp-guide"], ["csharp-spec", "csharp-guide", "csharplang"]),
  p("objective-c", ["objc-guide", "objc-runtime"], ["objc-guide", "objc-runtime", "clang-arc"]),
  p("c-star", ["cstar-user", "cstar-programming"]),
  p("cweb", ["cweb-stanford", "cweb-manual"]),
  p("embedded-c", ["cmsis", "cert-c"], ["cmsis", "cert-c", "freertos"]),
  p("visual-basic", ["vb-guide", "vb-spec"], ["vb-guide", "vb-spec", "winforms"]),
  p("ux-ui", ["wai-usability", "wcag22"], ["wai-usability", "wcag22", "wai-aria"]),
  p("html-css", ["html-standard", "css-snapshot"], ["html-standard", "css-snapshot", "wcag22", "wai-aria"]),
  p("bootstrap", ["bootstrap-docs", "bootstrap-a11y"]),
  p("angularjs", ["angularjs-guide", "angularjs-status"]),
  p("react", ["react-reference", "react-learn"], ["react-reference", "react-learn", "react-dom"]),
  p("react-native", ["rn-docs", "rn-architecture"], ["rn-docs", "rn-architecture", "rn-performance"]),
  p("apis", ["rfc9110", "openapi32"], ["rfc9110", "openapi32", "graphql", "grpc", "websocket-rfc", "asyncapi", "oauth9700", "problem9457"]),
  p("backend", ["rfc9110", "openapi32"], ["rfc9110", "openapi32", "oauth9700", "problem9457", "asyncapi", "otel"]),
  p("nodejs", ["node-api", "node-event-loop"], ["node-api", "node-event-loop", "node-stream", "node-worker", "node-packages", "otel"]),
  p("laravel", ["laravel-release", "laravel-http"], ["laravel-release", "laravel-http", "laravel-eloquent", "laravel-auth", "laravel-queues", "laravel-events"]),
  p("n8n", ["n8n-workflows", "n8n-release"], ["n8n-release", "n8n-workflows", "n8n-webhook", "n8n-errors", "n8n-credentials", "n8n-queue"]),
  p("dotnet", ["dotnet-policy", "dotnet-clr"], ["dotnet-policy", "dotnet-clr", "dotnet-cli", "dotnet-gc", "dotnet-aot", "dotnet-diagnostics"]),
  p("firebase", ["firebase-docs", "firebase-rules"], ["firebase-docs", "firebase-firestore", "firebase-auth", "firebase-rules", "firebase-functions", "firebase-emulator"]),
  p("state-management", ["react-state", "scxml"], ["react-state", "scxml", "redux-guide", "xstate", "tanstack-query", "html-event-loops"]),
  p("databases", ["sql-standard", "postgres"], ["sql-standard", "postgres", "postgres-mvcc", "sqlite-format", "mongodb", "redis-types"]),
  p("git", ["git-manual", "git-layout"], ["git-manual", "git-layout", "git-revisions", "git-protocol", "git-reflog", "git-rebase"]),
  p("github", ["github-pr", "github-rulesets"], ["github-pr", "github-rulesets", "github-security", "github-actions", "github-api", "github-releases"]),
  p("debugging", ["dap", "otel"], ["dap", "otel", "source-maps", "cdp", "dwarf5", "gdb"]),
  p("linux", ["posix", "kernel-docs"], ["posix", "kernel-docs", "linux-uapi", "systemd", "otel"]),
  p("aws", ["aws-waf", "aws-iam"], ["aws-waf", "aws-iam", "aws-cloudformation", "aws-orgs", "aws-endpoints", "otel"]),
  p("ci-cd", ["github-actions", "slsa12"], ["github-actions", "slsa12", "spdx", "cyclonedx", "sigstore", "oci-distribution"]),
  p("deployment", ["k8s-deployment", "oci-image"], ["k8s-deployment", "k8s-probes", "k8s-config", "oci-image", "otel", "sigstore"]),
  p("nginx", ["nginx-docs", "nginx-core"], ["nginx-docs", "nginx-core", "nginx-proxy", "nginx-upstream", "nginx-tls", "rfc9110", "rfc9846"]),
  p("docker", ["docker-engine", "dockerfile"], ["docker-engine", "dockerfile", "compose", "buildkit", "docker-network", "docker-storage", "oci-image"]),
];

export const officialReferenceCatalog = new Map(referenceList.map((reference) => [reference.id, reference]));
const profileByCollection = new Map(profiles.map((profile) => [profile.collectionId, profile]));

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es");
}

export function officialReferencesForConcept(collectionId: string, concept: Pick<StudyConcept, "title" | "description" | "section">) {
  const profile = profileByCollection.get(collectionId);
  if (!profile) return [];
  const haystack = normalize(`${concept.title} ${concept.description} ${concept.section}`);
  const ranked = profile.sourceIds
    .map((id, order) => ({ reference: officialReferenceCatalog.get(id), order }))
    .filter((entry): entry is { reference: OfficialReference; order: number } => Boolean(entry.reference))
    .map((entry) => ({ ...entry, score: entry.reference.keywords.reduce((total, keyword) => total + (haystack.includes(normalize(keyword)) ? 1 : 0), 0) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.order - b.order)
    .map((entry) => entry.reference);
  const defaults = profile.defaultIds.flatMap((id) => officialReferenceCatalog.get(id) ?? []);
  return [...new Map([...ranked, ...defaults].map((reference) => [reference.id, reference])).values()].slice(0, 2);
}

export function officialReferencesForCollection(collectionId: string) {
  const profile = profileByCollection.get(collectionId);
  return profile?.sourceIds.flatMap((id) => officialReferenceCatalog.get(id) ?? []) ?? [];
}

export const officialReferenceKindLabels: Record<OfficialReferenceKind, string> = {
  standard: "Estándar",
  specification: "Especificación",
  "official-docs": "Documentación oficial",
  "official-api": "Referencia oficial",
  "primary-manual": "Manual primario",
  "archival-primary": "Fuente primaria histórica",
};

function validateReferenceRegistry() {
  if (officialReferenceCatalog.size !== referenceList.length) throw new Error("El catálogo de fuentes contiene IDs duplicados.");
  if (profiles.length !== collectionManifest.length) throw new Error(`Deben existir perfiles de fuentes para ${collectionManifest.length} colecciones; existen ${profiles.length}.`);
  const profileIds = new Set(profiles.map((profile) => profile.collectionId));
  for (const collection of collectionManifest) {
    if (!profileIds.has(collection.id)) throw new Error(`Falta el perfil de fuentes oficiales de ${collection.id}.`);
  }
  for (const reference of referenceList) {
    if (!reference.href.startsWith("https://")) throw new Error(`La fuente ${reference.id} no usa HTTPS.`);
    if (!reference.authority || !reference.version || !reference.coverage || reference.verifiedAt !== verifiedAt) throw new Error(`La fuente ${reference.id} no tiene metadatos editoriales completos.`);
  }
  for (const profile of profiles) {
    if (profile.defaultIds.length === 0 || profile.sourceIds.length === 0) throw new Error(`El perfil ${profile.collectionId} no tiene fuentes predeterminadas.`);
    for (const id of [...profile.defaultIds, ...profile.sourceIds]) {
      if (!officialReferenceCatalog.has(id)) throw new Error(`La fuente ${id} usada por ${profile.collectionId} no existe.`);
    }
  }
}

validateReferenceRegistry();
