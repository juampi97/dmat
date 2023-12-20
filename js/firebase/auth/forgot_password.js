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

async function sendResetPasswordEmail(email) {
    try {
      await sendPasswordResetEmail(auth, email);
      return { error : null};
    } catch (error) {
      return { error}
    }
  }
  
  window.addEventListener('load',() => {
    const resetEmail = document.querySelector('#resetEmail')
    const btnResetEmail = document.querySelector('#btnResetEmail')
    const modal = document.querySelector('#exampleModal')
    btnResetEmail.addEventListener('click',() => {
        if(resetEmail.value.length > 0 ) {
            sendResetPasswordEmail(resetEmail.value)
            modal.classList.toggle('show')
        }
    })

  })