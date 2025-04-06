"use client";
import React, { useState, useEffect } from "react";
import { useAccount, useDisconnect } from "wagmi";
import styles from "./WaitlistForm.module.css";
function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [message, setMessage] = useState("");

  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();



  useEffect(() => {
    if (isConnected) {
      setWalletAddress(address);
    } else {
      setWalletAddress("");
    }
  }, [isConnected, address]);

 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !walletAddress) return;

    try {
      const response = await fetch("https://opinion-trading-landing-server.vercel.app/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, walletAddress }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Successfully joined waitlist!");
        setEmail("");
      } else {
        setMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Error submitting form.");
    }
  };

  const handleDisconnect = () => {
    disconnect();
    setWalletAddress("");
  };

  return (
    <section id="waitlist" className={styles.waitlistSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Join the Waitlist</h2>
          <p className={styles.description}>
            Be among the first to experience the future of opinion trading.
          </p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.emailInput}
              value={email}
              onChange={handleEmailChange}
              required
              aria-label="Email address"
            />
            <div className={styles.walletInputGroup}>
              <input
                type="text"
                placeholder="Wallet address"
                className={styles.walletInput}
                value={walletAddress}
                disabled
                aria-label="Wallet address"
              />

              {!isConnected ? (
                <div className={styles.walletBtn}>
                  
                  <button className={styles.connectButton}>connect</button>
                  <div className={styles.walletBtn2}><appkit-button /></div>
                 

                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleDisconnect}
                  className={`${styles.connectButton} ${styles.disconnectButton}`}
                >
                  Disconnect
                </button>
              )}
            </div>

            <button
              type="submit"
              className={`${styles.submitButton} ${
                !email || !isConnected ? styles.disabled : ""
              }`}
              disabled={!email || !isConnected}
            >
              Join Waitlist
            </button>
            {message && <p className={styles.message}>{message}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default WaitlistForm;
