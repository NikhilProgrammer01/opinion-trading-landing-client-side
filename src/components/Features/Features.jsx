import React from "react";
import styles from "./Features.module.css";

function Features() {
  const features = [
    {
      number: 1,
      title: "Blockchain Integration",
      description:
        "Secure and transparent trading powered by blockchain technology.",
    },
    {
      number: 2,
      title: "MetaMask Integration",
      description: "Seamless wallet connection for secure transactions.",
    },
    {
      number: 3,
      title: "Real-time Data",
      description: "Live market sentiment analysis and trading activity.",
    },
    {
      number: 4,
      title: "Secure Trading",
      description:
        "Advanced security measures to protect your assets and data.",
    },
  ];

  return (
    <section id="features" className={styles.featuresSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Platform Features</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <div key={feature.number} className={styles.featureItem}>
              <div className={styles.featureNumber}>{feature.number}</div>
              <div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
