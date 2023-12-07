let header = `
<header class="header fixed-top">
<nav class="navbar navbar-expand-lg bg-body-tertiary barra">
  <div class="container-fluid">
    <div class="barra_logo">
      <a href="./index.html">
        <img
          class="barra_logo_img"
          src="./img/logo.png"
          alt="logo DMAT"
        />
      </a>
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto nav_boton">
        <li class="nav-item">
          <a
            class="nav-link active nav_boton_animame ms-2 me-2"
            aria-current="page"
            href="./index.html"
            >Inicio</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link active nav_boton_animame ms-2 me-2"
            aria-current="page"
            href="./empresa.html"
            >Empresa</a
          >
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link active nav_boton_animame ms-2 me-2"
            aria-current="page"
            href="#"
            >Productos</a
          >
          <ul class="dropdown-menu bg-transparente">
            <li>
              <a
                class="dropdown-item fw-normal bg-none drop-items"
                href="./abrazaderas.html"
                >Abrazaderas</a
              >
            </li>
            <li>
              <a
                class="dropdown-item fw-normal bg-none drop-items"
                href="./tornillos.html"
                >Tornillos</a
              >
            </li>
            <li>
              <a
                class="dropdown-item fw-normal bg-none drop-items"
                href="./precintos.html"
                >Precintos</a
              >
            </li>
            <li>
              <a
                class="dropdown-item fw-normal bg-none drop-items"
                href="./autopartes.html"
                >Autopartes</a
              >
            </li>
            <li>
              <a
                class="dropdown-item fw-normal bg-none drop-items"
                href="./clamps.html"
                >Clamps</a
              >
            </li>
            <li>
              <a
                class="dropdown-item fw-normal bg-none drop-items"
                href="./grampasfijaciones.html"
                >Grampas - Fijaciones</a
              >
            </li>
            <li>
              <a
                class="dropdown-item fw-normal bg-none drop-items"
                href="./cintasvinitape.html"
                >Cintas - Vini tape
              </a>
            </li>
            <li>
              <a
                class="dropdown-item fw-normal bg-none drop-items"
                href="./termocontraibles.html"
                >Termocontraible</a
              >
            </li>
            <li>
              <a
                class="dropdown-item fw-normal bg-none drop-items"
                href="./productos.html"
                >Ver todos</a
              >
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a
            class="nav-link active nav_boton_animame ms-2"
            aria-current="page"
            href="./descargas.html"
            >Descargas</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link active nav_boton_animame ms-2"
            aria-current="page"
            href="./contacto.html"
            >Contacto</a
          >
        </li>
      </ul>
      <div class="ps-3">
        <a href="./carrito.html">
          <button
            type="button"
            id="btnCarrito"
            class="btn btn-azul me-3 mb-2 w-auto h-auto mt-lg-1"
            width="60"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              class="bi bi-cart-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </a>
      </div>
      <div class="ps-1">
        <a target="_blank" href="https://damat.com.ar/">
          <button
            type="button"
            id="btnCarrito"
            class="btn btn-azul me-3 mb-2 w-auto h-auto mt-lg-1"
            width="60"
          >
            Tienda Nube
              <path
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </a>
      </div>
    </div>
  </div>
</nav>
</header>
<!-- Inicio boton_fixed_botonTop  -->
<div class="fixedWapp">
  <a target="_blank" href="https://wa.me/541168297869"
    ><img
      src="./img/wapp.png"
      alt="LogoWapp"
      class="fixedWapp_img"
  /></a>
</div>
<!-- Fin boton_fixed_botonTop  -->
`

let footer = `
<footer class="bg-azul pt-3 pt-lg-3">
<div
  class="container-fluid d-flex flex-column flex-lg-row align-items-center justify-content-center"
>
  <div
    class="col-9 col-lg-4 col-xl-3 d-flex justify-content-around my-4 my-lg-3"
  >
    <div class="logo_footer">
      <a href="#top"
        ><img class="barra_logo_img" src="./img/logo.png" alt="logo"
      /></a>
    </div>
  </div>
  <div class="d-flex flex-column col-9 col-lg-4 col-xl-3">
    <p class="text-blanco my-1 my-lg-3 pt-2 text-center">
      <a
        class="text-blanco"
        target="_blank"
        translate="no"
        href="https://www.google.com/maps/place/Comuna+4,+Mom+2945,+C1437AKE+CABA/data=!4m2!3m1!1s0x95bccb98f9c5274b:0x604c846f19274da6?sa=X&ved=2ahUKEwjd-IqYxqeAAxUbrpUCHZVGCuoQ8gF6BAgREAA&ved=2ahUKEwjd-IqYxqeAAxUbrpUCHZVGCuoQ8gF6BAgZEAI"
        >Dirección: Mom 2945 - CABA</a
      >
    </p>
    <!-- <p class="text-blanco my-1 my-lg-2 text-center">Telefono</p> -->
    <p class="text-blanco my-1 my-lg-2 text-center">(5411) 4918-8349</p>
    <a
      href="mailto: ventas@dmat.com.ar"
      class="text-blanco my-1 my-lg-3 text-center"
      >Mail: ventas@dmat.com.ar</a
    >
  </div>
  <div
    class="col-9 col-lg-4 col-xl-3 d-flex justify-content-around align-items-center my-4 my-lg-3"
  >
    <img src="./img/bandera.png" alt="Bandera argentina" />
  </div>
</div>
<div
  class="container-fluid d-flex flex-row justify-content-center align-items-center mt-4 copy"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="white"
    class="bi bi-c-circle"
    viewBox="0 0 16 16"
  >
    <path
      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z"
    />
  </svg>
  <p class="ms-4 pt-3 copy_txt">
    2023 Juan Pablo Calabro - Antiguohobby - Diseño web - CIUDAD AUTÓNOMA
    DE BUENOS AIRES
  </p>
</div>
</footer>
`

// let wapp_logo = ``

window.onload = function () {
  const nav = document.querySelector('#nav');
  const pie = document.querySelector('#pie');  
  // const logo_wapp = document.querySelector('#logo_wapp');

  nav.innerHTML = header;  
  pie.innerHTML = footer;
  // logo_wapp.innerHTML = wapp_logo;
}


