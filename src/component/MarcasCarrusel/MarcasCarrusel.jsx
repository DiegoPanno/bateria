import React, { useState } from "react";
import Images from "../../assets/export/Images";
import { motion } from "framer-motion";
import "./MarcasCarrusel.css";
import { GoCheckCircle } from "react-icons/go";
import { useCity } from "../../context/CityContext"; // Importamos el contexto de ciudad

const imageVariants = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
};

const MarcasCarrusel = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const { openWhatsApp } = useCity(); // Extraemos la función de WhatsApp dinámico

  return (
    <div className="containerWithGradient"> {/* Aplica la clase con el gradiente */}
      <div className="slider" drag="x">
        {Images.map((image, index) => (
          <motion.div
            className="item"
            key={index}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            onMouseEnter={() => setHoveredImage(index)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            {hoveredImage === index ? (
              <button 
                onClick={() => openWhatsApp("¡Hola! Quisiera consultar por las marcas de baterías disponibles.")} 
                className="dorso-item"
              >
                <GoCheckCircle
                  style={{
                    fontSize: 40,
                    color: "white",
                  }}
                /> 
                <p className="p-item-dorso">¡Pedila ahora!</p>
              </button>
            ) : (
              <img className="imgSlider" src={image} alt={`Marca ${index + 1}`} />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MarcasCarrusel;