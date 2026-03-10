import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Projekty Budowy" className="h-16 w-auto brightness-0 invert" />
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
              Projektowanie, nadzór techniczny i usługi inżynieryjne na najwyższym poziomie.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-body font-semibold uppercase tracking-wider">Nawigacja</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Strona główna</Link>
              <Link to="/uslugi" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Usługi</Link>
              <Link to="/o-firmie" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">O firmie</Link>
              <Link to="/kontakt" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Kontakt</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-body font-semibold uppercase tracking-wider">Kontakt</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+48000000000" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                +48 000 000 000
              </a>
              <a href="mailto:kontakt@projektybudowy.pl" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                kontakt@projektybudowy.pl
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Polska</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Projekty Budowy — Adam Adrianowski. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
