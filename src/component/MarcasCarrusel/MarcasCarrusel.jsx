import React, { useState } from "react";
import Images from "../../assets/export/Images";
import { motion } from "framer-motion";
import "./MarcasCarrusel.css";
import { GoCheckCircle } from "react-icons/go";
import { openWhatsAppChat } from "../../assets/OpenWhatsApp/OpenWhatsApp";

const imageVariants = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
};

const MarcasCarrusel = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

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
              <button onClick={openWhatsAppChat} className="dorso-item">
                <GoCheckCircle
                  style={{
                    fontSize: 40,
                    color: "white",
                  }}
                /> 
                <p className="p-item-dorso">Pedila ahora!</p>
              </button>
            ) : (
              
                <img className="imgSlider" src={image} alt="" />
              
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MarcasCarrusel;
