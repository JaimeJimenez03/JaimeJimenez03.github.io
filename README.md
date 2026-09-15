# Portafolio — Jaime Jiménez

Portafolio personal en HTML, CSS y JavaScript (sin frameworks ni compilación).

## Estructura

```
index.html            → única página, dividida en secciones
css/base.css          → reset, variables de color, tipografía, tema claro/oscuro
css/layout.css        → contenedores, cabecera, secciones, rejillas, responsive
css/components.css    → botones, tarjetas, chips, timeline, contacto
js/data.js            → CONTENIDO EDITABLE (stack, proyectos, trayectoria)
js/main.js            → render + interacciones (tema, menú, filtros, scroll)
assets/cv/            → CV en PDF
assets/img/           → imágenes y capturas de proyectos
```

## Cómo añadir un proyecto

Abre `js/data.js`, copia un objeto del array `PROYECTOS`, cámbiale los datos y guarda.
La tarjeta y el filtro de su categoría aparecen solos.

## Ver la web

Abre `index.html` con doble clic en el navegador. No necesita servidor.

## Pendiente

- Fechas reales en `TRAYECTORIA` y `PROYECTOS` (marcadas como `REVISAR`).
- Usuario real de GitHub y LinkedIn en la sección de contacto de `index.html`.
- Capturas de los proyectos en `assets/img/`.
