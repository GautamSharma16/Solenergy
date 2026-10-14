import React from 'react';
import { Sun, Zap, CheckCircle2, DollarSign, Layers } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { solutionsData } from '../data/services';

export default function SolarFarms() {
  const data = solutionsData.find(s => s.slug === 'solar-farms') || solutionsData[4];

  return (
    <div className="solution-page">
      <section className="subpage-hero">
        <div className="container">
          <span className="badge-eyebrow dark">UTILITY-SCALE GENERATION</span>
          <h1 className="subpage-hero-title">{data.title}</h1>
          <p className="subpage-hero-sub">{data.subtitle}</p>
        </div>
      </section>

      {/* Main Details */}
      <section className="section">
        <div className="container">
          <div className="about-intro-grid">
            <div>
              <SectionHeading 
                eyebrow="MULTI-MEGAWATT POWER SUPPLY"
                title="Open Access Clean Power Sourced Directly From Ground-Mounted Solar Parks"
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
                <img src={data.heroImage} alt="Utility Scale Solar Farm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Models (CAPEX, RESCO, Group Captive) */}
      <section className="section section-light">
        <div className="container">
          <SectionHeading 
            eyebrow="COMMERCIAL FINANCING STRUCTURES"
            title="Flexible Procurement Frameworks For Large Power Consumers"
            center={true}
          />

          <div className="grid-3" style={{ marginTop: '2.5rem' }}>
            {data.models.map((m, idx) => (
              <div key={idx} className="service-card" style={{ padding: '2.25rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--color-primary-orange-light)', color: 'var(--color-primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Layers size={24} />
                </div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--color-dark-navy)', marginBottom: '0.75rem' }}>
                  {m.name}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-body)', lineHeight: 1.6, margin: 0 }}>
                  {m.desc}
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
                eyebrow="OPEN ACCESS CONSULTATION"
                title="Model Your High-Voltage Solar Open Access Sourcing"
                subtitle="Calculate open access tariff differentials, cross-subsidy exemptions, and transmission wheeling parameters for your industrial facility."
              />
            </div>
            <div>
              <ContactForm defaultSubject="Utility-Scale Solar Farm" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
