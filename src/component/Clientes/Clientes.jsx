import React, { useState } from "react";

import ford from "./img/fordSimone.png";
import GrupoNucleo from "./img/grupoNucleo.png";
import panacity from "./img/panacity.png";
import mercedes from "./img/mercedes.png";
import giama from "./img/giama.jpg";
import segunda from "./img/segunda.png";
import bpa from "./img/bpa.jpg";
import grua from "./img/grua.png";
import correo from "./img/correo.png";
import "./Clientes.css";

// const images = [
//   ford, GrupoNucleo, panacity, mercedes, giama, segunda, bpa, grua, correo
// ]

const Clientes = () => {



  return (
    <div className="conte-cliente">
      <h2 className="h2-clientes">Clientes</h2>
      <div className="clientes">
      
       
          <img
            src={ford}
            alt="Logo Ford Simone"
            style={{ height: 60, width: 100 }}
          />
          <img
            src={GrupoNucleo}
            alt="Logo grupo Nucleo"
            style={{ height: 60, width: 200 }}
          />
          <img
            src={panacity}
            alt="Logo de Panacity"
            style={{ height: 60, width: 150 }}
          />
          <img
            src={segunda}
            alt="Logo de La segunda seguros"
            style={{ height: 60, width: 100 }}
          />
          <img
            src={mercedes}
            alt="Logo de Mercedes Benz Simone"
            style={{ height: 60, width: 60 }}
          />
          <img
            src={giama}
            alt="Logo de Fiat Giama"
            style={{ height: 60, width: 110 }}
          />
          <img
            src={bpa}
            alt="Logo banco Provincia"
            style={{ height: 60, width: 100 }}
          />
          <img
            src={grua}
            alt="Gruas Edgardo Vazquez "
            style={{ height: 60, width: 100 }}
          />
          <img
            src={correo}
            alt="Correo Argentino "
            style={{ height: 60, width: 100 }}
          /> 
        
      </div>
    </div>
  );
};

export default Clientes;
