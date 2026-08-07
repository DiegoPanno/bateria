import "../AutoPickups/AutoPickups.css";
import React, { useState, useEffect } from 'react';
import { getProductosPorCategoria } from '../../asyncmock';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useCity } from "../../context/CityContext"; // Importamos el contexto de ciudad

const LineaEFB = () => {
  const [productos, setProductos] = useState([]);
  const { openWhatsApp } = useCity(); // Extraemos la función dinámicamente
  const idCategoria = 'linea-efb';

  useEffect(() => {
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
      <Header />
      <NavBar />
      <div className='conte-cart-auto'>
        <h2 className='titulo-auto'>Baterías EFB</h2>
        <div className="productos-container">
          {productos.map((producto) => (
            <div key={producto.id} className="producto-card">
              <img src={producto.image} alt={producto.titulo} className='img-cart' />
              <h3 className='titulo-cart'>{producto.titulo}</h3>
              <p className="denominacion">{producto.medida}</p>
              <p className='precio-cart'>Ctd efvo {producto.precio}</p>
              
              {/* Evento corregido con WhatsApp dinámico */}
              <button 
                onClick={() => openWhatsApp(`¡Hola! Consulta por el producto: ${producto.titulo}`)} 
                className="boton-cart"
              >
                Pedir
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LineaEFB;
