Code review del portfolio.

Revisar los cambios recientes (o archivos especificados) con este checklist:

## TypeScript
- [ ] Tipos explícitos, sin `any`
- [ ] Interfaces para props de componentes
- [ ] Datos de proyectos tipados correctamente

## React / Next.js
- [ ] Server Components por defecto, `'use client'` solo cuando necesario
- [ ] `'use client'` lo más abajo posible en el árbol
- [ ] next/image con width, height, alt, sizes
- [ ] No hay state innecesario (derivar cuando sea posible)
- [ ] Keys estables en listas (no index)
- [ ] No hay efectos innecesarios (useEffect para sincronización, no para derivación)

## Tailwind / Estilos
- [ ] Clases consistentes con el design system (ver agent ui-designer)
- [ ] Responsive: mobile-first con breakpoints sm/md/lg
- [ ] No hay estilos inline
- [ ] `cn()` para clases condicionales

## Framer Motion
- [ ] Solo animar opacity y transform (GPU-friendly)
- [ ] `whileInView` con `viewport={{ once: true }}`
- [ ] Tween con custom easing, no spring
- [ ] `useReducedMotion` implementado
- [ ] Animaciones sutiles (scale max 1.02, durations 300-500ms)

## Filosofía del portfolio
- [ ] La UI no opaca los diseños de producto
- [ ] Monocromático: solo blanco/negro/grises
- [ ] Espaciado generoso, sin decoración innecesaria
- [ ] Imágenes como protagonistas

## Performance
- [ ] Lazy loading en imágenes below-the-fold
- [ ] Priority en imágenes above-the-fold
- [ ] No hay imports pesados sin dynamic import
- [ ] No hay re-renders innecesarios

Reportar issues encontrados con severidad: CRITICAL / WARNING / SUGGESTION
