/**
 * Module d'Authentification & Gestion des membres
 * Inscription en étapes, vérification par SMS simulée, profil prestataire
 */

const AuthModule = {
  getCurrentUser() {
    const raw = localStorage.getItem(window.APP_CONFIG.storageKeys.currentUser);
    return raw ? JSON.parse(raw) : null;
  },

  setCurrentUser(user) {
    localStorage.setItem(window.APP_CONFIG.storageKeys.currentUser, JSON.stringify(user));
  },

  registerMember(userData) {
    // Structure d'inscription guidée en < 3 minutes
    console.log("[AuthModule] Inscription membre :", userData);
  },

  verifyPhoneCode(phone, code) {
    // Vérification de code SMS
    console.log("[AuthModule] Vérification code SMS :", { phone, code });
    return true;
  },

  logout() {
    localStorage.removeItem(window.APP_CONFIG.storageKeys.currentUser);
    window.location.href = "login.html";
  }
};

window.AuthModule = AuthModule;
