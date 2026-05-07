import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark to-brand-darkDeep text-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.15)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.1)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6">
              The Future of Real Estate, <span className="text-brand-gold">Integrated.</span>
            </h1>
            <div className="w-20 h-[2px] bg-brand-gold mb-8"></div>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl leading-relaxed">
              From strategic advisory to precision construction, Aagman Realty Ventures LLP delivers end-to-end solutions for the modern corporate and retail landscape.
            </p>
            <div className="flex flex-wrap gap-4 mb-16">
              <Link href="/contact" className="bg-brand-gold text-brand-dark font-semibold px-8 py-4 uppercase tracking-wider text-sm hover:bg-brand-goldLight transition-colors">
                Partner With Us
              </Link>
              <Link href="/services" className="border border-brand-gold text-brand-gold font-semibold px-8 py-4 uppercase tracking-wider text-sm hover:bg-brand-gold hover:text-brand-dark transition-colors">
                Explore Services
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              <span className="bg-white/5 border border-brand-gold/30 px-4 py-2 text-xs text-brand-gold tracking-widest uppercase">Delhi-NCR</span>
              <span className="bg-white/5 border border-brand-gold/30 px-4 py-2 text-xs text-brand-gold tracking-widest uppercase">Founder-Led</span>
              <span className="bg-white/5 border border-brand-gold/30 px-4 py-2 text-xs text-brand-gold tracking-widest uppercase">LLP Incorporated</span>
              <span className="bg-white/5 border border-brand-gold/30 px-4 py-2 text-xs text-brand-gold tracking-widest uppercase">Uttar Pradesh, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Aagman Preview */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader 
              label="About Us" 
              title="Arrival. Vision." 
              highlightedText="Excellence."
            />
            <p className="text-gray-700 leading-relaxed mb-6">
              Aagman Realty Ventures LLP was born out of a simple necessity: the need for a unified approach to real estate. In an industry often fragmented by multiple vendors and misaligned goals, Aagman serves as a single-point collaborator for businesses that value time, efficiency, and fiscal intelligence.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              "Aagman" signifies the advent of a new standard. We don't just find spaces; we build, optimize, and sustain them.
            </p>
            <Link href="/about" className="text-brand-gold font-bold uppercase tracking-widest text-sm hover:text-brand-dark transition-colors flex items-center gap-2">
              Read Our Story <span className="text-xl">→</span>
            </Link>
          </div>
          <div className="bg-brand-pale p-12 border-l-4 border-brand-gold shadow-sm">
            <div className="text-4xl text-brand-gold mb-6 font-serif">"</div>
            <p className="font-heading text-2xl text-brand-dark italic mb-6 leading-relaxed">
              When I founded Aagman, I did so to eliminate the 'fragmentation gap.' Usually, a company talks to a broker to find a space, an architect to design it, and a contractor to build it. At Aagman, we consolidate these functions to ensure your vision and budget stay aligned from Day 1.
            </p>
            <p className="text-brand-grey font-bold uppercase tracking-widest text-sm">
            </p>
          </div>
        </div>
      </section>

      {/* Core Service Preview */}
      <section className="py-24 bg-brand-cream px-4 sm:px-6 lg:px-8 border-y border-brand-gold/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            label="Our 360° Service Ecosystem" 
            title="We bridge the gap between real estate strategy and" 
            highlightedText="physical execution"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Service 1 */}
            <div className="bg-white p-8 border-t-4 border-brand-gold hover:-translate-y-2 transition-transform shadow-sm">
              <div className="text-brand-goldLight opacity-50 font-heading text-4xl font-bold mb-4">01</div>
              <h3 className="font-semibold text-lg mb-2 text-brand-dark">Corporate Leasing & Consulting</h3>
            </div>
            {/* Service 2 */}
            <div className="bg-white p-8 border-t-4 border-brand-gold hover:-translate-y-2 transition-transform shadow-sm">
              <div className="text-brand-goldLight opacity-50 font-heading text-4xl font-bold mb-4">02</div>
              <h3 className="font-semibold text-lg mb-2 text-brand-dark">Real Estate Advisory</h3>
            </div>
            {/* Service 3 */}
            <div className="bg-white p-8 border-t-4 border-brand-gold hover:-translate-y-2 transition-transform shadow-sm">
              <div className="text-brand-goldLight opacity-50 font-heading text-4xl font-bold mb-4">03</div>
              <h3 className="font-semibold text-lg mb-2 text-brand-dark">Cost Optimization Consulting</h3>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="inline-block border border-brand-dark text-brand-dark font-medium px-8 py-3 uppercase tracking-wider text-sm hover:bg-brand-dark hover:text-white transition-colors">
              View All 6 Pillars
            </Link>
          </div>
        </div>
      </section>

      {/* The Aagman Advantage Preview */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            label="The Aagman Advantage" 
            title="Why Choose a" 
            highlightedText="Full-Stack Partner?"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-brand-pale p-10 text-center shadow-sm hover:-translate-y-1 transition-transform border-b-2 border-brand-gold">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="font-bold text-lg mb-3">Reduced Friction</h3>
              <p className="text-gray-600 text-sm">One point of contact from the lease signing to the first day of operations.</p>
            </div>
            <div className="bg-brand-pale p-10 text-center shadow-sm hover:-translate-y-1 transition-transform border-b-2 border-brand-gold">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="font-bold text-lg mb-3">Cost Efficiency</h3>
              <p className="text-gray-600 text-sm">Integrated services eliminate vendor markups and "lost in translation" errors.</p>
            </div>
            <div className="bg-brand-pale p-10 text-center shadow-sm hover:-translate-y-1 transition-transform border-b-2 border-brand-gold">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-bold text-lg mb-3">Founder-Led Accountability</h3>
              <p className="text-gray-600 text-sm">Direct access to leadership ensures your project is treated with the urgency it deserves.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        heading="Ready to start your next venture? Let's discuss how Aagman can optimize your real estate portfolio." 
        buttonText="Partner With Us" 
      />
    </div>
  );
}
