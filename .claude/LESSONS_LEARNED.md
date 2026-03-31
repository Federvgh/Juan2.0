# Lessons Learned — Juan2.0 Portfolio

Buscar: `grep -i "keyword" .claude/LESSONS_LEARNED.md`

## LL-001: Tailwind v4 `* { padding: 0 }` overrides utility classes
**Fecha:** 2026-03-27
**Síntoma:** Todas las clases de padding/margin de Tailwind daban 0px. `px-20`, `pt-24`, etc. no se aplicaban.
**Causa raíz:** Un reset CSS manual `* { margin: 0; padding: 0; box-sizing: border-box; }` al final de `globals.css` tenía mayor especificidad que las clases utilitarias de Tailwind v4.
**Fix:** Eliminar el reset manual. Tailwind v4 con `@import "tailwindcss"` ya incluye su propio reset (Preflight).
**Lección:** Nunca agregar resets CSS manuales cuando se usa Tailwind. Tailwind maneja su propio reset.

## LL-002: Next.js static export no soporta sitemap.ts dinámico
**Fecha:** 2026-03-27
**Síntoma:** Build falla con error: `export const dynamic = "force-static"/export const revalidate not configured on route "/sitemap.xml" with "output: export"`.
**Causa raíz:** `src/app/sitemap.ts` genera un sitemap dinámico que requiere runtime, incompatible con `output: "export"`.
**Fix:** Generar `public/sitemap.xml` como archivo estático con un script (`scripts/generate-sitemap.ts`).
**Lección:** Con `output: "export"`, todos los archivos especiales (sitemap, robots) deben ser estáticos en `public/`.

## LL-003: Framer Motion ease array necesita `as const`
**Fecha:** 2026-03-27
**Síntoma:** TypeScript error: `Type 'number[]' is not assignable to type 'Easing | Easing[] | undefined'`.
**Causa raíz:** Framer Motion espera un tuple `[number, number, number, number]`, pero TypeScript infiere `number[]` cuando se escribe `ease: [0.25, 0.1, 0.25, 1]`.
**Fix:** Agregar `as const`: `ease: [0.25, 0.1, 0.25, 1] as const`.
**Lección:** Siempre usar `as const` en arrays de easing para Framer Motion.

## LL-004: Next.js params type en locale layout — string, no literal union
**Fecha:** 2026-03-27
**Síntoma:** Build error: `Type 'string' is not assignable to type '"en" | "es" | "it"'`.
**Causa raíz:** Next.js genera tipos para params como `{ locale: string }`, no como el literal union de `generateStaticParams`.
**Fix:** Tipar params como `Promise<{ locale: string }>` en vez de `Promise<{ locale: Locale }>`. Hacer cast al usar.
**Lección:** Los params de Next.js siempre son `string`, no el tipo narrowed del `generateStaticParams`.

## LL-005: Videos con aspect-video + object-cover cortan contenido
**Fecha:** 2026-03-27
**Síntoma:** Videos de renders 3D (grabaciones de Rhino) aparecían cortados — faltaba la parte superior e inferior del volante.
**Causa raíz:** `className="w-full aspect-video object-cover"` fuerza 16:9 y recorta el video que era más cuadrado/vertical.
**Fix:** Cambiar a `className="w-full object-contain"` — respeta el aspect ratio nativo del video.
**Lección:** Para videos de portfolio/renders, usar `object-contain` para mostrar el contenido completo. `object-cover` solo para videos cinematográficos donde el crop es aceptable.

## LL-006: Scroll-linked animations necesitan sticky + scroll height
**Fecha:** 2026-03-27
**Síntoma:** El efecto crossfade entre wireframe y render del volante pasaba demasiado rápido — el usuario no alcanzaba a ver la transición.
**Causa raíz:** El contenedor tenía altura normal, entonces la imagen se iba con el scroll natural sin tiempo de transición.
**Fix:** Usar contenedor alto (`h-[300vh]`) con hijo `sticky top-0 h-screen` para que la imagen se "pegue" mientras se scrollea.
**Lección:** Para animaciones scroll-linked tipo Apple, siempre usar: contenedor alto (2-3x viewport) + sticky + useScroll con offset ["start start", "end end"].

## LL-007: Imágenes sin optimizar degradan LCP dramáticamente
**Fecha:** 2026-03-27
**Síntoma:** Lighthouse LCP de 16.5s en la Work page.
**Causa raíz:** 9 thumbnails JPG de 237-579KB cada uno, sin comprimir ni resize, servidos con `unoptimized: true`.
**Fix:** Comprimir con ffmpeg a 800px de ancho (47-138KB cada uno). Agregar `priority` a las primeras 3 imágenes above-the-fold. LCP bajó a 11.5s (dev mode).
**Lección:** Siempre comprimir imágenes antes de agregarlas. Con `output: "export"` y `unoptimized: true`, next/image no optimiza nada — hay que hacerlo manualmente.

## LL-008: Video compression con ffmpeg — CRF 23 es buen balance
**Fecha:** 2026-03-27
**Síntoma:** Videos originales de 44-157MB demasiado pesados para self-hosting.
**Causa raíz:** Videos renderizados en alta calidad sin compresión web.
**Fix:** `ffmpeg -crf 23 -preset slow -movflags +faststart -vf "scale='min(1920,iw)':-2"`. Resultado: 85% reducción promedio (339MB → 50MB).
**Lección:** CRF 23 con preset slow es el sweet spot para portfolio. Si un video queda >20MB, subir CRF a 25-28.

## LL-009: basePath de GitHub Pages no se aplica a assets en client components

**Fecha:** 2026-03-27
**Síntoma:** Imágenes y videos no cargan en GitHub Pages (404). Las rutas salen como `/images/...` sin el `/Juan2.0/` prefix.
**Causa raíz:** `next/image` con `unoptimized: true` NO aplica `basePath` a las URLs. Y `<video src>`, `<source src>` nativos tampoco. Solo `next/link` y `redirect()` lo respetan automáticamente.
**Fix:** Crear helper `assetUrl()` en `src/lib/utils.ts` que lee `GITHUB_PAGES` env var en build time y prefixa `/Juan2.0`. Aplicar a TODAS las rutas de assets en `projects.ts` y componentes server. NO usar en client components (no tienen acceso a env vars de build).
**Lección:** Con `output: "export"` + `basePath`, resolver todas las URLs de assets en server side (projects.ts, page components) antes de pasarlas a client components. El basePath solo funciona automáticamente en `next/link` y `redirect()`.

## LL-010: Siempre mapear la maqueta visual bloque por bloque antes de implementar
**Fecha:** 2026-04-01
**Síntoma:** Se implementó el proyecto ShiftCore con bloques en orden incorrecto, anchos inconsistentes, y el featured card mostrando imagen estática en vez del loop. Requirió 5+ iteraciones de corrección con el usuario.
**Causa raíz:** No se estudió la maqueta de referencia ("DENTRO DE WORK.jpg") con suficiente detalle antes de codear. Se asumió un orden de bloques en vez de leerlo pixel por pixel de la maqueta. Errores específicos:
1. Video debía ir primero, se puso tercero
2. Image-2 (swap) debía ir antes de image-1 (3 vistas), se puso al revés
3. Loop debía ir antes de image-3 (one shell), se puso después
4. Featured card en grilla de Work debía mostrar el loop, se puso imagen estática
5. Video y texto tenían max-w-3xl mientras imágenes tenían max-w-5xl (inconsistente)
**Fix:** Reordenar bloques, cambiar anchos, usar ImageLoop en FeaturedCard.
**Lección:** Cuando el usuario/cliente provee maquetas visuales:
1. **Mapear cada bloque de arriba a abajo** antes de escribir una sola línea — listar el orden en texto plano y confirmar con el usuario
2. **Verificar anchos/márgenes** — todo el contenido dentro de una página de proyecto debe compartir el mismo max-width
3. **Identificar componentes especiales** (loop, video, hero) y confirmar su comportamiento antes de implementar
4. **Hacer /grill-me** cuando hay maquetas de referencia — preguntar específicamente sobre orden, anchos, y comportamientos interactivos
