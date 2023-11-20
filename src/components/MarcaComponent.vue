<template>
    <div>
      <h1>Cubos de:  {{ this.$route.params.marca }}</h1>
      <div v-for="cubo in cubos" :key="cubo">
        <h3>{{ cubo.nombre }}</h3>
        <p>Precio: {{ cubo.precio }}</p>
        <img :src="cubo.imagen" width="150" height="200"/>
        <router-link
          class="btn btn-info w-100"
          :to="'/comentariocubo/' + cubo.idCubo"
        >  ver detalles
        </router-link>
    </div>
      <!-- <hr class="border border-primary opacity-100" />
      <div v-if="personajes.length > 0">
        <router-link
          class="btn btn-danger w-100"
          :to="'/serie/' + this.$route.params.id"
        >
          Volver
        </router-link>
        <table class="table mt-3">
          <thead class="border-primary">
            <tr>
              <th>Personaje</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="person in personajes" :key="person">
              <td>{{ person.nombre }}</td>
              <td>
                <img :src="person.imagen" width="150" height="200" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <img v-else src="../assets/images/loading.gif" /> -->
    </div>
  </template>
  
  <script>
//   import ServiceSeries from "@/services/ServiceSeries";
  import ServiceCubos from "@/services/ServiceCubos";
  const service = new ServiceCubos();
  
  export default {
    name: "MarcaComponent",
    watch: {
      "$route.params.marca"(nextVal, oldVal) {
        if (nextVal != oldVal) this.getCubosMarca();
      },
    },
    data() {
      return {
        cubos: [],
      };
    },
    methods: {
      getCubosMarca() {
        this.cubos = [];
        let marca = this.$route.params.marca;
        service.getCubosMarca(marca).then((result) => {
          this.cubos = result;
        });
      },
    },
    mounted() {
      this.getCubosMarca();
    },
  };
  </script>
  