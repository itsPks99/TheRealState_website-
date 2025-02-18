import React from "react";
import "./mapInjections.css";

const AttractionsMap = () => {
    return (
        <div className="attractions-container">
            <h4>Guide to reach </h4>
            <h1>Yoglyf Wellness Resort Rishikesh:</h1>

            <div className="attractions-content">
                {/* Google Map Section */}
                <div className="map-container">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.4723440127413!2d78.26795761511672!3d30.0869285818755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390925f3f4e5d82f%3A0xaac0c71a3a9b4b1!2sYoglyf%20Wellness%20Resort!5e0!3m2!1sen!2sin!4v1653456789012"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* Nearby Attractions List */}
                <div className="attractions-list">
                    {/* <div style={{
                        backgroundColor: "white",
                        height: "80%",
                        width: "65%"  
                    }} className="attractions-list"> */}
                        {/* <ul>
                            <li>SHIMLA</li>
                            <li>KUFRI</li>
                            <li>NALDEHRA</li>
                            <li>CHAIL</li>
                            <li>NARKANDA</li>
                            <li>TATTAPANI</li>
                        </ul> */}
                    {/* </div> */}
                </div>

            </div>
        </div>
    );
};

export default AttractionsMap;
