import Image from 'next/image';

export const metadata = {
  title: "Capability Statement | Aagman Realty Ventures LLP",
  description: "Review the capability statement of Aagman Realty Ventures LLP for real estate, construction, facility, and infrastructure solutions.",
};

const capabilities = [
  { num: "01", name: "Corporate Leasing & Consulting", detail: "Navigate the Delhi-NCR commercial market with data-backed insights. We assist in tenant representation, site selection, and lease negotiations." },
  { num: "02", name: "Real Estate Advisory", detail: "Strategic foresight for investors and occupiers. Whether it's portfolio diversification or market entry strategies, we turn real estate into a competitive advantage." },
  { num: "03", name: "Consulting on Cost Optimization", detail: "Real estate is often a company's second-largest expense. We conduct deep-dive audits to streamline occupancy costs and reduce 'dead space.'" },
  { num: "04", name: "Building Construction", detail: "From ground-up developments to structural expansions, our construction arm focuses on engineering integrity, timely delivery, and sustainable practices." },
  { num: "05", name: "Retail Interior & Fitout", detail: "We design and execute high-impact retail environments that enhance brand identity and optimize customer flow, delivered through a 'plug-and-play' model." },
  { num: "06", name: "Repair & Maintenance", detail: "Our comprehensive maintenance programs ensure your facilities remain at peak performance, preserving value and ensuring operational continuity." }
];

const differentiators = [
  { icon: "🔗", title: "Reduced Friction", text: "One point of contact from the lease signing to the first day of operations." },
  { icon: "💡", title: "Cost Efficiency", text: "Integrated services eliminate vendor markups and 'lost in translation' errors." },
  { icon: "🤝", title: "Founder-Led Accountability", text: "Direct access to leadership ensures your project is treated with the urgency it deserves." }
];

const compliance = [
  { label: "Certificate of Incorporation", value: "ACW-7219" },
  { label: "PAN Number", value: "ACNFA8318A" },
  { label: "TAN Number", value: "MRTA29789E" },
  { label: "GST Certificate", value: "09ACNFA8318A1ZG" },
  { label: "MSME Registration", value: "UDYAM-UP-28-0211325" },
  { label: "Registered State", value: "Uttar Pradesh, India" }
];

export default function CapabilityStatement() {
  return (
    <div className="bg-white max-w-[900px] mx-auto shadow-sm my-8">
      {/* HERO */}
      <section className="bg-brand-dark min-h-[340px] flex flex-col md:flex-row relative overflow-hidden">
        <div className="flex-1 py-[50px] px-[50px] md:pl-[60px] flex flex-col justify-center relative z-10">
          <div className="text-[10px] text-brand-gold tracking-[4px] uppercase mb-4 flex items-center gap-3">
            Capability Statement
            <div className="flex-1 h-[1px] bg-brand-gold/30"></div>
          </div>
          <h1 className="font-heading text-[52px] leading-[1.05] text-white mb-4">
            Built for <span className="text-brand-gold block">Excellence</span>
          </h1>
          <p className="text-[13px] text-white/55 leading-[1.7] max-w-[380px]">
            Aagman Realty Ventures LLP delivers integrated real estate, construction, and facility solutions — with transparency, precision, and a commitment to client success.
          </p>
        </div>
        <div className="w-full md:w-[320px] bg-gradient-to-b from-[#C9A84C] to-[#8B6914] flex flex-col items-center justify-center py-10 px-[30px] text-center">
          <div className="font-heading text-white text-[15px] font-bold tracking-[1px] leading-[1.4] mb-[6px] mt-6">
            AAGMAN REALTY<br />VENTURES LLP
          </div>
          <div className="text-[10px] text-white/70 tracking-[3px] uppercase">
            Real Estate & Infrastructure
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="py-[50px] px-[60px] bg-brand-pale">
        <div className="text-[10px] text-brand-gold tracking-[4px] uppercase mb-2">Core Capabilities</div>
        <h2 className="font-heading text-[32px] text-brand-dark mb-[6px]">
          What We <span className="text-brand-gold font-normal italic">Deliver</span>
        </h2>
        <div className="w-[44px] h-[3px] bg-brand-gold mt-4 mb-7"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {capabilities.map((cap, index) => (
            <div key={index} className="flex items-start gap-4 bg-white p-5 rounded-sm border-b-[3px] border-brand-gold shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
              <div className="font-heading text-[36px] text-brand-cream font-black leading-none min-w-[40px]">
                {cap.num}
              </div>
              <div>
                <h3 className="text-[13px] font-semibold text-brand-dark mb-1">{cap.name}</h3>
                <p className="text-[11px] text-brand-grey leading-[1.5]">{cap.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STRENGTH BAND */}
      <section className="bg-brand-dark py-[36px] px-[60px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
          <div className="text-center p-5 md:border-r border-white/10">
            <div className="font-heading text-[40px] text-brand-gold font-black leading-none">8+</div>
            <div className="text-[11px] text-white/50 mt-[6px] tracking-[1px]">Service Verticals</div>
          </div>
          <div className="text-center p-5 md:border-r border-white/10">
            <div className="font-heading text-[40px] text-brand-gold font-black leading-none">100%</div>
            <div className="text-[11px] text-white/50 mt-[6px] tracking-[1px]">GST & Tax Compliant</div>
          </div>
          <div className="text-center p-5 md:border-r border-white/10">
            <div className="font-heading text-[40px] text-brand-gold font-black leading-none">MSME</div>
            <div className="text-[11px] text-white/50 mt-[6px] tracking-[1px]">Govt. Recognized</div>
          </div>
          <div className="text-center p-5">
            <div className="font-heading text-[40px] text-brand-gold font-black leading-none">LLP</div>
            <div className="text-[11px] text-white/50 mt-[6px] tracking-[1px]">Incorporated Entity</div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-[50px] px-[60px] bg-white">
        <div className="text-[10px] text-brand-gold tracking-[4px] uppercase mb-2">Why Partner With Us</div>
        <h2 className="font-heading text-[32px] text-brand-dark mb-[6px]">
          Our <span className="text-brand-gold font-normal italic">Differentiators</span>
        </h2>
        <div className="w-[44px] h-[3px] bg-brand-gold mt-4 mb-7"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-[28px]">
          {differentiators.map((diff, index) => (
            <div key={index} className="p-6 bg-brand-pale border-t-[3px] border-brand-gold">
              <div className="text-[22px] mb-[10px]">{diff.icon}</div>
              <h3 className="text-[13px] font-semibold text-brand-dark mb-[6px]">{diff.title}</h3>
              <p className="text-[11px] text-brand-grey leading-[1.6]">{diff.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="py-[40px] px-[60px] bg-brand-cream">
        <div className="text-[10px] text-brand-gold tracking-[4px] uppercase mb-2">Statutory Information</div>
        <h2 className="font-heading text-[32px] text-brand-dark mb-[6px]">
          Compliance <span className="text-brand-gold font-normal italic">Details</span>
        </h2>
        <div className="w-[44px] h-[3px] bg-brand-gold mt-4 mb-7"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
          {compliance.map((item, index) => (
            <div key={index} className="flex items-center gap-[14px] bg-white py-[14px] px-[18px]">
              <div className="w-2 h-2 bg-brand-gold rounded-full flex-shrink-0"></div>
              <div>
                <div className="text-[10px] text-brand-grey tracking-[1px] uppercase">{item.label}</div>
                <div className="text-[13px] font-semibold text-brand-dark">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#C9A84C] to-[#8B6914] py-[48px] px-[60px] flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="font-heading text-[28px] text-white mb-2">Ready to Build Together?</h2>
          <p className="text-[13px] text-white/75">Contact us to discuss your project requirements, leasing needs, or AMC proposals.</p>
        </div>
        <div className="text-center md:text-right">
          <div className="text-[11px] text-white/65 tracking-[2px] uppercase mb-1">Aagman Realty Ventures LLP</div>
          <div className="text-[12px] text-white font-semibold">GST: 09ACNFA8318A1ZG</div>
          <div className="text-[11px] text-white/65 mt-1">MSME: UDYAM-UP-28-0211325</div>
        </div>
      </section>
    </div>
  );
}
