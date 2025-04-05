"use client";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate
import styles from "./LiveCoins.module.css";

const API_URL = "https://api.coinlayer.com/live?access_key=24d424886fddfb01a97dd6074d46dd15";

function LiveCoins() {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // initialize navigate

  useEffect(() => {
    async function fetchCoins() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.success) {
          setRates(data.rates || {});
        } else {
          console.error("API Error:", data);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching coin rates:", error);
        setLoading(false);
      }
    }

    fetchCoins();
  }, []);

  return (
    <div className={styles.liveCoinsContainer}>
      {/* Back Home Button */}
      <button
        className={styles.backButton}
        onClick={() => navigate("/")}
      >
        ← Back Home
      </button>

      <h2 className={styles.heading}>Live Crypto Prices</h2>

      {loading ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        <div className={styles.coinGrid}>
          {Object.entries(rates).map(([symbol, price]) => (
            <div key={symbol} className={styles.coinCard}>
              <h3>{symbol}</h3>
              <p>Price: ${price.toFixed(4)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LiveCoins;
