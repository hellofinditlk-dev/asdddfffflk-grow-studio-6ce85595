import { CheckCircle, Zap, Shield, BarChart3, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import IndustryInquiryForm from "@/components/IndustryInquiryForm";
import type { IndustryData } from "@/data/industries";

const allServices = [
  { name: "Social Media Management", path: "/social-media-management-sri-lanka", keyword: "Social Media Management Sri Lanka" },
  { name: "Facebook Advertising", path: "/facebook-ads-sri-lanka", keyword: "Facebook Ads Sri Lanka" },
  { name: "Google Ads", path: "/google-ads-sri-lanka", keyword: "Google Ads Sri Lanka" },
  { name: "SEO", path: "/seo-services-sri-lanka", keyword: "SEO Services Sri Lanka" },
  { name: "Graphic Design", path: "/graphic-design-sri-lanka", keyword: "Graphic Design Sri Lanka" },
  { name: "Video Production", path: "/video-production-sri-lanka", keyword: "Video Production Sri Lanka" },
];

const trustPoints = [
  { icon: <Shield className="w-5 h-5" />, title: "No Lock-in Contracts", desc: "Flexible monthly plans with no long-term commitments." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Transparent Reporting", desc: "Detailed monthly reports so you always know your ROI." },
  { icon: <Clock className="w-5 h-5" />, title: "Fast Turnaround", desc: "Campaigns go live within 3–5 business days." },
  { icon: <Users className="w-5 h-5" />, title: "Dedicated Manager", desc: "A single point of contact for all your marketing needs." },
];

const defaultStats = [
  { value: "15,000+", label: "Leads Generated" },
  { value: "20+", label: "Happy Clients" },
  { value: "2,000+", label: "Campaigns Run" },
];

interface Props {
  data: IndustryData;
}

const IndustryPageLayout = ({ data }: Props) => {
  const canonical = `https://cypherdigital.lk/${data.slug}`;

  return (
    <div className="pt-16">
      <SEOHead title={data.seoTitle} description={data.metaDescription} canonical={canonical} />

      {/* Hero */}
      <section className="bg-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Industry Marketing</p>
            <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">{data.h1}</h1>
            <p className="text-lg text-white/50 leading-relaxed mb-8">{data.intro}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-sm px-7 h-12 rounded-xl">
                <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation" target="_blank" rel="noopener noreferrer">
                  Book a Free Consultation
                </a>
              </Button>
              <Button asChild size="lg" className="bg-[hsl(25,95%,53%)] text-white hover:bg-[hsl(25,95%,45%)] text-sm px-7 h-12 rounded-xl font-semibold">
                <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20get%20a%20free%20quote" target="_blank" rel="noopener noreferrer">
                  Get a Free Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 divide-x divide-border">
            {defaultStats.map((s, i) => (
              <div key={i} className="py-8 text-center">
                <div className="font-heading text-2xl md:text-3xl font-extrabold text-foreground mb-1">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services + Form */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-8">{data.servicesHeading}</h2>
              <div className="space-y-3">
                {data.services.map((service, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary transition-colors">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-heading text-lg font-bold mt-12 mb-4">{data.ctaHeading}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{data.ctaDescription}</p>
            </div>

            <div>
              <div className="bg-card rounded-2xl p-7 md:p-8 shadow-card border border-border sticky top-24">
                <h3 className="font-heading text-lg font-bold mb-1.5">Get a Free Quote</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Tell us about your business and we'll create a custom marketing strategy.
                </p>
                <IndustryInquiryForm
                  fields={data.formFields}
                  ctaButtonText={data.ctaButtonText}
                  serviceName={data.h1}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-20 lg:py-28 bg-secondary">
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
      {data.faqs.length > 0 && (
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">FAQ</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
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

      {/* Internal Links */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Explore More</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Our Digital Marketing Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {allServices.map((s) => (
              <Link
                key={s.path}
                to={s.path}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 hover:shadow-card transition-all group"
              >
                <h3 className="font-heading text-sm font-bold mb-2 group-hover:text-primary transition-colors">
                  {s.keyword}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Get Started</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-white/50 mb-8 max-w-xl text-sm leading-relaxed">
                Fill in the form and we'll create a custom marketing strategy for your business. We'll get back to you via WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 rounded-xl h-11 px-6">
                  <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation" target="_blank" rel="noopener noreferrer">Book Free Consultation</a>
                </Button>
                <Button asChild variant="outline" className="border-white/15 text-white hover:bg-white/5 rounded-xl h-11 px-6">
                  <a href="https://wa.me/94701772626" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                </Button>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7 md:p-8">
              <h3 className="font-heading text-lg font-bold text-white mb-1.5">Send Us Your Details</h3>
              <p className="text-sm text-white/40 mb-6">We'll reach out to you on WhatsApp.</p>
              <IndustryInquiryForm
                fields={data.formFields}
                ctaButtonText={data.ctaButtonText}
                serviceName={data.h1}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryPageLayout;
