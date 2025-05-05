// File path: src/components/MenuDirect.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "../styles/menuDirect.css"; // Ensure the CSS file is correctly imported
import logo from "../public/images/logo.png"; // Ensure the path is correct

const MenuDirect = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleButtonClick = () => {
    navigate("/menu"); // Navigate to the /menu route
  };

  return (
    <div className="logo-section">
      <button className="see-more-button" onClick={handleButtonClick}>
        See More of Our Sweetness!
      </button>
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
};

export default MenuDirect;
