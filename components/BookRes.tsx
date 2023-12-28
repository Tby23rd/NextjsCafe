// BookRes.tsx

import React from 'react';
import Image from 'next/image';
import styles from '../styles/BookRes.module.css';

const BookRes: React.FC = () => {
  const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
  const currentTime = new Date().toISOString().split('T')[1].slice(0, 5); // Get current time in HH:mm format

  return (
    <>
      <h1 className={styles.bookResTitle}>Book a Reservation</h1>
      <div className={styles.bookResContainer}>
        <form className={styles.bookResForm}>
          {/* Your reservation form elements go here */}
          <div className={styles.formRow}>
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" min={currentDate} />
          </div>

          <div className={styles.formRow}>
            <label htmlFor="time">Time:</label>
            <input type="time" id="time" name="time" min={currentTime} />
          </div>

          <div className={styles.formRow}>
            <label htmlFor="guests">Guests:</label>
            <input type="number" id="guests" name="guests" />
          </div>

          <div className={styles.formRow}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>

          <div className={styles.formRow}>
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" />
          </div>

          <div className={styles.formRow}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>

          <button type="submit" className={styles.bookResButton}>
            Book Now
          </button>
        </form>

        <div className={styles.latteImageContainer}>
          <Image
            src="/images/coffee.jpg" // Update the path based on your project structure
            alt="Latte"
            layout="fill"
            objectFit="cover"
            className={styles.latteImage}
          />
        </div>
      </div>
    </>
  );
};

export default BookRes;
