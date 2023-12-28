// ContactUs.tsx
import Image from 'next/image';
import React from 'react';
import styles from '../styles/BookRes.module.css'; // Import the styles from your BookRes CSS module

const ContactUs: React.FC = () => {
    return (
        <div id="Contacts">          
            <h1  className={styles.bookResTitle}>Contact Us</h1>

        <div className={styles.bookResContainer}>
            
            {/* Contact Us Title */}

            {/* Actual Contact Form */}
            <div className={styles.bookResForm}>
                <form action="#" method="post">
                    
                    <div className={styles.formRow}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    
                    <div className={styles.formRow}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    
                    <div className={styles.formRow}>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows={4} required></textarea>
                    </div>
                    
                    <div className={styles.formRow}>
                        <button type="submit" className={styles.bookResButton}>Submit</button>
                    </div>
                </form>
            </div>

            {/* Latte Image (if needed) */}
            <div className={styles.latteImageContainer}>
          <Image
            src="/images/latte.jpg" // Update the path based on your project structure
            alt="Latte"
            layout="fill"
            objectFit="cover"
            className={styles.latteImage}
          />
            </div>
        </div>
        </div>
    );
}

export default ContactUs;
