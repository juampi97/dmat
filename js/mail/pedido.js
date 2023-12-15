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
  carrito = load_Carrito();
  if (user.length > 0 && carrito.length > 0) {
    btnFinalizarPedido = document.querySelector("#btnFinalizarPedido");
    btnFinalizarPedido.addEventListener("click", runVerify);
  }
});

// Funciones

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

const load_Carrito = () => {
  carrito = JSON.parse(localStorage.getItem("carrito"));
  return carrito;
};

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
        postData(captcha);
      });
  });
};

const getData = (captcha) => {
  const user = getCookie("user");
  carrito = load_Carrito();
  datosProcesados = {
    usuario: user,
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
        Swal.fire({
          text: `Mensaje: ${data.mensaje}`,
          icon: "success",
        });
        setTimeout(() => {
          // let carritoVacio = [];
          // localStorage.setItem("carrito", JSON.stringify(carritoVacio));
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
