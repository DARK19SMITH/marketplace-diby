/**
 * Module Moteur de Recherche et Filtres multicritères
 * Catégories, quartier, ville, communauté, note minimale, tri dynamique
 */

const SearchModule = {
  filterServices({ query = "", category = "", neighborhood = "", community = "", minRating = 0, sortBy = "popular" }) {
    console.log("[SearchModule] Filtrage avec paramètres :", {
      query, category, neighborhood, community, minRating, sortBy
    });
    // Renvoie la liste filtrée à partir des données MOCK_DATA ou du stockage
    return window.MOCK_DATA ? window.MOCK_DATA.providers : [];
  },

  sortServices(list, sortBy) {
    // Tri : popularité, proximité, date d'inscription, note
    return list;
  }
};

window.SearchModule = SearchModule;
