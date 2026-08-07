import React from "react";
import "./Auxilio.css";
import solicitar from "./img/solicita.png";
import mecanico from "./img/mecanico.jpg";
import moura from "./img/M20GD.jpg";
import { useCity } from "../../context/CityContext"; // 1. Importar el hook

const Auxilio = () => {
  const { openWhatsApp } = useCity(); // 2. Obtener la función

  return (
    <div className="conte-auxilio">
      <h2 className="h2-circulo">Nuestro servicio</h2>
      <div className="conte-img-circulo">
        <div className="span-circulo">
          <div className="img-uno"><img className="img-circulo" src={solicitar} alt="Mujer usando un teléfono" /></div>
          <h4 className="h4-circulo">Obtén tu Batería Ahora</h4>
          <p className="p-auxilio">Nuestros expertos están listos para asesorarte personalmente...</p>
        </div>
        <div className="span-circulo">
          <div className="img-uno"><img className="img-circulo" src={mecanico} alt="Mecánico" /></div>
          <h4 className="h4-circulo">Instalación y Chequeo</h4>
          <p className="p-auxilio">Nos encargamos de verificar el sistema eléctrico de tu vehículo...</p>
        </div>
        <div className="span-circulo">
          <div className="img-uno"><img className="img-circulo" src={moura} alt="Batería Moura" /></div>
          <h4 className="h4-circulo">En domicilio sin cargo!</h4>
          <p className="p-auxilio">Ofrecemos servicios de instalación directamente en la comodidad de tu hogar...</p>
        </div>
      </div>
      
      {/* 3. Conectar al WhatsApp dinámico */}
      <button className="btn-auxilio" onClick={() => openWhatsApp("¡Hola! Necesito auxilio / instalación de batería a domicilio.")}>
        Pedi tu servicio Ahora
      </button>
    </div>
  );
};

export default Auxilio;