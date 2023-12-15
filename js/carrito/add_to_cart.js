// Manejo carrito

const init_load_Carrito = () => {
  if (localStorage.getItem("carrito") == undefined) {
    let carritoVacio = [];
    localStorage.setItem("carrito", JSON.stringify(carritoVacio));
  }
  carrito = JSON.parse(localStorage.getItem("carrito"))
  return carrito
};

const updateCart = (item) => {
  
  let find_item = false
  let index_item = false
  let index = 0
  
  carrito = JSON.parse(localStorage.getItem("carrito"))

  carrito.forEach(element => {
    if(element.banda == item.banda && element.min == item.min && element.max == item.max){
      find_item = true
      index_item = index
    } else {
      index++
    }
  });
  
  if(find_item) {
    carrito[index_item].cantidad = parseInt(carrito[index_item].cantidad) + parseInt(item.cantidad)
  } else {
    carrito = [...carrito,item]
  }
  
  localStorage.setItem("carrito", JSON.stringify(carrito));

  location.reload()
}

const addtocart = (event, producto) => {
  let button = event.target
  let button_container = button.parentElement
  let product_detail = button_container.parentElement
  
  let banda
  let min
  let max
  let cantidad_list
  let cantidad

  if(product_detail.querySelector('.banda')){ 
    banda=product_detail.querySelector('.banda').innerHTML
  } else {
    banda = ""
  }
  if(product_detail.querySelector('.min')){
    min = product_detail.querySelector('.min').innerHTML
  } else {
    min = ""
  }
  if(product_detail.querySelector('.max')) {
    max = product_detail.querySelector('.max').innerHTML
  } else {
    max = ""
  }
  if(product_detail.querySelector('.cantidad')){
    cantidad_list = product_detail.querySelector('.cantidad')
    cantidad = parseInt(cantidad_list.options[cantidad_list.selectedIndex].innerHTML)
  }

  let item = {
    'producto': producto,
    'banda': banda,
    'min': min,
    'max': max,
    'cantidad': cantidad
  } 

  updateCart(item)
  
  Swal.fire({
    text: "Producto agregado correctamente.",
    icon: "success"
  });
}

window.addEventListener("load", function (event) {
  // Inicializo y cargo el carrito al cargar la ventana
  carrito = init_load_Carrito()
  carrito = JSON.parse(localStorage.getItem("carrito"));
});
