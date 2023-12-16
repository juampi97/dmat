import { app, database, auth } from "./setup_firebase.js";
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
import { getCookie, uuidv4 } from "../functions.js";

const db = getDatabase();

export const getDataFromDatabase = (dbName) => {
  const dbRef = ref(db);
  let items = [];
  get(child(dbRef, dbName)).then((snapshot) => {
    snapshot.forEach((element) => {
      items.push(element.val());
    });
  });
  return items;
};

export const nuevaCotizacion = () => {
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  let postData = {
    uid: uuidv4(),
    productos: carrito,
  };
  set(ref(db, "pedidos/" + postData.uid), postData)
    .then(() => {
      console.log(carrito);
      updatePedidosUsuarios(postData.uid)
    })
    .catch((error) => {
      // The write failed...
      console.log(error);
    });
};

export const updatePedidosUsuarios = (uidPedido) => {
  const userCookie = getCookie("user");
  const uidCookie = getCookie("uid");

  const dbRef = ref(db);
  get(child(dbRef, `users/${uidCookie}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        let user = snapshot.val();
        if (!user.hasOwnProperty("pedidos")) {
          user.pedidos = [uidPedido];
        } else {
          user.pedidos = [...user.pedidos, uidPedido];
        }
        //
        console.log(user);
        set(ref(db, `users/${uidCookie}`), {
          email: user.email,
          nombre: user.nombre,
          apellido: user.apellido,
          cuit: user.cuit,
          empresa: user.empresa,
          pedidos: user.pedidos
        })
          .then(() => {
            // Data saved successfully!
            console.log(true);
          })
          .catch((error) => {
            console.log(error);
            // The write failed...
          });
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

window.addEventListener("load", () => {
  let users = getDataFromDatabase("users");
  let pedidos = getDataFromDatabase("pedidos");
  updatePedidosUsuarios();
  // nuevaCotizacion()
  // console.log(pedidos)
});
