import React from 'react';
import { Factory, TrendingDown, Percent, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { solutionsData } from '../data/services';

export default function CommercialIndustrial() {
  const data = solutionsData.find(s => s.slug === 'commercial-industrial') || solutionsData[1];

  return (
    <div className="solution-page">
      <section className="subpage-hero">
        <div className="container">
          <span className="badge-eyebrow dark">INDUSTRIAL & FACTORY EPC</span>
          <h1 className="subpage-hero-title">{data.title}</h1>
          <p className="subpage-hero-sub">{data.subtitle}</p>
        </div>
      </section>

      {/* Tax Benefit Callout Section */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, var(--color-dark-navy) 0%, var(--color-dark-obsidian) 100%)',
            color: '#fff',
            padding: ' clamp(2rem, 4vw, 3rem)',
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
                <Percent size={18} />
                <span>INCOME TAX ACT SECTION 32 BENEFIT</span>
              </div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '0.75rem' }}>
                Claim 40% Accelerated Tax Depreciation in Year 1
              </h2>
              <p style={{ color: 'rgba(245, 247, 250, 0.85)', lineHeight: 1.6, fontSize: '1rem', margin: 0 }}>
                {data.taxBenefit}
              </p>
            </div>

            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid var(--color-dark-border)', borderRadius: 'var(--border-radius-md)', padding: '1.5rem 2rem', textAlign: 'center' }}>
              <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-primary-orange)', display: 'block', lineHeight: 1 }}>
                40%
              </span>
              <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fff', fontWeight: 600, display: 'block', marginTop: '6px' }}>
                Year-1 Write-Off
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Engineering Overview */}
      <section className="section">
        <div className="container">
          <div className="about-intro-grid">
            <div>
              <SectionHeading 
                eyebrow="HIGH-DEMAND MANUFACTURING"
                title="Shed Industrial Grid Tariff Volatility with Tailored Rooftop EPC"
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
                <img src={data.heroImage} alt="Industrial Solar EPC" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Features */}
      <section className="section section-light">
        <div className="container">
          <SectionHeading 
            eyebrow="ENGINEERING ADVANTAGES"
            title="Customized To Match Industrial Peak Operating Shifts"
            center={true}
          />

          <div className="grid-3" style={{ marginTop: '2.5rem' }}>
            {data.features.map((feat, idx) => (
              <div key={idx} className="service-card" style={{ padding: '2rem' }}>
                <Factory size={28} style={{ color: 'var(--color-primary-orange)', marginBottom: '1rem' }} />
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
                eyebrow="INDUSTRIAL AUDIT"
                title="Schedule a Factory Rooftop Structural & Electrical Audit"
                subtitle="Our lead engineers perform wind-load calculations, transformer capacity sizing, and CEIG coordination."
              />
            </div>
            <div>
              <ContactForm defaultSubject="Solar Rooftop (Commercial & Industrial)" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
