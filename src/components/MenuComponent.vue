<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="./../assets/logo.png"
                    style="width: 40px"/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" 
                to="/">
                    Home
                </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/login">
                        login
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/perfil">
                        Perfil
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/compras">
                        compras
                    </router-link>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Marcas
                </a>
                <ul class="dropdown-menu">
                    
                    <li v-for="marca in marcas" :key="marca">
                        <!-- <a class="dropdown-item" href="#">{{marca}}</a> -->
                                <router-link
                        class="dropdown-item"
                        :to="'/marca/' + marca"
                        >
                        {{ marca }}
                        </router-link>
                    </li>

                    <!-- <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li> -->
                </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
</template>

<script>
// import ServiceDepartamentos from './../services/ServiceDepartamentos'
import ServiceCubos from './../services/ServiceCubos'
const service = new ServiceCubos()
    export default {
        name: "MenuComponent",
        mounted(){
            service.getMarcas().then(result=>{
                this.marcas = result
                this.status = true;
                console.log(result)
            })
        },
        data(){
            return {
                marcas:[],
                status:false
            }
        }
    }
</script>