/**
 * LOGIQUE D'INTERACTION DIGITALE HAUTE-FIDÉLITÉ
 * Simulateur WhatsApp, Sélecteur Liturgique & Recherche Contextuelle
 */

document.addEventListener("DOMContentLoaded", () => {
  console.log("⚡ SCE Digital Instrument initialisé avec succès.");

  // ========================================================
  // 1. GESTION DU SIMULATEUR WHATSAPP EN DIRECT
  // ========================================================
  const modal = document.getElementById("whatsapp-simulator-modal");
  const modalCloseBtn = document.getElementById("wa-modal-close");
  const modalName = document.getElementById("wa-modal-name");
  const modalAvatar = document.getElementById("wa-modal-avatar");
  const modalBubble = document.getElementById("wa-bubble-text");
  const modalRealLink = document.getElementById("wa-real-link");

  window.openWhatsAppSimulator = function(providerName, serviceTitle, phone) {
    if (!modal) return;
    
    // Message personnalisé fraternel
    const message = `Bonjour ${providerName}, la paix du Christ soit avec vous ! Je suis membre de la communauté SCE. J'ai découvert votre offre "${serviceTitle}" sur notre plateforme et je souhaiterais solliciter vos services.`;
    
    if (modalName) modalName.textContent = providerName;
    if (modalBubble) modalBubble.textContent = message;
    
    // Lien WhatsApp réel
    const cleanPhone = (phone || "2250700000000").replace(/[^0-9]/g, "");
    if (modalRealLink) {
      modalRealLink.href = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    }

    // Afficher la modale
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  function closeModal() {
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closeModal();
    }
  });

  // ========================================================
  // 2. ONGLET VERSÉS BIBLIQUES DYNAMIQUES (ADN SPIRITUEL)
  // ========================================================
  const tabButtons = document.querySelectorAll(".spiritual-tab-btn");
  const verseTextContent = document.getElementById("verse-text-content");
  const verseRefContent = document.getElementById("verse-ref-content");
  const verseThemeContent = document.getElementById("verse-theme-content");

  const THEMATIC_VERSES = {
    vocation: {
      text: "Que chacun mette au service des autres le don qu'il a reçu, comme de bons dispensateurs des diverses grâces de Dieu.",
      ref: "— 1 Pierre 4:10",
      badge: "Vocation au service"
    },
    entraide: {
      text: "Rendez-vous service les uns aux autres, avec la charité qui vient de Dieu. Car toute la loi est accomplie dans une seule parole : Tu aimeras ton prochain comme toi-même.",
      ref: "— Galates 5:13-14",
      badge: "Entraide & Charité"
    },
    excellence: {
      text: "Quoi que vous fassiez, faites-le de tout votre cœur, comme pour le Seigneur et non pour les hommes.",
      ref: "— Colossiens 3:23",
      badge: "Excellence & Dévouement"
    },
    integrite: {
      text: "Que votre parole soit toujours accompagnée de grâce, assaisonnée de sel, afin que vous sachiez comment répondre à chacun.",
      ref: "— Colossiens 4:6",
      badge: "Intégrité & Respect"
    },
    prosperite: {
      text: "Celui qui a pitié du pauvre prête à l'Éternel, et l'Éternel lui rendra ce qu'il lui aura donné. Faisons du bien surtout à nos frères dans la foi.",
      ref: "— Proverbes 19:17 & Galates 6:10",
      badge: "Prospérité & Bénédiction"
    }
  };

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const theme = btn.getAttribute("data-theme");
      const verseData = THEMATIC_VERSES[theme];
      if (verseData && verseTextContent) {
        // Animation fluide de transition de texte
        verseTextContent.style.opacity = "0";
        setTimeout(() => {
          verseTextContent.textContent = `« ${verseData.text} »`;
          if (verseRefContent) verseRefContent.textContent = verseData.ref;
          if (verseThemeContent) verseThemeContent.textContent = verseData.badge;
          verseTextContent.style.opacity = "1";
        }, 180);
      }
    });
  });

  // ========================================================
  // 3. MOTEUR DE RECHERCHE CONTEXTUELLE & PUCES RAPIDES
  // ========================================================
  const searchInput = document.getElementById("hero-search-query");
  const categorySelect = document.getElementById("hero-category-select");
  const btnSearch = document.getElementById("btn-hero-search");
  const searchChips = document.querySelectorAll(".search-chip");

  function triggerSearch(term) {
    const q = term || (searchInput ? searchInput.value.trim() : "");
    const cat = categorySelect ? categorySelect.value : "";
    let url = `services.html?`;
    if (q) url += `q=${encodeURIComponent(q)}&`;
    if (cat) url += `category=${encodeURIComponent(cat)}`;
    window.location.href = url;
  }

  if (btnSearch) {
    btnSearch.addEventListener("click", () => triggerSearch());
  }

  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") triggerSearch();
    });
  }

  searchChips.forEach(chip => {
    chip.addEventListener("click", () => {
      const q = chip.getAttribute("data-query");
      if (searchInput) searchInput.value = q;
      triggerSearch(q);
    });
  });

  // ========================================================
  // 4. MICRO-ANIMATIONS DE PARALLAXE DOUCE SUR LES CAPSULES
  // ========================================================
  const heroVisual = document.querySelector(".hero-right-visual");
  if (heroVisual && window.matchMedia("(min-width: 1024px)").matches) {
    window.addEventListener("mousemove", (e) => {
      const x = (window.innerWidth / 2 - e.pageX) / 60;
      const y = (window.innerHeight / 2 - e.pageY) / 60;
      heroVisual.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      heroVisual.style.transition = "transform 0.1s ease-out";
    });
  }
});
