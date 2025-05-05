import React, { useState } from "react";
import "../styles/Contact.css";
import logo from "../public/images/logo.png";
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios.post('http://localhost:5000/send-email', formData)
      .then(response => {
        console.log('Success:', response.data);
        alert('Email sent successfully');
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error sending email');
      });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-header">CONTACT</h1>
      <h2 className="email-header">Email Us</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="form-textarea"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="input-group">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Name"
            />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Email"
            />
          </div>
        </div>

        <button type="submit" className="form-submit">
          Submit
        </button>
      </form>

      <div className="whatsapp-container">
        <h1 className="whatsapp-header">WhatsApp</h1>
        <p>
          For immediate assistance, contact us on WhatsApp:{" "}
          <a href="https://wa.me/6282145809558">Click here</a>
        </p>
      </div>
      <div className="menu-direct">
      <img src={logo} alt="Logo" className="logo" />
    </div>
    </div>
  );
}
