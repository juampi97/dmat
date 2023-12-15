import { app, database, auth } from '../setup_firebase.js'
import { validateEmail } from '../../functions.js'
import {
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import {
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const register = () => {
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let confirmPassword = document.querySelector("#confirmPassword").value;
  let nombre = document.querySelector("#nombre").value;
  let apellido = document.querySelector("#apellido").value;
  let cuit = document.querySelector("#cuit").value;
  let empresa = document.querySelector("#empresa").value;

  if (validateEmail(email) && (password == confirmPassword) && (password.length > 0) && (nombre.length > 0) && (apellido.length > 0)) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        set(ref(database, "users/" + credentials.user.uid), {
          email: email,
          nombre: nombre,
          apellido: apellido,
          cuit: cuit,
          empresa: empresa,
          last_login: Date(),
        });

        Swal.fire({
          text: "Usuario registrado exitosamente.",
          icon: "success",
        });
        setTimeout(() => {
          window.location.href = "./login.html"
        }, 5000);
      })
      .catch(function (error) {
        let error_code = error.code;
        let error_mensaje = error.message;
        Swal.fire({
          text: `Error ${error_code} - ${error_mensaje}`,
          icon: "error",
        });
      });
  } else {
    Swal.fire({
      text: `Revise haber completado correctamente todos los campos.`,
      icon: "warning",
    });
  }
};

let buttonRegister = document.querySelector("#buttonRegister");
buttonRegister.addEventListener("click", register);
