import React, { useState } from 'react';
import '../EnquiryButton/enquiryButton.css';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* Fixed Enquire Button */}
      <button className="fixed-enquire-btn" onClick={toggleModal}>
        Enquire Now
      </button>
      {/* Enquiry Modal */}
      <div className={`enquiry-modal ${isModalOpen ? 'modal-open' : ''}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h2>ENQUIRE NOW</h2>
            <button className="close-btn" onClick={toggleModal}>×</button>
          </div>
          
          <form className="enquiry-form">
            <input
              type="text"
              placeholder="YOUR NAME"
              className="form-input"
            />
            <input
              type="email"
              placeholder="YOUR E-MAIL"
              className="form-input"
            />
            <input
              type="tel"
              placeholder="YOUR PHONE"
              className="form-input"
            />
            <select className="form-input custom-select">
              <option value="">2 BHK APARTMENT</option>
              <option value="2bhk-garden">2 BHK GARDEN APARTMENT</option>
              <option value="3bhk">3 BHK APARTMENT</option>
              <option value="3bhk-garden">3 BHK GARDEN APARTMENT</option>
              <option value="3bhk-penthouse">3 BHK PENTHOUSE DUPLEX</option>
              <option value="4bhk">4 BHK APARTMENT</option>
              <option value="4bhk-luxury">4 BHK LUXURY DUPLEX</option>
              <option value="signature">SIGNATURE VILLA</option>
            </select>
            <textarea
              placeholder="MESSAGE"
              className="form-input"
              rows="4"
            ></textarea>
            <button type="submit" className="submit-btn">
              Send a message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default HeroSection;