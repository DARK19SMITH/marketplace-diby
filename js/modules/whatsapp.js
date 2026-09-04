/**
 * Module de mise en relation directe WhatsApp
 * Génère le lien 'api.whatsapp.com/send' avec message pré-rédigé respectueux et fraternel
 */

const WhatsAppModule = {
  createContactLink(providerPhone, providerName, serviceTitle, senderName = "un membre de la communauté") {
    const cleanPhone = providerPhone.replace(/[^0-9]/g, "");
    const message = `Bonjour Frère/Sœur ${providerName}, la paix du Christ soit avec vous. Je suis ${senderName} du Service Catholique d'Évangélisation. J'ai vu votre service "${serviceTitle}" sur notre plateforme communautaire et je souhaiterais échanger avec vous.`;
    
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  },

  createDirectCallLink(providerPhone) {
    return `tel:${providerPhone}`;
  }
};

window.WhatsAppModule = WhatsAppModule;
