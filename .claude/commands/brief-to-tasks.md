Convertir el Design Brief (docs/DESIGN-BRIEF.md) en tareas implementables.

Reglas:
1. Leé el Design Brief completo
2. Desglosá en tareas verticales (cada tarea cruza todas las capas: UI + lógica + datos)
3. NO crear tareas horizontales (ej: "hacer todos los estilos", "hacer todo el routing")
4. Cada tarea debe ser independiente y completable en una sesión de Claude
5. Identificá dependencias: qué tareas bloquean a otras
6. Marcá qué tareas pueden ejecutarse en paralelo (candidatas para worktrees)

Formato de cada tarea:
```
## Tarea N: [nombre descriptivo]
- Dependencias: [lista de tareas que deben completarse antes]
- Scope: [qué archivos/componentes toca]
- Criterio de éxito: [cómo saber que está terminada]
- Estimación: S/M/L
```

Orden sugerido:
1. Setup del proyecto (Next.js, Tailwind, Geist, estructura de carpetas)
2. Layout global (navbar, footer, metadata)
3. Página de proyecto individual (template reutilizable)
4. Home page
5. Works page (grid de proyectos)
6. Contact page (formulario)
7. Animaciones scroll-linked (proyecto estrella)
8. SEO, performance, analytics
9. Deploy

Al terminar, mostrar el listado completo y preguntar si crear Issues en GitHub.
