import React, { useState, useEffect } from "react";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    aiTools: false,
    learning: false,
    community: false,
    tools: false
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = (dropdownType) => {
    setIsDropdownOpen(prev => ({
      ...Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
      [dropdownType]: !prev[dropdownType]
    }));
  };

  const DropdownMenu = ({ isOpen, items }) =>
    isOpen && (
      <div
        style={{
          position: "absolute",
          top: "100%",
          left: 0,
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          width: "300px", // Fixed width for uniformity
          zIndex: 10,
          
        }}
      >
        <ul
          style={{
            listStyle: "none",
            padding: 0, // Remove default padding
            margin: 0, // Remove default margin
          }}
        >
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                style={{
                  display: "block", // Entire row is clickable
                  padding: "12px 16px", // Uniform padding
                  textDecoration: "none", // No underline
                  color: "#333", // Professional text color
                  fontSize: "14px", // Easy-to-read font size
                  fontWeight: "500", // Slightly bold for emphasis
                  backgroundColor: "white", // Default background
                  transition: "background-color 0.2s ease, color 0.2s ease", // Smooth hover transition
                  whiteSpace: "nowrap", // Prevent wrapping
                  overflow: "hidden", // Avoid content overflow
                  textOverflow: "ellipsis", // Add ellipsis for long text
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#f5f5f5"; // Subtle hover background
                  e.target.style.color = "#000"; // Darker text on hover
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "white"; // Reset background
                  e.target.style.color = "#333"; // Reset text color
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  
  
  
  

  const menuItems = {
    aiTools: [
      { label: "Business Plan Generator", link: "/BusinessPlanGenerator" },
      { label: "Market Analysis", link: "/MarketAnalysis" },
      { label: "Financial Projections", link: "/FinancialProjections" },
      { label: "Marketing Strategy", link: "/MarketingStrategy" },
      { label: "Multilingual Translation", link: "/MultilingualTranslation" },
    ],
    learning: [
      { label: "Video Tutorials", link: "/VideoTutorials" },
      { label: "Industry Guides", link: "/IndustryGuides" },
      { label: "Funding Resources", link: "/FundingResources" },
    ],
    community: [
      { label: "Mentor Matching", link: "/MentorMatching" },
      { label: "Peer Networking", link: "/PeerNetworking" },
      { label: "Success Stories", link: "/SuccessStories" },
    ],
    tools: [
      { label: "Financial Calculator", link: "/FinancialCalculator" },
      { label: "Logo Maker", link: "/LogoMaker" },
      { label: "Timeline Planner", link: "/TimelinePlanner" },
    ],
  };

  const navbarStyle = {
    backgroundColor: "white",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "100%",
    position: "fixed",
    top: 40,
    left: 0,
    zIndex: 1000,

    
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  };

  const logoImageStyle = {
    width: "80px",
    marginRight: "10px",
  };

  const logoTextStyle = {
    fontSize: "27px",
    // fontWeight: "bold",
    fontFamily: "Sans-serif",
    color: "black",
  };

  const desktopMenuStyle = {
    display: isMobile ? "none" : "flex",
    alignItems: "center",
  };

  const menuListStyle = {
    display: "flex",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  };

  const menuItemStyle = {
    marginRight: "1rem",
    position: "relative",
  };

  const menuButtonStyle = {
    cursor: "pointer",
    fontSize: "18px",
    padding: "12px 20px",
    color: "#4b5563",
    borderRadius: "8px",
    transition: "color 0.3s",
    background: "none",
    border: "none",
  };

  const authButtonStyle = {
    padding: "0.5rem 1rem",
    backgroundColor: "#E65103",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  };

  const mobileMenuStyle = {
    display: isMobile ? "block" : "none",
  };

  const mobileMenuToggleStyle = {
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
  };

  const mobileMenuContentStyle = {
    position: "fixed",
    top: "80px",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
    overflowY: "auto",
    padding: "1rem",
    zIndex: 1000,
  };

  const mobileMenuListStyle = {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  };

  const mobileMenuItemStyle = {
    marginBottom: "1rem",
  };

  const mobileSubmenuStyle = {
    listStyleType: "none",
    paddingLeft: "1rem",
  };

  const mobileSubmenuItemStyle = {
    marginBottom: "0.5rem",
  };

  return (
    <div style={navbarStyle}>
      <div style={containerStyle}>
        <a href="/Home" title="PolyFile" style={logoStyle}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/22f8d890c18bf5c16d6918bdd45acbf15a748688ba0804a0fa8082349d5c8f2f?placeholderIfAbsent=true&apiKey=b649485253dc47298996013798279fca"
            alt="EmpowerHer"
            style={logoImageStyle}
          />
          <h1 style={logoTextStyle}>EmpowerHer</h1>
        </a>

        <div style={desktopMenuStyle}>
          <ul style={menuListStyle}>
            {Object.entries(menuItems).map(([key, items]) => (
              <li key={key} style={menuItemStyle}>
                <button
                  onClick={() => toggleDropdown(key)}
                  style={menuButtonStyle}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
                <DropdownMenu isOpen={isDropdownOpen[key]} items={items} />
              </li>
            ))}
          </ul>
          <div style={{ marginLeft: "1rem" }}>
            {!isLoggedIn ? (
              <button style={authButtonStyle} onClick={() => console.log('Redirect to Register/Login page')}>
                Register/Login
              </button>
            ) : (
              <>
                <button style={authButtonStyle} onClick={() => console.log('Redirect to Dashboard')}>
                  Dashboard
                </button>
                <button style={{...authButtonStyle, marginLeft: "0.5rem"}} onClick={() => console.log('Logging out')}>
                  Logout
                </button>
              </>
            )}
          </div>
        </div>

        <div style={mobileMenuStyle}>
          <button style={mobileMenuToggleStyle} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            ☰
          </button>
          {isMobileMenuOpen && (
            <div style={mobileMenuContentStyle}>
              <ul style={mobileMenuListStyle}>
                {Object.entries(menuItems).map(([key, items]) => (
                  <li key={key} style={mobileMenuItemStyle}>
                    <button
                      onClick={() => toggleDropdown(key)}
                      style={{...menuButtonStyle, width: "100%", textAlign: "left", padding: "0.5rem 0"}}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </button>
                    {isDropdownOpen[key] && (
                      <ul style={mobileSubmenuStyle}>
                        {items.map((item, index) => (
                          <li key={index} style={mobileSubmenuItemStyle}>
                            <a href={item.link} style={{
                              textDecoration: "none",
                              color: "black",
                              fontSize: "16px",
                            }}>{item.label}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "1rem" }}>
                {!isLoggedIn ? (
                  <button style={{...authButtonStyle, width: "100%"}} onClick={() => console.log('Redirect to Register/Login page')}>
                    Register/Login
                  </button>
                ) : (
                  <>
                    <button style={{...authButtonStyle, width: "100%", marginBottom: "0.5rem"}} onClick={() => console.log('Redirect to Dashboard')}>
                      Dashboard
                    </button>
                    <button style={{...authButtonStyle, width: "100%"}} onClick={() => console.log('Logging out')}>
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
