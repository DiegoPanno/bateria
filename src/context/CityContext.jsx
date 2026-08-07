import React, { createContext, useState, useContext } from 'react';

const CityContext = createContext();

export const phoneNumbers = {
  mdp: {
    number: "5492235759444", // Sin el "+" para evitar bugs en la URL de wa.me
    label: "Mar del Plata",
    address: "Calle Falucho 3155 (MDP)",
    defaultMsg: "¡Hola! Vengo del sitio web, necesito más info para Mar del Plata."
  },
  cordoba: {
    number: "5493546409036", // Sin el "+" para evitar bugs en la URL de wa.me
    label: "Córdoba",
    address: "Av Jorge Newbery 814 Villa Gral Belgrano (Córdoba)",
    defaultMsg: "¡Hola! Vengo del sitio web, necesito más info para Córdoba."
  }
};

export const CityProvider = ({ children }) => {
  // Estado para la localidad activa
  const [city, setCity] = useState('mdp'); 

  // Función global para abrir WhatsApp según la ciudad actual
  const openWhatsApp = (customMsg) => {
    const activeCity = phoneNumbers[city] || phoneNumbers.mdp;
    
    // Validamos que customMsg sea realmente un string y no un evento de React o undefined
    let messageText = activeCity.defaultMsg;
    if (typeof customMsg === 'string' && customMsg.trim() !== '') {
      messageText = customMsg;
    }

    const url = `https://wa.me/${activeCity.number}?text=${encodeURIComponent(messageText)}`;
    window.open(url, '_blank');

    // Métrica de Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'WhatsApp_Click', {
        event_category: 'Interacción',
        event_label: `Botón WhatsApp (${activeCity.label})`
      });
    }
  };

  return (
    <CityContext.Provider value={{ city, setCity, openWhatsApp, activeCityInfo: phoneNumbers[city] || phoneNumbers.mdp }}>
      {children}
    </CityContext.Provider>
  );
};

export const useCity = () => useContext(CityContext);