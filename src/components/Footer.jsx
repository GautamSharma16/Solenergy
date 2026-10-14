import React from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/company';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-main-content">
        <div className="footer-top-row">
          <div className="footer-newsletter">
            <h2>Sign up for the latest announcement</h2>
            <form className="footer-newsletter-form">
              <input type="email" placeholder="Your e-mail address" aria-label="Your e-mail address" />
              <button type="submit" aria-label="Submit email">
                <ArrowUpRight size={20} />
              </button>
            </form>
          </div>

          <Link to="/" className="footer-logo-link" aria-label="SolEnergi Home">
            <img
              src="/images/logo.png"
              alt="SolEnergi Logo"
              className="footer-logo-img"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="footer-logo-fallback" style={{ display: 'none' }}>
              Sol<span>Energi</span>
            </div>
          </Link>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><Link to="/about-us">About us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/rooftops">Solutions</Link></li>
              <li><Link to="/large-projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col footer-address-col">
            <h4 className="footer-col-title">Address</h4>
            <p>Plot No - 185, FIE, Patparganj Industrial Area, Delhi - 110092</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Plot+No+185+FIE+Patparganj+Industrial+Area+Delhi+110092"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-line-link"
            >
              <span>Locate us</span>
              <MapPin size={15} />
            </a>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Call Us</h4>
            <p><a href={`tel:${companyInfo.contact.mobileMain}`}>{companyInfo.contact.mobileDisplay}</a></p>
            <a href={`tel:${companyInfo.contact.phoneMain}`} className="footer-line-link">
              <span>Call Now</span>
              <Phone size={15} />
            </a>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Mail Us</h4>
            <p><a href={`mailto:${companyInfo.contact.email}`}>{companyInfo.contact.email}</a></p>
            <a href={`mailto:${companyInfo.contact.email}`} className="footer-line-link">
              <span>Mail Now</span>
              <Mail size={15} />
            </a>
          </div>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-social-row">
            <a href={companyInfo.contact.facebook} target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href={companyInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href={`https://wa.me/91${companyInfo.contact.mobileMain}`} target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.48 0 .11 5.37.11 11.97c0 2.11.55 4.17 1.6 5.98L0 24l6.2-1.63a11.95 11.95 0 0 0 5.88 1.5h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.24-6.2-3.54-8.42ZM12.09 21.85h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.68.97.98-3.59-.23-.37a9.91 9.91 0 0 1-1.52-5.3c0-5.46 4.45-9.91 9.92-9.91 2.65 0 5.14 1.03 7.01 2.9a9.84 9.84 0 0 1 2.9 7.01c0 5.47-4.45 9.88-9.97 9.88Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
              </svg>
            </a>
          </div>

          <p className="footer-copyright">
            © {currentYear} {companyInfo.shortName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
