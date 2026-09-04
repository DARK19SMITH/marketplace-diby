/**
 * Module Gestion des Avis et Notations Fraternelles
 * Système de notation 1 à 5 étoiles, réponse publique du prestataire, signalement
 */

const ReviewsModule = {
  submitReview({ providerId, rating, comment, authorId }) {
    console.log("[ReviewsModule] Soumission avis :", { providerId, rating, comment, authorId });
  },

  replyToReview({ reviewId, replyText, providerId }) {
    console.log("[ReviewsModule] Réponse prestataire :", { reviewId, replyText, providerId });
  },

  reportReview(reviewId, reason) {
    console.log("[ReviewsModule] Signalement avis :", { reviewId, reason });
  }
};

window.ReviewsModule = ReviewsModule;
