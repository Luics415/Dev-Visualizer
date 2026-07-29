# Visual System V4 — Jinx Arcane, React en acción y React Native

## Interfaz

- Se sustituyó la paleta Powder to Vi por la paleta Jinx Arcane: `#835f86`, `#75455d`, `#a76486`, `#4d7290` y `#4b4754`.
- El cambio se limita al fondo, navegación, textos editoriales y superficies exteriores.
- Los colores semánticos internos, datos, trayectorias y tiempos de las escenas existentes no fueron sustituidos.
- La navegación ahora incluye React en acción y React Native.

## React en acción

Nuevo caso integrado de seis etapas:

1. Evento `onChange`.
2. Actualización de estado en cola y próximo snapshot.
3. Ejecución del render y cálculo de JSX.
4. Reconciliación entre árbol anterior y siguiente.
5. Commit, pintura y ejecución posterior de `useEffect`.
6. Segundo render y commit mínimo de resultados conservando keys.

## React Native

Nueva colección de catorce escenas:

- Renderizado nativo
- Componentes base
- StyleSheet
- Flexbox
- TextInput
- Pressable
- Imágenes
- ScrollView y FlatList
- Navegación
- Safe Area y teclado
- Código por plataforma
- Permisos
- Peticiones de red
- Persistencia local
