// Correct App.jsx with a single BrowserRouter
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Main Components
import HeroSection from '../src/Components/HeroSection/HeroSection';
import './App.css';
import EnquiryButton from './Components/EnquiryButton/enquiryButton';
import Features from './Components/Features/Features';
import FloorPlan from './Components/FloorPlans/floorPlan';
import Footer from './Components/Footer/Footer';
import Header from './Components/HeaderSection/header';
import MapInjection from './Components/MapIntegration/mapInjections';
import NewsArticles from './Components/NewsArticles/newArticles';
import Resideus from './Components/ResideWithUs/resideus';
import SocialLinks from './Components/Sociallinks/socialLinks';
import Testimonial from './Components/Testimonial/testimonial';
import VisualInsight from './Components/VisualInsights/VisualInsight';

// Pages
import About from './Components/AboutPages/About';
import ContactPage from './Components/ContactPage/ContactPage';

function App() {
  return (
    <>
      <SocialLinks />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <EnquiryButton />
              <Features />
              <Resideus />
              <FloorPlan />
              <MapInjection />
              <Testimonial />
              <NewsArticles />
              <VisualInsight />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
