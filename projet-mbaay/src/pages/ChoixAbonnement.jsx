import React, { useState } from 'react';
import '../styles/ChoixAbonnement.css';
import { Check, ShieldCheck, ArrowRight, Sparkles, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Subscription() {
  // State pour suivre la formule sélectionnée (par défaut 'monthly')
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  const commonFeatures = [
    "Boutique en ligne personnalisée",
    "Visibilité Marketplace MBAAY",
    "Outils IA d'optimisation agricole",
    "Gestion de produits illimitée",
    "Interface de gestion simplifiée"
  ];

  // Fonction pour mettre à jour le plan et le sauvegarder dans le localStorage
  const handleSelectPlan = (planType) => {
    setSelectedPlan(planType);
    localStorage.setItem('selectedPlanType', planType);
  };

  // Route unique de destination pour la validation
  const targetPath = "/agronome/infos-profil/abonnementValidation";

  return (
    <div className="sub-container">
      <div className="sub-halo-1"></div>
      <div className="sub-halo-2"></div>

      <header className="sub-header">
        <div className="sub-logo">
          <div className="sub-logo-badge">M</div>
          <span className="sub-logo-text">MBAAY STORE</span>
        </div>

        <div className="sub-progress-container">
          <span className="sub-progress-text">Étape 5 sur 8</span>
          <div className="sub-progress-bar-bg">
            <div className="sub-progress-bar-fill"></div>
          </div>
        </div>
      </header>

      <main className="sub-main">
        <div className="sub-heading-group">
          <h1 className="sub-title">
            Choisissez votre <br />
            <span className="sub-title-accent">formule d'abonnement</span>
          </h1>
          <p className="sub-subtitle">
            Des formules flexibles pensées pour s'adapter à la croissance de votre activité agricole.
          </p>
        </div>

        <div className="sub-cards-grid">
          {/* Plan Mensuel */}
          <div 
            className={`sub-card ${selectedPlan === 'monthly' ? 'selected' : ''}`}
            onClick={() => handleSelectPlan('monthly')}
          >
            <div className="sub-card-badge">Abonnement Mensuel</div>
            <div className="sub-price-group">
              <span className="sub-price-amount">15.000</span>
              <span className="sub-price-currency">FCFA</span>
            </div>
            <span className="sub-price-period">Par mois</span>
            <div className="sub-divider"></div>

            <div className="sub-features">
              {commonFeatures.map((feature, index) => (
                <div key={index} className="sub-feature-item">
                  <div className="sub-feature-icon"><Check size={14} /></div>
                  <span className="sub-feature-text">{feature}</span>
                </div>
              ))}
              <div className="sub-feature-item">
                <div className="sub-feature-icon"><Check size={14} /></div>
                <span className="sub-feature-text">Sans engagement de durée</span>
              </div>
            </div>

            <Link 
              to={targetPath} 
              state={{ planType: 'monthly' }}
              className={selectedPlan === 'monthly' ? 'sub-btn-primary' : 'sub-btn-outline'}
              onClick={() => handleSelectPlan('monthly')}
            >
              <span>Payer et continuer</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Plan Annuel */}
          <div 
            className={`sub-card featured ${selectedPlan === 'yearly' ? 'selected' : ''}`}
            onClick={() => handleSelectPlan('yearly')}
          >
            <span className="sub-discount-tag">2 Mois offerts</span>
            <div className="sub-card-badge">Abonnement Annuel</div>

            <div className="sub-price-group">
              <span className="sub-price-amount">150.000</span>
              <span className="sub-price-currency">FCFA</span>
            </div>
            <span className="sub-price-period">Par an (soit 12.500 F/mois)</span>
            <div className="sub-divider"></div>

            <div className="sub-features">
              {commonFeatures.map((feature, index) => (
                <div key={index} className="sub-feature-item">
                  <div className="sub-feature-icon"><Check size={14} /></div>
                  <span className="sub-feature-text">{feature}</span>
                </div>
              ))}
              <div className="sub-feature-item">
                <div className="sub-feature-icon"><Check size={14} /></div>
                <span className="sub-feature-text">Support prioritaire VIP 24/7</span>
              </div>
            </div>

            <Link 
              to={targetPath} 
              state={{ planType: 'yearly' }}
              className={selectedPlan === 'yearly' ? 'sub-btn-primary' : 'sub-btn-outline'}
              onClick={() => handleSelectPlan('yearly')}
            >
              <span>Payer et continuer</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="sub-trial-section">
          <div className="sub-trial-content">
            <div className="sub-trial-icon-box"><Gift size={24} /></div>
            <div>
              <h3 className="sub-trial-title">Vous hésitez encore ?</h3>
              <p className="sub-trial-desc">
                Profitez de toutes les fonctionnalités gratuitement pendant 10 jours. Aucune carte requise.
              </p>
            </div>
          </div>
          <Link to="/agronome/infos-profil/abonnement" className="sub-trial-btn">
            <Sparkles size={16} />
            <span>Tester 10 jours gratuitement</span>
          </Link>
        </div>

        <div className="sub-trust-badge">
          <ShieldCheck size={14} color="#b45309" />
          <span className="sub-trust-text">Paiement 100% sécurisé (Wave, Orange Money)</span>
        </div>

        <div className="sub-contact-group">
          <span className="sub-contact-text">Besoin d'un plan sur mesure pour une grande exploitation ?</span>
          <a href="#contact" className="sub-contact-link">Contactez notre équipe</a>
        </div>
      </main>
    </div>
  );
}