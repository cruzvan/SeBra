
import { Service, BlogPost, PortfolioProject } from './types';

export const headerContent = {
  logoPrefix: "Se",
  logoSuffix: "Bra",
  emailLink: "mailto:contact@sebra.com",
  ctaText: "Contacto",
  socialLinks: {
    instagram: "https://www.instagram.com/secondbrainmultimedia/",
    behance: "#",
    linkedin: "#"
  }
};

export const navigationContent = {
  about: "Acerca de",
  services: "Servicios Creativos",
  press: "Prensa",
  team: "Quienes Somos"
};

export const aboutContent = {
  media: { type: 'animation', data: { src: 'https://files.catbox.moe/wzn24a.webm', alt: "Second Brain Animation Logo" } },
  mainTitle: "Nuestra Esencia",
  introParagraph1: "En SeBra priorizamos el desarrollo y consolidación de tu identidad artística en el área creativa que te desenvuelvas, porque comprendemos que tu visión es fundamental para el desarrollo de tus obras.",
  introParagraph2: "Es por eso que nos dedicamos a proporcionar apoyo, estructura, propuestas e inputs para tus creaciones, y,—a través de los distintos servicios que ofrecemos–, buscamos acompañarte en cada etapa de tu proceso, entregándote herramientas, perspectivas y orientación que enriquezcan tu trabajo y te permitan consolidar una identidad artística auténtica y sólida",

  mission: {
    title: "Misión",
    text: "Nutrir la esencia creativa de cada artista, acompañándolo con apoyo profesional y propuestas enriquecedoras que impulsen su crecimiento. Buscamos que cada obra sea una manifestación genuina de su identidad y una afirmación de su visión única."
  },
  vision: {
    title: "Visión",
    text: "Aspiramos a construir un espacio donde cada artista pueda desarrollar su identidad creativa con libertad, confianza y profundidad, convirtiendo sus ideas en obras que reflejen su esencia y generen impacto personal y cultural."
  },
  values: {
    title: "Nuestros Valores",
    items: [
      { title: "Autenticidad Creativa", desc: "Creemos en el valor de una identidad artística propia." },
      { title: "Acompañamiento Humano y Profesional", desc: "Acompañamos generando un entorno seguro para explorar y crecer creativamente." },
      { title: "Exploración y Desarrollo Continuo", desc: "Fomentamos la búsqueda constante de nuevas perspectivas que enriquezcan la obra y la evolución del artista." }
    ]
  }
};

export const teamContent = {
  intro: {
    title: "Un espacio para tu identidad artística",
    description: "Somos un equipo interdisciplinario orientado a fortalecer procesos creativos auténticos. Unimos experiencia creativa, técnica y humana para acompañarte en cada etapa de tu desarrollo como artista. Conoce más sobre nosotros a continuación."
  },
  members: [
    {
      name: "Winters of Blue",
      role: "Producer & Musician",
      subRole: "Co-Fundador, Community Manager, Psicóloga, ",
      image: { src: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: "Portrait of Winters of Blue, Producer & Musician" },
      linkedin: "https://www.linkedin.com"
    },
    {
      name: "Angelo Cruz",
      role: "Designer & Technical Artist",
      subRole: "Co-Fundador, Programmer, Artista 3D",
      image: { src: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: "Portrait of Angelo Cruz, Designer & Technical Artist" },
      linkedin: "https://www.linkedin.com/in/ancrva/"
    }
  ]
};

export const pressContent: BlogPost[] = [
  {
    title: "El Futuro del Diseño Generativo",
    excerpt: "Exploramos cómo la inteligencia artificial está redefiniendo el flujo de trabajo creativo y por qué los diseñadores humanos son más necesarios que nunca.",
    date: "Oct 12, 2023",
    category: "Tecnología",
    image: { src: 'https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Abstract swirling generative art' },
    slug: "futuro-diseno-generativo",
    content: `
      <p>La inteligencia artificial ha dejado de ser una promesa futurista para convertirse en una herramienta cotidiana en el estudio de diseño. Pero, ¿significa esto el fin de la creatividad humana? En SeBra creemos firmemente que no.</p>
      <p>El diseño generativo nos permite explorar miles de iteraciones en el tiempo que antes nos tomaba hacer una. Nos libera de las tareas repetitivas y nos permite enfocarnos en lo que realmente importa: la estrategia, la empatía y la narrativa.</p>
      <h3>La Simbiosis Humano-Máquina</h3>
      <p>No se trata de reemplazar al diseñador, sino de aumentarlo. Las herramientas como Midjourney o Stable Diffusion son pinceles infinitos, pero necesitan una mano experta que guíe el trazo.</p>
      <img src="https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Abstract AI Art" />
      <span class="caption">Exploraciones visuales generadas en nuestro laboratorio utilizando algoritmos personalizados.</span>
      <p>En nuestros últimos proyectos, hemos utilizado IA para generar texturas base que luego son refinadas y esculpidas manualmente. El resultado es una estética que se siente a la vez orgánica y sintética, un reflejo perfecto de la era en la que vivimos.</p>
    `
  },
  {
    title: "SeBra gana el Awwwards 'Site of the Day'",
    excerpt: "Nuestro último proyecto para 'Nebula Corp' ha sido reconocido internacionalmente por su innovadora navegación inmersiva.",
    date: "Sep 28, 2023",
    category: "Premios",
    image: { src: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Laptop showing an award-winning website design' },
    slug: "sebra-awwwards-win",
    content: `
      <p>Es un honor para nosotros anunciar que el sitio web desarrollado para <strong>Nebula Corp</strong> ha sido galardonado con el prestigioso "Site of the Day" en Awwwards. Este reconocimiento valida meses de trabajo arduo y experimentación.</p>
      <p>El desafío principal era traducir la complejidad de la computación cuántica (el núcleo de negocio de Nebula) en una experiencia visual comprensible y atractiva para inversores no técnicos.</p>
      <h3>Innovación en Navegación</h3>
      <p>Decidimos romper con el scroll vertical tradicional. Implementamos un sistema de navegación basado en nodos 3D WebGL que permite al usuario explorar el contenido de manera no lineal, simulando el comportamiento de las partículas subatómicas.</p>
      <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Nebula Project Interface" />
      <p>Agradecemos a todo el equipo de desarrollo y diseño, y especialmente a Nebula Corp por confiar en nuestra visión audaz.</p>
    `
  },
  {
    title: "Maximalismo Digital: ¿El fin del espacio en blanco?",
    excerpt: "Analizamos las tendencias visuales para el 2024 y cómo el caos organizado está tomando el control de las interfaces web.",
    date: "Ago 15, 2023",
    category: "Tendencias",
    image: { src: 'https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Colorful and chaotic maximalist digital art' },
    slug: "maximalismo-digital",
    content: `
      <p>Durante la última década, el minimalismo ha reinado supremo. Mucho espacio en blanco, tipografía sans-serif limpia y grillas ordenadas. Pero el péndulo está oscilando.</p>
      <p>El <strong>Maximalismo Digital</strong> es una respuesta a la homogeneización de la web. Es ruidoso, colorido y descarado. Se trata de ocupar el espacio, no de dejarlo vacío.</p>
      <h3>Características Clave</h3>
      <ul>
        <li>Tipografía experimental y distorsionada.</li>
        <li>Colores neón y contrastes vibrantes.</li>
        <li>Micro-interacciones constantes.</li>
        <li>Collages de medios mixtos.</li>
      </ul>
      <img src="https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Maximalist Art" />
      <p>En SeBra estamos abrazando esta tendencia, no como una regla, sino como una herramienta más en nuestro arsenal para marcas que buscan destacar gritando, no susurrando.</p>
    `
  },
  {
    title: "La Psicología del Color en VR",
    excerpt: "Cómo los esquemas de color afectan la percepción de profundidad y la respuesta emocional en entornos de realidad virtual.",
    date: "Jul 03, 2023",
    category: "Investigación",
    image: { src: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Person wearing a VR headset in a colorful room' },
    slug: "psicologia-color-vr",
    content: `
      <p>Diseñar para Realidad Virtual (VR) no es simplemente diseñar en 3D. Es diseñar estados de ánimo. A diferencia de una pantalla 2D, en VR el usuario está <em>dentro</em> del color.</p>
      <p>Nuestra última investigación interna reveló datos fascinantes sobre cómo la temperatura del color afecta la percepción del tiempo y el espacio en entornos inmersivos.</p>
      <h3>Hallazgos Principales</h3>
      <p>Los tonos azules y fríos tienden a hacer que los espacios virtuales se sientan más amplios y ralentizan la percepción del tiempo. Por el contrario, los rojos intensos pueden inducir claustrofobia si no se usan con cuidado, pero son excelentes para dirigir la atención.</p>
      <img src="https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="VR Environment" />
      <p>Aplicamos estos principios en nuestro trabajo para museos virtuales, asegurando que la experiencia no solo sea visualmente impactante, sino psicológicamente confortable.</p>
    `
  }
];

export const servicesContent: Service[] = [
  {
    title: "Official Lyric Video",
    briefDescription: "Presenta la letra de tu canción de forma dinámica y estilizada para mejorar el engagement con tu público.",
    detailedDescription: "Similar al visualizer, pero enfocado en presentar la letra de la canción de forma dinámica y estilizada. Ayuda a mejorar el engagement con tu público objetivo, facilitando a que tus seguidores aprendan y canten la letra. El texto puede ser animado y sincronizado con la voz y ritmo de la música. El estilo visual cambia dependiendo de la identidad del artista y la atmósfera de la canción.",
    cardAsset: { type: 'animation', data: { src: 'https://files.catbox.moe/fe8m3l.webm', alt: 'Official Lyric Video service animation' } },
    mainImage: { src: 'https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Dynamic lyric video animation' },
    detailImage: { src: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Concert with vibrant lights' },
    tags: ['Video', 'Audio'],
  },
  {
    title: 'Video "Spotify Canvas"',
    briefDescription: "Crea un video ultra corto en formato vertical para la pantalla 'currently playing' de Spotify.",
    detailedDescription: 'Creación de video ultra corto (3-8 segundos) en formato vertical (9:16) y usualmente en bucle para mostrar en la pantalla de "currently playing" de Spotify. El contenido es personalizable dependiendo de las exigencias del artista. Además, Spotify reporta que los tracks con "Canvas" tienen más saves, shares y visitas al perfil del artista.',
    cardAsset: { type: 'animation', data: { src: 'https://files.catbox.moe/kn1m5e.webm', alt: 'Spotify Canvas video service animation' } },
    mainImage: { src: 'https://files.catbox.moe/kn1m5e.webm', alt: 'Spotify Canvas video loop represented by social media metrics' },
    detailImage: { src: 'https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Smartphone with music app' },
    tags: ['Video', 'Marketing'],
  },
  {
    title: "Pre-Rendered Visuals for Performance",
    briefDescription: "Videos en loop para tus performances, incluyendo logos 2D/3D, animaciones y efectos complejos.",
    detailedDescription: "Necesitas un video en loop para tus performance? Puede incluir tu logo 2D o 3D, animaciones de fondo, uso de iluminación, efectos de postprocesado o shaders complejos dependiendo de lo solicitado.",
    cardAsset: { type: 'animation', data: { src: 'https://files.catbox.moe/wzn24a.webm', alt: 'Pre-Rendered Visuals service animation' } },
    mainImage: { src: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Pre-rendered visuals for live performance' },
    detailImage: { src: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Visuals on a large screen at a music festival' },
    tags: ['Video', '3D'],
  },
  {
    title: "Press Strategy",
    briefDescription: "Diseño de contenido para medios digitales, incluyendo notas de prensa y 'One Sheets' para publicación.",
    detailedDescription: 'Crear el diseño del contenido que será publicado en los medios digitales en su área respectiva. Esto incluye la nota de prensa, un "One Sheet" y su respectiva publicación en distintos medios de comunicación.',
    cardAsset: { type: 'animation', data: { src: 'https://files.catbox.moe/wzn24a.webm', alt: 'Press Strategy service animation' } },
    mainImage: { src: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Press strategy document design' },
    detailImage: { src: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Strategic planning session' },
    tags: ['Marketing', 'Project Management'],
  },
  {
    title: "Marketing - RR.SS. Handle",
    briefDescription: "Asesoría y análisis de métricas para asegurar una buena distribución de tu material de lanzamiento.",
    detailedDescription: "Asesorías y análisis de métricas para asegurar una buena distribución del material de lanzamiento.",
    cardAsset: { type: 'animation', data: { src: 'https://files.catbox.moe/wzn24a.webm', alt: 'Social Media Marketing service animation' } },
    mainImage: { src: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Social media marketing analytics' },
    detailImage: { src: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Team working on a marketing campaign' },
    tags: ['Marketing'],
  },
  {
    title: "Obsidian Custom Database",
    briefDescription: "Bases de datos personalizadas para organizar tus ideas, trabajo, colecciones y estudios en tu propio PC u online.",
    detailedDescription: "Un lugar para organizar tus ideas? Quieres registrar tu trabajo o tener tus apuntes de estudio organizados? Te creamos una base de datos personalizada para que tengas en tu propio PC u online ready-to-go.",
    cardAsset: { type: 'animation', data: { src: 'https://files.catbox.moe/yzuj97.webm', alt: 'Obsidian Custom Database service animation' } },
    mainImage: { src: 'https://images.pexels.com/photos/7176027/pexels-photo-7176027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Custom Notion or Obsidian database' },
    detailImage: { src: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Organized digital workspace' },
    tags: ['Project Management'],
  },
  {
    title: "Music Composition & Production",
    briefDescription: "Servicio completo de producción musical, desde la composición hasta la masterización final.",
    detailedDescription: "Necesitas ayuda para llevar a cabo la producción o composición de un track? El servicio abarca desde la composición inicial, grabación, mix de instrumentos, ecualización, añadir efectos de sonido, masterización y otros.",
    cardAsset: { type: 'animation', data: { src: 'https://files.catbox.moe/wzn24a.webm', alt: 'Music Composition & Production service animation' } },
    mainImage: { src: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Music production digital audio workstation' },
    detailImage: { src: 'https://images.pexels.com/photos/34079/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Close-up of a synthesizer' },
    tags: ['Audio'],
  },
  {
    title: "3D Modeling - Props",
    briefDescription: "Modelos 3D personalizados para tu logo, mercancía, o como assets 'game-ready' para videojuegos.",
    detailedDescription: 'Necesitas un modelo 3D personalizado? Puede servir para tu logo, mercancía, decoraciones, etc. Puede entregarse tanto como archivo .fbx, .blend y puede solicitarse como un "game-ready" si necesita ocuparse para un videojuego.',
    cardAsset: { type: 'animation', data: { src: 'https://files.catbox.moe/qsyhw6.webm', alt: '3D Modeling for Props service animation' } },
    mainImage: { src: 'https://images.pexels.com/photos/19619195/pexels-photo-19619195/free-photo-of-a-close-up-of-a-video-game-controller.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: '3D model of a custom prop' },
    detailImage: { src: 'https://images.pexels.com/photos/7770512/pexels-photo-7770512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Detailed render of a 3D object' },
    tags: ['3D'],
  },
  {
    title: "3D Modeling - Environment",
    briefDescription: "Creación de escenas y mundos 3D personalizados para videos, cine, videojuegos, o recorridos virtuales.",
    detailedDescription: 'Quieres una escena o mundo personalizado? Este proceso contiene la creación de modelos 3D, su texturizado, shading, iluminación y postprocesado. El proceso se preocupa de crear una atmósfera y narrativa específica dependiendo de las necesidades del ciente. Puede servir para videos musicales o cine (digital sets), videojuegos (game-ready) e incluso para recorridos virtuales interactivos.',
    cardAsset: { type: 'animation', data: { src: 'https://files.catbox.moe/1r1tqf.webm', alt: '3D Modeling for Environments service animation' } },
    mainImage: { src: 'https://images.pexels.com/photos/20063462/pexels-photo-20063462/free-photo-of-a-room-with-a-bed-and-a-desk-with-a-computer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: '3D model of a full environment' },
    detailImage: { src: 'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Surreal 3D architectural render' },
    tags: ['3D', 'Video'],
  },
  {
    title: "Visualizer Video",
    briefDescription: "Crea un video musical animado que pulsa y se mueve con cada beat de tu audio, ideal para plataformas digitales.",
    detailedDescription: "Transformamos tu pista de audio en una experiencia visual cautivadora. A través de gráficos generativos y animaciones procedurales, creamos un video que no solo acompaña tu música, sino que se convierte en parte de ella. Perfecto para lanzamientos en YouTube, redes sociales y proyecciones en vivo.",
    cardAsset: { type: 'animation', data: { src: 'https://files.catbox.moe/6twj8b.webm', alt: 'Visualizer Video service animation' } },
    mainImage: { src: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Abstract audio visualizer animation' },
    detailImage: { src: 'https://images.pexels.com/photos/752518/pexels-photo-752518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Colorful light trails' },
    tags: ['Video', '3D', 'Audio'],
  }
];

// Portfolio Data
export const portfolioSeContent: PortfolioProject[] = [
  {
    id: 1,
    title: "Neon Genesis",
    category: "Art Direction",
    tags: ["Dirección de Arte", "Concept Art"],
    image: { src: 'https://images.pexels.com/photos/2131969/pexels-photo-2131969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Neon-lit futuristic city street' },
    content: `
      <p>Neon Genesis fue un proyecto de exploración visual encargado por una marca de ropa urbana futurista. El objetivo era crear una serie de visuales que evocaran un futuro distópico pero elegante.</p>
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 1.5rem; margin: 3rem 0; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);">
        <iframe 
            src="https://www.youtube.com/embed/LXb3EKWsInQ" 
            title="Neon Genesis Video"
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
      </div>
      <h3>El Proceso</h3>
      <p>Utilizamos una combinación de fotografía tradicional y manipulación digital pesada. La iluminación neón fue clave para unificar la colección.</p>
      <img src="https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Detail View" />
      <p>El resultado final se utilizó en campañas de redes sociales y vallas publicitarias digitales en Tokio y Seúl.</p>
    `
  },
  {
    id: 2,
    title: "Void Walker",
    category: "Visual Strategy",
    tags: ["Estrategia Visual", "Branding"],
    image: { src: 'https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Abstract swirling dark matter' },
    content: `
      <p>Void Walker es una identidad visual para un sello discográfico experimental. Buscaban una imagen que representara el sonido del espacio profundo.</p>
      <p>Creamos un sistema de diseño basado en la ausencia de luz y formas abstractas que sugieren movimiento en el vacío.</p>
      <img src="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Void Walker Branding" />
    `
  },
  {
    id: 3,
    title: "Cyber Punk Identity",
    category: "Branding",
    tags: ["Branding", "Diseño Gráfico"],
    image: { src: 'https://images.pexels.com/photos/3828038/pexels-photo-3828038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Holographic cyberpunk branding design' },
    content: `
      <p>Rediseño completo para un evento de esports. La identidad necesitaba gritar energía, velocidad y tecnología.</p>
      <h3>Tipografía y Color</h3>
      <p>Desarrollamos una tipografía personalizada con fallos (glitches) incorporados y una paleta de colores ácida.</p>
      <img src="https://images.pexels.com/photos/1578351/pexels-photo-1578351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Esports Branding" />
    `
  },
  {
    id: 4,
    title: "Abstract Flow",
    category: "Motion",
    tags: ["Motion Graphics", "3D"],
    image: { src: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Colorful abstract liquid flows' },
    content: `
      <p>Una serie de loops animados para pantallas LED en un festival de música electrónica. El desafío era sincronizar visualmente con ritmos de 128 BPM.</p>
      <p>Utilizamos simulación de fluidos y partículas para crear formas que bailan eternamente.</p>
      <img src="https://images.pexels.com/photos/1303099/pexels-photo-1303099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Motion Frame" />
    `
  }
];

export const portfolioBraContent: PortfolioProject[] = [
  {
    id: 1,
    title: "Quantum Core",
    category: "WebGL Development",
    tags: ["WebGL", "Three.js"],
    image: { src: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: '3D render of a quantum computer core' },
    content: `
      <p>Visualización de datos en tiempo real para una empresa de computación cuántica. El núcleo gira y reacciona a los flujos de datos entrantes.</p>
      <h3>Tecnología</h3>
      <p>Construido con Three.js y shaders personalizados GLSL para lograr el efecto de refracción de cristal líquido.</p>
      <img src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Quantum Core" />
    `
  },
  {
    id: 2,
    title: "Neural Interface",
    category: "Creative Coding",
    tags: ["Creative Coding", "AI"],
    image: { src: 'https://images.pexels.com/photos/5474028/pexels-photo-5474028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Digital representation of a neural network' },
    content: `
      <p>Interfaz experimental que utiliza aprendizaje automático para adaptar el diseño de la UI según el comportamiento del usuario.</p>
      <p>El sistema aprende qué elementos son más utilizados y los prioriza visualmente en tiempo real.</p>
      <img src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Neural UI" />
    `
  },
  {
    id: 3,
    title: "Data Sculpture",
    category: "Generative Art",
    tags: ["Generative Art", "Data Viz"],
    image: { src: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: '3D generative art data sculpture' },
    content: `
      <p>Una escultura digital generada a partir de los datos de tráfico de la ciudad de Nueva York durante 24 horas.</p>
      <h3>Algoritmo</h3>
      <p>Cada línea representa un vehículo, y la altura representa la velocidad. El resultado es un mapa topográfico vivo de la ciudad.</p>
      <img src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Data Art" />
    `
  },
  {
    id: 4,
    title: "System Architecture",
    category: "Full Stack",
    tags: ["Backend", "Arquitectura"],
    image: { src: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Diagram of a complex server architecture' },
    content: `
      <p>Arquitectura de microservicios escalable para una plataforma de streaming global. Diseñada para manejar millones de conexiones concurrentes.</p>
      <p>Utilizamos Go para el backend y Kubernetes para la orquestación de contenedores.</p>
      <img src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Server Architecture" />
    `
  }
];

export const legalContent = {
  privacy: {
    title: "Política de Privacidad",
    content: `
      <p><strong>Última actualización: Noviembre 2024</strong></p>
      <p>En SeBra Multimedia, valoramos su privacidad y estamos comprometidos a proteger su información personal. Esta política describe cómo recopilamos, usamos y protegemos sus datos.</p>
      
      <h3>1. Información que recopilamos</h3>
      <p>Podemos recopilar información personal que usted nos proporciona voluntariamente, como su nombre, correo electrónico y detalles del proyecto cuando utiliza nuestros formularios de contacto o se suscribe a nuestro boletín.</p>
      
      <h3>2. Uso de la información</h3>
      <p>Utilizamos su información para:</p>
      <ul>
        <li>Responder a sus consultas y proporcionar los servicios solicitados.</li>
        <li>Mejorar nuestro sitio web y la experiencia del usuario.</li>
        <li>Enviar comunicaciones de marketing (solo si ha dado su consentimiento).</li>
      </ul>

      <h3>3. Protección de datos</h3>
      <p>Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos contra el acceso no autorizado, la pérdida o la alteración. Sin embargo, ninguna transmisión por Internet es 100% segura.</p>

      <h3>4. Cookies</h3>
      <p>Este sitio puede utilizar cookies para mejorar su experiencia de navegación. Puede configurar su navegador para rechazar todas las cookies o para que le indique cuándo se envía una cookie.</p>
    `
  },
  terms: {
    title: "Términos y Condiciones",
    content: `
      <p><strong>Última actualización: Noviembre 2024</strong></p>
      <p>Bienvenido al sitio web de SeBra Multimedia. Al acceder y utilizar este sitio, usted acepta cumplir con los siguientes términos y condiciones.</p>

      <h3>1. Propiedad Intelectual</h3>
      <p>Todo el contenido de este sitio, incluyendo textos, gráficos, logotipos, imágenes y código, es propiedad de SeBra Multimedia o de sus respectivos creadores y está protegido por leyes de propiedad intelectual.</p>

      <h3>2. Uso del Sitio</h3>
      <p>Usted se compromete a utilizar este sitio solo para fines legales y de una manera que no infrinja los derechos de, restrinja o inhiba el uso y disfrute del sitio por parte de cualquier tercero.</p>

      <h3>3. Limitación de Responsabilidad</h3>
      <p>SeBra Multimedia no será responsable de ningún daño directo, indirecto, incidental o consecuente que resulte del uso o la imposibilidad de uso de este sitio o de sus servicios.</p>

      <h3>4. Modificaciones</h3>
      <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. El uso continuado del sitio después de dichos cambios constituye su aceptación de los nuevos términos.</p>
    `
  }
};

export const plansContent: import('./types').SubscriptionPlan[] = [
  {
    name: "Lite",
    price: "50.000",
    color: "emerald", // Using emerald/teal for the green
    features: [
      { text: "Asesoría en Redes Sociales" },
      { text: "Creación de contenido y guiones (2 guiones semanales)" },
      { text: "Directrices para publicación y feedback basado en estadísticas" }
    ]
  },
  {
    name: "Standard",
    price: "90.000",
    color: "purple",
    features: [
      { text: "Asesoría en Redes Sociales" },
      { text: "Creación de contenido y guiones (2 guiones semanales)" },
      { text: "Directrices para publicación y feedback basado en estadísticas" },
      { text: "Notas de Prensa", isHighlighted: true },
      { text: "Creación One Sheet", isHighlighted: true },
      { text: "Creación y actualización de dossier", isHighlighted: true },
      { text: "Apoyo para lanzamientos y planes de trabajo", isHighlighted: true },
      { text: "1 Reunión semanal de avances", isHighlighted: true },
      { text: "Creación de Spotify Canvas para lanzamientos", isHighlighted: true }
    ]
  },
  {
    name: "Premium",
    price: "150.000",
    color: "orange",
    features: [
      { text: "Asesoría en Redes Sociales" },
      { text: "Creación de contenido y guiones (2 guiones semanales)" },
      { text: "Directrices para publicación y feedback basado en estadísticas" },
      { text: "Notas de Prensa" },
      { text: "Creación One Sheet" },
      { text: "Creación y actualización de dossier" },
      { text: "Apoyo para lanzamientos y planes de trabajo" },
      { text: "1 Reunión semanal de avances" },
      { text: "Creación de Spotify Canvas para lanzamientos" },
      { text: "Servicios de representación y management", isHighlighted: true },
      { text: "Subir contenido a las plataformas de streaming musical con distribuidores", isHighlighted: true },
      { text: "Revisión de estadísticas mensuales y planes de acción de mejora", isHighlighted: true }
    ]
  }
];
