import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Calendar, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function News() {
  const articles = [
    {
      id: 1,
      title: "SolEnergi Commissioning Milestone: Off-Grid Solar Network for Northern Railway",
      date: "October 2026",
      category: "Project Updates",
      author: "SolEnergi Research Desk",
      image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
      excerpt: "How SolEnergi engineered an autonomous, fail-safe off-grid solar power network to guarantee uninterrupted power for railway signaling and maintenance centers."
    },
    {
      id: 2,
      title: "Understanding N-Type TOPCon Solar Modules vs Older PERC Technology",
      date: "September 2026",
      category: "Technology Insights",
      author: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80",
      excerpt: "N-Type TOPCon passivated contact cell architecture eliminates Light-Induced Degradation (LID) and delivers up to 23.5% module efficiency in hot Indian climates."
    },
    {
      id: 3,
      title: "How Indian Commercial Facilities Can Claim 40% Tax Depreciation Under IT Section 32",
      date: "August 2026",
      category: "Regulatory & Tax",
      author: "Solar Financial Advisory",
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=800&q=80",
      excerpt: "A comprehensive guide on structuring your factory rooftop solar capital expenditure to legally write off 40% in Year 1 while hedging power tariffs."
    },
    {
      id: 4,
      title: "The Architecture Behind the 11 KWp MOIL Solar Tree in Nagpur",
      date: "July 2026",
      category: "Engineering Innovations",
      author: "Design & Structural Team",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
      excerpt: "Overcoming aerodynamic vortex shedding and optimizing multi-tier leaf panel orientation on the world's largest biomimetic solar tree."
    }
  ];

  return (
    <div className="news-page">
      <section className="subpage-hero">
        <div className="container">
          <span className="badge-eyebrow dark">LATEST INSIGHTS</span>
          <h1 className="subpage-hero-title">News, Insights & Technical Updates</h1>
          <p className="subpage-hero-sub">
            Stay informed with the latest solar engineering innovations, policy updates, and corporate milestones.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading 
            eyebrow="SOLAR INTELLIGENCE"
            title="Industry Trends, Technology & Project Announcements"
            subtitle="Authoritative analysis from SolEnergi's research division."
          />

          <div className="grid-2" style={{ marginTop: '3rem' }}>
            {articles.map((art) => (
              <div 
                key={art.id} 
                className="service-card group"
                style={{ overflow: 'hidden' }}
              >
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.75s ease' }}
                    className="group-hover:scale-105"
                  />
                  <span style={{ position: 'absolute', top: '1rem', left: '1rem', backgroundColor: 'var(--color-primary-orange)', color: '#fff', fontSize: '0.72rem', fontWeight: 700, padding: '0.35rem 0.75rem', borderRadius: 'var(--border-radius-pill)' }}>
                    {art.category}
                  </span>
                </div>

                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '0.85rem', fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Calendar size={14} /> {art.date}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <User size={14} /> {art.author}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', color: 'var(--color-dark-navy)', lineHeight: 1.35, marginBottom: '0.75rem' }}>
                    {art.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                    {art.excerpt}
                  </p>

                  <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--color-light-border)' }}>
                    <Link to="/contact" className="rolling-link" data-hover="Inquire for Research Paper" style={{ fontWeight: 700, color: 'var(--color-primary-orange)', fontSize: '0.9rem' }}>
                      <span>Inquire for Research Paper</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
