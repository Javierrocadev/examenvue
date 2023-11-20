<template>
    <div>

        <h1>Página perfil</h1>
        <hr class="border border-danger opacity-100" />
        <h1>perfil:{{ perfil.nombre }}</h1>
        <h1>usuario: {{ perfil.idUsuario }} </h1>
        <h1>password: {{ perfil.pass }} </h1>
   
    </div>
  </template>
  
  <script>
  import Global from "@/Global";
  import ServiceAuth from "../services/ServiceAuth";
  const service = new ServiceAuth();
  
  export default {
    name: "PerfilComponent",
    data() {
      return {
        perfil: [],
      };
    },
    mounted() {
        console.log(Global.token.response)
   
      service.getPerfil(Global.token.response).then((result) => {
        this.perfil = result;
        console.log(this.perfil)
      });
    },
  };
  </script>