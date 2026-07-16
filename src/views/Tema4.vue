<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Ubicación espacial

    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/tema4/1.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 La ubicación hace referencia al lugar físico que cada persona ocupa. La orientación espacial es la habilidad natural de los seres vivos que les permite saber y determinar la posición del propio cuerpo en relación con el espacio. En síntesis, la ubicación espacial es el lugar físico que ocupamos en un momento dado en relación con el espacio.

    .p-4.rounded-4.bg-acento-contenido-a5.mb-5
      p.mb-0 La orientación es una habilidad necesaria para poder desarrollar la actividad turística. El saber dónde estoy y hacia dónde me dirijo o deseo dirigirme es la primera condición que debe cumplirse para realizar un desplazamiento.

    .row.justify-content-center.align-items-center.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema4/2.png", alt="")
      .col-lg-8
        p La utilización de nuevas tecnologías (teléfonos inteligentes y sistema de posicionamiento global, GPS) hace cada vez más fácil determinar la ubicación espacial sin el uso de mapas. El GPS ayuda a los viajeros a saber dónde se encuentran y hacia dónde se dirigen. Sin embargo, es necesario saber ubicarse espacialmente para no depender exclusivamente de tecnologías externas, especialmente en sitios donde estas no estén disponibles. 
        p.mb-0 A continuación, se presentan varios métodos para lograrlo.

    Separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Puntos cardinales

    .row.g-0.rounded-4.bg-acento-botones-a5.mb-5.justify-content-center
      .col-sm-6.col-lg-3.d-flex
        figure.m-0
          img(src="@/assets/curso/tema4/3.png", alt="alt text")
      .col-lg-9.p-4.p-xl-0
        .d-flex.align-items-center.h-100
          p.mb-0.px-lg-3 Los puntos cardinales son las cuatro direcciones principales que permiten orientarse y ubicarse en un mapa o sobre la superficie terrestre. Para comprender el sentido de la orientación, es necesario considerar la perspectiva del entorno desde el lugar en el que se encuentra el observador en la Tierra. Desde esta posición se identifican las diferentes direcciones: oriente, occidente, norte y sur. La comprensión del horizonte resulta fundamental para determinar la posición geográfica. A continuación, se presentan brevemente estos puntos cardinales (Cobo, 2013).
          
    .row.justify-content-center.mb-5
      .col-12.col-lg-10.mb-0.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.p-3.bg-acento-contenido-a5.rounded-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/tema5/2.png", class="img-fluid cita-decorada__imagen-flotante-4 cita-decorada__imagen-flotante-4--bigger")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0.text-center.text-lg-start #[strong Anexo 3]. Orientación geográfica: enfoque de Cobo Arízaga (2013).
              .col-lg-3.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones.my-2(:href="obtenerLink('/downloads/Anexo3_CF08_Orientacion_Geografica.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

    Separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Técnicas de ubicación y orientación

    .bg-secundario-s10.p-4.rounded-4.mb-4
      p.mb-0.text-center Existen varios métodos con los que es posible orientarse. El primero de ellos empieza con la información que brindan los puntos cardinales:

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-terciario-t5").mb-4
      .row.justify-content-center.align-items-center.z-2(titulo="Orientación con el oriente ")
        .col-sm-10.col-lg-7.mb-4.mb-lg-0
          p.mb-0 Orientarse con las estrellas (hemisferio sur). En el hemisferio sur se busca la “Cruz del Sur”, una constelación con forma de rombo o cometa. Si prolongamos la longitud de la cometa cuatro veces y media, el punto imaginario que localicemos indicará siempre el sur.
        .col-sm-7.col-lg-4
          figure
            img(src='@/assets/curso/tema4/4.png', alt='')
      .row.justify-content-center.align-items-center.z-2(titulo="Orientación con la sombra de un palo ")
        .col-sm-10.col-lg-7.mb-4.mb-lg-0
          p.mb-0 Este método solo funciona cuando hay sol. Se clava en un terreno abierto y llano un palo que proyecte una sombra de unos 30 o 40 cm. Luego de esto marcamos el extremo de la sombra. A continuación, con un cordón de un zapato, una rama u otro método improvisado, se traza una semicircunferencia usando como radio la longitud de la sombra. Ahora es necesario esperar el movimiento del Sol. La sombra se irá reduciendo a medida que nos acercamos a las 12:00 del día. Momento en que alcanzará su menor tamaño para después volver a crecer. En el punto en el que la sombra vuelva a alcanzar la semicircunferencia pondremos una marca. Al unir las dos marcas se traza una línea occidente (primera marca) – oriente (segunda marca). En la perpendicular se encontrarán el norte y el sur. Este método requiere tiempo y condiciones de luz solar adecuadas.
        .col-sm-7.col-lg-4
          figure
            img(src='@/assets/curso/tema4/5.png', alt='')
      .row.justify-content-center.align-items-center.z-2(titulo="Orientación con las estrellas (hemisferio norte)")
        .col-sm-10.col-lg-7.mb-4.mb-lg-0
          p.mb-0 En el hemisferio norte del planeta, la estrella polar indica siempre el norte. Esta estrella es la última de la cola de la Osa Menor y, a pesar de que en casi todas las ilustraciones se muestra como una estrella muy brillante, su luz es tan pálida que con frecuencia no es fácil de ver. No obstante, es fácil guiarse por la Osa Mayor para localizar el punto donde se encuentra la estrella polar. Para ello solo tenemos que prolongar cuatro veces la distancia que separa las dos estrellas frontales de la Osa Mayor.
        .col-sm-7.col-lg-4
          figure
            img(src='@/assets/curso/tema4/6.png', alt='')

    p.mb-4.mb-lg-5 Estas son algunas de las formas que la naturaleza brinda para orientarse. De otro lado, están las herramientas desarrolladas por la humanidad, dentro de las que es posible mencionar:


    .row.mb-4.justify-content-center.align-items-stretch
      .col-sm-6.col-lg-4.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up").h-100
          .tarjeta-avatar-b__img.align-items-baseline.h-100
            img(src='@/assets/curso/tema4/7.svg' alt='')
          .tarjeta.bg-img.bg-img--7.h-100
            .p-4.p-lg-3.p-xl-4
              h4 Brújula
              p.mb-0 Existen aplicativos web que funcionan desde teléfonos inteligentes.
      .col-sm-6.col-lg-4.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-down").h-100
          .tarjeta-avatar-b__img.align-items-baseline.h-100
            img(src='@/assets/curso/tema4/8.svg' alt='')
          .tarjeta.bg-img.bg-img--7.h-100
            .p-4.p-lg-3.p-xl-4
              h4 Mapa
              p.mb-0 Contamos con versiones digitales, como Google Maps.
      .col-sm-8.col-lg-4.mb-3.mb-xl-0
        .tarjeta-avatar-b.align-items-center(data-aos="fade-up").h-100
          .tarjeta-avatar-b__img.align-items-baseline.h-100
            img(src='@/assets/curso/tema4/9.svg' alt='')
          .tarjeta.bg-img.bg-img--7.h-100
            .p-4.p-lg-3.p-xl-4
              h4 GPS
              p.mb-0 Son plataformas globales de posicionamiento, de origen militar, que funcionan sobre la red mundial de satélites.

    Separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Puntos de referenciación en el destino

    .row.justify-content-center.align-items-stretch.z-2
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema4/10.png", alt="")
      .col-lg-9
        .bg-img.bg-img--8.p-4.rounded-4.h-100
          p.mb-0.pe-lg-5.py-xl-4 Los puntos de referencia son también un método válido para ubicarse. Para ilustrar esta forma de orientación, es útil remitirse imaginariamente a París (Francia). En esta ciudad existen numerosos puntos de referencia, como edificios y monumentos. Entre los más reconocidos se encuentran la Torre Eiffel y el puente Bir Hakeim.

    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Mapas turísticos

    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/11.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.d-block Los mapas turísticos son mapas impresos que tienen resaltados en sus convenciones los sitios de interés y los puntos de referencia de un destino turístico. Por lo general, se consiguen de forma gratuita en hoteles y puntos de información turística.
        p.d-block.mb-0 Pueden tener una temática específica —museos de una ciudad, restaurantes destacados, circuitos patrimoniales— o ser de carácter general, mostrando la totalidad de los puntos de interés del destino. Aunque siguen vigentes, los mapas impresos son reemplazados progresivamente por aplicaciones de ubicación para teléfonos móviles.
    
</template>

<script>
export default {
  name: 'Tema4',
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
