import React, { useState } from 'react';
import '../styles/InfosAgronome.css';
import { Link } from 'react-router-dom';

export  function LocationContactAgronome({ onNext }) {
  // États locaux pour la préparation du Backend
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    latitude: null,
    longitude: null,
  });

  const [locationStatus, setLocationStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  // Saisie des inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Géolocalisation via l'API Browser
  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setErrorMessage("La géolocalisation n'est pas supportée par votre navigateur.");
      return;
    }

    setLocationStatus('loading');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setFormData((prev) => ({
          ...prev,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }));
        setLocationStatus('success');
      },
      (error) => {
        console.error("Erreur géolocalisation :", error);
        setLocationStatus('error');
        setErrorMessage("Impossible d'accéder à votre position.");
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  // Envoi vers le composant parent ou l'API backend
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const payload = {
      email: formData.email,
      phone: formData.phone ? `+221${formData.phone}` : '',
      location: formData.latitude && formData.longitude ? {
        lat: formData.latitude,
        lng: formData.longitude,
      } : null,
    };

    if (onNext) {
      onNext(payload);
    } else {
      console.log("Données prêtes pour le backend :", payload);
    }
  };

  return (
    <div className="creation-step-page">
      {/* Brand Logo (Positionné en haut à gauche sur desktop) */}
      <header className="brand-header">
        <div className="brand-logo-box">
          <span className="brand-logo-letter">M</span>
        </div>
        <span className="brand-name">Mbaay Store</span>
      </header>

      {/* Main Container */}
      <main className="step-main-wrapper">
        <form onSubmit={handleSubmit} className="step-form">
          
          {/* Header de l'étape */}
          <header className="step-intro">
            <div className="step-badge-wrapper">
              <span className="step-badge-line" />
              <span className="step-badge">Étape 3 sur 8</span>
              <span className="step-badge-line" />
            </div>

            <h1 className="step-main-title">
              Quelques informations pour<br className="desktop-only-br" /> vous retrouver
            </h1>

            <p className="step-sub-title">
              Indiquez où se trouve votre activité et comment nous pouvons<br className="desktop-only-br" /> vous contacter pour optimiser vos échanges.
            </p>
          </header>

          {/* Section Localisation */}
          <section className="form-section">
            <h2 className="section-label">Localisation de votre activité</h2>
            
            <div className="location-action-area">
              <div className="location-glow" />
              <button
                type="button"
                className={`location-card-btn ${locationStatus === 'success' ? 'is-success' : ''}`}
                onClick={handleGetLocation}
                disabled={locationStatus === 'loading'}
              >
                <div className="location-icon-wrapper">
                  <svg className="location-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <span className="location-btn-text">
                  {locationStatus === 'loading' && 'Géolocalisation en cours...'}
                  {locationStatus === 'success' && 'Localisation activée avec succès'}
                  {locationStatus === 'error' && (errorMessage || 'Réessayer la géolocalisation')}
                  {locationStatus === 'idle' && 'Activer ma localisation'}
                </span>
              </button>
            </div>

            <p className="location-help-text">
              Votre position nous permet de proposer votre boutique aux acheteurs et<br className="desktop-only-br" /> partenaires dans un périmètre proche.
            </p>
          </section>

          {/* Section Coordonnées */}
          <section className="form-section contact-section">
            <h2 className="section-label">Coordonnées professionnelles</h2>

            <div className="inputs-stack">
              {/* Champ Email */}
              <div className="floating-input-group">
                <label htmlFor="email" className="floating-label">Adresse e-mail</label>
                <div className="input-underline-wrapper">
                  <svg className="input-icon-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="agronome@votre-domaine.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="styled-input"
                  />
                </div>
              </div>

              {/* Champ Téléphone */}
              <div className="floating-input-group">
                <label htmlFor="phone" className="floating-label">Numéro de téléphone</label>
                <div className="input-underline-wrapper">
                  <div className="phone-prefix-container">
                    <span className="phone-country-code">+221</span>
                    <span className="phone-prefix-divider" />
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="77 000 00 00"
                    value={formData.phone}
                    onChange={handleChange}
                    className="styled-input"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Soumission & Stepper */}
          <footer className="form-submit-footer">
            <button type="submit" className="submit-action-btn">
              <Link
                  to="/agronome/infos-profil">
              <span className="submit-btn-text">Continuer</span>
              </Link>
              <svg className="submit-btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Stepper Dots (Desktop & Mobile) */}
            <div className="step-pagination-dots" aria-label="Progression">
              <span className="dot" />
              <span className="dot" />
              <span className="dot active" />
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
          </footer>
        </form>
      </main>
    </div>
  );
}