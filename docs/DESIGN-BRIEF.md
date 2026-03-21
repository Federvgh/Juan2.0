# Design Brief — Portfolio Juan Pablo Tazzioli (Demo)

## Objetivo

Crear un demo/preview del portfolio rediseñado para convencer al cliente (Juan Pablo Tazzioli, diseñador industrial) de que su sitio puede mejorar drásticamente usando el contenido existente. El demo debe verse profesional, moderno y destacar su trabajo como protagonista.

## Páginas y secciones

### Home (`/`)

1. **Hero**
   - Zapatilla conceptual como proyecto estrella
   - Scroll animation: crossfade entre las 6 imágenes existentes del desmontaje al scrollear
   - Animated Text Cycle rotando: "Industrial Designer / 3D Specialist / Product Designer"
   - Background: Dotted Surface (21st.dev) — patrón de puntos con profundidad, estética técnica
   - Nombre "Juan Pablo Tazzioli" como título principal

2. **Preview de proyectos**
   - Grid 2x2 con los 4 proyectos, usando imagen Principal de cada uno
   - Hover: scale-[1.02] + shadow-lg
   - Link a Works page
   - Label "Selected Works" con tracking-wide

### Works (`/works`)

1. **Grid de proyectos**
   - Gallery with Image Cards (21st.dev)
   - 4 proyectos: Zapatilla, Bugatti, Semáforo, Medalla
   - Cada card: imagen principal + título + categoría
   - Click lleva a la página individual del proyecto

2. **Páginas individuales de proyecto** (`/works/[slug]`)
   - Imagen hero full-width
   - Título + categoría + descripción
   - Galería de imágenes del proyecto
   - Navegación anterior/siguiente entre proyectos

### About (`/about`)

1. **Intro**
   - Foto de perfil (perfilpng.png)
   - Frase/quote (frase2.svg)

2. **Timeline** (componente Timeline de Aceternity, adaptado a light mode)
   - Experiencia profesional:
     - 3dee Design Studio (2020) — Designer, 3D modeling specialist
     - Advanced Design Innovation Studio (2017–2020) — Designer Team
     - Adjunct Professor Rhinoceros 3D (2017)
     - YONNPOL Sportswear (2011) — Co-Founder & Main Designer
   - Educación:
     - Product Design — Course Design / Cordoba 2017
     - Transportation Design — Advanced Design 2017
     - Industrial Design — National University of Cordoba
   - Premios y publicaciones:
     - Innovar — Conceptual Footwear Design (2016)
     - Innovar — Smart Modular Traffic Light (2017)
     - Eureka — Reality TV finalist (2017)
     - Holcim International — Winner (2015)
     - Iveco — Juana Azurduy Cup (2013)
     - Iveco — Raul Alfonsin Cup (2014)

3. **Imagen about2.png** full-width al final

### Contact (`/contact`)

1. **Formulario visual (placeholder, sin backend)**
   - Campos: Name, Email, Message
   - Botón Submit (sin funcionalidad)
   - Diseño limpio, estilo actual mejorado

2. **Info de contacto**
   - Social links placeholder (Facebook, LinkedIn, Instagram)

## Inventario de contenido

### Imágenes disponibles

| Proyecto | Archivos | Imagen principal |
|----------|----------|-----------------|
| Zapatilla | 001.jpg, 002.jpg, 003.jpg, 004.jpg, 005.jpg, 006.jpg | PRINCIPAL.jpg |
| Bugatti | 01-min.jpg, 02-min.jpg, 03-min.jpg, 04-min.jpg | Principal.jpg |
| Semáforo | 02-14.jpg (13 imágenes) | Principal.jpg |
| Medalla | 01.jpg, 02.jpg | Principal.jpg |

### Otros assets
- Logo: logo.png, logo2.png
- Perfil: perfilpng.png
- Frases: frase.svg, frase2.svg
- About: about2.png
- Wireframes: (referencia, no para producción)

### Textos
- Todos los textos de experiencia, educación, premios y publicaciones del index.html actual
- Descripciones de proyectos de los archivos project.html, project2.html, project3.html, project4.html

## Directrices visuales

Ver skill `/frontend-design` para detalle completo.

Resumen:
- Paleta: fondo #f0f0f0, surfaces #ffffff, text #1a1a1a, muted #737373
- Tipografía: Geist Sans + Geist Mono
- Estilo: galería minimalista, el color lo aporta cada proyecto
- Animaciones: sutiles, fade-in + translate, scroll animation solo en hero
- NO dark mode, NO gradientes pesados

## Requisitos técnicos

- **Framework:** Next.js (App Router) con export estático
- **Styling:** Tailwind CSS + shadcn/ui
- **Fonts:** Geist Sans + Geist Mono via next/font
- **Images:** next/image con blur placeholder
- **Deploy:** GitHub Pages (output: "export" en next.config)
- **Package manager:** pnpm
- **Idioma:** Inglés

## User Stories

1. **Como visitante casual**, quiero ver el trabajo de Juan Pablo de forma impactante en los primeros 3 segundos, para decidir si sigo explorando.
2. **Como reclutador/estudio de diseño**, quiero ver los proyectos con detalle (renders, proceso), para evaluar la calidad del trabajo.
3. **Como reclutador**, quiero ver la experiencia profesional y formación de forma clara, para entender el perfil del candidato.
4. **Como Juan Pablo**, quiero que mi portfolio se vea moderno y profesional, para competir con diseñadores internacionales.

## MVP (este demo) vs Nice-to-have (versión final)

### MVP — Demo
- [x] Home con hero animado (zapatilla, 6 frames crossfade)
- [x] Works grid con los 4 proyectos
- [x] Páginas individuales de cada proyecto
- [x] About con Timeline
- [x] Contact con formulario visual
- [x] Responsive (mobile/tablet/desktop)
- [x] Deploy en GitHub Pages

### Nice-to-have — Versión final
- [ ] Video de desmontaje de zapatilla (60-100 frames para scroll animation fluida)
- [ ] Formulario de contacto funcional (Resend, Supabase, o similar)
- [ ] Links reales de redes sociales
- [ ] Proyectos nuevos del cliente
- [ ] CMS para que Juan Pablo edite contenido
- [ ] SEO optimizado (meta tags, OG images, sitemap)
- [ ] Analytics (Vercel Analytics o Google Analytics)
- [ ] Internacionalización (ES/EN)
- [ ] Animaciones scroll-linked en más proyectos
- [ ] Performance tuning (Lighthouse 90+)
