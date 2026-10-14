import React from 'react';
import { FileText, Download, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function Documents() {
  const documents = [
    {
      title: "SolEnergi Corporate Profile & Credentials Brochure",
      type: "PDF Document",
      size: "3.4 MB",
      desc: "Complete overview of SolEnergi Research Pvt. Ltd., DIPP credentials, PAN India portfolio, and EPC solutions."
    },
    {
      title: "DIPP Recognition Certificate (Govt. of India)",
      type: "Official Certification",
      size: "1.2 MB",
      desc: "Startup recognition letter from Department for Promotion of Industry and Internal Trade, Ministry of Commerce & Industry."
    },
    {
      title: "Commercial & Industrial Rooftop Solar Technical Datasheet",
      type: "Technical Specification",
      size: "2.8 MB",
      desc: "Engineering specifications, inverter matching charts, net metering guidelines, and IT Section 32 tax guide."
    },
    {
      title: "SolEnergi 11 KWp Solar Tree Technical Whitepaper",
      type: "Engineering Paper",
      size: "4.1 MB",
      desc: "Architectural blueprint and power output characteristics of the world's largest solar tree engineered for MOIL Limited."
    },
    {
      title: "Institutional Solar Power Hedging (₹3.5–5/unit) Model",
      type: "Financial Model",
      size: "1.9 MB",
      desc: "Payback amortization and tariff stabilization roadmap for educational institutions, universities, and healthcare facilities."
    },
    {
      title: "SolEnergi Health, Safety & Environment (HSE) Policy",
      type: "Corporate Policy",
      size: "1.5 MB",
      desc: "Zero-compromise safety protocols, high-altitude rooftop installation safety standards, and environmental protocols."
    }
  ];

  const handleDownload = (title) => {
    // Client-side simulation of brochure download
    alert(`Downloading "${title}"... Please contact sales@solenergi.in for custom engineering drawings.`);
  };

  return (
    <div className="documents-page">
      <section className="subpage-hero">
        <div className="container">
          <span className="badge-eyebrow dark">RESOURCE CENTER</span>
          <h1 className="subpage-hero-title">Company Documents & Downloads</h1>
          <p className="subpage-hero-sub">
            Access technical datasheets, DIPP certifications, engineering whitepapers, and corporate brochures.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading 
            eyebrow="VERIFIED DOCUMENTATION"
            title="Official Technical Papers & Certifications"
            subtitle="Transparent access to statutory approvals, engineering guidelines, and financial depreciation schedules."
          />

          <div className="grid-2" style={{ marginTop: '2.5rem' }}>
            {documents.map((doc, idx) => (
              <div 
                key={idx}
                className="service-card"
                style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'var(--color-primary-orange-light)', color: 'var(--color-primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <FileText size={20} />
                    </div>
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-muted)', fontWeight: 700 }}>
                      {doc.type}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                    {doc.size}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-dark-navy)', lineHeight: 1.35, margin: 0 }}>
                  {doc.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-body)', lineHeight: 1.5, margin: 0, flexGrow: 1 }}>
                  {doc.desc}
                </p>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--color-light-border)' }}>
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => handleDownload(doc.title)}
                    style={{ width: '100%', fontSize: '0.88rem', padding: '0.65rem' }}
                  >
                    <Download size={14} />
                    <span>Download Document</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
