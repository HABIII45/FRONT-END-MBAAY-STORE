import React from 'react';
import '../styles/AffichageCompteAgronome.css';
import { 
  Store, 
  User, 
  MapPin, 
  Mail, 
  Phone, 
  Edit2, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight,
  ShieldCheck 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export  function VerificationInfos() {
  return (
    <div className="step-container">
      {/* Background Glows */}
      <div className="halo-1"></div>
      <div className="halo-2"></div>

      <div className="step-wrapper">
        {/* Header */}
        <header className="step-header">
          <div className="header-logo">
            <div className="logo-badge">M</div>
            <div className="logo-text">
              <span className="logo-bold">MBAAY </span>
              <span className="logo-light">Store</span>
            </div>
          </div>

          <div className="header-progress">
            <div className="progress-bars">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <span className="step-label">Étape 04/04</span>
          </div>
        </header>

        {/* Main Grid */}
        <main className="step-main">
          {/* Left Side */}
          <div className="main-left">
            <h1 className="main-title">
              Votre espace <br />
              est <br />
              <span>presque prêt.</span>
            </h1>

            <p className="main-description">
              Vérifiez les informations de votre boutique et votre profil avant de finaliser l'ouverture de votre compte expert.
            </p>

            <div className="info-card">
              <div className="info-card-header">
                <ShieldCheck className="info-card-icon" />
                <span className="info-card-title">Vérification finale</span>
              </div>
              <p className="info-card-text">
                "Une présence en ligne optimisée commence par des informations précises. Prenez un instant pour relire vos détails."
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="main-right">
            {/* Card 1: Shop */}
            <div className="review-card">
              <div className="card-header">
                <div className="card-title-group">
                  <div className="icon-wrapper">
                    <Store size={18} />
                  </div>
                  <h2 className="card-title">Ma Boutique</h2>
                </div>
                <button className="btn-edit">
                  <span>Modifier</span>
                  <Edit2 size={12} />
                </button>
              </div>

              <div className="card-content">
                <div>
                  <span className="field-label">Nom commercial</span>
                  <p className="field-value">L'Agronome du Sine</p>
                </div>

                <div>
                  <span className="field-label">Activité principale</span>
                  <p className="field-value">Conseil & Vente d'intrants bio</p>
                </div>

                <div>
                  <span className="field-label">Description de l'activité</span>
                  <p className="field-description">
                    Accompagnement personnalisé pour les petits producteurs maraîchers de la région de Fatick. Expertise en fertilisation organique et lutte intégrée.
                  </p>
                </div>

                <div className="location-box">
                  <div className="location-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="field-label">Localisation de la boutique</span>
                    <p className="field-value" style={{ fontSize: '15px' }}>
                      Fatick, Sénégal — Zone B, Villa 42, Secteur Sud-Est
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Personal Profile */}
            <div className="review-card">
              <div className="card-header">
                <div className="card-title-group">
                  <div className="icon-wrapper">
                    <User size={18} />
                  </div>
                  <h2 className="card-title">Mon Profil Personnel</h2>
                </div>
                <button className="btn-edit">
                  <span>Modifier</span>
                  <Edit2 size={12} />
                </button>
              </div>

              <div className="profile-group">
                <div className="avatar-container">
                  <div className="avatar-img-box">
                    <img src="https://placehold.co/100x100" alt="Avatar" />
                  </div>
                  <div className="badge-check">
                    <CheckCircle2 size={14} />
                  </div>
                </div>

                <div className="profile-details">
                  <div>
                    <h3 className="user-name">Mamadou Diouf</h3>
                    <span className="user-role">Expert Agronome Certifié</span>
                  </div>

                  <div className="contact-list">
                    <div className="contact-item">
                      <Mail className="contact-icon" />
                      <span>m.diouf@agromail.sn</span>
                    </div>
                    <div className="contact-item">
                      <Phone className="contact-icon" />
                      <span>+221 77 123 45 67</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Actions */}
            <div className="actions-row">
              <button className="btn-secondary">
                <ArrowLeft size={16} />
                <span>Étape précédente</span>
              </button>

              <div className="right-actions">
                <button className="btn-text">
                  Sauvegarder pour plus tard
                </button>

                <button className="btn-primary">
                 <Link
                    to="/agronome/infos-profil/abonnement">
                  <span>Continuer vers l'abonnement</span>
                  </Link>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="step-footer">
          <div>© 2024 MBAAY AFRICA - Plateforme de gestion agricole</div>
          <div className="footer-links">
            <a href="#conditions">Conditions</a>
            <a href="#support">Support</a>
          </div>
        </footer>
      </div>
    </div>
  );
}