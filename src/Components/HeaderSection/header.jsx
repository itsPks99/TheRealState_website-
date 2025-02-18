import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const menuItems = [
    // { title: "HOME", link: "./" },
    { title: "ABOUT US", link: "/about", dropdown: ["Our Mission", "Our Vision", "Location" ] },
    { title: "LOCATION", link: "/contact" },
    { title: "BUDGET", link: "/budget" },
    { title: "E BROCHURE", link: "./public/e-brochure.pdf", isPDF: true },
    { title: "CONTACT US", link: "/contact" }
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleAboutClick = () => {
    navigate("/about");
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <a href="/"><img src="./public/assets/Logo-01_52fc29c7-e25d-4daf-abc2-3841b85982db.png" alt="YOGLYF" className="Headerlogo" /></a>
        </div>

        {/* Desktop Menu */}
        <nav className="desktop-menu">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item">
              {item.dropdown ? (
                <div className="menu-button" onClick={() => handleAboutClick()}>
                  {item.title}
                  <span className="arrow-down" onClick={() => toggleDropdown(index)}></span>
                  {activeDropdown === index && (
                    <div className="dropdown">
                      {item.dropdown.map((subItem, subIndex) => (
                        <a key={subIndex} href={`#${subItem.toLowerCase().replace(" ", "-")}`} className="dropdown-item">
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.isPDF ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="menu-button">
                  {item.title}
                </a>
              ) : (
                <Link to={item.link} className="menu-button">
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>

        {/* Mobile Menu */}
        <nav className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
          {menuItems.map((item, index) => (
            <div key={index} className="mobile-menu-item">
              {item.dropdown ? (
                <button className="mobile-menu-button" onClick={() => handleAboutClick()}>
                  {item.title}
                  <span className={`mobile-arrow ${activeDropdown === index ? "active" : ""}`} onClick={() => toggleDropdown(index)}></span>
                  {activeDropdown === index && (
                    <div className="mobile-dropdown">
                      {item.dropdown.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={`#${subItem.toLowerCase().replace(" ", "-")}`}
                          className="mobile-dropdown-item"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </button>
              ) : item.isPDF ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="mobile-menu-button">
                  {item.title}
                </a>
              ) : (
                <Link to={item.link} className="mobile-menu-button" onClick={toggleMobileMenu}>
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Menu;
