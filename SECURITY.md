# Política y Arquitectura de Seguridad

Dev Visualizer adopta una postura proactiva de **seguridad por diseño** (*Security by Design*) para garantizar que estudiantes, colaboradores y visitantes naveguen en un entorno digital íntegro, privado y confiable.

---

## 1. Modelo de Amenazas y Arquitectura Estática

Dev Visualizer se compila como un sitio estático autónomo (**SSG - Static Site Generation**) servido a través de la infraestructura global de **GitHub Pages (Fastly CDN)**:

| Vector de Ataque Común | Exposición en Servidores Tradicionales | Postura en Dev Visualizer |
| :--- | :--- | :--- |
| **Inyección SQL (SQLi)** | Crítica en aplicaciones con bases de datos dinámicas. | **Superficie nula.** No existe base de datos ni servidor SQL en producción. |
| **Ejecución Remota de Código (RCE)** | Ataques a intérpretes dinámicos (PHP, Python, Node.js). | **Superficie nula.** Los archivos generados son HTML, CSS y JS planos sin backend ejecutable. |
| **Robo de Sesión / CSRF** | Explotación de cookies de autenticación o tokens JWT. | **Superficie nula.** No existen cuentas de usuario, inicios de sesión ni cookies de sesión. |
| **Subida de Archivos Maliciosos** | Formularios de upload que permiten alojar malware. | **Superficie nula.** No existen formularios de subida de archivos ni almacenamiento en servidor. |
| **Ataques de Denegación de Servicio (DDoS)** | Saturación de recursos de CPU y memoria de un servidor único. | **Mitigado.** El tráfico es distribuido y amortiguado globalmente por la red Anycast de GitHub Pages / Fastly. |

---

## 2. Mitigaciones Operativas y Cadena de Suministro

A pesar de contar con una arquitectura estática robusta, se implementan controles rigurosos contra riesgos residuales:

1. **Protección de la Cuenta de Despliegue (GitHub):**
   - El acceso al repositorio y a los secretos de GitHub Actions está protegido mediante **Autenticación en Dos Factores (2FA)** obligatoria, utilizando llaves de seguridad físicas (FIDO2/WebAuthn) y generadores de códigos TOTP.
2. **Seguridad en la Cadena de Suministro (Supply Chain Security):**
   - Monitorización continua mediante **GitHub Dependabot** para alertar sobre vulnerabilidades conocidas (CVE) en dependencias de npm.
   - Ejecución obligatoria de `npm run check` (incluyendo auditoría de enlaces estáticos e invariantes de datos) antes de cada despliegue a producción.
3. **Enlaces Externos Seguros:**
   - Todos los hipervínculos hacia dominios de terceros incorporan `rel="noopener noreferrer"` para impedir ataques de *reverse tabnabbing* o acceso no autorizado al objeto `window.opener`.
4. **Minimización de Metadatos:**
   - La cabecera informativa de framework (`X-Powered-By`) se desactiva explícitamente en la configuración de compilación.

---

## 3. Divulgación Coordinada de Vulnerabilidades (CVD)

Agradecemos la colaboración responsable de la comunidad técnica y de investigadores de seguridad. Si descubres una vulnerabilidad potencial, te solicitamos reportarla de manera confidencial siguiendo este procedimiento:

### Cómo reportar una vulnerabilidad:
- **Canal preferente:** Abre un aviso de seguridad privado mediante la pestaña **Security > Report a vulnerability** directamente en el repositorio de GitHub: [`https://github.com/Luics415/Dev-Visualizer/security/advisories/new`](https://github.com/Luics415/Dev-Visualizer/security/advisories/new).
- **Canal alternativo:** Comunícate de forma privada a través de los datos de contacto acreditados en el perfil de GitHub de [**@Luics415**](https://github.com/Luics415).

### Información útil a incluir:
- Descripción clara del hallazgo y severidad estimada.
- Pasos detallados para reproducir la condición o prueba de concepto (PoC).
- Componente, archivo o ruta afectada.

### Tiempos de respuesta y compromiso:
- **Acuse de recibo inicial:** Máximo **48 horas**.
- **Evaluación y remediación:** Plazo objetivo de **7 a 14 días naturales**, dependiendo de la complejidad de la solución.
- Solicitamos esperar a la publicación del parche antes de divulgar públicamente los detalles del hallazgo.
