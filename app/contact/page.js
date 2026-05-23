"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1000);
  };

  const inputStyle = {
    width: '100%',
    backgroundColor: '#0D1B2A',
    border: '1px solid #1E3A5F',
    borderRadius: '8px',
    padding: '14px 16px',
    color: '#EAF0FB',
    fontFamily: 'Nunito, sans-serif',
    fontSize: '14px',
    outline: 'none',
  };

  const labelStyle = {
    display: 'block',
    fontFamily: 'Josefin Sans, sans-serif',
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#7A96B8',
    marginBottom: '8px',
  };

  return (
    <div>
      {/* Header */}
      <section style={{ textAlign: 'center', padding: '80px 24px 60px' }}>
        <p style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#E74C3C', marginBottom: '16px' }}>Get In Touch</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, color: '#EAF0FB', marginBottom: '20px' }}>Contact Us</h1>
        <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '16px', color: '#7A96B8', maxWidth: '520px', margin: '0 auto', lineHeight: 1.8 }}>
          Have a question or ready to book? Reach out and we will get back to you shortly.
        </p>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '100px' }}>
        {/* Form */}
        <div style={{ backgroundColor: '#112240', borderRadius: '20px', padding: '40px', border: '1px solid #1E3A5F' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', color: '#EAF0FB', marginBottom: '12px' }}>Message Sent!</h3>
              <p style={{ fontFamily: 'Nunito, sans-serif', color: '#7A96B8' }}>We will get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={labelStyle}>Full Name</label>
                <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Jane Doe" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Phone Number</label>
                <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="+254 700 000 000" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Email Address</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="jane@example.com" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Message</label>
                <textarea name="message" required value={form.message} onChange={handleChange} placeholder="Tell us what you need..." rows={4} style={{ ...inputStyle, resize: 'none' }} />
              </div>
              <button type="submit" disabled={loading} style={{ backgroundColor: '#C0392B', color: '#FFFFFF', fontFamily: 'Josefin Sans, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '16px', borderRadius: '8px', border: 'none', cursor: 'pointer', opacity: loading ? 0.6 : 1 }}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        {/* Info Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { icon: '📍', title: 'Our Location', info: '123 Clean Street, Nairobi, Kenya' },
            { icon: '📞', title: 'Phone', info: '+254 700 000 000' },
            { icon: '🕐', title: 'Working Hours', info: 'Mon – Sat: 7:00 AM – 8:00 PM\nSunday: 9:00 AM – 5:00 PM' },
            { icon: '📧', title: 'Email', info: 'hello@laundrydepot.co.ke' },
          ].map((item) => (
            <div key={item.title} style={{ backgroundColor: '#112240', borderRadius: '16px', padding: '24px 28px', border: '1px solid #1E3A5F', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <span style={{ fontSize: '28px' }}>{item.icon}</span>
              <div>
                <h3 style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#EAF0FB', marginBottom: '6px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '14px', color: '#7A96B8', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer style={{ textAlign: 'center', paddingBottom: '40px', borderTop: '1px solid #1E3A5F', paddingTop: '32px' }}>
        <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '13px', color: '#7A96B8' }}>
          © {new Date().getFullYear()} Laundry Depot. All rights reserved.
        </p>
      </footer>
    </div>
  );
}