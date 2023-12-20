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
import {
  getAuth,
  updateProfile,
  updatePassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
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
  const uidPedido = uuidv4();
  let carrito = JSON.parse(localStorage.getItem("carrito"));

  let postData = {
    uid: uidPedido,
    productos: carrito,
  };
  set(ref(db, "pedidos/" + postData.uid), postData)
    .then(() => {
      // console.log(carrito);
      updatePedidosUsuarios(uidPedido, carrito);
    })
    .catch((error) => {
      // The write failed...
      console.log(error);
    });
};

export const updatePedidosUsuarios = (uidPedido, carrito) => {
  const uidCookie = getCookie("uid");

  const dbRef = ref(db);
  get(child(dbRef, `users/${uidCookie}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        let user = snapshot.val();
        if (!user.hasOwnProperty("pedidos")) {
          user.pedidos = [uidPedido];
        } else {
          user.pedidos.push(uidPedido);
        }
        //
        // console.log(user);
        set(ref(db, `users/${uidCookie}`), {
          email: user.email,
          nombre: user.nombre,
          apellido: user.apellido,
          cuit: user.cuit,
          empresa: user.empresa,
          pedidos: user.pedidos,
        })
          .then(() => {
            // Data saved successfully!
            set(ref(db, `pedidos/${uidPedido}`), {
              uid: uidPedido,
              items: carrito,
            }).then(() => {
              console.log(true);
            });
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