import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, SunMedium } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="not-found-page" style={{ minHeight: '75vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem', textAlign: 'center' }}>
      <div style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-primary-orange-light)', color: 'var(--color-primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <SunMedium size={42} />
        </div>
        <span className="badge-eyebrow">404 ERROR</span>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-dark-navy)', marginBottom: '0.75rem', lineHeight: 1.1 }}>
          Page Not Found
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
          The solar resource or page you are looking for has been relocated or is currently undergoing maintenance.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={16} />
            <span>Return to Homepage</span>
          </Link>
          <Link to="/rooftops" className="btn btn-secondary">
            <span>Explore Solutions</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
