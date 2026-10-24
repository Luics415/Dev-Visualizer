# Gobernanza de Seguridad y Gestión de Tokens

## Principio de Menor Privilegio

Para proteger el ecosistema de Dev-Visualizer y prevenir la exposición accidental de credenciales, el repositorio implementa una política estricta de aislamiento de tokens:

1. **Cero Secretos en el Código:** Ningún token de API, clave privada o variable de entorno sensible debe persistirse en archivos versionados ni ramas remotas.
2. **Tokens Efímeros en CLI:** Las interacciones locales con la API de GitHub se realizan mediante sesiones autenticadas en el gestor de credenciales (`gh auth`), sin archivos de configuración que almacenen tokens en texto plano.
3. **Aislamiento en CI/CD:** Los workflows de GitHub Actions se limitan al alcance mínimo indispensable por trabajo (`permissions: contents: read`).
4. **Protección de Entornos:** Las ejecuciones en modo mutante requieren aprobación en el entorno protegido `orchestrator-authorized`.
5. **Auditoría Estática:** La habilidad `05-revisar` inspecciona el árbol de trabajo y las dependencias antes de proponer cualquier cambio.
