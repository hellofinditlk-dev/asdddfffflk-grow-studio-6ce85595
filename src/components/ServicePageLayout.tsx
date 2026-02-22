import { ReactNode } from "react";
import { CheckCircle, BarChart3, Users, TrendingUp, Zap, Shield, Clock } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: string[];
  serviceName: string;
  icon: ReactNode;
  faqs?: { q: string; a: string }[];
  processSteps?: { title: string; desc: string }[];
  stats?: { value: string; label: string }[];
  flexibleDescription?: string;
  flexiblePoints?: string[];
  metaTitle?: string;
  metaDescription?: string;
  canonical?: string;
}

const defaultStats = [
  { value: "50+", label: "Happy Clients" },
  { value: "200+", label: "Campaigns Run" },
  { value: "3x", label: "Avg ROI Increase" },
  { value: "24hr", label: "Response Time" },
];

const trustPoints = [
  { icon: <Shield className="w-5 h-5" />, title: "No Lock-in Contracts", desc: "Flexible monthly plans with no long-term commitments." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Transparent Reporting", desc: "Detailed monthly reports so you always know your ROI." },
  { icon: <Clock className="w-5 h-5" />, title: "Fast Turnaround", desc: "Campaigns go live within 3–5 business days." },
  { icon: <Users className="w-5 h-5" />, title: "Dedicated Manager", desc: "A single point of contact for all your marketing needs." },
];

const ServicePageLayout = ({
  title,
  subtitle,
  description,
  features,
  benefits,
  serviceName,
  icon,
  faqs,
  processSteps,
  stats,
  flexibleDescription,
  flexiblePoints,
  metaTitle,
  metaDescription,
  canonical,
}: ServicePageLayoutProps) => {
  const displayStats = stats || defaultStats;

  return (
    <div className="pt-16">
      {metaTitle && metaDescription && (
        <SEOHead title={metaTitle} description={metaDescription} canonical={canonical} />
      )}
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

      {/* Stats Bar */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {displayStats.map((s, i) => (
              <div key={i} className="py-8 text-center">
                <div className="font-heading text-2xl md:text-3xl font-extrabold text-foreground mb-1">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
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

      {/* Process Steps */}
      {processSteps && processSteps.length > 0 && (
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">How It Works</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Our {serviceName} Process</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <div key={i} className="text-center group">
                  <div className="w-12 h-12 rounded-full border-2 border-primary/20 text-primary font-heading font-bold text-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-heading text-sm font-bold mb-1.5">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trust Points */}
      <section className={`py-20 lg:py-28 ${processSteps ? "" : "bg-secondary"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Why Cypher Digital</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Work With Confidence</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustPoints.map((tp, i) => (
              <div key={i} className="bg-card rounded-xl p-6 border border-border hover:border-primary/20 transition-colors text-center">
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary mx-auto mb-4">
                  {tp.icon}
                </div>
                <h3 className="font-heading text-sm font-bold mb-1.5">{tp.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{tp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">FAQ</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-card border border-border rounded-xl p-5">
                  <summary className="font-heading text-sm font-semibold cursor-pointer list-none flex items-center justify-between">
                    {faq.q}
                    <Zap className="w-4 h-4 text-primary shrink-0 group-open:rotate-90 transition-transform" />
                  </summary>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Flexible & Cost-Effective */}
      {flexibleDescription && flexiblePoints && (
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Affordable & Scalable</p>
                <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Flexible & Cost-Effective Solutions</h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed text-center mb-10">{flexibleDescription}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {flexiblePoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/20 transition-colors">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

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
              <a href="https://wa.me/94701772626" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageLayout;
