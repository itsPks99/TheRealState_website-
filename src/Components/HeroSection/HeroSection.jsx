import React, { useEffect, useState } from "react";
import "./herosection.css";

const slides = [
  {
    image: "/assets/images/01.jpeg.jpg",
    // title: "NATURE'S NEST",
    // subtitle: "A Home Amidst The Auramah Hills",
    // buttonText: "LEARN MORE",
  },
  {
    image: "/assets/images/02.jpeg.jpg",
    // title: "LUXURY LIVING",
    // subtitle: "Experience Elegance in the Hills",
    // buttonText: "DISCOVER MORE",
  },
  {
    image: "/assets/images/04.jpeg.jpg",
    // title: "SERENE VIEWS",
    // subtitle: "Breathtaking Scenery Awaits You",
    // buttonText: "EXPLORE NOW",
  },
  // {
  //   image: "/assets/03.jpeg.jpg",
  //   // title: "HILLSIDE RETREAT",
  //   // subtitle: "Escape to Tranquility",
  //   // buttonText: "VISIT TODAY",
  // },
  // {
  //   image: "/assets/6a2ce57545447fe8b494ef62ea30ed50.webp",
  //   // title: "MODERN COMFORT",
  //   // subtitle: "Redefining Luxury Living",
  //   // buttonText: "LEARN MORE",
  // },
  // {
  //   image: "/assets/426110608.jpg",
  //   // title: "EXCLUSIVE HOMES",
  //   // subtitle: "Your Dream Home in the Hills",
  //   // buttonText: "GET STARTED",
  // },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-slide">
        <img src={slides[currentIndex].image} alt="Hero Slide" className="hero-image" />
        {/* <div className="hero-text">
          <h1>{slides[currentIndex].title}</h1>
          <p>{slides[currentIndex].subtitle}</p>
          <button className="hero-button">{slides[currentIndex].buttonText}</button>
        </div> */}
      </div>
      <div className="dots-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
