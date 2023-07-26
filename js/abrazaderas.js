// Clase productos

class Productos {
  constructor(categoria, nombre, items_tabla, medidas, foto) {
    this.categoria = categoria;
    this.nombre = nombre;
    this.items_tabla = items_tabla;
    this.medidas = medidas;
    this.foto = foto;
  }
}

// Load json products

let productos = [];

const loadProducts = async () => {
  let arrayLoadProductos = [];
  const response = await fetch("./productos/abrazaderas.json");
  const data = await response.json();
  data.forEach((element) => {
    let newProduct = new Productos(
      element.categoria,
      element.nombre,
      element.items_tabla,
      element.medidas,
      element.foto
    );
    arrayLoadProductos.push(newProduct);
  });
  localStorage.setItem("productos", JSON.stringify(arrayLoadProductos));
};

loadProducts();
productos = JSON.parse(localStorage.getItem("productos"));

console.log(productos);