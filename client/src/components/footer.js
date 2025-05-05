import React from "react";
import "../styles/Footer.css"; // Pastikan path CSS sesuai dengan struktur proyek Anda
import logoInstagram from "../public/images/ig_footer.png"; // Ganti dengan path yang sesuai

const Footer = () => {
  const handleInstagramClick = () => {
    window.open(
      "https://www.instagram.com/orlenalycious?igsh=MWlieTZvcHVxZm81ZA==",
      "_blank"
    );
  };

  return (
    <div className="footer">
      <p>© 2021 Orlenalycious. All Rights Reserved.</p>
      <div className="order-now">
        <img
          src={logoInstagram}
          alt="Instagram logo"
          onClick={handleInstagramClick}
        />
        <a
          href="https://linktr.ee/orlenalyciousbali?fbclid=PAZXh0bgNhZW0CMTEAAaaJe19Hg2LvLAqsd5wJ560vYr92X3mV_HLEBsLMb1dw5Y-JYmSULjgn53g_aem_kmlB3eIg-RTwsBvGHFWl2Q"
          target="_blank"
          rel="noopener noreferrer"
          className="order-now-link"
        >
          <strong>ORDER NOW</strong>
        </a>
      </div>
    </div>
  );
};

export default Footer;
