import React from 'react';
import { CheckCircle2, ArrowRight, Sun, BatteryCharging, Zap, ShieldCheck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { solutionsData } from '../data/services';

export default function Rooftops() {
  const data = solutionsData.find(s => s.slug === 'rooftops') || solutionsData[0];

  return (
    <div className="solution-page">
      <section className="subpage-hero">
        <div className="container">
          <span className="badge-eyebrow dark">ROOFTOP PHOTOVOLTAIC SYSTEMS</span>
          <h1 className="subpage-hero-title">{data.title}</h1>
          <p className="subpage-hero-sub">{data.subtitle}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="about-intro-grid">
            <div>
              <SectionHeading 
                eyebrow="ON-GRID & OFF-GRID ARCHITECTURES"
                title="Transforming Underutilized Roofs Into Revenue-Generating Power Stations"
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
                <img src={data.heroImage} alt="Solar Rooftop Installation" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* On-Grid vs Off-Grid Breakdown */}
      <section className="section section-light">
        <div className="container">
          <SectionHeading 
            eyebrow="SYSTEM CONFIGURATIONS"
            title="Choose The Optimal Rooftop Engineering Model"
            center={true}
          />

          <div className="grid-2" style={{ marginTop: '2.5rem' }}>
            {/* On-Grid Card */}
            <div className="service-card" style={{ padding: '2.5rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: 'var(--color-primary-orange-light)', color: 'var(--color-primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Zap size={26} />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-dark-navy)', marginBottom: '0.75rem' }}>
                On-Grid Rooftop Systems
              </h3>
              <p style={{ color: 'var(--color-text-body)', lineHeight: 1.6, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Directly integrated with the state utility (DISCOM) grid supply via a bidirectional net-meter. 
                Power is drawn from the grid only when solar generation is insufficient, exporting excess power during daylight peaks.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid var(--color-light-border)', paddingTop: '1.25rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-primary-orange)' }} />
                  <span>Drastic reduction or total elimination of monthly electricity bills</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-primary-orange)' }} />
                  <span>No battery replacement costs; minimal ongoing maintenance</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-primary-orange)' }} />
                  <span>Statutory net-metering approvals handled end-to-end</span>
                </li>
              </ul>
            </div>

            {/* Off-Grid Card */}
            <div className="service-card" style={{ padding: '2.5rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: 'rgba(48, 79, 125, 0.1)', color: 'var(--color-solar-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <BatteryCharging size={26} />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-dark-navy)', marginBottom: '0.75rem' }}>
                Off-Grid Rooftop Systems
              </h3>
              <p style={{ color: 'var(--color-text-body)', lineHeight: 1.6, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Independent standalone solar system linked with heavy-duty Lithium / tubular battery energy storage (BESS). 
                Engineered for critical infrastructure requiring zero downtime regardless of grid outages.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid var(--color-light-border)', paddingTop: '1.25rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-solar-blue)' }} />
                  <span>100% autonomous operation independent of grid availability</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-solar-blue)' }} />
                  <span>Ideal for remote locations, hospitals, and railway signalling</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-solar-blue)' }} />
                  <span>Eliminates expensive, noisy diesel generator backup costs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="section">
        <div className="container">
          <div className="consultation-grid">
            <div>
              <SectionHeading 
                eyebrow="GET STARTED"
                title="Request a Free Rooftop Solar Feasibility Assessment"
                subtitle="Provide your roof dimensions or monthly electricity bill, and our senior EPC engineers will model your estimated kW capacity and financial payback."
              />
              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <ShieldCheck size={20} style={{ color: 'var(--color-primary-orange)' }} />
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-dark-navy)' }}>25-Year Linear Power Performance Warranty</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <Sun size={20} style={{ color: 'var(--color-sun-yellow)' }} />
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-dark-navy)' }}>High-Yield Tier-1 Monocrystalline & TOPCon Panels</span>
                </div>
              </div>
            </div>
            <div>
              <ContactForm defaultSubject="Solar Rooftop Solutions" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
