import Global from './../Global';
import axios from 'axios';

export default class ServiceDepartamentos {
    getMarcas() {
        return new Promise(function(resolve) {
            var request = "api/cubos/Marcas";
            var marcas = [];
            var url = Global.urlApiCubos + request;
            axios.get(url).then(response => {
                marcas = response.data;
                resolve(marcas);
            })
        })
    }
    getCubos() {
        return new Promise(function(resolve) {
            var request = "api/Cubos";
            var marcas = [];
            var url = Global.urlApiCubos + request;
            axios.get(url).then(response => {
                marcas = response.data;
                resolve(marcas);
            })
        })
    }
    getCubosMarca(marca) {
        return new Promise(function(resolve) {
            var request = "api/Cubos/CubosMarca/" + marca;
            var marcas = [];
            var url = Global.urlApiCubos + request;
            axios.get(url).then(response => {
                marcas = response.data;
                resolve(marcas);
            })
        })
    }
    getCubosComentario(id) {
        return new Promise(function(resolve) {
            var request = "api/ComentariosCubo/GetComentariosCubo/" + id;
            var marcas = [];
            var url = Global.urlApiCubos + request;
            axios.get(url).then(response => {
                marcas = response.data;
                resolve(marcas);
            })
        })
    }

    // insertDepartamento(departamento){
    //     return new Promise(function(resolve) {
    //         var request = "api/departamentos";
    //         var url = Global.urlApiDepartamentos + request;
    //         axios.post(url, departamento).then(response => {
    //             resolve(response);
    //         })
    //     })
    // }

    // findDepartamento(id) {
    //     return new Promise(function(resolve){
    //         var request = "api/departamentos/" + id;
    //         var url = Global.urlApiDepartamentos + request;
    //         var departamento = {};
    //         axios.get(url).then(response => {
    //             departamento = response.data;
    //             resolve(departamento);
    //         })
    //     })
    // }

    // updateDepartamento(departamento) {
    //     return new Promise(function(resolve){
    //         var request = "api/departamentos";
    //         var url = Global.urlApiDepartamentos + request;
    //         axios.put(url, departamento).then(response =>  {
    //             resolve(response);
    //         })
    //     })
    // }

    // deleteDepartamento(id){
    //     return new Promise(function(resolve) {
    //         var request = "api/departamentos/" + id;
    //         var url = Global.urlApiDepartamentos + request;
    //         axios.delete(url).then(response => {
    //             resolve(response);
    //         })
    //     })
    // }

}