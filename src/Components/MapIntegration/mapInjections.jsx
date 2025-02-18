import React from "react";
import "./mapInjections.css";

const AttractionsMap = () => {
    return (
        <div className="attractions-container">
            <h4>ATTRACTIONS AROUND</h4>
            <h1>AURAMAH VALLEY</h1>

            <div className="attractions-content">
                {/* Google Map Section */}
                <div className="map-container">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55851.08672135991!2d77.05852471903494!3d31.141924118148003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39057868f4c57d83%3A0x11ebac1a6b5eb6de!2sNaldehra%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1707748943592!5m2!1sen!2sin"
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
                        <ul>
                            <li>SHIMLA</li>
                            <li>KUFRI</li>
                            <li>NALDEHRA</li>
                            <li>CHAIL</li>
                            <li>NARKANDA</li>
                            <li>TATTAPANI</li>
                        </ul>
                    {/* </div> */}
                </div>

            </div>
        </div>
    );
};

export default AttractionsMap;
