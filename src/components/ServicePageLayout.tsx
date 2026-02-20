import { ReactNode } from "react";
import { CheckCircle } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: string[];
  serviceName: string;
  icon: ReactNode;
}

const ServicePageLayout = ({
  title,
  subtitle,
  description,
  features,
  benefits,
  serviceName,
  icon,
}: ServicePageLayoutProps) => (
  <div className="pt-16">
    {/* Hero */}
    <section className="bg-foreground py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center animate-fade-up">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
            {icon}
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">{subtitle}</p>
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">{title}</h1>
          <p className="text-lg text-white/50 leading-relaxed">{description}</p>
        </div>
      </div>
    </section>

    {/* Features + Form */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-8">What's Included</h2>
            <div className="space-y-3">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary transition-colors">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <h3 className="font-heading text-lg font-bold mt-12 mb-6">Why This Works</h3>
            <div className="space-y-3">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-card rounded-2xl p-7 md:p-8 shadow-card border border-border sticky top-24">
              <h3 className="font-heading text-lg font-bold mb-1.5">Get a Free Quote</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Tell us about your business and we'll create a custom {serviceName} strategy.
              </p>
              <InquiryForm service={serviceName} />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-4">Ready to Get Started?</h2>
        <p className="text-white/50 mb-8 max-w-xl mx-auto text-sm">
          Generate consistent leads with professional {serviceName} in Sri Lanka.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 rounded-xl h-11 px-6">
            <Link to="/contact">Book Free Consultation</Link>
          </Button>
          <Button asChild variant="outline" className="border-white/15 text-white hover:bg-white/5 rounded-xl h-11 px-6">
            <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default ServicePageLayout;
