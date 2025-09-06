import './footer.css';
import { FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer-title">Connect With Us</h3>

      <div className="footer-links">
        <a href="tel:+918291840140"
          className="footer-link phone">
          <FaPhoneAlt className="footer-icon" />
          +91 8291840140
        </a>

        <a href="https://instagram.com/mioro"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link instagram">
          <FaInstagram className="footer-icon" />
        mioro
        </a>

        <a href="https://wa.me/918291840140"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link whatsapp">
          <FaWhatsapp className="footer-icon" />
          Chat on WhatsApp
        </a>
      </div>

      <p className="footer-copy">
        © 2025 Mioro — Homemade with Love
      </p>
    </footer>
  );
}

export default Footer;
