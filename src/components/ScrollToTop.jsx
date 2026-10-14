import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUp } from 'lucide-react';
import './ScrollToTop.css';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Refresh ScrollTrigger after DOM has updated
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 120);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      type="button" 
      className={`back-to-top-btn ${showButton ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
    >
      <svg className="progress-ring" width="48" height="48" viewBox="0 0 48 48">
        <circle 
          className="progress-ring-track"
          stroke="rgba(23, 42, 66, 0.15)"
          strokeWidth="3"
          fill="transparent"
          r="20"
          cx="24"
          cy="24"
        />
        <circle 
          className="progress-ring-indicator"
          stroke="var(--color-primary-orange)"
          strokeWidth="3"
          strokeDasharray={`${2 * Math.PI * 20}`}
          strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`}
          strokeLinecap="round"
          fill="transparent"
          r="20"
          cx="24"
          cy="24"
        />
      </svg>
      <ArrowUp size={18} className="arrow-icon" />
    </button>
  );
}
