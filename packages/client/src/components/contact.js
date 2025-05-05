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
  
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: true, success: false, message: 'Sending...' });
    
    try {
      // Use environment variable for API URL if available
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      
      const response = await axios.post(`${apiUrl}/send-email`, formData);
      console.log('Success:', response.data);
      
      setStatus({
        submitted: true,
        success: true,
        message: 'Message sent successfully!'
      });
      
      // Clear form
      setFormData({ name: "", email: "", message: "" });
      
    } catch (error) {
      console.error('Error:', error);
      
      setStatus({
        submitted: true,
        success: false,
        message: 'Error sending message. Please try again.'
      });
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-header">CONTACT</h1>
      <h2 className="email-header">Email Us</h2>

      {status.submitted && (
        <div className={`status-message ${status.success ? 'success' : 'error'}`}>
          {status.message}
        </div>
      )}

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