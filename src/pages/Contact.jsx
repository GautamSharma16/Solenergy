import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { companyInfo } from '../data/company';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Navigation } from 'lucide-react';
import Ticker from '../components/Ticker';

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="subpage-hero">
        <div className="container">
          <span className="badge-eyebrow dark">GET IN TOUCH</span>
          <h1 className="subpage-hero-title">Contact SolEnergi Research</h1>
          <p className="subpage-hero-sub">
            Connect with our headquarters in Delhi or regional hubs across India for turnkey solar solutions.
          </p>
        </div>
      </section>

      <Ticker theme="light" />

      <section className="section">
        <div className="container">
          <div className="consultation-grid">
            {/* Left Contact Details */}
            <div>
              <SectionHeading 
                eyebrow="CENTRAL DESK"
                title="Engineering Support & Corporate Inquiries"
                subtitle="Our certified technical team provides rapid response feasibility checks, proposal preparation, and dealer support."
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
                <div className="service-card" style={{ padding: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-primary-orange-light)', color: 'var(--color-primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary-orange)', fontWeight: 700 }}>
                        Corporate Headquarters (Delhi)
                      </span>
                      <h4 style={{ fontSize: '1.15rem', color: 'var(--color-dark-navy)', marginTop: '2px', marginBottom: '4px' }}>
                        SolEnergi Research Private Limited
                      </h4>
                      <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--color-text-body)', lineHeight: 1.5 }}>
                        Plot No – 185, FIE, Patparganj Industrial Area, Delhi – 110092
                      </p>
                    </div>
                  </div>
                </div>

                <div className="service-card" style={{ padding: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-primary-orange-light)', color: 'var(--color-primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary-orange)', fontWeight: 700 }}>
                        Direct Telephone Lines
                      </span>
                      <p style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-dark-navy)' }}>
                        <a href={`tel:${companyInfo.contact.phoneMain}`}>{companyInfo.contact.phoneDisplay}</a> / <a href={`tel:${companyInfo.contact.mobileMain}`}>{companyInfo.contact.mobileDisplay}</a>
                      </p>
                      <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                        Operational hours: {companyInfo.contact.supportHours}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="service-card" style={{ padding: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-primary-orange-light)', color: 'var(--color-primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary-orange)', fontWeight: 700 }}>
                        Official Email
                      </span>
                      <p style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-dark-navy)' }}>
                        <a href={`mailto:${companyInfo.contact.email}`}>{companyInfo.contact.email}</a>
                      </p>
                      <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                        Technical proposals: proposals@solenergi.in
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div>
              <ContactForm defaultSubject="General Corporate Enquiry" />
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices Row */}
      <section className="section section-light">
        <div className="container">
          <SectionHeading 
            eyebrow="REGIONAL DISPATCH"
            title="Locate Regional Offices in Mumbai, Leh & Bihar"
            center={true}
          />

          <div className="grid-3" style={{ marginTop: '2.5rem' }}>
            {companyInfo.offices.filter(o => !o.isHQ).map(office => (
              <div key={office.id} className="service-card" style={{ padding: '1.75rem' }}>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--color-dark-navy)', marginBottom: '0.5rem' }}>
                  {office.city}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-body)', lineHeight: 1.5, marginBottom: '1rem', flexGrow: 1 }}>
                  {office.address}
                </p>
                <div style={{ borderTop: '1px solid var(--color-light-border)', paddingTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <a href={`tel:${office.phone.split('/')[0].trim()}`} style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-primary-orange)' }}>
                    {office.phone}
                  </a>
                  <a href={`mailto:${office.email}`} style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                    {office.email}
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
