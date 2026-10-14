import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { Search, MapPin, Phone, Building, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function DealerLocator() {
  const [searchTerm, setSearchTerm] = useState('');

  const networkHubs = [
    { state: "Delhi NCR", city: "New Delhi (HQ)", address: "Plot No – 185, FIE, Patparganj Industrial Area, Delhi – 110092", contact: "011-45402520", status: "Active Regional Depot" },
    { state: "Maharashtra", city: "Navi Mumbai", address: "204, Garima Appartment, Sector – 20, Belapur, Navi Mumbai – 400614", contact: "011-45402520", status: "Active West Hub" },
    { state: "Ladakh", city: "Leh", address: "Raku Complex, 2nd Floor, Fort Road, Room No. 3, Leh – 194101", contact: "01982-251551", status: "High-Altitude Regional Center" },
    { state: "Bihar", city: "Muzaffarpur", address: "1st Floor, Jubba Sahani Park, Club Road, Muzaffarpur – 842001", contact: "011-45402520", status: "Active East Hub" },
    { state: "Uttar Pradesh", city: "Greater Noida & Lucknow", address: "Industrial Zone Alpha-1 / Transport Nagar", contact: "011-45402520", status: "EPC Authorized Network" },
    { state: "Gujarat", city: "Ahmedabad & Surat", address: "GIDC Industrial Logistics Center", contact: "011-45402520", status: "Component Distribution Hub" },
    { state: "Andhra Pradesh", city: "Vijayawada", address: "Near GAIL Transmission Station", contact: "011-45402520", status: "Industrial Project Station" }
  ];

  const filteredHubs = networkHubs.filter(hub => 
    hub.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hub.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hub.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dealer-page">
      <section className="subpage-hero">
        <div className="container">
          <span className="badge-eyebrow dark">PAN INDIA NETWORK</span>
          <h1 className="subpage-hero-title">Dealer & Service Network Locator</h1>
          <p className="subpage-hero-sub">
            Locate authorized SolEnergi depots, authorized EPC partners, and service centers across 20+ states in India.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Search Box */}
          <div style={{ maxWidth: '640px', margin: '0 auto 3.5rem auto' }}>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Search size={20} style={{ position: 'absolute', left: '1.25rem', color: 'var(--color-primary-orange)' }} />
              <input 
                type="text" 
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search by state or city (e.g. Delhi, Mumbai, Bihar, Gujarat)..." 
                className="form-input"
                style={{ paddingLeft: '3.25rem', paddingRight: '1.5rem', height: '56px', fontSize: '1.05rem', borderRadius: 'var(--border-radius-pill)', boxShadow: 'var(--shadow-sm)' }}
              />
            </div>
          </div>

          <SectionHeading 
            eyebrow="DISTRIBUTION CENTERS"
            title="Active State Depots & Field Service Points"
            center={true}
          />

          <div className="grid-3" style={{ marginTop: '2.5rem' }}>
            {filteredHubs.map((hub, idx) => (
              <div key={idx} className="service-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary-orange)', fontWeight: 700 }}>
                    {hub.state}
                  </span>
                  <span style={{ fontSize: '0.72rem', backgroundColor: 'var(--color-solar-blue-soft)', color: 'var(--color-solar-blue)', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>
                    {hub.status}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.2rem', color: 'var(--color-dark-navy)', marginBottom: '0.5rem' }}>
                  {hub.city}
                </h4>

                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-body)', lineHeight: 1.5, marginBottom: '1.25rem', flexGrow: 1 }}>
                  {hub.address}
                </p>

                <div style={{ borderTop: '1px solid var(--color-light-border)', paddingTop: '0.85rem' }}>
                  <a href={`tel:${hub.contact.replace(/\s+/g, '')}`} style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-dark-navy)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Phone size={14} style={{ color: 'var(--color-primary-orange)' }} /> {hub.contact}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply to become a dealer */}
      <section className="section section-light">
        <div className="container">
          <div className="consultation-grid">
            <div>
              <SectionHeading 
                eyebrow="GROW WITH US"
                title="Become an Authorized SolEnergi Channel Partner"
                subtitle="Join our expanding nationwide dealer network to distribute Tier-1 solar EPC systems, solar trees, and solar water heaters with complete technical backing."
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary-orange)' }} />
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-dark-navy)' }}>Direct factory-level component supply & pricing</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary-orange)' }} />
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-dark-navy)' }}>Technical engineering design & CEIG drawing assistance</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary-orange)' }} />
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-dark-navy)' }}>Co-branded marketing & leads dispatch</span>
                </div>
              </div>
            </div>

            <div>
              <ContactForm defaultSubject="Dealership & Channel Partner" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
