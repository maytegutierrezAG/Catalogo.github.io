/*Cargar la información del televisor dentro de un array llamado productos*/
const productos = [
    {
      nombre: 'Camisa - Olivia Rodrigo / Get him back!',
      descripción: 'Camisa blanca con estampado de Olivia Rodrigo.',
      precio: 299.00,
      imagen: 'img1.jpeg'
    },
    {
      nombre: 'Camisa - Olivia Rodrigo / So american',
      descripción: 'Camisa negra con estampado de Olivia Rodrigo .',
      precio: 299.00,
      imagen: 'img2.webp'
    },
    {
      nombre: 'Camisa - Olivia Rodrigo / GUTS',
      descripción: 'Camisa negra con estampado de Olivia Rodrigo.',
      precio: 350.00,
      imagen: 'img3.jpeg'
    },
    {
      nombre: 'Camisa - Olivia Rodrigo / Morada',
      descripción: 'Camisa blanca con estampado de Olivia Rodrigo.',
      precio: 250.00,
      imagen: 'img4.jpg'
    }
  ];
 
/*crear las tarjetas mediante la función crearTarjetaProducto*/
const catalogo = document.getElementById('catalogo');


function crearTarjetaProducto(producto) {
  const card = document.createElement('div');
  card.className = 'producto-card';


  const imagen = document.createElement('img');
  imagen.src = producto.imagen;
  imagen.alt = producto.nombre;


  const titulo = document.createElement('h2');
  titulo.textContent = producto.nombre;


  const descripcion = document.createElement('p');
  descripcion.textContent = producto.descripcion;


  const precio = document.createElement('span');
  precio.className = 'precio';
  precio.textContent = '$' + producto.precio.toFixed(2);


  const boton = document.createElement('button');
  boton.className = 'btn-comparar';
  boton.textContent = 'Comprar';


  card.appendChild(imagen);
  card.appendChild(titulo);
  card.appendChild(descripcion);
  card.appendChild(precio);
  card.appendChild(boton);


  return card;
}
/*3. Mediante una función llamada renderizarCatalogo se encargará de tomar todos los datos de tus
productos y dibujarlos (o renderizarlos) como tarjetas HTML dentro del contenedor principal de tu
página.Utilizando un bucle para procesar cada producto individualmente y agregarlo al catálogo.*/


function renderizarCatalogo() {
    productos.forEach(producto => {
      const tarjeta = crearTarjetaProducto(producto);
      catalogo.appendChild(tarjeta);
    });
  }
 
/*4. por ultimo se llamara a la función renderizarCatalogo para cargar la pagina*/
window.onload = renderizarCatalogo;
