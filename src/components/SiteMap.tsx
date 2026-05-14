export function SiteMap({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden border border-primary/30 ${className}`}>
      <iframe
        title="Prestige Motors Showroom Location"
        src="https://www.google.com/maps?q=Sheikh+Zayed+Road,+Dubai,+UAE&output=embed&z=15"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full border-0 grayscale-[30%] contrast-110"
        allowFullScreen
      />
    </div>
  );
}
