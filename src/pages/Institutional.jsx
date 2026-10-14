import React from 'react';
import { School, TrendingDown, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { solutionsData } from '../data/services';

export default function Institutional() {
  const data = solutionsData.find(s => s.slug === 'institutional') || solutionsData[2];

  return (
    <div className="solution-page">
      <section className="subpage-hero">
        <div className="container">
          <span className="badge-eyebrow dark">CAMPUS & HEALTHCARE RENEWABLES</span>
          <h1 className="subpage-hero-title">{data.title}</h1>
          <p className="subpage-hero-sub">{data.subtitle}</p>
        </div>
      </section>

      {/* Hedging Callout */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, var(--color-solar-blue) 0%, var(--color-dark-navy) 100%)',
            color: '#fff',
            padding: 'clamp(2rem, 4vw, 3rem)',
            borderRadius: 'var(--border-radius-lg)',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2.5rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ maxWidth: '700px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-sun-yellow)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                <TrendingDown size={18} />
                <span>OPERATIONAL EXPENDITURE HEDGING</span>
              </div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '0.75rem' }}>
                Fix Power Costs at ₹3.50 – ₹5.00 / Unit With 3–5 Years Payback
              </h2>
              <p style={{ color: 'rgba(245, 247, 250, 0.85)', lineHeight: 1.6, fontSize: '1rem', margin: 0 }}>
                {data.paybackNotice}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid var(--color-dark-border)', borderRadius: 'var(--border-radius-md)', padding: '1.25rem 1.75rem', textAlign: 'center' }}>
                <span style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-sun-yellow)', display: 'block', lineHeight: 1 }}>
                  ₹3.5–5
                </span>
                <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fff', fontWeight: 600, display: 'block', marginTop: '6px' }}>
                  Per Unit Cost
                </span>
              </div>

              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid var(--color-dark-border)', borderRadius: 'var(--border-radius-md)', padding: '1.25rem 1.75rem', textAlign: 'center' }}>
                <span style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-primary-orange)', display: 'block', lineHeight: 1 }}>
                  3–5 Yrs
                </span>
                <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fff', fontWeight: 600, display: 'block', marginTop: '6px' }}>
                  ROI Payback
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details */}
      <section className="section">
        <div className="container">
          <div className="about-intro-grid">
            <div>
              <SectionHeading 
                eyebrow="SCHOOLS, COLLEGES & HOSPITALS"
                title="Transforming Educational & Healthcare Roofs into Long-Term Endowments"
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
                <img src={data.heroImage} alt="Campus Solar Rooftop" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section section-light">
        <div className="container">
          <div className="consultation-grid">
            <div>
              <SectionHeading 
                eyebrow="INSTITUTIONAL PROPOSAL"
                title="Request a Custom Campus Solar Feasibility Model"
                subtitle="Discover how much your institution can save over the next 25 years with clean, net-metered solar power."
              />
            </div>
            <div>
              <ContactForm defaultSubject="Institutional Solar Solution" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
