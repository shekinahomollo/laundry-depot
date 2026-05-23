import Link from "next/link";

const features = [
  { icon: "👕", title: "Wash & Fold", desc: "Fresh, neatly folded clothes returned to you same day." },
  { icon: "👔", title: "Dry Cleaning", desc: "Expert care for your delicate and formal garments." },
  { icon: "🚚", title: "Pickup & Delivery", desc: "We come to you — schedule at your convenience." },
  { icon: "⚡", title: "Express Service", desc: "Need it fast? We offer same-day turnaround." },
];

export default function Home() {
  return (
    <div className="space-y-24">

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-4 py-1 rounded-full mb-4 tracking-widest uppercase">
          Professional Laundry Services
        </span>
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Clean Clothes, <br />
          <span className="text-blue-600">Zero Hassle.</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10">
          Laundry Depot delivers fresh, professionally cleaned clothes right to your door.
          Trusted by hundreds of happy customers every day.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 shadow-md"
          >
            Book a Pickup
          </Link>
          <Link
            href="/services"
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-full transition-colors duration-200"
          >
            View Services
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 text-center"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blue-600 rounded-3xl px-8 py-16 text-center text-white mx-4">
        <h2 className="text-3xl font-extrabold mb-4">Ready for Fresh Laundry?</h2>
        <p className="text-blue-100 mb-8 text-lg">
          Get in touch today and let us handle the hard work.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors duration-200 shadow"
        >
          Contact Us Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm pb-8">
        © {new Date().getFullYear()} Laundry Depot. All rights reserved.
      </footer>

    </div>
  );
}