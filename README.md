# Plateforme Numérique Communautaire — Service Catholique d'Évangélisation (Amour & Puissance)

Place de marché et réseau d'entraide professionnel chrétien où les membres de la communauté peuvent proposer et trouver des services en toute confiance, fraternité et excellence.

> « Que chacun mette au service des autres le don qu'il a reçu, comme de bons dispensateurs des diverses grâces de Dieu. » — *1 Pierre 4:10*

---

## 📁 Architecture des Fichiers

```text
marketplace-diby/
│
├── index.html                   # Accueil : Vitrine, Recherche, 10 Catégories, Verset du jour, Appel à l'action
├── services.html                # Annuaire : Liste des prestataires, filtres avancés (ville, quartier, note)
├── service-detail.html          # Fiche prestataire : Réalisations, contact direct WhatsApp/Appel, avis, badge vérifié
├── register.html                # Inscription membre & prestataire (parcours guidé)
├── login.html                   # Connexion membre / prestataire / administrateur
├── profile.html                 # Profil utilisateur : Informations, quartier, communauté, statut de vérification
├── dashboard-provider.html      # Espace prestataire : Gestion des annonces, galerie de réalisations, avis reçus
├── admin.html                   # Console pastorale : Validation profils, gestion des versets, annonces, signalements
├── about.html                   # À propos : Genèse du projet, mission spirituelle et retombées économiques
├── charter.html                 # Charte communautaire : Confiance, sécurité, règles de vie chrétienne et modération
│
├── css/
│   ├── main.css                 # Variables globales (or, bleu roi, blanc), typographie, reset, header/footer
│   ├── components.css           # Composants réutilisables (cartes, badges, boutons WhatsApp/Appel, bannières)
│   ├── responsive.css           # Adaptabilité mobile, tablette et desktop
│   └── pages/
│       ├── home.css             # Styles de la page d'accueil
│       ├── services.css         # Styles de l'annuaire et des filtres
│       ├── service-detail.css   # Styles de la fiche détaillée prestataire
│       ├── auth.css             # Styles inscription et connexion
│       ├── dashboard.css        # Styles tableau de bord prestataire
│       └── admin.css            # Styles console d'administration pastorale
│
├── js/
│   ├── config.js                # Configuration globale et constantes
│   ├── main.js                  # Initialisation globale, navigation mobile, modals
│   ├── data/
│   │   ├── categories.js        # Les 10 domaines d'activité officiels
│   │   ├── bible-verses.js      # Base de versets bibliques classés par thématiques
│   │   └── mock-data.js         # Données d'exemple pour prestataires et avis
│   └── modules/
│       ├── auth.js              # Logique d'authentification et gestion de session
│       ├── search.js            # Moteur de recherche et filtres multicritères
│       ├── whatsapp.js          # Génération des messages pré-rédigés WhatsApp
│       ├── reviews.js           # Gestion du système de notation et d'avis
│       └── admin.js             # Logique d'administration et de modération
│
└── assets/
    ├── icons/                   # Icônes SVG et pictogrammes
    ├── images/                  # Images, logos, bannières et avatars
    └── docs/
        └── presentation.md      # Synthèse du document de présentation du projet
```

---

## 🎨 Charte Graphique & Identité
- **Bleu Roi & Marine** : Confiance, profondeur, institutionnel.
- **Or / Doré** : Élégance, grâce divine, charité, lumière.
- **Blanc & Blanc cassé** : Pureté, clarté, lisibilité et modernité.

## 🤝 Principes Clés
- **Zéro commission**
- **Zéro paiement en ligne** (transactions directes de gré à gré)
- **100% entre membres de la communauté**
- **Mise en relation directe** : WhatsApp pré-rempli et appel téléphonique direct.
