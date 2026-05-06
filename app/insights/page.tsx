import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: "Insights | Aagman Realty Ventures LLP",
  description: "Read the latest insights, market trends, and updates from Aagman Realty Ventures LLP on real estate, construction, and infrastructure.",
};

export default function Insights() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-brand-darkDeep text-white py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-gold">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Market Knowledge
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Real Estate <span className="text-brand-gold">Insights</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest perspectives on the Delhi-NCR commercial market, cost optimization strategies, and construction trends.
          </p>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-brand-cream">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader 
            label="Coming Soon" 
            title="Our Insights Hub is" 
            highlightedText="Launching Shortly"
            align="center"
          />
          <p className="text-gray-600 leading-relaxed mt-10 text-lg">
            We are currently curating data-backed research, case studies, and thought leadership articles to help you navigate the real estate and infrastructure landscape.
          </p>
          <div className="mt-12 flex justify-center">
            <div className="w-24 h-1 bg-brand-gold"></div>
          </div>
        </div>
      </section>

      <CTASection 
        heading="Want to be notified when we publish our first market report?"
        buttonText="Contact Us"
      />
    </div>
  );
}
