# Planning Discipline

## Tamaños de tarea

- **S (1-2h):** Proceder directo
- **M (2-6h):** Plan breve, confirmar antes de codear
- **L (6h+):** Plan detallado, desglose en sub-tareas, confirmar

Indicadores de M/L: "implementar", "refactorizar", "nueva feature", "integrar"

## Effort y thinking

La escalera `think`/`think hard`/`think harder` YA NO es keyword (texto plano, sin efecto mecánico). La palanca real es **`effort`** (`/effort` o `effortLevel` en settings). Solo **`ultrathink`** sigue siendo keyword.

| Palanca | Cuándo |
|------|--------|
| `effort` low/medium | Rachas mecánicas largas |
| `effort` high/xhigh | Diseño, debugging duro, decisiones |
| `ultrathink` (literal en el prompt) | Arquitectura, trade-offs críticos (único keyword vigente) |

## Antes de codear

1. Buscar en LESSONS_LEARNED.md (si existe) errores previos relacionados
2. Verificar si hay código/componentes existentes reutilizables
3. Verificar que no contradiga el design system
4. Para tareas M+: usar /new-task o /grill-me primero

## Checkpoints

En tareas L+, hacer checkpoint cada ~30 min:
- Qué se completó
- Qué falta
- Algún blocker o cambio de approach
