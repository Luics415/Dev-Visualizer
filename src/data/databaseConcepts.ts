import type { StudyConcept } from "./conceptTypes";

export const databaseConcepts = [
  {
    "title": "Qué es una base de datos",
    "description": "Sistema que organiza, persiste y consulta información con reglas de consistencia.",
    "section": "Fundamentos y modelado",
    "family": "anatomía del concepto",
    "layout": "wide",
    "scene": {
      "variant": "anatomy",
      "code": "write → persist → query",
      "nodes": [
        "application|request",
        "database|store",
        "query|retrieve",
        "result|return"
      ],
      "outcome": "datos durables",
      "caption": "Una base de datos coordina más que archivos: concurrencia, índices y recuperación."
    }
  },
  {
    "title": "DBMS",
    "description": "Software que administra almacenamiento, consultas, transacciones, seguridad y recuperación.",
    "section": "Fundamentos y modelado",
    "family": "cola y consumidor",
    "layout": "standard",
    "scene": {
      "variant": "queue",
      "code": "client → DBMS → files",
      "nodes": [
        "client|SQL/API",
        "DBMS|planner",
        "buffer|memory",
        "disk|durable"
      ],
      "outcome": "motor coordinado",
      "caption": "El motor traduce operaciones lógicas a trabajo físico."
    }
  },
  {
    "title": "Esquema",
    "description": "Define estructuras, tipos, relaciones y restricciones esperadas.",
    "section": "Fundamentos y modelado",
    "family": "ecosistema coordinado",
    "layout": "standard",
    "scene": {
      "variant": "orbit",
      "code": "schema = tables + constraints",
      "nodes": [
        "tables|entities",
        "columns|attributes",
        "constraints|rules",
        "relations|links"
      ],
      "outcome": "estructura explícita",
      "caption": "Un esquema puede ser estricto o flexible, pero siempre existe un modelo real."
    }
  },
  {
    "title": "Modelo conceptual, lógico y físico",
    "description": "Separa significado del negocio, estructura de datos e implementación de almacenamiento.",
    "section": "Fundamentos y modelado",
    "family": "evidencia y latencia",
    "layout": "standard",
    "scene": {
      "variant": "trace",
      "code": "conceptual → logical → physical",
      "nodes": [
        "domain|concepts",
        "logical|relations",
        "physical|indexes",
        "engine|files"
      ],
      "outcome": "decisiones separadas",
      "caption": "Mezclar niveles dificulta cambiar tecnología sin romper el dominio."
    }
  },
  {
    "title": "Entidades y atributos",
    "description": "Representan objetos con identidad y propiedades.",
    "section": "Fundamentos y modelado",
    "family": "consulta e índice",
    "layout": "standard",
    "scene": {
      "variant": "database",
      "code": "Champion(id, name, role)",
      "nodes": [
        "entity|Champion",
        "id|identity",
        "name|attribute",
        "role|attribute"
      ],
      "outcome": "registro modelado",
      "caption": "La entidad del dominio no siempre coincide exactamente con una tabla."
    }
  },
  {
    "title": "Relaciones",
    "description": "Modelan asociaciones uno a uno, uno a muchos y muchos a muchos.",
    "section": "Fundamentos y modelado",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "team ↔ champion",
      "nodes": [
        "1:1|profile",
        "1:N|team members",
        "N:M|champions tags",
        "FK|link"
      ],
      "outcome": "vínculos explícitos",
      "caption": "La cardinalidad determina constraints y consultas."
    }
  },
  {
    "title": "Claves primarias",
    "description": "Identifican cada fila de forma única y estable.",
    "section": "Fundamentos y modelado",
    "family": "contratos coordinados",
    "layout": "standard",
    "scene": {
      "variant": "cards",
      "code": "PRIMARY KEY (id)",
      "nodes": [
        "row A|id=1",
        "row B|id=2",
        "PK|unique",
        "lookup|direct"
      ],
      "outcome": "identidad única",
      "caption": "Una clave de negocio puede cambiar; una surrogate key reduce acoplamiento."
    }
  },
  {
    "title": "Claves foráneas",
    "description": "Garantizan que una referencia apunte a una fila existente.",
    "section": "Fundamentos y modelado",
    "family": "topología y tráfico",
    "layout": "wide",
    "scene": {
      "variant": "network",
      "code": "team_id REFERENCES teams(id)",
      "nodes": [
        "child|member",
        "FK|team_id",
        "parent|team",
        "constraint|check"
      ],
      "outcome": "referencia válida",
      "caption": "Las acciones ON DELETE deben reflejar el negocio."
    }
  },
  {
    "title": "Normalización",
    "description": "Reduce redundancia separando hechos que cambian de forma independiente.",
    "section": "Fundamentos y modelado",
    "family": "diagnóstico operativo",
    "layout": "wide",
    "scene": {
      "variant": "terminal",
      "code": "orders + order_items",
      "nodes": [
        "wide table|duplicates",
        "split|relations",
        "FK|connect",
        "update|one place"
      ],
      "outcome": "redundancia menor",
      "caption": "Normalizar mejora consistencia, no necesariamente cada consulta."
    }
  },
  {
    "title": "Desnormalización",
    "description": "Duplica datos de forma deliberada para lecturas específicas y exige sincronización.",
    "section": "Fundamentos y modelado",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "state-machine",
      "code": "order.total cached",
      "nodes": [
        "source|items",
        "derived|total",
        "copy|stored",
        "sync|update"
      ],
      "outcome": "lectura rápida",
      "caption": "Toda desnormalización crea una obligación de coherencia."
    }
  },
  {
    "title": "Tipos de datos",
    "description": "Eligen representación, rango, precisión y operaciones válidas.",
    "section": "Fundamentos y modelado",
    "family": "análisis y emisión",
    "layout": "standard",
    "scene": {
      "variant": "compiler",
      "code": "INTEGER · TEXT · TIMESTAMPTZ · NUMERIC",
      "nodes": [
        "integer|count",
        "numeric|money",
        "text|label",
        "timestamp|instant"
      ],
      "outcome": "tipo adecuado",
      "caption": "El tipo correcto evita conversiones ambiguas y pérdida de precisión."
    }
  },
  {
    "title": "DDL",
    "description": "Crea y modifica tablas, índices, constraints y otros objetos.",
    "section": "SQL y operaciones relacionales",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "CREATE TABLE champions (...)",
      "nodes": [
        "CREATE|new",
        "ALTER|change",
        "DROP|remove",
        "schema|result"
      ],
      "outcome": "estructura modificada",
      "caption": "Los cambios DDL deben viajar mediante migraciones reproducibles."
    }
  },
  {
    "title": "DML",
    "description": "Inserta, actualiza y elimina filas.",
    "section": "SQL y operaciones relacionales",
    "family": "contratos coordinados",
    "layout": "standard",
    "scene": {
      "variant": "cards",
      "code": "INSERT · UPDATE · DELETE",
      "nodes": [
        "INSERT|create",
        "UPDATE|modify",
        "DELETE|remove",
        "rows|affected"
      ],
      "outcome": "datos modificados",
      "caption": "Toda escritura necesita filtros y validación de filas afectadas."
    }
  },
  {
    "title": "SELECT",
    "description": "Proyecta columnas y filtra filas desde una o más relaciones.",
    "section": "SQL y operaciones relacionales",
    "family": "anatomía del concepto",
    "layout": "wide",
    "scene": {
      "variant": "anatomy",
      "code": "SELECT name FROM champions WHERE role='ADC'",
      "nodes": [
        "FROM|source",
        "WHERE|filter",
        "SELECT|project",
        "result|rows"
      ],
      "outcome": "resultado tabular",
      "caption": "El orden lógico difiere del orden escrito."
    }
  },
  {
    "title": "WHERE",
    "description": "Filtra filas antes de agrupación.",
    "section": "SQL y operaciones relacionales",
    "family": "flujo de transformación",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "WHERE level >= 10",
      "nodes": [
        "row|candidate",
        "predicate|check",
        "true|keep",
        "false|discard"
      ],
      "outcome": "filas filtradas",
      "caption": "NULL requiere IS NULL; no se compara con =."
    }
  },
  {
    "title": "ORDER BY y LIMIT",
    "description": "Ordenan resultados y restringen la ventana devuelta.",
    "section": "SQL y operaciones relacionales",
    "family": "planificación de trabajo",
    "layout": "wide",
    "scene": {
      "variant": "scheduler",
      "code": "ORDER BY score DESC LIMIT 10",
      "nodes": [
        "rows|many",
        "sort|score",
        "limit|10",
        "result|top"
      ],
      "outcome": "top N",
      "caption": "Sin ORDER BY, LIMIT no garantiza un orden estable."
    }
  },
  {
    "title": "INSERT",
    "description": "Crea filas y puede devolver valores generados.",
    "section": "SQL y operaciones relacionales",
    "family": "cola y consumidor",
    "layout": "wide",
    "scene": {
      "variant": "queue",
      "code": "INSERT ... RETURNING id",
      "nodes": [
        "values|input",
        "constraints|check",
        "row|write",
        "RETURNING|id"
      ],
      "outcome": "fila creada",
      "caption": "RETURNING evita una consulta adicional para la fila insertada."
    }
  },
  {
    "title": "UPDATE",
    "description": "Cambia columnas de filas seleccionadas por un predicado.",
    "section": "SQL y operaciones relacionales",
    "family": "ciclo de vida",
    "layout": "standard",
    "scene": {
      "variant": "lifecycle",
      "code": "UPDATE orders SET status='paid' WHERE id=42",
      "nodes": [
        "table|orders",
        "WHERE|id=42",
        "SET|status",
        "affected|1"
      ],
      "outcome": "fila actualizada",
      "caption": "Un UPDATE sin WHERE puede modificar toda la tabla."
    }
  },
  {
    "title": "DELETE",
    "description": "Elimina filas respetando relaciones y reglas de cascada.",
    "section": "SQL y operaciones relacionales",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "state-machine",
      "code": "DELETE FROM sessions WHERE expires_at < now()",
      "nodes": [
        "candidate|expired",
        "FK|check",
        "delete|row",
        "count|affected"
      ],
      "outcome": "datos retirados",
      "caption": "Soft delete y hard delete tienen implicaciones distintas."
    }
  },
  {
    "title": "UPSERT",
    "description": "Inserta o actualiza según una restricción de conflicto.",
    "section": "SQL y operaciones relacionales",
    "family": "análisis y emisión",
    "layout": "standard",
    "scene": {
      "variant": "compiler",
      "code": "INSERT ... ON CONFLICT ... DO UPDATE",
      "nodes": [
        "input|row",
        "unique|check",
        "insert|new",
        "update|existing"
      ],
      "outcome": "una fila final",
      "caption": "La clave de conflicto define qué significa duplicado."
    }
  },
  {
    "title": "NULL",
    "description": "Representa ausencia o desconocimiento y usa lógica de tres valores.",
    "section": "SQL y operaciones relacionales",
    "family": "aislamiento sobre host",
    "layout": "standard",
    "scene": {
      "variant": "container",
      "code": "value IS NULL",
      "nodes": [
        "TRUE|match",
        "FALSE|no",
        "UNKNOWN|null",
        "predicate|3-valued"
      ],
      "outcome": "ausencia explícita",
      "caption": "NULL no equivale a cero, cadena vacía ni false."
    }
  },
  {
    "title": "Expresiones y funciones",
    "description": "Transforman columnas con operadores y funciones del motor.",
    "section": "SQL y operaciones relacionales",
    "family": "propagación de eventos",
    "layout": "wide",
    "scene": {
      "variant": "signal",
      "code": "COALESCE(alias, name)",
      "nodes": [
        "column|input",
        "function|apply",
        "expression|compose",
        "value|output"
      ],
      "outcome": "valor calculado",
      "caption": "Funciones pueden impedir usar índices si envuelven la columna equivocada."
    }
  },
  {
    "title": "CTEs",
    "description": "Nombran subconsultas para componer pasos legibles y, según el motor, recursivos.",
    "section": "SQL y operaciones relacionales",
    "family": "consulta e índice",
    "layout": "standard",
    "scene": {
      "variant": "database",
      "code": "WITH ranked AS (...) SELECT ...",
      "nodes": [
        "CTE|step 1",
        "CTE|step 2",
        "main query|consume",
        "result|rows"
      ],
      "outcome": "consulta organizada",
      "caption": "Un CTE es una herramienta de claridad; el plan real depende del optimizador."
    }
  },
  {
    "title": "INNER JOIN",
    "description": "Conserva combinaciones que coinciden en ambos lados.",
    "section": "Joins, agregación y análisis",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "orders JOIN users ON ...",
      "nodes": [
        "orders|left",
        "users|right",
        "ON|match",
        "result|matched"
      ],
      "outcome": "filas combinadas",
      "caption": "La condición de join debe reflejar la relación real."
    }
  },
  {
    "title": "LEFT JOIN",
    "description": "Conserva todas las filas izquierdas aunque no exista coincidencia.",
    "section": "Joins, agregación y análisis",
    "family": "memoria intermedia",
    "layout": "wide",
    "scene": {
      "variant": "cache",
      "code": "teams LEFT JOIN members",
      "nodes": [
        "team|always",
        "member|optional",
        "no match|NULL",
        "result|all teams"
      ],
      "outcome": "faltantes visibles",
      "caption": "Filtrar columnas derechas en WHERE puede convertirlo accidentalmente en INNER JOIN."
    }
  },
  {
    "title": "Self join",
    "description": "Relaciona una tabla consigo misma para jerarquías o comparaciones.",
    "section": "Joins, agregación y análisis",
    "family": "superficie de aplicación",
    "layout": "wide",
    "scene": {
      "variant": "browser",
      "code": "employees e JOIN employees manager",
      "nodes": [
        "employee|child",
        "manager_id|link",
        "manager|same table",
        "result|pair"
      ],
      "outcome": "relación interna",
      "caption": "Aliases separan los dos roles de la misma tabla."
    }
  },
  {
    "title": "Muchos a muchos",
    "description": "Usa una tabla puente con dos claves foráneas y restricciones.",
    "section": "Joins, agregación y análisis",
    "family": "comparativa técnica",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "champion_tags(champion_id, tag_id)",
      "nodes": [
        "champion|left",
        "bridge|pairs",
        "tag|right",
        "unique pair|rule"
      ],
      "outcome": "relación N:M",
      "caption": "La tabla puente puede contener atributos propios de la relación."
    }
  },
  {
    "title": "GROUP BY",
    "description": "Agrupa filas para calcular agregados por clave.",
    "section": "Joins, agregación y análisis",
    "family": "propagación de eventos",
    "layout": "standard",
    "scene": {
      "variant": "signal",
      "code": "GROUP BY role",
      "nodes": [
        "rows|input",
        "key|role",
        "groups|buckets",
        "aggregate|count"
      ],
      "outcome": "resumen por grupo",
      "caption": "Cada columna seleccionada debe pertenecer al grupo o agregarse."
    }
  },
  {
    "title": "Funciones agregadas",
    "description": "Calculan COUNT, SUM, AVG, MIN y MAX sobre conjuntos.",
    "section": "Joins, agregación y análisis",
    "family": "secuencia operativa",
    "layout": "wide",
    "scene": {
      "variant": "timeline",
      "code": "SUM(order_items.total)",
      "nodes": [
        "rows|values",
        "aggregate|reduce",
        "NULL|rules",
        "result|scalar"
      ],
      "outcome": "métrica resumida",
      "caption": "COUNT(*) y COUNT(column) tratan NULL de forma distinta."
    }
  },
  {
    "title": "HAVING",
    "description": "Filtra grupos después de agregar.",
    "section": "Joins, agregación y análisis",
    "family": "ciclo de vida",
    "layout": "standard",
    "scene": {
      "variant": "lifecycle",
      "code": "HAVING COUNT(*) >= 5",
      "nodes": [
        "groups|built",
        "aggregate|count",
        "predicate|>=5",
        "result|qualified"
      ],
      "outcome": "grupos filtrados",
      "caption": "WHERE filtra filas; HAVING filtra resultados agregados."
    }
  },
  {
    "title": "Window functions",
    "description": "Calculan valores sobre una ventana sin colapsar filas.",
    "section": "Joins, agregación y análisis",
    "family": "diagnóstico operativo",
    "layout": "wide",
    "scene": {
      "variant": "terminal",
      "code": "ROW_NUMBER() OVER (PARTITION BY role)",
      "nodes": [
        "rows|preserved",
        "partition|role",
        "order|score",
        "window|rank"
      ],
      "outcome": "fila con contexto",
      "caption": "Permiten rankings, acumulados y comparaciones entre filas."
    }
  },
  {
    "title": "Subqueries",
    "description": "Anidan consultas escalares, correlacionadas o de conjunto.",
    "section": "Joins, agregación y análisis",
    "family": "ecosistema coordinado",
    "layout": "standard",
    "scene": {
      "variant": "orbit",
      "code": "WHERE EXISTS (SELECT 1 ...)",
      "nodes": [
        "outer|row",
        "subquery|test",
        "EXISTS|boolean",
        "result|filter"
      ],
      "outcome": "consulta compuesta",
      "caption": "Una subconsulta correlacionada puede ejecutarse conceptualmente por fila."
    }
  },
  {
    "title": "Set operations",
    "description": "Combinan resultados compatibles mediante UNION, INTERSECT o EXCEPT.",
    "section": "Joins, agregación y análisis",
    "family": "árbol de recursos",
    "layout": "wide",
    "scene": {
      "variant": "filesystem",
      "code": "queryA UNION queryB",
      "nodes": [
        "set A|rows",
        "set B|rows",
        "UNION|dedupe",
        "result|combined"
      ],
      "outcome": "conjunto combinado",
      "caption": "UNION ALL evita deduplicación cuando no es necesaria."
    }
  },
  {
    "title": "NOT NULL",
    "description": "Impide ausencia cuando el atributo es obligatorio.",
    "section": "Integridad y reglas de datos",
    "family": "contratos coordinados",
    "layout": "standard",
    "scene": {
      "variant": "cards",
      "code": "name TEXT NOT NULL",
      "nodes": [
        "insert|input",
        "column|name",
        "NULL|reject",
        "value|accept"
      ],
      "outcome": "dato requerido",
      "caption": "Una restricción de base protege todas las rutas de escritura."
    }
  },
  {
    "title": "UNIQUE",
    "description": "Evita duplicados según una o varias columnas.",
    "section": "Integridad y reglas de datos",
    "family": "planificación de trabajo",
    "layout": "standard",
    "scene": {
      "variant": "scheduler",
      "code": "UNIQUE(email)",
      "nodes": [
        "new row|email",
        "index|lookup",
        "existing|conflict",
        "insert|allow"
      ],
      "outcome": "valor único",
      "caption": "NULL y collation pueden afectar la semántica según el motor."
    }
  },
  {
    "title": "CHECK",
    "description": "Expresa invariantes locales mediante una condición booleana.",
    "section": "Integridad y reglas de datos",
    "family": "validación y decisión",
    "layout": "standard",
    "scene": {
      "variant": "gate",
      "code": "CHECK(quantity > 0)",
      "nodes": [
        "row|candidate",
        "expression|evaluate",
        "true|write",
        "false|reject"
      ],
      "outcome": "invariante aplicada",
      "caption": "CHECK protege importaciones y scripts además de la aplicación."
    }
  },
  {
    "title": "DEFAULT",
    "description": "Proporciona un valor cuando la columna se omite.",
    "section": "Integridad y reglas de datos",
    "family": "tabla de estados",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "status DEFAULT 'pending'",
      "nodes": [
        "INSERT|missing status",
        "default|pending",
        "row|complete",
        "explicit NULL|different"
      ],
      "outcome": "valor inicial",
      "caption": "DEFAULT no reemplaza necesariamente un NULL explícito."
    }
  },
  {
    "title": "Referential actions",
    "description": "Define RESTRICT, CASCADE, SET NULL o SET DEFAULT al modificar padres.",
    "section": "Integridad y reglas de datos",
    "family": "flujo de transformación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "ON DELETE CASCADE",
      "nodes": [
        "parent|delete",
        "FK|relation",
        "action|cascade",
        "children|delete"
      ],
      "outcome": "política aplicada",
      "caption": "La acción debe evitar pérdidas inesperadas de datos."
    }
  },
  {
    "title": "Constraints diferibles",
    "description": "Posponen ciertas comprobaciones hasta el final de la transacción.",
    "section": "Integridad y reglas de datos",
    "family": "configuración declarativa",
    "layout": "wide",
    "scene": {
      "variant": "document",
      "code": "DEFERRABLE INITIALLY DEFERRED",
      "nodes": [
        "statement 1|temporary invalid",
        "statement 2|repair",
        "commit|check",
        "transaction|valid"
      ],
      "outcome": "cambio complejo permitido",
      "caption": "Son útiles para reordenar relaciones dentro de una unidad atómica."
    }
  },
  {
    "title": "Dominios y enums",
    "description": "Centralizan conjuntos de valores o reglas reutilizables.",
    "section": "Integridad y reglas de datos",
    "family": "flujo de ejecución",
    "layout": "standard",
    "scene": {
      "variant": "flow",
      "code": "CREATE TYPE order_status AS ENUM (...)",
      "nodes": [
        "pending|allowed",
        "paid|allowed",
        "unknown|reject",
        "column|typed"
      ],
      "outcome": "vocabulario controlado",
      "caption": "Enums rígidos requieren estrategia de evolución."
    }
  },
  {
    "title": "Triggers",
    "description": "Ejecutan lógica dentro del motor ante cambios de filas o statements.",
    "section": "Integridad y reglas de datos",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "state-machine",
      "code": "AFTER INSERT trigger",
      "nodes": [
        "write|event",
        "trigger|fires",
        "audit|insert",
        "transaction|same"
      ],
      "outcome": "efecto interno",
      "caption": "Los triggers pueden ocultar trabajo y deben documentarse y probarse."
    }
  },
  {
    "title": "Generated columns",
    "description": "Calculan una columna desde otras según una expresión definida.",
    "section": "Integridad y reglas de datos",
    "family": "ida y vuelta",
    "layout": "wide",
    "scene": {
      "variant": "request",
      "code": "total GENERATED AS (qty * price)",
      "nodes": [
        "qty|source",
        "price|source",
        "expression|compute",
        "total|stored/virtual"
      ],
      "outcome": "valor coherente",
      "caption": "Evitan duplicar lógica cuando el motor soporta la expresión."
    }
  },
  {
    "title": "Auditoría de cambios",
    "description": "Registra quién, cuándo y qué cambió mediante tablas o logs especializados.",
    "section": "Integridad y reglas de datos",
    "family": "consulta e índice",
    "layout": "standard",
    "scene": {
      "variant": "database",
      "code": "audit_log",
      "nodes": [
        "actor|who",
        "timestamp|when",
        "before|old",
        "after|new"
      ],
      "outcome": "cambio trazable",
      "caption": "Auditoría no reemplaza backups ni event sourcing."
    }
  },
  {
    "title": "Qué es un índice",
    "description": "Estructura adicional que acelera búsquedas a cambio de espacio y costo de escritura.",
    "section": "Índices y optimización de consultas",
    "family": "jerarquía y dependencias",
    "layout": "standard",
    "scene": {
      "variant": "tree",
      "code": "CREATE INDEX ON orders(user_id)",
      "nodes": [
        "table|rows",
        "index|keys",
        "lookup|fast",
        "writes|maintain"
      ],
      "outcome": "acceso acelerado",
      "caption": "Cada índice debe justificar su costo."
    }
  },
  {
    "title": "B-tree",
    "description": "Índice ordenado útil para igualdad, rangos y ordenación.",
    "section": "Índices y optimización de consultas",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "B-tree(user_id, created_at)",
      "nodes": [
        "root|branch",
        "pages|sorted",
        "leaf|row refs",
        "range|scan"
      ],
      "outcome": "búsqueda logarítmica",
      "caption": "El orden de columnas define qué prefijos pueden aprovecharse."
    }
  },
  {
    "title": "Hash index",
    "description": "Optimiza igualdad en motores que lo soportan, sin ordenar rangos.",
    "section": "Índices y optimización de consultas",
    "family": "tabla de estados",
    "layout": "standard",
    "scene": {
      "variant": "matrix",
      "code": "hash(key)",
      "nodes": [
        "key|input",
        "hash|bucket",
        "bucket|entries",
        "row|match"
      ],
      "outcome": "igualdad directa",
      "caption": "No sirve para ORDER BY ni búsquedas de rango."
    }
  },
  {
    "title": "Índices compuestos",
    "description": "Indexan varias columnas en un orden específico.",
    "section": "Índices y optimización de consultas",
    "family": "consulta e índice",
    "layout": "wide",
    "scene": {
      "variant": "database",
      "code": "INDEX(status, created_at)",
      "nodes": [
        "status|first",
        "created_at|second",
        "prefix|usable",
        "query|match"
      ],
      "outcome": "prefijo útil",
      "caption": "El orden debe seguir filtros, cardinalidad y ordenamiento reales."
    }
  },
  {
    "title": "Índices parciales",
    "description": "Incluyen solo filas que cumplen un predicado.",
    "section": "Índices y optimización de consultas",
    "family": "evidencia y latencia",
    "layout": "standard",
    "scene": {
      "variant": "trace",
      "code": "INDEX ... WHERE status='open'",
      "nodes": [
        "all rows|table",
        "predicate|open",
        "index|subset",
        "query|matches"
      ],
      "outcome": "índice pequeño",
      "caption": "La consulta debe implicar el predicado para usarlo."
    }
  },
  {
    "title": "Índices de expresión",
    "description": "Indexan el resultado de una función o expresión.",
    "section": "Índices y optimización de consultas",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "INDEX(lower(email))",
      "nodes": [
        "email|raw",
        "lower|expression",
        "index|stored key",
        "query|same expression"
      ],
      "outcome": "búsqueda funcional",
      "caption": "La consulta debe usar una expresión compatible."
    }
  },
  {
    "title": "Covering index",
    "description": "Incluye columnas suficientes para responder sin visitar la tabla.",
    "section": "Índices y optimización de consultas",
    "family": "acumulación de recursos",
    "layout": "standard",
    "scene": {
      "variant": "stack",
      "code": "INDEX(user_id) INCLUDE(total)",
      "nodes": [
        "predicate|user_id",
        "payload|total",
        "index page|contains",
        "heap|skip"
      ],
      "outcome": "index-only scan",
      "caption": "La visibilidad y el motor determinan si se evita realmente la tabla."
    }
  },
  {
    "title": "Selectividad",
    "description": "Mide cuánto reduce un predicado el conjunto de filas.",
    "section": "Índices y optimización de consultas",
    "family": "planificación de trabajo",
    "layout": "standard",
    "scene": {
      "variant": "scheduler",
      "code": "status='paid'",
      "nodes": [
        "rows|1M",
        "distinct|3 statuses",
        "filter|low selectivity",
        "planner|maybe seq scan"
      ],
      "outcome": "costo estimado",
      "caption": "Un índice en una columna poco selectiva puede no ayudar."
    }
  },
  {
    "title": "Estadísticas",
    "description": "Describen distribución y cardinalidad para que el planner estime costos.",
    "section": "Índices y optimización de consultas",
    "family": "superficie de aplicación",
    "layout": "standard",
    "scene": {
      "variant": "browser",
      "code": "ANALYZE",
      "nodes": [
        "sample|rows",
        "histogram|distribution",
        "distinct|count",
        "planner|estimate"
      ],
      "outcome": "plan informado",
      "caption": "Estadísticas obsoletas producen planes equivocados."
    }
  },
  {
    "title": "Query planner",
    "description": "Compara alternativas de acceso, joins y orden según costos estimados.",
    "section": "Índices y optimización de consultas",
    "family": "jerarquía y dependencias",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "EXPLAIN SELECT ...",
      "nodes": [
        "scan|choice",
        "join|algorithm",
        "sort|cost",
        "plan|selected"
      ],
      "outcome": "estrategia elegida",
      "caption": "El planner optimiza con información imperfecta."
    }
  },
  {
    "title": "EXPLAIN ANALYZE",
    "description": "Ejecuta y compara estimaciones con tiempos y filas reales.",
    "section": "Índices y optimización de consultas",
    "family": "topología y tráfico",
    "layout": "standard",
    "scene": {
      "variant": "network",
      "code": "EXPLAIN (ANALYZE, BUFFERS)",
      "nodes": [
        "estimate|rows",
        "actual|rows",
        "buffers|I/O",
        "time|runtime"
      ],
      "outcome": "desviación visible",
      "caption": "Grandes diferencias revelan estadísticas o supuestos incorrectos."
    }
  },
  {
    "title": "Sargabilidad",
    "description": "Escribe predicados que permitan usar un índice sin transformar la columna innecesariamente.",
    "section": "Índices y optimización de consultas",
    "family": "anatomía del concepto",
    "layout": "wide",
    "scene": {
      "variant": "anatomy",
      "code": "created_at >= start AND created_at < end",
      "nodes": [
        "column|indexed",
        "function on column|bad",
        "range|good",
        "index|usable"
      ],
      "outcome": "búsqueda eficiente",
      "caption": "Mover el cálculo al valor suele preservar el acceso indexado."
    }
  },
  {
    "title": "ACID",
    "description": "Resume atomicidad, consistencia, aislamiento y durabilidad.",
    "section": "Transacciones y concurrencia",
    "family": "acumulación de recursos",
    "layout": "standard",
    "scene": {
      "variant": "stack",
      "code": "A · C · I · D",
      "nodes": [
        "atomicity|all/none",
        "consistency|rules",
        "isolation|concurrency",
        "durability|survive"
      ],
      "outcome": "unidad confiable",
      "caption": "Cada motor ofrece estas propiedades con matices configurables."
    }
  },
  {
    "title": "BEGIN, COMMIT y ROLLBACK",
    "description": "Controlan una unidad explícita de trabajo.",
    "section": "Transacciones y concurrencia",
    "family": "secuencia operativa",
    "layout": "wide",
    "scene": {
      "variant": "timeline",
      "code": "BEGIN → changes → COMMIT",
      "nodes": [
        "BEGIN|snapshot",
        "write|tentative",
        "COMMIT|publish",
        "ROLLBACK|discard"
      ],
      "outcome": "cambio atómico",
      "caption": "Una transacción abierta demasiado tiempo retiene recursos."
    }
  },
  {
    "title": "Savepoints",
    "description": "Permiten revertir una parte sin cancelar toda la transacción.",
    "section": "Transacciones y concurrencia",
    "family": "topología y tráfico",
    "layout": "wide",
    "scene": {
      "variant": "network",
      "code": "SAVEPOINT before_optional",
      "nodes": [
        "work A|done",
        "savepoint|mark",
        "work B|fails",
        "rollback to|A kept"
      ],
      "outcome": "rollback parcial",
      "caption": "No sustituyen una buena frontera transaccional."
    }
  },
  {
    "title": "Aislamiento",
    "description": "Define qué efectos de transacciones concurrentes puede observar una sesión.",
    "section": "Transacciones y concurrencia",
    "family": "configuración declarativa",
    "layout": "standard",
    "scene": {
      "variant": "document",
      "code": "READ COMMITTED → SERIALIZABLE",
      "nodes": [
        "read committed|latest committed",
        "repeatable read|snapshot",
        "serializable|equivalent order",
        "tradeoff|retries"
      ],
      "outcome": "visibilidad definida",
      "caption": "Mayor aislamiento puede aumentar conflictos y abortos."
    }
  },
  {
    "title": "Dirty read",
    "description": "Una transacción observa cambios aún no confirmados.",
    "section": "Transacciones y concurrencia",
    "family": "cola y consumidor",
    "layout": "wide",
    "scene": {
      "variant": "queue",
      "code": "T2 reads T1 uncommitted",
      "nodes": [
        "T1|write",
        "T2|read",
        "T1|rollback",
        "T2|wrong"
      ],
      "outcome": "fenómeno evitado",
      "caption": "Muchos motores no permiten dirty reads incluso en niveles bajos."
    }
  },
  {
    "title": "Non-repeatable read",
    "description": "La misma fila cambia entre dos lecturas de una transacción.",
    "section": "Transacciones y concurrencia",
    "family": "memoria intermedia",
    "layout": "wide",
    "scene": {
      "variant": "cache",
      "code": "read A → other commit → read B",
      "nodes": [
        "T1|read v1",
        "T2|update",
        "T2|commit",
        "T1|read v2"
      ],
      "outcome": "lectura no repetible",
      "caption": "Snapshots más estables evitan este fenómeno."
    }
  },
  {
    "title": "Phantom read",
    "description": "Una consulta por rango devuelve filas nuevas o desaparecidas en otra lectura.",
    "section": "Transacciones y concurrencia",
    "family": "comparativa técnica",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "WHERE score > 100",
      "nodes": [
        "T1|3 rows",
        "T2|insert match",
        "T2|commit",
        "T1|4 rows"
      ],
      "outcome": "fantasma visible",
      "caption": "El conflicto afecta el conjunto, no solo una fila existente."
    }
  },
  {
    "title": "MVCC",
    "description": "Mantiene versiones para que lectores y escritores reduzcan bloqueos mutuos.",
    "section": "Transacciones y concurrencia",
    "family": "capas internas",
    "layout": "standard",
    "scene": {
      "variant": "layers",
      "code": "row v1 → row v2",
      "nodes": [
        "T1|snapshot v1",
        "T2|write v2",
        "T1|still v1",
        "vacuum|cleanup"
      ],
      "outcome": "lecturas consistentes",
      "caption": "Las versiones antiguas deben limpiarse cuando ya nadie las necesita."
    }
  },
  {
    "title": "Locks",
    "description": "Protegen filas, tablas o recursos contra operaciones incompatibles.",
    "section": "Transacciones y concurrencia",
    "family": "flujo de ejecución",
    "layout": "standard",
    "scene": {
      "variant": "flow",
      "code": "SELECT ... FOR UPDATE",
      "nodes": [
        "T1|lock row",
        "T2|wait",
        "T1|commit",
        "T2|continue"
      ],
      "outcome": "exclusión coordinada",
      "caption": "Bloquear más de lo necesario reduce concurrencia."
    }
  },
  {
    "title": "Deadlocks",
    "description": "Ocurren cuando transacciones esperan recursos en ciclo.",
    "section": "Transacciones y concurrencia",
    "family": "árbol de recursos",
    "layout": "standard",
    "scene": {
      "variant": "filesystem",
      "code": "T1 holds A wants B; T2 holds B wants A",
      "nodes": [
        "T1|A",
        "T2|B",
        "wait|cycle",
        "detector|abort one"
      ],
      "outcome": "ciclo roto",
      "caption": "Ordenar adquisiciones y mantener transacciones cortas reduce deadlocks."
    }
  },
  {
    "title": "Optimistic concurrency",
    "description": "Detecta versiones cambiadas al escribir en lugar de bloquear antes.",
    "section": "Transacciones y concurrencia",
    "family": "flujo de transformación",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "UPDATE ... WHERE version=4",
      "nodes": [
        "client|v4",
        "database|v5",
        "affected|0",
        "conflict|retry"
      ],
      "outcome": "edición perdida evitada",
      "caption": "La aplicación debe resolver el conflicto, no ignorar cero filas."
    }
  },
  {
    "title": "Lost update",
    "description": "Dos escritores sobrescriben cambios porque leen la misma versión.",
    "section": "Transacciones y concurrencia",
    "family": "análisis y emisión",
    "layout": "wide",
    "scene": {
      "variant": "compiler",
      "code": "read 10 → write 11 / 12",
      "nodes": [
        "T1|reads 10",
        "T2|reads 10",
        "T1|writes 11",
        "T2|writes 12"
      ],
      "outcome": "cambio perdido",
      "caption": "Locks, versiones o operaciones atómicas protegen la actualización."
    }
  },
  {
    "title": "Transacciones distribuidas",
    "description": "Coordinan cambios en múltiples recursos con costo y fallos adicionales.",
    "section": "Transacciones y concurrencia",
    "family": "diagnóstico operativo",
    "layout": "wide",
    "scene": {
      "variant": "terminal",
      "code": "2PC / saga",
      "nodes": [
        "service A|prepare",
        "service B|prepare",
        "coordinator|commit",
        "failure|uncertain"
      ],
      "outcome": "consistencia coordinada",
      "caption": "Sagas y outbox suelen preferirse cuando una transacción global no es viable."
    }
  },
  {
    "title": "Migraciones",
    "description": "Versionan cambios de esquema y datos en orden reproducible.",
    "section": "Evolución de esquema y acceso",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "state-machine",
      "code": "001_create → 002_add_index",
      "nodes": [
        "migration|file",
        "up|apply",
        "schema|version",
        "history|record"
      ],
      "outcome": "entorno alineado",
      "caption": "Editar manualmente producción rompe reproducibilidad."
    }
  },
  {
    "title": "Expand and contract",
    "description": "Añade compatibilidad nueva antes de retirar la antigua.",
    "section": "Evolución de esquema y acceso",
    "family": "planificación de trabajo",
    "layout": "wide",
    "scene": {
      "variant": "scheduler",
      "code": "add → dual → backfill → remove",
      "nodes": [
        "expand|new column",
        "dual write|transition",
        "backfill|data",
        "contract|old removed"
      ],
      "outcome": "cambio seguro",
      "caption": "Permite que versiones vieja y nueva convivan."
    }
  },
  {
    "title": "Backfills",
    "description": "Rellenan datos existentes por lotes controlando locks y carga.",
    "section": "Evolución de esquema y acceso",
    "family": "acumulación de recursos",
    "layout": "standard",
    "scene": {
      "variant": "stack",
      "code": "UPDATE in batches",
      "nodes": [
        "batch 1|rows",
        "checkpoint|progress",
        "batch N|rows",
        "verify|complete"
      ],
      "outcome": "datos transformados",
      "caption": "Un backfill grande no debe ejecutarse como una única transacción larga."
    }
  },
  {
    "title": "Compatibilidad hacia atrás",
    "description": "Diseña cambios que clientes o procesos antiguos puedan seguir usando.",
    "section": "Evolución de esquema y acceso",
    "family": "árbol de recursos",
    "layout": "wide",
    "scene": {
      "variant": "filesystem",
      "code": "old code + new schema",
      "nodes": [
        "old reader|works",
        "new writer|works",
        "nullable|temporary",
        "rollout|mixed"
      ],
      "outcome": "despliegue gradual",
      "caption": "Las columnas obligatorias suelen añadirse en varias fases."
    }
  },
  {
    "title": "ORM",
    "description": "Mapea objetos y relaciones a operaciones de base de datos.",
    "section": "Evolución de esquema y acceso",
    "family": "flujo de ejecución",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "Model.findMany()",
      "nodes": [
        "model|object",
        "ORM|translate",
        "SQL|execute",
        "rows|hydrate"
      ],
      "outcome": "productividad con abstracción",
      "caption": "El ORM no elimina N+1, locks ni planes de consulta."
    }
  },
  {
    "title": "Unit of Work",
    "description": "Agrupa cambios de entidades y los confirma juntos.",
    "section": "Evolución de esquema y acceso",
    "family": "comparativa técnica",
    "layout": "standard",
    "scene": {
      "variant": "compare",
      "code": "session.commit()",
      "nodes": [
        "entity A|dirty",
        "entity B|new",
        "UoW|track",
        "commit|SQL"
      ],
      "outcome": "cambios coordinados",
      "caption": "La sesión debe tener un ciclo de vida claro por request o caso de uso."
    }
  },
  {
    "title": "Lazy vs eager loading",
    "description": "Decide cuándo cargar relaciones y evita consultas sorpresa.",
    "section": "Evolución de esquema y acceso",
    "family": "tabla de estados",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "lazy / eager",
      "nodes": [
        "lazy|on access",
        "eager|up front",
        "N+1|risk",
        "payload|tradeoff"
      ],
      "outcome": "estrategia consciente",
      "caption": "La elección depende del caso de consulta, no de una regla global."
    }
  },
  {
    "title": "Query builder",
    "description": "Compone SQL con parámetros manteniendo control explícito de la consulta.",
    "section": "Evolución de esquema y acceso",
    "family": "análisis y emisión",
    "layout": "wide",
    "scene": {
      "variant": "compiler",
      "code": "qb.where(...).orderBy(...)",
      "nodes": [
        "filters|dynamic",
        "builder|compose",
        "params|bind",
        "SQL|result"
      ],
      "outcome": "consulta segura",
      "caption": "Debe inspeccionarse el SQL generado."
    }
  },
  {
    "title": "Repositorios",
    "description": "Ofrecen operaciones de persistencia orientadas al dominio.",
    "section": "Evolución de esquema y acceso",
    "family": "flujo de transformación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "orders.findById(id)",
      "nodes": [
        "domain|call",
        "repository|port",
        "ORM/SQL|adapter",
        "database|store"
      ],
      "outcome": "detalle oculto",
      "caption": "Repositorios genéricos pueden perder semántica del dominio."
    }
  },
  {
    "title": "Seed y fixtures",
    "description": "Crean datos reproducibles para desarrollo, demo o pruebas.",
    "section": "Evolución de esquema y acceso",
    "family": "contratos coordinados",
    "layout": "standard",
    "scene": {
      "variant": "cards",
      "code": "seed champions",
      "nodes": [
        "schema|ready",
        "fixture|known",
        "insert|repeatable",
        "test|use"
      ],
      "outcome": "entorno predecible",
      "caption": "Seeds de demo no deben mezclarse con migraciones productivas."
    }
  },
  {
    "title": "Bases documentales",
    "description": "Guardan documentos con campos y arrays anidados.",
    "section": "NoSQL y modelos especializados",
    "family": "capas internas",
    "layout": "standard",
    "scene": {
      "variant": "layers",
      "code": "{ champion, skins: [...] }",
      "nodes": [
        "document|root",
        "embedded|related",
        "collection|many",
        "query|fields"
      ],
      "outcome": "agregado completo",
      "caption": "El modelo debe seguir patrones de acceso y límites de tamaño."
    }
  },
  {
    "title": "Embedding vs references",
    "description": "Elige entre datos juntos o referencias separadas.",
    "section": "NoSQL y modelos especializados",
    "family": "comparativa técnica",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "embed / reference",
      "nodes": [
        "embed|one read",
        "reference|independent",
        "duplication|tradeoff",
        "consistency|tradeoff"
      ],
      "outcome": "modelo por acceso",
      "caption": "Datos que cambian juntos suelen beneficiarse de embedding."
    }
  },
  {
    "title": "Atomicidad por documento",
    "description": "Aprovecha operaciones atómicas dentro de un documento agregado.",
    "section": "NoSQL y modelos especializados",
    "family": "topología y tráfico",
    "layout": "standard",
    "scene": {
      "variant": "network",
      "code": "updateOne({_id}, {$inc:{...}})",
      "nodes": [
        "document|aggregate",
        "operator|atomic",
        "write|single",
        "result|consistent"
      ],
      "outcome": "cambio indivisible",
      "caption": "Transacciones multi-documento no sustituyen un buen modelo."
    }
  },
  {
    "title": "Aggregation pipeline",
    "description": "Transforma documentos mediante etapas como match, group y project.",
    "section": "NoSQL y modelos especializados",
    "family": "aislamiento sobre host",
    "layout": "wide",
    "scene": {
      "variant": "container",
      "code": "$match → $group → $project",
      "nodes": [
        "match|filter",
        "unwind|expand",
        "group|aggregate",
        "project|shape"
      ],
      "outcome": "resultado analítico",
      "caption": "El orden de etapas afecta volumen y rendimiento."
    }
  },
  {
    "title": "Key-value stores",
    "description": "Acceden a valores mediante una clave exacta y operaciones simples.",
    "section": "NoSQL y modelos especializados",
    "family": "anatomía del concepto",
    "layout": "standard",
    "scene": {
      "variant": "anatomy",
      "code": "GET session:42",
      "nodes": [
        "key|session:42",
        "hash|locate",
        "value|blob",
        "TTL|expire"
      ],
      "outcome": "lectura directa",
      "caption": "Son excelentes cuando el patrón de acceso cabe en la clave."
    }
  },
  {
    "title": "Redis data types",
    "description": "Ofrece strings, hashes, sets, sorted sets, streams y más.",
    "section": "NoSQL y modelos especializados",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "HSET · SADD · ZADD · XADD",
      "nodes": [
        "hash|fields",
        "set|unique",
        "zset|ranked",
        "stream|events"
      ],
      "outcome": "estructura elegida",
      "caption": "Elegir el tipo correcto evita serializar todo como un blob."
    }
  },
  {
    "title": "TTL y expiración",
    "description": "Elimina claves automáticamente después de una duración.",
    "section": "NoSQL y modelos especializados",
    "family": "superficie de aplicación",
    "layout": "wide",
    "scene": {
      "variant": "browser",
      "code": "EXPIRE session:42 3600",
      "nodes": [
        "key|active",
        "TTL|3600",
        "countdown|decrease",
        "expired|removed"
      ],
      "outcome": "dato temporal",
      "caption": "La expiración no es un scheduler exacto de negocio."
    }
  },
  {
    "title": "Pub/Sub",
    "description": "Entrega mensajes a suscriptores conectados sin conservar historial duradero.",
    "section": "NoSQL y modelos especializados",
    "family": "cola y consumidor",
    "layout": "standard",
    "scene": {
      "variant": "queue",
      "code": "PUBLISH channel message",
      "nodes": [
        "publisher|send",
        "channel|fanout",
        "subscriber A|receive",
        "offline|miss"
      ],
      "outcome": "notificación inmediata",
      "caption": "No es una cola durable ni garantiza replay."
    }
  },
  {
    "title": "Streams",
    "description": "Conservan una secuencia ordenada de eventos y grupos de consumidores.",
    "section": "NoSQL y modelos especializados",
    "family": "planificación de trabajo",
    "layout": "wide",
    "scene": {
      "variant": "scheduler",
      "code": "XADD stream * event",
      "nodes": [
        "producer|append",
        "stream|history",
        "group|consumers",
        "ack|progress"
      ],
      "outcome": "eventos retenidos",
      "caption": "Streams y Pub/Sub resuelven necesidades diferentes."
    }
  },
  {
    "title": "Bases de grafos",
    "description": "Modelan nodos y relaciones como ciudadanos de primera clase.",
    "section": "NoSQL y modelos especializados",
    "family": "acumulación de recursos",
    "layout": "wide",
    "scene": {
      "variant": "stack",
      "code": "MATCH (a)-[:ALLY]->(b)",
      "nodes": [
        "node|Jinx",
        "edge|ALLY",
        "node|Vi",
        "traversal|path"
      ],
      "outcome": "relación recorrida",
      "caption": "Son útiles cuando las consultas dependen de caminos variables."
    }
  },
  {
    "title": "Series temporales",
    "description": "Optimizan eventos ordenados por tiempo, retención y agregación por ventanas.",
    "section": "NoSQL y modelos especializados",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "metric(timestamp, value)",
      "nodes": [
        "timestamp|index",
        "value|sample",
        "window|aggregate",
        "retention|downsample"
      ],
      "outcome": "historial temporal",
      "caption": "La cardinalidad de etiquetas puede dominar el costo."
    }
  },
  {
    "title": "Búsqueda full-text",
    "description": "Usa índices invertidos, análisis lingüístico y ranking.",
    "section": "NoSQL y modelos especializados",
    "family": "flujo de transformación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "search(\"loose cannon\")",
      "nodes": [
        "tokens|analyze",
        "inverted index|terms",
        "query|match",
        "score|rank"
      ],
      "outcome": "resultados relevantes",
      "caption": "LIKE no reemplaza capacidades de búsqueda lingüística."
    }
  },
  {
    "title": "Replicación",
    "description": "Mantiene copias de datos para disponibilidad o lecturas.",
    "section": "Distribución, replicación y particionado",
    "family": "configuración declarativa",
    "layout": "wide",
    "scene": {
      "variant": "document",
      "code": "primary → replicas",
      "nodes": [
        "primary|writes",
        "WAL/oplog|changes",
        "replica A|apply",
        "replica B|apply"
      ],
      "outcome": "copias sincronizadas",
      "caption": "Toda replicación tiene una política de retraso y failover."
    }
  },
  {
    "title": "Primary-replica",
    "description": "Dirige escrituras a un líder y replica cambios a seguidores.",
    "section": "Distribución, replicación y particionado",
    "family": "tabla de estados",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "write primary · read replica",
      "nodes": [
        "client|write",
        "primary|commit",
        "replica|replay",
        "read|maybe lag"
      ],
      "outcome": "escritura central",
      "caption": "Leer una réplica puede no reflejar el último write."
    }
  },
  {
    "title": "Synchronous vs asynchronous replication",
    "description": "Intercambia latencia de commit por garantías de copia.",
    "section": "Distribución, replicación y particionado",
    "family": "jerarquía y dependencias",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "sync / async",
      "nodes": [
        "sync|wait replica",
        "async|return early",
        "latency|higher/lower",
        "loss window|smaller/larger"
      ],
      "outcome": "garantía elegida",
      "caption": "La política debe alinearse con RPO y latencia."
    }
  },
  {
    "title": "Failover",
    "description": "Promueve una réplica cuando el líder falla.",
    "section": "Distribución, replicación y particionado",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "state-machine",
      "code": "primary down → promote",
      "nodes": [
        "health|detect",
        "election|choose",
        "promote|new primary",
        "clients|reconnect"
      ],
      "outcome": "servicio recuperado",
      "caption": "Un failover puede producir una ventana de incertidumbre."
    }
  },
  {
    "title": "Read replicas",
    "description": "Escalan lecturas y separan cargas analíticas del primario.",
    "section": "Distribución, replicación y particionado",
    "family": "flujo de ejecución",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "router → replicas",
      "nodes": [
        "read|query",
        "router|choose",
        "replica|serve",
        "lag|check"
      ],
      "outcome": "carga distribuida",
      "caption": "Lecturas que requieren read-your-writes deben usar una ruta adecuada."
    }
  },
  {
    "title": "Sharding",
    "description": "Divide filas o documentos entre nodos por una clave.",
    "section": "Distribución, replicación y particionado",
    "family": "ciclo de vida",
    "layout": "standard",
    "scene": {
      "variant": "lifecycle",
      "code": "shard(key)",
      "nodes": [
        "key|userId",
        "router|hash/range",
        "shard A|subset",
        "shard B|subset"
      ],
      "outcome": "datos repartidos",
      "caption": "La clave de shard determina balance y consultas cross-shard."
    }
  },
  {
    "title": "Hash vs range partitioning",
    "description": "Distribuye uniformemente o conserva localidad por rango.",
    "section": "Distribución, replicación y particionado",
    "family": "comparativa técnica",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "hash / range",
      "nodes": [
        "hash|balance",
        "range|locality",
        "hot key|risk",
        "rebalance|cost"
      ],
      "outcome": "partición adecuada",
      "caption": "Rangos temporales pueden crear hotspots en el shard más nuevo."
    }
  },
  {
    "title": "Rebalancing",
    "description": "Mueve particiones cuando cambia capacidad o distribución.",
    "section": "Distribución, replicación y particionado",
    "family": "acumulación de recursos",
    "layout": "wide",
    "scene": {
      "variant": "stack",
      "code": "move partition A → C",
      "nodes": [
        "cluster|old",
        "planner|decide",
        "copy|data",
        "cutover|route"
      ],
      "outcome": "balance restaurado",
      "caption": "Rebalance consume red, disco y CPU."
    }
  },
  {
    "title": "Consistent hashing",
    "description": "Reduce movimiento de claves al cambiar nodos.",
    "section": "Distribución, replicación y particionado",
    "family": "consulta e índice",
    "layout": "standard",
    "scene": {
      "variant": "database",
      "code": "key → ring → node",
      "nodes": [
        "ring|space",
        "nodes|points",
        "key|hash",
        "next node|owner"
      ],
      "outcome": "redistribución limitada",
      "caption": "Virtual nodes mejoran balance."
    }
  },
  {
    "title": "CAP y particiones",
    "description": "Explica decisiones de consistencia y disponibilidad cuando la red divide nodos.",
    "section": "Distribución, replicación y particionado",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "partition → choose behavior",
      "nodes": [
        "consistency|same view",
        "availability|response",
        "partition|network split",
        "policy|tradeoff"
      ],
      "outcome": "semántica explícita",
      "caption": "CAP habla del comportamiento durante una partición, no de un ranking general."
    }
  },
  {
    "title": "Consistencia de lectura",
    "description": "Define strong, eventual, monotonic o read-your-writes.",
    "section": "Distribución, replicación y particionado",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "read consistency",
      "nodes": [
        "strong|latest",
        "eventual|lag",
        "monotonic|no backwards",
        "RYW|own write"
      ],
      "outcome": "expectativa de lectura",
      "caption": "La UX debe conocer qué garantía recibe."
    }
  },
  {
    "title": "Backups lógicos y físicos",
    "description": "Copian objetos o archivos del motor con propiedades distintas.",
    "section": "Operación, respaldo y seguridad",
    "family": "secuencia operativa",
    "layout": "wide",
    "scene": {
      "variant": "timeline",
      "code": "dump / base backup",
      "nodes": [
        "logical|SQL/data",
        "physical|files",
        "schedule|run",
        "restore|test"
      ],
      "outcome": "copia disponible",
      "caption": "Un backup no probado es solo una esperanza."
    }
  },
  {
    "title": "RPO y RTO",
    "description": "Definen pérdida máxima de datos y tiempo máximo de recuperación.",
    "section": "Operación, respaldo y seguridad",
    "family": "cola y consumidor",
    "layout": "standard",
    "scene": {
      "variant": "queue",
      "code": "RPO 5m · RTO 30m",
      "nodes": [
        "incident|time",
        "RPO|data loss",
        "RTO|downtime",
        "plan|meet"
      ],
      "outcome": "objetivo medible",
      "caption": "La arquitectura de backups debe partir de estos objetivos."
    }
  },
  {
    "title": "Point-in-time recovery",
    "description": "Restaura un backup y reproduce logs hasta un instante.",
    "section": "Operación, respaldo y seguridad",
    "family": "propagación de eventos",
    "layout": "wide",
    "scene": {
      "variant": "signal",
      "code": "base backup + WAL",
      "nodes": [
        "base|snapshot",
        "logs|changes",
        "target time|stop",
        "database|restored"
      ],
      "outcome": "estado recuperado",
      "caption": "PITR necesita conservar y probar la cadena de logs."
    }
  },
  {
    "title": "Alta disponibilidad",
    "description": "Combina redundancia, failover y automatización para reducir downtime.",
    "section": "Operación, respaldo y seguridad",
    "family": "topología y tráfico",
    "layout": "wide",
    "scene": {
      "variant": "network",
      "code": "primary + replicas + monitor",
      "nodes": [
        "nodes|redundant",
        "monitor|health",
        "failover|promote",
        "clients|route"
      ],
      "outcome": "servicio continuo",
      "caption": "HA no protege contra borrados lógicos replicados."
    }
  },
  {
    "title": "Monitoreo de consultas",
    "description": "Registra latencia, frecuencia, filas y planes costosos.",
    "section": "Operación, respaldo y seguridad",
    "family": "jerarquía y dependencias",
    "layout": "standard",
    "scene": {
      "variant": "tree",
      "code": "slow query log",
      "nodes": [
        "query|fingerprint",
        "calls|count",
        "latency|p95",
        "rows|volume"
      ],
      "outcome": "carga visible",
      "caption": "Optimiza por impacto total, no por una consulta aislada."
    }
  },
  {
    "title": "Pool de conexiones",
    "description": "Limita sesiones concurrentes y reutiliza conexiones.",
    "section": "Operación, respaldo y seguridad",
    "family": "contratos coordinados",
    "layout": "standard",
    "scene": {
      "variant": "cards",
      "code": "app → pool → database",
      "nodes": [
        "requests|many",
        "pool|limit",
        "connections|few",
        "queue|wait"
      ],
      "outcome": "conexiones controladas",
      "caption": "Más conexiones no siempre significan más throughput."
    }
  },
  {
    "title": "Vacuum y mantenimiento",
    "description": "Recupera espacio, actualiza metadatos o reorganiza estructuras según el motor.",
    "section": "Operación, respaldo y seguridad",
    "family": "superficie de aplicación",
    "layout": "wide",
    "scene": {
      "variant": "browser",
      "code": "VACUUM / ANALYZE",
      "nodes": [
        "dead versions|old",
        "vacuum|remove",
        "stats|refresh",
        "planner|improve"
      ],
      "outcome": "almacenamiento saludable",
      "caption": "MVCC requiere mantenimiento de versiones antiguas."
    }
  },
  {
    "title": "Cifrado en tránsito y reposo",
    "description": "Protege datos durante transporte y almacenamiento.",
    "section": "Operación, respaldo y seguridad",
    "family": "capas internas",
    "layout": "standard",
    "scene": {
      "variant": "layers",
      "code": "TLS + disk encryption",
      "nodes": [
        "client|TLS",
        "network|encrypted",
        "disk|encrypted",
        "keys|managed"
      ],
      "outcome": "datos protegidos",
      "caption": "El cifrado no reemplaza autorización ni minimización."
    }
  },
  {
    "title": "Usuarios y privilegios",
    "description": "Aplica mínimo privilegio mediante roles y grants.",
    "section": "Operación, respaldo y seguridad",
    "family": "planificación de trabajo",
    "layout": "standard",
    "scene": {
      "variant": "scheduler",
      "code": "GRANT SELECT ON ...",
      "nodes": [
        "app role|limited",
        "migration role|DDL",
        "admin|restricted",
        "audit|review"
      ],
      "outcome": "acceso mínimo",
      "caption": "La aplicación no debería conectarse como superusuario."
    }
  },
  {
    "title": "Row-level security",
    "description": "Filtra filas según políticas evaluadas por el motor.",
    "section": "Operación, respaldo y seguridad",
    "family": "acumulación de recursos",
    "layout": "standard",
    "scene": {
      "variant": "stack",
      "code": "POLICY tenant_id = current_tenant",
      "nodes": [
        "query|all rows",
        "policy|tenant",
        "visible|subset",
        "bypass|controlled"
      ],
      "outcome": "aislamiento por datos",
      "caption": "La política requiere contexto de sesión confiable."
    }
  },
  {
    "title": "Retención y borrado",
    "description": "Define cuánto tiempo conservar datos y cómo eliminar copias derivadas.",
    "section": "Operación, respaldo y seguridad",
    "family": "flujo de ejecución",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "created → archived → deleted",
      "nodes": [
        "active|use",
        "archive|cold",
        "retention|deadline",
        "delete|purge"
      ],
      "outcome": "datos mínimos",
      "caption": "Retención afecta backups, réplicas, cachés y analytics."
    }
  },
  {
    "title": "Capacity planning",
    "description": "Proyecta crecimiento de almacenamiento, IOPS, memoria, conexiones y throughput.",
    "section": "Operación, respaldo y seguridad",
    "family": "aislamiento sobre host",
    "layout": "standard",
    "scene": {
      "variant": "container",
      "code": "growth × workload",
      "nodes": [
        "rows|growth",
        "indexes|space",
        "QPS|load",
        "headroom|reserve"
      ],
      "outcome": "capacidad prevista",
      "caption": "Esperar al 100% convierte crecimiento normal en incidente."
    }
  }
] as const satisfies readonly StudyConcept[];
