import React from "react";
import { FaCheckSquare } from "react-icons/fa";
import "./Features.css";

const Features = () => {
  return (
    <div className="features-container">
      {/* Section 1: Image & Text */}
      <div className="features-content">
        <div className="features-image slide-left">
          <img src="../public/assets/537011899.jpg" alt="Luxury Homes" />
        </div>

        <div className="features-text slide-right">
          <h4>STAY IN THE LAP OF NATURE</h4>
          <h1>ULTRA-LUXURY HOMES</h1>
          <h5>SPREAD ACROSS 100 ACRES OF FOREST.</h5>
          <p>
            Auramah Valley is being developed in Himachal Pradesh by Imperial Realty
            and Developments, a subsidiary of the Imperial Holding Group. It is the 
            largest luxury real estate project in Himachal.
          </p>
          <p>
            Located at a prime location at Naldehra, 18km from Shimla, Auramah Valley 
            offers a peaceful, secure, and luxurious nest to its residents, designed 
            with modern architecture infused with Himachali essence.
          </p>

          <h4>WHAT YOU GET</h4>
          <ul>
            <li><FaCheckSquare className="check-icon" /> World-Class Construction</li>
            <li><FaCheckSquare className="check-icon" /> Next-Level Freehold Ownership</li>
            <li><FaCheckSquare className="check-icon" /> International Standard Interiors</li>
            <li><FaCheckSquare className="check-icon" /> 24/7/365 Maintenance</li>
            <li><FaCheckSquare className="check-icon" /> Best-in-Class Facilities</li>
            <li><FaCheckSquare className="check-icon" /> Best-in-Class Hospitality Team</li>
          </ul>
        </div>
      </div>

      {/* Section 2: Features/Icons */}
      <div className="features-icons slide-bottom">
        <div className="icon-box highlight">
          <img src="../public/assets/Homeicon.png" alt="Auramah Valley" />
          <h3>AURAMAH VALLEY</h3>
          <p>India's #1 Hillside Community</p>
        </div>
        <div className="icon-box highlight">
          <img src="../public/assets/LocationIcon.png" alt="Location" />
          <h3>THE LOCATION</h3>
          <p>Naldehra, Shimla</p>
        </div>
        <div className="icon-box">
          <img src="../public/assets/AreaIcon.png" alt="Area" />
          <h3>THE AREA</h3>
          <p>1500 SQ. FT. - 2150 SQ. FT.</p>
        </div>
        <div className="icon-box">
          <img src="../public/assets/PricingIcon.png" alt="Pricing" />
          <h3>THE PRICING</h3>
          <p>Rs. 1.60 Cr. to 3.10 Cr.</p>
        </div>
        {/* <div className="icon-box">
          <img src="/path-to-icon5.png" alt="Status" />
          <h3>THE STATUS</h3>
          <p>Delivered 125 Homes</p>
        </div> */}
      </div>

      {/* Section 3: Amenities */}
      <div className="features-amenities slide-bottom">
        <h3>EXISTING AMENITIES</h3>
        <p>
          Italian Restaurant | Indian Restaurant | Thriving Community | Club House | Pool |
          Movie Theatre | Tennis Court | Helipad | Grocery Store | Maintenance Team | House Keeping |
          Wine Bar | Whiskey Bar | Cigar Bar | Clinic
        </p>
      </div>
    </div>
  );
};

export default Features;
