<template>
<!--Dominio de Datos-->
<br>
<div class="q-pa-md">
  <div class="q-col-gutter-md row items-start justify-left">
    <div class="col-md-13 offset-md-0"><img class="fit" src="../assets/domDatos.png"/></div>
  </div>
</div>
<!--Imagen de Converencia-->
<br>
<div class="q-pa-md">
  <div class="q-col-gutter-md row items-start justify-left">
    <div class="col-md-4 offset-md-1"><img class="fit" src="../assets/DiagramaSistema-Convergencia_Dominio.png"/></div>
    <div class="col-5 offset-md-1 col-sm-4">
      <br>
      <br>
      <br>
      <br>
      <q-card-section class="text-dark">
        <div class="text-h4 text-secundary">Dominio de Datos</div>
        <br>
        <br>
        <div class="text-subtitle1 text-secundary">
        Los dominios de datos son categorías de alto nivel de datos institucionales con el fin de asignar responsabilidades por los datos.</div>
        <div class="text-subtitle1 text-secundary">
        Los dominios de datos ayudan a obtener una imagen clara de los datos que deben administrarse.
        </div>
      </q-card-section>
    </div>
  </div>
</div>
<!--Desc Derecho 360-->
<div class="q-pa-md">
  <div class="q-col-gutter-md row items-start justify-left">
    <div class="col-md-9 offset-md-1">
    <img class="fit" src="../assets/domDatos3.png"/>
    </div>
  </div>
</div>
<!--Imagen de Derecho360-->
<br>
<!--Desc Derecho 360-->
<div class="q-pa-md">
  <div class="q-col-gutter-md row items-start justify-center">
    <div class="col-md-10">
    <img class="fit" src="../assets/domDatos4.png"/>
    </div>
  </div>
</div>
<!--Space-->
<br>
<div class="q-pa-md">
  <div class="q-col-gutter-md row items-start justify-center">
    <div class="col-12">
      <q-card style="box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);">
        <img  src="../assets/space.png"/>
      </q-card>
    </div>
  </div>
</div>
<!--MacroProcesoDerecho-------------->
<br>
<div class="row" >
  <!-------1ra Sección-->
  <div class="offset-md-0">
    <br>
    <br>
    <br>
    <br>
    <br>
    <q-btn label="Asignación e Incorporación" color="primary" @click="asig = true" style="padding: 7px 10px"/>
    <q-dialog
    v-model="asig"
    >
    <q-card style="width: 500px">
      <q-card-section>
        <div class="text-h6" style="text-align: center">Asignación e Incorporación</div>
      </q-card-section>
      <q-card-section>
        <div class="text-subtitle1 ">Datos de Entrada</div>
        <div class="text-body2 text-weight-medium">
          Datos Personales de entrada:
          <div class="text-body2 text-weight-light">
            <div class="text-body2 text-weight-light">CURP.</div>
            <div class="text-body2 text-weight-light">Correo Electrónico.</div>
          </div>
        </div>
        <div class="text-body2 text-weight-medium">
          Datos Procesados:
          <div class="text-body2 text-weight-medium">Datos Personales:
            <div class="text-body2 text-weight-light">CURP.</div>
            <div class="text-body2 text-weight-light">Nombre.</div>
            <div class="text-body2 text-weight-light">Apellido Paterno.</div>
            <div class="text-body2 text-weight-light">Apellido Materno.</div>
            <div class="text-body2 text-weight-light">Sexo.</div>
            <div class="text-body2 text-weight-light">Fecha de nacimiento.</div>
            <div class="text-body2 text-weight-light">Correo Electrónico.</div>
          </div>
          <div class="text-body2 text-weight-medium">Datos Demográficos de Origen:
            <div class="text-body2 text-weight-light">Lugar de Nacimiento.</div>
            <div class="text-body2 text-weight-light">Nacionalidad.</div>
            <div class="text-body2 text-weight-light">Entidad.</div>
            <div class="text-body2 text-weight-light">Municipio o alcaldía.</div>
            <div class="text-body2 text-weight-light">C.P.</div>
            <div class="text-body2 text-weight-light">Estado.</div>
            <div class="text-body2 text-weight-light">Colonia.</div>
            <div class="text-body2 text-weight-light">C.P.</div>
            <div class="text-body2 text-weight-light">Calle.</div>
            <div class="text-body2 text-weight-light">Número exterior e interior.</div>
            <div class="text-body2 text-weight-light">Datos de Contactabilidad.</div>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="text-subtitle1">Datos de Salida</div>
        <div class="text-body2 text-weight-medium">
          Generando así la siguiente salida:
          <div class="text-body2 text-weight-light">
          Número de Seguridad Social (NSS).
          <div class="text-body2 text-weight-light">
          Mediante los siguientes canales: IMSS Digital, Correo y PDF.
          </div>
          </div>
        </div>
      </q-card-section>
      <!--Ok----->
      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="OK" v-close-popup />
      </q-card-actions>
    </q-card>
    </q-dialog>
    </div>
    <!--ram1-->
    <div class="q-col-gutter-md row items-start justify-left">
    <div class="col-md-7 offset-md-2"><img class="fit" src="../assets/ram1.png"/></div>
    </div>
    <!---------2da Sección-->
    <div class="offset-md-0">
      <q-btn label="Corrección de datos" color="primary" @click="correccion = true" style="padding: 7px 15px"/>
      <br>
      <br>
      <q-btn label="Consulta de Cotización" color="primary" @click="sisec = true" />
      <br>
      <br>
      <q-btn label="Asegurado" color="primary" @click="aseg = true" />
      <!--Corrección de datos----->
      <q-dialog
      v-model="correccion"
      >
      <q-card style="width: 500px">
        <q-card-section>
          <div class="text-h6" style="text-align: center">Corrección de Datos</div>
        </q-card-section>
        <q-card-section>
          <div class="text-subtitle1 ">Datos de Entrada</div>
          <div class="text-body2 text-weight-medium">
          Datos Personales de entrada:
          <div class="text-body2 text-weight-light">
            <div class="text-body2 text-weight-light">CURP.</div>
            <div class="text-body2 text-weight-light">Correo Electrónico.</div>
          </div>
        </div>
        <div class="text-body2 text-weight-medium">
          Datos Procesados:
          <div class="text-body2 text-weight-medium">Datos Personales:
            <div class="text-body2 text-weight-light">CURP.</div>
            <div class="text-body2 text-weight-light">Nombre.</div>
            <div class="text-body2 text-weight-light">Apellido Paterno.</div>
            <div class="text-body2 text-weight-light">Apellido Materno.</div>
            <div class="text-body2 text-weight-light">Sexo.</div>
            <div class="text-body2 text-weight-light">Fecha de nacimiento.</div>
            <div class="text-body2 text-weight-light">Correo Electrónico.</div>
          </div>
          <div class="text-body2 text-weight-medium">Datos Demográficos de Origen:
            <div class="text-body2 text-weight-light">Lugar de Nacimiento.</div>
            <div class="text-body2 text-weight-light">Nacionalidad.</div>
            <div class="text-body2 text-weight-light">Entidad.</div>
            <div class="text-body2 text-weight-light">Municipio o alcaldía.</div>
            <div class="text-body2 text-weight-light">C.P.</div>
            <div class="text-body2 text-weight-light">Estado.</div>
            <div class="text-body2 text-weight-light">Colonia.</div>
            <div class="text-body2 text-weight-light">C.P.</div>
            <div class="text-body2 text-weight-light">Calle.</div>
            <div class="text-body2 text-weight-light">Número exterior e interior.</div>
            <div class="text-body2 text-weight-light">Datos de Contactabilidad.</div>
          </div>
        </div>
        </q-card-section>
        <q-card-section>
        <div class="text-subtitle1">Datos de Salida</div>
        <div class="text-body2 text-weight-medium">
          Generando así la siguiente salida:
          <div class="text-body2 text-weight-light">
          Número de Seguridad Social (NSS).
          <div class="text-body2 text-weight-light">
          Datos correctos asociados en el NSS.
          </div>
          </div>
        </div>
        </q-card-section>
        <!--Ok----->
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
      </q-dialog>
      <!-- Fin Corrección de datos-->
      <!--Corrección de datos----->
      <q-dialog
      v-model="sisec"
      >
      <q-card style="width: 500px">
        <q-card-section>
          <div class="text-h6" style="text-align: center">Consulta de Cotización</div>
        </q-card-section>
        <q-card-section>
          <div class="text-subtitle1 ">Datos de Entrada</div>
          <div class="text-body2 text-weight-medium">
          Datos Personales de entrada:
          <div class="text-body2 text-weight-light">
            <div class="text-body2 text-weight-light">CURP.</div>
            <div class="text-body2 text-weight-light">NSS.</div>
            <div class="text-body2 text-weight-light">Correo Electrónico.</div>
          </div>
          </div>
        </q-card-section>
        <q-card-section>
        <div class="text-subtitle1 ">Datos de Salida</div>
        <div class="text-body2 text-weight-medium">
          Mostrando así, los siguientes datos
          <div class="text-body2 text-weight-medium">Datos Personales:
            <div class="text-body2 text-weight-light">Nombre, Apellido Paterno y Apellido Materno.</div>
            <div class="text-body2 text-weight-light">NSS.</div>
            <div class="text-body2 text-weight-light">CURP.</div>
            <div class="text-body2 text-weight-light">Fecha de emisión del reporte (dd-mm-aaaa).</div>
            <div class="text-body2 text-weight-light">Total de Semanas Cotizadas (Número entero).</div>
            <div class="text-body2 text-weight-light">Semanas descontadas.</div>
            <div class="text-body2 text-weight-light">Semanas Registradas.</div>
          </div>
        </div>
        <div class="text-body2 text-weight-medium">Mostrando así, historial laboral:
            <div class="text-body2 text-weight-light">Nombre del Patrón.</div>
            <div class="text-body2 text-weight-light">Registro Patronal.</div>
            <div class="text-body2 text-weight-light">Entidad Federativa.</div>
            <div class="text-body2 text-weight-light">Fecha de Alta y Baja (dd-mm-aaaa).</div>
            <div class="text-body2 text-weight-light">Salario Base de Cotización.</div>
            <div class="text-body2 text-weight-light">Cadena Original.</div>
            <div class="text-body2 text-weight-light">Sello Digital.</div>
            <div class="text-body2 text-weight-light">Secuencia Notarial.</div>
            <div class="text-body2 text-weight-light">Número de serie.</div>
          </div>
        </q-card-section>
        <!--Ok----->
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
      </q-dialog>
      <!-- Fin Corrección de datos-->
      <!--Asegurado----->
      <q-dialog
      v-model="aseg"
      >
      <q-card style="width: 500px">
        <q-card-section>
          <div class="text-h6" style="text-align: center">Asegurado</div>
        </q-card-section>
        <q-card-section>
          <div class="text-subtitle1 ">Datos de Entrada</div>
          <div class="text-body2 text-weight-medium">
          Datos Personales de entrada:
          <div class="text-body2 text-weight-light">
            <div class="text-body2 text-weight-light">RFC.</div>
            <div class="text-body2 text-weight-light">FIEL.</div>
          </div>
          </div>
        </q-card-section>
        <q-card-section>
        <div class="text-subtitle1 ">Datos de Salida</div>
        <div class="text-body2 text-weight-medium">Mostrando así, historial laboral:
            <div class="text-body2 text-weight-light">Nombre del Patrón.</div>
            <div class="text-body2 text-weight-light">Registro Patronal.</div>
            <div class="text-body2 text-weight-light">Entidad Federativa.</div>
            <div class="text-body2 text-weight-light">Fecha de Alta y Baja (dd-mm-aaaa).</div>
            <div class="text-body2 text-weight-light">Salario Base de Cotización.</div>
            <div class="text-body2 text-weight-light">Cadena Original.</div>
            <div class="text-body2 text-weight-light">Sello Digital.</div>
            <div class="text-body2 text-weight-light">Secuencia Notarial.</div>
            <div class="text-body2 text-weight-light">Número de serie.</div>
          </div>
        </q-card-section>
        <!--Ok----->
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
      </q-dialog>
      <!-- Fin Asegurado-->
    </div>
    <!--ram2-->
    <div class="q-col-gutter-md row items-start justify-left">
      <div class="col-md-8 offset-md-2">
      <br>
      <br>
      <br>
      <br>
      <img class="fit" src="../assets/ram2.png"/></div>
    </div>
    <!--3ra Sección-->
    <div class="offset-md-0">
      <br>
      <br>
      <br>
      <br>
      <q-btn label="Movimientos Afiliatorios" color="primary" @click="small = true" />
      <br>
      <br>
      <q-btn label="Consulta de Vigencia" color="primary" @click="small = true" />
      <br>
      <br>
      <q-btn label="Beneficios" color="primary" @click="small = true" />
      <q-dialog
      v-model="small"
      >
      <q-card style="width: 500px">
        <q-card-section>
          <div class="text-h6">Datos de Entrada</div>
        </q-card-section>
        <q-card-section>
          <div class="text-body2 text-weight-medium">
            Datos entrada Personales:
            <div class="text-body2 text-weight-light">
            CURP.
            Correo Electrónico.
            <div class="text-body2 text-weight-light">
            Validando los datos con RENAPO:
            CURP.
            Nombre.
            Apellido Paterno.
            Apellido Materno.
            Sexo.
            Fecha de Nacimiento.
            Lugar de Nacimiento.
            Nacionalidad.
            </div>
            </div>
          </div>
          <div class="text-body2 text-weight-medium">
            Datos personales de entrada validados con RENAPO:
            <div class="text-body2 text-weight-light">
            Entidad.
            Municipio.
            C.P.
            Estado.
            Municipio o Alcaldía.
            Colonia.
            Calle.
            Número Interior y Exterior.
            Subdelegación.
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="text-h6">Datos de Salida</div>
        </q-card-section>
        <q-card-section>
          <div class="text-body2 text-weight-medium">
            Generando así la siguiente salida:
            <div class="text-body2 text-weight-light">
            NSS
            <div class="text-body2 text-weight-light">
            Los medios por los cuales se obtiene son: IMSS Digital, Correo y PDF.
            </div>
            </div>
          </div>
        </q-card-section>
        <!--Ok----->
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
      </q-dialog>
      </div>
      <!--ram3-->
      <div class="q-col-gutter-md row items-start justify-left">
        <div class="col-md-8 offset-md-2">
        <br>
        <br>
        <br>
        <br>
        <img class="fit" src="../assets/ram3.png"/></div>
      </div>
    <!--4ta Sección-->
    <div class="offset-md-0">
      <br>
      <br>
      <br>
      <br>
      <q-btn label="Derechohabiente" color="primary" @click="small = true" />
      <q-dialog
      v-model="small"
      >
      <q-card style="width: 500px">
        <q-card-section>
          <div class="text-h6">Datos de Entrada</div>
        </q-card-section>
        <q-card-section>
          <div class="text-body2 text-weight-medium">
            Datos entrada Personales:
            <div class="text-body2 text-weight-light">
            CURP.
            Correo Electrónico.
            <div class="text-body2 text-weight-light">
            Validando los datos con RENAPO:
            CURP.
            Nombre.
            Apellido Paterno.
            Apellido Materno.
            Sexo.
            Fecha de Nacimiento.
            Lugar de Nacimiento.
            Nacionalidad.
            </div>
            </div>
          </div>
          <div class="text-body2 text-weight-medium">
            Datos personales de entrada validados con RENAPO:
            <div class="text-body2 text-weight-light">
            Entidad.
            Municipio.
            C.P.
            Estado.
            Municipio o Alcaldía.
            Colonia.
            Calle.
            Número Interior y Exterior.
            Subdelegación.
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="text-h6">Datos de Salida</div>
        </q-card-section>
        <q-card-section>
          <div class="text-body2 text-weight-medium">
            Generando así la siguiente salida:
            <div class="text-body2 text-weight-light">
            NSS
            <div class="text-body2 text-weight-light">
            Los medios por los cuales se obtiene son: IMSS Digital, Correo y PDF.
            </div>
            </div>
          </div>
        </q-card-section>
        <!--Ok----->
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
      </q-dialog>
      </div>
      <!--ram3-->
      <div class="q-col-gutter-md row items-start justify-left">
        <div class="col-md-8 offset-md-1">
        <br>
        <br>
        <br>
        <img class="fit" src="../assets/ram4.png"/></div>
      </div>
    <!--5ta Sección-->
    <div class="offset-md-0">
      <br>
      <q-btn label="Prestaciones Sociales" color="primary" @click="small = true" />
      <br>
      <br>
      <q-btn label="Prestaciones Económicas" color="primary" @click="small = true" />
      <br>
      <br>
      <q-btn label="Servicio" color="primary" @click="small = true" />
      <br>
      <br>
      <q-btn label="Atención a derecho habiente" color="primary" @click="small = true" />
      <br>
      <br>
      <q-btn label="Jubilación y Pensión" color="primary" @click="small = true" />
      <q-dialog
      v-model="small"
      >
      <q-card style="width: 500px">
        <q-card-section>
          <div class="text-h6">Datos de Entrada</div>
        </q-card-section>
        <q-card-section>
          <div class="text-body2 text-weight-medium">
            Datos entrada Personales:
            <div class="text-body2 text-weight-light">
            CURP.
            Correo Electrónico.
            <div class="text-body2 text-weight-light">
            Validando los datos con RENAPO:
            CURP.
            Nombre.
            Apellido Paterno.
            Apellido Materno.
            Sexo.
            Fecha de Nacimiento.
            Lugar de Nacimiento.
            Nacionalidad.
            </div>
            </div>
          </div>
          <div class="text-body2 text-weight-medium">
            Datos personales de entrada validados con RENAPO:
            <div class="text-body2 text-weight-light">
            Entidad.
            Municipio.
            C.P.
            Estado.
            Municipio o Alcaldía.
            Colonia.
            Calle.
            Número Interior y Exterior.
            Subdelegación.
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="text-h6">Datos de Salida</div>
        </q-card-section>
        <q-card-section>
          <div class="text-body2 text-weight-medium">
            Generando así la siguiente salida:
            <div class="text-body2 text-weight-light">
            NSS
            <div class="text-body2 text-weight-light">
            Los medios por los cuales se obtiene son: IMSS Digital, Correo y PDF.
            </div>
            </div>
          </div>
        </q-card-section>
        <!--Ok----->
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
      </q-dialog>
  </div>
</div>
<!--Fin del Macro---------->
<!--Space-->
<br>
<div class="q-pa-md">
  <div class="q-col-gutter-md row items-start justify-center">
    <div class="col-12">
      <q-card style="box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);">
        <img  src="../assets/space.png"/>
      </q-card>
    </div>
  </div>
</div>
<!--Inicio de la tabla De Cata Maestros-->
<div class="q-pa-md">
  <div class="row" >
    <div class="offset-md-8">
    <q-btn
      class="q-ml-sm"
      color="primary"
      icon-right="get_app"
      label="Exportar en Lista"
      no-caps
      @click="exportTable"
      style="padding: 10px 35px"
    />
  </div>
</div>
<br>
<div class="row" >
    <div class="col-10 offset-1">
    <q-table
      :grid="$q.screen.xs"
      :pagination="initialPagination"
      class="my-sticky-header-table"
      title="Catálogos Maestros de Datos"
      :rows="rows"
      row-key="name"
      :columns="columns"
      :filter="filter"
      show-header
      wrap-cells
      style="max-width: 2550px"
    >
    <!--Buscador-->
    <template v-slot:top-right>
      <q-input borderless dense debounce="300" v-model="filter" placeholder="Buscar">
          <template v-slot:append>
            <q-icon name="search"/>
          </template>
        </q-input>
    </template>
    <!--Poblado de la Tabla-->
    <template v-slot:body="props">
      <q-tr :props="props">
        <!--Cat-->
        <q-td key="desc" :props="props" style="max-width: 200px">
          {{ props.row.desc }}
        </q-td>
        <!--DefinCat-->
        <q-td key="def" :props="props" style="max-width: 600px">
          {{ props.row.def }}
        </q-td>
        <!--Campo-->
        <q-td key="camp" :props="props" style="max-width: 200px">
          {{ props.row.camp }}
        </q-td>
        <!--DefinCampo-->
        <q-td key="defCamp" :props="props" style="justify-left max-width: 200px">
          {{ props.row.defCamp }}
        </q-td>
      </q-tr>
    </template>
    </q-table>
</div>
</div>
</div>
<!--footer-->
<q-card class="col-2 q-ma-sm q-my-auto q-pl-sm" flat>
  <img class="fit" src="../assets/footer.png"/>
</q-card>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { exportFile, useQuasar } from 'quasar';
export default defineComponent({
  name: 'domDatos',
  setup () {
    const $q = useQuasar()
    return {
      //MacroProceso
      small: ref(false),
      asig: ref(false),
      correccion: ref(false),
      sisec: ref(false),
      aseg: ref(false),
      //---Paginador
      initialPagination: {
        sortBy: 'name',
        descending: false,
        //page: 4,
        rowsPerPage: 10
        // rowsNumber: xx if getting data from a server
      },
      filter: ref(''),
      columns,
      rows,
      exportTable(){
        // Formarto en .cvs
        const content = [columns.map(col => wrapCsvValue(col.label))].concat(
          rows.map(row => columns.map(col => wrapCsvValue(
            typeof col.field === 'function'
            ? col.field(row)
            : row[ col.field === void 0 ? col.name : col.field ],
            col.format
          )).join(','))
        ).join('\r\n')
        const status = exportFile(
          'catalogo-maestro-datos.csv',
          content,
          'text/csv'
        )
        //Mensaje de Error!
        if(status !== true){
          $q.notify({
            message: 'Busqueda indefinida, archivo no descargable...',
            color: 'negative',
            icon: 'warning'
          })
        }
      }
    }
  }
})
const columns = [
  {
    name: 'desc',
    sortable: true,
    required: true,
    label: 'Nombre del Catálogo Maestro',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`
  },
  { name: 'def', align: 'left', label: 'Descripción del Catálogo', field: 'def'},
  { name: 'camp', align: 'left', label: 'Nombre Lógico del Campo', field: 'def', sortable: true},
  { name: 'defCamp', label: 'Descripción del Campo', field: 'defCamp' }
]
function wrapCsvValue (val, formatFn) {
  let formatted = formatFn !== void 0
    ? formatFn(val)
    : val
  formatted = formatted === void 0 || formatted === null
    ? ''
    : String(formatted)
  formatted = formatted.split('"').join('""')
  /*
    Excel accepts \n and \r in strings, but some other CSV parsers do not
    Uncomment the next two lines to escape new lines
   */
  //.split('\n').join('\\n')
  //.split('\r').join('\\r')
  return `"${formatted}"`
}
const rows = [
  {
    desc: 'CUUMSP',
    def: 'Detalle de unidades médicas de primer, segundo, tercer nivel de atención y sus complementarias activas. Aquí se desglosa a las UMAA, ya que tienen una Clave Presupuestal independiente, la cual se usa en los sistemas de información, contiene todas las variables disponibles.',
    camp: 'Región',
    defCamp: 'Las delegaciones regionales comprenderán parte de uno o más estados. Ámbito geográfico, bajo el control técnico administrativo de un Comité Regional, constituido por Delegaciones y Unidades Médicas de Alta Especialidad funcionalmente integradas en la operación de los servicios institucionales de esa circunscripción.'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'CLUES  Salud',
    defCamp: '"Clave de Establecimientos de Salud: es un identificador único, consecutivo e intransferible que asigna la Secretaría de Salud a través de la Dirección General de Información en Salud de manera obligatoria a cada establecimiento de salud (entre los que se encuentran: unidades médicas, laboratorios, centros de diagnóstico, centros de tratamiento, oficinas administrativas, sean éstos fijos o móviles) que exista en el territorio nacional, sea público, privado o social, y con la cual se identifica toda la información reportada por el mismo a cada uno de los componentes del Sistema Nacional de Información en Salud."',
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Clave Personal',
    defCamp: '"Es un código alfanumérico de diez posiciones, correspondiente al departamento y que se identifica en el catálogo de claves departamentales del SIAP, la cual esta integrada por: - Entidad: Clave a dos dígitos que identifica a la Entidad a la que pertenece. - Órgano de Control o Tipo de Unidad : Clave a dos dígitos que identifica el Órgano de Control o Tipo de Unidad la que pertenece. - Número Progresivo : Clave a dos dígitos que identifica el número progresivo. - Departamento : Clave a cuatro dígitos que identifica el departamento al que pertenece. "'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Unidad de Información PREI',
    defCamp: '" Es la clave utilizada en el sistema PREI Millenium que identifica a las diferentes unidades médicas y administrativas que integran el IMSS, la cual se conforma de 6 dígitos: 2.- Unidad Operativa; 2.- Tipo de Unidad y 2.- Número consecutivo. "'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Clave Ubicación Admin',
    defCamp: '"Seis primeros dígitos de la Clave Presupuestal, sirve para integrar la SAI (Sistema de Abasto Institucional) Farmacia."'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Clave Presupuestal',
    defCamp: '"Clave única a doce dígitos utilizada anteriormente en el Sistema Contable Presupuestal, la cual está integrada por:                                                                                                                                                                                                                                                                              - Circunscripción (CI): Clave a dos dígitos que identifica a la Delegación o Unidad Operativa a la que pertenece la unidad de responsabilidad. - Localidad (LO) : Clave a dos dígitos que identifica la ubicación física o Municipio de la unidad de responsabilidad. - Inmueble (IN) : Clave a dos dígitos que identifica al número progresivo del inmueble, de la unidad de responsabilidad sea propio o ajeno. - Tipo de Servicio (TS) : Clave a dos dígitos que identifica al servicio que se presta en la unidad de responsabilidad. - Unidad Presupuestal (UP) :Clave a cuatro dígitos que identifica los diferentes niveles jerárquicos que conforman la estructura orgánica del IMSS, debiendo ser de Servicios Médicos, Sociales, Administrativos o de Previsión. "'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Clave Delegación o UMAE',
    defCamp: '"Clave a dos digítos asignada y utilizada en los sistemas de información en salud."'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Nombre Delegación o UMAE',
    defCamp: '"Sustantivo propio que identifica a la Delegación o UMAE."'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Relación Delegación-UMAE',
    defCamp: '"Nombre de la Delegación en donde existe alguna Unidad Médica de Alta Especialidad."'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Unidad Presupuestal',
    defCamp: '"Unidad Presupuestal (UP) :Clave a cuatro dígitos que identifica los diferentes niveles jerárquicos que conforman la estructura orgánica del IMSS, debiendo ser de Servicios Médicos, Sociales, Administrativos o de Previsión."'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Nivel de Atención',
    defCamp: '""Primer nivel de atención. Lo constituyen las Unidades de Medicina Familiar en donde se otorga atención médica integral y continua al paciente, pudiendo contar con Unidad Médica de Atención Ambulatoria; Segundo nivel de atención. Lo constituyen los hospitales generales de subzona, zona o regionales en donde se atiende a los pacientes, remitidos por los servicios de los distintos niveles de atención, de acuerdo a la zona que les corresponda, para recibir atención diagnóstica, terapéutica y de rehabilitación, de conformidad a la complejidad de su padecimiento, pudiendo contar con Unidad Médica de Atención Ambulatoria Tercer nivel de atención. Lo constituyen las Unidades Médicas de Alta Especialidad y sus Unidades Complementarias, que cuentan con la capacidad tecnológica y máxima resolución diagnóstica terapéutica."'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Denominación Unidad',
    defCamp: '"Descripción del Tipo de servicio y el número de la unidad"'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Tipo de Servicio',
    defCamp: '"Tipo de Establecimiento (TS) : Clave a dos dígitos que identifica al servicio que se presta en la unidad de responsabilidad. Ejemplo: 01"'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Descripción Tipo Servicio',
    defCamp: '"Descripción del Tipo de Servicio. Ejemplo: Hospital General de Zona"'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Número de Unidad',
    defCamp: '"Número consecutivo."'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Nombre Unidad',
    defCamp: '"Sustantivo propio que identifica a la unidad. Se obtiene en acuerdo con el Área Médica de la Delegación y corroborando en Google maps "'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Ubicación o Denominación',
    defCamp: '"Nombre de la unidad médica, compuesta del tipo de servicio, número consecutivo y nombre corto, usualmente se utiliza el municipio o el consecutivo de la OOAD"'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Dirección',
    defCamp: '"Domicilio geográfico, espacio al interior de una localidad o referido a una vía de comunicación que ocupa un inmueble (edificación) donde pueden establecerse una o más personas o unidades económicas, a fin de dar cumplimientoa sus obligaciones o derechos."'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Tipo de Vialidad',
    defCamp: '"Se refiere a la clasificación que se le da a la vialidad, en función del tránsito vehicular y/o peatonal. Ejemplo: Avenida, Calle, Calzada, entre otros."'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Nombre de Vialidad',
    defCamp: '"Sustantivo propio que identifica a la vialidad."'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Entre Vialidades',
    defCamp: '"Referencia de ubicación, entre que calles se ubica"'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Número Exterior',
    defCamp: '"Los caracteres alfanuméricos y símbolos que identifican una vivienda o establecimiento al interior de un inmueble, con número exterior designado."'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Tipo de Asentamiento',
    defCamp: '"El establecimiento de un conglomerado demográfico, con el conjunto de sus sistemas de convivencia, en un área físicamente localizada, considerando dentro de la misma los elementos naturales y las obras materiales que la integran."'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Nombre del Asentamiento',
    defCamp: '"Sustantivo propio que identifica al asentamiento."'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Código postal',
    defCamp: '"Número que identifica al código postal, constituido  por cinco digítos, obtenido de la información oficial de Correos de México."'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Clave Municipio o Delegación',
    defCamp: '"Clave geoestadística del INEGI del Municipio o Delegación."'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Municipio o Delegación',
    defCamp: '"Sustantivo propio que identifica al Municipio o Delegación."'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Clave Localidad',
    defCamp: '"Clave geoestadística del INEGI de la Localidad."'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Localidad',
    defCamp: '"Sustantivo propio que identifica la localidad."'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Clave Entidad Federativa',
    defCamp: '"Clave geoestadística del INEGI del Estado."'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Entidad Federativa',
    defCamp: '"Sustantivo propio que identifica al Estado."'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Clave Jurisdicción Sanitaria',
    defCamp: '"Clave númerica a dos dígitos asiganda por la Secretaría de Salud."'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Jurisdicción Sanitaria',
    defCamp: '"La Jurisdicción Sanitaria es una unidad técnico-administrativa desconcentrada por región de la Secretaría de Salud, que cuenta con recursos y facultades para otorgar atención médica a la población no asegurada, con el propósito de conducir adecuadamente las acciones del sector en su área de influencia."'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Latitud',
    defCamp: '" Distancia que existe entre un punto cualquiera y el Ecuador, medida sobre el meridiano que pasa por dicho punto. Combinado con la longitud, se puede expresar la posición de cualquier punto de la superficie de la Tierra."'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Longitud',
    defCamp: '" Son círculos máximos que pasan por los polos y se llaman meridianos. Combinado con la latitud, se puede expresar la posición de cualquier punto de la superficie de la Tierra."'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Inicio de Productividad',
    defCamp: '"Fecha en la que se da de alta en el Repositorio central de datos, DataMart Estadísticas Médicas, una vez que se entrega la documentación y se cumpla el cierre de información de cada mes (26 de cada mes)"'
  },
  {
    desc: 'CUUMSP',
    def: '',
    camp: 'Grado de Marginación',
    defCamp: '"Estimación y análisis del impacto global de las carencias de servicios que la población padece en las distintas unidades espaciales de México. Las coberturas de servicios medidos en la marginación miden algunas características que son derechos humanos (educación, vivienda adecuada e ingresos dignos) cuya privación incide en las oportunidades y condiciones materiales de vida de la población, pero también en las características de la estructura productiva de los municipios y las entidades federativas, lo cual repercute en el proceso de desarrollo."'
  },
  {
    desc: 'dic_delegacion',
    def: '',
    camp: 'cve_id_delegacion',
    defCamp: '---'
  },
  {
    desc: 'dic_delegacion',
    def: '',
    camp: 'des_deleg',
    defCamp: '---'
  },
  {
    desc: 'dic_delegacion',
    def: '',
    camp: 'anio_ini_oper',
    defCamp: '---'
  },
  {
    desc: 'dic_delegacion',
    def: '',
    camp: 'clave_delegacion',
    defCamp: '---'
  },
  {
    desc: 'dic_delegacion',
    def: '',
    camp: 'tip_delegacion',
    defCamp: '---'
  },
  {
    desc: 'dic_delegacion',
    def: '',
    camp: 'fec_registro_alta',
    defCamp: '---'
  },
  {
    desc: 'dic_delegacion',
    def: '',
    camp: 'fec_registro_baja',
    defCamp: '---'
  },
  {
    desc: 'dic_delegacion',
    def: '',
    camp: 'fec_registro_actualizado',
    defCamp: '---'
  },
  {
    desc: 'dic_delegacion',
    def: '',
    camp: 'domicilio_id',
    defCamp: '---'
  },
  {
    desc: 'dic_delegacion',
    def: '',
    camp: 'cve_ciz',
    defCamp: '---'
  },
  {
    desc: 'dic_delegacion',
    def: '',
    camp: 'fecha_carga',
    defCamp: '---'
  },
  {
    desc: 'dic_delegacion',
    def: '',
    camp: 'fecha_proceso',
    defCamp: '---'
  }
]
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
