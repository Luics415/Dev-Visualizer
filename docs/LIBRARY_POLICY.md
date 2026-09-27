# Política de Librería profesional

La Librería profesional amplía el atlas visual sin mezclar bibliografía con las escenas conceptuales ni con las páginas **En acción**. Cada colección conserva una ruta independiente bajo `/libreria/[tema]/`.

## Procedencia y atribución

La instantánea inicial importa metadatos factuales de 179 recursos organizados originalmente en 42 temas de [midudev/libros-programacion-gratis](https://github.com/midudev/libros-programacion-gratis) y [librosgratis.dev](https://librosgratis.dev/). Dev Visualizer no reutiliza su código, iconografía, textos editoriales ni diseño. Cada recurso conserva autor, URL, tema de procedencia y fecha de revisión.

Los 29 temas que no estaban en ese catálogo se completan mediante una curaduría independiente de 87 fichas: tres por tema y una para cada nivel principiante, intermedio y avanzado. Este bloque no altera ni reemplaza el **Catálogo de referencia**; se identifica como “Curaduría complementaria · Dev Visualizer” y evita duplicados exactos con las fuentes ya registradas.

Una fuente oficial puede estar asociada con varias bibliotecas cuando su alcance cruza tecnologías, pero conserva una sola identidad bibliográfica y el contador general la incluye una sola vez. Las tarjetas temáticas sí muestran esa asociación donde resulte pertinente. Si una ficha importada no declara autor o institución, la interfaz lo indica expresamente sin modificar la instantánea atribuida.

Las 71 bibliotecas añaden documentación oficial, especificaciones o fuentes primarias seleccionadas por Dev Visualizer. Una fuente comunitaria nunca sustituye el respaldo oficial de una colección.

## Estados de preservación

- `local-redistributable`: copia local con permiso comprobado.
- `official-external`: documentación mantenida por su organismo o proyecto.
- `external-preserved`: recurso externo con metadatos locales y espejos legales conocidos.
- `permission-required`: recurso conocido cuya redistribución no está autorizada.
- `unavailable`: enlace caído sin sustituto legal verificado.

Que un archivo sea público o esté en un repositorio no autoriza por sí solo a redistribuirlo. Dev Visualizer aloja una copia únicamente cuando existe una licencia compatible, dominio público, autorización escrita o permiso institucional expreso.

## Requisitos para un adjunto local

Todo archivo bajo `/public/library/[tema]/[id]/` debe registrar:

- nombre original, formato, edición y tamaño;
- autor o institución responsable;
- fuente original y fecha de descarga;
- licencia y enlace a su evidencia;
- SHA-256 del archivo;
- estado `local-redistributable`.

Un mismo archivo recibe un ID estable y no se duplica cuando sirve a varias colecciones.

## Disponibilidad externa

Los recursos sin permiso local se presentan como enlaces externos, nunca como propiedad de Dev Visualizer. El layout permanece útil si un enlace falla y muestra el estado editorial real. La auditoría mensual revisa HTTP, redirecciones y disponibilidad, genera un informe no bloqueante y deja la decisión de sustitución a una revisión humana.

## Seguridad y privacidad en enlaces salientes

- **Protección del usuario**: Todos los hipervínculos que dirigen a sitios de terceros aplican de manera invariable `rel="noopener noreferrer"` y se benefician de la política global `referrer: strict-origin-when-cross-origin`. Esto previene ataques de *reverse tabnabbing* e impide transmitir la ruta exacta de navegación como referrer a dominios externos.
- **Minimización de telemetría**: La Librería profesional no utiliza enlaces acortados comerciales, intermediarios de rastreo ni parámetros UTM de vigilancia conductual.

## Neutralidad pedagógica y ausencia de fines comerciales

- **Sin enlaces de afiliados**: Ningún recurso listado incluye enlaces de monetización, comisiones por referido o acuerdos comerciales con autores o editoriales.
- **Cero reseñas ficticias o afirmaciones infundadas**: Los niveles didácticos (principiante, intermedio, avanzado) y resúmenes descriptivos se asignan con base en criterios pedagógicos objetivos y revisión directa del índice temático de cada obra.

## Procedimiento de notificación y retirada de derechos de autor (Notice and Takedown)

Dev Visualizer respeta escrupulosamente los derechos de propiedad intelectual conforme a la Ley Federal del Derecho de Autor (LFDA - México), la DMCA (17 U.S.C. § 512) y los convenios internacionales pertinentes (Convenio de Berna).

Si cualquier titular de derechos de autor o su representante debidamente autorizado considera que un enlace o referencia bibliográfica vulnera sus derechos o no desea que su obra sea citada en el catálogo educativo:

1. Puede enviar una solicitud formal mediante un *Issue* en el repositorio oficial de GitHub ([github.com/Luics415/Dev-Visualizer](https://github.com/Luics415/Dev-Visualizer)) o mediante el canal de seguridad indicado en `SECURITY.md`.
2. La solicitud debe identificar el recurso específico (ID o URL) y aportar evidencia sumaria de la titularidad o representación.
3. El equipo de mantenimiento procederá a la desindexación o retiro cautelar del recurso de forma inmediata en el siguiente despliegue continuo.
