// Manejo cookies
export function setCookie(cname, cvalue, exdays) {
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

export function deleteCookie(cname) {
  let expires = "expires=expires=Thu, 01 Jan 1970 00:00:00 GMT";
  document.cookie = cname + "=;" + expires + ";path=/";
}

export function getCookie(cname) {
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

//Validar mail
export const validateEmail = (email) => {
    let expression = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (expression.test(email) == true) {
      return true;
    } else {
      return false;
    }
  };

// Carrito
export const init_load_Carrito = () => {
    if (localStorage.getItem("carrito") == undefined) {
      let carritoVacio = [];
      localStorage.setItem("carrito", JSON.stringify(carritoVacio));
    }
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    return carrito;
  };

export const addtocart = (event, producto) => {
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

export const updateCart = (item) => {
  
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