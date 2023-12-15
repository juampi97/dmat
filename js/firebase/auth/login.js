import { app, database, auth } from '../setup_firebase.js'
import { setCookie, getCookie, deleteCookie } from '../../functions.js'
import {
  ref,
  update,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const login = () => {
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  
  signInWithEmailAndPassword(auth, email, password)
    .then((credentials) => {
      update(ref(database, "users/" + credentials.user.uid), {
        last_login: Date(),
      });
      setCookie("user", email, 1);
      setCookie("uid", credentials.user.uid, 5);
      window.location.assign('./index.html');
    })
    .catch(function (error) {
      let error_code = error.code;
      let error_mensaje = error.message;
      Swal.fire({
        text: `Error ${error_code} - ${error_mensaje}`,
        icon: "error",
      });
    });
};

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User signed in
    const uid = user.uid;
    console.log(`Hola ${user}`)
  } else {
    // No user signed in
    console.log('Adios')
  }
});


let buttonLogin = document.querySelector("#buttonLogin");
buttonLogin.addEventListener("click", login);
