import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const sendContactMail = () => {
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const { name, email, subject, message } = formData;
    const finalSubject = subject || 'LHSR enquiry';
    const body = [`Name: ${name}`, `Email: ${email}`, '', message].filter(Boolean).join('\n');

    window.location.href = `mailto:srisharao@iisc.ac.in?subject=${encodeURIComponent(finalSubject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="page active" id="page-contact">
      <div className="page-header">
        <div className="page-header-meta">Contact</div>
        <h1>Get In Touch</h1>
        <p>Reach out for collaborations, admissions enquiries, or facility access.</p>
      </div>
      <div className="page-content">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-item-label">Location</div>
              <div className="contact-item-val">
                Laboratory for Hypersonic and Shock Wave Research
                <br />
                Department of Aerospace Engineering
                <br />
                Indian Institute of Science
                <br />
                Bengaluru – 560012, Karnataka, India
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-label">Email</div>
              <div className="contact-item-val">
                <div className="faculty-links">
                  <a
                    href="mailto:srisharao@iisc.ac.in"
                    className="faculty-link"
                    style={{ display: 'block', marginBottom: '8px' }}
                  >
                    Srisha Rao M V <span className="external">↗</span>
                  </a>
                  <a
                    href="mailto:jaggie@iisc.ac.in"
                    className="faculty-link"
                    style={{ display: 'block' }}
                  >
                    Gopalan Jagadeesh <span className="external">↗</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-label">Department</div>
              <div className="contact-item-val">
                <a href="https://aero.iisc.ac.in" target="_blank" rel="noopener noreferrer">
                  aero.iisc.ac.in ↗
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-label">How to reach us</div>
              <div
                className="contact-item-val"
                style={{ color: 'var(--muted)', fontSize: '1.05rem' }}
              >
                IISc is located in central Bengaluru. The Department of Aerospace Engineering is in
                the main campus. Visitors should contact us in advance to arrange campus access.
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            <div
              className="req-title"
              style={{
                marginBottom: '2.5rem',
                fontFamily: 'Syne, sans-serif',
                fontSize: '1.6rem',
                fontWeight: '700',
                color: '#0a2540',
              }}
            >
              Send a Message
            </div>

            {submitted && (
              <div
                style={{
                  padding: '1rem',
                  marginBottom: '1.5rem',
                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  borderRadius: '4px',
                  color: '#22c55e',
                  fontSize: '0.95rem',
                }}
              >
                ✓ Message sent! Your email client will open now.
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Your Name *</label>
              <input
                className="form-input"
                name="name"
                type="text"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                style={{
                  borderColor: errors.name ? '#ef4444' : 'inherit',
                }}
              />
              {errors.name && (
                <div
                  style={{
                    fontSize: '0.85rem',
                    color: '#ef4444',
                    marginTop: '0.25rem',
                  }}
                >
                  {errors.name}
                </div>
              )}
            </div>
            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <input
                className="form-input"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                style={{
                  borderColor: errors.email ? '#ef4444' : 'inherit',
                }}
              />
              {errors.email && (
                <div
                  style={{
                    fontSize: '0.85rem',
                    color: '#ef4444',
                    marginTop: '0.25rem',
                  }}
                >
                  {errors.email}
                </div>
              )}
            </div>
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                className="form-input"
                name="subject"
                type="text"
                placeholder="e.g. PhD Admission / Collaboration / Facility Access"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message *</label>
              <textarea
                className="form-textarea"
                name="message"
                placeholder="Describe your enquiry in detail..."
                value={formData.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                style={{
                  borderColor: errors.message ? '#ef4444' : 'inherit',
                }}
              ></textarea>
              {errors.message && (
                <div
                  style={{
                    fontSize: '0.85rem',
                    color: '#ef4444',
                    marginTop: '0.25rem',
                  }}
                >
                  {errors.message}
                </div>
              )}
            </div>
            <button
              className="btn-primary"
              style={{ width: '100%' }}
              onClick={sendContactMail}
              disabled={submitted}
              aria-label="Send contact form"
            >
              {submitted ? 'Message Sent...' : 'Send Message'}
            </button>
          </div>
        </div>

        <div className="map-section" style={{ marginTop: '1.5px' }}>
          <div className="map-wrap">
            <div className="contact-item-label" style={{ marginBottom: '1.5rem' }}>
              Location on Map
            </div>
            <iframe
              className="map-iframe"
              src="https://maps.google.com/maps?q=Laboratory+for+Hypersonic+and+Shock+Wave+Research+Department+of+Aerospace+Engineering,+Indian+Institute+of+Science,+Bengaluru&output=embed"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
