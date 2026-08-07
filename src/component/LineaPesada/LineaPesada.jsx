import "../AutoPickups/AutoPickups.css";
import React, { useState, useEffect } from 'react';
import { getProductosPorCategoria } from '../../asyncmock';
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useCity } from "../../context/CityContext"; // Importamos el hook de ciudad

const LineaPesada = () => {
  const [productos, setProductos] = useState([]);
  const { openWhatsApp } = useCity(); // Extraemos la función de WhatsApp dinámico
  const idCategoria = 'linea-pesada';

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
        <h2 className='titulo-auto'>Baterías línea pesada</h2>
        <div className="productos-container">
          {productos.map((producto) => (
            <div key={producto.id} className="producto-card">
              <img src={producto.image} alt={producto.titulo} className='img-cart' />
              <h3 className='titulo-cart'>{producto.titulo}</h3>
              <p className="denominacion">{producto.medida}</p>
              <p className='precio-cart'>Ctd efvo {producto.precio}</p>
              
              {/* Evento onClick con mensaje dinámico y número activo */}
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

export default LineaPesada;