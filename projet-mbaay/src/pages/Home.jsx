
import mbaay_store_logo from "../assets/images/mbaay_store_logo.png";
import "../styles/Home.css";

import { Link } from "react-router-dom";

export function Home() {
    return (
        <main className="home">

            <video
                className="home_video"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
            >
                <source
                    src="/videos/MBAAY_VIDEO.mp4"
                    type="video/mp4"
                />
            </video>

            <div className="home_overlay"></div>

            <header className="home_header">
                <img
                    src={mbaay_store_logo}
                    alt="MBAAY STORE"
                    className="home_logo"
                />
            </header>

            <div className="home_access">

                <Link
                    to="/acheteur"
                    className="access_item"
                >
                    <span>Espace Acheteur</span>
                    <span>↗</span>
                </Link>

                <Link
                    to="/agronome"
                    className="access_item"
                >
                    <span>Espace Agronome</span>
                    <span>↗</span>
                </Link>

            </div>

        </main>
    );
}
