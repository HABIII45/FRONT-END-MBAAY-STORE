import React, { useEffect, useRef, useState } from "react";
import "../styles/CreerBoutique.css";
import { Link } from "react-router-dom";
const examplePlaceholder =
  "Ex. Je suis Aby, jeune agronome. Je produis des légumes bio dans la région de Thiès et je souhaite vendre des paniers hebdomadaires...";

export  function CreerBoutique() {
  const [activityDescription, setActivityDescription] = useState("");
  const [isListening, setIsListening] = useState(false);

  const mediaRecorderRef = useRef(null);
  const mediaStreamRef = useRef(null);

  const stopListening = () => {
    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.stop();
    }

    mediaStreamRef.current?.getTracks().forEach((track) => {
      track.stop();
    });

    mediaRecorderRef.current = null;
    mediaStreamRef.current = null;

    setIsListening(false);
  };

  useEffect(() => {
    return () => {
      mediaStreamRef.current?.getTracks().forEach((track) => {
        track.stop();
      });
    };
  }, []);

  const handleVoiceInput = async () => {
    if (isListening) {
      stopListening();
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      mediaStreamRef.current = stream;

      if (typeof MediaRecorder !== "undefined") {
        const recorder = new MediaRecorder(stream);

        recorder.addEventListener("stop", () => {
          stream.getTracks().forEach((track) => {
            track.stop();
          });

          mediaRecorderRef.current = null;
          mediaStreamRef.current = null;
          setIsListening(false);
        });

        recorder.start();

        mediaRecorderRef.current = recorder;
        setIsListening(true);
      }
    } catch (error) {
      console.error("Impossible d'accéder au microphone :", error);
      setIsListening(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!activityDescription.trim()) {
      return;
    }

    console.log("Description :", activityDescription);

    // Plus tard :
    // envoyer activityDescription au backend Django
    // puis rediriger vers l'étape 2.
  };

  return (
    <main className="creation-page">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="creation-header">
        <p className="creation-brand">MBAAY</p>
      </header>

      {/* =====================================================
          CONTENU PRINCIPAL
      ===================================================== */}

      <form
        id="activity-form"
        className="creation-form-page"
        onSubmit={handleSubmit}
      >
        {/* ===================================================
            TITRE
        =================================================== */}

        <section
          className="creation-intro"
          aria-labelledby="onboarding-title"
        >
          <div className="creation-intro-content">

            <div className="creation-title-wrapper">
              <h1
                id="onboarding-title"
                className="creation-title"
              >
                Créons votre
                <br />
                boutique.
              </h1>
            </div>

            <div className="creation-subtitle-wrapper">
              <p className="creation-subtitle">
                Parlez-nous simplement de
                <br />
                votre activité. MBAAY
                <br />
                structurera le reste.
              </p>
            </div>

          </div>
        </section>

        {/* ===================================================
            DESCRIPTION
        =================================================== */}

        <section
          className="activity-section"
          aria-label="Description de votre activité"
        >
          <div className="activity-box">

            <label
              htmlFor="activity-description"
              className="sr-only"
            >
              Décrivez votre activité
            </label>

            <textarea
              id="activity-description"
              name="activityDescription"
              value={activityDescription}
              onChange={(event) => {
                setActivityDescription(event.target.value);
              }}
              placeholder={examplePlaceholder}
              className="activity-textarea"
              aria-describedby="voice-input-description"
            />

          </div>

          {/* =================================================
              MICROPHONE
          ================================================= */}

          <div className="voice-section">

            <div className="voice-content">

              <button
                type="button"
                onClick={handleVoiceInput}
                className={`voice-button ${
                  isListening ? "is-listening" : ""
                }`}
                aria-label={
                  isListening
                    ? "Arrêter l'enregistrement vocal"
                    : "Commencer l'enregistrement vocal"
                }
                aria-pressed={isListening}
              >
                <i
                  className={
                    isListening
                      ? "fa-solid fa-stop"
                      : "fa-solid fa-microphone"
                  }
                ></i>
              </button>

              <span className="voice-label">
                {isListening
                  ? "ÉCOUTE EN COURS"
                  : "OU PARLEZ SIMPLEMENT"}
              </span>

              <div className="voice-decoration">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span
                id="voice-input-description"
                className="sr-only"
              >
                {isListening
                  ? "L'enregistrement vocal est en cours."
                  : "Utilisez le microphone pour décrire votre activité à voix haute."}
              </span>

            </div>

          </div>
        </section>
      </form>

      {/* =====================================================
          FOOTER / BOUTON
      ===================================================== */}

      <footer className="creation-footer">

        <button
          type="submit"
          form="activity-form"
          className="continue-button"
          disabled={!activityDescription.trim()}
          aria-label="Continuer vers l'étape suivante"
        >
         <Link
          to="/recap">
          <span>Continuer</span>
           </Link>
          <i className="fa-solid fa-arrow-right"></i>
        </button>

      </footer>
    </main>
  );
}