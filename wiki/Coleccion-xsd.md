# 📘 [XSD] XSD

> **Schemas XML, tipos, facets, identidad, composición, evolución y validación.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `xsd` |
| **Grupo Arquitectónico** | [Datos](Grupo-Data) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `xsd` |
| **Total de Conceptos** | **100 conceptos** |
| **Capítulos / Secciones** | **20 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/xsd)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/xsd-en-accion)**


## 🔬 Caso Práctico en Acción: XSD en acción

> **Caso integrado · Certificado de calibración verificable:** Un certificado XML bien formado atraviesa un schema set local. XSD comprueba namespace, tipos, facets, secuencia y relaciones; una key duplicada y una assertion de tolerancia fallan antes de producir información tipada.  
> El caso muestra exactamente qué demuestra XSD, qué error entrega, cómo se corrige y cómo se prueba compatibilidad entre procesadores 1.0 y 1.1.

### Fases de Ejecución:
1. **Recibir la instancia** (XML ya bien formado): `certificate-421.xml` → instancia lista. *XSD comienza después de la sintaxis XML.*
2. **Cargar schema set** (Recursos locales por digest): `catalog → certificate-v3.xsd` → contrato preparado. *schemaLocation de la instancia es una pista, no autoridad.*
3. **Resolver declaración global** (Namespace y raíz): `{urn:calibration:v3}certificate` → vocabulario correcto. *El prefijo visible no decide la identidad.*
4. **Validar datatypes y facets** (Valores léxicos a tipados): `decimal · dateTime · pattern` → valores conformes. *El texto válido se interpreta dentro del espacio de valores XSD.*
5. **Comprobar estructura** (Sequence y cardinalidad): `measurement{1..64}` → estructura conforme. *Cardinalidad no sustituye reglas de negocio.*
6. **Detectar identidad duplicada** (xs:key): `M-17 · M-17` → assessment inválido. *La relación se evalúa sobre la instancia completa.*
7. **Corregir key/keyref** (Identidad coherente): `M-17 · M-18` → relaciones válidas. *Se revalida todo el alcance, no solo el campo editado.*
8. **Evaluar assertion** (Regla XSD 1.1): `abs(measured-reference) <= tolerance` → lote en revisión. *Un procesador 1.0 no ofrece esta garantía y debe declararlo.*
9. **Recuperar y producir PSVI** (Resultado tipado): `correct tolerance → reassess` → certificado válido. *La aplicación decide si depende o no de defaults añadidos por validación.*
10. **Probar compatibilidad** (Matriz 1.0/1.1): `corpus + contract diff` → contrato operable. *La matriz final inicia el siguiente certificado y cierra el loop.*


---

## 📚 Desglose Exhaustivo de Conceptos (100)

### 📑 Sección: Instancia, schema y assessment (5 conceptos)

- **Documento instancia**  
  *Familia:* `configuración declarativa`  
  Identifica el XML concreto que será evaluado y conserva su versión, namespace y origen.

- **Schema document**  
  *Familia:* `validación y decisión`  
  Reconoce un documento xs:schema como fuente de componentes, no como datos de negocio.

- **Schema set**  
  *Familia:* `comparativa técnica`  
  Reúne includes, imports y recursos autorizados en una unidad compilable y versionada.

- **Schema-validity assessment**  
  *Familia:* `tabla de estados`  
  Evalúa nodos contra declaraciones, tipos y restricciones después del parseo XML.

- **Capas restantes**  
  *Familia:* `validación y decisión`  
  Separa resultado XSD de autorización, reglas de negocio, persistencia y efectos externos.


### 📑 Sección: Propósito y anatomía de XSD (5 conceptos)

- **Instancia, schema y assessment**  
  *Familia:* `espectro de verificación`  
  Envía un XML instance document a un procesador schema-aware para obtener validez y propiedades tipadas.

- **xs:schema**  
  *Familia:* `tabla de estados`  
  Declara el documento de schema, namespaces, versión y valores predeterminados de cualificación.

- **Declaraciones y definiciones**  
  *Familia:* `validación y decisión`  
  Distingue elementos y atributos declarados de tipos, grupos y componentes definidos.

- **Elementos globales y locales**  
  *Familia:* `espectro de verificación`  
  Decide qué nombres pueden iniciar documentos o reutilizarse desde distintos contextos.

- **Asociación con schemas**  
  *Familia:* `tabla de estados`  
  Trata schemaLocation como una pista y conserva la selección autorizada del schema en la aplicación.


### 📑 Sección: Tipos simples de XSD (5 conceptos)

- **string, normalizedString y token**  
  *Familia:* `validación y decisión`  
  Diferencia conservación, reemplazo y colapso de whitespace.

- **boolean, decimal e integer**  
  *Familia:* `espectro de verificación`  
  Usa espacios de valores definidos por XSD sin heredar automáticamente límites de un lenguaje.

- **date, time, dateTime y duration**  
  *Familia:* `tabla de estados`  
  Modela zonas horarias, ausencia de zona, componentes parciales y duraciones con semántica precisa.

- **hexBinary, base64Binary y anyURI**  
  *Familia:* `validación y decisión`  
  Representa octetos o identificadores mediante tipos con espacios léxicos propios.

- **QName, ID e IDREF**  
  *Familia:* `espectro de verificación`  
  Relaciona nombres expandidos e identidades entendiendo el contexto de namespaces y del documento.


### 📑 Sección: Restricciones y facets XSD (5 conceptos)

- **restriction y base type**  
  *Familia:* `tabla de estados`  
  Deriva un tipo reduciendo el espacio de valores aceptado sin cambiar arbitrariamente su significado.

- **length, minLength y maxLength**  
  *Familia:* `validación y decisión`  
  Limita unidades según el tipo y no confunde longitud léxica con bytes almacenados.

- **pattern**  
  *Familia:* `espectro de verificación`  
  Aplica el dialecto regex de XSD y evita asumir comportamiento idéntico al de JavaScript, PCRE o .NET.

- **enumeration y whiteSpace**  
  *Familia:* `tabla de estados`  
  Declara conjuntos cerrados y normalización antes de otras restricciones.

- **Rangos y dígitos**  
  *Familia:* `validación y decisión`  
  Combina límites inclusivos o exclusivos con totalDigits y fractionDigits cuando el dominio decimal lo exige.


### 📑 Sección: Tipos complejos y modelos de contenido (5 conceptos)

- **complexType**  
  *Familia:* `espectro de verificación`  
  Reúne contenido de elementos, atributos y derivación bajo un tipo reutilizable.

- **sequence**  
  *Familia:* `tabla de estados`  
  Exige hijos en un orden declarado y con las cardinalidades correspondientes.

- **choice y all**  
  *Familia:* `validación y decisión`  
  Modela alternativas o conjuntos limitados cuyo orden no es significativo según las reglas de cada compositor.

- **Atributos en tipos complejos**  
  *Familia:* `espectro de verificación`  
  Declara uso opcional, requerido o prohibido y valores default o fixed.

- **simpleContent y mixed**  
  *Familia:* `tabla de estados`  
  Añade atributos a un valor textual o permite texto intercalado con elementos.


### 📑 Sección: Cardinalidad, ausencia y nil (5 conceptos)

- **minOccurs y maxOccurs**  
  *Familia:* `validación y decisión`  
  Distingue elemento opcional, obligatorio, repetible o sin límite declarado.

- **use required, optional y prohibited**  
  *Familia:* `espectro de verificación`  
  Controla presencia de atributos independientemente de su tipo.

- **default y fixed**  
  *Familia:* `tabla de estados`  
  Diferencia valor aportado por el schema de un valor obligatorio cuando aparece.

- **nillable y xsi:nil**  
  *Familia:* `validación y decisión`  
  Representa un elemento presente sin valor, distinto de que el elemento no exista.

- **Vacío, ausente, nil y cadena vacía**  
  *Familia:* `espectro de verificación`  
  Evita colapsar cuatro estados que pueden tener reglas de negocio diferentes.


### 📑 Sección: Reutilización y composición XSD (5 conceptos)

- **Tipos nombrados y anónimos**  
  *Familia:* `tabla de estados`  
  Elige reutilización global o definición local según la estabilidad del vocabulario.

- **model groups y attributeGroup**  
  *Familia:* `validación y decisión`  
  Reutiliza conjuntos coherentes de partículas o atributos.

- **include**  
  *Familia:* `espectro de verificación`  
  Compone documentos de schema que pertenecen al mismo target namespace.

- **import**  
  *Familia:* `tabla de estados`  
  Hace disponibles componentes de otro namespace mediante una relación explícita.

- **override y redefine**  
  *Familia:* `validación y decisión`  
  Comprende mecanismos de reemplazo y sus diferencias entre versiones antes de usarlos para evolución.


### 📑 Sección: Namespaces y conjuntos de schemas XSD (5 conceptos)

- **targetNamespace**  
  *Familia:* `espectro de verificación`  
  Asigna los componentes globales del schema a un vocabulario identificable.

- **elementFormDefault**  
  *Familia:* `tabla de estados`  
  Decide si elementos locales de instancias deben aparecer cualificados.

- **attributeFormDefault**  
  *Familia:* `validación y decisión`  
  Controla cualificación de atributos locales de forma independiente.

- **Schemas sin namespace**  
  *Familia:* `espectro de verificación`  
  Reconoce sus límites de composición y evita convertir ausencia de namespace en una convención global.

- **Schema set y resolución controlada**  
  *Familia:* `tabla de estados`  
  Construye el conjunto de documentos importados mediante catalogs o resolvers deterministas.


### 📑 Sección: Derivación y polimorfismo XSD (5 conceptos)

- **extension de complexType**  
  *Familia:* `telar relacional`  
  Añade contenido o atributos respetando el modelo de la base.

- **restriction de complexType**  
  *Familia:* `jerarquía y dependencias`  
  Reduce formas aceptadas bajo reglas estrictas de derivación válida.

- **Tipos abstractos**  
  *Familia:* `validación y decisión`  
  Obliga a que una instancia utilice un tipo derivado concreto.

- **xsi:type**  
  *Familia:* `telar relacional`  
  Selecciona dinámicamente un tipo derivado sin cambiar el nombre del elemento.

- **substitution groups**  
  *Familia:* `jerarquía y dependencias`  
  Permite sustituir un elemento global por miembros declarados de su grupo.


### 📑 Sección: Identidad y relaciones XSD (5 conceptos)

- **xs:unique**  
  *Familia:* `validación y decisión`  
  Exige combinaciones únicas para nodos seleccionados dentro de un alcance.

- **xs:key**  
  *Familia:* `telar relacional`  
  Añade presencia obligatoria a una restricción de identidad única.

- **xs:keyref**  
  *Familia:* `jerarquía y dependencias`  
  Relaciona valores con una key declarada dentro del ámbito permitido.

- **selector y field XPath subset**  
  *Familia:* `validación y decisión`  
  Usa el subconjunto definido por XSD, no cualquier expresión XPath general.

- **ID, IDREF y relaciones entre documentos**  
  *Familia:* `telar relacional`  
  Reconoce que restricciones de identidad ordinarias se evalúan sobre el documento validado, no una base global.


### 📑 Sección: Capacidades de XSD 1.1 (5 conceptos)

- **xs:assert**  
  *Familia:* `jerarquía y dependencias`  
  Expresa invariantes sobre el contenido mediante el subconjunto XPath admitido por XSD 1.1.

- **Type alternatives**  
  *Familia:* `validación y decisión`  
  Elige el tipo de un elemento según condiciones de la instancia.

- **Open content**  
  *Familia:* `telar relacional`  
  Permite puntos de extensión sin renunciar al modelo conocido.

- **Assertions en simpleType**  
  *Familia:* `jerarquía y dependencias`  
  Añade condiciones que las facets ordinarias no pueden expresar.

- **Compatibilidad de procesadores**  
  *Familia:* `validación y decisión`  
  Detecta si la implementación soporta XSD 1.1 antes de depender de assertions o alternativas.


### 📑 Sección: PSVI y semántica de validación (5 conceptos)

- **Bien formado frente a válido**  
  *Familia:* `telar relacional`  
  Exige primero sintaxis XML correcta y después conformidad con los componentes XSD.

- **Schema-validity assessment**  
  *Familia:* `jerarquía y dependencias`  
  Relaciona cada nodo relevante con declaraciones, tipos y resultados de validación.

- **PSVI**  
  *Familia:* `validación y decisión`  
  Comprende las propiedades adicionales que un validador puede producir después del assessment.

- **Valores léxicos y valores tipados**  
  *Familia:* `telar relacional`  
  Distingue texto escrito de su representación en el espacio de valores del datatype.

- **Defaults inyectados por validación**  
  *Familia:* `jerarquía y dependencias`  
  Decide si la aplicación depende de información que no estaba explícita en el documento original.


### 📑 Sección: Evolución de schemas XSD (5 conceptos)

- **Cambio aditivo compatible**  
  *Familia:* `validación y decisión`  
  Añade elementos opcionales o extensiones en posiciones diseñadas para consumidores antiguos.

- **Cambio restrictivo o breaking**  
  *Familia:* `telar relacional`  
  Reconoce que hacer obligatorio, cerrar una enumeración o reducir cardinalidad puede rechazar instancias existentes.

- **Namespace versionado**  
  *Familia:* `jerarquía y dependencias`  
  Usa un URI nuevo solo cuando el costo de una frontera incompatible está justificado.

- **Extensibility points**  
  *Familia:* `validación y decisión`  
  Reserva wildcards o contenido abierto con una política clara para lo desconocido.

- **Deprecación y pruebas de compatibilidad**  
  *Familia:* `telar relacional`  
  Mide documentos reales, publica ventanas de migración y valida productores y consumidores antiguos.


### 📑 Sección: Patrones de diseño XSD (5 conceptos)

- **Russian Doll**  
  *Familia:* `jerarquía y dependencias`  
  Mantiene componentes locales y una raíz global para encapsular un vocabulario pequeño.

- **Salami Slice**  
  *Familia:* `validación y decisión`  
  Declara muchos elementos globales reutilizables y asume el costo de una superficie amplia.

- **Venetian Blind**  
  *Familia:* `telar relacional`  
  Combina tipos globales reutilizables con elementos principalmente locales.

- **Garden of Eden**  
  *Familia:* `jerarquía y dependencias`  
  Globaliza elementos y tipos para máxima reutilización y mayor complejidad de gobierno.

- **Code generation y binding**  
  *Familia:* `validación y decisión`  
  Evita confundir clases generadas con el contrato normativo o perder construcciones XML que el lenguaje no representa.


### 📑 Sección: Validación y operación XSD (5 conceptos)

- **XSD en integraciones**  
  *Familia:* `cola y consumidor`  
  Publica el elemento raíz, namespace y versión aceptados por productores y consumidores.

- **Pipeline de assessment**  
  *Familia:* `workflow y decisiones`  
  Parsea, resuelve, compila, valida y transforma errores en una respuesta estructurada.

- **Golden corpus**  
  *Familia:* `evidencia y latencia`  
  Conserva instancias válidas representativas con resultado tipado esperado.

- **Invalid corpus**  
  *Familia:* `validación y decisión`  
  Fija violaciones de tipo, cardinalidad, identidad, assertion y composición.

- **Contract diff**  
  *Familia:* `espectro de verificación`  
  Clasifica cambios aditivos, restrictivos e incompatibles antes de rollout o rollback.


### 📑 Sección: Listas, uniones y datatypes propios (5 conceptos)

- **xs:list**  
  *Familia:* `análisis y emisión`  
  Define una lista de valores atómicos separados léxicamente bajo reglas de whitespace.

- **xs:union**  
  *Familia:* `validación y decisión`  
  Acepta valores pertenecientes a uno de varios member types sin ocultar ambigüedad.

- **Atomic, list y union**  
  *Familia:* `jerarquía y dependencias`  
  Distingue las tres variedades de tipo simple y las facets que admite cada una.

- **Orden de evaluación**  
  *Familia:* `flujo de transformación`  
  Comprende cómo un valor puede ajustarse a más de un miembro y qué tipo se informa.

- **Representación léxica y canónica**  
  *Familia:* `análisis y emisión`  
  Separa texto aceptado, espacio de valores y forma canónica del datatype.


### 📑 Sección: Wildcards y modelos abiertos (5 conceptos)

- **xs:any**  
  *Familia:* `validación y decisión`  
  Permite partículas de namespaces declarados bajo una posición y cardinalidad específicas.

- **xs:anyAttribute**  
  *Familia:* `jerarquía y dependencias`  
  Reserva atributos extensibles sin abrir indiscriminadamente todo el documento.

- **Namespace constraints**  
  *Familia:* `aislamiento sobre host`  
  Expresa ##any, ##other, listas o negaciones según la versión de XSD.

- **processContents**  
  *Familia:* `análisis y emisión`  
  Distingue strict, lax y skip y documenta qué garantía ofrece cada uno.

- **Open content**  
  *Familia:* `validación y decisión`  
  Diseña extensión compatible en XSD 1.1 sin perder el modelo conocido.


### 📑 Sección: Anotaciones y documentación (5 conceptos)

- **xs:annotation**  
  *Familia:* `consulta e índice`  
  Asocia información no estructural con un componente del schema.

- **xs:documentation**  
  *Familia:* `telar relacional`  
  Publica intención y uso para personas con idioma y formato controlados.

- **xs:appinfo**  
  *Familia:* `pasaporte del artefacto`  
  Entrega metadatos a herramientas sin convertir una convención privada en semántica XSD.

- **Metadata de versión**  
  *Familia:* `análisis y emisión`  
  Registra propietario, estado y compatibilidad fuera de los nombres de tipos cuando conviene.

- **Referencia generada**  
  *Familia:* `consulta e índice`  
  Produce documentación navegable conservando el schema como autoridad normativa.


### 📑 Sección: Integración del validador (5 conceptos)

- **Compilar el schema set**  
  *Familia:* `flujo de transformación`  
  Resuelve recursos una vez, informa errores de compilación y conserva un digest.

- **Resolver include e import**  
  *Familia:* `evidencia y latencia`  
  Usa catalogs o callbacks con allowlist y nunca descarga schemas arbitrarios por instancia.

- **Validación streaming**  
  *Familia:* `cola y consumidor`  
  Evalúa si el procesador puede validar en flujo y qué restricciones necesitan contexto acumulado.

- **Errores estructurados**  
  *Familia:* `diagnóstico operativo`  
  Conserva código, path, línea, componente y versión sin filtrar el documento completo.

- **Caché y thread safety**  
  *Familia:* `memoria intermedia`  
  Reutiliza schemas compilados solo bajo garantías comprobadas del procesador.


### 📑 Sección: Seguridad, rendimiento y conformidad (5 conceptos)

- **Patterns costosos**  
  *Familia:* `espectro de verificación`  
  Mide expresiones regulares y limita tamaño de valores antes de validarlos.

- **Profundidad recursiva**  
  *Familia:* `acumulación de recursos`  
  Acota anidamiento y modelos recursivos para proteger stack, memoria y tiempo.

- **Schemas no confiables**  
  *Familia:* `validación y decisión`  
  Trata imports, appinfo y resoluciones como contenido capaz de consumir recursos o activar extensiones.

- **W3C XSD test suites**  
  *Familia:* `espectro de verificación`  
  Comprueba conformidad relevante del procesador para 1.0 o 1.1.

- **Fuzz y diferenciales**  
  *Familia:* `evidencia y latencia`  
  Compara validadores para detectar divergencias antes de aceptar contratos hostiles.



## 📖 Recursos de Estudio y Referencias Oficiales
- **[XML Schema Part 0: Primer](https://www.w3.org/TR/xmlschema-0/)** (`tutorial` | Nivel: `beginner`): 
- **[XML Schema (XSD) validation with XmlSchemaSet](https://learn.microsoft.com/en-us/dotnet/standard/data/xml/xml-schema-xsd-validation-with-xmlschemaset)** (`tutorial` | Nivel: `intermediate`): 
- **[W3C XML Schema versioning guide](https://www.w3.org/TR/xmlschema-guide2versioning/)** (`reference` | Nivel: `advanced`): 


---
[← Volver al Inicio](Home) | [Ver Grupo: Datos](Grupo-Data) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
