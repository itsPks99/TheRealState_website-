import React from 'react';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section company-info">
          <h3>Company Name</h3>
          <p>
            1234 Street Name<br />
            City, State, ZIP Code<br />
            <FaEnvelope /> Email: <a href="mailto:yoglyfhelp@gmail.com" className="plain-text-link">yoglyfhelp@gmail.com</a><br />
            <FaPhone /> Phone: +91 96671 36553
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-section navigation">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/location">Location</a></li>
            <li><a href="/budget">Budget</a></li>
            <li><a href="/contact">Contact</a></li>
            {/* <li><a href="/faq">FAQ</a></li> */}
          </ul>
        </div>

        {/* Enquiry Form */}
        <div className="footer-section enquiry-form">
          <h3>Enquire Now</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="footer-social">
        <a href="https://www.facebook.com" aria-label="Facebook"><FaFacebookF /></a>
        <a href="https://www.twitter.com" aria-label="Twitter"><FaTwitter /></a>
        <a href="https://www.instagram.com" aria-label="Instagram"><FaInstagram /></a>
        <a href="https://www.linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-conditions">Terms & Conditions</a></p>
      </div>
    </footer>
  );
};

export default Footer;