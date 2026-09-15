import React from "react";
import "../styles/ValidationBoutiqueFinal.css";

const options = [
  {
    id: "publish",
    title: "Publier ma boutique",
    description:
      "Publiez votre boutique et commencez à être visible sur MBAAY STORE. Vos clients peuvent dès maintenant découvrir votre univers.",
    button: "Mettre en ligne maintenant",
    recommended: true,
    icon: "publish",
  },
  {
    id: "products",
    title: "Ajouter d’abord des produits",
    description:
      "Prenez le temps d'organiser votre inventaire et d'ajouter vos premiers articles avant la mise en ligne officielle.",
    button: "Aller au catalogue produits",
    recommended: false,
    icon: "products",
  },
];

function PublishIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="shop-ready__icon-svg"
      aria-hidden="true"
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

function ProductsIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="shop-ready__icon-svg"
      aria-hidden="true"
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

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="shop-ready__arrow"
      aria-hidden="true"
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

function StepProgress() {
  return (
    <div className="shop-ready__progress">
      {Array.from({ length: 8 }).map((_, index) => (
        <span
          key={index}
          className="shop-ready__progress-item shop-ready__progress-item--active"
        />
      ))}
    </div>
  );
}

export function ValidationBoutiqueFinal() {
  /*
   * POUR LE MOMENT :
   * données temporaires pour visualiser l'interface.
   *
   * PLUS TARD :
   * ces données viendront du backend Django.
   */
  const shop = {
    name: "Les Jardins d'Aby",
    slug: "les-jardins-d-aby",
    logo: null,
    image: null,
  };

  /*
   * URL générée à partir du slug.
   *
   * PLUS TARD :
   * le domaine viendra de ton environnement.
   */
  const shopUrl = `${shop.slug}.mbaay.store`;

  const handlePublish = () => {
    console.log("Publication de la boutique :", shop.id);

    // Plus tard :
    // appel API Django
    // PATCH /api/shops/{id}/publish/
  };

  const handleProducts = () => {
    console.log("Ouverture du catalogue produits");

    // Plus tard :
    // navigate("/agronome/products");
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(
        `https://${shopUrl}`
      );

      console.log("Lien copié");
    } catch (error) {
      console.error("Impossible de copier le lien", error);
    }
  };

  return (
    <main className="shop-ready">
      <div
        className="shop-ready__background shop-ready__background--top"
        aria-hidden="true"
      />

      <div
        className="shop-ready__background shop-ready__background--bottom"
        aria-hidden="true"
      />

      {/* HEADER */}

      <header className="shop-ready__header">
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

      {/* CONTENU */}

      <section className="shop-ready__content">

        {/* ÉTAPE */}

        <div className="shop-ready__step">
          <span className="shop-ready__step-label">
            Étape 08 sur 08
          </span>

          <StepProgress />
        </div>

        {/* INTRO */}

        <div className="shop-ready__intro">
          <h1>Votre boutique est prête</h1>

          <p>
            Le processus d'onboarding est terminé.
            Choisissez comment vous souhaitez démarrer
            votre activité sur la plateforme.
          </p>
        </div>

        {/* OPTIONS */}

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
                {option.recommended && (
                  <div className="shop-ready__recommended">
                    RECOMMANDÉ
                  </div>
                )}

                <div className="shop-ready__card-content">

                  <div className="shop-ready__icon-box">
                    {option.icon === "publish" ? (
                      <PublishIcon />
                    ) : (
                      <ProductsIcon />
                    )}
                  </div>

                  <h2 className="shop-ready__card-title">
                    {option.title}
                  </h2>

                  <p className="shop-ready__card-description">
                    {option.description}
                  </p>

                </div>

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

        {/* APERÇU DES INFORMATIONS
            Cette partie pourra afficher les données
            récupérées depuis Django.
        */}

        <div className="shop-ready__shop-info">

          <div className="shop-ready__shop-info-header">
            <span>Nom de la boutique</span>

            <strong>{shop.name}</strong>
          </div>

          <div className="shop-ready__shop-link">

            <div>
              <span>Votre lien boutique</span>

              <strong>{shopUrl}</strong>
            </div>

            <button
              type="button"
              onClick={handleCopyLink}
            >
              Copier
            </button>

          </div>

        </div>

        {/* CITATION */}

        <div className="shop-ready__quote">
          "La terre ne ment jamais à celui qui la travaille avec passion."
        </div>

      </section>
    </main>
  );
}

