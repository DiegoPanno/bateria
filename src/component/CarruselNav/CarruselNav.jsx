import "./CarruselNav.css"
import React, { useState, useEffect } from 'react';
import { getProductos } from "../../asyncmock";
import { openWhatsAppChat } from "../../assets/OpenWhatsApp/OpenWhatsApp";

const CarruselNav = () => {
    const [primerosProductos, setPrimeroProductos] = useState([]);

    useEffect(() => {
        getProductos().then((productos) => { // Agrega la variable productos
            const primeros = productos.slice(0, 5);
            setPrimeroProductos(primeros);
        });
    }, []);

    return (
        <div className="conte-carrusel-nav">
            {primerosProductos.map((producto) => ( 
                <div key={producto.id} className="conte-cart-carrusel">
                    <img src={producto.image} alt={producto.titulo} style={{height: 70, width: 90,}} />
                    <h2 style={{fontSize: 18, fontFamily: "sans-serif", color: "#001489"}}>{producto.titulo}</h2>
                    <p className="denominacion">{producto.medida}</p>
                    <p style={{fontSize: 15, fontFamily: "sans-serif", fontWeight: 800,}}>Ctd efvo {producto.precio}</p>
                    <button className="btn-carrusel-nav" onClick={openWhatsAppChat}>Pedir</button>
                </div> 
            ))}
        </div>
    );
}

export default CarruselNav;
