import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import InquiryForm from "@/components/InquiryForm";
import { useEffect } from "react";
import {
  CheckCircle, Zap, Shield, Clock, Users, BarChart3,
  ArrowRight, MapPin, MessageCircle, Calendar, Briefcase,
  Heart, Megaphone, Star,
} from "lucide-react";
import mascotGlasses from "@/assets/mascot-glasses.jpeg";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "100+", label: "Events Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "Island", label: "Wide Coverage" },
  { value: "24hr", label: "Response Time" },
];

const whyChoose = [
  "Full-service event management Sri Lanka",
  "Creative concepts and custom themes",
  "Strong vendor network across Sri Lanka",
  "Marketing-driven event execution",
  "Fast response via WhatsApp",
  "Island-wide service coverage",
];

const corporateServices = [
  "Conferences and seminars",
  "Business forums and networking events",
  "Product launches and brand events",
  "Exhibitions and trade shows",
  "Corporate parties and award ceremonies",
  "Employee engagement events",
  "Training programs and workshops",
  "Team-building events",
  "Hybrid and virtual events",
];

const privateEvents = [
  "Birthday parties",
  "Anniversaries",
  "Engagement parties",
  "Family events",
  "VIP and exclusive gatherings",
];

const brandActivation = [
  "Brand activations",
  "Roadshows",
  "Mall promotions",
  "Product demonstrations",
  "Experiential marketing campaigns",
];

const weddingServices = [
  "Full wedding planning and coordination",
  "Venue selection and setup",
  "Decoration and theme design",
  "Vendor management",
  "Entertainment and logistics",
];

const marketingIntegration = [
  "Social media content creation",
  "Event-based marketing campaigns",
  "Audience engagement strategies",
  "Lead generation systems",
  "Post-event promotion",
];

const processSteps = [
  { title: "Requirement Analysis", desc: "Understanding your goals, audience, and budget" },
  { title: "Creative Planning", desc: "Developing concepts and event strategies" },
  { title: "Coordination & Setup", desc: "Managing vendors, logistics, and timelines" },
  { title: "Execution", desc: "Ensuring smooth on-ground operations" },
  { title: "Post-Event Marketing", desc: "Maximizing visibility and results" },
];

const locations = ["Colombo", "Negombo", "Kandy", "Galle", "Kurunegala", "Island-wide"];

const faqs = [
  { q: "What is the best event management company in Sri Lanka?", a: "Cypher Digital is a trusted provider of event management Sri Lanka services with a focus on quality and results." },
  { q: "How much does event planning cost in Sri Lanka?", a: "Costs vary depending on event size and requirements. Contact us for a custom quote." },
  { q: "Do you handle corporate events?", a: "Yes, we specialize in corporate event planning Sri Lanka." },
  { q: "Do you provide island-wide services?", a: "Yes, we cover all major cities in Sri Lanka." },
  { q: "How can I contact you?", a: "You can reach us instantly via WhatsApp at 070 177 2626." },
];

const trustPoints = [
  { icon: <Shield className="w-5 h-5" />, title: "No Lock-in Contracts", desc: "Flexible packages with no long-term commitments." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Transparent Pricing", desc: "Clear quotations so you always know what you're paying for." },
  { icon: <Clock className="w-5 h-5" />, title: "Fast Turnaround", desc: "Quick planning and execution within your timeline." },
  { icon: <Users className="w-5 h-5" />, title: "Dedicated Manager", desc: "A single point of contact for all your event needs." },
];

const ServiceBlock = ({ icon, title, items, highlight }: { icon: React.ReactNode; title: string; items: string[]; highlight?: string }) => (
  <div className="bg-card border border-border rounded-xl p-6 md:p-8">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">{icon}</div>
      <h3 className="font-heading text-lg font-bold">{title}</h3>
    </div>
    <div className="space-y-2.5">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
          <span className="text-sm text-muted-foreground">{item}</span>
        </div>
      ))}
    </div>
    {highlight && <p className="text-xs text-primary mt-4 font-medium">👉 {highlight}</p>}
  </div>
);

const EventManagement = () => {
  const canonical = "https://cypherdigital.lk/event-management-sri-lanka";

  useEffect(() => {
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Event Management Sri Lanka",
        description: "Professional event management and event planning services in Sri Lanka by Cypher Digital.",
        provider: {
          "@type": "LocalBusiness",
          name: "Cypher Digital",
          url: "https://cypherdigital.lk",
          telephone: "+94701772626",
          address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
        },
        areaServed: { "@type": "Country", name: "Sri Lanka" },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ];
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemas);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <div className="pt-16">
      <SEOHead
        title="Event Management Sri Lanka | Cypher Digital Event Planning"
        description="Looking for expert event management Sri Lanka? Cypher Digital offers corporate, wedding & promotional event planning. Contact via WhatsApp today."
        canonical={canonical}
      />

      {/* Hero */}
      <section className="bg-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-fade-up">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <Calendar className="w-6 h-6" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Event Planning Sri Lanka</p>
            <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Event Management Sri Lanka
            </h1>
            <p className="text-lg text-white/50 leading-relaxed mb-4">
              Professional Event Planning Sri Lanka That Delivers Results
            </p>
            <p className="text-sm text-white/40 leading-relaxed mb-8 max-w-xl mx-auto">
              At Cypher Digital, we provide modern, results-driven event management Sri Lanka services designed to create impactful and memorable experiences. We combine creativity, strategy, and execution to deliver seamless event planning solutions for corporate events, weddings, private functions, and brand activations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-sm px-7 h-12 rounded-xl">
                <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20plan%20an%20event" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp <MessageCircle className="w-4 h-4 ml-1" />
                </a>
              </Button>
              <Button asChild size="lg" className="bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] text-sm px-7 h-12 rounded-xl font-semibold border-none">
                <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20a%20free%20event%20consultation" target="_blank" rel="noopener noreferrer">
                  Get a Free Quote <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {stats.map((s, i) => (
              <div key={i} className="py-8 text-center">
                <div className="font-heading text-2xl md:text-3xl font-extrabold text-foreground mb-1">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Why Cypher Digital</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Why Choose Cypher Digital</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              We are not just an event planner — we are a strategic partner that helps you create events that drive engagement and results.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {whyChoose.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild className="bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] rounded-xl font-semibold border-none">
              <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20start%20planning%20my%20event" target="_blank" rel="noopener noreferrer">
                Start Planning Your Event <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Our Services</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Our Event Management Services in Sri Lanka</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              We offer complete event planning Sri Lanka solutions tailored to different industries and event types.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <ServiceBlock
              icon={<Briefcase className="w-5 h-5" />}
              title="Corporate Event Management Sri Lanka"
              items={corporateServices}
              highlight="Ideal for companies looking for event management Sri Lanka with real business impact"
            />
            <ServiceBlock
              icon={<Star className="w-5 h-5" />}
              title="Private Events & Celebrations"
              items={privateEvents}
            />
            <ServiceBlock
              icon={<Megaphone className="w-5 h-5" />}
              title="Promotional & Brand Activation Events"
              items={brandActivation}
            />
            <ServiceBlock
              icon={<Heart className="w-5 h-5" />}
              title="Wedding Planning Sri Lanka"
              items={weddingServices}
            />
          </div>
        </div>
      </section>

      {/* SEO & Marketing Integration */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Beyond Traditional</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">SEO & Marketing-Driven Event Management</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              At Cypher Digital, we go beyond traditional event planning. Our event management Sri Lanka approach combines event execution with digital marketing to maximize results.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {marketingIntegration.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-primary text-center mt-6 font-medium">👉 Your event continues to generate value even after it ends</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">How It Works</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Our Event Planning Process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
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

      {/* Coverage */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Coverage</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Event Management Across Sri Lanka</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((loc, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border text-sm">
                <MapPin className="w-3.5 h-3.5 text-primary" /> {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Affordable Packages */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Affordable & Scalable</p>
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-4">Affordable Event Packages</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">We offer flexible pricing based on event type, number of guests, location, and custom requirements.</p>
          <Button asChild size="lg" className="bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] rounded-xl font-semibold border-none">
            <a href="https://wa.me/94701772626?text=Hi%2C%20I%20need%20a%20custom%20event%20quotation" target="_blank" rel="noopener noreferrer">
              Get Your Custom Quotation <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Why Professional Event Management Matters</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Smooth execution", "Time and cost efficiency", "High-quality experience", "Strong brand impact"].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-6">Avoid stress, delays, and poor coordination by choosing experts.</p>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Why Cypher Digital</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Work With Confidence</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
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

      {/* CTA + Form */}
      <section className="bg-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Get Started</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-6">
                Plan Your Event with Cypher Digital Today
              </h2>
              <p className="text-white/50 mb-8 max-w-xl text-sm leading-relaxed">
                Work with a team that combines creativity, strategy, and execution. Fill in the form and we'll get back to you via WhatsApp.
              </p>
              <div className="flex items-center gap-4 mb-6 bg-white/5 border border-white/10 rounded-2xl p-4">
                <img src={mascotGlasses} alt="Cypher Digital mascot" className="w-14 h-14 rounded-xl object-cover hidden sm:block" />
                <div>
                  <p className="text-white/80 text-sm font-medium mb-2">💬 Ready to create an unforgettable event? Let's talk!</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 rounded-xl h-11 px-6">
                      <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20plan%20an%20event" target="_blank" rel="noopener noreferrer">WhatsApp Now</a>
                    </Button>
                    <Button asChild className="border border-white/20 bg-transparent rounded-xl h-11 px-6 hover:bg-white/5" style={{ color: "white" }}>
                      <a href="tel:+94701772626">Call 070 177 2626</a>
                    </Button>
                  </div>
                </div>
              </div>
              <p className="text-xs text-white/30">👉 Fast Response | Free Consultation | Custom Packages</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7 md:p-8">
              <h3 className="font-heading text-lg font-bold text-white mb-1.5">Send Us Your Details</h3>
              <p className="text-sm text-white/40 mb-6">We'll reach out to you on WhatsApp.</p>
              <InquiryForm service="Event Management" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventManagement;
