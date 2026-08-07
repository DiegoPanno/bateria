import "./CarruselNav.css";
import React, { useState, useEffect } from 'react';
import { getProductos } from "../../asyncmock";
import { useCity } from "../../context/CityContext"; // 1. Importamos el hook del contexto

const CarruselNav = () => {
    const [primerosProductos, setPrimeroProductos] = useState([]);
    const { openWhatsApp } = useCity(); // 2. Extraemos la función de WhatsApp dinámico

    useEffect(() => {
        getProductos().then((productos) => {
            const primeros = productos.slice(0, 5);
            setPrimeroProductos(primeros);
        });
    }, []);

    return (
        <div className="conte-carrusel-nav">
            {primerosProductos.map((producto) => ( 
                <div key={producto.id} className="conte-cart-carrusel">
                    <img src={producto.image} alt={producto.titulo} style={{height: 70, width: 90}} />
                    <h2 style={{fontSize: 18, fontFamily: "sans-serif", color: "#001489"}}>{producto.titulo}</h2>
                    <p className="denominacion">{producto.medida}</p>
                    <p style={{fontSize: 15, fontFamily: "sans-serif", fontWeight: 800}}>Ctd efvo {producto.precio}</p>
                    
                    {/* 3. Conectamos el botón con el mensaje específico del producto */}
                    <button 
                        className="btn-carrusel-nav" 
                        onClick={() => openWhatsApp(`¡Hola! Consulta por el producto: ${producto.titulo}`)}
                    >
                        Pedir
                    </button>
                </div> 
            ))}
        </div>
    );
}

export default CarruselNav;