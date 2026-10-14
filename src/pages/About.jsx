import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Target, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Ticker from '../components/Ticker';
import { companyInfo } from '../data/company';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="container">
          <span className="badge-eyebrow dark">CORPORATE PROFILE</span>
          <h1 className="subpage-hero-title">About SolEnergi Research</h1>
          <p className="subpage-hero-sub">
            Recognised by the Department for Promotion of Industry and Internal Trade (DIPP), 
            Ministry of Commerce & Industry, Government of India.
          </p>
        </div>
      </section>

      <Ticker theme="light" />

      {/* Main Story & DIPP Credentials */}
      <section className="section">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-text">
              <SectionHeading 
                eyebrow="WHO WE ARE"
                title="Pioneering Clean Power Systems Across 20 Indian States"
                subtitle="SolEnergi Research Private Limited is an innovation-driven solar EPC enterprise dedicated to advancing India's renewable energy transition."
              />
              <p>
                Founded as a high-technology startup recognized by DIPP (Ministry of Commerce & Industry), 
                SolEnergi has engineered and commissioned landmark renewable infrastructure projects for 
                leading public and private sector clients, including Northern Railway, GAIL (India) Limited, 
                Bharat Petroleum Corporation Limited (BPCL), and MOIL Limited.
              </p>
              <p>
                From manufacturing the <strong>world's largest Solar Tree (11 KWp)</strong> for MOIL Limited 
                to installing a massive <strong>25,000 Litres/Day solar water heating system</strong> for Northern Railway, 
                our engineering pedigree reflects uncompromising reliability, safety, and performance.
              </p>

              <div className="gov-recognition-banner">
                <ShieldCheck size={28} className="gov-seal-icon" />
                <div>
                  <strong>Official DIPP Startup Recognition:</strong>
                  <p>Certified under the Ministry of Commerce & Industry, Govt. of India, for groundbreaking innovation in solar photovoltaic engineering.</p>
                </div>
              </div>
            </div>

            <div className="about-intro-media">
              <div className="about-img-box reveal-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1548611716-ad0e060938f4?auto=format&fit=crop&w=1000&q=80" 
                  alt="SolEnergi Senior Engineers" 
                />
              </div>
              <div className="about-stats-tile">
                <span className="stats-tile-num">20+</span>
                <span className="stats-tile-lbl">States with Active SolEnergi Installations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section section-dark values-section">
        <div className="container">
          <SectionHeading 
            eyebrow="OUR GUIDING PRINCIPLES"
            title="The Core Values That Drive SolEnergi"
            subtitle="Our culture is built on safety, agility, stakeholder care, and the highest standards of corporate ethics."
            theme="dark"
            center={true}
          />

          <div className="grid-3 values-grid">
            {companyInfo.values.map((val, idx) => (
              <div key={idx} className="value-card">
                <div className="value-num">0{idx + 1}</div>
                <h3 className="value-title">{val.title}</h3>
                <p className="value-desc">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Links Grid */}
      <section className="section section-light">
        <div className="container">
          <SectionHeading 
            eyebrow="EXPLORE FURTHER"
            title="Learn More About SolEnergi's Ecosystem"
            center={true}
          />

          <div className="grid-4 about-sublinks-grid">
            <Link to="/about-us/offices" className="sublink-card">
              <Award size={24} className="sublink-icon" />
              <h4>Our Offices</h4>
              <p>Delhi HQ, Mumbai, Leh Ladakh, and Bihar regional offices.</p>
              <span className="sublink-cta">View Locations <ArrowRight size={13} /></span>
            </Link>

            <Link to="/about-us/sustainability" className="sublink-card">
              <Heart size={24} className="sublink-icon" />
              <h4>Sustainability (CSR)</h4>
              <p>Our commitment to carbon reductions and environmental impact.</p>
              <span className="sublink-cta">Read Report <ArrowRight size={13} /></span>
            </Link>

            <Link to="/about-us/learn-about-solar" className="sublink-card">
              <Target size={24} className="sublink-icon" />
              <h4>Learn About Solar</h4>
              <p>Solar irradiance science, ROI, and property value enhancement.</p>
              <span className="sublink-cta">Discover Solar <ArrowRight size={13} /></span>
            </Link>

            <Link to="/about-us/company-documents" className="sublink-card">
              <ShieldCheck size={24} className="sublink-icon" />
              <h4>Company Documents</h4>
              <p>Download brochures, technical certifications, and warranties.</p>
              <span className="sublink-cta">Access Files <ArrowRight size={13} /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
