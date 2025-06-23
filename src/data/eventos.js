// En un proyecto real, estas imágenes deben existir en tu carpeta assets.
// Para este ejemplo, mantendré placeholders. Reemplázalos con tus fotos.
const romeoSantosCover = '/assets/artistas/escenarios/romeo5.jpeg';
const yatraCover = '/assets/artistas/escenarios/yatra/yatra2.png';
const maderoCover = '/assets/artistas/escenarios/jose/jose.png';

export const eventosDB = [
  {
    id: 'romeo-santos-estadio-nacional',
    artista: 'Romeo Santos',
    coverImage: romeoSantosCover,
    lugar: {
        es: 'Estadio Nacional, Lima',
        en: 'National Stadium, Lima'
    },
    descripcion: {
        es: 'Una producción monumental para el Rey de la Bachata, marcando un récord de asistencia y un despliegue técnico sin precedentes en el país.',
        en: 'A monumental production for the King of Bachata, setting an attendance record and an unprecedented technical deployment in the country.'
    },
    implementacion: {
      audio: {
          es: 'Sistema principal Line Array d&b audiotechnik GSL Series, consolas de mezcla DiGiCo Quantum 7, y más de 50 canales de microfonía Shure Axient Digital.',
          en: 'd&b audiotechnik GSL Series Line Array main system, DiGiCo Quantum 7 mixing consoles, and over 50 channels of Shure Axient Digital microphones.'
      },
      iluminacion: {
        es: 'Más de 300 cabezas móviles de las marcas Robe y Martin, incluyendo MegaPointes y MAC Vipers. Controlado con consolas MA Lighting grandMA3.',
        en: 'Over 300 moving heads from Robe and Martin, including MegaPointes and MAC Vipers. Controlled with MA Lighting grandMA3 consoles.'
      },
      video: {
        es: '350m² de pantalla LED de 3.9mm de pitch, procesadores de video Barco E2 y un sistema de cámaras 4K para transmisión en vivo.',
        en: '350m² of 3.9mm pitch LED screen, Barco E2 video processors, and a 4K camera system for live broadcasting.'
      },
      logistica: {
        es: 'Se movilizaron 12 camiones de equipo. El montaje tomó 5 días con un equipo de 80 técnicos especializados.',
        en: '12 trucks of equipment were mobilized. The setup took 5 days with a team of 80 specialized technicians.'
      }
    },
    galeria: [
        '/assets/artistas/escenarios/romeo1.jpg',
        '/assets/artistas/escenarios/romeo2.png',
        '/assets/artistas/escenarios/romeo3.jpg',
        '/assets/artistas/escenarios/romeo4.webp',
    ]
  },
  {
    id: 'sebastian-yatra-dharma-tour',
    artista: 'Sebastián Yatra',
    coverImage: yatraCover,
    lugar: {
      es: "Arena Perú, Lima",
      en: "Arena Perú, Lima"
    },
    descripcion: {
      es: "Diseño e implementación de un sistema audiovisual inmersivo para la gira 'Dharma', enfocado en la interacción del artista con elementos visuales dinámicos.",
      en: "Design and implementation of an immersive audiovisual system for the 'Dharma' tour, focused on the artist's interaction with dynamic visual elements."
    },
    implementacion: {
      audio: {
        es: "Sistema L-Acoustics K2 con subs KS28. Consola Avid S6L para FOH y monitores.",
        en: "L-Acoustics K2 system with KS28 subs. Avid S6L console for FOH and monitors."
      },
      iluminacion: {
        es: "Matriz de Clay Paky Scenius Unico y A.leda B-EYE K20 para efectos aéreos y de wash.",
        en: "Matrix of Clay Paky Scenius Unico and A.leda B-EYE K20 for aerial and wash effects."
      },
      video: {
        es: "Pantalla LED central curva de 150m² y tótems laterales interactivos.",
        en: "150m² central curved LED screen and interactive side totems."
      },
      logistica: {
        es: "Coordinación de 8 camiones y un equipo de 50 personas para montaje y operación.",
        en: "Coordination of 8 trucks and a team of 50 people for setup and operation."
      }
    },
    galeria: ['/assets/artistas/escenarios/yatra/yatra1.png', '/assets/gallery/yatra2.jpg']
  },
  {
    id: 'jose-madero-gira-final',
    artista: 'José Madero',
    coverImage: maderoCover,
    lugar: {
      es: 'Anfiteatro del Parque de la Exposición',
      en: 'Anfiteatro del Parque de la Exposición'
    },
    descripcion: {
      es: 'Producción técnica integral para un show íntimo pero potente, cuidando la fidelidad del sonido y un diseño de luces que acompañe la narrativa del artista.',
      en: 'Comprehensive technical production for an intimate yet powerful show, ensuring sound fidelity and a lighting design that complements the artist\'s narrative.'
    },
    implementacion: {
      audio: {
        es: 'Sistema Meyer Sound LEOPARD, consola Allen & Heath dLive.',
        en: 'Meyer Sound LEOPARD system, Allen & Heath dLive console.'
      },
      iluminacion: {
        es: 'Diseño enfocado en gobos y texturas con equipos de CHAUVET Professional.',
        en: 'Design focused on gobos and textures with CHAUVET Professional fixtures.'
      },
      video: {
        es: 'Proyección de fondo de alta luminosidad con contenido visual personalizado.',
        en: 'High-luminosity background projection with custom visual content.'
      },
      logistica: {
        es: 'Equipo optimizado para un montaje rápido y eficiente en un venue concurrido.',
        en: 'Optimized team for fast and efficient setup in a busy venue.'
      }
    },
    galeria: ['/assets/artistas/escenarios/jose/jose2.png',
              '/assets/artistas/escenarios/jose/jose3.png']
  }
];