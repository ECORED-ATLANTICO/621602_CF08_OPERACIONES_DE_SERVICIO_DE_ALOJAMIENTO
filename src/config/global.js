export default {
  global: {
    Name:
      'Sistema turístico: atractivo, facilidades, accesibilidad y Servicios',
    Description:
      'La información turística es una de las habilidades más importantes a desarrollar para el servicio de recepción hotelera. Los visitantes de los hoteles identifican a los recepcionistas del hotel como el personal capacitado y conocedor sobre cualquier información acerca del accionar de la cadena cultural y turística y/o de la actividad local. Por este motivo, esperan calidad y veracidad en la información que reciben y llevar a feliz término su actividad de ocio o trabajo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Turismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipología',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Sistema turístico',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Producto turístico',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Cadena de valor',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Atractivo turístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Clasificación de los atractivos turísticos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Bienes y recursos turísticos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Zona turística',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Información turística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características del informador turístico',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Atención y orientación al visitante',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Diferencia entre promoción e información turística',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Fuentes de información turística',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Ubicación espacial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Puntos cardinales',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Técnicas de ubicación y orientación',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Puntos de referenciación en el destino',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Mapas turísticos',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Brindar información asertivamente',
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
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Atractivo turístico',
      significado:
        'Elemento natural, cultural o construido que motiva el desplazamiento de visitantes hacia un destino determinado y constituye la base del producto turístico.',
    },
    {
      termino: 'Cadena de valor turística',
      significado:
        'Conjunto de actividades interrelacionadas que generan valor en la prestación de servicios turísticos, desde la producción hasta la experiencia del visitante.',
    },
    {
      termino: 'Comunicación asertiva',
      significado:
        'Capacidad de transmitir información de manera clara, precisa y respetuosa, facilitando el flujo de ideas entre las partes sin generar malentendidos ni conflictos.',
    },
    {
      termino: 'Destino turístico',
      significado:
        'Espacio geográfico con características naturales, culturales o artificiales que atrae visitantes y cuenta con infraestructura y servicios para su atención.',
    },
    {
      termino: 'Folclor',
      significado:
        'Conjunto de tradiciones, costumbres, expresiones artísticas y manifestaciones culturales propias de una comunidad, transmitidas de generación en generación.',
    },
    {
      termino: 'GPS (sistema de posicionamiento global)',
      significado:
        'Sistema de navegación por satélite que permite determinar la ubicación geográfica exacta de un objeto o persona en cualquier punto de la superficie terrestre.',
    },
    {
      termino: 'Informador turístico',
      significado:
        'Persona que, en el marco de la prestación de un servicio turístico o de alojamiento, orienta y asesora a los visitantes sobre atractivos, servicios y actividades del destino.',
    },
    {
      termino: 'Mapa turístico',
      significado:
        'Representación cartográfica impresa o digital que destaca los sitios de interés, puntos de referencia y servicios disponibles en un destino turístico.',
    },
    {
      termino: 'Orientación espacial',
      significado:
        'Habilidad que permite determinar la posición del propio cuerpo en relación con el espacio circundante, utilizando referencias naturales, instrumentos o tecnología.',
    },
    {
      termino: 'Plano cartesiano',
      significado:
        'Sistema de coordenadas formado por dos rectas numéricas perpendiculares —una horizontal y una vertical— que se intersectan en un punto llamado origen, utilizado para describir la posición de un punto en el plano.',
    },
    {
      termino: 'Planta turística',
      significado:
        'Conjunto de instalaciones, equipos y servicios que hacen posible la permanencia del turista en el destino: alojamiento, alimentación, transporte y entretenimiento.',
    },
    {
      termino: 'Producto turístico',
      significado:
        'Combinación de atractivos, planta turística y accesibilidad que se ofrece al visitante como una experiencia integral en un destino determinado.',
    },
    {
      termino: 'Puntos cardinales',
      significado:
        'Las cuatro direcciones principales —norte, sur, oriente y occidente— que sirven de referencia para la orientación y ubicación geográfica sobre la superficie terrestre.',
    },
    {
      termino: 'Sistema turístico',
      significado:
        'Estructura dinámica formada por la demanda turística, la oferta, los atractivos, la planta turística, la infraestructura, la superestructura y la cadena de valor, que interactúan para hacer posible la actividad turística.',
    },
    {
      termino: 'Turismo',
      significado:
        'Fenómeno social, cultural y económico que implica el desplazamiento de personas fuera de su entorno habitual por motivos de ocio, negocio, salud u otros, durante un período inferior a un año.',
    },
  ],
  referencias: [
    {
      referencia:
        'Boullón, R. C. (2006). <em>Planificación del espacio turístico</em>. Trillas.',
      link: '',
    },
    {
      referencia:
        'Cobo, C. (2013). Orientación geográfica: la geoperspectiva integral. <em>Geograficando</em>, <em>9</em>(9).',
      link: '',
    },
    {
      referencia:
        'Comisión Europea, Fondo Monetario Internacional, Organización de Cooperación y Desarrollo Económicos, Naciones Unidas y Banco Mundial. (2008). <em>Sistema de cuentas nacionales 2008</em>. Naciones Unidas.',
      link: '',
    },
    {
      referencia:
        'Coque, M. y Arroyo, E. (2017). <em>Información y atención al visitante</em>. Paraninfo.',
      link: '',
    },
    {
      referencia:
        'FONTUR. (s. f.). Glosario. <em>Fondo Nacional de Turismo</em>.',
      link: '',
    },
    {
      referencia:
        'García Silberman, A. (1970). Clasificación de los recursos turísticos. <em>Investigaciones Geográficas</em>, <em>1</em>(3).',
      link: '',
    },
    {
      referencia:
        'Luna, N. (s. f.). <em>Comunicación asertiva con turistas</em>. SENA.',
      link: '',
    },
    {
      referencia:
        'Martín, B. (2013, 24 de octubre). Cadena de valor en turismo [Entrada de blog]. <em>Turismo y sostenibilidad</em>.',
      link: '',
    },
    {
      referencia:
        'ONU Turismo. (s. f.). <em>Glosario de términos de turismo</em>. ONU Turismo. (anteriormente Organización Mundial del Turismo, OMT)',
      link: '',
    },
    {
      referencia:
        'Ruano, C. (2012). <em>Promoción y comercialización de productos y servicios turísticos locales</em>. Alianza Editorial.',
      link: '',
    },
    {
      referencia:
        'SENA. (s. f.). <em>El turismo rural en Colombia</em> [Video]. YouTube.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturistico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de la línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
