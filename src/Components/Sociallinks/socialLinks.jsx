import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";
import "./sociallinks.css";

const SocialLinks = () => {
  return (
    <div className="Sociallinks">
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        <a href="https://web.whatsapp.com/916205033076" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      </div>
      
      <div className="contact-info">
        <a href="https://web.whatsapp.com/916205033076" className="whatsapp">
          <FaWhatsapp className="whatsapp-icon" />
          +91-9317278154
        </a>
        <span>|</span>
        <a href="/schedule-visit">SCHEDULE A VISIT</a>
        <span>|</span>
        <a href="tel:1800120001236">1800-12000-1236</a>
      </div>
    </div>
  );
};

export default SocialLinks;
