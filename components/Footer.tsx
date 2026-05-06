import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-darkDeep text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-heading text-2xl text-brand-gold mb-4">Aagman Realty Ventures LLP</h3>
            <p className="text-sm text-gray-400 mb-6 font-medium italic">Building Trust, Delivering Excellence</p>
            <p className="text-sm text-gray-400 max-w-sm">
              Registered in Uttar Pradesh, India
            </p>
          </div>
          <div className="md:text-right">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-goldLight mb-4">Statutory Info</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><span className="text-brand-gold">GST:</span> 09ACNFA8318A1ZG</li>
              <li><span className="text-brand-gold">PAN:</span> ACNFA8318A</li>
              <li><span className="text-brand-gold">MSME:</span> UDYAM-UP-28-0211325</li>
              <li><span className="text-brand-gold">TAN:</span> MRTA29789E</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-mid mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Aagman Realty Ventures LLP. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
