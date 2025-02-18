import React, { useEffect, useState } from "react";
import "./floorPlan.css";

const slides = [
  {
    title: "3BHK APARTMENT",
    area: "2150 SQ.FT*",
    price: "2.20 CR*",
    imgSrc: "../public/assets/537011899.jpg",
  },
  {
    title: "4BHK APARTMENT",
    area: "2500 SQ.FT*",
    price: "3.00 CR*",
    imgSrc: "../public/assets/426110608.jpg",
  },
  {
    title: "VILLA",
    area: "3000 SQ.FT*",
    price: "4.50 CR*",
    imgSrc: "../public/assets/5824c18078a689aa4e2ac622b69dc3cf.webp",
  },
];

const FloorPlanSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floorplan-slider">
      <div className="floorplan-content">
        <h4>FLOOR PLAN</h4>
        <h1>{slides[currentSlide].title}</h1>
        <div className="floorplan-info">
          <div className="info-row">
            <span>AREA</span>
            <span>{slides[currentSlide].area}</span>
          </div>
          <div className="info-row">
            <span>PRICE</span>
            <span>{slides[currentSlide].price}</span>
          </div>
        </div>
        <button className="know-more-btn">KNOW MORE</button>
      </div>
      <div className="floorplan-image">
        <img src={slides[currentSlide].imgSrc} alt="Apartment" />
      </div>
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default FloorPlanSlider;
