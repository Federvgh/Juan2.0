# Tareas — Demo Portfolio Juan Pablo Tazzioli

Referencia: [DESIGN-BRIEF.md](DESIGN-BRIEF.md)

---

## Tarea 1: Setup del proyecto Next.js
- **Dependencias:** ninguna
- **Scope:** Inicializar proyecto Next.js con pnpm, Tailwind, shadcn/ui, Geist fonts. Configurar output: "export" para GitHub Pages. Copiar imágenes existentes a public/. Limpiar credenciales expuestas del repo.
- **Criterio de éxito:** `pnpm build` exitoso, `pnpm dev` levanta en localhost, Geist fonts cargando, Tailwind funcionando.
- **Estimación:** S

## Tarea 2: Layout global (Navbar + Footer)
- **Dependencias:** Tarea 1
- **Scope:** Navbar sticky con backdrop-blur, logo, links (Home, Works, About, Contact), indicador de página activa. Footer con copyright + social links placeholder. Layout wrapper con metadata.
- **Criterio de éxito:** Navbar y footer visibles en todas las páginas, responsive (hamburger en mobile), links funcionales.
- **Estimación:** S

## Tarea 3: Datos de proyectos
- **Dependencias:** Tarea 1
- **Scope:** Crear estructura de datos para los 4 proyectos (slug, título, categoría, año, ubicación, descripción, imágenes). Archivo de datos estático (lib/projects.ts). Proyectos:
  - traffic-light: "Traffic Light" / Smart Modular / Buenos Aires 2016
  - steering-wheel: "Steering Wheel" / Bugatti / 2019
  - footwear: "Footwear" / Exo-Cross / 2019
  - medal: "Medal" / Summer Youth Olympic Games / 2018
- **Criterio de éxito:** Tipado con TypeScript, importable desde cualquier página, imágenes referenciadas correctamente.
- **Estimación:** S

## Tarea 4: Works page (grid de proyectos)
- **Dependencias:** Tarea 2, Tarea 3
- **Scope:** Página /works con grid de los 4 proyectos. Cards con imagen principal, título, categoría, año. Hover con scale + shadow. Link a página individual. Responsive: 1 col mobile, 2 cols desktop.
- **Criterio de éxito:** Grid renderiza los 4 proyectos, hover funciona, links llevan a /works/[slug].
- **Estimación:** S

## Tarea 5: Página individual de proyecto
- **Dependencias:** Tarea 3, Tarea 4
- **Scope:** Ruta /works/[slug] con generateStaticParams. Imagen hero full-width. Título + categoría + año. Galería de imágenes del proyecto. Navegación anterior/siguiente.
- **Criterio de éxito:** Las 4 páginas de proyecto renderizan con sus imágenes. Nav anterior/siguiente funciona cíclicamente.
- **Estimación:** M

## Tarea 6: Home page (hero + preview proyectos)
- **Dependencias:** Tarea 2, Tarea 3
- **Scope:**
  - Hero: título "Juan Pablo Tazzioli", Animated Text Cycle rotando roles, Dotted Surface background, zapatilla con scroll crossfade entre 6 imágenes
  - Preview: grid 2x2 con los 4 proyectos (imagen principal + título), label "Selected Works"
- **Criterio de éxito:** Hero impactante con animación de scroll, preview de proyectos linkea a Works.
- **Estimación:** L (la scroll animation es la parte compleja)

## Tarea 7: About page (timeline)
- **Dependencias:** Tarea 2
- **Scope:** Foto de perfil + frase. Timeline con experiencia, educación, premios/publicaciones. Imagen about2.png full-width. Adaptar Timeline component a light mode.
- **Criterio de éxito:** Toda la info del index.html actual representada en timeline, responsive, light mode.
- **Estimación:** M

## Tarea 8: Contact page
- **Dependencias:** Tarea 2
- **Scope:** Formulario visual placeholder (Name, Email, Message, botón Submit sin funcionalidad). Diseño limpio, estilo consistente con el resto del sitio.
- **Criterio de éxito:** Formulario se ve bien, responsive, botón no hace nada (placeholder).
- **Estimación:** S

## Tarea 9: Polish y responsive
- **Dependencias:** Tareas 4-8
- **Scope:** Revisar responsive en todos los breakpoints. Fade-in animations en entrada de secciones. Verificar que imágenes tienen alt text. Verificar consistencia visual entre páginas.
- **Criterio de éxito:** Sitio se ve bien en mobile, tablet y desktop. Animaciones de entrada sutiles funcionando.
- **Estimación:** M

## Tarea 10: Build y deploy a GitHub Pages
- **Dependencias:** Tarea 9
- **Scope:** Verificar build estático sin errores. Configurar GitHub Actions para deploy a GitHub Pages (o deploy manual). Verificar que el sitio funciona en la URL de GitHub Pages.
- **Criterio de éxito:** Sitio live en github.io, todas las páginas funcionan, imágenes cargan.
- **Estimación:** S

---

## Orden de ejecución y paralelismo

```
Tarea 1 (Setup)
    ├── Tarea 2 (Layout) ──┬── Tarea 4 (Works grid) ── Tarea 5 (Proyecto individual)
    │                       ├── Tarea 6 (Home) ★ más compleja
    │                       ├── Tarea 7 (About)
    │                       └── Tarea 8 (Contact)
    └── Tarea 3 (Datos) ───┘
                                    └── Tarea 9 (Polish) ── Tarea 10 (Deploy)
```

**Pueden correr en paralelo (con worktrees):** Tareas 4, 6, 7, 8 (después de que 1, 2, 3 estén listas)

**Ruta crítica:** 1 → 2+3 → 6 (Home con scroll animation) → 9 → 10
