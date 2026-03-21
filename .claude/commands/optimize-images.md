Optimizar imágenes del portfolio para producción.

Pasos:
1. Listá todas las imágenes en assets/images/ o public/
2. Verificá que cada imagen tenga versión WebP/AVIF (o que next/image las genere)
3. Revisá que ninguna imagen supere 500KB sin comprimir
4. Verificá que todas las etiquetas img/Image tengan width, height y alt
5. Revisá que las imágenes above-the-fold tengan priority={true}
6. Reportá un resumen: imágenes ok, imágenes a optimizar, tamaño total antes/después
