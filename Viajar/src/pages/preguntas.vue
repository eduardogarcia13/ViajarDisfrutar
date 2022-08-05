<template>

<br>
<div class="q-pa-ms">
  <div class="q-col-gutter-md row items-start justify-center">
  <div class="col-md-5 offset-md-1">">
    <img class="fit" src="../assets/di.png"/>
  </div>
    <div class="col-md-4">
      <br>
      <br>
      <q-card-section class="text-dark">
        <div class="text-h4 text-secundary">Mejor lugar para alojarte</div>
        <br>
        <div class="text-h6 text-secundary">
        Si lo que buscas son las recomendaciones de las mejores zonas para alojarte, a continuación te dejo los principales destinos del mundo.
        </div>
      </q-card-section>
    </div>
  </div>
</div>
<br>
<div class="q-col-gutter-md row items-start justify-center">
  <div class="col-md-9 offset-md-1">
    <img class="fit" src="../assets/xcv.png"/>
  </div>
</div>
<br>
<div class="q-col-gutter-md row items-start justify-center">
  <div class="col-md-9 offset-md-1">">
    <img class="fit" src="../assets/con.png"/>
  </div>
</div>

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
