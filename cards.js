const productos = [
    {
      titulo: "Producto 1",
      descripcion: "Descripción del producto 1",
      precio: "$ 49.99",
      img: "https://via.placeholder.com/300",
    },
    {
      titulo: "Producto 2",
      descripcion: "Descripción del producto 2",
      precio: "$ 59.99",
      img: "https://via.placeholder.com/300",
    },
    {
      titulo: "Producto 3",
      descripcion: "Descripción del producto 3",
      precio: "$ 69.99",
      img: "https://via.placeholder.com/300",
    },
    {
      titulo: "Producto 4",
      descripcion: "Descripción del producto 4",
      precio: "$ 79.99",
      img: "https://via.placeholder.com/300",
    },
    {
      titulo: "Producto 5",
      descripcion: "Descripción del producto 5",
      precio: "$ 89.99",
      img: "https://via.placeholder.com/300",
    },
  ];
  const container = document.querySelector("#cards-container");
  const defaultImg = "https://via.placeholder.com/300";

  function crearCard(unProducto) { 
    return ` <div class="card"> 
            <img src=" ${unProducto.img ? unProducto.img : defaultImg}" alt="${unProducto.titulo}" class="card-img"> 
            <div class="card-content"> 
            <h2 class="card-title">${unProducto.titulo ? unProducto.titulo : "Producto"}</h2>
            <p class="card-description">${unProducto.descripcion}</p> 
            <p class="card-price">${unProducto.precio}</p> </div> </div> `; 
}

  productos.forEach((unProducto) => { container.innerHTML += crearCard(unProducto); });
  