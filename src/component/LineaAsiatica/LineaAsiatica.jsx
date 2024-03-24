import "../AutoPickups/AutoPickups.css"
import React, { useState, useEffect } from 'react';
import { getProductosPorCategoria } from '../../asyncmock'; // Asegúrate de importar la función adecuada
import NavBar from "../NavBar/NavBar";
import { openWhatsAppChat } from "../../assets/OpenWhatsApp/OpenWhatsApp";
import Footer from "../Footer/Footer";



const LineaAsiatica = () => {
  const [productos, setProductos] = useState([]);
  const idCategoria = 'linea-asiatica'; // Define la categoría que deseas mostrar

  useEffect(() => {
    // Llama a la función para obtener productos de la categoría 'auto-pickups'
    getProductosPorCategoria(idCategoria)
      .then((productos) => {
        setProductos(productos);
      })
      .catch((error) => {
        console.error('Error al obtener productos por categoría', error);
      });
  }, [idCategoria]);

  return (
    <>
    <NavBar />
    <div className='conte-cart-auto'>
      <h2 className='titulo-auto'>Baterías linea asiática</h2>
      <div className="productos-container">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={producto.image} alt={producto.titulo} className='img-cart' />
            <h3 className='titulo-cart'>{producto.titulo}</h3>
            <p className="denominacion">{producto.medida}</p>
            <p className='precio-cart'>Ctd efvo {producto.precio}</p>
            <button onClick={openWhatsAppChat} className="boton-cart">Pedir</button>
          </div>
        ))}
      </div>
    </div>
     <Footer />
    </>
  );
}

export default LineaAsiatica;