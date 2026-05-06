import SectionHeader from '@/components/SectionHeader';

export const metadata = {
  title: "Contact Aagman Realty Ventures LLP",
  description: "Contact Aagman Realty Ventures LLP for leasing consulting, fitout work, civil construction, AMC, maintenance, and infrastructure projects.",
};

const services = [
  "Corporate Leasing & Consulting",
  "Real Estate Advisory",
  "Consulting on Cost Optimization",
  "Building Construction",
  "Retail Interior & Fitout",
  "Repair & Maintenance",
  "General Inquiry"
];

export default function Contact() {
  return (
    <div className="bg-brand-cream">
      {/* Hero Section */}
      <section className="bg-brand-darkDeep text-white py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-gold">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Contact Us
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Ready to start your next <span className="text-brand-gold">venture?</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how Aagman can optimize your real estate portfolio.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Contact Information */}
            <div>
              <SectionHeader 
                label="Get In Touch" 
                title="Business" 
                highlightedText="Inquiries"
              />
              
              <div className="bg-white p-10 border-l-4 border-brand-gold shadow-md mt-12">
                <h3 className="font-heading text-2xl font-semibold text-brand-dark mb-2">
                  Aagman Realty Ventures LLP
                </h3>
                <p className="text-gray-500 mb-8 pb-8 border-b border-gray-100">
                  Founder: Divyanshu Jha
                </p>
                
                <ul className="space-y-6">
                  <li className="pb-4 border-b border-gray-50">
                    <span className="block text-gray-500 text-xs font-bold tracking-widest uppercase mb-1">Office Address</span>
                    <span className="font-medium text-brand-dark">Jaypee wishtown, Kmo4, Flat no 1205, Sector 134, Noida, Uttar Pradesh, 201301</span>
                  </li>
                  <li className="pb-4 border-b border-gray-50">
                    <span className="block text-gray-500 text-xs font-bold tracking-widest uppercase mb-1">Email Address</span>
                    <span className="font-medium text-brand-dark">contact@aagman.in</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-gray-50">
                    <span className="text-gray-500 text-xs font-bold tracking-widest uppercase">GST</span>
                    <span className="font-medium text-brand-dark text-sm">09ACNFA8318A1ZG</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-gray-50">
                    <span className="text-gray-500 text-xs font-bold tracking-widest uppercase">MSME</span>
                    <span className="font-medium text-brand-dark text-sm">UDYAM-UP-28-0211325</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Inquiry Form */}
            <div className="bg-white p-10 shadow-md">
              <h3 className="font-heading text-2xl font-semibold text-brand-dark mb-8">
                Send Us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input type="text" id="fullName" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-shadow" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input type="text" id="companyName" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-shadow" placeholder="Acme Corp" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-shadow" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" id="phone" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-shadow" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                  <select id="service" className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-shadow bg-white">
                    <option value="" disabled selected>Select a service...</option>
                    {services.map((service, idx) => (
                      <option key={idx} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-shadow" placeholder="Tell us about your requirement..."></textarea>
                </div>

                <button type="button" className="w-full bg-brand-dark text-white font-medium px-8 py-4 uppercase tracking-wider text-sm transition-colors hover:bg-brand-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark">
                  Submit Inquiry
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* Bottom CTA / Footer Message */}
      <div className="bg-brand-dark py-8 text-center text-brand-gold text-sm font-heading tracking-widest uppercase">
        © 2026 Aagman Realty Ventures LLP. All Rights Reserved.<br/>
        <span className="text-white text-xs mt-2 block">Building the foundations of tomorrow.</span>
      </div>
    </div>
  );
}
