import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import Menu from "./components/menus";
import Footer from "./components/footer";
import AboutUs from "./components/aboutUs";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
