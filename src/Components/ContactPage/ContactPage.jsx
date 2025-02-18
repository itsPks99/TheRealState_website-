// ContactUs.jsx
import React from 'react';
import Footer from '../Footer/Footer';
import './ContactPage.css';

const ContactUs = () => {
  return (
    <div className="contact-page">
      {/* Section 1: Contact Header */}
      <section className="contact-header-section">
        <div className="contact-header-content">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you! Reach out to us anytime.</p>
        </div>
      </section>

      {/* Section 2: Contact Information */}
      <section className="contact-info-section">
        <div className="contact-info-box">
          <h2>Get in Touch</h2>
          <p>Feel free to reach us through the following contact details:</p>
          <ul>
            <li><strong>Address:</strong> 123 Wellness Street, Rishikesh, India</li>
            <li><strong>Phone:</strong> +91 96671 36553</li>
            <li><strong>Email:</strong> <a href="mailto:yoglyfhelp@gmail.com">yoglyfhelp@gmail.com</a></li>
          </ul>
        </div>
        <div className="contact-info-image">
          <img src="/assets/images/01.jpeg.jpg" alt="Contact Info" />
        </div>
      </section>

      {/* Section 3: Contact Form */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Section 4: Contact Map */}
      <section className="contact-map-section">
        <div className="contact-map-content">
          <h2>Find Us Here</h2>
          <iframe
            title="Yoglyf Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.4723440127413!2d78.26795761511672!3d30.0869285818755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390925f3f4e5d82f%3A0xaac0c71a3a9b4b1!2sYoglyf%20Wellness%20Resort!5e0!3m2!1sen!2sin!4v1653456789012"
            width="100%"
            height="400"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
