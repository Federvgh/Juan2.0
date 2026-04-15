# Juan2.0 — Portfolio de Juan Pablo Tazzioli

Portfolio para diseñador industrial con experiencia internacional en automotive premium (LEVC, BeyonCa, Bugatti, Pagani). Basado en Valencia, España.

## Stack

- **Framework:** Next.js (App Router, static export)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Font:** Inter (variable)
- **Images:** next-image-export-optimizer (WebP/AVIF en build time)
- **Package manager:** pnpm
- **Language:** TypeScript strict
- **Deploy:** AWS Amplify (juanpablotazzioli.com, Route 53)
- **Analytics:** GA4 + Microsoft Clarity + Google Search Console

## Estructura del sitio

3 páginas. **Work es la landing page** (no hay /home).

| Ruta | Contenido |
|------|-----------|
| `/work` (landing) | Grilla de 9 proyectos, 3 columnas (parametrizable a 2) |
| `/work/[slug]` | Página individual: sistema de bloques (image-full, image-pair, video, text, before-after). Soporta `cover` image (arriba del header) |
| `/about` | Foto B&W + bio + Experience + Education + Languages + Focus + In Process |
| `/contact` | Datos directos: email, LinkedIn, ubicación, PDF download. Sin formulario |

## 9 Proyectos

1. BOW Nautical Timepiece Concept
2. Bugatti Millenium Steering Wheel
3. Chopard Clock Concept for Luxury EV Interior
4. Luxury EV Steering Wheel Concept
5. Trumpet-Inspired Speaker Concept
6. Pagani Steering Wheel Concept
7. LEVC Heritage Emblem — 3D Design Development for Production
8. Luxury EV Central Control Knob Concept
9. Modular Urban Signage System

Cada proyecto tiene: descripción, My Contribution, Process. Video es campo opcional.

## Navegación

- Header fijo: "JUAN PABLO TAZZIOLI" izq (link a /work), sección actual en gris debajo
- Hamburguesa siempre (mobile y desktop), abre overlay fullscreen
- Menú: Work / About / Contact centrados. Hover = negro bold, resto gris
- Selector idioma: EN / ES / IT (EN primero, traducciones después)
- X cierra y vuelve a la página actual

## Filosofía de diseño

**La UI no opaca los diseños de producto. El trabajo es el protagonista.**

- Monocromático: blanco (#FFF), negro (#000), gris (#B0B0B0)
- Sin colores de acento, gradientes, sombras, glassmorphism
- Mucho white space. Tipografía limpia. Imágenes como protagonistas
- Animaciones sutiles: fade-in 300ms, hover scale 1.02, stagger 100ms
- Solo opacity y transform (GPU). Tween, no spring
- Referencias: Simo Lahtinen, Teenage Engineering, Pininfarina

## Contenido

- Datos hardcodeados en TypeScript (sin CMS). Actualiza Federico
- Imágenes: renders 3D pesados → optimizar con next-image-export-optimizer
- Videos: comprimidos con ffmpeg (H.264, <30MB), self-hosted, player HTML5 custom
- i18n: arquitectura desde día 1, contenido EN primero. ES/IT se generan después
- Speaker es el proyecto modelo completo. Los demás se pueblan incrementalmente

## Decisiones vigentes

- **NO** CMS, NO formulario de contacto
- **NO** dark mode
- **NO** Vercel (deploy en AWS Amplify, Juan ya tiene AWS)
- Grilla parametrizable: 3 col desktop (actual), 2 tablet, 1 mobile
- Sistema de bloques para layout de proyectos (tipo Notion). Patrón de sección: `text(título) → visual → text(descripción)`
- Text blocks cortos (<60 chars, sin punto) se renderizan como `<h3>` títulos de sección
- Proyectos pueden tener `cover?: ImageAsset` que se renderiza ARRIBA del ProjectHeader
- Before/After sliders: verificar dimensiones idénticas (`sips -z`) y labels internos para left/right
- Menú overlay: stagger entrada, morphing hamburguesa→X, hover font-weight transition
- Scroll-frames effect: spike con Bugatti, escalar si funciona
- SEO completo: structured data (Person + CreativeWork), OG por proyecto, sitemap, robots.txt

## Commands disponibles

| Command | Cuándo usar |
|---------|-------------|
| `/grill-me` | Antes de implementar features nuevas |
| `/new-task` | Planificar una tarea con entrevista de 5 grupos |
| `/code-review` | Revisar código con checklist |
| `/audit` | Auditoría técnica completa |
| `/audit-claude-md` | Verificar que este archivo refleje la realidad |
| `/pre-deploy` | Checklist 29 puntos pre-deploy |
| `/deploy` | Pipeline completo a Amplify |
| `/new-project-page` | Agregar nuevo proyecto |
| `/optimize-images` | Optimizar imágenes |
| `/frontend-design` | Directrices visuales |
| `/scroll-animation` | Scroll-linked 3D effect |
| `/tdd` | Test-Driven Development |

## Agents disponibles

| Agent | Cuándo |
|-------|--------|
| `analytics-expert` | Reportes GA4/Clarity/GSC |
| `seo-specialist` | Keywords, meta tags, structured data |
| `ui-designer` | Decisiones visuales, componentes |
| `qa-tester` | Testing, checklists pre-deploy |

## Estado actual (15 Apr 2026)

- Phases 0-10 completas. Deploy a Amplify funcionando.
- 45 páginas estáticas (3 locales × 15 rutas)
- 11 proyectos con contenido completo
- BeforeAfterSlider component para comparación de imágenes (drag + touch)
- Bloques de texto intermedios en proyectos (tipo "text" en ContentBlock)
- Text blocks soportan títulos de sección (detección automática por longitud)
- Video player tiene botón de sonido (muted autoplay + toggle)
- LEVC Insignia: cover image + 3 before/after sliders + 6 secciones con títulos
- Knob: 2 before/after sliders + 2 videos + 6 secciones con títulos
- Pagani: imágenes y video actualizados, layout reordenado
- Scroll-frames spike: proof of concept con 2 frames en Bugatti. Necesita PNGs transparentes de Juan para producción.
- Traducciones ES/IT: placeholders (copias de EN)
- My Contribution + Process se renderizan al final de la página (ProjectFooter), después de los bloques
- ImageLoop usa aspect ratio dinámico (width/height de la primera imagen)
- Dev server corre en puerto 3001 (configurado en package.json)
- Pendiente: LEVC L380 (proyecto nuevo), reorden de Work page, video Speaker

## Errores conocidos

Ver `.claude/LESSONS_LEARNED.md` para errores documentados y sus fixes.
Buscar antes de debuggear: `grep -i "keyword" .claude/LESSONS_LEARNED.md`

## No hacer

- No commitear sin autorización explícita
- No deployar sin que lo pida el usuario — siempre preview local primero
- No agregar colores fuera de la paleta monocromática
- No agregar animaciones que compitan con el contenido
- No instalar dependencias sin justificación
- No crear archivos de documentación sin que lo pida el usuario
- No usar `* { padding: 0 }` ni resets CSS manuales (Tailwind maneja el suyo)
- No usar `aspect-video object-cover` en videos de portfolio (usar `object-contain`)

---
**Version:** 2.1.0 | **Updated:** 27 Mar 2026
