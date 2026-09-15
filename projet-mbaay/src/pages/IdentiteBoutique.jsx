import { useEffect, useState } from "react";
import "../styles/IdentiteBoutique.css";
import { Link } from "react-router-dom";

/* =========================================================
   DONNÉES MOCKÉES
   Plus tard :
   - catégories       -> API backend
   - moyens paiement  -> API backend
   - boutique         -> API/backend
   - produits aperçu  -> API/backend
   ========================================================= */

const mockShop = {
  name: "Ferme Ndiaye",
  farmerName: "Oumar Ndiaye",
  farmerRole: "Producteur & cultivateur",
  description:
    "Produits frais cultivés localement, récoltés à la commande pour une fraîcheur absolue.",
  location: "Dakar, Sénégal",
};

const mockCategories = [
  {
    id: "fruits",
    name: "Fruits",
    description: "Fruits frais et de saison",
  },
  {
    id: "legumes",
    name: "Légumes",
    description: "Légumes du jardin",
  },
  {
    id: "cereales",
    name: "Céréales",
    description: "Céréales et produits locaux",
  },
  {
    id: "miel",
    name: "Miel",
    description: "Miels et produits de la ruche",
  },
  {
    id: "epices",
    name: "Épices",
    description: "Épices et aromates",
  },
  {
    id: "tubercules",
    name: "Tubercules",
    description: "Tubercules et racines",
  },
];

const mockPaymentMethods = [
  {
    id: "mobile-money",
    name: "Mobile Money",
    description: "Wave, Orange Money...",
  },
  {
    id: "cash",
    name: "Espèces à la livraison",
    description: "Paiement lors de la réception",
  },
  {
    id: "bank",
    name: "Virement bancaire",
    description: "Paiement par virement",
  },
];

const mockProducts = [
  {
    id: "product-1",
    name: "Tomates de plein champ",
    description: "Récolte du matin à la rosée",
    price: "2 500 FCFA",
    unit: "Par kilogramme",
    categoryId: "legumes",
    image:
      "https://placehold.co/900x1100/e8e4d9/444444?text=Tomates",
  },
  {
    id: "product-2",
    name: "Mangues Vertes Kent",
    description: "Charnues et parfumées",
    price: "1 800 FCFA",
    unit: "Par unité",
    categoryId: "fruits",
    image:
      "https://placehold.co/700x500/e8e4d9/444444?text=Mangues",
  },
  {
    id: "product-3",
    name: "Miel de Casamance",
    description: "100% pur, récolté en forêt",
    price: "5 000 FCFA",
    unit: "Pot de 500 ml",
    categoryId: "miel",
    image:
      "https://placehold.co/700x500/e8e4d9/444444?text=Miel",
  },
];

const mockPalettes = [
  {
    id: "signature",
    name: "Signature",
    description: "Élégant & intemporel",
    colors: ["#111111", "#E8DFD0", "#B78B48"],
    preview: {
      background: "#F4F1EA",
      surface: "#FFFFFF",
      text: "#171717",
      muted: "#737373",
      accent: "#A97832",
      dark: "#171717",
    },
  },
  {
    id: "nature",
    name: "Nature",
    description: "Naturel & apaisé",
    colors: ["#23352B", "#E7E5D8", "#78866B"],
    preview: {
      background: "#F1F1E9",
      surface: "#FFFFFF",
      text: "#263128",
      muted: "#727B73",
      accent: "#64775F",
      dark: "#263128",
    },
  },
  {
    id: "classic",
    name: "Classic",
    description: "Sobre & minimal",
    colors: ["#111111", "#F5F5F5", "#8B8B8B"],
    preview: {
      background: "#F7F7F5",
      surface: "#FFFFFF",
      text: "#111111",
      muted: "#777777",
      accent: "#444444",
      dark: "#111111",
    },
  },
  {
    id: "earth",
    name: "Earth",
    description: "Chaleureux & authentique",
    colors: ["#49352A", "#E8D9C8", "#A36F45"],
    preview: {
      background: "#F2EBE3",
      surface: "#FFFFFF",
      text: "#382B23",
      muted: "#806F62",
      accent: "#996544",
      dark: "#382B23",
    },
  },
];

/* =========================================================
   ICÔNES
   ========================================================= */

function IconChevron({ direction = "right" }) {
  const rotation =
    direction === "down"
      ? "rotate(90deg)"
      : direction === "left"
        ? "rotate(180deg)"
        : "none";

  return (
    <svg
      className="pb-icon"
      viewBox="0 0 24 24"
      style={{ transform: rotation }}
      aria-hidden="true"
    >
      <path
        d="M9 5l7 7-7 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconUpload() {
  return (
    <svg className="pb-icon pb-icon--medium" viewBox="0 0 24 24">
      <path
        d="M12 15V4m0 0L8 8m4-4 4 4M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg className="pb-icon pb-icon--small" viewBox="0 0 24 24">
      <path
        d="M5 12.5l4 4L19 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCart() {
  return (
    <svg className="pb-icon pb-icon--medium" viewBox="0 0 24 24">
      <path
        d="M4 5h2l2 11h9l2-8H7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="20" r="1" fill="currentColor" />
      <circle cx="17" cy="20" r="1" fill="currentColor" />
    </svg>
  );
}

function IconSparkle() {
  return (
    <svg className="pb-icon pb-icon--small" viewBox="0 0 24 24">
      <path
        d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconLocation() {
  return (
    <svg className="pb-icon pb-icon--small" viewBox="0 0 24 24">
      <path
        d="M12 21s7-6.2 7-12A7 7 0 1 0 5 9c0 5.8 7 12 7 12Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="9" r="2.2" fill="currentColor" />
    </svg>
  );
}

/* =========================================================
   COMPOSANT PRINCIPAL
   ========================================================= */

export  function IdentiteBoutique() {
  const [shop, setShop] = useState(mockShop);
  

  const [selectedPalette, setSelectedPalette] = useState("signature");

  const [selectedCategories, setSelectedCategories] = useState([
    "fruits",
    "legumes",
    "miel",
  ]);

  const [selectedPayments, setSelectedPayments] = useState([
    "mobile-money",
  ]);

  const [coverPreview, setCoverPreview] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);

  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [cartCount] = useState(2);

  const currentPalette =
    mockPalettes.find((palette) => palette.id === selectedPalette) ||
    mockPalettes[0];

  /* =========================================================
     GESTION DES IMAGES

     Pour l'instant uniquement en local navigateur.
     Plus tard :
     -> upload API
     -> URL renvoyée par Django
     ========================================================= */

  const handleImageUpload = (event, type) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    if (type === "cover") {
      setCoverPreview((oldUrl) => {
        if (oldUrl) URL.revokeObjectURL(oldUrl);
        return imageUrl;
      });
    }

    if (type === "logo") {
      setLogoPreview((oldUrl) => {
        if (oldUrl) URL.revokeObjectURL(oldUrl);
        return imageUrl;
      });
    }
  };

  useEffect(() => {
    return () => {
      if (coverPreview) URL.revokeObjectURL(coverPreview);
      if (logoPreview) URL.revokeObjectURL(logoPreview);
    };
  }, [coverPreview, logoPreview]);

  /* =========================================================
     SÉLECTION CATÉGORIES
     ========================================================= */

  const toggleCategory = (categoryId) => {
    setSelectedCategories((current) => {
      if (current.includes(categoryId)) {
        return current.filter((id) => id !== categoryId);
      }

      return [...current, categoryId];
    });
  };

  /* =========================================================
     SÉLECTION PAIEMENTS
     ========================================================= */

  const togglePayment = (paymentId) => {
    setSelectedPayments((current) => {
      if (current.includes(paymentId)) {
        return current.filter((id) => id !== paymentId);
      }

      return [...current, paymentId];
    });
  };

  const selectedCategoryObjects = mockCategories.filter((category) =>
    selectedCategories.includes(category.id)
  );

  const selectedPaymentObjects = mockPaymentMethods.filter((payment) =>
    selectedPayments.includes(payment.id)
  );

  /* =========================================================
     PRODUITS DE DÉMONSTRATION
     Les vrais produits viendront du backend.
     ========================================================= */

  const previewProducts = mockProducts.filter((product) => {
    if (selectedCategories.length === 0) return true;

    return selectedCategories.includes(product.categoryId);
  });

  return (
    <div className="pb-page">
      <StudioHeader />

      <div className="pb-workspace">
        {/* =====================================================
            ÉDITEUR
            ===================================================== */}

        <main className="pb-editor">
          <div className="pb-editor-inner">
            <div className="pb-mobile-heading">
              <span>Étape 7 sur 8</span>
              <h1>Donnez son identité à votre boutique</h1>
              <p>
                Personnalisez l'apparence de votre boutique avant de la
                publier.
              </p>
            </div>

            {/* =================================================
                01 — COUVERTURE
                ================================================= */}

            <section className="pb-section">
              <SectionHeading
                number="01"
                title="Visuel de couverture"
                description="Ajoutez une image qui représente votre univers agricole."
              />

              <div className="pb-cover-upload">
                {coverPreview ? (
                  <img
                    src={coverPreview}
                    alt="Aperçu de la couverture"
                    className="pb-cover-image"
                  />
                ) : (
                  <div className="pb-upload-placeholder">
                    <div className="pb-upload-icon">
                      <IconUpload />
                    </div>

                    <span>Votre image de couverture</span>

                    <small>
                      Cette image sera utilisée sur la boutique publique.
                    </small>
                  </div>
                )}

                <label className="pb-upload-button">
                  <IconUpload />
                  <span>{coverPreview ? "Modifier" : "Ajouter une photo"}</span>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) =>
                      handleImageUpload(event, "cover")
                    }
                  />
                </label>
              </div>
            </section>

            {/* =================================================
                02 — AMBIANCE
                ================================================= */}

            <section className="pb-section">
              <SectionHeading
                number="02"
                title="Ambiance Studio"
                description="Choisissez l'univers visuel de votre boutique."
              />

              <div className="pb-palette-grid">
                {mockPalettes.map((palette) => {
                  const selected = palette.id === selectedPalette;

                  return (
                    <button
                      key={palette.id}
                      type="button"
                      className={`pb-palette-card ${
                        selected ? "is-selected" : ""
                      }`}
                      onClick={() => setSelectedPalette(palette.id)}
                    >
                      <div className="pb-palette-colors">
                        {palette.colors.map((color) => (
                          <span
                            key={color}
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>

                      <div className="pb-palette-content">
                        <strong>{palette.name}</strong>
                        <span>{palette.description}</span>
                      </div>

                      {selected && (
                        <span className="pb-selection-check">
                          <IconCheck />
                        </span>
                      )}
                    </button>
                  );
                })}

                <button
                  type="button"
                  className="pb-custom-palette"
                >
                  <span className="pb-custom-palette-plus">+</span>
                  <strong>Personnaliser</strong>
                  <span>Créer votre propre ambiance</span>
                </button>
              </div>

              <div className="pb-logo-row">
                <div className="pb-logo-text">
                  <span className="pb-mini-label">Identité</span>
                  <strong>Logo de votre boutique</strong>
                  <p>
                    Votre logo apparaîtra dans l'en-tête de votre boutique.
                  </p>
                </div>

                <label className="pb-logo-upload">
                  {logoPreview ? (
                    <img src={logoPreview} alt="Logo de la boutique" />
                  ) : (
                    <>
                      <span className="pb-logo-placeholder">LOGO</span>
                      <span className="pb-logo-add">+</span>
                    </>
                  )}

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) =>
                      handleImageUpload(event, "logo")
                    }
                  />
                </label>
              </div>
            </section>

            {/* =================================================
                03 — CATÉGORIES
                ================================================= */}

            <section className="pb-section">
              <SectionHeading
                number="03"
                title="Rayons"
                description="Sélectionnez les catégories proposées dans votre boutique."
              />

              <button
                type="button"
                className="pb-selector-card"
                onClick={() => setCategoryModalOpen(true)}
              >
                <div className="pb-selector-icon">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="pb-selector-content">
                  <strong>Choisir mes catégories</strong>

                  <span>
                    {selectedCategoryObjects.length > 0
                      ? selectedCategoryObjects
                          .map((category) => category.name)
                          .join(" · ")
                      : "Aucune catégorie sélectionnée"}
                  </span>
                </div>

                <div className="pb-selector-count">
                  {selectedCategories.length}
                </div>

                <IconChevron />
              </button>

              <div className="pb-info-note">
                <IconSparkle />
                <span>
                  Les catégories disponibles sont définies par MBAAY STORE.
                  Vous sélectionnez uniquement celles qui correspondent à
                  votre activité.
                </span>
              </div>

              <div className="pb-sales-unit-note">
                <strong>Unités de vente</strong>
                <span>
                  Les unités comme kilogramme, unité ou panier seront
                  sélectionnées lors de l'ajout de chaque produit.
                </span>
              </div>
            </section>

            {/* =================================================
                04 — PAIEMENTS
                ================================================= */}

            <section className="pb-section">
              <SectionHeading
                number="04"
                title="Paiements"
                description="Choisissez les moyens de paiement que vous acceptez."
              />

              <div className="pb-payment-grid">
                {mockPaymentMethods.map((payment) => {
                  const selected = selectedPayments.includes(payment.id);

                  return (
                    <button
                      key={payment.id}
                      type="button"
                      className={`pb-payment-card ${
                        selected ? "is-selected" : ""
                      }`}
                      onClick={() => togglePayment(payment.id)}
                    >
                      <div className="pb-payment-icon">
                        {payment.id === "mobile-money" && "M"}
                        {payment.id === "cash" && "₣"}
                        {payment.id === "bank" && "↗"}
                      </div>

                      <div>
                        <strong>{payment.name}</strong>
                        <span>{payment.description}</span>
                      </div>

                      <span className="pb-payment-check">
                        {selected && <IconCheck />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* =================================================
                APERÇU MOBILE
                ================================================= */}

            <div className="pb-mobile-preview">
              <PreviewPanel
                shop={shop}
                setShop={setShop}
                palette={currentPalette.preview}
                logoPreview={logoPreview}
                coverPreview={coverPreview}
                categories={selectedCategoryObjects}
                payments={selectedPaymentObjects}
                products={previewProducts}
                cartCount={cartCount}
              />
            </div>

            {/* =================================================
                ACTIONS
                ================================================= */}

            <div className="pb-actions">
              <button type="button" className="pb-skip-button">
                Passer pour le moment
              </button>

              <div className="pb-actions-right">
                <button type="button" className="pb-previous-button">
                  <IconChevron direction="left" />
                  Précédent
                </button>

                <Link to="/boutiquePublie" className="pb-continue-button">
                  Continuer
                  <IconChevron />
                </Link>
              </div>
            </div>
          </div>
        </main>

        {/* =====================================================
            APERÇU DESKTOP
            ===================================================== */}

        <aside className="pb-preview-pane">
          <PreviewPanel
            shop={shop}
            setShop={setShop}
            palette={currentPalette.preview}
            logoPreview={logoPreview}
            coverPreview={coverPreview}
            categories={selectedCategoryObjects}
            payments={selectedPaymentObjects}
            products={previewProducts}
            cartCount={cartCount}
          />
        </aside>
      </div>

      {/* =======================================================
          MODALE CATÉGORIES
          ======================================================= */}

      {categoryModalOpen && (
        <div
          className="pb-modal-overlay"
          onMouseDown={() => setCategoryModalOpen(false)}
        >
          <div
            className="pb-category-modal"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="pb-modal-header">
              <div>
                <span>Rayons</span>
                <h2>Choisir mes catégories</h2>
              </div>

              <button
                type="button"
                className="pb-modal-close"
                onClick={() => setCategoryModalOpen(false)}
              >
                ×
              </button>
            </div>

            <p className="pb-modal-description">
              Sélectionnez les catégories qui seront visibles dans votre
              boutique.
            </p>

            <div className="pb-category-list">
              {mockCategories.map((category) => {
                const selected = selectedCategories.includes(category.id);

                return (
                  <button
                    key={category.id}
                    type="button"
                    className={`pb-category-option ${
                      selected ? "is-selected" : ""
                    }`}
                    onClick={() => toggleCategory(category.id)}
                  >
                    <div>
                      <strong>{category.name}</strong>
                      <span>{category.description}</span>
                    </div>

                    <span className="pb-category-checkbox">
                      {selected && <IconCheck />}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              to="/boutiquePublie"
              className="pb-modal-confirm"
              onClick={() => setCategoryModalOpen(false)}
            >
              Valider la sélection
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   HEADER
   ========================================================= */

function StudioHeader() {
  return (
    <header className="pb-header">
      <div className="pb-header-brand">
        <strong>MBAAY STORE</strong>
        <span>/</span>
        <span>Agronome Studio</span>
      </div>

      <div className="pb-progress">
        {Array.from({ length: 8 }).map((_, index) => (
          <span
            key={index}
            className={`pb-progress-dot ${
              index === 6 ? "is-current" : ""
            } ${index < 6 ? "is-complete" : ""}`}
          />
        ))}
      </div>

      <button type="button" className="pb-help-button">
        Aide
      </button>
    </header>
  );
}

/* =========================================================
   TITRE DE SECTION
   ========================================================= */

function SectionHeading({ number, title, description }) {
  return (
    <div className="pb-section-heading">
      <span className="pb-section-number">{number}</span>

      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

/* =========================================================
   APERÇU RÉEL DE LA BOUTIQUE
   ========================================================= */

function PreviewPanel({
  shop,
  setShop,
  palette,
  logoPreview,
  categories,
  payments,
  products,
  cartCount,
}) {
  const previewStyle = {
    "--store-bg": palette.background,
    "--store-surface": palette.surface,
    "--store-text": palette.text,
    "--store-muted": palette.muted,
    "--store-accent": palette.accent,
    "--store-dark": palette.dark,
  };

  return (
    <div className="pb-preview-wrapper">
      <div className="pb-preview-heading">
        <span>Aperçu direct</span>
        <small>Votre boutique publique</small>
      </div>

      <div
        className="store-preview"
        style={previewStyle}
      >
        {/* ================================================
            NAVIGATION
            ================================================ */}

        <header className="store-header">
          <div className="store-logo">
            {logoPreview ? (
              <img src={logoPreview} alt="Logo" />
            ) : (
              <span>LOGO</span>
            )}
          </div>

          <div className="store-header-center">
            <span>{shop.name}</span>
          </div>

          <div className="store-header-actions">
            -

            <button type="button" className="store-cart">
              <IconCart />
              <span>{cartCount}</span>
            </button>
          </div>
        </header>

        {/* ================================================
            IDENTITÉ DE LA BOUTIQUE

            Pas de photo de couverture.
            ================================================ */}

        <section className="store-identity">
          <div className="store-location">
            <IconLocation />
            <span>{shop.location}</span>
          </div>

          <div className="store-identity-main">
            <div className="store-avatar">
              {logoPreview ? (
                <img src={logoPreview} alt="" />
              ) : (
                <span>
                  {shop.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </span>
              )}
            </div>

            <div className="store-identity-copy">
              <h1>{shop.name}</h1>

              <p>{shop.description}</p>
            </div>
          </div>

          <div className="store-founder">
            <strong>{shop.farmerName}</strong>
            <span>{shop.farmerRole}</span>
          </div>
        </section>

        {/* ================================================
            CONCIERGERIE
            ================================================ */}

        <section className="store-concierge">
          <div className="store-concierge-copy">
            <span className="store-eyebrow">
              Conciergerie agricole
            </span>

            <h2>Exprimer mon besoin</h2>

            <p>
              Décrivez simplement ce que vous souhaitez commander.
              L&apos;assistant vous aide à composer votre panier.
            </p>

            <div className="store-suggestions">
              <button type="button">Panier hebdomadaire</button>

              {categories.slice(0, 2).map((category) => (
                <button key={category.id} type="button">
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <button type="button" className="store-concierge-input">
            <span>Ex : un assortiment de légumes de saison...</span>

            <span className="store-concierge-send">
              <IconSparkle />
            </span>
          </button>

          <div className="store-ai-label">
            <IconSparkle />
            <span>
              L&apos;IA prépare votre sélection personnalisée
            </span>
          </div>
        </section>

        {/* ================================================
            PRODUITS
            ================================================ */}

        <section className="store-products">
          <div className="store-products-heading">
            <div>
              <span className="store-eyebrow">La boutique</span>
              <h2>Disponibles aujourd&apos;hui</h2>
            </div>

            <div className="store-products-navigation">
              <span>Tous les produits</span>

              <button type="button">←</button>
              <button type="button">→</button>
            </div>
          </div>

          {/* Grille asymétrique :
              produit 1 à gauche
              produit 2 + produit 3 à droite
          */}

          <div className="store-products-grid">
            {products[0] && (
              <PreviewProduct
                product={products[0]}
                featured
              />
            )}

            <div className="store-products-side">
              {products[1] && (
                <PreviewProduct product={products[1]} />
              )}

              {products[2] && (
                <PreviewProduct product={products[2]} />
              )}
            </div>
          </div>
        </section>

        {/* ================================================
            FOOTER
            ================================================ */}

        <footer className="store-footer">
          <div className="store-footer-main">
            <div>
              <span className="store-footer-label">
                {shop.name}
              </span>

              <p>{shop.description}</p>
            </div>

            <div className="store-footer-column">
              <span>Localisation</span>
              <p>{shop.location}</p>
            </div>

            <div className="store-footer-column">
              <span>Paiements</span>

              <p>
                {payments.length
                  ? payments.map((payment) => payment.name).join(" · ")
                  : "À définir"}
              </p>
            </div>
          </div>

          <div className="store-footer-bottom">
            <span>MBAAY STORE NETWORK</span>
            <span>© 2026 {shop.name}</span>
            <span>Confidentialité</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

/* =========================================================
   CARTE PRODUIT APERÇU
   ========================================================= */

function PreviewProduct({ product, featured = false }) {
  return (
    <article
      className={`store-product ${
        featured ? "store-product--featured" : ""
      }`}
    >
      <div className="store-product-image">
        <img
          src={product.image}
          alt=""
        />
      </div>

      <div className="store-product-info">
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>

        <div className="store-product-price">
          <strong>{product.price}</strong>
          <span>{product.unit}</span>
        </div>
      </div>
    </article>
  );
}