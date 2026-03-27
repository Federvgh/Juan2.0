Verificar que CLAUDE.md refleje la realidad actual del código.

## Verificaciones

### 1. Stack declarado vs real
- Leer CLAUDE.md y extraer el stack mencionado
- Verificar contra package.json que las dependencias coincidan
- Reportar discrepancias

### 2. Estructura declarada vs real
- Verificar que las rutas/páginas mencionadas existan
- Verificar que los componentes referenciados existan
- Verificar que los 9 proyectos listados coincidan con los datos

### 3. Decisiones vigentes
- Verificar que las decisiones de diseño en CLAUDE.md se cumplan en el código
- Verificar que el design system (paleta, font, etc.) sea consistente

### 4. Commands y agents
- Verificar que todos los commands listados existan en .claude/commands/
- Verificar que todos los agents listados existan en .claude/agents/
- Verificar que los skills referenciados existan

### 5. Deploy info
- Verificar que la info de deploy (Amplify, dominio) sea correcta

## Output

Generar reporte:
| Sección | Estado | Detalle |
|---------|--------|---------|
| Stack | SYNC/DESYNC | ... |
| Estructura | SYNC/DESYNC | ... |
| Decisiones | SYNC/DESYNC | ... |
| Commands | SYNC/DESYNC | ... |
| Deploy | SYNC/DESYNC | ... |

Si hay desync, proponer actualización del CLAUDE.md (ESPERAR confirmación antes de editar).
