import React from 'react';
import { useCity } from '../../context/CityContext';
import { BsFillGeoAltFill } from "react-icons/bs";
import './CitySelector.css';

const CitySelector = () => {
  const { city, setCity, activeCityInfo } = useCity();

  return (
    <div className="city-selector-wrapper">
      {/* 1. Dirección sutil del lado IZQUIERDO */}
      {activeCityInfo?.address && (
        <div className="city-address-badge">
          <span className="address-text">{activeCityInfo.address}</span>
        </div>
      )}

      {/* 2. Selector tipo píldora a la DERECHA de la dirección */}
      <div className="city-toggle-container">
        <button 
          className={`city-btn ${city === 'mdp' ? 'active' : ''}`}
          onClick={() => setCity('mdp')}
        >
          <BsFillGeoAltFill className="city-icon" /> Mar del Plata
        </button>
        <button 
          className={`city-btn ${city === 'cordoba' ? 'active' : ''}`}
          onClick={() => setCity('cordoba')}
        >
          <BsFillGeoAltFill className="city-icon" /> Córdoba
        </button>
      </div>
    </div>
  );
};

export default CitySelector;