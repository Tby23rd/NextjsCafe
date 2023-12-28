"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/Testimonials.module.css';

interface Testimonial {
  id: string;
  name: string;
  comment: string;
}

const testimonialsData: Testimonial[] = [
  { id: '1', name: 'John Doe', comment: 'Great coffee and cozy atmosphere!' },
  { id: '2', name: 'Jane Smith', comment: 'Love the pastries and friendly staff.' },
  { id: '3', name: 'Sam Johnson', comment: 'Fantastic selection of drinks and desserts.' },
  { id: '4', name: 'Emily White', comment: 'Cozy environment, perfect for working.' },
  { id: '5', name: 'Alex Brown', comment: 'Friendly service and delicious coffee.' },
  { id: '6', name: 'Olivia Davis', comment: 'Best place to unwind with a cup of coffee.' },
  { id: '7', name: 'Chris Miller', comment: 'Lovely ambiance and tasty treats.' },
  { id: '8', name: 'Ava Taylor', comment: 'Always a pleasant experience at Your Cafe.' },
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="Testimonials">
    <div className={styles.testimonialsContainer}>
      <h1 className={styles.testimonialsTitle}>Customer Testimonials</h1>
      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonial}>
              <p className={styles.comment}>{testimonial.comment}</p>
              <p className={styles.name}>{testimonial.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </div>
  );
};

export default Testimonials;
