"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1 className={styles.logo}>OpinionTrade</h1>

        <nav className={styles.desktopNav}>
          <a href="#features" className={styles.navLink}>
            About
          </a>
          <a href="#features" className={styles.navLink}>
            Features
          </a>
          <a href="#testimonials" className={styles.navLink}>
            Testimonials
          </a>
          <a href="#waitlist" className={styles.waitlistButton}>
            Join Waitlist
          </a>
        </nav>

        <button
          className={styles.mobileMenuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i className={styles.menuIcon}>☰</i>
        </button>

        {isMenuOpen && (
          <nav className={styles.mobileNav}>
            <a href="#about" className={styles.mobileNavLink}>
              About
            </a>
            <a href="#features" className={styles.mobileNavLink}>
              Features
            </a>
            <a href="#testimonials" className={styles.mobileNavLink}>
              Testimonials
            </a>
            <a href="#waitlist" className={styles.mobileWaitlistButton}>
              Join Waitlist
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
