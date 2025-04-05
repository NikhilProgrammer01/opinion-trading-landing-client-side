import React from "react";
import styles from "./HowItWorks.module.css";

function HowItWorks() {
  return (
    <section className={styles.howItWorksSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>How Opinion Trading Works</h2>
          <p className={styles.description}>
            Opinion trading allows you to take positions on market sentiment
            using blockchain technology. Trade your views on assets, events, and
            trends in a transparent and secure environment.
          </p>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Connect Wallet</h3>
              <p className={styles.cardDescription}>
                Link your MetaMask wallet to start trading opinions securely on
                the blockchain.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Choose Markets</h3>
              <p className={styles.cardDescription}>
                Select from various opinion markets ranging from crypto to
                stocks to global events.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Trade Opinions</h3>
              <p className={styles.cardDescription}>
                Take positions based on your market views and earn rewards for
                accurate predictions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
