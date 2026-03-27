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
| `/work/[slug]` | Página individual: sistema de bloques (image-full, image-pair, video, text) |
| `/about` | Foto B&W + bio + Experience + Education + Languages + Focus + In Process |
| `/contact` | Datos directos: email, LinkedIn, ubicación, PDF download. Sin formulario |

## 9 Proyectos

1. BOW Nautical Timepiece Concept
2. Bugatti Millenium Steering Wheel
3. Chopard Clock for BeyonCa
4. BeyonCa Steering Wheel
5. Speaker Concept (Bang & Olufsen x Swarovski)
6. Pagani Steering Wheel Concept
7. LEVC Brand Insignia Redesign
8. BeyonCa Control Knob
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
- Sistema de bloques para layout de proyectos (tipo Notion)
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

## No hacer

- No commitear sin autorización explícita
- No agregar colores fuera de la paleta monocromática
- No agregar animaciones que compitan con el contenido
- No instalar dependencias sin justificación
- No crear archivos de documentación sin que lo pida el usuario

---
**Version:** 2.0.0 | **Updated:** 27 Mar 2026
