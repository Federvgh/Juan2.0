# Agentes — Cuándo usar cada uno

| Tarea | Agente |
|-------|--------|
| Métricas de tráfico, comportamiento, heatmaps | analytics-expert |
| Keywords, indexación, meta tags, structured data | seo-specialist |
| Paleta, tipografía, layout, componentes, animaciones | ui-designer |
| Tests, checklists manuales, Playwright, Vitest | qa-tester |
| Copy de proyectos, títulos, subtítulos, About | portfolio-copywriter |

## Cuándo invocar

- **analytics-expert:** Cuando el usuario pide reportes, métricas, o datos de GA4/Clarity/GSC
- **seo-specialist:** Antes de deploy (verificar SEO), o cuando se agregan/modifican páginas
- **ui-designer:** Al crear componentes nuevos o tomar decisiones visuales
- **qa-tester:** Antes de deploy (testing), o al agregar features que necesiten verificación
- **portfolio-copywriter:** Al revisar, reescribir o generar textos de proyectos. Modos: `/audit [proyecto]`, `/rewrite [proyecto] [campo]`, `/consistency-check`, `/new-project [brief]`
