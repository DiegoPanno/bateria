import "./Footer.css";
import { BsWhatsapp, BsInstagram, BsFillGeoAltFill } from "react-icons/bs";
import { useCity } from "../../context/CityContext";
import React from "react";

const Footer = () => {
  // Extraemos la función de WhatsApp y la información de la ciudad activa
  const { openWhatsApp, activeCityInfo } = useCity();

  return (
    <footer>
      <div className="conte-location">
        {/* Nombre de la sucursal activa */}
        <h4 className="h4-footer"> 
          <BsFillGeoAltFill /> {activeCityInfo?.label}
        </h4>
        {/* Dirección dinámicamente según la ciudad seleccionada */}
        <h4 className="h4-footer">
          {activeCityInfo?.address || "Falucho 3155"}
        </h4>
      </div>
      <div>
        {/* Llama a WhatsApp usando el número activo de la ciudad seleccionada */}
        <BsWhatsapp 
          onClick={() => openWhatsApp()} 
          style={{ cursor: "pointer", color: "white", fontSize: 30, marginRight: 20 }} 
        />
        <BsInstagram 
          style={{ cursor: "pointer", color: "white", fontSize: 30, marginLeft: 10 }} 
        />
      </div>
      <hr />
      <p className="p-footer">Copyright Basinha srl</p>
    </footer>
  );
};

export default Footer;