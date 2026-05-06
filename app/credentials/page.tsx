import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: "Credentials | Aagman Realty Ventures LLP",
  description: "View Aagman Realty Ventures LLP's registration, GST, PAN, TAN, MSME, and incorporation credentials.",
};

const credentials = [
  { label: "Company Name", value: "Aagman Realty Ventures LLP" },
  { label: "Nature of Entity", value: "Limited Liability Partnership" },
  { label: "Certificate of Incorporation", value: "ACW-7219" },
  { label: "PAN Number", value: "ACNFA8318A" },
  { label: "TAN Number", value: "MRTA29789E" },
  { label: "GST Certificate", value: "09ACNFA8318A1ZG" },
  { label: "MSME Registration", value: "UDYAM-UP-28-0211325" },
  { label: "Registered State", value: "Uttar Pradesh, India" }
];

export default function Credentials() {
  return (
    <div className="bg-brand-cream">
      {/* Hero Section */}
      <section className="bg-brand-darkDeep text-white py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-gold">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Legal Standing
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Registration & <span className="text-brand-gold">Credentials</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Aagman Realty Ventures LLP is a legally registered and compliant business entity operating from Uttar Pradesh, India.
          </p>
        </div>
      </section>

      {/* Credentials Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            label="Corporate Details" 
            title="Official" 
            highlightedText="Information"
            align="center"
          />
          
          <div className="mt-12 border-4 border-brand-gold rounded-lg overflow-hidden shadow-xl bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {credentials.map((cred, index) => (
                <div 
                  key={index} 
                  className={`p-8 border-b md:border-b-0 border-brand-cream ${
                    index % 4 === 0 || index % 4 === 3 ? 'bg-white' : 'bg-brand-goldPale'
                  } ${(index + 1) % 2 === 1 ? 'md:border-r' : ''} ${index < credentials.length - 2 ? 'md:border-b' : ''}`}
                >
                  <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-2">
                    {cred.label}
                  </p>
                  <p className="font-heading text-2xl font-semibold text-brand-dark">
                    {cred.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Statement */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8 border-t border-brand-cream text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-dark mb-6">
            Compliant. Transparent. <span className="text-brand-gold">Partnership Ready.</span>
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our legal registrations and compliance credentials allow clients, brands, corporates, and institutions to engage with confidence.
          </p>
        </div>
      </section>

      <CTASection 
        heading="Ready to discuss your next project with a trusted partner?"
        buttonText="Contact for Business Inquiry"
      />
    </div>
  );
}
