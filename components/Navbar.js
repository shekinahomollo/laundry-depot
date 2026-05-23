import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/Laundry_Depot_Logo.jpeg"
          alt="Laundry Depot Logo"
          width={56}
          height={56}
          className="object-contain"
        />
        <div className="leading-tight">
          <p className="text-lg font-extrabold text-gray-900 tracking-wide">LAUNDRY DEPOT</p>
          <p className="text-xs text-blue-600 font-medium">For your everyday laundry solutions</p>
        </div>
      </Link>
      <div className="flex gap-8 text-sm font-semibold text-gray-700">
        <Link href="/" className="hover:text-blue-600 transition-colors duration-200">Home</Link>
        <Link href="/services" className="hover:text-blue-600 transition-colors duration-200">Services</Link>
        <Link href="/contact" className="hover:text-blue-600 transition-colors duration-200">Contact</Link>
      </div>
    </nav>
  );
}