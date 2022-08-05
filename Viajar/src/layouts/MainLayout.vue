<template>
  <q-layout view="lHh Lpr lFf">
    <!--Menú-->
    <q-header elevated class="text-amber-14 bg-secondary" >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="text-accent"
        />
        <!--titulo-->
        <q-toolbar-title class="text-center">
          <div class="col-1 q-my-auto text-primary">Viajes TUN Naucalpan</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-dark">
      <!--Inicio del listado-->
      <q-list>
        <!--Icono de Hamburguesa-->
        <q-item-label class="text-right bg-secondary" header>
          <div class="col-1 text-h6 q-my-auto text-accent">x</div>
        </q-item-label>
        <br>
        <q-item clickable v-ripple class="text-subtitle1" to = "/#">
              <q-item-section avatar>
                <q-avatar rounded>
                  <q-icon class="text-grey-1" name="home"/>
                </q-avatar>
              </q-item-section>
              <q-item-section class="text-grey-1">Inicio</q-item-section>
        </q-item>
        <!--Referencia del Dominio de datos-->
        <q-item clickable v-ripple class="text-subtitle1" to = "/domDatos">
              <q-item-section avatar>
                <q-avatar rounded>
                  <q-icon class="text-grey-1" name="map"/>
                </q-avatar>
              </q-item-section>
              <q-item-section class="text-grey-1">Viajes</q-item-section>
        </q-item>
        <!--Referencia del Analítica de Datos-->
        <q-item clickable v-ripple class="text-subtitle1" to = "/anaData">
              <q-item-section avatar>
                <q-avatar rounded>
                  <q-icon class="text-grey-1" name="location_city"/>
                </q-avatar>
              </q-item-section>
              <q-item-section class="text-grey-1">Conociendo México</q-item-section>
        </q-item>
        <!--Referencia del Preguntas Frecuentes-->
        <q-item clickable v-ripple class="text-subtitle1" to = "/preguntas">
              <q-item-section avatar>
                <q-avatar rounded>
                  <q-icon class="text-grey-1" name="question_answer"/>
                </q-avatar>
              </q-item-section>
              <q-item-section class="text-grey-1">Contáctanos</q-item-section>
        </q-item>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          class="text-grey-1"
        />
      </q-list>
    </q-drawer>
  <!--Inicio del 'Routing de la página'-->
    <q-page-container>
      <router-view />
    </q-page-container>
  <!--Fin del 'Routing de la página'-->
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
const linksList = [
];
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'MainLayout',
  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
