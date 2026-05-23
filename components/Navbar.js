import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#0D1B2A',
      borderBottom: '1px solid #1E3A5F',
      padding: '14px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
        <Image
          src="/Laundry_Depot_Logo.jpeg"
          alt="Laundry Depot Logo"
          width={52}
          height={52}
          style={{ objectFit: 'contain', borderRadius: '8px' }}
        />
        <div style={{ lineHeight: 1.2 }}>
          <p style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: '17px', fontWeight: 600, color: '#EAF0FB', margin: 0, letterSpacing: '0.12em' }}>LAUNDRY DEPOT</p>
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '11px', color: '#E74C3C', fontWeight: 400, margin: 0 }}>For your everyday laundry solutions</p>
        </div>
      </Link>
      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        {[['/', 'Home'], ['/services', 'Services'], ['/contact', 'Contact']].map(([href, label]) => (
          <Link key={href} href={href} style={{
            fontFamily: 'Josefin Sans, sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            color: '#EAF0FB',
            textDecoration: 'none',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>
            {label}
          </Link>
        ))}
        <Link href="/contact" style={{
          fontFamily: 'Josefin Sans, sans-serif',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          backgroundColor: '#C0392B',
          color: '#FFFFFF',
          padding: '10px 22px',
          borderRadius: '4px',
          textDecoration: 'none',
        }}>Book Now</Link>
      </div>
    </nav>
  );
}