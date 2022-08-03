<template>
<!--Titulo-->
<div class="q-pa-md">
  <div class="q-col-gutter-md row items-start justify-center">
    <div class="col-12"><img class="fit" src="../assets/analitica.png"/></div>
  </div>
</div>
<!--Análitica-->
<div class="q-pa-md">
  <div class="q-col-gutter-md row items-start justify-center">
    <div class="col-12"><img class="fit" src="../assets/analitica2.png"/></div>
  </div>
</div>
<!--Rep. Central-->
<br>
<div class="q-pa-md">
  <div class="q-col-gutter-md row items-start justify-left">
    <div class="col-md-4 offset-md-1">
      <br>
      <br>
      <q-card-section class="text-dark">
        <div class="text-h5 text-secundary">Repositorio Central</div>
        <br>
        <div class="text-h6 text-secundary">
        Gran infraestructura de base de datos que reúne, gestiona y almacena conjuntos de datos variables para análisis, distribución e informes.
        </div>
      </q-card-section>
    </div>
    <div class="col-md-7">
      <div class="text-h6 text-secundary">Repositorios Centrales Institucionales</div>
      <img class="fit" src="../assets/BD-RepositoriosInstitucionales.png"/></div>
  </div>
</div>
<!--Repos Inst.-->
<div class="q-pa-md">
  <div class="q-col-gutter-md row items-start justify-left">
    <div class="col-md-9 offset-md-1"><img class="fit" src="../assets/BD-RepositoriosInstitucionalesv2.png"/></div>
  </div>
</div>
<!--Arqui Inst-->
<div class="q-pa-md">
  <div class="q-col-gutter-md row items-start justify-left">
    <div class="col-md-9 offset-md-2"><img class="fit" src="../assets/arquitecturaBI.png"/></div>
  </div>
</div>
<!--ProcesoDataLake-->
<div class="q-pa-md">
  <div class="q-col-gutter-md row items-start justify-left">
    <div class="col-md-12">
      <img class="fit" src="../assets/BD-ProcesoDataLake.png"/></div>
  </div>
</div>
<!--5 pasos-->
<div class="q-pa-md">
  <div class="q-col-gutter-md row items-start justify-left">
    <div class="col-md-11 offset-md-1"><img class="fit" src="../assets/analitica3.png"/></div>
  </div>
</div>
<!--BI-->
<br>
<div class="q-pa-md">
  <div class="q-col-gutter-md row items-start justify-left">
    <div class="col-md-4 offset-md-1">
      <br>
      <img class="fit" src="../assets/domYAnalisis-BI.png"/></div>
    <div class="col-md-4 offset-md-1">
      <br>
      <q-card-section class="text-dark">
        <div class="text-h5 ">Inteligencia de Negocio</div>
        <br>
        <div class="text-h6 text-secundary">
        <q-icon name="donut_small"/><space/>Herramientas para la gestión de datos
        </div>
        <space/>
        <div class="text-body1 text-secundary">
        Permiten desde la depuración y estandarización de datos de procedencia diversa hasta su extracción, transformación y traslado a un determinado sistema.
        </div>
        <br>
        <div class="text-h6 text-secundary">
        <q-icon name="bubble_chart"/><space/>Aplicaciones para descubrir nuevos datos
        </div>
        <space/>
        <div class="text-body1 text-secundary">
        Permiten recopilar y evaluar nueva información (data mining o minería de datos), y aplicar sobre esa información nueva o sobre la ya disponible técnicas de análisis predictivo para realizar proyecciones de futuro.
        </div>
        <br>
        <div class="text-h6 text-secundary">
        <q-icon name="data_saver_off"/><space/>Herramientas de reporting
        </div>
        <space/>
        <div class="text-body1 text-secundary">
        Una vez recopilada y tratada toda esa información preexistente o nueva, ayudan a las empresas a visualizarla de manera gráfica e intuitiva. También sirven para integrarla en cuadros de mando que midan si se cumplen o no determinados KPIs, o pueden incluso generar todo tipo de informes de reporting.
        </div>
      </q-card-section>
    </div>
  </div>
</div>
<br>
<q-card class="col-2 q-ma-sm q-my-auto q-pl-sm">
  <img class="fit" src="../assets/footer.png"/>
</q-card>
</template>
<script>
import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'anaData'
  })
</script>
