import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-darkDeep text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="font-heading text-2xl text-brand-gold mb-4">Aagman Realty Ventures LLP</h3>
            <p className="text-sm text-gray-400 mb-6 font-medium italic">Building Trust, Delivering Excellence</p>
            <p className="text-sm text-gray-400 max-w-sm">
              Registered in Uttar Pradesh, India
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-goldLight mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link href="/insights" className="hover:text-brand-gold transition-colors">Insights</Link></li>
              <li><Link href="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-goldLight mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services" className="hover:text-brand-gold transition-colors">Our Services</Link></li>
              <li><Link href="/why-choose-us" className="hover:text-brand-gold transition-colors">Why Choose Us</Link></li>
              <li><Link href="/capability-statement" className="hover:text-brand-gold transition-colors">Capability Statement</Link></li>
              <li><Link href="/credentials" className="hover:text-brand-gold transition-colors">Credentials</Link></li>
            </ul>
          </div>

          {/* <div className="lg:text-right">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-goldLight mb-4">Statutory Info</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><span className="text-brand-gold">GST:</span> 09ACNFA8318A1ZG</li>
              <li><span className="text-brand-gold">PAN:</span> ACNFA8318A</li>
              <li><span className="text-brand-gold">MSME:</span> UDYAM-UP-28-0211325</li>
              <li><span className="text-brand-gold">TAN:</span> MRTA29789E</li>
            </ul>
          </div> */}
        </div>
        <div className="border-t border-brand-mid mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Aagman Realty Ventures LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
