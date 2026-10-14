import React, { useState } from 'react';
import { Briefcase, MapPin, Phone, Mail, CheckCircle, ArrowRight, UserCheck, X } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { companyInfo } from '../data/company';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicant, setApplicant] = useState({ name: '', email: '', phone: '', note: '' });
  const [submitted, setSubmitted] = useState(false);

  const jobs = [
    {
      id: "sales-manager",
      title: "Manager Sales – Solar PV Power Project",
      department: "Commercial & Business Development",
      location: "New Delhi, India",
      phone: companyInfo.contact.phoneDisplay,
      email: companyInfo.contact.email,
      description: "Collate the estimates of existing regional market potentials for Rooftop and captive solar projects. Prepare sales revenue forecasts and implement strategic initiatives to achieve target profitability and market share. Align with corporate objectives and deliver on annual & quarterly sales plans.",
      requirements: [
        "Proven track record in commercial & industrial rooftop solar business development.",
        "In-depth understanding of state DISCOM net-metering regulations and PPA frameworks.",
        "Strong relationship with industrial estates, factory owners, and procurement heads.",
        "Excellent commercial negotiation and revenue forecasting acumen."
      ]
    },
    {
      id: "electrical-engineer",
      title: "Electrical Engineer – Solar EPC Projects",
      department: "Engineering & Technical Operations",
      location: "New Delhi, India",
      phone: companyInfo.contact.phoneDisplay,
      email: companyInfo.contact.email,
      description: "Candidate should possess a B.E. / B.Tech in Electrical Engineering. Must hold sound practical knowledge of solar power system design, BOS string sizing, SLDs, and solar machinery installation. Proficiency in AutoCAD and PVsyst required.",
      requirements: [
        "B.E. / B.Tech in Electrical Engineering from an accredited university.",
        "Hands-on proficiency in AutoCAD for Single Line Diagrams (SLD) and plant layout.",
        "Knowledge of HT/LT substation equipment, inverters, and earthing design.",
        "Prior field commissioning experience on commercial solar rooftops is preferred."
      ]
    }
  ];

  const handleApply = (e) => {
    e.preventDefault();
    if (!applicant.name || !applicant.email || !applicant.phone) {
      alert("Please fill in your name, email, and phone number.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="careers-page">
      <section className="subpage-hero">
        <div className="container">
          <span className="badge-eyebrow dark">JOIN OUR TEAM</span>
          <h1 className="subpage-hero-title">Careers at SolEnergi</h1>
          <p className="subpage-hero-sub">
            Shape India's renewable energy future alongside leading solar engineering specialists.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading 
            eyebrow="CURRENT OPENINGS"
            title="Grow Your Career in Advanced Solar Engineering"
            subtitle="Explore our verified opportunities at SolEnergi Research Private Limited headquarters in New Delhi."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2.5rem' }}>
            {jobs.map((job) => (
              <div 
                key={job.id} 
                className="service-card"
                style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary-orange)', fontWeight: 700 }}>
                      {job.department}
                    </span>
                    <h3 style={{ fontSize: '1.45rem', color: 'var(--color-dark-navy)', marginTop: '4px', marginBottom: '0.5rem' }}>
                      {job.title}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <MapPin size={15} style={{ color: 'var(--color-primary-orange)' }} /> {job.location}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Phone size={15} style={{ color: 'var(--color-primary-orange)' }} /> {job.phone}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Mail size={15} style={{ color: 'var(--color-primary-orange)' }} /> {job.email}
                      </span>
                    </div>
                  </div>

                  <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={() => { setSelectedJob(job); setSubmitted(false); }}
                  >
                    <span>Apply For Position</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-body)', lineHeight: 1.6, margin: 0 }}>
                  {job.description}
                </p>

                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--color-light-border)' }}>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--color-dark-navy)', marginBottom: '0.75rem' }}>
                    Key Qualifications & Role Requirements:
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.65rem' }}>
                    {job.requirements.map((req, rIdx) => (
                      <div key={rIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <CheckCircle size={15} style={{ color: 'var(--color-primary-orange)', marginTop: '3px', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.88rem', color: 'var(--color-text-body)' }}>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="lightbox-overlay" onClick={() => setSelectedJob(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '580px', width: '95%', backgroundColor: 'var(--color-white)', borderRadius: 'var(--border-radius-lg)', padding: '2.5rem', color: 'var(--color-dark-navy)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', width: '100%' }}>
              <div>
                <span className="badge-eyebrow">APPLICATION PORTAL</span>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--color-dark-navy)', margin: 0 }}>
                  {selectedJob.title}
                </h3>
              </div>
              <button 
                type="button" 
                onClick={() => setSelectedJob(null)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}
              >
                <X size={24} />
              </button>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#D1FAE5', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                  <UserCheck size={28} />
                </div>
                <h4 style={{ fontSize: '1.3rem', color: 'var(--color-dark-navy)', marginBottom: '0.5rem' }}>Application Submitted</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-body)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                  Thank you, <strong>{applicant.name}</strong>. Your application for <strong>{selectedJob.title}</strong> has been received. You can also send your resume directly to:
                </p>
                <a href={`mailto:${selectedJob.email}?subject=Job Application: ${encodeURIComponent(selectedJob.title)}`} className="btn btn-primary">
                  <Mail size={15} />
                  <span>Email Resume to {selectedJob.email}</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleApply} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    value={applicant.name} 
                    onChange={e => setApplicant({ ...applicant, name: e.target.value })}
                    className="form-input" 
                    placeholder="Your Full Name" 
                  />
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    value={applicant.email} 
                    onChange={e => setApplicant({ ...applicant, email: e.target.value })}
                    className="form-input" 
                    placeholder="your.email@example.com" 
                  />
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Contact Number *</label>
                  <input 
                    type="tel" 
                    required 
                    value={applicant.phone} 
                    onChange={e => setApplicant({ ...applicant, phone: e.target.value })}
                    className="form-input" 
                    placeholder="10-digit mobile number" 
                  />
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Cover Summary / Experience Highlights</label>
                  <textarea 
                    rows="3" 
                    value={applicant.note} 
                    onChange={e => setApplicant({ ...applicant, note: e.target.value })}
                    className="form-input form-textarea" 
                    placeholder="Years of experience, current location, educational background..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  <span>Submit Candidate Profile</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
