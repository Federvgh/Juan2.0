Pipeline de deploy del portfolio a AWS Amplify.

## Pre-condiciones

1. Verificar si existe `.claude/pending-fixes.md` con fixes pendientes — procesarlos PRIMERO
2. Correr `/pre-deploy` y verificar que todo sea PASS

## Pipeline

1. `pnpm build` — verificar que el static export genera sin errores
2. Verificar que la carpeta `out/` se generó correctamente
3. Verificar tamaño total de `out/`: reportar si supera 100MB (videos pueden inflar)
4. `git status` — mostrar cambios al usuario
5. ESPERAR confirmación del usuario para commitear
6. Push a main — Amplify detecta y deploya automáticamente

## Post-deploy

7. Esperar 2-3 minutos para que Amplify procese
8. Verificar que https://juanpablotazzioli.com carga correctamente
9. Verificar que las imágenes cargan (no 404)
10. Verificar que los videos reproducen
11. Correr Lighthouse en la URL de producción
12. Reportar resultado final: DEPLOYED / FAILED con detalles
