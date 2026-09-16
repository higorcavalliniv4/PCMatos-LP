const WHATSAPP_NUMBER = "";
const message = "Olá! Gostaria de solicitar um orçamento para manutenção de áreas verdes.";

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!WHATSAPP_NUMBER) return;
    event.preventDefault();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });
});
