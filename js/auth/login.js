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
  signOut,
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
      //Seteo cookie
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

const logout = () => {
  signOut(auth)
    .then((credentials) => {
      // Limpio cookies
      deleteCookie("user");
      deleteCookie("uid");
      location.reload();
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
    console.log(`Hola ${user}`)
  } else {
    // No user signed in
    console.log('Adios')
  }
});

// Manejo cookies
function setCookie(cname, cvalue, exdays) {
  let loginRememberCheck = document.querySelector("#loginRememberCheck")
  if(loginRememberCheck.checked){
    const d = new Date();
    d.setTime(d.getTime() + 365* 10 * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  } else {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
}

function deleteCookie(cname) {
  let expires = "expires=expires=Thu, 01 Jan 1970 00:00:00 GMT";
  document.cookie = cname + "=;" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

let buttonLogin = document.querySelector("#buttonLogin");
buttonLogin.addEventListener("click", login);
