<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Atractivo turístico

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema2/1.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 Son todos aquellos elementos naturales, bienes creados por la actividad humana y hechos sociales que crean el interés de ser conocidos y permiten su disfrute. En este sentido, es importante señalar que la evolución de los viajeros (demanda turística) ha obligado al sector a ofertar productos cada vez más especializados. Esta realidad ha derivado en una diversificación turística sin precedentes. A continuación, se clasifican los atractivos turísticos con el fin de ayudar al entendimiento de este concepto

    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Clasificación de los atractivos turísticos

    .row.justify-content-center.align-items-stretch.z-2.mb-4
      .col-lg-6.mb-4.mb-lg-0
        .p-4.rounded-4.bg-acento-contenido-a5.h-100
          p En primer lugar, están los elementos naturales, los cuales pueden ser montañas, planicies, valles, quebradas, cañones, lagos y lagunas, pantanos, ríos, caídas agua, manantiales, costas, grutas y cavernas, áreas protegidas.
          p Colombia es un país privilegiado, cuenta con dos (2) costas y variados climas, lo que redunda en una multiplicidad de paisajes y diversidad natural.
          p.mb-0 A continuación, se realiza un recorrido por algunos de los más famosos y hermosos sitios de la naturaleza.
      .col-lg-6
        SlyderA(tipo="b").bg-acento-botones-a5.p-4.tarjeta.h-100
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-5.mb-4.mb-lg-0
              h4 Montañas y lago
              p.mb-0 Fantástico panorama del Lago Bachalp / Bachalpsee, Suiza.
            .col-sm-10.col-lg-6
              figure
                img(src='@/assets/curso/tema2/2.png', alt='')
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-5.mb-4.mb-lg-0
              h4 Cañones
              p.mb-0 El más famoso de los cañones del mundo es el Gran Cañón del Colorado. En Colombia, está el cañón del río Chicamocha en Santander.
            .col-sm-10.col-lg-6
              figure
                img(src='@/assets/curso/tema2/3.png', alt='')
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-5.mb-4.mb-lg-0
              h4 Ríos
              p.mb-0 El más hermoso de los ríos del mundo está en Colombia, es el Caño Cristales o río de los siete colores.
            .col-sm-10.col-lg-6
              figure
                img(src='@/assets/curso/tema2/4.png', alt='')
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-5.mb-4.mb-lg-0
              h4 Pantanos
              p.mb-0 Son de gran importancia para la conservación de ecosistemas. En esta imagen, una vista aérea de los Everglades de la Florida en Estados Unidos.
            .col-sm-10.col-lg-6
              figure
                img(src='@/assets/curso/tema2/5.png', alt='')
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-5.mb-4.mb-lg-0
              h4 Caídas de agua
              p.mb-0 El Salto Ángel es la cascada más alta del mundo, con 979 metros, y se encuentra en el Parque Nacional Canaima, Venezuela.
            .col-sm-10.col-lg-6
              figure
                img(src='@/assets/curso/tema2/6.png', alt='')
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-5.mb-4.mb-lg-0
              h4 Costas
              p.mb-0 Las costas tienen una especial atracción para el ser humano. Whitehaven, en Australia, tiene el título de la playa mas linda del mundo.
            .col-sm-10.col-lg-6
              figure
                img(src='@/assets/curso/tema2/7.png', alt='')
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-5.mb-4.mb-lg-0
              h4 Grutas y cavernas
              p.mb-0 La cueva de Eisriesenwelt (interior de esta cueva de hielo) está situada en Austria, a 40 kilómetros de Salzburgo.
            .col-sm-10.col-lg-6
              figure
                img(src='@/assets/curso/tema2/8.png', alt='')

    .p-4.rounded-4.bg-secundario-s10.z-2.mb-4
      p.mb-0 En segundo lugar, están las manifestaciones culturales. Estas hablan de la historia y de la realización de la humanidad como sociedad. A través del mundo, es posible observar muestras, como son museos, arquitectura, espacios urbanos, lugares históricos, restos y lugares arqueológicos y pueblos.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema2/9.png", alt="")
      .col-lg-8
        .rounded-4.bg-img.bg-img--8.p-4.h-100
          .row.align-items-center.mb-4
            .col-12
              ul.lista-ul--color.pe-4.m-0
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  span #[strong Museos] - Museo del Oro - Bogotá (Colombia).
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  span #[strong Arquitectura] - Burj Khalifa (edificio más alto del mundo) - Dubái (Emiratos Árabes).
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  span #[strong Arquitectura icónica] - Opera House - Sídney (Australia).
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  span #[strong Espacios urbanos] - Jardines de Luxemburgo - París (Francia).
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  span #[strong Lugares históricos] - Ciudad amurallada - Cartagena (Colombia).
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  span #[strong Lugares históricos] - Gran Muralla China - (China).
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  span #[strong Lugares arqueológicos] - Machu Picchu - (Perú).

    .p-4.rounded-4.bg-acento-contenido-a20.z-2.mb-4
      p.mb-0 Por último, pero no menos importante, está la clasificación de los usos y costumbres de la gente: el folclor, que se conoce como el conjunto de expresiones religiosas y populares, ferias, mercados, música, danza, artes, artesanías y gastronomía.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-6.mb-4.mb-lg-0
        .rounded-4.bg-img.bg-img--9.p-4.py-xl-5.h-100
          .row.align-items-center
            .col-12
              ul.lista-ul--color.pe-4.m-0
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  span #[strong Expresiones religiosas] - Semana Santa en Popayán - Colombia.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  span #[strong Expresiones populares] - Día de Muertos - México.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  span #[strong Mercados] - Jemaa Antigua Medina - Marruecos.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  span #[strong Danza] - Tango en Buenos Aires - Argentina.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  span #[strong Artesanías] - Ráquira - Colombia.
                li.d-flex.mb-0
                  i.fas.fa-minus.fa-xs.mt-2
                  span #[strong Gastronomía] - Pizza - Italia.
      .col-sm-10.col-lg-6
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/10.png", alt="")

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.mb-0.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.p-3.bg-acento-contenido-a5.rounded-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/common/phone.png", class="img-fluid cita-decorada__imagen-flotante-4 cita-decorada__imagen-flotante-4--bigger")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0.text-center.text-lg-start Para conocer de cerca cómo Colombia aprovecha sus atractivos naturales en el desarrollo turístico, se recomienda consultar el siguiente recurso audiovisual: El turismo rural en Colombia. 
              .col-lg-3.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones.my-2(href="https://www.youtube.com/watch?v=YIpnqZRTYZU" target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Bienes y recursos turísticos

    .p-4.rounded-4.bg-secundario-s5.z-2.mb-4
      p.mb-0 En este aparte, es necesario partir de la conceptualización de los términos bienes y recursos turísticos; de esta forma, y con base en la diferencia de estos conceptos, se apropiará el conocimiento de este.

    .bg-title.bg-title--lg.p-3.rounded-5.pe-5.mb-4
      h5.mb-0 Según el documento conocido como Sistema de Cuentas Nacionales:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        p Los bienes son objetos físicos producidos para los que existe una demanda, sobre los que se pueden establecer derechos de propiedad y que pueden transferirse de una unidad institucional a otra mediante transacciones realizadas en los mercados. (Comisión Europea et al., 2008).
        p.mb-4.mb-lg-0 Para ampliar la información sobre bienes y su definición en el contexto económico, se recomienda consultar el siguiente documento de referencia: Sistema de Cuentas Nacionales 2008. |
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/11.png", alt="")

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        .cita-decorada
          blockquote.cita-decorada__caja.p-3.bg-acento-contenido-a5.rounded-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-2.mb-3.mb-lg-0
                img(src="@/assets/curso/tema5/2.png", class="img-fluid cita-decorada__imagen-flotante-4")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0.text-center.text-lg-start #[strong Anexo 1]. Sistema de Cuentas Nacionales 2008, definición de bienes y su aplicación al sector turístico.
              .col-lg-3.col-md-4.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones.my-2(:href="obtenerLink('/downloads/Anexo1_CF08__Sistema_Cuentas_Nacionales_2008-2.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

    .p-4.rounded-4.bg-secundario-s5.z-2.mb-5
      p.mb-0 Por otra parte, como recursos turísticos, se denotan aquellos elementos que podrían llegar a ser un atractivo turístico pero que aún no cuentan con la infraestructura ni los servicios necesarios para atender visitantes. Es decir, si se analiza en términos económicos, serían los bienes o activos turísticos que están en proceso de desarrollo o en espera de ser incorporados a la oferta del destino.

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        .cita-decorada
          blockquote.cita-decorada__caja.p-3.bg-acento-contenido-a5.rounded-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-2.mb-3.mb-lg-0
                img(src="@/assets/curso/tema5/2.png", class="img-fluid cita-decorada__imagen-flotante-4")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0.text-center.text-lg-start #[strong Anexo 2]. Clasificación de los recursos turísticos según Ana García Silberman.
              .col-lg-3.col-md-4.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones.my-2(:href="obtenerLink('/downloads/Anexo2_CF08_Clasificacion_Recursos_Turisticos.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

    .p-4.rounded-4.bg-secundario-s5.z-2.mb-5
      p.mb-0 La siguiente imagen presenta un resumen del PDF estudiado anteriormente.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Clasificación de los recursos turísticos
    .tabla-a.color-acento-contenido.tabla-a--text-left
      table
        //- caption Nota. Adaptada David (2017) y Kotler & Keller (2016).
        thead
          tr(style="background-color: #F0F6F9")
            th Categoría
            th(colspan="2") Subcategoría
            th(colspan="2") Elementos
        tbody
          tr
            td(rowspan="7") Naturales
            td(colspan="2") #[strong Geomorfológicos – Litorales].
            td(colspan="2") Rocas e islas, playas, acantilados, desembocaduras de ríos.
          tr
            td(colspan="2") #[strong Geomorfológicos – Lagunas y depósitos de agua].
            td(colspan="2") Lagos, lagunas.
          tr
            td(colspan="2") #[strong Geomorfológicos – Corrientes de agua].
            td(colspan="2") Superficiales: cañones, cascadas. Subterráneas: manantiales, grutas.
          tr
            td(colspan="2") #[strong Geomorfológicos – Volcanismo].
            td(colspan="2") Cráteres, aguas termales y minerales, géiseres.
          tr
            td(colspan="2") #[strong Geomorfológicos – Relieves].
            td(colspan="2") Montañas, barrancas y cañones, planicies, dunas.
          tr
            td(colspan="2") #[strong Biogeográficos – Agrupaciones vegetales].
            td(colspan="2") Selvas, bosques.
          tr
            td(colspan="2") #[strong Biogeográficos – Agrupaciones vegetales].
            td(colspan="2") Fauna silvestre, zonas de caza.
          tr
            td(rowspan="3") Culturales
            td(colspan="2") #[strong Históricos].
            td(colspan="2") Zonas arqueológicas, arquitectura antigua, lugares históricos, poblados típicos, folklore, fiestas tradicionales. 
          tr
            td(colspan="2") #[strong Contemporáneos (comerciales)].
            td(colspan="2") Centros de convenciones, instituciones de enseñanza, bibliotecas, museos y pinturas murales, obras monumentales, invernaderos, zoológicos.
          tr
            td(colspan="2") #[strong Contemporáneos (no comerciales)].
            td(colspan="2") Parques de diversiones, balnearios, espectáculos culturales, espectáculos deportivos, campos deportivos, exposiciones nacionales e internacionales, mercados de artesanías, comercios, centros de salud, ferias y carnavales, celebraciones religiosas, casinos, concursos y competencias.

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Zona turística
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema2/12.png", alt="")
      .col-lg-8
        p Es un espacio territorial físico que contiene atractivos turísticos y que por lo tanto genera un flujo de personas (turistas) hacia ella. Su tamaño es variable y debe contar con unas cualidades homogéneas y un conjunto paisajístico común. Una zona turística puede agrupar extensiones territoriales de tamaño más pequeño y que se denominan áreas turísticas. Como rasgo relevante, la zona turística debe contar con infraestructura y servicios de comunicación entre las áreas que la integran.
        .p-4.rounded-4.bg-secundario-s5.z-2.mb-3
          p.mb-0 El autor Boullón (2006) destaca la zona turística como la unidad de mayor tamaño dentro de la organización del espacio turístico y determina que, para que exista una zona turística, esta debe contar con un número mínimo de diez (10) atractivos turísticos próximos, sin importar de qué tipo o categoría son.
        p.mb-0 Esta característica hace que la zona turística sea por excelencia la unidad más importante de clasificación y organización del espacio turístico moderno.

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Figura 2.
      span Zona turística
    img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema2/13-mob.png", alt="Diagrama conceptual de una zona turística que muestra un territorio delimitado donde se concentran varios atractivos turísticos conectados entre sí. Dentro del área aparecen dos centros turísticos identificados como C.T.1 y C.T.2, rodeados por diferentes puntos que representan atractivos turísticos distribuidos en el espacio. El esquema ilustra cómo estos atractivos se agrupan y se articulan dentro de una misma zona turística")
    img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema2/13.png", alt="Diagrama conceptual de una zona turística que muestra un territorio delimitado donde se concentran varios atractivos turísticos conectados entre sí. Dentro del área aparecen dos centros turísticos identificados como C.T.1 y C.T.2, rodeados por diferentes puntos que representan atractivos turísticos distribuidos en el espacio. El esquema ilustra cómo estos atractivos se agrupan y se articulan dentro de una misma zona turística")
    figcaption  Nota. Adaptado de Boullón, R. (2006). Planificación del espacio turístico.





</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
