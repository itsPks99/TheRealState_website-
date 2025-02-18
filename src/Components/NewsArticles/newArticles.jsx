import React, { useEffect, useState } from "react";
import "./newsArticles.css";

const NewsArticles = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay animation to make it visible smoothly
  }, []);

  return (
    <div className="news-container">
      <h4 className="news-header">OUR RECENT NEWS</h4>
      <h1 className="news-title">NEWS & ARTICLES</h1>

      {/* Articles Section */}
      <div className={`articles-section ${isVisible ? "slide-left" : ""}`}>
        <div className="article">
          <img src="../public/assets/5824c18078a689aa4e2ac622b69dc3cf.webp" alt="Article 1" />
          <div className="article-text">
            <h3>“SECOND HOME: A HOME AWAY FROM CITY HASSLES”</h3>
            <p className="date">
              📅 September 24, 2021 &nbsp; 💬 No Comments
            </p>
            <p>
              About Auramah Valley- It is located at a prime location in
              Naldehra, which is hardly 30 km from Shimla, and it is spread
              across 100 ...
            </p>
          </div>
        </div>

        <div className="article">
          <img src="../public/assets/6a2ce57545447fe8b494ef62ea30ed50.webp" alt="Article 2" />
          <div className="article-text">
            <h3>
              RESPONSIBLE PRACTICES AND SUSTAINABLE LIVING - STAYING IN TUNE
              WITH NATURE AT AURAMAH VALLEY
            </h3>
            <p className="date">
              📅 January 18, 2021 &nbsp; 💬 No Comments
            </p>
            <p>
              Owning a home in the hills is a dream most people carry in their
              hearts, from the first time they set eyes on one during ...
            </p>
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className={`subscribe-section ${isVisible ? "slide-bottom" : ""}`}>
        <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
        <div className="subscribe-box">
          <input type="email" placeholder="Your Email" />
          <button className="subscribe-button">Keep me posted</button>
        </div>
      </div>
    </div>
  );
};

export default NewsArticles;
