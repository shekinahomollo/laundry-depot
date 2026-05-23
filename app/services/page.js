import Link from "next/link";

const services = [
  {
    icon: "👕",
    title: "Wash & Fold",
    desc: "We wash, dry, and fold your everyday clothes with care.",
    price: "From KSh 150 / kg",
  },
  {
    icon: "👔",
    title: "Dry Cleaning",
    desc: "Expert dry cleaning for suits, dresses, and delicate fabrics.",
    price: "From KSh 500 / item",
  },
  {
    icon: "🧴",
    title: "Stain Removal",
    desc: "Stubborn stains? We use professional-grade treatments.",
    price: "From KSh 200 / item",
  },
  {
    icon: "🛏️",
    title: "Beddings & Linen",
    desc: "Duvets, sheets, pillowcases — fresh and clean every time.",
    price: "From KSh 300 / piece",
  },
  {
    icon: "⚡",
    title: "Express Service",
    desc: "Need it urgently? We offer same-day turnaround.",
    price: "From KSh 250 / kg",
  },
  {
    icon: "🚚",
    title: "Pickup & Delivery",
    desc: "Schedule a pickup and we deliver back to your door.",
    price: "From KSh 200 / trip",
  },
];

export default function Services() {
  return (
    <div className="space-y-16">

      {/* Header */}
      <section className="text-center py-12">
        <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-4 py-1 rounded-full mb-4 tracking-widest uppercase">
          What We Offer
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Our Services & Pricing
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Professional laundry services tailored to your needs.
          Transparent pricing, no hidden fees.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
          >
            <div className="text-4xl mb-4">{s.icon}</div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{s.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
            <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
              {s.price}
            </span>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="bg-blue-600 rounded-3xl px-8 py-14 text-center text-white">
        <h2 className="text-3xl font-extrabold mb-4">Not sure what you need?</h2>
        <p className="text-blue-100 mb-8">
          Contact us and we will figure out the best option for you.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors duration-200 shadow"
        >
          Get in Touch
        </Link>
      </section>

    </div>
  );
}