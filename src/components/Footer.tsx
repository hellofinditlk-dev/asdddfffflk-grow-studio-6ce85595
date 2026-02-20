import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-secondary">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-heading text-lg font-extrabold mb-3">
            Findit<span className="text-primary">.lk</span>
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Results-driven digital marketing agency in Sri Lanka helping businesses grow.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold mb-4">Services</h4>
          <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
            <Link to="/social-media-management-sri-lanka" className="hover:text-foreground transition-colors">Social Media Management</Link>
            <Link to="/facebook-ads-sri-lanka" className="hover:text-foreground transition-colors">Facebook Advertising</Link>
            <Link to="/google-ads-sri-lanka" className="hover:text-foreground transition-colors">Google Ads</Link>
            <Link to="/video-production-sri-lanka" className="hover:text-foreground transition-colors">Video Production</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold mb-4">Company</h4>
          <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <a href="tel:+94771234567" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone className="w-3.5 h-3.5" /> +94 77 123 4567
            </a>
            <a href="mailto:info@findit.lk" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail className="w-3.5 h-3.5" /> info@findit.lk
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" /> Colombo, Sri Lanka
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Findit.lk — Digital Marketing Agency Sri Lanka
      </div>
    </div>
  </footer>
);

export default Footer;
