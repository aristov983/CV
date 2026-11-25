/* =========================================================
   PROYECTOS — este es el único archivo que tenés que tocar
   para agregar un proyecto nuevo.

   Copiá un bloque { ... }, pegalo ARRIBA de todo (el primero
   de la lista es el que aparece primero en la página) y
   cambiá los textos. Los campos opcionales se pueden borrar.
   ========================================================= */

const PROYECTOS = [
  {
    titulo: "Cenova",
    subtitulo: "Plataforma para gestionar gimnasios",
    fecha: "4.º semestre de la carrera",
    contexto: "Desarrollo Web y Mobile — Universidad Católica del Uruguay",
    descripcion:
      "Plataforma web y mobile para la gestión integral de un gimnasio: socios, membresías y pagos en un solo lugar. Cada socio entra a ver la rutina que su entrenador le asignó para el día. Proyecto en equipo, desplegado en producción con dominio propio.",
    destacados: [
      "Autenticación con JWT y sesión persistente",
      "Tres roles (socio, entrenador y administrador) con permisos validados en front y API",
      "Contraseñas hasheadas con bcrypt",
    ],
    tags: ["Ionic", "Angular", "TypeScript", "Fastify", "API REST", "JWT"],
    links: [{ texto: "cenova.online", url: "https://cenova.online" }],
    imagenes: [
      { src: "assets/img/cenova-inicio.webp", alt: "Página de inicio de Cenova" },
      { src: "assets/img/cenova-login.webp", alt: "Pantalla de inicio de sesión de Cenova" },
      { src: "assets/img/cenova-funcionalidades.webp", alt: "Página de funcionalidades de Cenova" },
    ],
  },
  {
    titulo: "Deep Count",
    subtitulo: "A Colony Counter with Deep Learning",
    fecha: "Investigación aplicada",
    contexto: "UCU · UdelaR — presentado en las Jornadas de Administración e Informática (UNER)",
    descripcion:
      "Software que cuenta automáticamente colonias bacterianas en placas de Petri a partir de una fotografía, usando deep learning y visión por computadora. Pensado como alternativa gratuita y accesible para laboratorios con pocos recursos, donde el conteo manual es lento y propenso a errores.",
    destacados: [
      "Modelo entrenado con más de 600 imágenes de alta resolución y data augmentation",
      "Margen de error de 1 a 3 colonias frente al conteo manual",
      "Interfaz gráfica multiplataforma (Windows y Linux) con umbral de confianza ajustable",
    ],
    tags: ["Python", "Deep Learning", "Visión por computadora", "Google Colab", "Roboflow"],
    links: [],
    imagenes: [
      { src: "assets/img/deepcount-software.webp", alt: "Software de Deep Count detectando colonias en una placa de Petri" },
    ],
  },

  /* ---------- PLANTILLA (copiá desde acá) ----------
  {
    titulo: "Nombre del proyecto",
    subtitulo: "Una línea que lo resuma",
    fecha: "2027",
    contexto: "Materia / empresa / personal",
    descripcion: "Qué es y qué problema resuelve.",
    destacados: ["Logro 1", "Logro 2"],
    tags: ["Tecnología 1", "Tecnología 2"],
    links: [
      { texto: "Repositorio", url: "https://github.com/aristov983/..." },
    ],
    imagenes: [
      { src: "assets/img/mi-captura.webp", alt: "Descripción de la imagen" },
    ],
  },
  ------------------------------------------------- */
];
