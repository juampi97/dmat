// Funciones

function setCookie(cname, cvalue, exdays) {
  let loginRememberCheck = document.querySelector("#loginRememberCheck");
  if (loginRememberCheck.checked) {
    const d = new Date();
    d.setTime(d.getTime() + 365 * 10 * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  } else {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
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
function deleteCookie(cname) {
  let expires = "expires=expires=Thu, 01 Jan 1970 00:00:00 GMT";
  document.cookie = cname + "=;" + expires + ";path=/";
}
function logout() {
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
}
const init_load_Carrito = () => {
  if (localStorage.getItem("carrito") == undefined) {
    let carritoVacio = [];
    localStorage.setItem("carrito", JSON.stringify(carritoVacio));
  }
  carrito = JSON.parse(localStorage.getItem("carrito"));
  return carrito;
};
const eliminarItem = (event) => {
  carrito = JSON.parse(localStorage.getItem("carrito"));

  let find_item = false;
  let index_item = false;
  let index = 0;

  let variables = event.target.id;
  variables = variables.split(",");
  console.log(variables);

  carrito.forEach((element) => {
    if (
      element.producto == variables[0] &&
      element.banda == variables[1] &&
      element.min == variables[2] &&
      element.max == variables[3]
    ) {
      find_item = true;
      index_item = index;
    } else {
      index++;
    }
  });

  carrito.splice(index_item, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));

  location.reload();
};

const vaciarCarrito = () => {
  let carritoVacio = [];
  localStorage.setItem("carrito", JSON.stringify(carritoVacio));
  location.reload();
};
const carritoVacio = `<div class="alert alert-secondary text-center" role="alert">No hay elementos en el carrito.</div>`;

window.addEventListener("load", function (event) {
  const listadoCarrito = document.querySelector("#carrito_section");

  carrito = init_load_Carrito();

  if (carrito.length == 0) {
    listadoCarrito.innerHTML = carritoVacio;
  } else {
    //Cargo todos los items del carrito
    listadoCarrito.innerHTML = "";
    for (const elemento of carrito) {
      listadoCarrito.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-start border border-2 rounded my-3">
      <div class="ms-2 me-auto p-3">
        <div class="fw-bold mb-1">${elemento.producto}</div>
        <p class="mb-1">Banda: ${elemento.banda} - Min: ${elemento.min} - Max: ${elemento.max}</p>
        <p class="mb-1">Cantidad: ${elemento.cantidad}</p>
      </div>
      <div class="d-flex m-4 justify-content-center">
        <button onClick="eliminarItem(event)" type="button" class="btn btn-danger py-1 btnEliminar" id="${elemento.producto},${elemento.banda},${elemento.min},${elemento.max}">x</button>
      </div>
      <span class="badge bg-primary rounded-pill d-none">14</span>
    </li>
      `;
    }

    const cookieUser = getCookie("user");
    const cookieUid = getCookie("uid");
    
    if (cookieUser.length > 0 && cookieUid.length > 0) {
      listadoCarrito.innerHTML += `
      <!-- Botones reserva -->
      <div class="row d-flex flex-row justify-content-center mb-4">
      <div class="d-flex justify-content-center">
      <button
      onClick="vaciarCarrito()"
      type="button"
      class="btn btn-danger mx-1"
      id="btnVaciarCarrito"
      >
      Vaciar carrito
      </button>
      <button
              type="button"
              class="btn btn-secondary mx-1"
              id="btnFinalizarPedido"
            >
              Finalizar pedido
            </button>
      </div>
      </div>
      `;
    } else {
      listadoCarrito.innerHTML += `<p class="text-center text-secondary">Para terminar de realizar el pedido debes <a href="./login.html">iniciar sesión</a>.</p>`;
      listadoCarrito.innerHTML += `
      <!-- Botones reserva -->
        <div class="row d-flex flex-row justify-content-center mb-4">
          <div class="d-flex justify-content-center">
            <button
              onClick="vaciarCarrito()"
              type="submit"
              class="btn btn-danger mx-1"
              id="btnVaciarCarrito"
            >
              Vaciar carrito
            </button>
        </div>
      `;
    }


  }
});
