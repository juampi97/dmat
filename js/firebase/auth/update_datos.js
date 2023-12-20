import { app, database, auth } from "../setup_firebase.js";
import {
  getDatabase,
  ref,
  child,
  onValue,
  get,
  set,
  push,
  update,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  updatePassword,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getCookie } from "../../functions.js";

const db = getDatabase();

// Funciones

export function setCookie(cname, cvalue, exdays) {
  let loginRememberCheck = document.querySelector("#loginRememberCheck");
  const d = new Date();
  d.setTime(d.getTime() + 365 * 10 * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

async function actualizarEmail() {
  const uid = getCookie("uid");

  const nombre = document.querySelector("#nombre");
  const apellido = document.querySelector("#apellido");
  const empresa = document.querySelector("#empresa");
  const cuit = document.querySelector("#cuit");

  const btnModificar = document.querySelector("#btnModificar");

  btnModificar.addEventListener("click", () => {
    if (
      (nombre.value + apellido.value + empresa.value + cuit.value).length == 0
    ) {
      Swal.fire({
        text: "No ingreso ningun dato.",
        icon: "warning",
      });
    } else {
      if (nombre.value.length > 0) {
        update(ref(database, "users/" + uid), {
          nombre: nombre.value,
        });
        setCookie("nombre", nombre.value, 5);
      }
      if (apellido.value.length > 0) {
        update(ref(database, "users/" + uid), {
          apellido: apellido.value,
        });
        setCookie("apellido", apellido.value, 5);
      }
      if (empresa.value.length > 0) {
        update(ref(database, "users/" + uid), {
          empresa: empresa.value,
        });
        setCookie("empresa", empresa.value, 5);
      }
      if (cuit.value.length > 0) {
        update(ref(database, "users/" + uid), {
          cuit: cuit.value,
        });
        setCookie("cuit", cuit.value, 5);
      }
      Swal.fire({
        text: "Datos modificados correctamente.",
        icon: "success",
      });
      setTimeout(() => {
        window.location.href = "./datos_cuenta.html";
      }, "2000");
    }
  });
}

window.addEventListener("load", () => {
  actualizarEmail();
});
