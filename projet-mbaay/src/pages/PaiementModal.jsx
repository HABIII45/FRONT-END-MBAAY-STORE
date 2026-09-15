import React from 'react';
import { createPortal } from 'react-dom';
import { CheckCircle2, X } from 'lucide-react';
import '../styles/PaiementModal.css';
import { Link } from 'react-router-dom';
export function PaymentModal({ isOpen, onClose, planName }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="pay-modal-backdrop" onClick={onClose}>
      <div className="pay-modal-box" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="pay-modal-close" onClick={onClose}>
          <X size={18} />
        </button>

        <div className="pay-modal-icon">
          <CheckCircle2 size={48} color="#b45309" />
        </div>

        <h2 className="pay-modal-title">Paiement Réussi !</h2>
        <p className="pay-modal-desc">
          Votre paiement pour l'<strong>{planName}</strong> a été validé. Votre abonnement MBAAY STORE est désormais actif.
        </p>

        
            <Link to="/boutique"  className="pay-modal-btn"  onClick={onClose}>
               Accéder à mon espace
          </Link>
        
      </div>
    </div>,
    document.body
  );
}