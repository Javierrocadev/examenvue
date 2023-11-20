import Global from "@/Global";
import axios from "axios";

export default class ServiceAuth {
  iniciarSesion(usuario, contraseña) {
    return new Promise((resolve) => {
      let user = {
        email: usuario,
        password: contraseña,
      };
      let url = Global.urlApiCubos;
      let request = "api/Manage/Login";
      axios.post(url + request, user).then((response) => {
        resolve(response.data);
      });
    });
  }

  getPerfil(token) {
    return new Promise((resolve) => {
      let url = Global.urlApiCubos;
      let request = "api/Manage/PerfilUsuario";
      axios
      .get(url + request, { headers: { Authorization: "Bearer " + token } })
      .then((response) => {
        resolve(response.data);
      });
    
    });
  }
  getCompras(token) {
    return new Promise((resolve) => {
      let url = Global.urlApiCubos;
      let request = "api/Compra/ComprasUsuario";
      axios
      .get(url + request, { headers: { Authorization: "Bearer " + token } })
      .then((response) => {
        resolve(response.data);
      });
    
    });
  }
}