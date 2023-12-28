// components/Footer.tsx

import React from 'react';
import styles from '../styles/Footer.module.css';
import { Facebook,Instagram, YouTube, LinkedIn } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerItem}>
          <h3 className={styles.footerTitle}>Contact Us</h3>
          <p className={styles.footerText}>Email: info@yourcafe.com</p>
          <p className={styles.footerText}>Phone: (123) 456-7890</p>
          <p className={styles.footerText}>Address: 123 Cafe Street, Cityville</p>
        </div>

        <div className={styles.footerItem}>
          <h3 className={styles.footerTitle}>Opening Hours</h3>
          <p className={styles.footerText}>Monday - Friday: 8 am to 8 pm</p>
          <p className={styles.footerText}>Saturday - Sunday: 9 am to 6 pm</p>
        </div>

        <div className={styles.footerItem}>
          <h3 className={styles.footerTitle}>Follow Us</h3>
          <div className={styles.socialIcons}>
            {/* Social Media Icons */}
            <a
              href="#"
              className="text-white mx-2 hover:text-gray-400 transition duration-300"
              title="Facebook"
            >
              <Facebook style={{ color: 'white' }} />
            </a>
            <a href="#"
            className="text-white mx-2 hover:text-gray-400 transition duration-300"
            title="Instagram"
            >
                <Instagram style={{ color: 'white' }} />
            </a>
            <a
              href="#"
              className="text-white mx-2 hover:text-gray-400 transition duration-300"
              title="YouTube"
            >
              <YouTube style={{ color: 'white' }} />
            </a>
            <a
              href="#"
              className="text-white mx-2 hover:text-gray-400 transition duration-300"
              title="LinkedIn"
            >
              <LinkedIn style={{ color: 'white' }} />
            </a>
          </div>
        </div>
      </div>
<hr></hr>
      <div className={styles.footerBottom}>
        <p>&copy; 2023 Your Cafe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
