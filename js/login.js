import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  update,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCx_0-rDUxatbdQHVZp0_13mo6kJ7HyWNk",
  authDomain: "dmat-271c6.firebaseapp.com",
  databaseURL: "https://dmat-271c6-default-rtdb.firebaseio.com",
  projectId: "dmat-271c6",
  storageBucket: "dmat-271c6.appspot.com",
  messagingSenderId: "727891508383",
  appId: "1:727891508383:web:48ee30e605f5d0dc5fb6aa",
  measurementId: "G-GTRGQH794G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

// Funciones

const validateEmail = (email) => {
  let expression = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (expression.test(email) == true) {
    return true;
  } else {
    return false;
  }
};

const register = () => {
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let confirmPassword = document.querySelector("#confirmPassword").value;
  let cuit = document.querySelector("#cuit").value;
  let empresa = document.querySelector("#empresa").value;

  if (validateEmail(email) && password == confirmPassword) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        set(ref(database, "users/" + credentials.user.uid), {
          email: email,
          cuit: cuit,
          empresa: empresa,
          last_login: Date(),
        });

        Swal.fire({
          text: "Usuario registrado exitosamente.",
          icon: "success",
        });
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

const login = () => {
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((credentials) => {
      update(ref(database, "users/" + credentials.user.uid), {
        last_login: Date(),
      });
      alert("logeado correctamente");
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

const logout = () => {
  signOut(auth)
    .then(() => {
        alert("adios")
    })
    .catch((error) => {
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
    console.log(uid);
  } else {
    // No user signed in
  }
});

let buttonLogin = document.querySelector("#buttonLogin");
buttonLogin.addEventListener("click", login);
let buttonLogout = document.querySelector("#buttonLogout");
buttonLogout.addEventListener("click", logout);
let buttonRegister = document.querySelector("#buttonRegister");
buttonRegister.addEventListener("click", register);
