<template>
<q-card class="col-2 q-ma-sm q-my-auto q-pl-sm">
  <img class="fit" src="../assets/preguntas.png"/>
</q-card>
<!--GD / Misión y Visión-->
<br>
<div class="q-pa-md">
  <div class="q-col-gutter-md row items-start justify-left">
    <div class="col-md-2 justify-left offset-md-1">
        <br>
        <div class="text-h5 text-secundary">Gobierno de Datos</div>
        <br>
        <img class="fit" src="../assets/loquesi.png"/>
    </div>
    <div class="col-md-6 col-sm-6 offset-md-2">
      <div class="row justify-center q-mb-md">
      <q-btn-toggle
        swipeable
        top
        inline
        v-model="slide2"
        :options="[
          { label: 'Lo que sí de Gobierno de Datos', value: 'mi' },
          { label: 'Lo que no de Gobierno de Datos', value: 'vi' }
        ]"
        />
      </div>
      <q-carousel
      v-model="slide2"
      transition-prev="slide-right"
      transition-next="slide-left"
      padding
      >
      <q-carousel-slide name="mi" class="column no-wrap flex-left">
        <div class="q-mt-md text-left text-body1">o Desarrolla y ejecuta la estrategia de datos de todo el instituto.</div>
        <div class="q-mt-md text-left text-body1">o Identifica e implementa un marco de gobernanza de datos.</div>
        <div class="q-mt-md text-left text-body1">o Supervisar el desarrollo del programa de gobierno de datos institucional.</div>
        <div class="q-mt-md text-left text-body1">o Define y monitorea políticas y estándares de datos.</div>
        <div class="q-mt-md text-left text-body1">o Realiza una evaluación de madurez de la gestión de datos en la organización para descubrir relaciones entre los datos y el negocio.</div>
        <div class="q-mt-md text-left text-body1">o Ayuda a resolver problemas con los datos.</div>
      </q-carousel-slide>
      <q-carousel-slide name="vi" class="column no-wrap flex-left">
        <div class="q-mt-md text-left text-body1">o No determina las actividades que deben emprenderse para gestionar datos como un verdadero activo.</div>
        <div class="q-mt-md text-left text-body1">o No define quién en la organización se ocupa de cada actividad.</div>
        <div class="q-mt-md text-left text-body1">o No determina las responsabilidades y derechos de decisión de las personas que se encargan de los datos.</div>
        <div class="q-mt-md text-left text-body1">o No es el dueño de los datos.</div>
        <div class="q-mt-md text-left text-body1">o No da reglas de negocio y de calidad.</div>
        <div class="q-mt-md text-left text-body1">o No toma decisiones de forma autómata o arbitraria sobre los datos.</div>
      </q-carousel-slide>
    </q-carousel>
    </div>
  </div>
</div>
<!--Imagen de PreguntasF-->
<br>
<br>
<div class="q-pa-md">
  <div class="q-col-gutter-md row items-start justify-center">
    <div class="col-12">
      <q-card>
        <img  src="../assets/preguntasF.png"/>
      </q-card>
    </div>
  </div>
</div>
<!--Card de PreguntasF-->
<div>
  <q-card flat bordered>
    <q-card-section horizontal class="container">
      <q-card-section class="col-4">
        <br>
        <br>
        <br>
        <h5 class="text-weight-light">Contáctanos</h5>
        <div class="text-body1 text-weight-light">gobierno.datos@imss.gob.mx</div>
      </q-card-section>
      <q-img
        class="col-3"
        src="../assets/contacta.png"
      />
    </q-card-section>
    </q-card>
</div>
<!--footer-->
<br>
<q-card class="col-2 q-ma-sm q-my-auto q-pl-sm">
  <img class="fit" src="../assets/footer.png"/>
</q-card>
</template>
<script>
import { defineComponent, ref } from 'vue';
  export default defineComponent({
    name: 'preguntas',
    setup () {
    return {
    slide2: ref('mi'),
    }
  }
})
</script>
<style>
.container {
  widows: 400px;
  height: 300px;
  display: flex;
 justify-content: center;
}
</style>
