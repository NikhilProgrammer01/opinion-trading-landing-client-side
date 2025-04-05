import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>OpinionTrade</h3>
            <p className={styles.columnText}>
              Revolutionary opinion trading platform powered by blockchain
              technology.
            </p>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Contact</h3>
            <address className={styles.columnText}>
              <a
                href="mailto:hello@opiniontrade.com"
                className={styles.footerLink}
              >
                hello@opiniontrade.com
              </a>
              <br />
              <a href="tel:+15551234567" className={styles.footerLink}>
                +1 (555) 123-4567
              </a>
            </address>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Follow Us</h3>
            <div className={styles.socialLinks}>
              <a href="#twitter" className={styles.socialLink}>
                Twitter
              </a>
              <a href="#linkedin" className={styles.socialLink}>
                LinkedIn
              </a>
              <a href="#discord" className={styles.socialLink}>
                Discord
              </a>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Legal</h3>
            <div className={styles.columnText}>
              <a href="#privacy" className={styles.footerLink}>
                Privacy Policy
              </a>
              <br />
              <a href="#terms" className={styles.footerLink}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          © 2024 OpinionTrade. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
