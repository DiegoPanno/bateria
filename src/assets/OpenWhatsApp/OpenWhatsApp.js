export const phoneNumber = "+5492234428070"; // Reemplaza con tu número de teléfono
export const message = "¡Hola! vengo del sitio web, necesito más info por un servicio";

// export const openWhatsAppChat = () => {
//   window.open(
//     `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
//     "_blank"
//   );
// };



export const openWhatsAppChat = () => {
  // Abrir la ventana de WhatsApp con el número de teléfono y mensaje predefinidos
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');

  // Enviar un evento personalizado a Google Analytics cuando se hace clic en el botón de WhatsApp
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'WhatsApp_Click', {
      event_category: 'Interacción',
      event_label: 'Botón WhatsApp Clickeado'
    });
  }
};