/**
 * Base des versets bibliques de la communauté (Pages 1, 3, 8, 11)
 * Thèmes : vocation, service, honnêteté, charité, excellence, bénédiction
 */

const BIBLE_VERSES = [
  {
    id: "verse-1",
    theme: "vocation",
    reference: "1 Pierre 4:10",
    text: "Que chacun mette au service des autres le don qu'il a reçu, comme de bons dispensateurs des diverses grâces de Dieu.",
    placement: ["home", "hero"]
  },
  {
    id: "verse-2",
    theme: "entraide",
    reference: "Galates 5:13",
    text: "Rendez-vous service les uns aux autres, avec la charité qui vient de Dieu.",
    placement: ["home", "services"]
  },
  {
    id: "verse-3",
    theme: "foi",
    reference: "Romains 12:6",
    text: "Nous avons des dons différents, selon la grâce qui nous a été accordée.",
    placement: ["register", "provider-onboarding"]
  },
  {
    id: "verse-4",
    theme: "prosperite",
    reference: "Proverbes 19:17",
    text: "Celui qui a pitié du pauvre prête à l'Éternel, et l'Éternel lui rendra ce qu'il lui aura donné.",
    placement: ["marketplace", "charter"]
  },
  {
    id: "verse-5",
    theme: "integrite",
    reference: "Colossiens 4:6",
    text: "Que votre parole soit toujours accompagnée de grâce, assaisonnée de sel, afin que vous sachiez comment répondre à chacun.",
    placement: ["service-detail", "contact"]
  },
  {
    id: "verse-6",
    theme: "excellence",
    reference: "Colossiens 3:23",
    text: "Quoi que vous fassiez, faites-le de tout votre cœur, comme pour le Seigneur et non pour les hommes.",
    placement: ["provider-profile", "reviews"]
  },
  {
    id: "verse-7",
    theme: "fraternite",
    reference: "Galates 6:10",
    text: "Ainsi donc, pendant que nous en avons l'occasion, faisons du bien à tous, et surtout à nos frères dans la foi.",
    placement: ["about", "footer"]
  }
];

window.BIBLE_VERSES = BIBLE_VERSES;
