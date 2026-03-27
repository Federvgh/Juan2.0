Auditoría técnica del portfolio.

Ejecutar cada área y reportar con PASS/WARN/FAIL:

## 1. Build
- [ ] `pnpm build` completa sin errores
- [ ] `pnpm lint` sin errores
- [ ] TypeScript strict: `npx tsc --noEmit` sin errores
- [ ] Tamaño de `out/`: reportar total y top 10 archivos más pesados

## 2. Performance
- [ ] Lighthouse Performance > 90
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] FID < 100ms
- [ ] Imágenes: ninguna > 500KB sin optimizar
- [ ] Videos: ninguno > 30MB comprimido
- [ ] Bundle size: reportar JS total

## 3. Accesibilidad
- [ ] Lighthouse Accessibility > 90
- [ ] Todas las imágenes tienen `alt` descriptivo
- [ ] Contraste de texto cumple WCAG AA
- [ ] Navegación por teclado funciona (Tab, Enter, Escape)
- [ ] Focus visible en elementos interactivos
- [ ] Skip-to-content link (opcional)

## 4. SEO
- [ ] Lighthouse SEO > 90
- [ ] Cada página tiene `<title>` único
- [ ] Cada página tiene `<meta description>`
- [ ] sitemap.xml existe y es válido
- [ ] robots.txt existe
- [ ] Open Graph tags en todas las páginas
- [ ] Structured data válido (Person + CreativeWork)

## 5. Código
- [ ] No hay `console.log` en producción
- [ ] No hay `any` en TypeScript (buscar con grep)
- [ ] No hay TODO/FIXME sin resolver
- [ ] No hay credenciales hardcodeadas
- [ ] Imports no usados eliminados

## 6. Assets
- [ ] Todas las imágenes referenciadas existen en `public/`
- [ ] No hay imágenes huérfanas (existen pero no se usan)
- [ ] Videos comprimidos y con formato correcto (H.264/H.265)
- [ ] Font Inter carga correctamente

## Resumen

Generar tabla resumen:
| Área | Estado | Issues |
|------|--------|--------|
| Build | PASS/FAIL | ... |
| Performance | PASS/FAIL | ... |
| ... | ... | ... |
