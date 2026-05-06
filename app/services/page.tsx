import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: "Services | Aagman Realty Ventures LLP",
  description: "Explore Aagman's 360° Service Ecosystem including leasing, advisory, cost optimization, construction, retail fitout, and maintenance.",
};

const services = [
  {
    num: "01",
    title: "Corporate Leasing & Consulting",
    description: "Navigate the Delhi-NCR commercial market with data-backed insights. We assist in tenant representation, site selection, and lease negotiations to ensure your workspace aligns with your growth trajectory."
  },
  {
    num: "02",
    title: "Real Estate Advisory",
    description: "Strategic foresight for investors and occupiers. Whether it's portfolio diversification or market entry strategies, our advisory services turn real estate into a competitive advantage."
  },
  {
    num: "03",
    title: "Consulting on Cost Optimization",
    description: "Real estate is often a company's second-largest expense. We conduct deep-dive audits to streamline occupancy costs, reduce \"dead space,\" and improve your bottom line without compromising on quality."
  },
  {
    num: "04",
    title: "Building Construction",
    description: "From ground-up developments to structural expansions, our construction arm focuses on engineering integrity, timely delivery, and sustainable building practices."
  },
  {
    num: "05",
    title: "Retail Interior & Fitout",
    description: "First impressions are everything. We design and execute high-impact retail environments that enhance brand identity and optimize customer flow, delivered through a seamless \"plug-and-play\" model."
  },
  {
    num: "06",
    title: "Repair & Maintenance",
    description: "Assets require evolution, not just upkeep. Our comprehensive maintenance programs ensure your facilities remain at peak performance, preserving value and ensuring operational continuity."
  }
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-brand-darkDeep text-white py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-gold">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Our 360° Service Ecosystem
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            We bridge the gap between real estate strategy and <span className="text-brand-gold">physical execution.</span>
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            label="The Six Pillars" 
            title="Comprehensive" 
            highlightedText="Solutions"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((service) => (
              <div 
                key={service.num}
                className="bg-brand-pale p-10 border-l-4 border-brand-gold hover:-translate-y-2 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-brand-goldLight opacity-50 font-heading text-6xl font-bold mb-6">
                    {service.num}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-brand-dark mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        heading="Ready to build your next facility with confidence?"
        buttonText="Partner With Us"
      />
    </div>
  );
}
