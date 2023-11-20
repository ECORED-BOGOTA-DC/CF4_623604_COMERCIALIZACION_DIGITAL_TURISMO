<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Competencia

    .row.justify-content-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img01.png', alt="Imagen decorativa")
      .col-lg-6(data-aos="fade-left")
        p Hasta el momento se ha realizado el análisis de la empresa o emprendimiento a nivel interno y externo; #[span.etiqueta se ha podido determinar fortalezas, debilidades, amenazas y oportunidades, y se ha complementado este análisis con la comprensión de nuestro producto o servicio y del cliente ideal para él.] Pero sería lógico suponer que quizás no se esté solo en el mercado.
        p Así que ha llegado el momento de analizar la competencia, ya que al elaborar el plan de mercadeo no se encontrará completo sin este componente. 
        .cajon.color-secundario.fondo1.p-4
          p.mb-0 Para iniciar esta exploración se puede mencionar que etimológicamente la palabra competencia proviene del latín <em>“competentia”</em>, que es la cualidad del que lucha para conseguir un premio y que según la Real Academia de la Lengua Española se define como la “situación de empresas que rivalizan en un mercado, ofreciendo o demandando un mismo producto o servicio.” 
    
    p(data-aos="fade-right") #[span.etiqueta Partiendo de estos conceptos]se puede avanzar en conocer a sus competidores.
    p(data-aos="fade-right") De aquí en adelante se van a seguir unos sencillos pasos que permitirán identificar y analizar su competencia y no fallar en esta importante etapa.
   
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 3.1 ¿Quiénes son mis competidores? 
    
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-4(data-aos="fade-right")
        .bg3.h-100.p-4
          p.mb-0 En este aparte del plan de mercadeo se va a ubicar todas las empresas que operan en un mismo mercado (geográficamente hablando) y sector (se hace referencia al sector empresarial, aquí podría haber más de uno), ofreciendo un mismo producto o servicio. Estas empresas rivalizan entre sí, (nuestra empresa incluida) para obtener la preferencia de compra del cliente final a través de estrategias empresariales diferenciadas. Por lo tanto, se debe hacer una correcta identificación de ellos, por así decirlo debe dársele un nombre y apellido.
      .col-lg-4.mb-lg-0.mb-4(data-aos="flip-up")
        figure.h-100
          img(src="@/assets/curso/tema3/img02.png", alt="Imagen decorativa")
      .col-lg-4.mb-lg-0.mb-4(data-aos="fade-left")
        .bg4.h-100.p-3
          p Luego de tener un listado preliminar se puede determinar cómo afectan nuestra cuota de mercado, quienes son sus clientes, cuáles son sus precios medios, la posición competitiva, mapas de localización y todos los datos primarios que se consideren importantes.
          p.mb-0 Para organizarlos se puede hacer en tres tipos genéricos de competidores que la industria ha determinado, tal como se observa en el siguiente recurso educativo:
    
    TabsC.color-primario.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Competidores directos o de primer grado")
        .row.justify-content-center
          .col-lg-8.order-lg-1.order-2
            p Son aquellas empresas que:
            ul.lista-ul--color
              li 
                i.fa.fa-dot-circle(style="color: #FF854E")
                | Operan en nuestro mismo mercado. 
              li 
                i.fa.fa-dot-circle(style="color: #FF854E")
                | Canales de distribución idénticos. 
              li 
                i.fa.fa-dot-circle(style="color: #FF854E")
                | Atienden al mismo perfil de potenciales clientes y cubren las mismas necesidades.  
              li 
                i.fa.fa-dot-circle(style="color: #FF854E")
                | Servicios o productos iguales o parecidos.
            p.mb-0 Para ejemplificar en el campo hotelero, para Hilton, su competencia directa es Marriott.
          .col-lg-4.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema3/img03.svg', alt="Imagen decorativa")
      .py-3.py-md-4(titulo="Competidores indirectos o de segundo grado")
        .row.justify-content-center
          .col-lg-8.order-lg-1.order-2
            p Son aquellas empresas que:
            ul.lista-ul--color
              li 
                i.fa.fa-dot-circle(style="color: #FF854E")
                | Operan en el mismo mercado. 
              li 
                i.fa.fa-dot-circle(style="color: #FF854E")
                | Canales de distribución iguales. 
              li 
                i.fa.fa-dot-circle(style="color: #FF854E")
                | Atienden el mismo perfil de potenciales clientes y cubren las mismas necesidades.   
              li 
                i.fa.fa-dot-circle(style="color: #FF854E")
                | Producto o servicio difiere en alguno de sus atributos principales.
            p.mb-0 Para seguir con el mismo ejemplo Coca-Cola, en este caso su competencia indirecta podrían ser otros hoteles, como GHL, Estelar.
          .col-lg-4.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema3/img04.svg', alt="Imagen decorativa")
      .py-3.py-md-4(titulo="Productos sustitutos o competidores de tercer grado")
        .row.justify-content-center
          .col-lg-8.order-lg-1.order-2
            p Son empresas que:
            ul.lista-ul--color
              li 
                i.fa.fa-dot-circle(style="color: #FF854E")
                | Operan en el mismo mercado y sector.
              li 
                i.fa.fa-dot-circle(style="color: #FF854E")
                | Canales de distribución idénticos.
              li 
                i.fa.fa-dot-circle(style="color: #FF854E")
                | Atienden el mismo perfil de potenciales clientes y cubren las mismas necesidades.   
              li 
                i.fa.fa-dot-circle(style="color: #FF854E")
                | El producto o servicio es otro, pero satisface la misma necesidad del nuestro.
            p.mb-0 En el caso de los hoteles, los productos sustitutos podrían ser cualquier servicio de alojamiento alterno como AirBNB.
          .col-lg-4.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema3/img05.svg', alt="Imagen decorativa")
    
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        .bg6.p-4
          p.text-center.mb-0 Es recomendable analizar al menos dos y si es posible las tres opciones de competencia que se han indicado.
    
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Niveles de análisis de la competencia
    
    .bloque-texto-g.bg7.p-3.p-sm-4.p-md-5.mb-5.otrobloque2(data-aos="fade-up-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img06.png')})`}", alt="Imagen decorativa", data-aos="fade-right"
      )
      .bloque-texto-g__texto.py-5.px-4(data-aos="fade-left")
        p.mb-0 Genéricamente un mercado es un lugar teórico donde se encuentran la oferta y la demanda de productos y servicios. Al referirse a un lugar, el mercado tiene unos límites geográficos que en virtud de su amplitud crean diferentes niveles de análisis para los componentes del <em>marketing mix</em>. Estos niveles son:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img07.svg', alt="Muestra gráfico con niveles de competencia:<br>-local<br>-regional<br>-nacional<br>-internacional<br>se describen en la parte inferior")
      .col-lg-6(data-aos="fade-left")
        AcordionA.otroacordion2(tipo="b" clase-tarjeta="tarjeta tarjeta--azul1")
          div.px-2(titulo="Nivel internacional")
            p.mb-0 Este análisis dependerá de si nuestra empresa opera o no a este nivel. O de si hay proyección de operar en él a futuro. Esto dará una visión macro de grandes empresas, con pautas e indicadores orientativos.
          div.px-2(titulo="Nivel nacional")
            p.mb-0 Tendrá la radiografía de las empresas competidoras en el mercado nacional. Cómo operan, cuál es su volumen de ventas, los precios medios, la inversión en publicidad.
          div.px-2(titulo="Nivel regional")
            p.mb-0 Debe entender cómo funciona y opera su competencia a este nivel. Sera útil analizar y valorar cifras y datos que, por ejemplo, podrá comparar con las cifras del negocio. Y saber si el aumento de las ventas ha sido mayor o menor al de sus competidores.
          div.px-2(titulo="Nivel local")
            p.mb-0 Por ejemplo, la empresa es una tienda de barrio. Analizar y valorar cifras de los competidores más cercanos para poder establecer un plan de acción, de choque o de lanzamiento.
          div.px-2(titulo="Nivel <em>online</em>")
            p.mb-0 Este es un nivel en el que debe conducir un análisis focalizado en el ámbito web, plataformas, <em>eCommerce</em>, redes sociales.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        p Este análisis reviste un cierto grado de complejidad, sobre todo porque hay que tener en cuenta que hoy en día la presencia <em>online</em> podría llevar a una empresa local a tener presencia internacional. 
        p De una u otra manera la presencia <em>online</em> rompe las barreras físicas y otorga acceso a muchos mercados, a los que quizá antes no era posible acceder. Esto debe tenerse en cuenta según el producto y la naturaleza del negocio.
        .cajon.puntacajon.bg3.sombracajon.p-4
          p A manera de ejemplo, el turismo es una industria que, aunque se ubica localmente, a través de la presencia <em>online</em> tiene posibilidad de vender sus servicios a nivel internacional.
          p.mb-0 Por esta razón, quizá un destino o empresa en particular tenga sus competidores, no a la vuelta de la esquina o en la misma ciudad, sino a varios miles de kilómetros. 
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img08.png', alt="Imagen decorativa")
    
    p(data-aos="fade-right") Al final la recomendación es que en virtud del tamaño y lugar de operación de la empresa o emprendimiento se cubran el número de niveles de competencia que corresponda.
    
    separador
    #t_3_3.titulo-segundo.color-acento-contenido.mb-0(data-aos="fade-right")
      h2 3.3 ¿Cómo llevar a cabo el análisis de la competencia?
    
    .row.fondo11.ampliarambos.px-md-5.px-4.py-5.mb-5
      .col-lg-6.order-lg-1.order-2
        p(data-aos="fade-right") A la hora de realizar el análisis de la competencia los pasos son: 
        ul.lista-ul--color
          li(data-aos="fade-right")
            i.fas.fa-check(style="color: #ED7D41")
            | Establecer un objetivo.
          li(data-aos="fade-right")
            i.fas.fa-check(style="color: #ED7D41")
            | Determinar el tipo de competidor y el nivel de análisis.
          li(data-aos="fade-right")
            i.fas.fa-check(style="color: #ED7D41")
            | Elegir entre 5 y 10 empresas. Las que se estimen más representativas. 
          li(data-aos="fade-right")
            i.fas.fa-check(style="color: #ED7D41")
            | Extraer las variables de análisis.   
          li(data-aos="fade-right")
            i.fas.fa-check(style="color: #ED7D41")
            | Realizar un estudio comparativo entre ellas.    
          li(data-aos="fade-right")
            i.fas.fa-check(style="color: #ED7D41")
            | Luego comparar con los resultados de la empresa.      
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img10.png', alt="Imagen decorativa")
    
    .tarjeta.bg9.p-4.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center
        .col-3.col-sm-2.col-lg-3
          img(src="@/assets/curso/tema3/img22.svg", alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .titulo-segundo.color-acento-contenido
                h2 Análisis de competencia
              p.mb-0 Los indicadores más relevantes para realizar el análisis de competencias se indican en el siguiente recurso educativo que le permitirá una mejor comprensión:
            .col-sm-auto
              a.boton.color-primario.texto-dark(:href="obtenerLink('downloads/anexo2.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
   
    .tarjeta.bg8.p-3.mb-4(data-aos="flip-up")
      .row.justify-content-center.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema3/img11.svg", alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 Para una mejor comprensión del tema en el anexo Análisis de competencia encontrará los resultados que se han consignado en una matriz comparativa.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/anexo1.xlsx')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Competencia imperfecta
    
    p(data-aos="fade-right") Se conoce con este término la situación de mercado en la que los vendedores individuales (empresas) tienen la capacidad de influir sobre el precio de mercado de sus productos o servicios. Para que esta situación se dé normalmente se presentan barreras de entrada (restricciones legales) y unas marcadas diferencias en costos de funcionamiento y operación (pueden ser de inversión inicial o costes bajos de producción por economías de escala).
    p.mb-5(data-aos="fade-right") #[span.etiqueta #[b Los tipos de estructuras]]que tienen la competencia imperfecta se presentan a continuación.
    
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 2. 
      span <em>Tipos de estructuras de la competencia imperfecta</em>
    
    .tabla-a.color-primario.mb-5
        thead
          tr(style="background-color: #3D672F" data-aos="fade-right")
            th.text-white Estructura de mercado
            th.text-white Número de oferentes y diferenciación
            th.text-white Grado de control, sobre el precio
            th.text-white Ejemplo  
        tbody
          tr.fonta(data-aos="fade-right")
            th.text-center Monopolio
            td Una empresa dominante, sin productos sustitutos
            td.text-center Total
            td.text-center Google
          tr(data-aos="fade-right")
            th.text-center Oligopolio
            td Pocas empresas con productos homogéneos o diferenciados
            td.text-center Parcial
            td.text-center Celulares y tecnología
          tr.fonta(data-aos="fade-right")
            th.text-center Competencia monopolística
            td Muchas empresas con productos diferenciados
            td.text-center Se presenta control si se logra una característica diferencial marcada
            td.text-center Sector comida rápida
    
    .tarjeta.bg8.p-3.mb-5(data-aos="flip-up")
      .row.justify-content-center.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema3/img11.svg", alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0 Estos conceptos se explican con mayor profundidad en el documento anexo Capítulo 5 del libro Economía y turismo de Mochón.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/anexo3.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 <em>Benchmarking</em>, concepto, características y herramientas
    
    .row.justify-content-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img.mt-4(src='@/assets/curso/tema3/img13.png', alt="Imagen decorativa")
      .col-lg-6(data-aos="fade-left")
        p El <em>benchmarking</em> o "evaluación comparativa" ocurre alrededor del mundo, en múltiples industrias y en la vida diaria. Seguramente cuando va a hacer una compra, antes de comprar, primero investiga un poco y compara los productos en cuanto a características, precio y calidad, esto en esencia es <em>benchmarking</em>. Esta disciplina es muy relevante en la industria turística, donde constituye la base de trabajo para la analítica de desempeño, el <em>business intelligence</em> y el <em>revenue management.</em>
        .cajon.color-secundario.p-4.mb-4.mt-4.fondo1
          p.mb-0 El <em>benchmarking</em> se puede definir como el proceso ordenado y sistemático de recopilar, crear, comparar y analizar indicadores clave de desempeño de su empresa en relación con la competencia. El proceso de <em>benchmarking</em> en la industria hotelera se basa en datos históricos y crea tendencias que ayudan a entender el mercado y el contexto en el que se opera.
        p.mb-0 Como se mencionó el <em>benchmarking</em> está presente en muchas industrias, pero se tomará la industria hotelera como marco de referencia para describir y entender sus características. Es oportuno mencionar que el referente mundial en <em>benchmarking</em> hotelero es la compañía STR (acrónimo de Smith Travel Research) que posee la base de datos históricos más completa del sector hotelero y como explican en su página web #[a(href="https://str.com/"  target='_blank') https://str.com] proporcionan datos confidenciales, precisos y aplicables, por medio de reportes integrales que permiten a los clientes elaborar estrategias y competir dentro de sus mercados.
   
    p(data-aos="fade-right") Para contextualizar y resumir el <em>benchmarking</em> la siguiente figura ofrece una descripción de sus principales características.
    
    .ampliarambos.fondo12.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-10.py-5
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Figura 5. 
            span Características del #[em benchmarking]
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/tema3/img15.svg', alt="Muestra texto de características del benchmarking:<br>Es un proceso técnico y sistemático de análisis de datos, que proporciona un punto de referencia para analizar el rendimiento<br>Es un procedimiento de investigación, que debe ser continuo y que proporciona datos relevantes para la toma de decisiones.<br>Consiste en realizar una comparación del desempeño (KPI - Key Performance Indicator) propios con respecto a otros hoteles (set competitivo), que se establecen bajo parámetros preestablecidos (ubicación, el precio, los servicios que ofrece, las acciones de marketing que realiza).<br>Una vez realizadas las comparaciones, el siguiente paso consistiría en trazar estrategias en pos de mejorar el rendimiento propio.<br>Luego se debe monitorear el desempeño y de ser necesario corregir la estrategia para continuar con el ciclo.")
    
    .row.justify-content-center.align-items-center.fondo13.ampliarambos.p-5
      .col-lg-6.col-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img17.png', alt="Imagen decorativa")
      .col-lg-6.mb-4
        p(data-aos="fade-left") Es claro que medir y comparar el desempeño es un factor relevante en cualquier empresa. Esto no es distinto en la industria turística, en ella los indicadores clave de desempeño se aplican en las mediciones de rendimiento en operación, comercialización y mercadeo. Ahora tomando como referencia el <em>benchmarking</em> de la industria hotelera para medir se puede decir que los indicadores clave de desempeño de la industria son:
        ul.lista-ul
          li(data-aos="fade-left")
            i.fas.fa-check(style="color: #ED7D41")
            p.mb-0 Índice de penetración de mercado - <span style="color:#EB6F2D!important; font-weight:bold;">MPI</span> (Market Penetration Index) o Índice de ocupación.
          li(data-aos="fade-left")
            i.fas.fa-check(style="color: #ED7D41")
            p.mb-0 Índice medio de precio - <span style="color:#EB6F2D!important; font-weight:bold;">ARI</span> (Average Rate Index) o Índice de tarifa promedio.
          li(data-aos="fade-left")
            i.fas.fa-check(style="color: #ED7D41")
            p.mb-0 Índice de ingreso generado - <span style="color:#EB6F2D!important; font-weight:bold;">RGI</span> (Revenue Generation Index) o Indice de RevPar.
      .col-lg-6.order-lg-1.order-2
        p(data-aos="fade-right") Estos índices se generan en la comparación del #[span.etiqueta #[b desempeño propio vs. el desempeño del set competitivo]] y referido a los tres indicadores clave del desempeño hotelero.
        ul.lista-ul
          li(data-aos="fade-right")
            i.fas.fa-check(style="color: #ED7D41")
            p.mb-0 Porcentaje de ocupación.
          li(data-aos="fade-right")
            i.fas.fa-check(style="color: #ED7D41")
            p.mb-0 Tarifa promedio (ADR).
          li(data-aos="fade-right")
            i.fas.fa-check(style="color: #ED7D41")
            p.mb-0 <em>RevPar</em>.
        p(data-aos="fade-right") La preocupación por medir y comparar resultados, como ya se mencionó es un hecho subyacente a todas las industrias. Y ahora que se está inmerso en un mundo regido por los datos, la siguiente pregunta que se debe contestar es qué herramienta se debe utilizar para este análisis. La respuesta no es sencilla, ya que como se mencionó, las comparativas y mediciones se aplican en todos los niveles de las industrias (operativo, comercial, y de mercadeo). 
        p.mb-0(data-aos="fade-right") Dicho esto, se puede mencionar que existen herramientas <em>(software)</em> que permiten captar, organizar y analizar datos a gran escala, que se podrían utilizar de acuerdo con la necesidad específica. Por ahora solo se menciona.
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img18.png', alt="Imagen decorativa")
    
    .row.justify-content-center.mb-5
      .col-lg-5.mb-lg-0.mb-4(data-aos="fade-right")
        .bg3.p-4.h-100
          .row.align-items-center
            .col-lg-2
              img.tamimg(src='@/assets/curso/tema3/img19.svg', alt="Imagen decorativa")
            .col-lg-8
              p.mb-0 #[b En #[em marketing digital]]: Google trends, Alexa, SEMRush
      .col-lg-5(data-aos="fade-left")
        .bg3.p-4.h-100
          .row.align-items-center
            .col-lg-2
              img.tamimg(src='@/assets/curso/tema3/img19.svg', alt="Imagen decorativa")
            .col-lg-8
              p.mb-0 #[b En Hotelería]: STAR (STAR Report)
    
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .tarjeta.bg6.p-4
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/img17.svg", alt="Imagen decorativa")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Para una mejor comprensión respecto al tema de <em>Introducing dSTAR</em> se recomienda que consulte el siguiente video, en el que podrá aprender más sobre este tema, y lo encuentra en el siguiente enlace: 
                .col-lg-3
                  a.boton.me-3.indicador__container(
                    :href="('https://www.youtube.com/watch?v=NfUUQ5dir6c')"
                    target="_blank"
                    type="application/pdf"
                    @mouseover="mostrarIndicador = false"
                  )
                    span Ver video
                    i.fas.fa-play
                    .indicador--click(v-if="mostrarIndicador")

    separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.6 La segmentación de mercados 
    
    .row.justify-content-center.align-items-center.fondo13.ampliarambos.p-5.mb-5
      .col-lg-6.order-lg-1.order-2.mb-4(data-aos="fade-right")
        p.mb-3 También conocida como segmentación de clientes o segmentación de audiencias #[span.etiqueta es un método por el cual se pueden dividir a los clientes potenciales en distintos grupos, los cuales permiten que las empresas puedan enviar mensajes personalizados a las audiencias correctas].
        p.mb-3 De manera general, segmentar es subdividir un mercado en subgrupos homogéneos de clientes, que demandan los mismos productos, tienen hábitos de compra similares y cumplen las siguientes condiciones:
        ul.lista-ul
          li
            i.fas.fa-check(style="color: #ED7D41")
            p.mb-0 Que sea medible.
          li
            i.fas.fa-check(style="color: #ED7D41")
            p.mb-0 Que sea accesible.
          li
            i.fas.fa-check(style="color: #ED7D41")
            p.mb-0 Que sea significativo.
          li
            i.fas.fa-check(style="color: #ED7D41")
            p.mb-0 Que sea accionable.
      .col-lg-6.col-10.order-lg-2.order-1.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img20.png', alt="Imagen decorativa")
      .col-12.order-3
        p.mb-0 A continuación podrá encontrar cuáles son los 5 pasos para implementar una estrategia de segmentación de mercados, los cuales permiten acertar de manera precisa en la venta de productos en el mercado que sea de interés, según el producto que desea ofrecer:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img.mt-4(src='@/assets/curso/tema3/img21.png', alt="Imagen decorativa")
      .col-lg-6(data-aos="fade-left")
        LineaTiempoD
          p(numero="1" titulo="Defina su mercado") En este punto de la segmentación de mercados debe enfocarse en descubrir qué tan grande es el mercado, dónde encaja su marca y si sus productos tienen la capacidad de solucionar lo que promete.
          p(numero="2" titulo="Segmente  su mercado") Este paso consiste en elegir cuál de los tipos de segmentación de mercado es el que más se adecua a su marca.
          p(numero="3" titulo="Comprenda su mercado") Realice a sus clientes las preguntas adecuadas, dependiendo del tipo de segmentación de mercados que eligió. Debe conocer a su público objetivo detalladamente. Puede utilizar encuestas <em>online</em> para obtener sus respuestas.
          p(numero="4" titulo="Construya su segmento de clientes") Después de recolectar las respuestas, es necesario realizar un análisis de datos para crear segmentos dinámicos únicos para su marca.
          p(numero="5" titulo="Ponga a prueba su estrategia") Asegúrese de haber interpretado correctamente los datos de su encuesta, poniéndolos a prueba con su público objetivo. Esto le ayudará a revisar nuevamente sus estrategias de segmentación de mercados y hacer los cambios necesarios. 
    
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .cajon.color-secundario.fondo1.p-4
          .row.align-items-center
            .col-lg-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/img20.svg', alt="Imagen decorativa" style="width: 90px").m-auto
            .col
              p.mb-0 En síntesis, la segmentación del mercado debe permitir clasificar y entender a los diferentes tipos de clientes, determinando sus necesidades y motivaciones puntuales, para poder crear propuestas de valor específicas para cada grupo significativo y medir sus resultados en forma desagregada en pos del resultado final.
    
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
