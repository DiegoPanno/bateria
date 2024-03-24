import React from "react";
import { LiaCarBatterySolid } from "react-icons/lia";
import { FcServices, FcMindMap } from "react-icons/fc";
import "./Cuerpo.css";
import MarcasCarrusel from "../MarcasCarrusel/MarcasCarrusel"

const Cuerpo = () => {
  return (
    <main className="conte-main">
      <h2 className="h2-cuerpo">¿Buscas asesoramiento para tu vehículo?</h2>
      <div className="conte-cuerpo">
        <div className="div-conte-cuerpo2">
          <LiaCarBatterySolid style={{ fontSize: 40 }} />
          <span className="span-cuerpo">Colocación,</span>
          <span>análisis y chequeo</span>
          <span>sin cargo.</span>
        </div>
        <div className="div-conte-cuerpo1">
          <FcServices style={{ fontSize: 40 }} />
          <span className="span-cuerpo">Equipo técnico</span>
          <span>especializado con las</span>
          <span> mejores herramientas.</span>
        </div>
        <div className="div-conte-cuerpo3">
          <FcMindMap style={{ fontSize: 40 }} />
          <span className="span-cuerpo">Representante ofial</span>
          <span>en Mar del Plata</span>
          <span>y zona.</span>
        </div>
      </div>
      
      <h2 className="h2-slider">La batería de mayor durabilidad del mercado</h2>
      <h4 className="h4-slider">Pieza original del las mayores automotrices del mundo.</h4>

      <div className="conte-marcas">
        <MarcasCarrusel />
      </div>
    </main>
  );
};

export default Cuerpo;
