 
import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/menuDirect.css"; 
import logo from "../public/images/logo.png";  

const MenuDirect = () => {
  const navigate = useNavigate(); 

  const handleButtonClick = () => {
    navigate("/menu"); 
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
