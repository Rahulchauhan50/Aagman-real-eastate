import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 border-b border-brand-cream shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-heading font-bold text-2xl text-brand-dark tracking-wider uppercase">
              Aagman<span className="text-brand-gold">.</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-brand-dark hover:text-brand-gold text-sm font-medium transition-colors">Home</Link>
            <Link href="/about" className="text-brand-dark hover:text-brand-gold text-sm font-medium transition-colors">About Us</Link>
            <Link href="/services" className="text-brand-dark hover:text-brand-gold text-sm font-medium transition-colors">Our Services</Link>
            <Link href="/insights" className="text-brand-dark hover:text-brand-gold text-sm font-medium transition-colors">Insights</Link>
            <Link href="/contact" className="text-brand-dark hover:text-brand-gold text-sm font-medium transition-colors">Contact Us</Link>
            <Link href="/contact" className="bg-brand-gold text-white hover:bg-brand-darkDeep px-6 py-2 text-xs font-bold uppercase tracking-wider transition-colors ml-4">
              Partner With Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
