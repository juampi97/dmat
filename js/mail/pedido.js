import {
  nuevaCotizacion,
  updatePedidosUsuarios,
} from "../firebase/crud_firebase.js";

let productionMailRoute = "https://mail-dmat.onrender.com/pedido";
let devMailRoute = "http://localhost:8080/pedido";
let enviroment = "prod"; // prod || dev
let mailRoute = "";

switch (enviroment) {
  case "dev":
    mailRoute = devMailRoute;
    break;
  case "prod":
    mailRoute = productionMailRoute;
    break;
}

window.addEventListener("load", () => {
  const user = getCookie("user");
  let carrito = load_Carrito();
  if (user.length > 0 && carrito.length > 0) {
    let btnFinalizarPedido = document.querySelector("#btnFinalizarPedido");
    btnFinalizarPedido.addEventListener("click", runVerify);
  }
});

// Funciones cookies

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

// Funciones carrito

const load_Carrito = () => {
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  return carrito;
};

// Funciones generar mail

const runVerify = (e) => {
  e.preventDefault();
  runCaptcha();
};

const runCaptcha = () => {
  grecaptcha.ready(function () {
    grecaptcha
      .execute("6Lf6lzApAAAAALlQ1HOfO6HwtwpnbR3YP7kRdge_", { action: "submit" })
      .then(function (token) {
        // Add your logic to submit to your backend server here.
        const captcha = token;
        getData(captcha);
        postData(captcha);
      });
  });
};

const getData = (captcha) => {
  const user = getCookie("user");
  const uid = getCookie("uid");

  let carrito = load_Carrito();

  let datosProcesados = {
    nombre: getCookie('nombre'),
    email: getCookie('email'),
    empresa: getCookie('empresa'),
    cuit: getCookie('cuit'),
    listado_articulos: carrito,
    captcha: captcha,
  };
  return datosProcesados;
};

const postData = async (captcha) => {
  const newMessage = getData(captcha);
  try {
    const response = await fetch(mailRoute, {
      method: "POST",
      headers: {
        Accept: "application/json, text-/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    })
      .then((res) => res.json())
      .then((data) => {
        nuevaCotizacion();
        // updatePedidosUsuarios()
        Swal.fire({
          text: `Mensaje: ${data.mensaje}`,
          icon: "success",
        });
        setTimeout(() => {
          let carritoVacio = [];
          localStorage.setItem("carrito", JSON.stringify(carritoVacio));
          location.reload();
        }, 5000);
      });
  } catch (error) {
    Swal.fire({
      text: `Mensaje: ${error}`,
      icon: "error",
    });
  }
};
