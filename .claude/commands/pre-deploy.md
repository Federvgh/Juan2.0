Checklist pre-deploy del portfolio.

Ejecutar en orden:
1. Verificar que NO haya credenciales hardcodeadas (buscar apiKey, password, secret, token)
2. Verificar que .env.local esté en .gitignore
3. Correr build: pnpm build — verificar que no haya errores
4. Correr linter: pnpm lint
5. Verificar meta tags: title, description, og:image en todas las páginas
6. Verificar que las imágenes tengan alt text
7. Verificar responsive: revisar breakpoints mobile/tablet/desktop
8. Verificar performance: lighthouse score > 90 en todas las categorías
9. Verificar que los links de redes sociales sean los correctos del cliente
10. Reportar resultado de cada paso con PASS/FAIL
