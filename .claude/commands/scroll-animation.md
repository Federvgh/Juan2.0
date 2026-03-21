Implementar animación scroll-linked con frames de video 3D.

## Cuándo usar

SOLO para 1-2 proyectos estrella donde el render 3D justifique el peso extra.
Para el resto de las páginas, usar fade-in + translate simples.

## Paso 1: Extraer frames del video

```bash
# Instalar ffmpeg si no está
brew install ffmpeg

# Extraer frames como webp (ajustar fps según duración deseada)
ffmpeg -i input-video.mp4 -vf "fps=30,scale=1920:-1" -quality 80 frames/frame_%04d.webp
```

- Apuntar a 60-120 frames por animación
- Formato webp, calidad 80 (balance peso/visual)
- Resolución máxima 1920px de ancho

## Paso 2: Subir frames

NO commitear frames al repo Git — son demasiado pesados.
Opciones:
1. **Vercel Blob** — subir con @vercel/blob, servir desde edge
2. **public/ con .gitignore** — para desarrollo local, CDN en producción
3. **Carpeta optimizada** — si son <50 frames livianos, puede ir en public/

## Paso 3: Componente React

Usar un Client Component con canvas:

```
'use client'
- useRef para el canvas
- useScroll de Framer Motion (o IntersectionObserver + scroll event)
- Precargar las primeras 10 imágenes, lazy load el resto
- Mapear scroll progress (0-1) al índice de frame (0-N)
- Dibujar frame actual en canvas con requestAnimationFrame
- Limpiar event listeners en cleanup
```

## Paso 4: Optimización de carga

1. Preload: cargar frames 0-10 inmediatamente, resto con IntersectionObserver
2. Baja resolución primero: servir thumbnails mientras cargan los frames full
3. Indicador de carga: mostrar el frame 0 como imagen estática hasta que todo esté listo
4. Fallback: si el usuario tiene conexión lenta, mostrar imagen estática del render

## Paso 5: Integración con el layout

- El canvas ocupa una columna del grid (sticky position)
- El texto/contenido del proyecto scrollea en la otra columna
- El canvas se "pega" mientras el usuario scrollea el contenido
- Al terminar la sección, el canvas se despega y sigue el scroll normal

## Performance

- Verificar que el canvas no cause jank (usar requestAnimationFrame, no scroll event directo)
- En mobile: reducir cantidad de frames a la mitad o usar imagen estática
- Testear con Lighthouse: la animación no debe bajar el score de performance por debajo de 90
