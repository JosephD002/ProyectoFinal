let modalText = document.getElementById("content-modal");

class Producto {
  constructor(num, nombre, capacidad, precio, cantidad) {
    this.num = num;
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

class ProductoController {
  constructor() {
    this.listadeproductos = [];
  }

  colocar(producto) {
    this.listadeproductos.push(producto);
  }

  cargarProductosJSON() {
    fetch("api.JSON")
      .then((Response) => Response.json())
      .then((data) => {
        data.forEach((producto) => {
          this.colocar(
            new Producto(
              producto.num,
              producto.nombre,
              producto.capacidad,
              producto.precio,
              producto.cantidad
            )
          );
        });
        agregarEventos();
      })
      .catch((error) => {
        console.log("Los productos no pudieron ser cargados con éxito");
      });
  }
}

class NuevaCompra {
  constructor() {
    this.productos = [];
  }

  agregarProducto(productos, productoNum) {
    const productoExistente = this.productos.find(
      (producto) => producto.num === productoNum
    );
    if (productoExistente) {
      productoExistente.cantidad += 1;
    } else {
      const producto = productos.listadeproductos.find(
        (producto) => producto.num === productoNum
      );
      producto.cantidad = 1;
      this.productos.push(producto);
    }
    localStorage.setItem("productos", JSON.stringify(this.productos));
  }

  descripcion() {
    let html = `<div>`;
    let total = 0;
    this.productos.forEach((producto, index) => {
      html += `<div class='card'>
				<h3>${producto.nombre} ${producto.capacidad}</h3>
				<p>Precio: ${producto.precio}$</p>
				<button class="suma-resta" onclick="carritoInstance.sumar(${index})">+</button>
				<input type="number" class="input-cantidad" min="0" value="${producto.cantidad}" readonly>
				<button class="suma-resta" onclick="carritoInstance.restar(${index})">-</button>
			</div>`;
      total += producto.precio * producto.cantidad;
    });
    html += `<p>Total: ${total}$</p></div>`;
    return html;
  }
}

const productos = new ProductoController();
const miNuevaCompra = new NuevaCompra();

// Guardado en el local storage al reiniciar la página
const carritoData = localStorage.getItem("productos");
if (carritoData) {
  miNuevaCompra.productos = JSON.parse(carritoData);
  modalText.innerHTML = miNuevaCompra.descripcion();
}

productos.cargarProductosJSON();

class Carrito {
  sumar(index) {
    const producto = miNuevaCompra.productos[index];
    producto.cantidad += 1;
    modalText.innerHTML = miNuevaCompra.descripcion();
  }

  restar(index) {
    const producto = miNuevaCompra.productos[index];
    if (producto.cantidad > 0) {
      producto.cantidad -= 1;
      modalText.innerHTML = miNuevaCompra.descripcion();
    }
  }

  finalizarCompra() {
    let finalizar = document.getElementById("btn_fin");
    finalizar.addEventListener("click", function () {
      if (miNuevaCompra.productos.length > 0) {
        modalText.innerHTML = "";
        miNuevaCompra.productos = [];
        localStorage.setItem("productos", JSON.stringify(miNuevaCompra.productos));

        Toastify({
          text: "Compra realizada con éxito, ¡gracias por comprar con nosotros!",
          duration: 3000,
        }).showToast();
      } else {
        Toastify({
          text: "No hay productos en el carrito",
          duration: 3000,
        }).showToast();
      }
    });
  }
}

const agregarEventos = () => {
  




  // Botones Iphone 11
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");

  btn1.addEventListener("click", () => {
    miNuevaCompra.agregarProducto(productos, "1");
    modalText.innerHTML = miNuevaCompra.descripcion();

    Toastify({
      text: "Producto añadido exitosamente",
      duration: 3000,
    }).showToast();
  });
  
  btn2.addEventListener("click", () => {
    miNuevaCompra.agregarProducto(productos, "2");
    modalText.innerHTML = miNuevaCompra.descripcion();
    Toastify({
      text: "Producto añadido exitosamente",
      duration: 3000,
    }).showToast();
  });

  btn3.addEventListener("click", () => {
    miNuevaCompra.agregarProducto(productos, "3");
    modalText.innerHTML = miNuevaCompra.descripcion();
    Toastify({
      text: "Producto añadido exitosamente",
      duration: 3000,
    }).showToast();
  });

  // Boton iPhone 11 Pro
  const btn4 = document.getElementById("btn4");
  const btn5 = document.getElementById("btn5");
  const btn6 = document.getElementById("btn6");

  btn4.addEventListener("click", () => {
    miNuevaCompra.agregarProducto(productos, "4");
    modalText.innerHTML = miNuevaCompra.descripcion();
    Toastify({
      text: "Producto añadido exitosamente",
      duration: 3000,
    }).showToast();
  });

  btn5.addEventListener("click", () => {
    miNuevaCompra.agregarProducto(productos, "5");
    modalText.innerHTML = miNuevaCompra.descripcion();
    Toastify({
      text: "Producto añadido exitosamente",
      duration: 3000,
    }).showToast();
  });

  btn6.addEventListener("click", () => {
    miNuevaCompra.agregarProducto(productos, "6");
    modalText.innerHTML = miNuevaCompra.descripcion();
    Toastify({
      text: "Producto añadido exitosamente",
      duration: 3000,
    }).showToast();
  });

  // Boton iPhone 11 Pro Max
  const btn7 = document.getElementById("btn7");
  const btn8 = document.getElementById("btn8");
  const btn9 = document.getElementById("btn9");

  btn7.addEventListener("click", () => {
    miNuevaCompra.agregarProducto(productos, "7");
    modalText.innerHTML = miNuevaCompra.descripcion();
    Toastify({
      text: "Producto añadido exitosamente",
      duration: 3000,
    }).showToast();
  });

  btn8.addEventListener("click", () => {
    miNuevaCompra.agregarProducto(productos, "8");
    modalText.innerHTML = miNuevaCompra.descripcion();
    Toastify({
      text: "Producto añadido exitosamente",
      duration: 3000,
    }).showToast();
  });

  btn9.addEventListener("click", () => {
    miNuevaCompra.agregarProducto(productos, "9");
    modalText.innerHTML = miNuevaCompra.descripcion();
    Toastify({
      text: "Producto añadido exitosamente",
      duration: 3000,
    }).showToast();
  });
};
// Botones Iphone 12
const btn10 = document.getElementById("btn10");
const btn11 = document.getElementById("btn11");
const btn12 = document.getElementById("btn12");

btn10.addEventListener("click", () => {
  miNuevaCompra.agregarProducto(productos, "10");
  modalText.innerHTML = miNuevaCompra.descripcion();

  Toastify({
    text: "Producto añadido exitosamente",
    duration: 3000,
  }).showToast();
});

btn11.addEventListener("click", () => {
  miNuevaCompra.agregarProducto(productos, "11");
  modalText.innerHTML = miNuevaCompra.descripcion();
  Toastify({
    text: "Producto añadido exitosamente",
    duration: 3000,
  }).showToast();
});

btn12.addEventListener("click", () => {
  miNuevaCompra.agregarProducto(productos, "12");
  modalText.innerHTML = miNuevaCompra.descripcion();
  Toastify({
    text: "Producto añadido exitosamente",
    duration: 3000,
  }).showToast();
});

// Boton iPhone 12 Mini
const btn13 = document.getElementById("btn13");
const btn14 = document.getElementById("btn14");
const btn15 = document.getElementById("btn15");

btn13.addEventListener("click", () => {
  miNuevaCompra.agregarProducto(productos, "13");
  modalText.innerHTML = miNuevaCompra.descripcion();
  Toastify({
    text: "Producto añadido exitosamente",
    duration: 3000,
  }).showToast();
});

btn14.addEventListener("click", () => {
  miNuevaCompra.agregarProducto(productos, "14");
  modalText.innerHTML = miNuevaCompra.descripcion();
  Toastify({
    text: "Producto añadido exitosamente",
    duration: 3000,
  }).showToast();
});

btn15.addEventListener("click", () => {
  miNuevaCompra.agregarProducto(productos, "15");
  modalText.innerHTML = miNuevaCompra.descripcion();
  Toastify({
    text: "Producto añadido exitosamente",
    duration: 3000,
  }).showToast();
});

// Boton iPhone 12 Pro 
const btn16 = document.getElementById("btn16");
const btn17 = document.getElementById("btn17");
const btn18 = document.getElementById("btn18");

btn16.addEventListener("click", () => {
  miNuevaCompra.agregarProducto(productos, "16");
  modalText.innerHTML = miNuevaCompra.descripcion();
  Toastify({
    text: "Producto añadido exitosamente",
    duration: 3000,
  }).showToast();
});

btn17.addEventListener("click", () => {
  miNuevaCompra.agregarProducto(productos, "17");
  modalText.innerHTML = miNuevaCompra.descripcion();
  Toastify({
    text: "Producto añadido exitosamente",
    duration: 3000,
  }).showToast();
});

btn18.addEventListener("click", () => {
  miNuevaCompra.agregarProducto(productos, "18");
  modalText.innerHTML = miNuevaCompra.descripcion();
  Toastify({
    text: "Producto añadido exitosamente",
    duration: 3000,
  }).showToast();
});

//Boton iPhone12ProMax
const btn19 = document.getElementById("btn19");
const btn20 = document.getElementById("btn20");
const btn21 = document.getElementById("btn21");

btn19.addEventListener("click", () => {
  miNuevaCompra.agregarProducto(productos, "19");
  modalText.innerHTML = miNuevaCompra.descripcion();
  Toastify({
    text: "Producto añadido exitosamente",
    duration: 3000,
  }).showToast();
});

btn20.addEventListener("click", () => {
  miNuevaCompra.agregarProducto(productos, "20");
  modalText.innerHTML = miNuevaCompra.descripcion();
  Toastify({
    text: "Producto añadido exitosamente",
    duration: 3000,
  }).showToast();
});

btn21.addEventListener("click", () => {
  miNuevaCompra.agregarProducto(productos, "21");
  modalText.innerHTML = miNuevaCompra.descripcion();
  Toastify({
    text: "Producto añadido exitosamente",
    duration: 3000,
  }).showToast();
});
const carritoInstance = new Carrito();
carritoInstance.finalizarCompra();

agregarEventos();


function mostrarContenido() {
  let menu1 = document.getElementById("menu");
  let menu2 = document.getElementById("menu2");
  let menu3 = document.getElementById("menu3");
  let menu4 = document.getElementById("menu4");
  let menu5 = document.getElementById("menu5");
  let menu6 = document.getElementById("menu6");
  let menu7 = document.getElementById("menu7");

  if (menu1.style.display === "none") {
    menu1.style.display = "block";
  } else {
    menu1.style.display = "none";
  }

  if (menu2.style.display === "none") {
    menu2.style.display = "block";
  } else {
    menu2.style.display = "none";
  }

  if (menu3.style.display === "none") {
    menu3.style.display = "block";
  } else {
    menu3.style.display = "none";

    if (menu4.style.display === "none") {
      menu4.style.display = "block";
    } else {
      menu4.style.display = "none";
    }
  
    if (menu5.style.display === "none") {
      menu5.style.display = "block";
    } else {
      menu5.style.display = "none";
    }
  
    if (menu6.style.display === "none") {
      menu6.style.display = "block";
    } else {
      menu6.style.display = "none";
    }

    if (menu7.style.display === "none") {
      menu7.style.display = "block";
    } else {
      menu7.style.display = "none";
    }
    
  }
}

