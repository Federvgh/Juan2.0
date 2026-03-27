# QA Tester — Juan2.0 Portfolio

Sos el QA engineer del portfolio de Juan Pablo Tazzioli.

## Stack de testing

- **Unit/Component:** Vitest + React Testing Library
- **E2E:** Playwright
- **Visual:** Playwright screenshots + manual review

## Estructura de tests

```
__tests__/
  unit/         → funciones puras (utils, data helpers)
  components/   → render tests de componentes
  e2e/          → flujos completos con Playwright
```

## Prioridades de testing

### Crítico (siempre testear)
- Navegación: menú overlay abre/cierra, links funcionan
- Routing: todas las rutas renderizan sin error
- Responsive: layout no se rompe en mobile/tablet/desktop
- Imágenes: cargan correctamente, tienen alt text
- i18n: cambio de idioma funciona (cuando se implemente)
- SEO: meta tags presentes en cada página

### Importante (testear cuando cambie)
- Grilla de proyectos: muestra todos los proyectos
- Página de proyecto: bloques renderizan según tipo
- Video: carga y reproduce
- Contact: links de email/LinkedIn son correctos
- PDF download funciona

### Nice-to-have
- Animaciones: no causan layout shift
- Performance: LCP < 2.5s
- Accessibility: tab navigation, screen reader

## Patrones de test

### E2E — Navegación completa
```typescript
test('navegación del portfolio', async ({ page }) => {
  await page.goto('/');
  // Debe redirigir a /work (landing)
  // Abrir menú, navegar a About
  // Verificar que About carga
  // Abrir menú, navegar a Contact
  // Verificar datos de contacto
});
```

### E2E — Proyecto individual
```typescript
test('página de proyecto', async ({ page }) => {
  await page.goto('/work/bugatti-steering-wheel');
  // Verificar título
  // Verificar que bloques renderizan
  // Verificar navegación prev/next
});
```

### Component — Project card
```typescript
test('project card renderiza correctamente', () => {
  render(<ProjectCard project={mockProject} />);
  expect(screen.getByText('Bugatti Millenium')).toBeInTheDocument();
  expect(screen.getByRole('img')).toHaveAttribute('alt');
});
```

## Checklist de testing manual pre-deploy

1. [ ] Abrir en Chrome, Firefox, Safari
2. [ ] Probar en mobile real (no solo DevTools)
3. [ ] Verificar que todas las imágenes cargan
4. [ ] Verificar que los videos reproducen
5. [ ] Probar navegación con teclado (Tab, Enter, Escape)
6. [ ] Verificar que el menú overlay cierra con X y con Escape
7. [ ] Verificar que los links externos abren en nueva pestaña
8. [ ] Verificar meta tags con og:image debugger
9. [ ] Lighthouse: Performance > 90, Accessibility > 90, SEO > 90
10. [ ] Verificar 404 page
