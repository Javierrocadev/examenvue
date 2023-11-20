import {createRouter, createWebHistory} from 'vue-router';
//importar todos los componentes

import CubosComponent from './components/CubosComponent';
import MarcaComponent from './components/MarcaComponent';
import CuboComentario from './components/CuboComentario';
import LoginComponent from './components/LoginComponent';
import PerfilComponent from './components/PerfilComponent';
import ComprasComponent from './components/ComprasComponent';
// import DepartamentosComponent from './components/DepartamentosComponent.vue';
// import DepartamentosComponent from './components/DepartamentosComponent.vue';
// import CreateDepartamento from './components/CreateDepartamento.vue';
// import DetallesDepartamento from './components/DetallesDepartamento.vue';
// import UpdateDepartamento from './components/UpdateDepartamento.vue';
// import DeleteDepartamento from './components/DeleteDepartamento.vue';

const myRoutes = [
    {
        path: "/", component: CubosComponent
    },
    {
        path: "/marca/:marca", component: MarcaComponent
    },
    {
        path: "/comentariocubo/:id", component: CuboComentario
    },
    {
        path: "/login", component: LoginComponent
    },
    {
        path: "/perfil", component: PerfilComponent
    }
    ,
    {
        path: "/compras", component: ComprasComponent
    }
//   {
//       path: "/", component: DepartamentosComponent
//   }, 
//   {
//       path: "/delete/:id", component: DeleteDepartamento
//   },
//   {
//       path: "/create", component: CreateDepartamento
//   }, 
//   {
//       path: "/details/:id/:nombre/:localidad", component: DetallesDepartamento
//   },
//   {
//       path: "/update/:id", component: UpdateDepartamento
//   }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;