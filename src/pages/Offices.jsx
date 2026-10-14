import React from 'react';
import { MapPin, Phone, Mail, Navigation, Clock, Building } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { companyInfo } from '../data/company';

export default function Offices() {
  return (
    <div className="offices-page">
      <section className="subpage-hero">
        <div className="container">
          <span className="badge-eyebrow dark">PAN INDIA PRESENCE</span>
          <h1 className="subpage-hero-title">Our Offices Across India</h1>
          <p className="subpage-hero-sub">
            For sales enquiries or customer support: {companyInfo.contact.phoneDisplay} (All 7 Days, 8:00 AM – 8:00 PM IST)
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading 
            eyebrow="REGIONAL HUBS"
            title="Strategic Regional Coverage & Engineering Centers"
            subtitle="Connect directly with our regional offices across North, West, and East India for site surveys, EPC proposals, and project delivery."
          />

          <div className="grid-2" style={{ marginTop: '2.5rem' }}>
            {companyInfo.offices.map((office) => (
              <div 
                key={office.id} 
                className="office-card"
                style={{
                  backgroundColor: 'var(--color-white)',
                  border: office.isHQ ? '2px solid var(--color-primary-orange)' : '1px solid var(--color-light-border)',
                  borderRadius: 'var(--border-radius-md)',
                  padding: '2rem',
                  boxShadow: office.isHQ ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  position: 'relative'
                }}
              >
                {office.isHQ && (
                  <span 
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      right: '1.25rem',
                      backgroundColor: 'var(--color-primary-orange)',
                      color: 'var(--color-white)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      padding: '0.35rem 0.75rem',
                      borderRadius: 'var(--border-radius-pill)'
                    }}
                  >
                    Corporate HQ
                  </span>
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div 
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-primary-orange-light)',
                      color: 'var(--color-primary-orange)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Building size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--color-dark-navy)', margin: 0 }}>
                      {office.city}
                    </h3>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <MapPin size={18} style={{ color: 'var(--color-primary-orange)', marginTop: '3px', flexShrink: 0 }} />
                  <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text-body)', lineHeight: 1.5 }}>
                    {office.address}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <Phone size={18} style={{ color: 'var(--color-primary-orange)', flexShrink: 0 }} />
                  <a 
                    href={`tel:${office.phone.split('/')[0].trim()}`}
                    style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-dark-navy)' }}
                  >
                    {office.phone}
                  </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <Mail size={18} style={{ color: 'var(--color-primary-orange)', flexShrink: 0 }} />
                  <a 
                    href={`mailto:${office.email}`}
                    style={{ fontSize: '0.95rem', color: 'var(--color-text-body)' }}
                  >
                    {office.email}
                  </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <Clock size={18} style={{ color: 'var(--color-primary-orange)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                    {companyInfo.contact.supportHours}
                  </span>
                </div>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--color-light-border)', marginTop: 'auto' }}>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${office.mapQuery}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ width: '100%', fontSize: '0.88rem', padding: '0.65rem' }}
                  >
                    <Navigation size={14} />
                    <span>View Directions on Google Maps</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
