import React from 'react';
import { Car, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { solutionsData } from '../data/services';

export default function SolarCarport() {
  const data = solutionsData.find(s => s.slug === 'solar-carport') || solutionsData[3];

  return (
    <div className="solution-page">
      <section className="subpage-hero">
        <div className="container">
          <span className="badge-eyebrow dark">DUAL-UTILITY INFRASTRUCTURE</span>
          <h1 className="subpage-hero-title">{data.title}</h1>
          <p className="subpage-hero-sub">{data.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-intro-grid">
            <div>
              <SectionHeading 
                eyebrow="ELEVATED PARKING CANOPIES"
                title="Transforming Parking Lots Into High-Yield Energy Assets"
                subtitle={data.overview}
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '2rem' }}>
                {data.highlights.map((h, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--color-primary-orange-light)', color: 'var(--color-primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <CheckCircle2 size={16} />
                    </div>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text-body)', lineHeight: 1.6 }}>{h}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="reveal-image-wrapper" style={{ height: '420px', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
                <img src={data.heroImage} alt="Solar Carport Parking" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carport Advantages */}
      <section className="section section-light">
        <div className="container">
          <SectionHeading 
            eyebrow="ENGINEERING HIGHLIGHTS"
            title="Architectural Strength, EV Readiness & Weather Protection"
            center={true}
          />

          <div className="grid-3" style={{ marginTop: '2.5rem' }}>
            {data.features.map((feat, idx) => (
              <div key={idx} className="service-card" style={{ padding: '2rem' }}>
                <Car size={28} style={{ color: 'var(--color-primary-orange)', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-dark-navy)', marginBottom: '0.5rem' }}>
                  {feat.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-body)', lineHeight: 1.5, margin: 0 }}>
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section">
        <div className="container">
          <div className="consultation-grid">
            <div>
              <SectionHeading 
                eyebrow="CARPORT CONSULTATION"
                title="Design a Customized Elevated Solar Carport"
                subtitle="From corporate campus executive parking to municipal transit centers, we engineer durable cantilever and double-pitch solar canopies."
              />
            </div>
            <div>
              <ContactForm defaultSubject="Solar Car Parking / Carport" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
