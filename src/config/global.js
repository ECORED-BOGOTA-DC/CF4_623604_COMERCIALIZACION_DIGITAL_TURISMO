export default {
  global: {
    componenteFormativo:
      'Bases del plan de mercadeo digital - Análisis situacional',
    descripcionCurso:
      'Este componente formativo pretende ilustrar al aprendiz en el uso y aplicación de diferentes metodologías contrastadas de planificación estratégica, que junto al conocimiento de nuevos canales/tecnologías le brindará las bases para crear planes de mercadeo que permitan aprovechar al máximo las oportunidades derivadas de la innovación y la creatividad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    fondoBannerInterno: require('@/assets/curso/portada/fondo-banner-interno.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/banner/4.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/banner/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/banner/5.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Análisis situacional del microentorno',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Establecimiento de objetivos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Establecer objetivos SMART (paso a paso)',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Las estrategias, cómo se establecen, definición y práctica',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Producto o servicio',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Las cinco fuerzas',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Cadena de valor',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Análisis situacional macroentorno',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Método PESTEL',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Análisis estratégico DOFA',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Análisis del negocio - Modelo Canvas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Competencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: '¿Quiénes son mis competidores?',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Niveles de análisis de la competencia',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: '¿Cómo llevar a cabo el análisis de la competencia?',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Competencia imperfecta',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo:
              '<em> Benchmarking</em>, concepto, características y herramientas',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'La segmentación de mercados',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Canales de distribución',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/623604_CF04_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Modelo Canvas',
      referencia:
        'Catalá, J. (s.f.). Modelo Canvas explicado paso a paso con ejemplo',
      tipo: 'Video YouTube',
      link: 'https://www.youtube.com/watch?v=7B8bGB0CZVI',
    },
    {
      tema: '<em>Benchmarking</em>',
      referencia: '<em>Str. (s.f.). STR Benchmarking. Str.</em> ',
      tipo: 'Página web',
      link: 'https://str.com/es',
    },
    {
      tema: '<em>Benchmarking</em>',
      referencia: '<em>Str. (s.f.). Introducing dSTAR</em> ',
      tipo: 'Video YouTube',
      link: 'https://www.youtube.com/watch?v=NfUUQ5dir6c',
    },
  ],
  glosario: [
    {
      termino: 'ARI - Average Rate Index',
      significado:
        'Es otro índice en la industria hotelera, describe cómo está la tarifa promedio frente a la competencia.',
    },
    {
      termino: '<em>Branding</em>',
      significado:
        'Es el término que se refiere a las acciones de construcción y fortalecimiento de una marca.',
    },
    {
      termino: '<em>Buyer persona</em>',
      significado:
        'Es la forma como en la industria del <em>marketing</em> digital se denomina al público objetivo, el perfil de esta persona será la representación del cliente que la empresa desea y es a este a quien dirige su estrategia de contenido',
    },
    {
      termino: 'Contenidos',
      significado:
        'Son los textos, fotografías, videos, ilustraciones, sonidos, diseños y la combinación de ellos. En general es lo que el consumidor digital ve y escucha en publicaciones digitales. El contenido es de suma importancia en medios digitales y sobre todo en el medio turístico, no en vano se afirma que el contenido es el rey. De hecho, asociado a él, hay una práctica denominada <em>“marketing</em> de contenidos” que se enfoca en atraer <em>leads</em> por medio de contenido especializado.',
    },
    {
      termino: '<em>Conversión</em>',
      significado:
        'Este término hace referencia a lograr transformar los prospectos <em>(leads)</em> en ventas reales (clientes). Es el final de la estrategia digital enfocada en ingresos.',
    },
    {
      termino: '<em>Copy</em>',
      significado:
        'En mercadeo y publicidad el <em>copy</em> hace referencia al texto de los anuncios, es decir, las frases o palabras que en conexión con la imagen o video logran captar la atención y motivar al público para que se enganche con el negocio.',
    },
    {
      termino: '<em>Engagement</em>',
      significado:
        'En su traducción más pura este término significa compromiso, en mercadeo se utiliza este término para describir la aptitud que tiene una marca para generar compromiso con los clientes y crear una relación sana y estable.',
    },
    {
      termino: '<em>Inbound</em>',
      significado:
        'Este término hace referencia a las estrategias dirigidas a captar nuevos prospectos y convertirlos en clientes, a través de lo que se conoce como un embudo de ventas.',
    },
    {
      termino: 'KPI-s',
      significado:
        'Es la sigla de <em>(Key performance indicator)</em>, indicadores clave de desempeño. Estos se convierten en puntos de referencia para medir la efectividad de una estrategia digital',
    },
    {
      termino: '<em>Lead</em>',
      significado:
        'Es un término normalizado en la industria digital para referirse a los usuarios que ingresan a su sitio web y se registran en él. Estos se consideran clientes potenciales toda vez que brindan a la empresa sus datos de contacto de forma voluntaria, ya sea para recibir ofertas o concretar una futura compra u otros.',
    },
    {
      termino: 'MPI - Market Penetration Index',
      significado:
        'Es un índice de referencia en la industria hotelera y detalla la penetración en el mercado comparada con un set de competidores.',
    },
    {
      termino: 'RevPAR',
      significado:
        'Es el acrónimo de Revenue per Available Room. El RevPar es el indicador más utilizado en la industria hotelera, porque brinda de manera simple y exacta un informe de situación y comparación con el mercado y con el set competitivo.',
    },
    {
      termino: 'RGI  - Revenue Generation Index',
      significado:
        'Es también un índice de referencia en hotelería y habla de la generación de ingresos respecto al set competitivo.',
    },
    {
      termino: 'SEO & SEM',
      significado:
        'A nivel general son las formas cómo se posiciona un sitio web en las búsquedas para ser hallados por los clientes. El SEM se basa en anuncios pagos y el SEO en optimización de búsquedas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cooper, A. (2004). <em>The inmates are running the Asylum</em>. Indianapolis Sams Publishing.',
    },
    {
      referencia:
        'Jiménez, L. (2021). <em>Cómo definir objetivos de marketing y cumplirlos</em>.',
      link: 'https://www.luciajimenezvida.es/definir-objetivos-de-marketing/',
    },
    {
      referencia:
        'Mochón, F. (2004). <em>Economía y turismo: prácticas</em>. McGraw-Hill España.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/50066?page=75',
    },
    {
      referencia:
        'Osterwalder, A. & Pigneur, Y. (2011). <em>Generación de modelos de Negocio</em>. Deusto.',
    },
    {
      referencia:
        'Peñalver, P. (2020). <em>Cómo crear mi buyer persona y qué herramientas necesito para hacerlo</em>.',
      link:
        'https://www.wearemarketing.com/es/blog/como-crear-mi-buyer-persona-y-que-herramientas-necesito-para-hacerlo.html',
    },
    {
      referencia:
        'Porter, M. & Bueno, E. (2013). <em>Técnicas para el análisis de la empresa y sus competidores</em>. Ediciones Pirámide.',
    },
    {
      referencia:
        'PostgradoUTP. (2021). <em>Estrategias competitivas: ¿Cómo funcionan?</em> Universidad tecnológica del Perú. ',
      link:
        'https://www.postgradoutp.edu.pe/blog/a/estrategias-competitivas-como-funcionan-y-como-se-adaptan-a-los-tiempos-de-cambio/#:~:text=Las%20estrategias%20competitivas%20son%20las,terreno%20frente%20a%20la%20competencia',
    },
    {
      referencia:
        'Rockcontent. (2017). <em>Productos vs. servicios. ¿Cómo diferenciarlos?</em>',
      link: 'https://rockcontent.com/es/blog/producto-o-servicio/',
    },
    {
      referencia:
        'RD Station. (2021). <em>Qué es un buyer persona: pasos, ejemplos y generador online</em>.',
      link: 'https://www.rdstation.com/es/blog/buyer-persona/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable equipo de desarrollo curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Harbey Castelblanco',
          cargo: 'Experto temático',
          centro: 'Regional Atlántico - Centro Nacional Colombo Alemán',
        },
        {
          nombre: 'Fabio Alberto Ramírez Ayala',
          cargo: 'Experto temático',
          centro: 'Regional Tolima - Centro Agropecuario la Granja',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Experta temática',
          centro: 'Regional Tolima - Centro Agropecuario la Granja',
        },
        {
          nombre: 'Luisa Fernanda Posada Hincapié',
          cargo: 'Experta temática',
          centro: 'Regional Quindío - Centro de Comercio, Industria y Turismo',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Diseñador instruccional',
          centro:
            'Regional Norte de Santander - Centro de la industria, la empresa y los servicios',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesor metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesoría metodológica y pedagógica - 2023',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Soporte organizacional',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseño web',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Pedro Nel Calao Zabala',
          cargo: 'Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Validación audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Estefani Daniela Gallo Cortés',
          cargo: 'Ilustración',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Sandra Milena Triana Pinto',
          cargo: 'Desarrollo front-end',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'María Eugenia Mejia López',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseño web-2023',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollo Fullstack-2023',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo:
            'Validación de recursos educativos digitales y vinculación LMS',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
