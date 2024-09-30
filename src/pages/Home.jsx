import React from 'react';
import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import Cta from "../components/Cta";
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Cta />
    <Testimonials/>
    <Footer/>
    </>
  );
}

export default Home