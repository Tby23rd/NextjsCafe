// components/Navbar.tsx
import React, { useContext } from 'react';
import Link from 'next/link';

import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {

  return (
    <nav className={styles.navbar}>
      <div className={`${styles['navbar-container']} container`}>
        <input type="checkbox" name="" id="" />
        <div className={styles['hamburger-lines']}>
          <span className={`${styles.line} ${styles.line1}`}></span>
          <span className={`${styles.line} ${styles.line2}`}></span>
          <span className={`${styles.line} ${styles.line3}`}></span>
        </div>
        <ul className={styles['menu-items']}>
          <li>
            <Link href={`/`}>
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link href={`/Shop`}>
              <p>Shop</p>
            </Link>
          </li>

          <li>
            <Link href={`/OrderPage`}>
              <p>Menu</p>
            </Link>
          </li>
          <li>
            <Link href={`#Testimonials`}>
              <p>Testimonials</p>
            </Link>
          </li>
          <li>
            <Link href={`#Contacts`}>
              <p>Contact</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
