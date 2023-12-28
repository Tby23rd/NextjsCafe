// Features.tsx

import React from 'react';
import styles from '../styles/FeaturesS.module.css';
import {
  LocalCafe as CafeIcon,
  Fastfood as CoffeeIcon,
  Cake as PastryIcon,
  Wifi as WifiIcon,
  MusicNote as MusicIcon,
  Class as ClassIcon,
} from '@mui/icons-material';

interface FeatureData {
  title: string;
  icon: React.ReactNode;
}

interface FeatureProps {
  title: string;
  icon: React.ReactNode;
}

const Feature: React.FC<FeatureProps> = ({ title, icon }) => {
  return (
    <div className={styles.feature}>
      <div className={styles.featureIcon}>{icon}</div>
      <h2 className={styles.featureTitle}>{title}</h2>
    </div>
  );
};

const FeaturesContainer: React.FC<{ features: FeatureData[] }> = ({ features }) => {
  return (
    <div className={styles.featuresContainer}>
      {features.map((feature, index) => (
        <Feature key={index} title={feature.title} icon={feature.icon} />
      ))}
    </div>
  );
};

const Features: React.FC = () => {
  const featureData: FeatureData[] = [
    {
      title: 'Cozy Ambiance',
      icon: <CafeIcon />,
    },
    {
      title: 'Artisanal Coffee',
      icon: <CoffeeIcon />,
    },
    {
      title: 'Delectable Pastries',
      icon: <PastryIcon />,
    },
    {
      title: 'Free Wi-Fi',
      icon: <WifiIcon />,
    },
    {
      title: 'Live Music Events',
      icon: <MusicIcon />,
    },
    {
      title: 'Classes',
      icon: <ClassIcon />,
    },
  ];

  return (
    <div>
      <h1 className={styles.featuresHeader}>Our Features</h1>
      <FeaturesContainer features={featureData} />
    </div>
  );
};

export default Features;
