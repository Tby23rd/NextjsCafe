"use client"
import React from 'react';
import Navbar from '../components/Navbar'; 
import Hero from '../components/Hero';
import BookRes from '../components/BookRes';
import Contact from '../components/Contact';
import Shop from '../pages/Shop';
import FeaturesS from '../components/FeaturesS';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer'; // Import the Footer component

const Page: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesS />
      <Shop/>
      <BookRes/>
      <Testimonials />  
      <Contact/>
      <Footer />
    </>
  );
};

export default Page;