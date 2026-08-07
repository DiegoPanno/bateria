import React from "react";
import { WhatsAppOutlined } from "@ant-design/icons";
import "./BotonServicio.css";
import { useCity } from "../../../context/CityContext";

const BotonServicio = () => {
  const { openWhatsApp } = useCity();

  return (
    <div className="conte-servicio">
      <h1>
        La batería de tu auto <br />
        entregada e instalada <br />
        sin cargo.
      </h1>
      <button 
        onClick={() => openWhatsApp("¡Hola! Quisiera solicitar el servicio de entrega e instalación de batería sin cargo.")} 
        className="btn-servicio"
      >
        <WhatsAppOutlined style={{ fontSize: 28 }} />
        Pedir servicio
      </button>
    </div>
  );
};

export default BotonServicio;