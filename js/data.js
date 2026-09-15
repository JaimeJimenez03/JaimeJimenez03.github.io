/* ============================================================
   data.js — TODO el contenido editable del portafolio vive aquí.
   Para añadir un proyecto nuevo: copia un objeto de PROYECTOS,
   cámbiale los datos y listo. No hace falta tocar el HTML.
   ============================================================ */

/* ---------- Tecnologías ---------- */
const STACK = [
  {
    titulo: 'Frontend',
    descripcion: 'Interfaces web y móviles, responsive y accesibles.',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'React', 'React Router', 'Vite', 'Angular', 'Ionic', 'React Native']
  },
  {
    titulo: 'Backend',
    descripcion: 'APIs REST, autenticación y lógica de negocio.',
    tecnologias: ['Java', 'Spring Boot', 'Spring Security', 'Python', 'Django']
  },
  {
    titulo: 'Datos y despliegue',
    descripcion: 'Persistencia, contenedores, servidor y control de versiones.',
    tecnologias: ['SQL', 'Docker', 'Nginx', 'Git', 'GitHub']
  }
];

/* ---------- Proyectos ----------
   Campos:
     titulo      → nombre del proyecto
     subtitulo   → una línea de posicionamiento (opcional)
     anio        → año o rango ('2026', '2025 — 2026')
     categoria   → 'web' | 'movil' | 'backend'  (alimenta los filtros)
     estado      → etiqueta opcional: 'En desarrollo', 'En producción'…
     destacado   → true para que la tarjeta ocupe el doble de ancho
     descripcion → 2-3 frases: qué hace y qué problema resuelve
     puntos      → array de logros técnicos concretos (opcional)
     imagenes    → array de rutas a capturas (opcional, 1-3 recomendado)
     tecnologias → array de strings
     demo        → URL de la demo en vivo, o null
     sitio       → URL de la web del producto, o null
     repo        → URL del repositorio, o null
*/
const PROYECTOS = [
  {
    titulo: 'AuterVix',
    subtitulo: 'SaaS de gestión para talleres mecánicos',
    anio: '2026',
    categoria: 'web',
    destacado: true,
    descripcion: 'Aplicación web multi-taller que digitaliza el día a día de un taller ' +
      'mecánico: clientes y vehículos, órdenes de trabajo, presupuestos, citas, albaranes, ' +
      'facturación, caja, inventario y proveedores. Cada taller opera de forma aislada con ' +
      'sus propios datos, y hay una demo pública con datos de ejemplo que se reinicia sola.',
    puntos: [
      'Panel con facturación, cobros pendientes, IVA, valor de inventario y agenda del día',
      'Órdenes de trabajo con estados, líneas, fotos e historial completo por vehículo',
      'Facturación con IVA y numeración configurables por taller',
      'Informes: ventas por mes, top clientes, piezas más usadas, cobros por método',
      'Portal de cliente con invitaciones por email y decodificación de VIN',
      'Aislamiento multi-taller, roles de trabajadores y papelera de recuperación',
      'Instalable como PWA e importación masiva de datos',
      'Proyecto propio de principio a fin: desarrollo, despliegue en servidor cloud ' +
        'con dominio propio y mantenimiento'
    ],
    tecnologias: ['React', 'React Router', 'Vite', 'PWA', 'Java', 'Spring Boot', 'Spring Security', 'API REST', 'SQL', 'Nginx', 'Despliegue en cloud'],
    demo: 'https://demo.autervix.com',
    sitio: 'https://autervix.com',
    repo: null
  },
  {
    titulo: 'Gestión de luminarias y contenedores',
    subtitulo: 'Plataforma IoT',
    anio: '2024',
    categoria: 'web',
    destacado: false,
    descripcion: 'Plataforma full stack para dispositivos IoT: las luminarias y ' +
      'contenedores envían su información a una base de datos y esos datos se ' +
      'consultan y gestionan desde una web privada.',
    puntos: [
      'Backend en Python con Django para recibir y almacenar los datos de los dispositivos',
      'Web privada de gestión para consultar la información de cada dispositivo'
    ],
    tecnologias: ['Python', 'Django', 'JavaScript', 'SQL', 'IoT'],
    demo: null,
    sitio: null,
    repo: null
  },
  {
    titulo: 'A Fuego Lento',
    subtitulo: 'App móvil · red social culinaria',
    anio: '2026',
    categoria: 'movil',
    estado: 'En desarrollo',
    destacado: false,
    descripcion: 'Red social de recetas para móvil: los usuarios publican sus platos, ' +
      'siguen a otros cocineros, guardan favoritos, valoran y comentan. Incluye búsqueda ' +
      'con filtros y listas de la compra generadas desde los ingredientes de cada receta.',
    puntos: [
      'Feed con recetas en tendencia y filtros por tipo de plato',
      'Ficha de receta con tiempo, dificultad, raciones, momento del día y etiquetas de dieta',
      'Buscador de recetas y de usuarios, con filtros por desayuno, almuerzo, merienda o cena',
      'Listas de la compra con seguimiento de ingredientes ya comprados',
      'Perfiles de cocinero, valoraciones, comentarios y sistema de reportes',
      'Backend propio en Java con Spring Boot y API REST'
    ],
    // Capturas reales de la app (descargadas de la landing del proyecto)
    imagenes: [
      'assets/img/screen_home2.png',
      'assets/img/screen_detalle.png',
      'assets/img/screen_buscar.png'
    ],
    tecnologias: ['React Native', 'Java', 'Spring Boot', 'Spring Security', 'API REST',
                  'SQL', 'Nginx', 'Despliegue en cloud'],
    demo: null,
    // Landing del proyecto. Está en un dominio provisional y con testimonios de relleno:
    // cuando la revises, pon aquí 'https://tradetail.app' y aparecerá el enlace "Web ↗".
    sitio: null,
    repo: null
  }

  /* Plantilla para tus otros proyectos — copia, descomenta y rellena:
  ,{
    titulo: 'Nombre del proyecto',
    subtitulo: '',
    anio: '2026',
    categoria: 'movil',
    destacado: false,
    descripcion: 'Qué hace y por qué lo hiciste.',
    puntos: [],
    tecnologias: ['React Native', 'Firebase'],
    demo: null,
    sitio: null,
    repo: 'https://github.com/...'
  }
  */
];

/* ---------- Trayectoria (formación y experiencia) ---------- */
const TRAYECTORIA = [
  {
    periodo: 'Sept. 2026 — En curso',
    titulo: 'Desarrollo de Aplicaciones Multiplataforma (DAM)',
    lugar: 'IES Torre de los Guzmanes',
    texto: 'Aplicaciones de escritorio y móviles, Java, bases de datos y acceso a datos.'
  },
  {
    periodo: '2024 — Actualidad',
    titulo: 'Construcción',
    lugar: 'Montalysol',
    texto: 'Trabajo actual, que compagino con mi formación y con el desarrollo de mis ' +
           'propios proyectos.'
  },
  {
    periodo: '2022 — 2024',
    titulo: 'Desarrollo de Aplicaciones Web (DAW)',
    lugar: 'IES Velázquez',
    texto: 'Desarrollo frontend y backend, bases de datos y despliegue de aplicaciones web.'
  },
  {
    periodo: '2020 — 2022',
    titulo: 'Bachillerato Tecnológico',
    lugar: 'IES Burguillos',
    texto: ''
  }
];
