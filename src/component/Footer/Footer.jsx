import "./Footer.css";
import { BsWhatsapp, BsInstagram, BsFillGeoAltFill } from "react-icons/bs";
import { openWhatsAppChat } from "../../assets/OpenWhatsApp/OpenWhatsApp";

import React from "react";

const Footer = () => {
  return (
    <footer>
        <div className="conte-location">
        <h4 className="h4-footer"> <BsFillGeoAltFill /> Mar del Plata</h4>
        <h4 className="h4-footer">Falucho 3155</h4>
        </div>
      <div>
        <BsWhatsapp onClick={openWhatsAppChat} style={{ cursor: "pointer", color: "white", fontSize: 30, marginRight: 20, }} />
        <BsInstagram onClick={openWhatsAppChat} style={{ cursor: "pointer", color: "white", fontSize: 30, marginLeft: 10, }} />
      </div>
      <hr />
      <p className="p-footer">Copyright Basinha srl</p>
    </footer>
  );
};

export default Footer;
