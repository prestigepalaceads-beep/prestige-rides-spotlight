import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, MapPin, Phone, Mail } from "lucide-react";

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-onyx">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-display text-2xl tracking-widest text-foreground">PRESTIGE</div>
            <div className="text-[10px] tracking-[0.4em] text-muted-foreground mb-6">MOTORS</div>
            <p className="text-sm text-muted-foreground leading-relaxed">Curators of the world's most exceptional automobiles. Crafting confidence on every road.</p>
            <div className="mt-6 flex gap-3">
              <a href="https://www.instagram.com/prestigemotorsdubai/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition hover:border-primary hover:text-primary">
                <Instagram size={16} />
              </a>
              <a href="https://www.facebook.com/PrestigeSamMotorsLLC" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition hover:border-primary hover:text-primary">
                <Facebook size={16} />
              </a>
              <a href="https://www.tiktok.com/@prestige_motors?lang=en" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition hover:border-primary hover:text-primary">
                <TikTokIcon size={16} />
              </a>
              <a href="https://www.linkedin.com/in/prestigemotors" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition hover:border-primary hover:text-primary">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-foreground/75">
              <li><Link to="/cars" className="hover:text-primary transition">All Vehicles</Link></li>
              <li><Link to="/services" className="hover:text-primary transition">Services</Link></li>
              <li><Link to="/blogs" className="hover:text-primary transition">Editorial</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-foreground/75">
              <li><Link to="/privacy" className="hover:text-primary transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-foreground/75">
              <li className="flex gap-3"><MapPin size={16} className="mt-0.5 text-primary shrink-0" /><span>Sheikh Zayed Road, Dubai, UAE</span></li>
              <li className="flex gap-3"><Phone size={16} className="mt-0.5 text-primary shrink-0" /><span>+971 4 000 0000</span></li>
              <li className="flex gap-3"><Mail size={16} className="mt-0.5 text-primary shrink-0" /><span>info@prestigemotors.ae</span></li>
            </ul>
          </div>
        </div>

        <div className="gold-line my-12 opacity-30" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground tracking-wider">
          <p>© {new Date().getFullYear()} PRESTIGE MOTORS. All rights reserved.</p>
          <p className="tracking-[0.3em] uppercase">Crafted with precision</p>
        </div>
      </div>
    </footer>
  );
}
