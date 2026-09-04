/**
 * Données de test / Simulation (Prestataires, Quartiers, Communautés)
 */

const MOCK_DATA = {
  communities: [
    "Paroisse Saint-Jean",
    "Paroisse Sainte-Cécile",
    "Communauté Cœur Immaculé",
    "Cellule Évangélisation Nord",
    "Cellule Évangélisation Sud"
  ],
  locations: [
    "Cocody",
    "Yopougon",
    "Marcory",
    "Plateau",
    "Riviera",
    "Abobo",
    "Treichville"
  ],
  providers: [
    {
      id: "prov-1",
      name: "Frère Jean-Marc Kouassi",
      category: "reparation-maintenance",
      profession: "Plombier & Chauffagiste certifié",
      city: "Abidjan",
      neighborhood: "Cocody",
      community: "Paroisse Saint-Jean",
      isVerified: true,
      rating: 4.9,
      reviewCount: 18,
      phone: "+2250700000001",
      whatsapp: "2250700000001",
      description: "Travaux d'installation et dépannage rapide avec rigueur et intégrité.",
      priceRange: "À partir de 10 000 FCFA"
    },
    {
      id: "prov-2",
      name: "Sœur Marie-Claire Diby",
      category: "artisanat-creation",
      profession: "Styliste & Couturière liturgique et civile",
      city: "Abidjan",
      neighborhood: "Marcory",
      community: "Paroisse Sainte-Cécile",
      isVerified: true,
      rating: 5.0,
      reviewCount: 24,
      phone: "+2250700000002",
      whatsapp: "2250700000002",
      description: "Confection soignée d'habits traditionnels, tenues d'événements et vêtements de louange.",
      priceRange: "Devis sur mesure"
    }
  ]
};

window.MOCK_DATA = MOCK_DATA;
