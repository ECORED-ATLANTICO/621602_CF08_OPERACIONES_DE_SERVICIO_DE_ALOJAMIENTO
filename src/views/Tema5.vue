<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Brindar información asertivamente

    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.d-block La comunicación asertiva facilita el flujo de información entre las partes de manera clara, precisa y concisa (Servicio Nacional de Aprendizaje [SENA], 2021). En el papel de comunicador, el personal de recepción cuenta con pocos segundos para crear empatía con la persona que formula una pregunta, por lo que conocer las bases de la comunicación asertiva resulta fundamental para transmitir información de manera eficiente.
        p.d-block.mb-0 Para profundizar en las estrategias de comunicación asertiva aplicadas a la atención de visitantes, se recomienda consultar el siguiente recurso: Comunicación asertiva con turistas (SENA, 2021). 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-xl-6.mb-4.mb-xl-0
        .cita-decorada
          blockquote.cita-decorada__caja.p-3.bg-acento-contenido-a5.rounded-4
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/tema5/2.png", class="img-fluid cita-decorada__imagen-flotante-4")
              .col-12.col-lg-5.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0.text-center.text-lg-start #[strong Anexo 4]. Comunicación asertiva con turistas (SENA, 2021).
              .col-lg-3.col-md-4.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones.my-2(:href="obtenerLink('/downloads/Anexo4_CF08_Comunicacion_asertiva_con_turistas.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

      .col-lg-10.col-xl-6
        .bloque-texto-e.color-secundario.py-2.px-4.rounded-4
          .bloque-texto-e__texto
            i.fas.fa-quote-left
            h4 Sobre la importancia de la comunicación en la atención a visitantes
            i.fas.fa-quote-right
          .row.align-items-end
            .col
              .bloque-texto-e__autor 
                p.mb-0 Blanco Amaya (2011).

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4.mb-4.mb-lg-0
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema5/3.png", alt="")
      .col-lg-8
        p El desarrollo de la actividad como guía de turismo no es una tarea fácil de realizar, al tener que entablar relaciones interpersonales con personas que hace pocos segundos se ha conocido. Y es ahí donde la comunicación, como proceso de transmisión y recepción de ideas, información y mensajes, entra en acción al ser el requisito que permitirá durante todo el recorrido la interacción entre el turista y el guía. (Blanco Amaya, 2011).
        .p-4.rounded-4.mb-3.bg-acento-contenido-a5
          p.mb-0 Aunque esta descripción corresponde al rol de guía de turismo, los principios de comunicación que describe aplican igualmente al personal de recepción hotelera, que cumple una función informativa similar con los huéspedes durante su estadía.
        p.mb-0 La comunicación asertiva en la prestación del servicio turístico permite promover y presentar los atractivos de cada región, demostrando valores de identidad y sentido de pertenencia hacia los elementos que conforman la riqueza del territorio. Al comunicar esta información, el personal debe ser coherente y demostrar respeto por los espacios que presenta a los visitantes (Blanco Amaya, 2011).

    .p-4.rounded-4.bg-secundario-s5.mb-4
      p.mb-0 La información que se proporciona a un visitante debe ser garantía de veracidad. Por tanto, como parte de las rutinas de trabajo, es necesario mantener la información turística actualizada. Los clientes indagan con frecuencia sobre aspectos como:

    .row.justify-content-center.align-items-stretch.mb-5.z-2
      .col-sm-4.col-xl-2.mb-4.mb-xl-0
        .py-3.px-4.bg-img.bg-img--6.h-100.rounded-4
          p.mb-0 Ubicación de atractivos.
      .col-sm-4.col-xl-2.mb-4.mb-xl-0
        .py-3.px-4.bg-img.bg-img--6.h-100.rounded-4
          p.mb-0 Horarios de atención.
      .col-sm-4.col-xl-2.mb-4.mb-xl-0
        .py-3.px-4.bg-img.bg-img--6.h-100.rounded-4
          p.mb-0 Tarifas de ingreso.
      .col-sm-4.col-xl-2.mb-4.mb-lg-0
        .py-3.px-4.bg-img.bg-img--6.h-100.rounded-4
          p.mb-0 Mejores rutas para llegar a un sitio determinado.
      .col-sm-4.col-xl-2.mb-4.mb-lg-0
        .py-3.px-4.bg-img.bg-img--6.h-100.rounded-4
          p.mb-0 Recomendaciones para la visita.
      .col-sm-4.col-xl-2.mb-4.mb-lg-0
        .py-3.px-4.bg-img.bg-img--6.h-100.rounded-4
          p.mb-0 Recomendaciones de seguridad.

    .bg-secundario-s10.p-4.rounded-4.mb-4
      p.mb-0 Podcast: Para reforzar los conceptos sobre fuentes de información turística y comunicación asertiva trabajados en este componente, se recomienda escuchar el siguiente recurso de audio: ¿Cómo saber qué información turística es confiable y cómo transmitirla bien?.

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema5/4.png", alt="")
      .col-lg-7.bg-audio.rounded-4
        .row.align-items-center
          .col-sm-4
            figure.pt-3
              img.w-155(src="@/assets/curso/common/mic.png", alt="alt")
          .col-sm-8.col-lg-8
            h5 ¿Sabías qué?
            p Lo invitamos a escuchar el siguiente pódcast:
            TarjetaAudio.color-terciario.mb-3(
              texto="El check-in paso a paso: más allá del trámite, una experiencia de servicio."
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )

</template>

<script>
export default {
  name: 'Tema5',
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
