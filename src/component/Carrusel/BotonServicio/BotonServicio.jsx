import React from "react";
import { WhatsAppOutlined } from "@ant-design/icons";
import "./BotonServicio.css";
import { openWhatsAppChat } from "../../../assets/OpenWhatsApp/OpenWhatsApp";

const BotonServicio = () => {
  return (
    <div className="conte-servicio">
      <h1>
        La batería de tu auto <br />
        entregada e instalada <br />
        sin cargo.
      </h1>
      <button onClick={openWhatsAppChat} className="btn-servicio">
        <WhatsAppOutlined style={{ fontSize: 28 }} />
        Pedir servicio
      </button>
    </div>
  );
};

export default BotonServicio;
