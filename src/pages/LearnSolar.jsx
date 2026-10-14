import React from 'react';
import { Sun, DollarSign, TrendingUp, Globe2, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { Link } from 'react-router-dom';

export default function LearnSolar() {
  return (
    <div className="learn-solar-page">
      <section className="subpage-hero">
        <div className="container">
          <span className="badge-eyebrow dark">KNOWLEDGE CENTER</span>
          <h1 className="subpage-hero-title">Learn About Solar Energy</h1>
          <p className="subpage-hero-sub">
            The fundamental science, economic return, and environmental mechanics of harnessing solar radiation.
          </p>
        </div>
      </section>

      {/* Why Solar Section */}
      <section className="section">
        <div className="container">
          <div className="about-intro-grid">
            <div>
              <SectionHeading 
                eyebrow="WHY CHOOSE SOLAR?"
                title="Enough Sunlight Reaches Earth in One Hour to Power the Planet for a Year"
                subtitle="Unlike fossil fuels which require enormous extraction and refining infrastructure, solar photovoltaic systems capture boundless, clean photons right at your rooftop."
              />
              <p>
                Solar power is the cleanest, most abundant renewable energy source available. 
                Modern photovoltaic panels convert sunlight into direct electrical current (DC) with zero moving parts, 
                zero noise, and zero carbon emissions during operation.
              </p>
              <p>
                By installing an on-site solar system, enterprises and homeowners achieve energy sovereignty, 
                drastically lowering monthly utility bills while hedging against recurring state tariff hikes for the next 25+ years.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--color-dark-navy)', color: '#fff', padding: '2.5rem', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-navy)' }}>
              <Sun size={42} style={{ color: 'var(--color-sun-yellow)', marginBottom: '1.25rem' }} />
              <h3 style={{ color: '#fff', fontSize: '1.45rem', marginBottom: '1rem' }}>
                Boundless Solar Capacity
              </h3>
              <p style={{ color: 'rgba(245, 247, 250, 0.8)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Unlike traditional exhaustible resources, the sun produces enough continuous nuclear fusion energy each second 
                to sustain humanity's modern power needs for <strong>500,000 years</strong>.
              </p>
              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.15)' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-primary-orange)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Economic Principle:
                </span>
                <p style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, marginTop: '4px' }}>
                  Zero Recurring Fuel Cost for 25+ Years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantages Grid */}
      <section className="section section-light">
        <div className="container">
          <SectionHeading 
            eyebrow="KEY BENEFITS"
            title="The Three Strategic Advantages of Solar Adoption"
            center={true}
          />

          <div className="grid-3" style={{ marginTop: '2.5rem' }}>
            <div className="service-card" style={{ padding: '2rem' }}>
              <DollarSign size={32} style={{ color: 'var(--color-primary-orange)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-dark-navy)', marginBottom: '0.75rem' }}>
                Substantial Bill Reduction
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
                Solar energy generates immediate financial returns on previously un-utilized roof space. 
                Net-metering credits surplus generation back to the DISCOM grid to zero out bills.
              </p>
            </div>

            <div className="service-card" style={{ padding: '2rem' }}>
              <TrendingUp size={32} style={{ color: 'var(--color-sun-yellow)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-dark-navy)', marginBottom: '0.75rem' }}>
                Enhanced Asset Value
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
                Independent real estate research indicates that properties equipped with solar systems sell up to 
                <strong>20% faster</strong> and command an average <strong>17% price premium</strong> over non-solar assets.
              </p>
            </div>

            <div className="service-card" style={{ padding: '2rem' }}>
              <Globe2 size={32} style={{ color: '#10B981', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-dark-navy)', marginBottom: '0.75rem' }}>
                Zero Carbon Footprint
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
                Unlike diesel generators and coal plants, photovoltaic energy generates no toxic PM2.5, SOx, or CO₂ emissions, 
                directly supporting corporate ESG mandates.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/contact" className="btn btn-primary">
              <span>Calculate Solar Feasibility For Your Facility</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
