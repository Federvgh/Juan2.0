Crear una nueva página de proyecto para el portfolio.

## Paso 1 — Recopilar datos

Pedir al usuario:
1. Nombre del proyecto y slug (URL-friendly)
2. Categoría y subtítulo para la grilla
3. Descripción principal
4. My Contribution (qué hizo Juan)
5. Process (cómo se desarrolló)
6. Imagen de thumbnail para la grilla
7. Bloques de contenido para la página individual:
   - `image-full`: imagen a ancho completo
   - `image-pair`: 2 imágenes lado a lado
   - `video`: video del proyecto
   - `text`: bloque de texto adicional

## Paso 2 — Agregar datos

1. Agregar el proyecto al array de datos en `src/lib/projects.ts`
2. Agregar imágenes a `public/images/[slug]/`
3. Agregar video a `public/videos/[slug]/` (si tiene)

## Paso 3 — Verificar

4. `pnpm dev` — verificar que la grilla muestra el nuevo proyecto
5. Verificar la página individual: `/work/[slug]`
6. Verificar que los bloques renderizan correctamente
7. Verificar responsive (mobile/tablet/desktop)
8. Verificar meta tags y OG image

## Paso 4 — SEO

9. Agregar structured data CreativeWork para el proyecto
10. Verificar que el sitemap incluye la nueva URL
11. Verificar alt text en todas las imágenes

No commitear sin confirmación del usuario.
