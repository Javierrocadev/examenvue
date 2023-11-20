<template>
    <div>
        <h1>Cubos</h1>
        <img src="./../assets/images/loading.gif" 
            v-if="status == false"/>
        <table v-else class="table table-bordered">
            <thead>
                <tr>
                    <th>Id cubo</th>
                    <th>Nombre</th>
                    <th>Modelo</th>
                    <th>Marca</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cubo in cubos" :key="cubo">
                    <td>{{cubo.idCubo}}</td>
                    <td>{{cubo.nombre}}</td>
                    <td>{{cubo.modelo}}</td>
                    <td>{{cubo.marca}}</td>
                    <td>{{cubo.marca}}</td>
                    <td><img style="height: 100px;" :src="cubo.imagen" /></td>
                   
                    
                        <!-- <router-link class="btn btn-warning"
:to="'/details/' + cubo.idDepartamento + '/' + cubo.nombre + '/' + cubo.localidad">
                            Details
                        </router-link>
                        <router-link class="btn btn-info"
                        :to="'/update/' + cubo.idDepartamento">
                            Edit
                        </router-link>
                        <router-link :to="'/delete/' + cubo.idDepartamento"
                        class="btn btn-danger">
                            Delete
                        </router-link> -->
                    
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
// import ServiceDepartamentos from './../services/ServiceDepartamentos';
import ServiceCubos from './../services/ServiceCubos'
const service = new ServiceCubos();

    export default {
        name: "DepartamentosComponent",
        mounted() {
            service.getCubos().then(result => {
                this.cubos = result;
                this.status = true;
            })
        },
        data() {
            return {
                cubos: [], 
                status: false
            }
        }
    }
</script>