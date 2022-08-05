<template>
<!--y-->
<br>
<div class="q-pa-md">
  <div class="q-col-gutter-md row items-start justify-left">
    <div class="col-md-13 offset-md-0"><img class="fit" src="../assets/y.png"/></div>
  </div>
</div>
<!--yy-->
<br>
<div class="q-pa-md">
  <div class="q-col-gutter-md row items-start justify-left">
    <div class="col-md-13 offset-md-0"><img class="fit" src="../assets/yy.png"/></div>
  </div>
</div>
<!--yy-->
<br>
<div class="q-pa-md">
  <div class="q-col-gutter-md row items-start justify-left">
    <div class="col-md-13 offset-md-0"><img class="fit" src="../assets/yyy.png"/></div>
  </div>
</div>
<!--y2-->
<br>
<div class="q-pa-md">
  <div class="q-col-gutter-md row items-start justify-left">
    <div class="col-md-13 offset-md-0"><img class="fit" src="../assets/y2.png"/></div>
  </div>
</div>
<!--y3-->
<div class="q-pa-ms">
  <div class="q-col-gutter-md row items-start justify-center">
  <div class="col-md-5">
    <br>
    <br>
    <br>
    <br>
    <img class="fit" src="../assets/y3.png"/>
  </div>
    <div class="col-md-4">
      <br>
      <br>
      <q-card-section class="text-dark">
        <div class="text-h4 text-secundary">Guías y recursos para organizar tu viaje</div>
        <br>
        <div class="text-h6 text-secundary">
        Cada vez es más común encontrar viajeros que se alejan de los tours prediseñados para elegir sus propias rutas, medios de transporte y hoteles. Pero si es la primera vez que lo haces te toparás con tantos sitios web que puede ser confuso. A continuación te dejo los links de los sitios donde reservo mis viajes.</div>
      </q-card-section>
    </div>
  </div>
</div>





</template>
<script>
import { defineComponent, ref } from 'vue';
import { exportFile, useQuasar } from 'quasar';
export default defineComponent({
  name: 'domDatos',
  setup () {
    const $q = useQuasar()
    return {
      exportTable(){
      }
    }
  }
})
</script>
<style lang="sass">
.my-sticky-header-table
  /*Color para todas las letras*/
  color: #404040
  /*Tamanio para el titulo de la tabla*/
  .q-table__title
    font-size: 25px
  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /*Color para el header de la tabla*/
    background-color: #F8F3EC
  td:first-child
    /*Color para el la columna*/
    background-color: #FFFFFF
    color: #404040
    font-size: 13px
  thead tr th
    /*Cabeceras*/
    position: sticky
    z-index: 1
    font-size: 15px
  thead tr:first-child th
    top: 0
  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
</style>
