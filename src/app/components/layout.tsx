import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="p-4 border-b flex justify-between items-center">
        <h1 className="text-xl font-semibold">
          <Link href="/">TB Weld & Repair</Link>
        </h1>
        <nav className="space-x-4">
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </header>

      <main className="p-6 max-w-4xl mx-auto">{children}</main>

      <footer className="p-4 text-center text-sm text-gray-500 border-t mt-12">
        &copy; {new Date().getFullYear()} TB Weld & Repair. All rights reserved.
      </footer>
    </>
  );
}
