import { HomeOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useCity } from "../../context/CityContext"; // Usamos el contexto de ciudad
import CarruselNav from '../CarruselNav/CarruselNav';

const NavBar = () => {
  const { openWhatsApp } = useCity(); // Extraemos la función de WhatsApp dinámico
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuVisible(!isSubMenuVisible);
  };

  const toggleMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }

    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="conte-nav">
      <div className="nav1">
        <div className="burger-menu" onClick={toggleMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </div>

      <div className={menu_class}>
        <ul>
          <Link to="/" className="li-nav"> <HomeOutlined /> Home</Link>
          
          {/* Llama al WhatsApp dinámico de la sucursal seleccionada */}
          <p 
            onClick={() => openWhatsApp("¡Hola! Consulta sobre servicios de baterías.")} 
            className="li-nav whatp"
          >
            <WhatsAppOutlined /> Servicios
          </p>

          {/* Botón de alternancia para los submenús */}
          <p className="li-nav toggle-button" onClick={toggleSubMenu}>
            Baterías {isSubMenuVisible ? "▲" : "▼"}
          </p>

          {/* Submenús */}
          <div className={`conte-linea ${isSubMenuVisible ? "visible" : "hidden"}`}>
            <Link className='linea' to="/auto-pickups"><span className='span-flecha'>▶</span> Autos y Pick ups</Link>
            <Link className='linea' to="/linea-asiatica" ><span className='span-flecha'>▶</span> Linea asiática</Link>
            <Link className='linea' to="/linea-pesada"><span className='span-flecha'>▶</span> Linea pesada</Link>
            <Link className='linea' to="/pequenos-tractores"><span className='span-flecha'>▶</span> Pequeños tractores</Link>
            <Link className='linea' to="/linea-efb"><span className='span-flecha'>▶</span> Linea EFB</Link>
          </div>
        </ul>

        <div className='conte-linea-muestra'>
          <CarruselNav />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
