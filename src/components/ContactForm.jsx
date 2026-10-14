import React, { useState } from 'react';
import { Send, Phone, Mail, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/company';
import './ContactForm.css';

export default function ContactForm({ defaultSubject = "General Enquiry" }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: defaultSubject,
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Contact number is required";
    } else if (formData.phone.length < 10) {
      errs.phone = "Please enter a valid 10-digit mobile number";
    }
    if (!formData.message.trim()) {
      errs.message = "Please include details about your solar requirements";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);
    // Simulate frontend verification
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="contact-form-card">
      <div className="contact-form-header">
        <span className="badge-eyebrow">DIRECT CONSULTATION</span>
        <h3 className="form-title">Send Us a Technical Enquiry</h3>
        <p className="form-sub">Our certified solar engineers will inspect your parameters and prepare a customized ROI report.</p>
      </div>

      {submitted ? (
        <div className="form-success-banner" role="alert">
          <div className="success-icon-wrap">
            <CheckCircle size={32} />
          </div>
          <h4>Enquiry Received Successfully!</h4>
          <p>
            Thank you, <strong>{formData.name}</strong>. Your enquiry regarding <strong>{formData.subject}</strong> has been logged in this demonstration preview.
          </p>
          <div className="direct-reach-box">
            <span className="direct-title">For immediate priority dispatch, contact our central desk:</span>
            <div className="direct-reach-actions">
              <a href={`tel:${companyInfo.contact.phoneMain}`} className="btn btn-secondary">
                <Phone size={14} />
                <span>Call {companyInfo.contact.phoneDisplay}</span>
              </a>
              <a href={`mailto:${companyInfo.contact.email}?subject=${encodeURIComponent(formData.subject)}`} className="btn btn-primary">
                <Mail size={14} />
                <span>Email Engineering Desk</span>
              </a>
            </div>
          </div>
          <button 
            type="button" 
            className="btn-link-reset"
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', email: '', phone: '', subject: defaultSubject, message: '' });
            }}
          >
            Submit another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="form-body">
          {/* Note informing user that this is a frontend implementation */}
          <div className="form-notice-box">
            <Sparkles size={16} className="notice-icon" />
            <span>Frontend demo ready. Click submit to test client-side validation, or connect directly via phone and email.</span>
          </div>

          <div className="form-row">
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name *</label>
              <input 
                type="text" 
                id="name"
                name="name" 
                value={formData.name} 
                onChange={handleChange}
                placeholder="e.g. Rajesh Kumar" 
                className={`form-input ${errors.name ? 'input-error' : ''}`}
                aria-invalid={errors.name ? 'true' : 'false'}
              />
              {errors.name && (
                <span className="error-text" role="alert">
                  <AlertCircle size={12} /> {errors.name}
                </span>
              )}
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">Corporate / Personal Email *</label>
              <input 
                type="email" 
                id="email"
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                placeholder="name@organization.com" 
                className={`form-input ${errors.email ? 'input-error' : ''}`}
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && (
                <span className="error-text" role="alert">
                  <AlertCircle size={12} /> {errors.email}
                </span>
              )}
            </div>
          </div>

          <div className="form-row">
            {/* Phone Field */}
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Contact Phone Number *</label>
              <input 
                type="tel" 
                id="phone"
                name="phone" 
                value={formData.phone} 
                onChange={handleChange}
                placeholder="10-digit mobile or landline" 
                className={`form-input ${errors.phone ? 'input-error' : ''}`}
                aria-invalid={errors.phone ? 'true' : 'false'}
              />
              {errors.phone && (
                <span className="error-text" role="alert">
                  <AlertCircle size={12} /> {errors.phone}
                </span>
              )}
            </div>

            {/* Subject / Division Dropdown */}
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Area of Interest / Project Category *</label>
              <select 
                id="subject"
                name="subject" 
                value={formData.subject} 
                onChange={handleChange}
                className="form-input form-select"
              >
                <option value="Solar Rooftop (Commercial & Industrial)">Solar Rooftop (Commercial & Industrial)</option>
                <option value="Institutional Solar Solution">Institutional Solar Solution (Schools / Hospitals)</option>
                <option value="Solar Car Parking / Carport">Solar Car Parking / Carport</option>
                <option value="Utility-Scale Solar Farm">Utility-Scale Solar Farm (PPA / Group Captive)</option>
                <option value="Solar Tree (11 KWp)">SolEnergi Solar Tree (11 KWp)</option>
                <option value="Solar Water Heater (Bulk)">Solar Water Heater (Up to 25k LTR)</option>
                <option value="Solar Street Light & Pumps">Solar Street Light & Pumps</option>
                <option value="Dealership & Channel Partner">Dealership & Channel Partner Enquiry</option>
                <option value="General Corporate Enquiry">General Corporate Enquiry</option>
              </select>
            </div>
          </div>

          {/* Message Field */}
          <div className="form-group">
            <label htmlFor="message" className="form-label">Project Details / Roof Area / Monthly Power Bill *</label>
            <textarea 
              id="message"
              name="message" 
              rows="4" 
              value={formData.message} 
              onChange={handleChange}
              placeholder="Please describe your sanctioned load, roof or land dimensions, location, and power savings target..." 
              className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
              aria-invalid={errors.message ? 'true' : 'false'}
            ></textarea>
            {errors.message && (
              <span className="error-text" role="alert">
                <AlertCircle size={12} /> {errors.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="btn btn-primary form-submit-btn" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span>Verifying Details...</span>
            ) : (
              <>
                <span>Submit Technical Enquiry</span>
                <Send size={15} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
