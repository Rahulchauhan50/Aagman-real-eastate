type SectionHeaderProps = {
  label: string;
  title: string;
  highlightedText?: string;
  align?: "left" | "center";
};

export default function SectionHeader({ label, title, highlightedText, align = "left" }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center flex flex-col items-center' : 'text-left flex flex-col items-start'}`}>
      <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
        {label}
      </span>
      <h2 className="font-heading text-4xl md:text-5xl font-semibold text-brand-dark mb-6 leading-tight">
        {title} {highlightedText && <span className="text-brand-gold">{highlightedText}</span>}
      </h2>
      <div className="w-12 h-1 bg-brand-gold"></div>
    </div>
  );
}
