<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Turismo

    .row.g-0.rounded-4.bg-acento-botones-a5.mb-5.justify-content-center
      .col-sm-6.col-lg-3.d-flex.align-items-center
        figure.m-0
          img(src="@/assets/curso/tema1/1.png", alt="alt text")
      .col-lg-9.p-4.p-xl-0
        .d-flex.align-items-center.h-100
          div.px-xl-4
            p.mb-0 ONU Turismo (anteriormente denominada Organización Mundial del Turismo, OMT) define el turismo como: 
            p.mb-0 Fenómeno social, cultural y económico que supone el desplazamiento de personas a países o lugares fuera de su entorno habitual por motivos personales, profesionales o de negocios. Esas personas se denominan viajeros (que pueden ser o bien turistas o excursionistas; residentes o no residentes) y el turismo abarca sus actividades, algunas de las cuales suponen un gasto turístico. (ONU Turismo, s. f.).
    
    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-lg-8.mb-4.mb-lg-0
        p Esta definición evidencia cada uno de los componentes que se articulan alrededor del turismo, las actividades y los principales protagonistas en su desarrollo.
        p Existe un buen número de definiciones respecto al turismo y sus componentes, las cuales han venido evolucionando a través del tiempo. Es de suma importancia manejar un lenguaje técnico y planificado que permita transmitir la información de la forma como la espera el cliente. Así lo manifiesta Roberto Boullón en su obra #[em Planificación del espacio turístico]:
        .bloque-texto-e.bg-acento-contenido-a5.py-2.px-4.rounded-4
          .bloque-texto-e__texto
            i.fas.fa-quote-left
            p La necesidad de un lenguaje técnico unificado es aún mucho mayor en los sistemas de capacitación y en la enseñanza escolarizada que operan en el sector, que para otros segmentos participantes en su función comercial
            i.fas.fa-quote-right
          .row.align-items-end
            .col
              .bloque-texto-e__autor 
                p.mb-0 (Boullón, 2006).
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/2.png", alt="")
    
    .p-4.rounded-4.bg-secundario-s5.mb-4
      p.mb-0 El turismo se considera una de las actividades más importantes a nivel mundial. Y lo es, no solo por la generación de riqueza a su alrededor (ha sido llamado el “nuevo petróleo”), sino también por sus componentes:

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5.z-2
      .col-12.col-lg-6.d-none.d-xl-block
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema1/3.png", alt="")
      .col-md-6.col-lg-5.col-xl-3.mb-3.mb-lg-0
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/tema1/4.svg', alt='')
          .tarjeta.bg-acento-botones-a5
            .p-4.text-center
              h4 Socio cultural
              p.mb-0 Intercambio de experiencias.
      .col-md-6.col-lg-5.col-xl-3.mb-3.mb-lg-0
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/tema1/5.svg', alt='')
          .tarjeta.bg-acento-botones-a5
            .p-4.text-center
              h4 Generador de empleo
              p.mb-0 Es uno de los sectores de la economía que mayor número de empleos aporta.

    .p-4.rounded-4.bg-acento-contenido-a5
      p.mb-0.text-center Estos aspectos hacen que el turismo sea un dinamizador importante de la economía nacional.

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Tipología

    p.mb-4.mb-lg-5 El turismo es una actividad diversa y estrechamente relacionada con el entorno y la motivación del viaje. En esta relación del turismo con entorno/motivación/duración, se crean los diferentes tipos de turismo que cada día tienden a ser más dinámicos y a crear nuevos tipos de experiencias. En la siguiente infografía se reconocen algunos tipos de turismo.

    .row.justify-content-center.align-items-center.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema1/6.png", alt="")
      .col-lg-8
        SlyderF(columnas="col-xl-6")
          .tarjeta.bg-img.bg-img--3.p-4.py-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema1/7.svg' alt='')
            h4.text-center Turismo cultural
            p.text-center.mb-4 Gastronómico, enoturismo, educativo, científico, musical, literario, cinematográfico, industrial, arquitectónico, arqueológico, creativo, de museos, político.
          .tarjeta.bg-img.bg-img--3.p-4.py-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema1/8.svg' alt='')
            h4.text-center Turismo de naturaleza 
            p.text-center.mb-4 Ecoturismo, rural, de aventura, agroturismo, de nieve, aviturismo (ornitológico), de montaña, astroturismo, de animales, camping, geoturismo.
          .tarjeta.bg-img.bg-img--3.p-4.py-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema1/9.svg' alt='')
            h4.text-center Turismo temático
            p.text-center.mb-4 Espacial, ufológico, atómico, rojo, de caza, urbano, de lujo, de carretera, funerario (necroturismo), de cruceros, pop, de moda, genealógico, #[em set-jetting].
          .tarjeta.bg-img.bg-img--3.p-4.py-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema1/10.svg' alt='')
            h4.text-center Turismo de salud
            p.text-center.mb-4 De bienestar, médico, estético, de salud reproductiva, de nacimientos, dental.
          .tarjeta.bg-img.bg-img--3.p-4.py-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema1/38.svg' alt='')
            h4.text-center Turismo de negocios
            p.text-center.mb-4 De reuniones, de eventos, de congresos, ferial.
          .tarjeta.bg-img.bg-img--3.p-4.py-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema1/11.svg' alt='')
            h4.text-center Turismo de experiencias
            p.text-center.mb-4 De compras, negro, #[em hipster], de juego, militarista.
          .tarjeta.bg-img.bg-img--3.p-4.py-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema1/12.svg' alt='')
            h4.text-center Turismo de fe
            p.text-center.mb-4 Espiritual, religioso, esotérico, #[em halal].
          .tarjeta.bg-img.bg-img--3.p-4.py-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema1/13.svg' alt='')
            h4.text-center Turismo social
            p.text-center.mb-4 Accesible, comunitario, solidario, voluntariado.
          .tarjeta.bg-img.bg-img--3.p-4.py-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/tema1/14.svg' alt='')
            h4.text-center Otros tipos
            p.text-center.mb-4 Sostenible, de sol y playa, deportivo, de guerra, pobrista, de solteros, de tercera edad, de ríos, de beneficios, de jardines, lunas de miel, LGBTQI+, viajes virtuales y 3D.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Características

    .row.justify-content-center.align-items-stretch.z-2.mb-4
      .col-lg-9.mb-4.mb-lg-0
        .bg-img.bg-img--8.p-4.rounded-4.h-100.d-flex.justify-content-center.flex-column
          p.pe-lg-5 El turismo, como se ha explicado anteriormente, es una actividad en la cual se involucran diferentes actores, y se denota por unas características bien definidas, la principal es:
          p.mb-0.pe-lg-5 Característica principal
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/15.png", alt="")

    .bloque-texto-e.bg-acento-contenido-a5.py-2.px-4.rounded-4.mb-4
      .bloque-texto-e__texto.text-center
        i.fas.fa-quote-left
        p El traslado temporal de un individuo a una localidad o país diferente al de residencia habitual
        i.fas.fa-quote-right

    .p-4.rounded-4.bg-secundario-s10.mb-4
      p.mb-0.text-center Adicionalmente se pueden mencionar otras características transversales a la actividad turística, como son:

    .row.justify-content-center.align-items-center.z-2
      .col-sm-10.col-lg-6
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema1/16.png", alt="")
      .col-lg-6
        SlyderA(tipo="b").bg-acento-botones-a5.p-4.tarjeta.h-100
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 Intangibilidad
              p.mb-0 Es la característica que distingue a los productos de los servicios y supone tanto un elemento palpable como mental; conlleva a que el consumidor tenga un elevado grado de incertidumbre durante el proceso de compra.
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 Viabilidad 
              p.mb-0 Es ofrecida y prestada por personas distintas y en circunstancias diferentes y es difícil evaluar la calidad antes de la compra, ya que las percepciones varían según las personas.
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 Caducidad
              p.mb-0 Son susceptibles de perecer y no se pueden almacenar.
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 Temporalidad
              p.mb-0 La compra de servicios solo da el derecho de ser usados en un tiempo y lugar determinado.
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 Inseparabilidad
              p.mb-0 La creación y realización del servicio puede ocurrir al mismo tiempo que su consumo (#[em in situ]).
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 No devolución
              p.mb-0 Los servicios una vez utilizados no se pueden devolver.
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 Independencia
              p.mb-0 El número de empresas que intervienen en la prestación del servicio hacen que la satisfacción del turista no dependa de una sola empresa sino del conjunto de prestadores.
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 Estacionalidad
              p.mb-0 Hace alusión a la concentración de la demanda turística en ciertos periodos del año. Ejemplo: temporadas, vacaciones, fines de semana.
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 Intransferibilidad
              p.mb-0 Una vez recibido no se puede ceder a otra persona el derecho sobre un servicio ya prestado.
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-11
              h4 Servucción
              p.mb-0 Significa el proceso de elaboración de un servicio, la organización de los elementos físicos y humanos en la relación cliente–empresas necesaria para la prestación de un servicio, cuyas características esenciales y niveles de calidad han sido determinadas. (Ruano, 2012).
              
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Sistema turístico

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema1/17.png", alt="")
      .col-lg-8
        .p-4.bg-acento-contenido-a5.rounded-4.h-100.d-flex.align-items-center
          p.mb-0 Para la prestación de servicios turísticos, es necesario conocer el funcionamiento del sistema turístico, que se define como el conjunto de elementos interrelacionados entre sí que evolucionan de forma dinámica para configurar la naturaleza de la actividad turística, y está conformado por cinco subsistemas:

    TabsB.color-primario.mb-4.mb-lg-5
      .py-4.py-md-5(titulo="Estructura turística" :icono="require('@/assets/curso/tema1/18.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Estructura turística
            p.mb-0 Reservas con garantía, denominada también planta turística, hace posible la permanencia del turista o visitante en el lugar de destino. Está conformada por el conjunto de atractivos turísticos, instalaciones y equipamiento encargados para la prestación de servicios al turista, ofreciendo comodidad en el destino visitado, para satisfacer las necesidades y superar sus expectativas en términos de calidad (Boullón, 2006).
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema1/23.png', alt='')
      .py-4.py-md-5(titulo="Infraestructura turística" :icono="require('@/assets/curso/tema1/19.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Infraestructura turística
            p.mb-0 Es el conjunto de bienes y servicios con los que cuenta un destino turístico para contribuir a la satisfacción de las necesidades y expectativas de los turistas, facilitando la accesibilidad y desplazamiento al lugar de destino, como vías de comunicación, terminales de transporte (aéreo, terrestre, ferroviario, marítimo, fluvial y lacustre), sistemas de comunicación (satelital, telefonía, acceso a la red), sistema de sanidad (acueducto, alcantarillado, recolección de basuras, primeros auxilios y servicios hospitalarios) y servicios de energía eléctrica (red eléctrica, alumbrado público, domiciliario).
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema1/24.png', alt='')
      .py-4.py-md-5(titulo="Superestructura turística" :icono="require('@/assets/curso/tema1/20.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Superestructura turística
            p.mb-0 Está conformada por todos los organismos oficiales, privados y mixtos que se encargan de la regulación del sistema turístico (normatividad y legislación turística), con el fin de lograr la optimización, facilitación, producción y venta de los servicios que integran la actividad turística: Ministerio de Comercio, Industria y Turismo; Dirección Nacional de Turismo; ProColombia; Fondo Nacional de Turismo (FONTUR); Asociación Colombiana de Agencias de Viajes y Turismo (ANATO); Asociación Colombiana de la Industria Gastronómica (ACODRES); clústeres de turismo (FONTUR, s. f.).
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema1/25.png', alt='')
      .py-4.py-md-5(titulo="Oferta turística" :icono="require('@/assets/curso/tema1/21.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Oferta turística 
            p.mb-0 Es el conjunto de productos y servicios asociados a un determinado espacio geográfico y sociocultural, que permite facilitar y propiciar el aprovechamiento de los atractivos turísticos de ese lugar y cuyos oferentes pueden vender en el mercado a un precio establecido y en un periodo de tiempo determinado, para ser usado o consumido por los turistas.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema1/26.png', alt='')
      .py-4.py-md-5(titulo="Demanda turística" :icono="require('@/assets/curso/tema1/22.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            h4 Demanda turística 
            p.mb-0 Se define como el conjunto de turistas que, de forma individual o colectiva, están motivados por una serie de productos o servicios turísticos con el objetivo de cubrir sus necesidades; opera en el contexto de un mercado en el que intervienen diversos prestadores de servicios turísticos que ponen a disposición del turista los servicios y productos que requieren para satisfacer determinadas necesidades (viajes, ocio, vacaciones, esparcimiento, tiempo libre). Desde el punto de vista económico, la oferta turística está dada por bienes o servicios que son comercializados como producto turístico.
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema1/27.png', alt='')

    p.mb-4.mb-lg-5 A continuación, se detalla cómo se encuentra organizado el sistema turístico.
    .row.mb-4.justify-content-center.align-items-stretch
      .col-sm-6.col-lg-4.mb-4
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up").h-100
          .tarjeta-avatar-b__img.align-items-baseline.h-100
            img(src='@/assets/curso/tema1/28.svg' alt='')
          .tarjeta.bg-secundario-s5.h-100
            .p-4.p-lg-3.p-xl-4
              h4 Estructura turística
              p.mb-0 Atractivos.
              p.mb-0 Instalaciones.
              p.mb-0 Equipamiento.
      .col-sm-6.col-lg-4.mb-4
        .tarjeta-avatar-b.align-items-center(data-aos="fade-down").h-100
          .tarjeta-avatar-b__img.align-items-baseline.h-100
            img(src='@/assets/curso/tema1/29.svg' alt='')
          .tarjeta.bg-secundario-s5.h-100
            .p-4.p-lg-3.p-xl-4
              h4 Infraestructura turística
              p.mb-0 Vías.
              p.mb-0 Sistemas Comunicación.
              p.mb-0 Sistema Sanitario.
              p.mb-0 Terminales de transporte.
      .col-sm-6.col-lg-4.mb-4
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up").h-100
          .tarjeta-avatar-b__img.align-items-baseline.h-100
            img(src='@/assets/curso/tema1/30.svg' alt='')
          .tarjeta.bg-secundario-s5.h-100
            .p-4.p-lg-3.p-xl-4
              h4 Superestructura turística
              p.mb-0 Organismos oficiales, privados y mixtos que se encargan de la regulación del Sistema Turístico.
      .col-sm-6.col-lg-4.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up").h-100
          .tarjeta-avatar-b__img.align-items-baseline.h-100
            img(src='@/assets/curso/tema1/31.svg' alt='')
          .tarjeta.bg-secundario-s5.h-100
            .p-4.p-lg-3.p-xl-4
              h4 Oferta turística
              p.mb-0 Productos y servicios asociados a un determinado espacio geográfico.
      .col-sm-6.col-lg-4.mb-lg-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up").h-100
          .tarjeta-avatar-b__img.align-items-baseline.h-100
            img(src='@/assets/curso/tema1/32.svg' alt='')
          .tarjeta.bg-secundario-s5.h-100
            .p-4.p-lg-3.p-xl-4
              h4 Demanda turística
              p.mb-0 Conjunto de turistas que están motivados a utilizar una serie de productos o servicios turísticos para satisfacer sus necesidades.
              
    Separador
    #t_1_4
    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Producto turístico

    .p-4.rounded-4.bg-acento-botones-a5.mb-5
      p.mb-0 Lo integra la sumatoria de los atractivos turísticos, los servicios de la planta turística y la accesibilidad dentro de un destino, que integrados logran satisfacer las necesidades y motivaciones del turista. Los elementos que conforman el producto turístico se resumen en:

    .row.justify-content-center
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/33.png", alt="")
          .crd_hover_txt--body
            h4.mb-3 Atractivos turísticos
            p.mb-0 Son todos aquellos elementos naturales, bienes creados por la actividad humana y hechos sociales que crean el interés de ser conocidos y permiten su disfrute.
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/34.png", alt="")
          .crd_hover_txt--body
            h4.mb-3 Servicios o planta turísticos
            p.mb-0 Son el conjunto de medios y actividades que facilitan la estancia y el bienestar del viajero, convergiendo en ellos elementos tangibles e intangibles que son, en su etapa final de consumo, interdependientes (Instituto Distrital de Turismo y Asociación Colombiana de Agencias de Viajes y Turismo [ANATO], 2007).
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/35.png", alt="")
          .crd_hover_txt--body
            h4.mb-3 Accesibilidad
            p.mb-0 La accesibilidad en el diseño de producto comprende únicamente las vías de comunicación dispuestas para acceder al destino y a cada uno de los lugares de interés turístico.

    Separador
    #t_1_5
    .titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Cadena de valor

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema1/36.png", alt="")
      .col-lg-8
        p Una cadena en su forma literal es una serie de eslabones que crean una estructura más grande y fuerte. Cuando este concepto se aplica al sector turístico, Martín (2013) lo expresa así:
        p.mb-0 La cadena de valor del turismo es una forma de organización del sector turístico que integra a los proveedores de todos los productos y servicios que forman parte de la experiencia del turista, desde la planificación de su viaje, la permanencia en el destino turístico, hasta el regreso a su lugar de residencia. (p. 1).

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Cadena de valor del turismo
        img.mb-2.d-sm-none(data-aos="fade-down", src="@/assets/curso/tema1/37-mob.svg", alt="Infografía titulada “Cadena de valor del turismo”. Presenta una secuencia de etapas conectadas que representan el proceso del viaje turístico: planificación del viaje, transporte, hospedaje, alimentación, actividades y experiencia. Cada etapa está acompañada por un ícono representativo, como un mapa para la planificación, un avión para el transporte, una campana de hotel para el hospedaje, un pescado para la alimentación, un castillo para las actividades y un turista para la experiencia final.")
        img.mb-2.d-none.d-sm-block(data-aos="fade-down", src="@/assets/curso/tema1/37.svg", alt="Infografía titulada “Cadena de valor del turismo”. Presenta una secuencia de etapas conectadas que representan el proceso del viaje turístico: planificación del viaje, transporte, hospedaje, alimentación, actividades y experiencia. Cada etapa está acompañada por un ícono representativo, como un mapa para la planificación, un avión para el transporte, una campana de hotel para el hospedaje, un pescado para la alimentación, un castillo para las actividades y un turista para la experiencia final.")
        figcaption Nota. SENA, (2026).








</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
