import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectGallery from '../components/ProjectGallery';
import Ticker from '../components/Ticker';
import { ShieldCheck, Award, Zap } from 'lucide-react';

export default function LargeProjects() {
  return (
    <div className="projects-page">
      <section className="subpage-hero">
        <div className="container">
          <span className="badge-eyebrow dark">NATIONAL FOOTPRINT</span>
          <h1 className="subpage-hero-title">Landmark Solar Projects</h1>
          <p className="subpage-hero-sub">
            Verified utility-scale, industrial, and institutional solar installations commissioned across India.
          </p>
        </div>
      </section>

      <Ticker theme="light" />

      {/* Projects Showcase */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            eyebrow="PORTFOLIO HIGHLIGHTS"
            title="Engineered For India's Critical Infrastructure"
            subtitle="From national railway junctions and Maharatna oil & gas plants to record-breaking solar trees, explore SolEnergi's proven execution track record."
            center={true}
          />

          <div style={{ marginTop: '3rem' }}>
            <ProjectGallery showFilters={true} />
          </div>
        </div>
      </section>

      {/* Verification Notice */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
            <Award size={44} style={{ color: 'var(--color-primary-orange)', margin: '0 auto 1.5rem auto' }} />
            <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>
              Uncompromising Engineering Standards
            </h2>
            <p style={{ color: 'rgba(245, 247, 250, 0.8)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              All SolEnergi projects undergo stringent CEIG electrical safety scrutiny, 
              stringent structural wind-load certification up to 170 km/h, 
              and 25-year performance monitoring guarantees through cloud-linked SCADA telemetry.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '0.65rem 1.25rem', borderRadius: 'var(--border-radius-pill)', border: '1px solid var(--color-dark-border)', color: 'var(--color-sun-yellow)', fontSize: '0.9rem', fontWeight: 600 }}>
              <ShieldCheck size={18} />
              <span>DIPP Recognised Startup • Ministry of Commerce & Industry, Govt. of India</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
