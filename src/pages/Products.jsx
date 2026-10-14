import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Ticker from '../components/Ticker';
import { productsData } from '../data/services';
import './Products.css';

export default function Products() {
  return (
    <div className="products-page">
      <section className="subpage-hero">
        <div className="container">
          <span className="badge-eyebrow dark">ADVANCED PRODUCT PORTFOLIO</span>
          <h1 className="subpage-hero-title">SolEnergi Solar Products</h1>
          <p className="subpage-hero-sub">
            From the world's largest Solar Tree to heavy-duty institutional thermal systems and smart street lighting.
          </p>
        </div>
      </section>

      <Ticker theme="light" />

      <section className="section">
        <div className="container">
          <SectionHeading 
            eyebrow="ENGINEERED SYSTEMS"
            title="High-Efficiency Renewable Power & Thermal Technologies"
            subtitle="Every SolEnergi product is engineered to endure harsh climatic environments while guaranteeing superior weak-light performance and accelerated energy payback."
            center={true}
          />

          <div className="grid-3 products-grid" style={{ marginTop: '3rem' }}>
            {productsData.map((prod) => (
              <div key={prod.slug} className="product-card group">
                <div className="product-media">
                  <img src={prod.image} alt={prod.name} loading="lazy" />
                  <span className="product-tag-badge">{prod.tagline}</span>
                </div>

                <div className="product-body">
                  <h3 className="product-name">{prod.name}</h3>
                  <p className="product-desc">{prod.description}</p>

                  <div className="product-specs-list">
                    {prod.specs.slice(0, 3).map((spec, sIdx) => (
                      <div key={sIdx} className="product-spec-row">
                        <CheckCircle2 size={14} className="spec-check" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  <div className="product-footer-action">
                    <Link to={`/products/${prod.slug}`} className="btn btn-secondary" style={{ width: '100%' }}>
                      <span>View Specifications</span>
                      <ArrowRight size={14} />
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
