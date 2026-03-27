Planificación de nueva tarea antes de implementar.

## Paso 1 — Clasificación

Evaluar el tamaño de la tarea:
- **S (1-2h):** Proceder directo
- **M (2-6h):** Plan breve, confirmar con el usuario
- **L (6h+):** Plan detallado, desglose en sub-tareas, confirmar

## Paso 2 — Entrevista obligatoria (5 grupos)

### 1. Qué
- Qué hay que hacer exactamente?
- Cuál es el resultado esperado?
- Hay diseño/maqueta de referencia?

### 2. Scope
- Qué páginas/componentes afecta?
- Hay dependencias con otros features?
- Qué NO incluye?

### 3. Edge cases
- Responsive: cómo se ve en mobile?
- Contenido: qué pasa si no hay video? Si no hay galería?
- i18n: afecta la arquitectura de idiomas?

### 4. Infraestructura
- Necesita nueva dependencia (pnpm add)?
- Afecta el build/deploy?
- Impacta performance (imágenes, bundle size)?

### 5. Testing
- Cómo se verifica que funciona?
- Necesita test E2E?
- Cómo se prueba en mobile?

## Paso 3 — Plan de implementación

Generar plan con:
1. Archivos a crear/modificar
2. Orden de implementación
3. Checkpoints de verificación
4. Criterio de "done"

## Paso 4 — Confirmar

Presentar el plan al usuario y ESPERAR confirmación antes de escribir código.
