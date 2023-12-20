import { app, database, auth } from "../setup_firebase.js";
import { setCookie, getCookie, deleteCookie } from "../../functions.js";
import {
  ref,
  update,
  getDatabase,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const db = getDatabase();

const login = () => {
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((credentials) => {
      update(ref(database, "users/" + credentials.user.uid), {
        last_login: Date(),
      });
      setCookie("user", email, 5);
      setCookie("uid", credentials.user.uid, 5);
      setTimeout(() => {
        window.location.assign("./index.html");
      }, 2000);
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
    const dbRef = ref(db);
    get(child(dbRef, `users/${uid}`))
    .then((snapshot) => {
      let user = snapshot.val();
      let nombre = `${user.nombre} ${user.apellido}`
      setCookie("nombre", nombre, 5);
      setCookie("email", user.email, 5);
      setCookie("empresa", user.empresa || '', 5);
      setCookie("cuit", user.cuit || '', 5);
    })
  } else {
    // No user signed in
  }
});

let buttonLogin = document.querySelector("#buttonLogin");
buttonLogin.addEventListener("click", login);
