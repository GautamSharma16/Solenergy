import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const containerRef = useRef(null);
  const orbitRef = useRef(null);
  const fillRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Check if session already loaded to avoid repetitive long waits
    const hasSeen = sessionStorage.getItem('solenergi_preloader_seen');
    const targetDuration = hasSeen ? 1.0 : 1.8;

    const ctx = gsap.context(() => {
      // Progress animation
      const obj = { val: 0 };
      gsap.to(obj, {
        val: 100,
        duration: targetDuration,
        ease: 'power2.inOut',
        onUpdate: () => {
          const current = Math.floor(obj.val);
          setPercent(current);
          if (fillRef.current) {
            fillRef.current.style.width = `${current}%`;
          }
        },
        onComplete: () => {
          sessionStorage.setItem('solenergi_preloader_seen', 'true');
          
          // Smooth exit timeline
          const exitTl = gsap.timeline({
            onComplete: () => {
              if (onComplete) onComplete();
            }
          });

          exitTl.to(contentRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.4,
            ease: 'power2.in'
          })
          .to(containerRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: 'power3.inOut'
          }, '-=0.2');
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div className="hero-preloader" ref={containerRef}>
      <div ref={contentRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="preloader-emblem-wrap">
          <div className="preloader-orbit" ref={orbitRef}></div>
          <div className="preloader-orbit-inner"></div>
          <div className="preloader-sun">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
          </div>
        </div>

        <div className="preloader-text-brand">
          Sol<span>Energi</span>
        </div>
        <div className="preloader-tagline">
          Saving Energy • Saving The Planet
        </div>

        <div className="preloader-bar-container">
          <div className="preloader-bar-fill" ref={fillRef}></div>
        </div>

        <div className="preloader-percent-num">
          {percent}%
        </div>
      </div>
    </div>
  );
}
