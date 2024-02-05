window.addEventListener("load", function (event) {
  // Inicializo y cargo el carrito al cargar la ventana
  carrito = init_load_Carrito()
  carrito = JSON.parse(localStorage.getItem("carrito"));
});

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
  if(product_detail.querySelector('.num')){
    cantidad_list = product_detail.querySelector('.num')
    cantidad = cantidad_list.innerHTML
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

const minus25 = (event, producto) => {
  let button = event.target
  let button_container = button.parentElement
  let product_detail = button_container.parentElement
  
  const num = product_detail.querySelector('.num')
  if(num.innerHTML != "0") {
    numero = parseInt(num.innerHTML)
    numero = numero - 25
    num.innerHTML = numero
  }
}

const plus25 = (event, producto) => {
  let button = event.target
  let button_container = button.parentElement
  let product_detail = button_container.parentElement

  const num = product_detail.querySelector('.num')
    numero = parseInt(num.innerHTML)
    numero = numero + 25
    num.innerHTML = numero
}

const minus100 = (event, producto) => {
  let button = event.target
  let button_container = button.parentElement
  let product_detail = button_container.parentElement
  
  const num = product_detail.querySelector('.num')
  if(num.innerHTML != "0") {
    numero = parseInt(num.innerHTML)
    numero = numero - 100
    num.innerHTML = numero
  }
}

const plus100 = (event, producto) => {
  let button = event.target
  let button_container = button.parentElement
  let product_detail = button_container.parentElement

  const num = product_detail.querySelector('.num')
    numero = parseInt(num.innerHTML)
    numero = numero + 100
    num.innerHTML = numero
}

const minus150 = (event, producto) => {
  let button = event.target
  let button_container = button.parentElement
  let product_detail = button_container.parentElement
  
  const num = product_detail.querySelector('.num')
  if(num.innerHTML != "0") {
    numero = parseInt(num.innerHTML)
    numero = numero - 150
    num.innerHTML = numero
  }
}

const plus150 = (event, producto) => {
  let button = event.target
  let button_container = button.parentElement
  let product_detail = button_container.parentElement

  const num = product_detail.querySelector('.num')
    numero = parseInt(num.innerHTML)
    numero = numero + 150
    num.innerHTML = numero
}

const minus200 = (event, producto) => {
  let button = event.target
  let button_container = button.parentElement
  let product_detail = button_container.parentElement
  
  const num = product_detail.querySelector('.num')
  if(num.innerHTML != "0") {
    numero = parseInt(num.innerHTML)
    numero = numero - 200
    num.innerHTML = numero
  }
}

const plus200 = (event, producto) => {
  let button = event.target
  let button_container = button.parentElement
  let product_detail = button_container.parentElement

  const num = product_detail.querySelector('.num')
    numero = parseInt(num.innerHTML)
    numero = numero + 200
    num.innerHTML = numero
}

const minus250 = (event, producto) => {
  let button = event.target
  let button_container = button.parentElement
  let product_detail = button_container.parentElement
  
  const num = product_detail.querySelector('.num')
  if(num.innerHTML != "0") {
    numero = parseInt(num.innerHTML)
    numero = numero - 250
    num.innerHTML = numero
  }
}

const plus250 = (event, producto) => {
  let button = event.target
  let button_container = button.parentElement
  let product_detail = button_container.parentElement

  const num = product_detail.querySelector('.num')
    numero = parseInt(num.innerHTML)
    numero = numero + 250
    num.innerHTML = numero
}

const minus300 = (event, producto) => {
  let button = event.target
  let button_container = button.parentElement
  let product_detail = button_container.parentElement
  
  const num = product_detail.querySelector('.num')
  if(num.innerHTML != "0") {
    numero = parseInt(num.innerHTML)
    numero = numero - 300
    num.innerHTML = numero
  }
}

const plus300 = (event, producto) => {
  let button = event.target
  let button_container = button.parentElement
  let product_detail = button_container.parentElement

  const num = product_detail.querySelector('.num')
    numero = parseInt(num.innerHTML)
    numero = numero + 300
    num.innerHTML = numero
}

const minus400 = (event, producto) => {
  let button = event.target
  let button_container = button.parentElement
  let product_detail = button_container.parentElement
  
  const num = product_detail.querySelector('.num')
  if(num.innerHTML != "0") {
    numero = parseInt(num.innerHTML)
    numero = numero - 400
    num.innerHTML = numero
  }
}

const plus400 = (event, producto) => {
  let button = event.target
  let button_container = button.parentElement
  let product_detail = button_container.parentElement

  const num = product_detail.querySelector('.num')
    numero = parseInt(num.innerHTML)
    numero = numero + 400
    num.innerHTML = numero
}