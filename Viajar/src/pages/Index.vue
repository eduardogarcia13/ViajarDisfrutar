<template>
<br>
<div class="q-pa-ms">
  <div class="q-col-gutter-md row items-start justify-center">
  <div class="col-md-5 offset-md-1">">
    <img class="fit" src="../assets/x.jpg"/>
  </div>
    <div class="col-md-4">
      <br>
      <br>
      <q-card-section class="text-dark">
        <div class="text-h4 text-secundary">¿Qué son los viajes TUN Naucalpan?</div>
        <br>
        <div class="text-h6 text-secundary">
        Los viajes TUN Naucalpan son orientados a que todas las personas puedan conocer un México que se ha llegado a perder, desde
        sus pueblos mágicos hasta conocer la comida tradicional de los lugares por visitar.
        </div>
      </q-card-section>
    </div>
  </div>
</div>
<br>
<div class="q-pa-md">
  <div class="q-col-gutter-md row items-start justify-left">
    <div class="col-md-2 offset-md-2">
        <br>
        <div class="text-h4 text-secundary justify-center">
          Conoce México
          </div>
        <br>
        <iframe width="560" height="315"
        src="https://www.youtube.com/embed/Wn0zy6QfnjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
    </div>
    <div class="col-md-4 col-sm-4 offset-md-3">
      <div class="row justify-center q-mb-md">
      <q-btn-toggle
        swipeable
        top
        inline
        v-model="slide2"
        :options="[
          { label: 'Misión', value: 'mi' },
          { label: 'Visión', value: 'vi' }
        ]"
        />
      </div>
      <q-carousel
      v-model="slide2"
      transition-prev="slide-right"
      transition-next="slide-left"
      padding
      >
      <q-carousel-slide name="mi" class="column no-wrap flex-center">
        <div class="q-mt-md text-center text-body1">
        Nuestra misión es que los estudiantes y maestros del TUN tengan la visión de conocer nuestro territorio mexicano consolidando la información que se encuentra disponible mediante la pagina.
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="vi" class="column no-wrap flex-center">
        <div class="q-mt-md text-center text-body1">
          Fomentar una cultura mexicana a través del conocimiento cultural y terriotarial de la republica mexicana.
        </div>
      </q-carousel-slide>
    </q-carousel>
    </div>
  </div>
</div>
<br>
<div class="q-pa-md">
  <div class="q-col-gutter-md row items-start justify-left">
    <div class="col-md-4 offset-md-2"><img class="fit" src="../assets/xx.jpg"/></div>
    <div class="col-md-4 offset-md-1">
      <br>
      <br>
      <q-card-section class="text-dark">
        <div class="text-h4 text-secundary">Vive una aventura en alguno de nuestro viejes grupales</div>
        <br>
        <div class="text-h6 text-secundary">
        Puede pedir información en ventanilla sobre las becas y promociones correspondiente a la disponibilidad del tour para conocer distintos lugeres de la republica
        </div>
      </q-card-section>
    </div>
  </div>
</div>
</template>
<script>
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    name: 'PageIndex',
    setup () {
    return {
      slide: ref('style'),
      slide2: ref('mi'),
      titulo1: 'Marco de Gobierno de Datos',
      lorem1: 'Describe las funciones, responsabilidades, procesos y métricas empleados para la supervisión de la Gestión de Datos, además del funcionamiento, estructura y modelo de Gobierno de datos.',
      titulo2: 'Acuerdo de Intercambio de Datos (DSA)',
      lorem2: 'Este acuerdo de intercambio de datos, comunica la comprensión mutua entre los datos de origen (fuentes de datos) y las transmisiones o procesos de carga asociados, proporcionados y requeridos por los usuarios y consumidores de datos del Instituto, para apoyar los requerimientos del negocio y del manejo de datos.',
      titulo3: 'Documento de Roles y Dominio',
      lorem3: 'Definición de los roles y las responsabilidades establecidos por Gobierno de Datos; de las personas involucradas en las actividades de la gestión del dato durante su ciclo de vida, así como de los comités y grupos de trabajo involucrados, que establecen la propiedad de los datos y toman las decisiones sobre su uso.',
      titulo4: 'Mandato de Dominio de Datos',
      lorem4: 'Documento normativo que establece y oficializa los compromisos y responsabilidades adherentes de los roles asignados en Gobierno de Datos a los integrantes de los grupos de trabajo de dominio de un dominio específico. Así como la aceptación de dichos compromisos, responsabilidades y participación en conjunto, que estos roles requieren.'
    }
  }
})
</script>
