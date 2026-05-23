import Link from "next/link";

const features = [
  { icon: "👕", title: "Wash & Fold", desc: "Fresh, neatly folded clothes returned to you same day." },
  { icon: "👔", title: "Dry Cleaning", desc: "Expert care for your delicate and formal garments." },
  { icon: "🚚", title: "Pickup & Delivery", desc: "We come to you — schedule at your convenience." },
  { icon: "⚡", title: "Express Service", desc: "Need it fast? We offer same-day turnaround." },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden', borderRadius: '0 0 32px 32px', marginBottom: '100px' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.2)', borderRadius: '0 0 32px 32px' }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '0 24px', maxWidth: '780px' }}>
          <p style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#E74C3C', marginBottom: '24px' }}>Professional Laundry Services · Nairobi</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(48px, 7vw, 90px)', fontWeight: 700, color: '#EAF0FB', lineHeight: 1.05, marginBottom: '28px' }}>
            Clean Clothes,<br />
            <span style={{ color: '#E74C3C', fontStyle: 'italic' }}>Zero Hassle.</span>
          </h1>
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '17px', color: '#7A96B8', lineHeight: 1.8, marginBottom: '52px', fontWeight: 300 }}>
            Laundry Depot delivers fresh, professionally cleaned clothes right to your door. Trusted by hundreds of happy customers every day.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ backgroundColor: '#C0392B', color: '#FFFFFF', fontFamily: 'Josefin Sans, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '16px 36px', borderRadius: '4px', textDecoration: 'none' }}>Book a Pickup</Link>
            <Link href="/services" style={{ backgroundColor: 'transparent', color: '#EAF0FB', fontFamily: 'Josefin Sans, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '16px 36px', borderRadius: '4px', border: '1px solid #1E3A5F', textDecoration: 'none' }}>View Services</Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ marginBottom: '100px' }}>
        <p style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E74C3C', textAlign: 'center', marginBottom: '12px' }}>Why Choose Us</p>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 600, color: '#EAF0FB', textAlign: 'center', marginBottom: '52px' }}>The Laundry Depot Difference</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
          {features.map((f) => (
            <div key={f.title} style={{ backgroundColor: '#112240', borderRadius: '16px', padding: '36px 28px', border: '1px solid #1E3A5F', textAlign: 'center' }}>
              <div style={{ fontSize: '36px', marginBottom: '16px' }}>{f.icon}</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 600, color: '#EAF0FB', marginBottom: '10px' }}>{f.title}</h3>
              <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '14px', color: '#7A96B8', lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', minHeight: '340px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginBottom: '80px' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=1600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.15)' }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '48px 24px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 600, color: '#EAF0FB', marginBottom: '16px' }}>Ready for Fresh Laundry?</h2>
          <p style={{ fontFamily: 'Nunito, sans-serif', color: '#7A96B8', marginBottom: '36px', fontSize: '16px' }}>Get in touch today and let us handle the hard work.</p>
          <Link href="/contact" style={{ backgroundColor: '#C0392B', color: '#FFFFFF', fontFamily: 'Josefin Sans, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '16px 36px', borderRadius: '4px', textDecoration: 'none' }}>Contact Us Now</Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', paddingBottom: '40px', borderTop: '1px solid #1E3A5F', paddingTop: '32px' }}>
        <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '13px', color: '#7A96B8' }}>
          © {new Date().getFullYear()} Laundry Depot. All rights reserved.
        </p>
      </footer>
    </div>
  );
}