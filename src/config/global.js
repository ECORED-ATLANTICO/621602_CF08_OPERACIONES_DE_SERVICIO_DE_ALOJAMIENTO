export default {
  global: {
    Name:
      'Sistema turístico: atractivo, facilidades, accesibilidad y servicios',
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
        download: 'downloads/621602_CF08_DU.zip',
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
      link:
        'https://www.entornoturistico.com/wp-content/uploads/2017/02/Planificaci%C3%B3n-del-espacio-tur%C3%ADstico-de-Roberto-C.-Boullon-PDF.pdf ',
    },
    {
      referencia:
        'Cobo, C. (2013). Orientación geográfica: la geoperspectiva integral. <em>Geograficando</em>, <em>9</em>(9).',
      link:
        'https://www.memoria.fahce.unlp.edu.ar/art_revistas/pr.6061/pr.6061.pdf ',
    },
    {
      referencia:
        'Comisión Europea, Fondo Monetario Internacional, Organización de Cooperación y Desarrollo Económicos, Naciones Unidas y Banco Mundial. (2025). <em>Sistema de cuentas nacionales 2025</em>. Naciones Unidas. ',
      link: 'https://unstats.un.org/unsd/nationalaccount/sna2025.asp',
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
      link:
        'https://www.investigacionesgeograficas.unam.mx/index.php/rig/article/download/58846/51834/169721',
    },
    {
      referencia:
        'Luna Pérez, N. del C. (s. f.). <em>Comunicación asertiva con turistas</em> [Material de formación]. Servicio Nacional de Aprendizaje (SENA). Formación en Ambientes Virtuales de Aprendizaje (FAVA).',
      link: '',
    },
    {
      referencia:
        'Martín, B. (2013, 24 de octubre). Cadena de valor en turismo [Entrada de blog]. <em>Turismo y sostenibilidad</em>.',
      link:
        'https://turismoysostenibilidad.wordpress.com/2013/10/24/cadena-de-valor-en-turismo/ ',
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
      link: 'https://www.youtube.com/watch?v=YIpnqZRTYZU',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
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
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Harbey Enrique Castelblanco',
          cargo: 'Experto temático',
          centro: 'Centro Nacional Colombo Alemán - Regional Atlántico',
        },
        {
          nombre: 'Leydy Jhuliana Jaramillo Mejía',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Uriel Darío González Montoya',
          cargo: 'Acompañamiento pedagógico',
          centro: 'Centro Agropecuario La Granja - Regional Tolima',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora metodológica y pedagógica',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Angélica Varón Quintero',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Carlos Tapias Rueda',
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy Maria Ruiz Torres',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ángela María Maldonado Jaime',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Villamizar Lizcano',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andres Mauricio Santaella Ochoa',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Rafael Augusto Mantilla López',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
