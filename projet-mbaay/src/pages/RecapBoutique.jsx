
import React, { useState } from "react";
import { useLocation, useNavigate,Link } from "react-router-dom";

import "../styles/RecapBoutique.css";

const emptyShopDetails = {
  name: "",
  activity: "",
  products: "",
  location: "",
};

const detailFields = [
  {
    key: "name",
    mobileLabel: "NOM DE LA BOUTIQUE",
    desktopLabel: "NOM DE LA BOUTIQUE",
  },
  {
    key: "activity",
    mobileLabel: "ACTIVITÉ",
    desktopLabel: "ACTIVITÉ PRINCIPALE",
  },
  {
    key: "products",
    mobileLabel: "PRODUITS",
    desktopLabel: "PRODUITS",
  },
  {
    key: "location",
    mobileLabel: "LOCALISATION",
    desktopLabel: "LOCALISATION",
  },
];

export function RecapBoutique() {
  const location = useLocation();
  const navigate = useNavigate();

  /*
   * Pour le moment, les données viennent de l'étape précédente.
   * Plus tard, elles viendront du backend Django/DRF.
   */
  const receivedShopDetails = location.state?.shopDetails;

  const [shopDetails, setShopDetails] = useState(
    receivedShopDetails || emptyShopDetails
  );

  const [editingField, setEditingField] = useState(null);
  const [draftValue, setDraftValue] = useState("");

  /*
   * Ouvre la modification d'un champ
   */
  const openEditor = (field) => {
    setDraftValue(shopDetails[field] || "");
    setEditingField(field);
  };

  /*
   * Ferme la fenêtre de modification
   */
  const closeEditor = () => {
    setEditingField(null);
    setDraftValue("");
  };

  /*
   * Enregistre la modification localement.
   * Plus tard, cette modification sera envoyée au backend.
   */
  const saveField = (event) => {
    event.preventDefault();

    if (!editingField) {
      closeEditor();
      return;
    }

    setShopDetails((currentDetails) => ({
      ...currentDetails,
      [editingField]: draftValue.trim(),
    }));

    closeEditor();
  };

  /*
   * Continue vers l'étape suivante.
   *
   * Pour le moment, les données restent dans React Router.
   * Plus tard, elles seront enregistrées dans Django.
   */
  const handleContinue = () => {
    navigate("/agronome/infos", {
      state: {
        shopDetails,
      },
    });
  };

  /*
   * Permet de modifier tous les champs.
   * On commence par le premier champ.
   */
  const handleEditAll = () => {
    openEditor("name");
  };

  const currentField = detailFields.find(
    (field) => field.key === editingField
  );

  return (
    <main className="shop-preview-page">
      {/* ================================
          HEADER
      ================================= */}

      <header className="shop-preview-header">
        <div className="brand-wrapper">
          <div className="brand-name">MBAAY</div>
          <div className="brand-line" />
        </div>

        <div className="step-indicator">
          <span className="step-number">02</span>

          <span className="step-progress">
            <span />
          </span>

          <span className="step-text">
            Étape 2 sur 8
          </span>
        </div>
      </header>

      {/* ================================
          CONTENU PRINCIPAL
      ================================= */}

      <div className="shop-preview-content">

        {/* ================================
            INTRODUCTION
        ================================= */}

        <section className="shop-preview-intro">
          <h1>
            Voici votre boutique.
          </h1>

          <p>
            MBAAY a structuré les informations à partir de votre description.

            <span className="desktop-only">
              {" "}
              Nous avons extrait l'essentiel pour lancer votre présence en
              ligne.
            </span>
          </p>
        </section>

        {/* ================================
            INFORMATIONS BOUTIQUE
        ================================= */}

        <section
          className="shop-details"
          aria-label="Informations de votre boutique"
        >
          {detailFields.map((field) => (
            <div
              className="shop-detail-row"
              key={field.key}
            >
              <div className="shop-detail-content">

                <span className="detail-label mobile-label">
                  {field.mobileLabel}
                </span>

                <span className="detail-label desktop-label">
                  {field.desktopLabel}
                </span>

                <p className="detail-value">
                  {shopDetails[field.key] || "—"}
                </p>
              </div>

              {/* ================================
                  BOUTON MODIFIER MOBILE
              ================================= */}

              <button
                type="button"
                className="mobile-edit-button"
                aria-label={`Modifier ${field.mobileLabel.toLowerCase()}`}
                onClick={() => openEditor(field.key)}
              >
                Modifier
              </button>

              {/* ================================
                  BOUTON MODIFIER DESKTOP
              ================================= */}

              <button
                type="button"
                className="desktop-edit-button"
                onClick={() => openEditor(field.key)}
              >
                Modifier
              </button>
            </div>
          ))}
        </section>

        {/* ================================
            WAVEFORM MOBILE
        ================================= */}

        <div
          className="mobile-waveform"
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        {/* ================================
            ANALYSE DESKTOP
        ================================= */}

        <section className="analysis-card">

          <div className="analysis-icon-wrapper">
            <div className="analysis-icon">
              <span aria-hidden="true">◉</span>
            </div>

            <div className="analysis-check">
              ✓
            </div>
          </div>

          <div className="analysis-text">
            <h2>
              Analyse terminée
            </h2>

            <p>
              MBAAY a identifié les éléments clés de votre projet agricole.
              Vous pouvez passer à l'étape suivante ou affiner les détails.
            </p>
          </div>

          <div className="analysis-actions">

            <button
              type="button"
              className="primary-action"
              onClick={handleContinue}
            >
             <Link
            to="/infosagronome">
              <span>
                Valider et continuer
              </span>
              </Link>

              <span
                className="button-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </button>

            <button
              type="button"
              className="secondary-action"
              onClick={handleEditAll}
            >
              Tout modifier
            </button>

          </div>

          {/* ================================
              SIGNATURE AUDIO
          ================================= */}

          <div className="audio-signature">

            <span>
              SIGNATURE AUDIO
            </span>

            <div
              className="audio-waveform"
              aria-hidden="true"
            >
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>

          </div>

        </section>
      </div>

      {/* ================================
          FOOTER MOBILE
      ================================= */}

      <footer className="mobile-footer">

        <button
          type="button"
          className="mobile-primary-action"
          onClick={handleContinue}
        >
          <span>
            Valider et continuer
          </span>

          <span
            className="button-arrow"
            aria-hidden="true"
          >
            →
          </span>
        </button>

        <button
          type="button"
          className="mobile-secondary-action"
          onClick={handleEditAll}
        >
          Tout modifier
        </button>

      </footer>

      {/* ================================
          MODALE DE MODIFICATION
      ================================= */}

      {editingField !== null && (
        <div
          className="editor-overlay"
          onMouseDown={closeEditor}
          role="presentation"
        >
          <form
            className="editor-modal"
            onSubmit={saveField}
            onMouseDown={(event) => event.stopPropagation()}
          >

            <div className="editor-header">

              <span>
                {currentField?.mobileLabel}
              </span>

              <button
                type="button"
                className="editor-close"
                onClick={closeEditor}
                aria-label="Fermer"
              >
                ×
              </button>

            </div>

            <textarea
              value={draftValue}
              onChange={(event) => {
                setDraftValue(event.target.value);
              }}
              rows={
                editingField === "activity" ||
                editingField === "products"
                  ? 4
                  : 2
              }
              autoFocus
              placeholder="Saisissez une information..."
            />

            <div className="editor-actions">

              <button
                type="button"
                className="editor-cancel"
                onClick={closeEditor}
              >
                Annuler
              </button>

              <button
                type="submit"
                className="editor-save"
              >
                Enregistrer
              </button>

            </div>

          </form>
        </div>
      )}
    </main>
  );
}

