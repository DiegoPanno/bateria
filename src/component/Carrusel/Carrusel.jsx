import React from "react";
import "./Carrusel.css";
import BotonServicio from "./BotonServicio/BotonServicio";
import imgCarrusel from "./img/img-carrusel.jpg";
const Carrusel = () => {
  return (
    <div className="carrusel-conte">
      <div className="carrusel-image">
        <img src={imgCarrusel} alt="Imagen de vehículo con el capot abierto" />
      </div>
      <div className="btn-carrusel">
        <BotonServicio />
      </div>
    </div>
  );
};

export default Carrusel;
