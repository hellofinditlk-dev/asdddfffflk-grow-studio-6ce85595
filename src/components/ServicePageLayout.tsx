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
    <section className="section-dark py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
            {icon}
          </div>
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">{subtitle}</p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </section>

    {/* Features + Form */}
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8">What's Included</h2>
            <div className="space-y-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <h3 className="font-heading text-xl font-bold mt-10 mb-6">Why This Works</h3>
            <div className="space-y-3">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border sticky top-24">
              <h3 className="font-heading text-xl font-bold mb-2">Get a Free Quote</h3>
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
    <section className="section-dark py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Generate consistent leads with professional {serviceName} in Sri Lanka.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-gradient-primary text-primary-foreground font-semibold shadow-glow">
            <Link to="/contact">Book Free Consultation</Link>
          </Button>
          <Button asChild variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
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
