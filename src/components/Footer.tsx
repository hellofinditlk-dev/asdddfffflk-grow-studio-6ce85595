import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="section-dark border-t border-border/10">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-heading text-xl font-bold text-primary mb-4">Findit.lk</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Results-driven digital marketing agency in Sri Lanka. We help businesses grow with social media, Facebook ads, Google Ads & video production.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-muted/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/social-media-management-sri-lanka" className="hover:text-primary transition-colors">Social Media Management</Link>
            <Link to="/facebook-ads-sri-lanka" className="hover:text-primary transition-colors">Facebook Advertising</Link>
            <Link to="/google-ads-sri-lanka" className="hover:text-primary transition-colors">Google Ads</Link>
            <Link to="/video-production-sri-lanka" className="hover:text-primary transition-colors">Video Production</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <a href="tel:+94771234567" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" /> +94 77 123 4567
            </a>
            <a href="mailto:info@findit.lk" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" /> info@findit.lk
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Colombo, Sri Lanka
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-border/10 mt-12 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Findit.lk — Digital Marketing Agency Sri Lanka. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
