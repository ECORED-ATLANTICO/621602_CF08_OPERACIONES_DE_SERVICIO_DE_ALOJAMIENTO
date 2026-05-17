<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/sintesis.png", alt="")
      .col-lg-9
        p El sistema turístico es una estructura dinámica que articula el turismo como fenómeno social y económico con los atractivos, la planta turística y la cadena de valor del sector. Comprender sus componentes permite al personal de recepción hotelera desempeñar con eficiencia su función como informador turístico: conocer la tipología y características del turismo, identificar los atractivos y recursos del destino, manejar fuentes de información confiables, ubicarse y orientar espacialmente a los visitantes, y comunicar de manera asertiva la oferta turística del territorio con veracidad, sentido de pertenencia y respeto por los espacios que presenta.
    
    .row.justify-content-center
      .col-lg-12
        figure
          img.mb-5(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual titulado “Sistema turístico”. Del concepto central se desprenden cinco componentes principales: turismo, atractivo turístico, información turística, ubicación espacial e información asertiva. Cada uno incluye palabras clave asociadas: turismo (características, sistema turístico, producto turístico, cadena de valor), atractivo turístico (clasificación, bienes y recursos, zona turística), información turística (informador, atención al visitante, información vs. promoción, fuentes), ubicación espacial (puntos cardinales, técnicas de orientación, referenciación, mapas turísticos) e información asertiva (claridad, veracidad, actualización, precisión).")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
