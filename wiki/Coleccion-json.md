# JSON (JSON)

> **Sintaxis, JSON Schema, Pointer, Patch, seguridad, contratos y producción.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `json` |
| **Grupo Arquitectonico** | [Datos](Grupo-Data) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `json` |
| **Total de Conceptos** | **110 conceptos** |
| **Capitulos / Secciones** | **22 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/json)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/json-en-accion)


## Estudio de Caso Practico: JSON en acción

> **Caso integrado · Orden offline con actualización concurrente:** Una orden creada sin conexión llega como JSON. La frontera detecta nombres duplicados, valida JSON Schema, recupera un importe fuera del rango interoperable y aplica un JSON Patch solo si la revisión todavía coincide.  
> El caso termina con bytes canónicos, digest y una secuencia observable; sintaxis, schema, concurrencia y negocio permanecen como capas distintas.

### Fases de Ejecucion:
1. **Recibir el payload** (Media type y tamaño real): `application/json · max decoded=1 MiB` -> entrada admitida. *Se limita después de descomprimir para evitar payloads expansivos.*
2. **Decodificar y tokenizar** (Bytes a tokens): `UTF-8 → lexer` -> tokens seguros. *Un error conserva ubicación sin devolver todo el payload.*
3. **Detectar duplicados** (Antes del objeto nativo): `orderId aparece dos veces` -> payload rechazado. *Los parsers difieren; el contrato elige rechazar ambigüedad.*
4. **Corregir y validar schema** (Draft 2020-12): `$schema + required + unevaluatedProperties` -> estructura válida. *JSON Schema no autoriza ni ejecuta la orden.*
5. **Detectar número riesgoso** (Interoperabilidad): `total=9007199254740993` -> contrato incompatible. *JSON permite el número, pero no todos los runtimes lo conservan.*
6. **Recuperar con decimal string** (Convención explícita): `total='9007199254740993.00'` -> valor interoperable. *La representación acordada se valida antes de calcular.*
7. **Intentar patch** (Compare-and-set): `test /revision 7` -> patch rechazado. *test protege contra una edición basada en estado antiguo.*
8. **Recargar y aplicar** (Actualización atómica): `test /revision 8 → replace status` -> orden actualizada. *Toda la lista de operaciones se aplica o no se aplica.*
9. **Canonicalizar y sellar** (Bytes deterministas): `JCS → SHA-256` -> artefacto identificable. *El digest cubre bytes canonicalizados, no un objeto abstracto ambiguo.*
10. **Publicar la secuencia** (Framing observable): `RS + JSON + LF` -> orden trazable. *El último evento permanece coloreado y origina la siguiente entrada.*


---

## Catalogo Sistematico de Conceptos (110)

### Seccion: Valores JSON, estructura y contrato (5 conceptos)

- **JSON text y value**  
  *Familia:* `tejido literario`  
  Reconoce un valor completo serializado según la gramática, no una asignación o expresión de lenguaje.

- **Seis clases de valores**  
  *Familia:* `análisis y emisión`  
  Modela object, array, string, number, boolean y null sin inventar tipos básicos adicionales.

- **Instancia y contrato**  
  *Familia:* `espectro de verificación`  
  Distingue el payload concreto del schema, perfil o regla de negocio que describe formas aceptables.

- **Bytes y UTF-8**  
  *Familia:* `capas internas`  
  Decodifica intercambio abierto con UTF-8 y una política explícita de BOM y errores.

- **Capas de validez**  
  *Familia:* `validación y decisión`  
  Separa framing, sintaxis, schema, semántica, autorización y persistencia segura.


### Seccion: Sintaxis JSON desde cero (5 conceptos)

- **JSON text y JSON value**  
  *Familia:* `configuración declarativa`  
  Reconoce que RFC 8259 permite cualquier valor JSON completo, aunque ciertos perfiles exijan objeto o array.

- **Objetos**  
  *Familia:* `contratos coordinados`  
  Agrupa miembros nombre-valor entre llaves sin atribuirles automáticamente una clase de lenguaje.

- **Arrays**  
  *Familia:* `tabla de estados`  
  Conserva una secuencia ordenada de valores posiblemente heterogéneos.

- **Strings, numbers, booleans y null**  
  *Familia:* `configuración declarativa`  
  Domina los únicos valores escalares definidos por la sintaxis.

- **Whitespace, comas y dos puntos**  
  *Familia:* `contratos coordinados`  
  Usa solamente la gramática permitida: JSON estándar no admite comentarios ni trailing commas.


### Seccion: Strings, Unicode y escapes JSON (5 conceptos)

- **UTF-8 para intercambio abierto**  
  *Familia:* `tabla de estados`  
  Codifica JSON entre sistemas con UTF-8 según la interoperabilidad requerida por RFC 8259.

- **Escapes de comillas, slash y control**  
  *Familia:* `configuración declarativa`  
  Representa caracteres reservados o de control mediante las secuencias definidas.

- **Escapes Unicode**  
  *Familia:* `contratos coordinados`  
  Interpreta uXXXX como unidades UTF-16 de escape, incluyendo pares sustitutos cuando corresponda.

- **BOM**  
  *Familia:* `tabla de estados`  
  No genera byte order mark y decide explícitamente cómo tratar una entrada que lo contiene.

- **Normalización Unicode**  
  *Familia:* `configuración declarativa`  
  No asume que strings visualmente iguales tienen la misma secuencia de puntos de código.


### Seccion: Números JSON (5 conceptos)

- **Gramática numérica**  
  *Familia:* `contratos coordinados`  
  Combina signo, parte entera, fracción y exponente sin ceros iniciales no permitidos.

- **NaN e Infinity ausentes**  
  *Familia:* `tabla de estados`  
  Rechaza valores no finitos porque no pertenecen a la gramática JSON.

- **Interoperabilidad IEEE 754**  
  *Familia:* `configuración declarativa`  
  Reconoce el rango entero exacto ampliamente interoperable y evita pérdidas silenciosas.

- **Decimal y dinero**  
  *Familia:* `contratos coordinados`  
  Transporta precisión contractual mediante una estrategia acordada, con frecuencia un string decimal validado.

- **Números grandes y exponentes**  
  *Familia:* `tabla de estados`  
  Establece límites y conversión antes de mapear a tipos nativos de tamaño fijo.


### Seccion: Objetos, arrays y estados JSON (5 conceptos)

- **Nombres de miembro únicos**  
  *Familia:* `configuración declarativa`  
  Evita duplicados porque los parsers difieren entre conservar primero, último, todos o rechazar.

- **Orden de miembros**  
  *Familia:* `contratos coordinados`  
  No usa el orden de propiedades de un objeto como contrato semántico.

- **Orden de arrays**  
  *Familia:* `tabla de estados`  
  Conserva la posición cuando forma parte del significado.

- **null frente a propiedad ausente**  
  *Familia:* `configuración declarativa`  
  Define si ambos estados significan desconocido, borrado, vacío o no aplicable.

- **Fechas, bytes y enums como convenciones**  
  *Familia:* `contratos coordinados`  
  Documenta formatos porque JSON básico no define tipos nativos para ellos.


### Seccion: Parsing y serialización JSON (5 conceptos)

- **Lexer, parser y modelo nativo**  
  *Familia:* `tabla de estados`  
  Convierte tokens en valores del runtime sin asumir equivalencia exacta de tipos.

- **Errores y offsets**  
  *Familia:* `configuración declarativa`  
  Reporta ubicación y causa útil sin devolver el payload completo ni secretos.

- **Serialización determinista o libre**  
  *Familia:* `contratos coordinados`  
  Distingue salida válida ordinaria de una forma canonical requerida para digest o firma.

- **Streaming JSON**  
  *Familia:* `tabla de estados`  
  Usa parser incremental, text sequences o un framing explícito para flujos grandes.

- **Media type application/json**  
  *Familia:* `configuración declarativa`  
  Alinea encabezado, bytes y expectativas en vez de inferir el formato por extensión.


### Seccion: Fundamentos de JSON Schema 2020-12 (5 conceptos)

- **Instancia, schema y subschema**  
  *Familia:* `validación y decisión`  
  Evalúa valores JSON contra schemas que pueden contener otros schemas.

- **$schema y dialecto**  
  *Familia:* `espectro de verificación`  
  Declara qué meta-schema y vocabularios determinan el significado de las palabras clave.

- **$id y base URI**  
  *Familia:* `constelación de mecanismos`  
  Asigna identidad y modifica la resolución de referencias relativas.

- **Schemas booleanos**  
  *Familia:* `validación y decisión`  
  Usa true para aceptar cualquier instancia y false para rechazar todas.

- **Assertions y annotations**  
  *Familia:* `espectro de verificación`  
  Distingue restricciones de información como title, description, default o examples.


### Seccion: Tipos y restricciones JSON Schema (5 conceptos)

- **type**  
  *Familia:* `constelación de mecanismos`  
  Restringe la instancia a uno o varios tipos JSON sin realizar coerción automática.

- **enum y const**  
  *Familia:* `validación y decisión`  
  Declara un conjunto cerrado o un único valor permitido.

- **minimum, maximum y multipleOf**  
  *Familia:* `espectro de verificación`  
  Valida números considerando precisión de la implementación.

- **minLength, maxLength y pattern**  
  *Familia:* `constelación de mecanismos`  
  Controla strings con longitud y regex bajo expectativas Unicode.

- **format**  
  *Familia:* `validación y decisión`  
  Reconoce que puede ser anotación o assertion según vocabulario, configuración y soporte del validador.


### Seccion: Objetos en JSON Schema (5 conceptos)

- **properties y required**  
  *Familia:* `espectro de verificación`  
  Separa schema de una propiedad de la obligación de que esa propiedad exista.

- **patternProperties**  
  *Familia:* `constelación de mecanismos`  
  Aplica subschemas a nombres que coinciden con expresiones regulares.

- **additionalProperties**  
  *Familia:* `validación y decisión`  
  Controla propiedades no cubiertas dentro del objeto evaluado por esa palabra clave.

- **unevaluatedProperties**  
  *Familia:* `espectro de verificación`  
  Cierra propiedades después de considerar schemas aplicados por composición.

- **dependentRequired y dependentSchemas**  
  *Familia:* `constelación de mecanismos`  
  Activa presencia adicional o validación cuando aparece una propiedad.


### Seccion: Arrays y composición JSON Schema (5 conceptos)

- **prefixItems e items**  
  *Familia:* `validación y decisión`  
  Distingue tuplas posicionales del schema repetido para elementos restantes.

- **contains, minContains y maxContains**  
  *Familia:* `espectro de verificación`  
  Exige una cantidad de elementos que satisfagan un subschema.

- **uniqueItems**  
  *Familia:* `constelación de mecanismos`  
  Comprueba igualdad estructural con un costo que debe medirse en arrays grandes.

- **allOf, anyOf, oneOf y not**  
  *Familia:* `validación y decisión`  
  Compone condiciones sin asumir que allOf fusiona objetos o que oneOf es siempre un discriminator.

- **if, then y else**  
  *Familia:* `espectro de verificación`  
  Aplica restricciones condicionales sin modificar la instancia.


### Seccion: Referencias y vocabularios JSON Schema (5 conceptos)

- **$defs y $ref**  
  *Familia:* `constelación de mecanismos`  
  Reutiliza schemas por URI y JSON Pointer sin copiar reglas.

- **$anchor**  
  *Familia:* `validación y decisión`  
  Asigna nombres estables a ubicaciones dentro de un schema resource.

- **$dynamicAnchor y $dynamicRef**  
  *Familia:* `espectro de verificación`  
  Permite extensión recursiva mediante alcance dinámico.

- **Compound Schema Documents**  
  *Familia:* `constelación de mecanismos`  
  Agrupa varios schema resources conservando identidades URI independientes.

- **$vocabulary y meta-schemas**  
  *Familia:* `validación y decisión`  
  Declara qué conjuntos de palabras clave necesita comprender una implementación.


### Seccion: Resultado y evolución JSON Schema (5 conceptos)

- **Output formats**  
  *Familia:* `espectro de verificación`  
  Consume resultados basic, detailed o verbose sin depender de mensajes humanos no estables.

- **Regex y portabilidad**  
  *Familia:* `constelación de mecanismos`  
  Prueba patrones con Unicode y el motor real porque la interoperabilidad no cubre toda extensión de regex.

- **format-annotation y format-assertion**  
  *Familia:* `validación y decisión`  
  Configura explícitamente si formatos producen metadatos o rechazan instancias.

- **Cambio aditivo y propiedades desconocidas**  
  *Familia:* `espectro de verificación`  
  Decide si consumidores toleran campos nuevos antes de cerrar el objeto.

- **Versionado de dialecto y schema**  
  *Familia:* `constelación de mecanismos`  
  Conserva $schema, $id, artefactos y corpus de compatibilidad por versión.


### Seccion: JSON Pointer, Patch y Merge Patch (5 conceptos)

- **JSON Pointer**  
  *Familia:* `secuencia operativa`  
  Identifica una ubicación mediante tokens separados por slash y escapes ~0 y ~1.

- **JSON Patch**  
  *Familia:* `máquina de estados`  
  Aplica operaciones add, remove, replace, move, copy y test en orden.

- **test como control de concurrencia**  
  *Familia:* `evidencia y latencia`  
  Verifica revision o valor esperado antes de producir efectos.

- **JSON Merge Patch**  
  *Familia:* `secuencia operativa`  
  Describe cambios por forma de objeto sabiendo que null elimina y arrays se reemplazan completos.

- **Fallo y persistencia atómica**  
  *Familia:* `máquina de estados`  
  Detiene el patch al fallar una operación y evita guardar un documento parcialmente actualizado.


### Seccion: Consultas, perfiles y secuencias JSON (5 conceptos)

- **JSONPath RFC 9535**  
  *Familia:* `evidencia y latencia`  
  Selecciona nodos mediante una consulta; no sustituye a JSON Pointer como identificador singular de ubicación.

- **I-JSON RFC 7493**  
  *Familia:* `secuencia operativa`  
  Reduce opciones problemáticas para mejorar interoperabilidad entre implementaciones.

- **JSON Text Sequences RFC 7464**  
  *Familia:* `máquina de estados`  
  Delimita textos JSON con record separator para transmisión incremental robusta.

- **NDJSON como convención**  
  *Familia:* `evidencia y latencia`  
  Distingue líneas JSON ampliamente usadas de un estándar IETF equivalente.

- **JSON Canonicalization Scheme**  
  *Familia:* `secuencia operativa`  
  Produce una representación determinista bajo las restricciones de JCS.


### Seccion: JSON-LD y semántica enlazada (5 conceptos)

- **Contexto JSON-LD**  
  *Familia:* `máquina de estados`  
  Relaciona términos compactos con IRIs sin cambiar la sintaxis básica JSON.

- **Expansión y compactación**  
  *Familia:* `evidencia y latencia`  
  Cambia la representación conservando el modelo de datos JSON-LD.

- **Node objects e identificadores**  
  *Familia:* `secuencia operativa`  
  Representa recursos y relaciones mediante @id y palabras clave definidas.

- **Framing y flattening**  
  *Familia:* `máquina de estados`  
  Organiza una vista concreta o una forma plana de un grafo.

- **Frontera con JSON ordinario**  
  *Familia:* `evidencia y latencia`  
  No interpreta cualquier objeto JSON como datos enlazados sin un contexto y procesamiento JSON-LD.


### Seccion: Seguridad JSON (5 conceptos)

- **Duplicados y parser differentials**  
  *Familia:* `secuencia operativa`  
  Rechaza entradas cuya interpretación cambia entre gateway, validador y aplicación.

- **Prototype pollution**  
  *Familia:* `máquina de estados`  
  No copia claves no confiables sobre prototipos u objetos de configuración sensibles.

- **Profundidad, tamaño y complejidad**  
  *Familia:* `evidencia y latencia`  
  Limita nesting, strings, arrays, miembros y trabajo de validación.

- **Canonicalización y firmas**  
  *Familia:* `secuencia operativa`  
  Firma bytes definidos por un esquema canonical y no una serialización incidental.

- **Inyección y logs**  
  *Familia:* `máquina de estados`  
  Mantiene datos separados de consultas, templates y código, y neutraliza caracteres de control al registrar.


### Seccion: JSON en producción (5 conceptos)

- **Content negotiation y perfiles**  
  *Familia:* `evidencia y latencia`  
  Publica media type, versión, charset aplicable y restricciones del contrato.

- **Streaming y backpressure**  
  *Familia:* `secuencia operativa`  
  Procesa secuencias grandes sin materializar todo el payload ni desbordar consumidores lentos.

- **Compresión y límites descomprimidos**  
  *Familia:* `máquina de estados`  
  Aplica presupuestos después de descomprimir para resistir payloads pequeños que expanden demasiado.

- **Telemetría y redacción**  
  *Familia:* `evidencia y latencia`  
  Registra versión de schema, tamaño, duración y error sin exponer datos personales o credenciales.

- **Schema registry y gobernanza**  
  *Familia:* `secuencia operativa`  
  Versiona contratos, propietarios, compatibilidad, deprecación y evidencia de despliegue.


### Seccion: JSON en APIs, configuración y eventos (5 conceptos)

- **JSON Schema en contratos**  
  *Familia:* `cola y consumidor`  
  Publica dialecto, IDs y palabras clave aceptadas por productor y consumidor.

- **OpenAPI Schema Object**  
  *Familia:* `validación y decisión`  
  Reconoce similitudes y diferencias con JSON Schema según la versión de OpenAPI.

- **Configuración validada**  
  *Familia:* `comparativa técnica`  
  Comprueba el archivo completo al iniciar y evita defaults silenciosos para claves críticas.

- **Envelope y payload**  
  *Familia:* `ida y vuelta`  
  Separa identidad, versión, tiempo y trazabilidad del dato específico del evento.

- **Frontera con XML y XSD**  
  *Familia:* `configuración declarativa`  
  Convierte únicamente mediante un mapping que trate atributos, namespaces, orden, texto mixto y precisión.


### Seccion: Validación, pruebas y rollout JSON (5 conceptos)

- **Pipeline de validación**  
  *Familia:* `workflow y decisiones`  
  Limita, decodifica, parsea, detecta duplicados, valida schema y después aplica negocio.

- **Golden corpus**  
  *Familia:* `flujo de transformación`  
  Conserva instancias válidas con resultado de evaluación y serialización esperado.

- **Invalid corpus**  
  *Familia:* `validación y decisión`  
  Fija errores de sintaxis, tipo, referencias, composición, límites y seguridad.

- **Fuzz y parser differentials**  
  *Familia:* `análisis y emisión`  
  Compara parsers ante Unicode, números, duplicados y profundidad hostiles.

- **Contract diff y rollback**  
  *Familia:* `cola y consumidor`  
  Clasifica cambios, mide consumidores y conserva schemas y productores anteriores recuperables.


### Seccion: Modelado de contratos JSON (5 conceptos)

- **Naming conventions**  
  *Familia:* `mapa de memoria`  
  Elige nombres estables y evita reflejar automáticamente detalles del runtime o base de datos.

- **IDs y referencias**  
  *Familia:* `despacho de runtime`  
  Distingue identidad de recurso, correlación, ubicación con Pointer y referencia de schema.

- **Envelopes**  
  *Familia:* `análisis y emisión`  
  Declara versión, tipo, timestamp y metadata sin ocultar el payload de dominio.

- **Discriminated unions**  
  *Familia:* `matriz de señales`  
  Usa una propiedad discriminadora estable y variantes cerradas o extensibles de forma consciente.

- **Campos calculados y autoridad**  
  *Familia:* `evidencia y latencia`  
  Indica qué sistema puede escribir cada valor y evita dos fuentes de verdad.


### Seccion: Mapeo a runtimes (5 conceptos)

- **Objeto JSON frente a objeto del lenguaje**  
  *Familia:* `configuración declarativa`  
  Convierte un conjunto de miembros en una estructura nativa sin atribuir prototype o métodos.

- **Precisión numérica**  
  *Familia:* `análisis y emisión`  
  Protege enteros grandes, decimals y exponentes antes de mapear a IEEE 754 o tipos de tamaño fijo.

- **Mutabilidad y copia**  
  *Familia:* `mapa de memoria`  
  Decide si el modelo nativo comparte referencias, congela datos o construye una nueva representación.

- **Fechas y bytes**  
  *Familia:* `validación y decisión`  
  Publica formatos de string o envelopes porque JSON básico no posee tipos datetime o binary.

- **Ausente, null y default**  
  *Familia:* `despacho de runtime`  
  Conserva tres estados separados y define quién puede materializar un valor predeterminado.


### Seccion: Formatos vecinos y límites (5 conceptos)

- **JSON frente a object literal**  
  *Familia:* `comparativa técnica`  
  Rechaza funciones, undefined, comentarios, claves sin comillas y otras extensiones de JavaScript.

- **JSON frente a JSON5**  
  *Familia:* `configuración declarativa`  
  No acepta sintaxis ampliada en una frontera application/json salvo contrato distinto.

- **JSON frente a YAML**  
  *Familia:* `contratos coordinados`  
  Reconoce modelos y parsers diferentes aunque una parte de YAML pueda representar valores semejantes.

- **JSON frente a CBOR**  
  *Familia:* `análisis y emisión`  
  Elige formato binario cuando tipos, tamaño o framing lo justifican y negocia media type.

- **Framing y secuencias**  
  *Familia:* `consulta e índice`  
  Usa longitud, delimitador o JSON Text Sequences; concatenar valores no crea por sí solo un stream parseable.



## Referencias Bibliograficas y Documentacion Oficial
- **[Working with JSON](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON)** (`tutorial` | Nivel: `beginner`): 
- **[Creating your first JSON Schema](https://json-schema.org/learn/getting-started-step-by-step)** (`tutorial` | Nivel: `intermediate`): 
- **[RFC 8259: The JavaScript Object Notation Data Interchange Format](https://www.rfc-editor.org/info/rfc8259/)** (`specification` | Nivel: `advanced`): 


---
[<- Volver al Inicio](Home) | [Ver Grupo: Datos](Grupo-Data) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
