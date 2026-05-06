import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: "The Aagman Advantage | Aagman Realty Ventures LLP",
  description: "Why Choose a Full-Stack Partner? Reduced Friction, Cost Efficiency, and Founder-Led Accountability.",
};

const reasons = [
  {
    icon: "🔗",
    title: "Reduced Friction",
    text: "One point of contact from the lease signing to the first day of operations."
  },
  {
    icon: "💡",
    title: "Cost Efficiency",
    text: "Integrated services eliminate vendor markups and \"lost in translation\" errors."
  },
  {
    icon: "🤝",
    title: "Founder-Led Accountability",
    text: "Direct access to leadership ensures your project is treated with the urgency it deserves."
  }
];

export default function WhyChooseUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-brand-darkDeep text-white py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-gold">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            The Aagman Advantage
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Why Choose a <span className="text-brand-gold">Full-Stack Partner?</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We provide a single-point accountability model that spans the entire property lifecycle, bridging the gap between strategy and execution.
          </p>
        </div>
      </section>

      {/* Main Reasons Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            label="What Sets Us Apart" 
            title="The Core" 
            highlightedText="Difference"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="bg-brand-pale p-10 text-center border-t-4 border-brand-gold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl mb-6">{reason.icon}</div>
                <h3 className="font-bold text-xl mb-4 text-brand-dark">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.text}</p>
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
