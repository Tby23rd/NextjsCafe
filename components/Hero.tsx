// components/Hero.tsx
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Modal, Button } from 'react-bootstrap';
import styles from '../styles/Hero.module.css';

const Hero: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
 
  const handleShopNow = () => {
    // Programmatic navigation
    window.location.href = '/Shop';
  };

  const handleCatalog = () => {
    window.location.href = '/OrderPage';

  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.heroContainer}>
      <Image src="/images/coffeeshop.jpg" alt="Coffee shop Image" layout="fill" objectFit="cover" className={styles.heroImage} />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Discover the Magic of Cafes</h1>
        <p className={styles.heroSubtitle}>Explore a world of delightful flavors and cozy atmospheres</p>
        <div className={styles.heroButtons}>
          <Button variant="primary" onClick={handleShopNow}>
            Shop Now
          </Button>
          <Button variant="secondary" onClick={handleCatalog}>
            Catalog
          </Button>
        </div>
        {/* Modal for Catalog */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Catalog</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Add your catalog content here */}
            <p>Your catalog content goes here...</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Hero;
