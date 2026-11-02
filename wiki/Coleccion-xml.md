# XML (XML)

> **Documentos, namespaces, parsing, XPath, XSLT, seguridad e interoperabilidad.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `xml` |
| **Grupo Arquitectonico** | [Datos](Grupo-Data) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `xml` |
| **Total de Conceptos** | **110 conceptos** |
| **Capitulos / Secciones** | **22 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/xml)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/xml-en-accion)


## Estudio de Caso Practico: XML en acción

> **Caso integrado · Manual técnico multilingüe y firmado:** Un manual modular llega como XML con contenido mixto, idiomas, namespaces e inclusiones. El publicador bloquea resolución externa, recupera un módulo mediante un catalog local, transforma a HTML accesible y verifica la firma del documento exacto que publica.  
> El caso conserva la naturaleza documental de XML: orden, texto, identidad de vocabularios y recursos se hacen visibles antes de transformar o firmar.

### Fases de Ejecucion:
1. **Recibir el documento** (Media type y límites): `application/xml · UTF-8 · 4 MiB` -> entrada admitida. *La extensión del archivo no sustituye el contrato de transporte.*
2. **Parsear sin red** (Resolución controlada): `DOCTYPE=deny · network=off` -> Infoset seguro. *El documento no decide qué puede leer el servidor.*
3. **Resolver namespaces** (Nombres expandidos): `{urn:manual:v3}chapter` -> vocabulario identificado. *Los prefijos son alias; la identidad usa el nombre expandido.*
4. **Aplicar contexto XML** (Idioma y base): `xml:lang + xml:base` -> contexto calculado. *Mover un subárbol puede cambiar la base y debe probarse.*
5. **Seleccionar secciones** (XPath con namespaces): `//m:chapter[@audience='operator']` -> contenido elegido. *La expresión declara su propio mapa de namespaces.*
6. **Detectar inclusión hostil** (XInclude fuera de allowlist): `href=https://unknown.example/part.xml` -> recurso bloqueado. *XInclude es otra frontera de resolución y requiere política.*
7. **Recuperar con catalog** (Recurso local versionado): `catalog → manuals/parts/v3.xml` -> documento completo. *La misma identidad se resuelve de forma reproducible y offline.*
8. **Transformar** (XSLT a HTML accesible): `templates → landmarks + headings` -> publicación accesible. *La transformación conserva contenido mixto y no inyecta markup sin revisar.*
9. **Verificar firma** (Canonicalizar el nodo correcto): `C14N → digest → signature` -> integridad demostrada. *Una firma válida no sirve si la aplicación procesa otro nodo.*
10. **Publicar y observar** (Round-trip y evidencia): `serialize → store → trace` -> manual verificable. *El documento publicado alimenta la siguiente revisión sin terminar en gris.*


---

## Catalogo Sistematico de Conceptos (110)

### Seccion: Documento, estructura y significado (5 conceptos)

- **Documento XML**  
  *Familia:* `configuración declarativa`  
  Reconoce un artefacto textual ordenado con un único elemento documento y construcciones permitidas alrededor de él.

- **Instancia y vocabulario**  
  *Familia:* `jerarquía y dependencias`  
  Distingue el documento concreto de las reglas semánticas que dan significado a sus nombres.

- **Bytes, Unicode y caracteres**  
  *Familia:* `telar relacional`  
  Decodifica octetos con una codificación coherente antes de interpretar markup.

- **Estructura y contenido**  
  *Familia:* `consulta e índice`  
  Conserva jerarquía, orden, atributos y texto porque cada dimensión puede formar parte del dato.

- **Capas de validez**  
  *Familia:* `validación y decisión`  
  Separa decodificación, well-formedness, validación externa, reglas de negocio y autorización.


### Seccion: Anatomía de un documento XML (5 conceptos)

- **Declaración XML**  
  *Familia:* `configuración declarativa`  
  Indica versión y codificación cuando corresponde, sin confundirla con una processing instruction ordinaria.

- **Prólogo y epílogo**  
  *Familia:* `jerarquía y dependencias`  
  Ubica declaración, comentarios, processing instructions y posible DOCTYPE alrededor del elemento documento.

- **Elemento documento**  
  *Familia:* `anatomía del concepto`  
  Exige una única raíz que contenga la estructura lógica principal.

- **Start-tag, end-tag y empty-element tag**  
  *Familia:* `configuración declarativa`  
  Expresa límites de elementos normales o vacíos conservando coincidencia exacta de nombres.

- **Elementos, atributos y contenido**  
  *Familia:* `jerarquía y dependencias`  
  Decide qué información forma parte de la jerarquía, cuál califica un elemento y cuál aparece como texto.


### Seccion: XML bien formado (5 conceptos)

- **Anidamiento correcto**  
  *Familia:* `anatomía del concepto`  
  Cierra cada elemento en orden inverso a su apertura y evita estructuras que se cruzan.

- **Una sola raíz**  
  *Familia:* `configuración declarativa`  
  Permite comentarios o instrucciones alrededor, pero exige exactamente un elemento documento.

- **Atributos citados y únicos**  
  *Familia:* `jerarquía y dependencias`  
  Delimita cada valor y prohíbe repetir el mismo nombre expandido en un elemento.

- **Escapes y referencias de caracteres**  
  *Familia:* `anatomía del concepto`  
  Representa ampersand, menor que, comillas y caracteres mediante las reglas exactas de XML.

- **Nombres y sensibilidad a mayúsculas**  
  *Familia:* `configuración declarativa`  
  Respeta la gramática de nombres y reconoce que Pedido y pedido son identificadores distintos.


### Seccion: Modelo de información XML (5 conceptos)

- **Infoset y árbol lógico**  
  *Familia:* `jerarquía y dependencias`  
  Distingue el documento serializado de los information items que un procesador expone a la aplicación.

- **Orden de documento**  
  *Familia:* `anatomía del concepto`  
  Conserva la secuencia de elementos y texto porque puede formar parte del significado.

- **Elemento frente a atributo**  
  *Familia:* `configuración declarativa`  
  Modela jerarquía y contenido con elementos, y propiedades no repetibles o identificadoras con atributos cuando el vocabulario lo justifica.

- **Texto y contenido mixto**  
  *Familia:* `jerarquía y dependencias`  
  Representa contenido donde caracteres y elementos hijos aparecen intercalados sin perder su posición.

- **Whitespace y normalización de fin de línea**  
  *Familia:* `anatomía del concepto`  
  Comprende qué normaliza el parser y qué espacios siguen siendo datos visibles para la aplicación.


### Seccion: Namespaces XML (5 conceptos)

- **URI de namespace**  
  *Familia:* `configuración declarativa`  
  Usa un identificador estable para distinguir vocabularios sin asumir que debe descargarse como una página.

- **QName, prefijo y nombre local**  
  *Familia:* `jerarquía y dependencias`  
  Relaciona una forma escrita como inv:order con el par estable namespace URI más local name.

- **Namespace predeterminado**  
  *Familia:* `anatomía del concepto`  
  Aplica un namespace a elementos sin prefijo dentro de su alcance.

- **Atributos sin prefijo**  
  *Familia:* `configuración declarativa`  
  Recuerda que el namespace predeterminado no se aplica a atributos no prefijados.

- **Alcance, rebinding y nombres expandidos**  
  *Familia:* `jerarquía y dependencias`  
  Sigue declaraciones heredadas o reemplazadas y compara por nombre expandido, no por el prefijo visible.


### Seccion: Entidades, DTD y estructura física (5 conceptos)

- **Entidades predefinidas y referencias numéricas**  
  *Familia:* `anatomía del concepto`  
  Usa las entidades incorporadas y referencias de código sin inventar escapes propios.

- **Entidades generales internas**  
  *Familia:* `configuración declarativa`  
  Inserta texto declarado localmente entendiendo que el parser puede expandirlo antes de entregar el Infoset.

- **Entidades externas**  
  *Familia:* `jerarquía y dependencias`  
  Reconoce que SYSTEM o PUBLIC pueden provocar resolución de recursos fuera del documento.

- **DTD interno y externo**  
  *Familia:* `anatomía del concepto`  
  Distingue declaraciones incluidas en el DOCTYPE de un subconjunto recuperado por identificador.

- **Standalone y dependencias externas**  
  *Familia:* `configuración declarativa`  
  Expresa si declaraciones externas pueden modificar información que llega a la aplicación.


### Seccion: Modelos de parsing XML (5 conceptos)

- **DOM y árbol en memoria**  
  *Familia:* `análisis y emisión`  
  Carga el documento completo para navegar y modificar libremente, pagando memoria proporcional a su tamaño.

- **SAX y eventos push**  
  *Familia:* `flujo de transformación`  
  Recibe callbacks de apertura, texto y cierre mientras el parser controla el avance.

- **Pull parsing y cursor**  
  *Familia:* `jerarquía y dependencias`  
  Permite que el consumidor solicite el siguiente evento y coordine mejor su propio estado.

- **Streaming y límites de chunks**  
  *Familia:* `análisis y emisión`  
  No asume que una lectura de red coincide con un tag, carácter Unicode o registro lógico completo.

- **Errores de parseo y ubicación**  
  *Familia:* `flujo de transformación`  
  Conserva línea, columna, byte y contexto seguro para diagnosticar sin registrar todo el documento sensible.


### Seccion: XPath 3.1 (5 conceptos)

- **Context item y secuencia**  
  *Familia:* `jerarquía y dependencias`  
  Evalúa expresiones desde un nodo o valor actual y obtiene secuencias, no únicamente un nodo.

- **Location paths y steps**  
  *Familia:* `análisis y emisión`  
  Recorre el árbol mediante pasos relativos o absolutos y combina ejes con node tests.

- **Ejes y node tests**  
  *Familia:* `flujo de transformación`  
  Selecciona hijos, descendientes, atributos, ancestros u otros nodos por tipo y nombre.

- **Predicados y funciones**  
  *Familia:* `jerarquía y dependencias`  
  Filtra por posición, valor o condición usando la semántica efectiva de booleanos y secuencias.

- **Namespaces en XPath**  
  *Familia:* `análisis y emisión`  
  Asocia prefijos de la expresión con URIs porque el namespace del documento no se hereda automáticamente al evaluador.


### Seccion: Transformación con XSLT (5 conceptos)

- **Templates y match patterns**  
  *Familia:* `flujo de transformación`  
  Declara reglas que responden a nodos del documento fuente.

- **apply-templates y select**  
  *Familia:* `jerarquía y dependencias`  
  Delega el recorrido al motor o selecciona explícitamente qué secuencia procesar.

- **Modes, prioridades y conflicto**  
  *Familia:* `análisis y emisión`  
  Separa recorridos y decide qué template gana cuando más de una regla coincide.

- **Variables, agrupación y orden**  
  *Familia:* `flujo de transformación`  
  Construye transformaciones declarativas sin ocultar dependencias ni recalcular secuencias costosas.

- **Resultado, serialización y streaming**  
  *Familia:* `jerarquía y dependencias`  
  Produce XML, HTML, texto u otros resultados respetando capacidades y restricciones del procesador.


### Seccion: Serialización y canonicalización XML (5 conceptos)

- **Codificación y declaración de salida**  
  *Familia:* `análisis y emisión`  
  Alinea bytes reales, declaración XML y media type para evitar texto interpretado con otra codificación.

- **Indentación frente a contenido**  
  *Familia:* `flujo de transformación`  
  No inserta whitespace decorativo dentro de contenido mixto donde cambiaría el dato.

- **Elementos vacíos equivalentes**  
  *Familia:* `jerarquía y dependencias`  
  Reconoce la equivalencia informativa habitual entre una forma autocerrada y tags consecutivos sin contenido.

- **Prefijos y declaraciones redundantes**  
  *Familia:* `análisis y emisión`  
  Distingue nombres expandidos equivalentes de serializaciones visualmente distintas.

- **Canonical XML**  
  *Familia:* `flujo de transformación`  
  Normaliza diferencias permitidas cuando una firma, digest o comparación necesita una secuencia de octetos determinista.


### Seccion: Vocabularios y protocolos XML (5 conceptos)

- **SVG como vocabulario XML**  
  *Familia:* `jerarquía y dependencias`  
  Combina namespaces, atributos y jerarquía para describir gráficos vectoriales.

- **SOAP, WSDL y XSD**  
  *Familia:* `análisis y emisión`  
  Relaciona envelope, contrato de servicio y tipos sin reducir todo XML empresarial a SOAP.

- **RSS y Atom**  
  *Familia:* `flujo de transformación`  
  Modela feeds ordenados y extensibles mediante vocabularios definidos.

- **Documentos de oficina empaquetados**  
  *Familia:* `jerarquía y dependencias`  
  Reconoce archivos ZIP con múltiples partes XML, relaciones y recursos binarios.

- **Configuración y build declarativo**  
  *Familia:* `análisis y emisión`  
  Evalúa cuándo la expresividad, comentarios y namespaces de XML justifican su uso en herramientas.


### Seccion: Seguridad XML (5 conceptos)

- **DOCTYPE deshabilitado por defecto**  
  *Familia:* `flujo de transformación`  
  Rechaza declaraciones de tipo en entradas no confiables salvo una necesidad explícita y aislada.

- **XXE y SSRF**  
  *Familia:* `jerarquía y dependencias`  
  Impide que una entidad externa lea archivos locales o fuerce solicitudes de red desde el servidor.

- **Expansión exponencial de entidades**  
  *Familia:* `análisis y emisión`  
  Limita profundidad y expansión para evitar consumo explosivo de memoria o CPU.

- **XInclude, catalogs y resolvers**  
  *Familia:* `flujo de transformación`  
  Controla toda resolución secundaria mediante allowlists, límites y recursos locales versionados.

- **Inyección XPath y XSLT**  
  *Familia:* `jerarquía y dependencias`  
  Mantiene datos separados de expresiones y deshabilita funciones, extensiones o acceso al sistema que no sean necesarios.


### Seccion: XML en producción (5 conceptos)

- **Presupuestos de tamaño y profundidad**  
  *Familia:* `análisis y emisión`  
  Rechaza documentos que superen límites de bytes, nodos, atributos, texto o anidamiento.

- **Streaming y backpressure**  
  *Familia:* `flujo de transformación`  
  Procesa entradas grandes al ritmo que almacenamiento y reglas pueden aceptar.

- **Caché de schemas y catalogs**  
  *Familia:* `jerarquía y dependencias`  
  Reutiliza artefactos verificados sin depender de descargas de red durante cada validación.

- **Quarantine y errores estructurados**  
  *Familia:* `análisis y emisión`  
  Aparta entradas inválidas con código, ubicación, versión de schema y correlation id.

- **Corpus, fuzzing y parser differentials**  
  *Familia:* `flujo de transformación`  
  Prueba entradas válidas, inválidas y adversariales en todos los procesadores utilizados.


### Seccion: Mapeo entre XML y JSON (5 conceptos)

- **Jerarquía y orden**  
  *Familia:* `secuencia operativa`  
  Conserva explícitamente el orden XML cuando el destino JSON lo necesita y documenta cuándo se descarta.

- **Atributos, elementos y texto**  
  *Familia:* `máquina de estados`  
  Define una convención de mapeo porque JSON no posee esas tres categorías nativas.

- **Namespaces y nombres de propiedad**  
  *Familia:* `evidencia y latencia`  
  Evita perder URIs al reducir QNames a strings locales potencialmente ambiguos.

- **Tipos, precisión y ausencia**  
  *Familia:* `secuencia operativa`  
  Alinea valores XSD con strings, numbers, booleans, null y propiedades ausentes sin coerciones silenciosas.

- **Contenido mixto y extensiones desconocidas**  
  *Familia:* `máquina de estados`  
  Reconoce casos donde un mapeo genérico no puede hacer round-trip fiel.


### Seccion: Diseño de vocabularios XML (5 conceptos)

- **Nombres orientados al dominio**  
  *Familia:* `análisis y emisión`  
  Elige elementos comprensibles y estables sin filtrar nombres internos de clases o tablas.

- **Elemento frente a atributo**  
  *Familia:* `configuración declarativa`  
  Usa jerarquía y repetición en elementos, y propiedades no repetibles en atributos cuando el dominio lo justifica.

- **Orden significativo**  
  *Familia:* `evidencia y latencia`  
  Declara si una secuencia expresa narrativa, prioridad o solo una serialización conveniente.

- **Puntos de extensión**  
  *Familia:* `cola y consumidor`  
  Reserva vocabularios y posiciones donde consumidores antiguos puedan ignorar contenido nuevo de forma segura.

- **Convenciones documentadas**  
  *Familia:* `configuración declarativa`  
  Registra casing, fechas, identificadores, unidades, whitespace y política de desconocidos.


### Seccion: Atributos XML reservados (5 conceptos)

- **xml:lang**  
  *Familia:* `jerarquía y dependencias`  
  Etiqueta idioma y comprende su herencia hacia contenido descendiente.

- **xml:space**  
  *Familia:* `anatomía del concepto`  
  Señala intención de preservar o manejar whitespace sin sustituir las reglas de la aplicación.

- **xml:base**  
  *Familia:* `configuración declarativa`  
  Cambia la base de resolución de URIs dentro de un alcance controlado.

- **xml:id**  
  *Familia:* `jerarquía y dependencias`  
  Aporta identidad XML cuando el procesador y vocabulario acuerdan soportarla.

- **Herencia y alcance**  
  *Familia:* `capas internas`  
  Calcula el valor efectivo después de anidamiento, override y movimiento de subárboles.


### Seccion: DOM y mutación documental (5 conceptos)

- **Document, Element y Node**  
  *Familia:* `workflow y decisiones`  
  Navega tipos de nodo sin tratar comentarios, texto y elementos como si fueran equivalentes.

- **Crear e insertar**  
  *Familia:* `topología y tráfico`  
  Añade nodos en una posición explícita conservando owner document y namespaces.

- **Importar y adoptar**  
  *Familia:* `configuración declarativa`  
  Mueve o copia subárboles entre documentos entendiendo identidad y ownership.

- **Normalizar texto**  
  *Familia:* `tejido literario`  
  Combina nodos adyacentes solo cuando no altera contenido mixto o referencias necesarias.

- **Serializar después de mutar**  
  *Familia:* `espectro de verificación`  
  Comprueba encoding, prefixes y whitespace antes de comparar o firmar la salida.


### Seccion: XInclude y XML Catalogs (5 conceptos)

- **xi:include**  
  *Familia:* `evidencia y latencia`  
  Incluye un recurso como XML mediante una etapa deliberada posterior al parseo base.

- **Fallback**  
  *Familia:* `validación y decisión`  
  Define contenido alternativo cuando la resolución autorizada no produce el recurso esperado.

- **Parse mode XML o text**  
  *Familia:* `tejido literario`  
  Decide si la inclusión se interpreta como estructura o como caracteres.

- **XML Catalogs**  
  *Familia:* `evidencia y latencia`  
  Mapea identificadores públicos o URIs a recursos locales confiables y versionados.

- **Resolución offline**  
  *Familia:* `pasaporte del artefacto`  
  Reproduce builds y validación sin depender de cambios o disponibilidad de la red.


### Seccion: Lenguajes de validación alrededor de XML (5 conceptos)

- **DTD**  
  *Familia:* `consulta e índice`  
  Reconoce declaraciones de elementos, atributos y entidades que forman parte del ecosistema XML.

- **RELAX NG**  
  *Familia:* `topología y tráfico`  
  Modela vocabularios mediante patrones y una sintaxis compacta o XML separada de XSD.

- **Schematron**  
  *Familia:* `validación y decisión`  
  Expresa reglas y aserciones basadas en contexto cuando una gramática no captura la semántica requerida.

- **XSD como colección separada**  
  *Familia:* `espectro de verificación`  
  Usa tipos y componentes XSD sin atribuirlos a la especificación XML básica.

- **Validación en capas**  
  *Familia:* `comparativa técnica`  
  Combina gramática, relaciones y negocio con mensajes y responsabilidades distintas.


### Seccion: Firma y cifrado XML (5 conceptos)

- **Canonical XML**  
  *Familia:* `configuración declarativa`  
  Produce bytes deterministas para digest sin confundir canonicalización con formato bonito.

- **XML Signature**  
  *Familia:* `matriz de señales`  
  Relaciona SignedInfo, referencias, digest y método de firma con claves y certificados autorizados.

- **Transforms y referencias**  
  *Familia:* `espectro de verificación`  
  Limita transformaciones y comprueba que la aplicación use exactamente el nodo firmado.

- **XML Encryption**  
  *Familia:* `configuración declarativa`  
  Cifra elementos o contenido conservando una política explícita de claves y algoritmos.

- **Signature wrapping**  
  *Familia:* `matriz de señales`  
  Impide que un atacante añada un nodo válido no firmado que la lógica termine procesando.


### Seccion: Evolución de vocabularios XML (5 conceptos)

- **Cambios aditivos**  
  *Familia:* `cola y consumidor`  
  Añade contenido opcional dentro de puntos donde consumidores antiguos puedan continuar.

- **Namespace de versión**  
  *Familia:* `aislamiento sobre host`  
  Crea una frontera nueva únicamente cuando el significado incompatible justifica la migración.

- **Contenido desconocido**  
  *Familia:* `validación y decisión`  
  Decide preservar, ignorar o rechazar extensiones por posición y confianza.

- **Deprecación**  
  *Familia:* `evidencia y latencia`  
  Publica ventana, reemplazo y evidencia de uso antes de retirar un nombre o estructura.

- **Round-trip con consumidores antiguos**  
  *Familia:* `cola y consumidor`  
  Comprueba que leer y volver a escribir no elimine extensiones que otro sistema necesita.


### Seccion: Conformidad y pruebas XML (5 conceptos)

- **W3C XML Test Suite**  
  *Familia:* `espectro de verificación`  
  Ejecuta casos de conformidad relevantes para las versiones y procesadores elegidos.

- **Golden documents**  
  *Familia:* `validación y decisión`  
  Conserva documentos válidos pequeños con Infoset o resultado esperado.

- **Invalid documents**  
  *Familia:* `comparativa técnica`  
  Fija regresiones de tags cruzados, nombres, encoding, namespaces y límites.

- **Parser differential testing**  
  *Familia:* `análisis y emisión`  
  Compara procesadores para descubrir divergencias antes de aceptar datos hostiles.

- **Serialización y canonicalización**  
  *Familia:* `pasaporte del artefacto`  
  Prueba round-trip, contenido mixto, prefixes y digest sin exigir que todo XML válido sea textual idéntico.



## Referencias Bibliograficas y Documentacion Oficial
- **[XML introduction](https://developer.mozilla.org/en-US/docs/Web/XML/Guides/XML_introduction)** (`tutorial` | Nivel: `beginner`): 
- **[Parsing and serializing XML](https://developer.mozilla.org/en-US/docs/Web/XML/Guides/Parsing_and_serializing_XML)** (`tutorial` | Nivel: `intermediate`): 
- **[Using XPath in JavaScript](https://developer.mozilla.org/en-US/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript)** (`reference` | Nivel: `advanced`): 


---
[<- Volver al Inicio](Home) | [Ver Grupo: Datos](Grupo-Data) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
