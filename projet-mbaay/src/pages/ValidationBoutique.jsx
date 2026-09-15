import React from "react";
import "../styles/ValidationBoutique.css";
import { useNavigate } from "react-router-dom";

/* =========================================================
   DONNÉES DE LA PAGE
   ========================================================= */

const options = [
  {
    id: "publish",
    title: "Publier ma boutique",
    description: (
      <>
        Publiez votre boutique et commencez à être visible
        <br />
        sur MBAAY STORE. Vos clients peuvent dès
        <br />
        maintenant découvrir votre univers.
      </>
    ),
    button: "Mettre en ligne maintenant",
    recommended: true,
    icon: "publish",
  },
  {
    id: "products",
    title: "Ajouter d’abord des produits",
    description: (
      <>
        Prenez le temps d'organiser votre inventaire et
        <br />
        d'ajouter vos premiers articles avant la mise en
        <br />
        ligne officielle.
      </>
    ),
    button: "Aller au catalogue produits",
    recommended: false,
    icon: "products",
  },
];

/* =========================================================
   ICÔNE — PUBLICATION
   ========================================================= */

function PublishIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="shop-ready__icon-svg"
    >
      <path
        d="M16 4v17M9 11l7-7 7 7M7 20v4a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   ICÔNE — PRODUITS
   ========================================================= */

function ProductsIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="shop-ready__icon-svg"
    >
      <path
        d="M5 9.5 16 4l11 5.5v13L16 28 5 22.5v-13Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="M5 9.5 16 15l11-5.5M16 15v13"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   ICÔNE — FLÈCHE
   ========================================================= */

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="shop-ready__arrow"
    >
      <path
        d="M2.5 8h10M8.5 3.5 13 8l-4.5 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   PROGRESSION — ÉTAPE 08 / 08
   ========================================================= */

function StepProgress() {
  return (
    <div
      className="shop-ready__progress"
      aria-label="Progression : étape 8 sur 8"
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <span
          key={index}
          className="shop-ready__progress-item shop-ready__progress-item--active"
        />
      ))}
    </div>
  );
}

/* =========================================================
   PAGE PRINCIPALE
   ========================================================= */

export function ValidationBoutique() {
  /* -------------------------------------------------------
     ACTION : PUBLIER LA BOUTIQUE
     ------------------------------------------------------- */

   const navigate = useNavigate();

   const handlePublish = () => {
    navigate("/boutiquePubliefinal");
    };

  const handleProducts = () => {
    console.log("Ouverture du catalogue produits...");
  };


    /*
      Plus tard, ici tu pourras mettre :

      navigate("/agronome/shop/published");

      ou appeler ton API Django :

      await publishShop();
    */
  

  /* -------------------------------------------------------
     ACTION : AJOUTER DES PRODUITS
     ------------------------------------------------------- */

 

  return (
    <main className="shop-ready">
      {/* =====================================================
          ÉLÉMENTS DÉCORATIFS DE L'ARRIÈRE-PLAN
      ===================================================== */}

      <div
        className="shop-ready__background shop-ready__background--top"
        aria-hidden="true"
      />

      <div
        className="shop-ready__background shop-ready__background--bottom"
        aria-hidden="true"
      />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="shop-ready__header">
        {/* Logo / marque MBAAY */}
        <div className="shop-ready__brand">
          <div
            className="shop-ready__brand-mark"
            aria-hidden="true"
          >
            <span />
          </div>

          <span className="shop-ready__brand-name">
            MBAAY STORE
          </span>
        </div>

        {/* Assistance */}
        <div className="shop-ready__support">
          <span>Assistance :</span>

          <button
            type="button"
            className="shop-ready__support-button"
          >
            Support Expert
          </button>
        </div>
      </header>

      {/* =====================================================
          CONTENU PRINCIPAL
      ===================================================== */}

      <section className="shop-ready__content">
        {/* ---------------------------------------------------
            ÉTAPE
        --------------------------------------------------- */}

        <div className="shop-ready__step">
          <span className="shop-ready__step-label">
            Étape 08 sur 08
          </span>

          <StepProgress />
        </div>

        {/* ---------------------------------------------------
            INTRODUCTION
        --------------------------------------------------- */}

        <div className="shop-ready__intro">
          <h1>Votre boutique est prête</h1>

          <p>
            Le processus d'onboarding est terminé. Choisissez
            <br className="desktop-only" />
            comment vous souhaitez démarrer votre activité sur la
            <br className="desktop-only" />
            plateforme.
          </p>
        </div>

        {/* ---------------------------------------------------
            OPTIONS
        --------------------------------------------------- */}

        <div className="shop-ready__choices">
          {options.map((option) => {
            const isPublish = option.id === "publish";

            return (
              <article
                key={option.id}
                className={`shop-ready__card ${
                  isPublish
                    ? "shop-ready__card--recommended"
                    : "shop-ready__card--secondary"
                }`}
              >
                {/* Badge recommandé */}
                {option.recommended && (
                  <div className="shop-ready__recommended">
                    RECOMMANDÉ
                  </div>
                )}

                {/* Contenu de la carte */}
                <div className="shop-ready__card-content">
                  {/* Icône */}
                  <div className="shop-ready__icon-box">
                    {option.icon === "publish" ? (
                      <PublishIcon />
                    ) : (
                      <ProductsIcon />
                    )}
                  </div>

                  {/* Titre */}
                  <h2 className="shop-ready__card-title">
                    {option.title}
                  </h2>

                  {/* Description */}
                  <div className="shop-ready__card-description">
                    {option.description}
                  </div>
                </div>

                {/* ------------------------------------------------
                    BOUTON
                ------------------------------------------------ */}

                <button
                  type="button"
                  className={`shop-ready__action ${
                    isPublish
                      ? "shop-ready__action--primary"
                      : "shop-ready__action--secondary"
                  }`}
                  onClick={
                     isPublish
                     ? handlePublish
                     : handleProducts
                    }
                >
                  <span>{option.button}</span>

                  <ArrowIcon />
                </button>

                {/* Effet lumineux de la carte principale */}
                {isPublish && (
                  <div
                    className="shop-ready__card-glow"
                    aria-hidden="true"
                  />
                )}
              </article>
            );
          })}
        </div>

        {/* ===================================================
            CITATION
        =================================================== */}

        <div className="shop-ready__quote">
          "Merci d'avoir choisi MBAAY STORE."
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   EXPORT
   ========================================================= */

