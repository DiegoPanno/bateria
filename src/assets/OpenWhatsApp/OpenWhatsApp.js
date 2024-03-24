export const phoneNumber = "+5492234428070"; // Reemplaza con tu número de teléfono
export const message = "¡Hola! Necesito más info por un servicio";

export const openWhatsAppChat = () => {
  window.open(
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};
