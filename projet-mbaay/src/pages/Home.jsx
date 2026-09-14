import mbaay_store_logo from "../assets/images/mbaay_store_logo.png";
import "../styles/Home.css";

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

        <button className="access_item">
          <div>
            <span className="access_label">
              ACCÈS CLIENT
            </span>

            <span className="access_title">
              Espace Acheteur
            </span>
          </div>

          <span className="access_arrow">
            ↗
          </span>
        </button>


        <button className="access_item">
          <div>
            <span className="access_label">
              ACCÈS PROFESSIONNEL
            </span>

            <span className="access_title">
              Espace Agronome
            </span>
          </div>

          <span className="access_arrow">
            ↗
          </span>
        </button>

      </div>

    </main>
  );
}