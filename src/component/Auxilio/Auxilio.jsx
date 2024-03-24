import React from "react";
import "./Auxilio.css";
import solicitar from "./img/solicita.png"
import mecanico from "./img/mecanico.jpg"
import moura from "./img/M20GD.jpg"
import { openWhatsAppChat } from "../../assets/OpenWhatsApp/OpenWhatsApp";




const Auxilio = () => {
  return (
    <div className="conte-auxilio">
      <h2 className="h2-circulo">Nuestro servicio</h2>
      <div className="conte-img-circulo">
    <div className="span-circulo">
        <div className="img-uno"><img className="img-circulo" src={solicitar} alt="Mujer usando un teléfono para chateart" /></div>
        <h4 className="h4-circulo">Obtén tu Batería Ahora</h4>
        <p className="p-auxilio">Nuestros expertos están listos para asesorarte personalmente y proporcionarte la solución que tu vehículo necesita.
        </p>
    </div>
    <div className="span-circulo">
        <div className="img-uno"><img className="img-circulo" src={mecanico} alt="Mecánico" /></div>
        <h4 className="h4-circulo">Instalación y Chequeo</h4>
        <p className="p-auxilio"> Nos encargamos de verificar sistema eléctrico de tu vehículo, garantizando una instalación impecable de la nueva batería.
        </p>
    </div>
    <div className="span-circulo">
        <div className="img-uno"><img className="img-circulo" src={moura} alt="Batería Moura modelo M20GD" /></div>
        <h4 className="h4-circulo">En domicilio sin cargo!</h4>
        <p className="p-auxilio">Ofrecemos servicios de instalación de baterías directamente en la comodidad de tu hogar. Simplificamos el proceso para adaptarnos a tu horario y ubicación.
        </p>
    </div>
</div>
    <button className="btn-auxilio" onClick={openWhatsAppChat}>Pedi tu servicio Ahora</button>
    </div>
  );
};

export default Auxilio;
