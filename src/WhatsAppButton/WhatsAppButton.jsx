import React from "react";
import { useCity } from "../context/CityContext";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const { openWhatsApp, activeCityInfo } = useCity();

  return (
    <button 
      className="whatsapp-float-btn" 
      onClick={() => openWhatsApp()}
      aria-label={`Contactar por WhatsApp (${activeCityInfo?.label || 'WhatsApp'})`}
      title={`WhatsApp ${activeCityInfo?.label || ''}`}
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="WhatsApp" 
        width="35" 
        height="35" 
      />
    </button>
  );
};

export default WhatsAppButton;