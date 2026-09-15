import React, { useState } from 'react';
import '../styles/AgronomeConnexion.css';
import agronomePhoto from '../assets/images/agronome2.png';

export default function AgronomeConnexion() {
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (email) {
      console.log("Demande de lien envoyée pour :", email);
    }
  }

  return (
    <div className="login-page">
      {/* Barre de statut mobile supérieure */}
      
       

      {/* Carte principale */}
      <div className="login-card">
        <div className="login-card-inner">
          <div className="hero-image-container">
            <img src={agronomePhoto} alt="Agronome" className="hero-image" />
          </div>

          <div className="content-container">
            <div className="store-name">MBAAY STORE</div>
            <h1 className="main-title">BON<br />RETOUR.</h1>
            <p className="welcome-text">
              Entrez votre adresse e-mail pour accéder à votre espace MBAAY STORE.
            </p>

            <form className="login-form" onSubmit={handleSubmit}>
              <label htmlFor="email" className="input-label">ADRESSE E-MAIL</label>
              <div className="input-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="nom@exemple.com"
                  className="email-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                RECEVOIR MON LIEN
              </button>
            </form>

            <div className="security-notice">
              <i className="fa-solid fa-shield-halved security-icon"></i>
              <p className="notice-text">
                Un lien de connexion sécurisé vous sera envoyé par e-mail. Aucun mot de passe requis.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pied de page */}
      <footer className="login-footer">
        <span className="copyright">© 2024 MBAAY STORE</span>
        <div className="footer-links">
          <a href="/assistance" className="footer-link">ASSISTANCE</a>
          <a href="/legal" className="footer-link">LÉGAL</a>
        </div>
      </footer>
    </div>
  );
}