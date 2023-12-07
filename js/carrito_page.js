const init_load_Carrito = () => {
  if (localStorage.getItem("carrito") == undefined) {
    let carritoVacio = [];
    localStorage.setItem("carrito", JSON.stringify(carritoVacio));
  }
  carrito = JSON.parse(localStorage.getItem("carrito"))
  return carrito
};

const carritoVacio = `<div class="alert alert-secondary" role="alert">No hay elementos en el carrito.</div>`


window.addEventListener("load", function (event) {
  
  const carrito_section = document.querySelector('#carrito_section')
  
  carrito = init_load_Carrito()
  
  if (carrito.length == 0) {
    carrito_section.innerHTML = carritoVacio;
  }  else {
    //Cargo todos los items del carrito
  }
});
