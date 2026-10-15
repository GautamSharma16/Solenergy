import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationLinks } from '../data/navigation';
import { companyInfo } from '../data/company';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled down past top buffer
      if (currentScrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current + 4) {
          // Scrolling down
          setNavVisible(false);
        } else if (currentScrollY < lastScrollY.current - 4) {
          // Scrolling up
          setNavVisible(true);
        }
      } else {
        setNavVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleMobileSubmenu = (title) => {
    setMobileExpanded(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : 'header-transparent'} ${!navVisible ? 'header-hidden' : ''} ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="header-container-full">
        {/* Brand Logo - clean without DIPP badge */}
        <Link to="/" className="brand-logo-link" aria-label="SolEnergi Home">
          <div className="brand-logo-wrap">
            <img 
              src="/images/logo.png" 
              alt="SolEnergi Research Pvt Ltd" 
              className="brand-logo-img"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }} 
            />
            <div className="brand-logo-fallback" style={{ display: 'none' }}>
              <div className="fallback-sun"></div>
              <span className="fallback-text">Sol<span>Energi</span></span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation with Animated Underlines on Hover */}
        <nav className="desktop-nav" aria-label="Primary Navigation">
          <ul className="nav-list">
            {navigationLinks.map((link) => {
              const hasChildren = link.children && link.children.length > 0;
              const isActive = location.pathname === link.path || 
                (hasChildren && link.children.some(c => location.pathname === c.path));

              return (
                <li 
                  key={link.title} 
                  className={`nav-item ${hasChildren ? 'has-dropdown' : ''} ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => hasChildren && setActiveDropdown(link.title)}
                  onMouseLeave={() => hasChildren && setActiveDropdown(null)}
                >
                  <Link 
                    to={link.path} 
                    className="nav-link underline-link"
                  >
                    <span>{link.title}</span>
                    {hasChildren && <ChevronDown size={14} className="dropdown-caret" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasChildren && activeDropdown === link.title && (
                    <div className="dropdown-menu">
                      <div className="dropdown-grid">
                        {link.children.map((subItem) => (
                          <Link 
                            key={subItem.path} 
                            to={subItem.path} 
                            className="dropdown-item"
                          >
                            <span className="dropdown-title">{subItem.title}</span>
                            {subItem.description && (
                              <span className="dropdown-desc">{subItem.description}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Hamburger */}
        <div className="header-mobile-toggle-wrap">
          <button 
            type="button" 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-inner">
          <ul className="mobile-nav-list">
            {navigationLinks.map((link) => {
              const hasChildren = link.children && link.children.length > 0;
              const isExpanded = mobileExpanded[link.title];

              return (
                <li key={link.title} className="mobile-nav-item">
                  <div className="mobile-nav-row">
                    <Link 
                      to={link.path} 
                      className="mobile-nav-link"
                      onClick={() => !hasChildren && setMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                    {hasChildren && (
                      <button 
                        type="button" 
                        className="mobile-expand-btn"
                        onClick={() => toggleMobileSubmenu(link.title)}
                        aria-label="Toggle submenu"
                      >
                        <ChevronDown 
                          size={18} 
                          style={{ 
                            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease' 
                          }} 
                        />
                      </button>
                    )}
                  </div>

                  {hasChildren && isExpanded && (
                    <ul className="mobile-submenu">
                      {link.children.map((sub) => (
                        <li key={sub.path}>
                          <Link 
                            to={sub.path} 
                            className="mobile-sub-link"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

        </div>
      </div>
    </header>
  );
}
