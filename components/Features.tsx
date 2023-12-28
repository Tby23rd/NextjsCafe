// Features.tsx

import React from 'react';
import styles from '../styles/Features.module.css';
import {
  LocalCafe as CafeIcon,
  Fastfood as CoffeeIcon,
  Cake as PastryIcon,
  Wifi as WifiIcon,
  MusicNote as MusicIcon,
  Class as ClassIcon, // Added ClassIcon for the new feature
} from '@mui/icons-material';

const Features: React.FC = () => {
  const featureData = [
    {
      title: 'Cozy Ambiance',
      description: 'Enjoy a warm and inviting atmosphere that makes our cafe the perfect place to relax and unwind.',
      icon: <CafeIcon />,
    },
    {
      title: 'Artisanal Coffee',
      description: 'Savor the rich flavors of our carefully crafted artisanal coffee, made with the finest beans.',
      icon: <CoffeeIcon />,
    },
    {
      title: 'Delectable Pastries',
      description: 'Indulge in a delightful selection of pastries and treats that perfectly complement your coffee.',
      icon: <PastryIcon />,
    },
    {
      title: 'Free Wi-Fi',
      description: 'Stay connected with our complimentary high-speed Wi-Fi while you enjoy your time at the cafe.',
      icon: <WifiIcon />,
    },
    {
      title: 'Live Music Events',
      description: 'Experience the joy of live music performances, adding a touch of melody to your cafe visits.',
      icon: <MusicIcon />,
    },
    {
      title: 'Classes', // New Feature: Classes
      description: 'Join our classes and enhance your coffee knowledge with expert-led sessions on brewing and tasting.',
      icon: <ClassIcon />,
    },
  ];

  return (
    <div className={styles.featuresContainer}>
      {featureData.map((feature, index) => (
        <div key={index} className={styles.feature}>
          <div className={styles.featureIcon}>{feature.icon}</div>
          <h2 className={styles.featureTitle}>{feature.title}</h2>
          <p className={styles.featureDescription}>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
