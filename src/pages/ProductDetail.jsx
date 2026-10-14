import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { productsData } from '../data/services';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { CheckCircle2, ArrowLeft, ShieldCheck, Zap } from 'lucide-react';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = productsData.find(p => p.slug === slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="product-detail-page">
      <section className="subpage-hero">
        <div className="container">
          <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-sun-yellow)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem' }}>
            <ArrowLeft size={16} /> Back to All Products
          </Link>
          <span className="badge-eyebrow dark" style={{ display: 'block' }}>{product.tagline}</span>
          <h1 className="subpage-hero-title">{product.name}</h1>
          <p className="subpage-hero-sub">{product.description}</p>
        </div>
      </section>

      {/* Main Product Showcase */}
      <section className="section">
        <div className="container">
          <div className="about-intro-grid">
            <div>
              <SectionHeading 
                eyebrow="TECHNICAL SPECIFICATIONS"
                title="Engineered For Maximum Power Density & Field Endurance"
                subtitle={product.description}
              />

              <div style={{ backgroundColor: 'var(--color-light-gray)', padding: '2rem', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-light-border)', marginTop: '2rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-dark-navy)', marginBottom: '1.25rem' }}>
                  Standard Technical Parameters
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {product.specs.map((spec, sIdx) => (
                    <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <CheckCircle2 size={18} style={{ color: 'var(--color-primary-orange)', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-dark-navy)' }}>
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
                  All SolEnergi products undergo stringent quality assurance including AOI optical scanning, 
                  PID resistance testing, and mechanical load certification up to 5400 Pa front load 
                  to withstand extreme weather across Indian terrains.
                </p>
              </div>
            </div>

            <div>
              <div className="reveal-image-wrapper" style={{ height: '420px', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
                <img src={product.image} alt={product.name} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Enquiry */}
      <section className="section section-light">
        <div className="container">
          <div className="consultation-grid">
            <div>
              <SectionHeading 
                eyebrow="PRODUCT PROCUREMENT"
                title={`Request Pricing & Datasheet for ${product.name}`}
                subtitle="Speak with our component distribution and EPC engineering teams for volume pricing, distributor dealerships, and turnkey installation support."
              />
            </div>
            <div>
              <ContactForm defaultSubject={`Product Enquiry: ${product.name}`} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
