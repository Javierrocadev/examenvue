<template>
    <div>
      <h1>comentarios del cubo :  {{ this.$route.params.id }}</h1>

      
      <div v-for="comentario in cubos" :key="comentario">
        <hr/>
        <h3>{{ comentario.comentario }}</h3>
        <p>Precio: {{ comentario.fechaComentario }}</p>

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
        if (nextVal != oldVal) this.getCubosComentario();
      },
    },
    data() {
      return {
        cubos: [],
      };
    },
    methods: {
      getCubosComentario() {
        this.cubos = [];
        let id = this.$route.params.id;
        service.getCubosComentario(id).then((result) => {
          this.cubos = result;
        });
      },
    },
    mounted() {
      this.getCubosComentario();
    },
  };
  </script>
  