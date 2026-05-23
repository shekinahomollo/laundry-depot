import Link from "next/link";

const services = [
  { icon: "👕", title: "Wash & Fold", desc: "We wash, dry, and fold your everyday clothes with care.", price: "From KSh 150 / kg" },
  { icon: "👔", title: "Dry Cleaning", desc: "Expert dry cleaning for suits, dresses, and delicate fabrics.", price: "From KSh 500 / item" },
  { icon: "🧴", title: "Stain Removal", desc: "Stubborn stains? We use professional-grade treatments.", price: "From KSh 200 / item" },
  { icon: "🛏️", title: "Beddings & Linen", desc: "Duvets, sheets, pillowcases — fresh and clean every time.", price: "From KSh 300 / piece" },
  { icon: "⚡", title: "Express Service", desc: "Need it urgently? We offer same-day turnaround.", price: "From KSh 250 / kg" },
  { icon: "🚚", title: "Pickup & Delivery", desc: "Schedule a pickup and we deliver back to your door.", price: "From KSh 200 / trip" },
];

export default function Services() {
  return (
    <div>
      {/* Header */}
      <section style={{ textAlign: 'center', padding: '80px 24px 60px' }}>
        <p style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#E74C3C', marginBottom: '16px' }}>What We Offer</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, color: '#EAF0FB', marginBottom: '20px' }}>Our Services & Pricing</h1>
        <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '16px', color: '#7A96B8', maxWidth: '520px', margin: '0 auto', lineHeight: 1.8 }}>
          Professional laundry services tailored to your needs. Transparent pricing, no hidden fees.
        </p>
      </section>

      {/* Services Grid */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '100px' }}>
        {services.map((s) => (
          <div key={s.title} style={{ backgroundColor: '#112240', borderRadius: '16px', padding: '36px 28px', border: '1px solid #1E3A5F' }}>
            <div style={{ fontSize: '36px', marginBottom: '16px' }}>{s.icon}</div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 600, color: '#EAF0FB', marginBottom: '10px' }}>{s.title}</h3>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '14px', color: '#7A96B8', lineHeight: 1.7, marginBottom: '20px' }}>{s.desc}</p>
            <span style={{ display: 'inline-block', backgroundColor: '#0D1B2A', border: '1px solid #C0392B', color: '#E74C3C', fontFamily: 'Josefin Sans, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', padding: '6px 14px', borderRadius: '4px' }}>{s.price}</span>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginBottom: '80px' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.15)' }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '48px 24px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 600, color: '#EAF0FB', marginBottom: '16px' }}>Not sure what you need?</h2>
          <p style={{ fontFamily: 'Nunito, sans-serif', color: '#7A96B8', marginBottom: '36px', fontSize: '16px' }}>Contact us and we will figure out the best option for you.</p>
          <Link href="/contact" style={{ backgroundColor: '#C0392B', color: '#FFFFFF', fontFamily: 'Josefin Sans, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '16px 36px', borderRadius: '4px', textDecoration: 'none' }}>Get in Touch</Link>
        </div>
      </section>

      <footer style={{ textAlign: 'center', paddingBottom: '40px', borderTop: '1px solid #1E3A5F', paddingTop: '32px' }}>
        <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '13px', color: '#7A96B8' }}>
          © {new Date().getFullYear()} Laundry Depot. All rights reserved.
        </p>
      </footer>
    </div>
  );
}