import React from 'react';
import { Leaf, Droplets, Flame, ShieldAlert, Award, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { companyInfo } from '../data/company';
import { Link } from 'react-router-dom';

export default function Sustainability() {
  return (
    <div className="sustainability-page">
      <section className="subpage-hero">
        <div className="container">
          <span className="badge-eyebrow dark">CORPORATE SOCIAL RESPONSIBILITY (CSR)</span>
          <h1 className="subpage-hero-title">Sustainability & Environmental Stewardship</h1>
          <p className="subpage-hero-sub">
            Driving down the cost of clean energy while regenerating natural ecosystems for future generations.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section">
        <div className="container">
          <div className="about-intro-grid">
            <div>
              <SectionHeading 
                eyebrow="OUR PLEDGE"
                title="Committed to Sustainable Innovation Across the Lifecycle"
                subtitle="We strive to drive down the levelized cost of photovoltaic (PV) power generation through technological innovation."
              />
              <p>
                As part of our commitment to sustainable development and environmental stewardship, we integrate 
                sustainable best practices across our entire procurement, manufacturing, and operational processes.
              </p>
              <p>
                We look forward to creating a permanent framework for a future-oriented, cleaner, and carbon-free energy system 
                so as to benefit mankind with solar energy, aligning closely with India's COP26 Net-Zero 2070 commitments 
                and United Nations Sustainable Development Goals (SDG 7 - Affordable and Clean Energy).
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--color-light-gray)', padding: '2rem', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--color-light-border)' }}>
              <h3 style={{ color: 'var(--color-dark-navy)', marginBottom: '1.25rem', fontSize: '1.3rem' }}>
                Food For Thought (Per 1 kW Installed)
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: '#fff', padding: '1rem', borderRadius: '8px' }}>
                  <Flame size={28} style={{ color: '#EF4444' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.2rem', color: 'var(--color-dark-navy)' }}>77 kg Coal</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Prevented from being extracted and burned</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: '#fff', padding: '1rem', borderRadius: '8px' }}>
                  <Droplets size={28} style={{ color: '#0EA5E9' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.2rem', color: 'var(--color-dark-navy)' }}>397 Litres Water</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Conserved compared to thermal power plants</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: '#fff', padding: '1rem', borderRadius: '8px' }}>
                  <Leaf size={28} style={{ color: '#10B981' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.2rem', color: 'var(--color-dark-navy)' }}>136 kg CO₂</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Direct greenhouse emissions eliminated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments & Values */}
      <section className="section section-dark">
        <div className="container">
          <SectionHeading 
            eyebrow="CORPORATE ETHOS"
            title="Our Pillars of Responsible Action"
            subtitle="Safety is a core value over which no business objective can take priority."
            theme="dark"
            center={true}
          />

          <div className="grid-3" style={{ marginTop: '2.5rem' }}>
            <div className="value-card">
              <ShieldAlert size={28} style={{ color: 'var(--color-primary-orange)', marginBottom: '1rem' }} />
              <h3 className="value-title">Safety First</h3>
              <p className="value-desc">No deadline, quota, or business objective takes precedence over the physical well-being of our workers and the public.</p>
            </div>

            <div className="value-card">
              <Award size={28} style={{ color: 'var(--color-sun-yellow)', marginBottom: '1rem' }} />
              <h3 className="value-title">Third-Party Reporting</h3>
              <p className="value-desc">Transparent sustainability audits and independent performance testing to guarantee verified yield metrics.</p>
            </div>

            <div className="value-card">
              <Leaf size={28} style={{ color: '#10B981', marginBottom: '1rem' }} />
              <h3 className="value-title">Circular Lifecycle</h3>
              <p className="value-desc">End-of-life recycling pathways for decommissioned panels and environmentally safe component disposal.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/contact" className="btn btn-primary">
              <span>Partner With SolEnergi For Clean Transition</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
