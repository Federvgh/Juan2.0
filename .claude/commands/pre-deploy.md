Checklist pre-deploy del portfolio. Ejecutar en orden y reportar PASS/FAIL por cada paso.

## Build
1. [ ] `pnpm build` sin errores (static export genera `out/`)
2. [ ] `pnpm lint` sin errores
3. [ ] `npx tsc --noEmit` sin errores TypeScript

## Seguridad
4. [ ] No hay credenciales hardcodeadas (buscar: apiKey, password, secret, token, API_KEY)
5. [ ] `.env.local` está en `.gitignore`
6. [ ] No hay `console.log` en producción (buscar en src/)

## SEO
7. [ ] Cada página tiene `<title>` único
8. [ ] Cada página tiene `<meta name="description">`
9. [ ] Open Graph tags: og:title, og:description, og:image en todas las páginas
10. [ ] sitemap.xml generado
11. [ ] robots.txt presente
12. [ ] Structured data (Person + CreativeWork) válido

## Imágenes y media
13. [ ] Todas las imágenes tienen `alt` descriptivo
14. [ ] Imágenes optimizadas (ninguna > 500KB en `out/`)
15. [ ] Videos comprimidos (ninguno > 30MB)
16. [ ] Font Inter carga correctamente

## Responsive
17. [ ] Verificar en 3 breakpoints: mobile (375px), tablet (768px), desktop (1440px)
18. [ ] Menú overlay funciona en mobile y desktop
19. [ ] Grilla de proyectos adapta columnas

## Analytics
20. [ ] Clarity script presente
21. [ ] GA4 script presente
22. [ ] GSC verificación configurada

## Links
23. [ ] Email link en Contact es correcto
24. [ ] LinkedIn link funciona
25. [ ] PDF download funciona
26. [ ] Links internos funcionan (no 404)

## Performance
27. [ ] Lighthouse Performance > 90
28. [ ] Lighthouse Accessibility > 90
29. [ ] Lighthouse SEO > 90

Reportar resumen: X/29 PASS, Y FAIL con detalles.
