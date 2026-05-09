import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: "About Aagman Realty Ventures LLP",
  description: "Learn about Aagman Realty Ventures LLP, a diversified real estate and infrastructure firm headquartered in Uttar Pradesh, India.",
};

export default function About() {
  return (
    // main
    <div className="bg-brand-cream">
      {/* Hero Section */}
      <section className="bg-brand-darkDeep text-white py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-gold">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            About Aagman
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
            Arrival. Vision. <span className="text-brand-gold">Excellence.</span>
          </h1>
        </div>
      </section>

      {/* About Content & Who We Are */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div>
              <div className="prose prose-lg text-gray-700 space-y-6">
                <p>
                  Aagman Realty Ventures LLP was born out of a simple necessity: the need for a unified approach to real estate. In an industry often fragmented by multiple vendors and misaligned goals, Aagman serves as a single-point collaborator for businesses that value time, efficiency, and fiscal intelligence.
                </p>
                <p>
                  "Aagman" signifies the advent of a new standard. We don't just find spaces; we build, optimize, and sustain them.
                </p>
              </div>
            </div>

            {/* Right: Premium Card / Founder Letter */}
            <div className="bg-white p-10 border-l-4 border-brand-gold shadow-md relative">
              <div className="text-6xl text-brand-gold/30 font-serif absolute top-6 left-6 leading-none">"</div>
              <div className="relative z-10 pt-4">
                <p className="font-heading text-xl text-brand-dark italic mb-8 leading-relaxed">
                  When I founded Aagman, I did so to eliminate the 'fragmentation gap.' Usually, a company talks to a broker to find a space, an architect to design it, and a contractor to build it. At Aagman, we consolidate these functions to ensure your vision and budget stay aligned from Day 1. We don’t just find spaces; we build and optimize them.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-brand-gold"></div>
                  <div>
                    <p className="font-bold text-brand-dark uppercase tracking-wider text-sm"></p>
                    <p className="text-gray-500 text-sm">Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-brand-pale p-12 border-t-4 border-brand-gold shadow-sm hover:shadow-md transition-shadow">
              <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                The Vision
              </span>
              <h3 className="font-heading text-3xl font-semibold text-brand-dark mb-6">Our Long-Term "Why"</h3>
              <p className="text-gray-700 leading-relaxed italic mb-4">
                "To redefine the global real estate landscape by becoming the most trusted, vertically integrated partner for businesses—where every space we touch is a perfect harmony of fiscal intelligence, architectural excellence, and operational sustainability."
              </p>
              <p className="text-brand-dark font-semibold">
                In short: To be the gold standard for "Concept-to-Completion" real estate in India.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-brand-pale p-12 border-t-4 border-brand-gold shadow-sm hover:shadow-md transition-shadow">
              <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                The Mission
              </span>
              <h3 className="font-heading text-3xl font-semibold text-brand-dark mb-6">Our Daily "How"</h3>
              <p className="text-gray-700 leading-relaxed italic">
                "Our mission is to eliminate the fragmentation in real estate by consolidating advisory, leasing, construction, and maintenance into a single, seamless ecosystem. We are committed to optimizing our clients' capital, engineering high-impact environments, and providing founder-led accountability that ensures every project is delivered with precision and transparency."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            label="What Guides Us" 
            title="Our Core" 
            highlightedText="Values"
            align="center"
          />
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">Defining the standard of integrated real estate.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-l-2 border-brand-gold shadow-sm hover:-translate-y-1 transition-transform">
              <h4 className="font-heading text-2xl font-semibold text-brand-dark mb-3">Radical Integration</h4>
              <p className="text-gray-600 text-sm leading-relaxed">We believe that leasing, construction, and maintenance are not separate industries, but one continuous lifecycle. By housing all six verticals under one roof, we eliminate vendor silos and ensure a seamless transition from a site visit to a fully operational facility.</p>
            </div>
            <div className="bg-white p-8 border-l-2 border-brand-gold shadow-sm hover:-translate-y-1 transition-transform">
              <h4 className="font-heading text-2xl font-semibold text-brand-dark mb-3">Data-Driven Optimization</h4>
              <p className="text-gray-600 text-sm leading-relaxed">We don't rely on "gut feelings." Whether it is cost-benefit analysis for a new lease or energy-efficient materials for a fitout, every recommendation we make is backed by a commitment to optimizing your bottom line.</p>
            </div>
            <div className="bg-white p-8 border-l-2 border-brand-gold shadow-sm hover:-translate-y-1 transition-transform">
              <h4 className="font-heading text-2xl font-semibold text-brand-dark mb-3">Precision Execution</h4>
              <p className="text-gray-600 text-sm leading-relaxed">In construction and interiors, "good enough" is never enough. We uphold rigorous standards of engineering and design, ensuring that every square foot we build or maintain reflects the premium quality of the brands we represent.</p>
            </div>
            <div className="bg-white p-8 border-l-2 border-brand-gold shadow-sm hover:-translate-y-1 transition-transform">
              <h4 className="font-heading text-2xl font-semibold text-brand-dark mb-3">Adaptive Advisory</h4>
              <p className="text-gray-600 text-sm leading-relaxed">The Delhi-NCR market is ever-evolving. We stay ahead of regulatory shifts (like RERA) and market trends to provide advisory services that are proactive, not reactive, protecting your investments in a changing landscape.</p>
            </div>
            <div className="bg-white p-8 border-l-2 border-brand-gold shadow-sm hover:-translate-y-1 transition-transform md:col-span-2 lg:col-span-1 lg:col-start-2">
              <h4 className="font-heading text-2xl font-semibold text-brand-dark mb-3">Accountability as a Partnership</h4>
              <p className="text-gray-600 text-sm leading-relaxed">As an LLP, we view our clients as partners. Our "Founder-Led" approach means you have direct access to leadership, ensuring transparency in billing, timelines, and project delivery.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
