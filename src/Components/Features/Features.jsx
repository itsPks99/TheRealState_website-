import React from "react";
import { FaCheckSquare } from "react-icons/fa";
import "./Features.css";

const Features = () => {
  return (
    <div className="features-container">
      {/* Section 1: Image & Text */}
      <div className="features-content">
        <div className="features-image slide-left">
          <img src="/assets/images/02.jpeg.jpg" alt="Luxury Homes" />
        </div>

        <div className="features-text slide-right">
          <h4>STAY IN THE LAP OF NATURE</h4>
          <h1>ULTRA-LUXURY HOMES</h1>
          <h5>SPREAD ACROSS 100 ACRES OF FOREST.</h5>
          <p>We stand distinct for our valley-facing suites, with Wellness Retreat and Herbal Park, thus, a rejuvenating experience.</p>
          <p>Yoglyf strives to be one of a kind; Where nature blends with heartiness of being, fostering holistic healing. It's like stepping into sunshine on a winter afternoon.</p>

          <h4>WHAT YOU GET</h4>
          <ul>
            <li><FaCheckSquare className="check-icon" /> SUITES MEASURING 500 -750 SQ. FT</li>
            <li><FaCheckSquare className="check-icon" /> HERBAL PARK AND WELLNESS CENTRE</li>
            <li><FaCheckSquare className="check-icon" /> GYMNASIUM</li>
            <li><FaCheckSquare className="check-icon" /> SWIMMING POOL</li>
            <li><FaCheckSquare className="check-icon" /> WELLNESS CENTER/SPA</li>
            <li><FaCheckSquare className="check-icon" /> IN/OUT DINING</li>
            <li><FaCheckSquare className="check-icon" /> MULTI-CUISINE RESTAURANT AND VEGAN CAFE</li>
          </ul>
        </div>
      </div>

      {/* Section 2: Features/Icons */}
      <div className="features-icons slide-bottom">
        <div className="icon-box highlight">
          <img src="/assets/images/Homeicon.png" alt="Auramah Valley" />
          <h3>YOGLYF</h3>
          <p>India's #1 Hillside Community</p>
        </div>
        <div className="icon-box highlight">
          <img src="/assets/images/LocationIcon.png" alt="Location" />
          <h3>THE LOCATION</h3>
          <p>UTTRAKHAND RISHIKESH</p>
        </div>
        <div className="icon-box">
          <img src="./assets/AreaIcon.png" alt="Area" />
          <h3>THE AREA</h3>
          <p>1500 SQ. FT. - 2150 SQ. FT.</p>
        </div>
        <div className="icon-box">
          <img src="./assets/PricingIcon.png" alt="Pricing" />
          <h3>THE PRICING</h3>
          <p>Rs. 1.60 Cr. to 3.10 Cr.</p>
        </div>
        {/* <div className="icon-box">
          <img src="/path-to-icon5.png" alt="Status" />
          <h3>THE STATUS</h3>
          <p>Delivered 125 Homes</p>
        </div> */}
      </div>

      {/* Section 3: Amenities
      <div className="features-amenities slide-bottom">
        <h3>EXISTING AMENITIES</h3>
        <p>
          Italian Restaurant | Indian Restaurant | Thriving Community | Club House | Pool |
          Movie Theatre | Tennis Court | Helipad | Grocery Store | Maintenance Team | House Keeping |
          Wine Bar | Whiskey Bar | Cigar Bar | Clinic
        </p>
      </div> */}
    </div>
  );
};

export default Features;
