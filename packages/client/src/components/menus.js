import React from "react";
import "../styles/Menu.css"; 
import menu1 from "../public/images/MENU ORLENA I.jpg";
import menu2 from "../public/images/MENU ORLENA II.jpg";
import menu3 from "../public/images/MENU ORLENA III.jpg";
import logo from "../public/images/logo.png";
const Menu = () => {
  return (
    <div className="menu-page">
      <div className="menu-content">
        <h1>Orlenalycious’s Menu</h1>
        <p>
          At Orlena Lycious, we take pride in crafting irresistibly delicious
          brownies and an array of pastry sweet desserts that blend
          affordability with uncompromising quality. Our best-selling menu
          features a tantalizing selection of brownies and other treats in
          various shapes, each bursting with unique and delectable fillings and
          toppings. Indulge in our fruity, cheesy, chocolatey, green tea, and
          red velvet delights that promise to satisfy every sweet craving. Come
          and experience the perfect balance of taste, quality, and value at
          Orlena Lycious.
        </p>
        <img src={menu1} alt=''></img>
        <img src={menu2} alt=''></img>
        <img src={menu3} alt=''></img>
      </div>
      <div className="menu-footer">
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </div>
  );
};

export default Menu;
