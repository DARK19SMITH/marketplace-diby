/**
 * Configuration globale de la Plateforme Numérique Communautaire
 * Service Catholique d'Évangélisation — Amour & Puissance
 */

const APP_CONFIG = {
  appName: "Plateforme Communautaire Numérique",
  organization: "Service Catholique d'Évangélisation — Amour & Puissance",
  version: "1.0.0",
  year: 2026,
  
  // Paramètres de contact direct
  defaultWhatsAppCountryCode: "+225", // Indicatif par défaut (ex: Côte d'Ivoire / ajustable)
  
  // Clés de stockage local (simulation sans backend)
  storageKeys: {
    currentUser: "sce_current_user",
    usersList: "sce_users",
    servicesList: "sce_services",
    versesList: "sce_verses",
    reportsList: "sce_reports"
  }
};

window.APP_CONFIG = APP_CONFIG;
