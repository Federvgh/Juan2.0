Directrices visuales para el portfolio de Juan Pablo Tazzioli.

## Filosofía central

**La UI no opaca los diseños de producto. El trabajo es el protagonista.**
El sitio es como una galería de arte: paredes blancas, iluminación perfecta, sin marcos dorados.

## Paleta

Monocromática estricta. Ver `.claude/rules/design-system.md`.
- Background: #FFFFFF
- Foreground: #000000
- Muted: #B0B0B0
- Border: #E5E5E5
- Link: #0000EE (solo Contact)

Sin colores de acento. Sin gradientes. Sin sombras. Sin glassmorphism.

## Tipografía

- **Font:** Inter (variable, local o via next/font)
- Header nombre: Bold 14px uppercase
- Menú overlay: 48-56px, weight transition on hover
- Títulos proyecto grilla: Semi Bold 14-16px
- Subtítulos: Regular 12-14px, gris
- Body: Regular 16-18px

## Layout

- Max-width contenido: max-w-6xl (~1152px)
- Imágenes hero: full-bleed
- Espaciado secciones: py-16 a py-24
- Grid Work: 3 col desktop (parametrizable a 2), 2 tablet, 1 mobile
- Gap entre cards: 20-30px

## Animaciones (Framer Motion)

Solo opacity y transform. Tween con custom easing, no spring.

| Elemento | Efecto | Duración |
|----------|--------|----------|
| Page transition | cross-fade + y:8 | 300ms |
| Hover cards | scale 1.02 | 400ms ease |
| Scroll reveal | fade-in + y:20 + stagger | 500ms, stagger 100ms |
| Menú items | stagger entrada | 100ms delay |
| Hamburguesa → X | morphing líneas | 300ms |
| Grid → detalle | layoutId | auto |

Respetar `useReducedMotion`. Usar `viewport={{ once: true }}`.

## Componentes clave

- **Header:** fijo, nombre izq (link a /work), sección actual en gris, hamburguesa + idiomas der
- **Menú overlay:** fullscreen blanco, 3 items centrados, hover negro/gris
- **Project card:** imagen + título + subtítulo, sin bordes
- **Project page:** sistema de bloques (image-full, image-pair, video, text)
- **About:** 2 col arriba (foto + bio), 1 col CV abajo
- **Contact:** centrado, datos directos, sin formulario

## Responsive

Mobile-first con Tailwind breakpoints (sm/md/lg).
- Navbar: hamburguesa siempre (mobile y desktop)
- Grid: 1 col mobile, 2 tablet, 3 desktop
- Imágenes: full-width en mobile

## Referencias

- Simo Lahtinen (simolahtinen.com) — máximo minimalismo
- Teenage Engineering (teenage.engineering/designs) — producto habla solo
- Pininfarina (pininfarina.it) — imágenes full-bleed, cero decoración

## Regla de oro

Cada decisión visual debe responder: "esto ayuda a que el trabajo de Juan Pablo se vea mejor?"
Si la respuesta es no, no lo agregues.
