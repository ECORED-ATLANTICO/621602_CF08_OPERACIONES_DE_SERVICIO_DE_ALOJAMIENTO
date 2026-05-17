<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Sistema turístico: atractivo, facilidades, accesibilidad y Servicios.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> reconocer los conceptos básicos del sistema turístico, los atractivos, las fuentes de información turística y las técnicas de orientación espacial para fortalecer la capacidad de brindar información turística al visitante.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: 'Según ONU Turismo, el turismo se define como:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Fenómeno social, cultural y económico que implica el desplazamiento de personas fuera de su entorno habitual .',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Actividad recreativa realizada únicamente dentro del lugar de residencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Movimiento permanente de población entre países.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Servicio prestado exclusivamente por agencias de viajes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del concepto relacionado con el sistema turístico, los atractivos y la información turística, elementos fundamentales para brindar orientación adecuada al visitante.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: 'La característica principal del turismo es:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El traslado temporal de una persona a un lugar diferente a su residencia habitual .',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El comercio internacional de productos turísticos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La permanencia permanente en el destino turístico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La creación de empresas turísticas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del concepto relacionado con el sistema turístico, los atractivos y la información turística, elementos fundamentales para brindar orientación adecuada al visitante.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: 'La intangibilidad en los servicios turísticos significa que:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El servicio se puede almacenar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El servicio es producido en masa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El servicio no se puede percibir antes de consumirlo .',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El servicio siempre tiene forma física.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del concepto relacionado con el sistema turístico, los atractivos y la información turística, elementos fundamentales para brindar orientación adecuada al visitante.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: 'Dentro del sistema turístico uno de los subsistemas es:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sistema industrial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estructura turística .',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sistema financiero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sistema comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del concepto relacionado con el sistema turístico, los atractivos y la información turística, elementos fundamentales para brindar orientación adecuada al visitante.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'La infraestructura turística está compuesta principalmente por:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Museos y monumentos históricos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Folclor y gastronomía.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Publicidad turística.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Vías de transporte, servicios públicos y comunicaciones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del concepto relacionado con el sistema turístico, los atractivos y la información turística, elementos fundamentales para brindar orientación adecuada al visitante.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: 'La superestructura turística corresponde a:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Empresas privadas de transporte.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organismos que regulan y organizan la actividad turística. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Hoteles y restaurantes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Guías de turismo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del concepto relacionado con el sistema turístico, los atractivos y la información turística, elementos fundamentales para brindar orientación adecuada al visitante.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: 'El producto turístico se compone de:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Atractivos turísticos, servicios y accesibilidad. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Empresas turísticas y transporte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Infraestructura y publicidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Turistas y agencias de viajes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del concepto relacionado con el sistema turístico, los atractivos y la información turística, elementos fundamentales para brindar orientación adecuada al visitante.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: 'Los atractivos turísticos son:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Servicios prestados por hoteles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Elementos naturales o culturales que generan interés para ser visitados .',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Actividades comerciales del destino.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Publicidad de destinos turísticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del concepto relacionado con el sistema turístico, los atractivos y la información turística, elementos fundamentales para brindar orientación adecuada al visitante.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: 'Dentro de los atractivos naturales se encuentran:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Museos y teatros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Montañas, ríos y lagos. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mercados artesanales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ferias culturales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del concepto relacionado con el sistema turístico, los atractivos y la información turística, elementos fundamentales para brindar orientación adecuada al visitante.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: 'Los bienes turísticos se caracterizan por ser:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Actividades recreativas de los turistas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Servicios intangibles únicamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elementos sin valor económico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Objetos físicos que pueden tener demanda y valor económico.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del concepto relacionado con el sistema turístico, los atractivos y la información turística, elementos fundamentales para brindar orientación adecuada al visitante.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: 'Los recursos turísticos son:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Servicios prestados por hoteles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Atractivos totalmente desarrollados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Elementos que aún no cuentan con infraestructura turística para recibir visitantes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sitios exclusivamente culturales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del concepto relacionado con el sistema turístico, los atractivos y la información turística, elementos fundamentales para brindar orientación adecuada al visitante.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: 'Una zona turística se caracteriza porque:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Debe tener mínimo diez atractivos turísticos cercanos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Debe tener únicamente hoteles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Debe estar en una capital.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Debe ser exclusivamente natural.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del concepto relacionado con el sistema turístico, los atractivos y la información turística, elementos fundamentales para brindar orientación adecuada al visitante.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: 'La información turística debe ser:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comercial y persuasiva.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Imparcial y orientadora para el visitante.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Publicidad directa del destino.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Información exclusiva de agencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del concepto relacionado con el sistema turístico, los atractivos y la información turística, elementos fundamentales para brindar orientación adecuada al visitante.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: 'El informador turístico debe tener:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Experiencia en transporte público.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Capacidad para vender paquetes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Conocimiento únicamente de marketing.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Conocimiento del destino y habilidades de comunicación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del concepto relacionado con el sistema turístico, los atractivos y la información turía, elementos fundamentales para brindar orientación adecuada al visitante.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: 'Una norma básica de atención al visitante es:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar preguntas difíciles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Responder solo con folletos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Saludar con cortesía e indagar la necesidad del cliente. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Evitar contacto visual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del concepto relacionado con el sistema turístico, los atractivos y la información turística, elementos fundamentales para brindar orientación adecuada al visitante.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'La diferencia entre información turística y promoción turística es:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La promoción es imparcial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La información es comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La información es imparcial y la promoción busca influir en el viaje.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La promoción no usa publicidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del concepto relacionado con el sistema turístico, los atractivos y la información turística, elementos fundamentales para brindar orientación adecuada al visitante.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: 'Entre las fuentes confiables de información turística están:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rumores de viajeros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sitios web oficiales y documentos institucionales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Publicidad sin referencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Opiniones personales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del concepto relacionado con el sistema turístico, los atractivos y la información turística, elementos fundamentales para brindar orientación adecuada al visitante.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: 'Los puntos cardinales permiten:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir rutas comerciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ubicar una posición en el espacio geográfico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Calcular el clima.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Medir la población.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del concepto relacionado con el sistema turístico, los atractivos y la información turística, elementos fundamentales para brindar orientación adecuada al visitante.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: 'Un método natural de orientación es:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso exclusivo de satélites.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Orientarse por la sombra de un palo o por las estrellas .',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Uso de redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Publicidad turística.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del concepto relacionado con el sistema turístico, los atractivos y la información turística, elementos fundamentales para brindar orientación adecuada al visitante.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: 'Brindar información turística de manera asertiva implica:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hablar mucho sin claridad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ofrecer información sin verificar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comunicar con claridad, precisión y veracidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Promocionar únicamente un servicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia dominio del concepto relacionado con el sistema turístico, los atractivos y la información turística, elementos fundamentales para brindar orientación adecuada al visitante.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
