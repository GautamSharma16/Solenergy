import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SectionHeading({ 
  eyebrow, 
  title, 
  subtitle, 
  center = false, 
  theme = 'light',
  className = '' 
}) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const eyebrowRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      });

      if (eyebrowRef.current) {
        tl.from(eyebrowRef.current, {
          opacity: 0,
          y: 15,
          duration: 0.5,
          ease: 'power2.out'
        });
      }

      if (titleRef.current) {
        tl.from(titleRef.current, {
          opacity: 0,
          y: 25,
          duration: 0.7,
          ease: 'power3.out'
        }, '-=0.3');
      }

      if (subtitleRef.current) {
        tl.from(subtitleRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power2.out'
        }, '-=0.4');
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`section-header ${center ? 'center' : ''} ${className}`}
    >
      {eyebrow && (
        <span 
          ref={eyebrowRef} 
          className={`badge-eyebrow ${theme === 'dark' ? 'dark' : ''}`}
        >
          {eyebrow}
        </span>
      )}
      
      {title && (
        <h2 
          ref={titleRef} 
          style={{ color: theme === 'dark' ? '#FFFFFF' : 'var(--color-dark-navy)' }}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p 
          ref={subtitleRef} 
          className="section-subtitle"
          style={{ color: theme === 'dark' ? 'rgba(245, 247, 250, 0.78)' : 'var(--color-text-body)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
