import React, { useEffect, useState } from "react";
import "./testimonial.css";

const testimonials = [
    {
        text: "We were captured by the serenity of the moments, the extremely well-designed home, and very high quality and neat construction. All of us are looking forward to spending time at Auramah Valley.",
        author: "Amitabh Mundhra"
    },
    {
        text: "Living in Auramah Valley has been a dream come true. The peaceful surroundings and luxury amenities make it a perfect place to call home.",
        author: "Rajesh Sharma"
    },
    {
        text: "The craftsmanship and detailing in the homes at Auramah Valley are truly exceptional. We are very happy with our investment.",
        author: "Neha Agarwal"
    },

    {
        text: "We were captured by the serenity of the moments, the extremely well-designed home, and very high quality and neat construction. All of us are looking forward to spending time at Auramah Valley.",
        author: "Amitabh Mundhra"
    },
    {
        text: "Living in Auramah Valley has been a dream come true. The peaceful surroundings and luxury amenities make it a perfect place to call home.",
        author: "Rajesh Sharma"
    },
    {
        text: "The craftsmanship and detailing in the homes at Auramah Valley are truly exceptional. We are very happy with our investment.",
        author: "Neha Agarwal"
    }
];

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide text every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="testimonial-container">
            <h1>OUR RESIDENTS LOVE US</h1>
            <div className="testimonial-content">
                {/* Testimonial Text */}
                <div className="testimonial-text slide-text">
                    <p>{testimonials[currentIndex].text}</p>
                    <h4>{testimonials[currentIndex].author}</h4>

                    {/* Dots Navigation (Above Read More Button) */}
                    <div className="text-slider-dots">
                        {testimonials.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${currentIndex === index ? "active" : ""}`}
                                onClick={() => setCurrentIndex(index)}
                            ></span>
                        ))}
                    </div>

                    <button className="read-more-btn">Read More &raquo;</button>
                </div>

                {/* YouTube Video */}
                <div className="testimonial-video">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/QYKeJSVtMoY" // Fixed Embed URL
                        title="YouTube Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

            </div>
        </div>
    );
};

export default TestimonialSlider;
