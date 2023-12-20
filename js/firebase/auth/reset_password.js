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
  updateProfile,
  updatePassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

import { getCookie } from '../../functions.js'

async function sendResetPasswordEmail(email) {
    try {
      await sendPasswordResetEmail(auth, email);
      return { error : null};
    } catch (error) {
      return { error}
    }
  }
  
  window.addEventListener('load',() => {
    const email = getCookie('user')
    const btnResetEmail = document.querySelector('#btnChangePass')
    btnResetEmail.addEventListener('click',() => {
        if( email.length > 0 ) {
            sendResetPasswordEmail(email)
            Swal.fire({
              text: "Se envio un link a su email para realizar el cambio de contraseña.",
              icon: "success",
            });
        }
    })

  })