import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  CreditCard, 
  Smartphone, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle,
  Check
} from 'lucide-react';
import '../styles/ValidationAbonnement.css';
import { PaymentModal } from './PaiementModal';

export function ValidationAbonnement() {
  const location = useLocation();
  const [selectedMethod, setSelectedMethod] = useState('wave');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 1. Détection dynamique du type d'abonnement (passé via le Link ou le localStorage)
  const planType = location.state?.planType || localStorage.getItem('selectedPlanType') || 'monthly';
  const isYearly = planType === 'yearly';

  // 2. Variables de rendu calculées dynamiquement selon la sélection
  const planDetails = {
    name: isYearly ? "Abonnement Annuel" : "Abonnement Mensuel",
    frequency: isYearly ? "Annuelle" : "Mensuelle",
    amount: isYearly ? "150 000 FCFA" : "15 000 FCFA",
    period: isYearly ? "Par an (soit 12 500 F/mois)" : "Par mois"
  };

  const handleOpenPayment = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-content">
        
        {/* --- EN-TÊTE ET ÉTAPES --- */}
        <div className="checkout-header">
          <span className="step-badge">
            Étape 6 sur 8
          </span>
          <h1 className="main-title">
            Finalisez votre abonnement
          </h1>
          <p className="subtitle">
            Rejoignez le réseau MBAAY STORE. Choisissez votre moyen de paiement pour activer l'accès complet à vos outils d'agronomie.
          </p>
        </div>

        {/* --- GRILLE PRINCIPALE --- */}
        <div className="checkout-grid">
          
          {/* COLONNE GAUCHE : MÉTHODES DE PAIEMENT */}
          <div className="payment-methods-column">
            <div className="section-divider">
              <div className="divider-line" />
              <span className="section-title">
                Méthodes de Paiement
              </span>
            </div>

            <div className="methods-list">
              {/* Option 1: WAVE */}
              <div 
                onClick={() => setSelectedMethod('wave')}
                className={`payment-card ${selectedMethod === 'wave' ? 'active' : ''}`}
              >
                <div className="card-info">
                  <div className="icon-wrapper wave-icon">
                    <Smartphone className="icon" />
                  </div>
                  <div>
                    <h3 className="card-title">Wave</h3>
                    <p className="card-description">Paiement instantané via scanner QR ou numéro Wave</p>
                  </div>
                </div>
                <div className={`radio-check ${selectedMethod === 'wave' ? 'checked' : ''}`}>
                  {selectedMethod === 'wave' && <Check className="check-icon" />}
                </div>
              </div>

              {/* Option 2: ORANGE MONEY */}
              <div 
                onClick={() => setSelectedMethod('om')}
                className={`payment-card ${selectedMethod === 'om' ? 'active' : ''}`}
              >
                <div className="card-info">
                  <div className="icon-wrapper om-icon">
                    <Smartphone className="icon" />
                  </div>
                  <div>
                    <h3 className="card-title">Orange Money</h3>
                    <p className="card-description">Paiement via code Maxit ou validation USSD</p>
                  </div>
                </div>
                <div className={`radio-check ${selectedMethod === 'om' ? 'checked' : ''}`}>
                  {selectedMethod === 'om' && <Check className="check-icon" />}
                </div>
              </div>

              {/* Option 3: CARTE BANCAIRE */}
              <div 
                onClick={() => setSelectedMethod('card')}
                className={`payment-card ${selectedMethod === 'card' ? 'active' : ''}`}
              >
                <div className="card-info">
                  <div className="icon-wrapper card-icon">
                    <CreditCard className="icon" />
                  </div>
                  <div>
                    <h3 className="card-title">Carte Bancaire</h3>
                    <p className="card-description">Visa, Mastercard ou American Express</p>
                  </div>
                </div>
                <div className={`radio-check ${selectedMethod === 'card' ? 'checked' : ''}`}>
                  {selectedMethod === 'card' && <Check className="check-icon" />}
                </div>
              </div>
            </div>

            {/* RASSURANCE ET SSL */}
            <div className="security-footer">
              <div className="security-badge">
                <div className="flex-line" />
                <div className="security-text">
                  <Lock className="lock-icon" />
                  <span>Transaction chiffrée SSL 256-bit</span>
                </div>
                <div className="flex-line" />
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : RÉCAPITULATIF DYNAMIQUE */}
          <div className="summary-card">
            
            <div className="summary-header">
              <div className="summary-top-row">
                <span className="summary-badge">
                  Récapitulatif
                </span>
                <CheckCircle2 className="check-circle" />
              </div>

              <div className="summary-titles">
                <h2 className="summary-title">
                  Abonnement MBAAY STORE
                </h2>
                <p className="summary-plan">
                  {planDetails.name}
                </p>
              </div>
            </div>

            {/* DÉTAILS DYNAMIQUES */}
            <div className="summary-details">
              <div className="detail-row">
                <span className="detail-label">Fréquence</span>
                <span className="detail-value">{planDetails.frequency}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Taxe (TVA 18%)</span>
                <span className="detail-value">Inclus</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Frais de service</span>
                <span className="detail-value">0 FCFA</span>
              </div>
            </div>

            <div className="horizontal-divider" />

            {/* TOTAL DYNAMIQUE */}
            <div className="total-section">
              <span className="total-label">Total</span>
              <div className="total-amount-box">
                <div className="total-amount">{planDetails.amount}</div>
                <div className="total-period">{planDetails.period}</div>
              </div>
            </div>

            {/* BOUTON D'ACTION */}
            <button className="pay-button" onClick={handleOpenPayment}>
              <span>Payer et continuer</span>
              <ArrowRight className="btn-icon" />
            </button>

            {/* MENTIONS LÉGALES */}
            <p className="legal-terms">
              En cliquant sur Payer, vous acceptez nos{' '}
              <a href="#cgv" className="legal-link">Conditions Générales de Vente</a>{' '}
              et notre{' '}
              <a href="#confidentialite" className="legal-link">Politique de Confidentialité</a>.
            </p>

          </div>

        </div>

        {/* --- PIED DE PAGE ET SUPPORT --- */}
        <div className="checkout-footer">
          <div className="support-box">
            <div className="support-icon-wrapper">
              <HelpCircle className="support-icon" />
            </div>
            <div className="support-info">
              <span className="support-title">Besoin d'aide ?</span>
              <a href="mailto:support@mbaaystore.com" className="support-email">
                support@mbaaystore.com
              </a>
            </div>
          </div>

          <div className="guarantees-list">
            <span>Paiement Sécurisé</span>
            <span>Support 24/7</span>
            <span>Annulation Flexible</span>
          </div>
        </div>

      </div>

      <PaymentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        planName={planDetails.name} 
      />
    </div>
  );
}