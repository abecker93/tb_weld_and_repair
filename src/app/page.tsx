// src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
      <section className="text-center space-y-6 mt-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Welding & Repair Services That Come to You
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Serving Central Vermont with mobile welding, mechanical repair, and equipment pickup. We fix what others replace.
        </p>
        <Link href="/services">
          <button className="px-6 py-3 bg-black text-white rounded-2xl shadow hover:bg-gray-800 transition">
            View Our Services
          </button>
        </Link>
      </section>

      <section className="mt-24 text-center text-sm text-gray-500">
        Not sure what you need? <Link href="/contact" className="underline hover:text-black">Get in touch</Link>.
      </section>
  );
}

