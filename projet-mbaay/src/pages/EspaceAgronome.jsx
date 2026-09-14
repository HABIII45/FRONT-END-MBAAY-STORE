import agronome from '../assets/images/agronome.jpg' // Votre photo actuelle
import agropaysage from '../assets/images/agropaysage.png' // Image détourée ou format desktop

import mbaay_store_logo from '../assets/images/mbaay_store_logo.png'
import '../styles/EspaceAgronome.css'

export function EspaceAgronome() {
    return (
        <main className="espace-agronome">

           

            <section className="contenu-gauche">

                <div className="identite">
                    <span className="label">
                        ESPACE AGRONOME
                    </span>

                    <img
                        src={mbaay_store_logo}
                        alt="MBAAY STORE"
                        className="logo-mbaay"
                    />
                </div>

                <div className="contenu">
                    <h1>
                        Votre boutique
                        <br />
                        commence ici.
                    </h1>

                    <p>
                        Créez votre boutique et votre espace agronome
                        en une seule démarche.
                    </p>
                </div>

                <div className="actions">
                    <button className="btn-principal">
                        Creer ma boutique
                        <span>→</span>
                    </button>

                    <button className="btn-secondaire">
                        Acceder sur ma boutique
                        <span>→</span>
                    </button>
                </div>

            </section>

            <section className="visuel">
                <picture>
                    {/* Écrans Desktop (>= 769px) : Charge l'image Desktop */}
                    <source media="(min-width: 769px)" srcSet={agropaysage} />
                    
                    {/* Écrans Mobile (< 769px) : Garde votre image actuelle */}
                    <img
                        src={agronome}
                        alt="Agronome"
                        className="image-agronome"
                    />
                </picture>

                <div className="overlay"></div>
            </section>

        </main>
    )
}