Directrices visuales para el portfolio de Juan Pablo Tazzioli.

## Identidad visual

Estilo galería minimalista — fondo neutro claro, el color lo aporta cada proyecto.
NO dark mode. NO gradientes. NO glassmorphism pesado (solo blur sutil en navbar).

## Paleta

- Background: #f0f0f0
- Surface (cards): #ffffff
- Text primary: #1a1a1a
- Text muted: #737373
- Border: #e5e5e5
- Accent: heredado del proyecto activo (color dominante del render/imagen hero)

## Tipografía

- UI: Geist Sans via next/font (variable, pesos 400-700)
- Código/datos técnicos: Geist Mono
- Escala: text-sm para metadata, text-base para cuerpo, text-2xl/text-4xl para títulos
- Letter-spacing: tracking-wide en labels y categorías (como el sitio actual)

## Layout

- CSS Grid / Tailwind grid — no Bootstrap
- Espaciado generoso entre secciones (py-16 a py-24)
- Contenido centrado con max-w-6xl para texto, full-bleed para imágenes hero
- Layouts asimétricos en páginas de proyecto (imagen grande + texto al lado)

## Componentes base

- Navbar: sticky, backdrop-blur-sm sobre fondo claro, logo + links (Home, Works, Contact)
- Cards de proyecto en Works: imagen + título + categoría, hover con scale-[1.02] + shadow-lg transition-all
- Footer: mínimo — copyright + social links
- Botones: borde sólido, sin fill, hover cambia a text-muted (como el btn-start-order actual)

## Componentes de 21st.dev (referencia: https://21st.dev/community/components)

Componentes seleccionados para este portfolio. Buscarlos por nombre en 21st.dev e implementar adaptados a la paleta clara.

### Hero (Home page)
- **Container Scroll Animation** (Aceternity, 835 likes) — render 3D que se transforma al scrollear
  - O **Scroll Media Expansion Hero** (541 likes) — imagen que se expande al scroll, para abrir con proyecto estrella
- **Animated Text Cycle** (236 likes) — rotar subtítulo: "Industrial Designer / 3D Specialist / Product Designer"

### Experiencia profesional (Home page)
- **Timeline** (Aceternity, 864 likes) — reemplaza las 3 columnas de texto plano actuales
  - Adaptar a fondo claro, línea gris #e5e5e5, puntos accent

### Works page
- **Gallery with Image Cards** (shadcnblocks, 291 likes) — grid de proyectos con hover elegante

### Navbar
- **Tubelight Navbar** (819 likes) — indicador animado de página activa
  - O **Expandable Tabs** (827 likes) — alternativa más interactiva
  - Adaptar a fondo claro con backdrop-blur

### Skills/Herramientas (si se agrega sección)
- **Display Cards** (872 likes) — para mostrar herramientas (Rhino, KeyShot, SolidWorks)

### NO usar de 21st.dev
- AI Chat Components, Pricing, Testimonials (no aplican)
- Rainbow/Gradient/Shimmer Buttons (demasiado llamativos)
- Shaders (pesados, estética dark)
- Todo lo que sea dark mode first sin buena adaptación a light

## Imágenes

- Siempre next/image con width, height, alt descriptivo
- Hero images: priority={true}, sizes responsive
- Placeholder: blur (generar blurDataURL de cada imagen)
- Formatos: dejar que next/image sirva WebP/AVIF automáticamente

## Backgrounds animados (21st.dev)

Usar MÁXIMO 2 componentes de background en todo el sitio:

- **Hero (Home):** Background Paths (líneas curvas animadas) O Dotted Surface (patrón de puntos con profundidad)
  - Ambos funcionan en fondo claro, son sutiles y no compiten con el contenido
  - Fuente: https://21st.dev/community/components/s/background
- **Páginas de proyecto:** Grid Pattern (Magic UI) como fondo estático sutil — estética de planos técnicos/blueprints
- **Contact:** opcional — Glow (luz sutil que sigue el cursor) o sin background especial

NO usar: Aurora, Shooting Stars, Meteors, Vortex (son dark mode), Sparkles, Gradient Animation (estética SaaS), Retro Grid, Warp (estética gaming).

## Animaciones

- Entrada de elementos: fade-in + translate-y-4 al entrar en viewport (IntersectionObserver o Framer Motion)
- Transiciones de página: suaves, no abruptas
- Hover en cards: scale + shadow, duration-300 ease-out
- Scroll-linked 3D rotation: SOLO en 1-2 proyectos estrella (Bugatti, zapatilla), NO en todas las páginas
- NO animaciones excesivas — el trabajo del diseñador es el protagonista

## Responsive

- Mobile-first con Tailwind breakpoints
- Navbar: hamburger menu en mobile (Sheet de shadcn)
- Grid de works: 1 col mobile, 2 cols tablet, 3 cols desktop
- Imágenes de proyecto: full-width en mobile, layout asimétrico en desktop

## Regla de oro

Cada decisión visual debe responder: "esto ayuda a que el trabajo de Juan Pablo se vea mejor?"
Si la respuesta es no, no lo agregues.
