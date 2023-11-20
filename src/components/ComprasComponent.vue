<template>
    <div>
      <h1>Página compras</h1>
      <hr class="border border-danger opacity-100" />
 
     
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>fechaPedido</th>
            <th>idPedido</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cubo in compra" :key="cubo">
            <td>{{ cubo.idCubo }}</td>
            <td>{{ cubo.fechaPedido }}</td>
            <td>{{ cubo.idPedido }}</td>
          </tr>
        </tbody>
      </table>
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
        compra: [],
      };
    },
    mounted() {
        console.log(Global.token.response)
   
      service.getCompras(Global.token.response).then((result) => {
        this.compra = result;
        console.log(this.compra)
      });
    },
  };
  </script>