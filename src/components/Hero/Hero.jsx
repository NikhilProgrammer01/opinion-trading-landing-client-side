import React from "react";
import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <span>Trade Opinions,</span>
          <br />
          <span>Not Just Assets</span>
        </h1>
        <p className={styles.heroDescription}>
          Experience the future of market sentiment trading with
          blockchain-powered opinion markets.
        </p>

        {/* Button with animation */}
        <button className={styles.ctaButton} onClick={() => navigate("/live-coins")}>
          <span className={styles.ctaText}>Start Trading Now</span>
          <div className={styles.ctaLiquid}></div>
        </button>
      </div>
    </section>
  );
}

export default Hero;
