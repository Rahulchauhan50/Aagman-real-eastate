import Link from 'next/link';

export default function CTASection({ 
  heading = "Ready to discuss your next real estate, construction, or infrastructure requirement?",
  buttonText = "Contact Aagman" 
}) {
  return (
    <section className="bg-gradient-to-br from-brand-gold to-[#8B6914] py-20 px-4 sm:px-6 lg:px-8 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 leading-tight">
          {heading}
        </h2>
        <Link 
          href="/contact" 
          className="inline-block bg-brand-dark text-white font-medium px-8 py-4 uppercase tracking-wider text-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
