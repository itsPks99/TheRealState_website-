import React, { useState } from 'react';
import './resideus.css';

const Resideus = () => {
  const [activeTab, setActiveTab] = useState('clubhouse');
  const [activeMobileSection, setActiveMobileSection] = useState(null);

  const content = {
    clubhouse: {
      title: 'THE CLUB HOUSE',
      subtitle: 'BE ENTERTAINED',
      text: 'The clubhouse at Auramah Valley may have a stiff upper lip, but its got a soul that is warm and welcoming. You can begin your evening in the billiards room or in the leisurely card rooms and then enjoy sitting by the refreshing pool. You may also choose to relax and unwind yourself at "Aura" - the spa.',
      image: '/assets/537011899.jpg'
    },
    helicopter: {
      title: 'HELICOPTER CLUB',
      subtitle: 'SAFE TRANSFERS',
      text: 'Auramah Valley offers an exclusive service to its residents by providing them with a helicopter facility. The residents of the Auramah Valley can easily choose to fly smart and reach other destinations in North India within a short time or they may use it for a leisurely purpose of sightseeing.',
      image: '/assets/426110608.jpg'
    },
    sports: {
      title: 'SPORTS ACTIVITY',
      subtitle: 'STAY FIT',
      text: 'Nature is the best healer as it helps us to revive, stimulate and rejuvenate our body, mind and soul. At Auramah Valley, you can enjoy the scenic panoramas, diverse landscapes or take a hike and explore the natural world around you.',
      image: '/assets/5824c18078a689aa4e2ac622b69dc3cf.webp'
    },

    clinic: {
      title: 'THE CLUB HOUSE',
      subtitle: 'BE ENTERTAINED',
      text: 'The clubhouse at Auramah Valley may have a stiff upper lip, but its got a soul that is warm and welcoming. You can begin your evening in the billiards room or in the leisurely card rooms and then enjoy sitting by the refreshing pool. You may also choose to relax and unwind yourself at "Aura" - the spa.',
      image: '/assets/537011899.jpg'
    },
    grocery: {
      title: 'In House Clinic',
      subtitle: 'SAFE TRANSFERS',
      text: 'Auramah Valley offers an exclusive service to its residents by providing them with a helicopter facility. The residents of the Auramah Valley can easily choose to fly smart and reach other destinations in North India within a short time or they may use it for a leisurely purpose of sightseeing.',
      image: '/assets/426110608.jpg'
    },
    security: {
      title: 'SPORTS ACTIVITY',
      subtitle: 'STAY FIT',
      text: 'Nature is the best healer as it helps us to revive, stimulate and rejuvenate our body, mind and soul. At Auramah Valley, you can enjoy the scenic panoramas, diverse landscapes or take a hike and explore the natural world around you.',
      image: '/assets/5824c18078a689aa4e2ac622b69dc3cf.webp'
    },
    dining: {
      title: 'HELICOPTER CLUB',
      subtitle: 'SAFE TRANSFERS',
      text: 'Auramah Valley offers an exclusive service to its residents by providing them with a helicopter facility. The residents of the Auramah Valley can easily choose to fly smart and reach other destinations in North India within a short time or they may use it for a leisurely purpose of sightseeing.',
      image: '/assets/426110608.jpg'
    },
    manor: {
      title: 'SPORTS ACTIVITY',
      subtitle: 'STAY FIT',
      text: 'Nature is the best healer as it helps us to revive, stimulate and rejuvenate our body, mind and soul. At Auramah Valley, you can enjoy the scenic panoramas, diverse landscapes or take a hike and explore the natural world around you.',
      image: '/assets/5824c18078a689aa4e2ac622b69dc3cf.webp'
    },

    housekeeping: {
      title: 'THE CLUB HOUSE',
      subtitle: 'BE ENTERTAINED',
      text: 'The clubhouse at Auramah Valley may have a stiff upper lip, but its got a soul that is warm and welcoming. You can begin your evening in the billiards room or in the leisurely card rooms and then enjoy sitting by the refreshing pool. You may also choose to relax and unwind yourself at "Aura" - the spa.',
      image: '/assets/537011899.jpg'
    },
    bar: {
      title: 'In House Clinic',
      subtitle: 'SAFE TRANSFERS',
      text: 'Auramah Valley offers an exclusive service to its residents by providing them with a helicopter facility. The residents of the Auramah Valley can easily choose to fly smart and reach other destinations in North India within a short time or they may use it for a leisurely purpose of sightseeing.',
      image: '/assets/426110608.jpg'
    },
  };

  const tabs = [
    { id: 'clubhouse', label: 'The Club House' },
    { id: 'helicopter', label: 'Helicopter Club' },
    { id: 'sports', label: 'Sports Activities' },
    { id: 'clinic', label: 'In House Clinic' },
    { id: 'grocery', label: 'Grocery Store' },
    { id: 'security', label: '24*7 Security' },
    { id: 'dining', label: 'Dining' },
    { id: 'manor', label: 'The Manor' },
    { id: 'housekeeping', label: 'Housekeeping' },
    { id: 'bar', label: 'Bar' }
  ];

  const toggleMobileSection = (id) => {
    setActiveMobileSection(activeMobileSection === id ? null : id);
  };

  return (
    <>
      {/* Mobile/Tablet View */}
      <div className="mobile-view">
        {/* <div className="logo-section">
          <img src="/auramah-valley-logo.png" alt="Auramah Valley" className="logo" />
          <h2 className="subtitle">Himalayan Country Estate</h2>
        </div> */}

        <h1 className="main-heading">WHY YOU WOULD RESIDE WITH US</h1>

        <div className="mobile-sections">
          {Object.entries(content).map(([id, section]) => (
            <div key={id} className="mobile-section">
              <div
                className={`mobile-header ${activeMobileSection === id ? 'active' : ''}`}
                onClick={() => toggleMobileSection(id)}
              >
                <div className="header-text">
                  <h2 className="section-title">{section.title}</h2>
                  <p className="section-subtitle">{section.subtitle}</p>
                </div>
                <div className="plus-icon">+</div>
              </div>

              {activeMobileSection === id && (
                <div className="mobile-content">
                  <img
                    src={section.image || "/placeholder.svg"}
                    alt={section.title}
                    className="mobile-image"
                  />
                  <p className="mobile-text">{section.text}</p>
                  <button className="know-more-btn">KNOW MORE</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="desktop-view">
        <h1 className="main-heading">WHY YOU WOULD RESIDE WITH US</h1>

        <div className="tabs-container">
          <div className="tabs-wrapper">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="content-section">
          {content[activeTab] && (
            <>
              <div className="text-content">
                <h2 className="section-title">{content[activeTab].title}</h2>
                <p className="section-text">{content[activeTab].text}</p>
                <button className="know-more-btn">KNOW MORE</button>
              </div>
              <div className="image-content">
                <img
                  src={content[activeTab].image || "/placeholder.svg"}
                  alt={content[activeTab].title}
                  className="section-image"
                />
              </div>
            </>
          )}
        </div>
      </div>
      
      <div className="callNow">
        <p>DON'T HESITATE TO CONTACT US</p>
        <h1>SCHEDULE A CALL NOW</h1>
        <h2>1800 12000 1236</h2>
        <a href="tel:1800120001236" className="call-button">CALL NOW</a>
      </div>
    </>
  );
};

export default Resideus;