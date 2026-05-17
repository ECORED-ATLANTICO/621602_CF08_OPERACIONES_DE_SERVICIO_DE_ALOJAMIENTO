<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .mt-5.pt-4
      .fullwidth-bg.fullwidth-bg--1
      img(data-aos="fade-up")(src="@/assets/curso/intro.png", alt="").z-2
      
      .row.justify-content-center.z-2.mb-3
        .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
          div.banner-text.shadow
            p.mb-0 En el ámbito social y económico, el turismo se consolida como una actividad recreativa, placentera y transformadora, que lleva a las personas a desplazarse de un lugar a otro para conocer nuevas costumbres, espacios y formas de vida. Esta actividad puede desarrollarse por motivos personales, profesionales o de negocios, y en todos los casos el viajero espera recibir atención de calidad, información veraz y orientación pertinente durante su estadía. Es precisamente en ese punto donde el recepcionista hotelero cumple un papel estratégico: es la primera persona a quien el huésped acude cuando necesita conocer su entorno, planificar su tiempo libre o resolver una duda sobre el destino.


    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/intro-2.png", alt="")
      .col-lg-9
        .p-4.rounded-4.bg-secundario-s5.mb-3
          p.mb-0 Reconocer los fundamentos del sistema turístico no es una tarea exclusiva de guías o agentes de viajes; es una competencia esencial para quien trabaja en la recepción de un establecimiento hotelero. Conocer los atractivos, las facilidades, los servicios y la dinámica del turismo local permite brindar información asertiva, diferenciadora y de valor para el huésped. En este componente formativo se abordan los conceptos básicos del turismo a partir de los referentes de ONU Turismo —organismo internacional anteriormente conocido como Organización Mundial del Turismo (OMT)—, el sistema turístico, los atractivos y recursos del destino, las fuentes de información turística y las técnicas de ubicación espacial, como herramientas prácticas para el desempeño del recepcionista en su rol de informador turístico.


</template>

<script>
export default {
  name: 'Introduccion',
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
