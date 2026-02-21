import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, CheckCircle, Megaphone, Target, Video, Search,
  BarChart3, Users, Lightbulb, Rocket, FileText, TrendingUp,
  MapPin, Phone, ArrowUpRight
} from "lucide-react";
import InquiryForm from "@/components/InquiryForm";

const services = [
  {
    icon: <Megaphone className="w-5 h-5" />,
    title: "Social Media Management",
    desc: "Complete Facebook and Instagram page management to build a strong online presence.",
    items: ["Content planning", "Creative post design", "Post scheduling", "Inbox management", "Monthly reports"],
    link: "/social-media-management-sri-lanka",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Facebook Advertising",
    desc: "Run high-performing Facebook campaigns to generate leads and sales.",
    items: ["Lead generation campaigns", "Awareness campaigns", "Remarketing campaigns", "Conversion campaigns", "Advanced audience targeting"],
    link: "/facebook-ads-sri-lanka",
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: "Google Ads",
    desc: "Capture customers actively searching for your services.",
    items: ["Google Search Ads", "Display Ads", "YouTube Ads", "Keyword research", "Conversion tracking"],
    link: "/google-ads-sri-lanka",
  },
  {
    icon: <Video className="w-5 h-5" />,
    title: "Video Production",
    desc: "Professional video content that increases engagement and ad performance.",
    items: ["Promo videos", "Reels & short videos", "Brand videos", "Ad creatives", "Product videos"],
    link: "/video-production-sri-lanka",
  },
];

const whyUs = [
  { icon: <Lightbulb className="w-5 h-5" />, text: "Strategy-first campaigns" },
  { icon: <TrendingUp className="w-5 h-5" />, text: "Lead generation focused" },
  { icon: <BarChart3 className="w-5 h-5" />, text: "Multi-channel marketing" },
  { icon: <Users className="w-5 h-5" />, text: "Creative content team" },
  { icon: <FileText className="w-5 h-5" />, text: "Transparent reporting" },
  { icon: <Rocket className="w-5 h-5" />, text: "Affordable packages" },
];

const process = [
  { step: "01", title: "Strategy & Planning", desc: "We analyze your business, competitors, and target audience." },
  { step: "02", title: "Content Creation", desc: "Our creative team designs engaging content for your brand." },
  { step: "03", title: "Campaign Launch", desc: "We launch targeted campaigns across selected platforms." },
  { step: "04", title: "Optimization", desc: "Continuous optimization to maximize ROI and results." },
  { step: "05", title: "Reporting", desc: "Transparent monthly reports with actionable insights." },
];

const locations = ["Colombo", "Kandy", "Gampaha", "Negombo", "Kalutara", "Kurunegala", "Sri Lanka Wide"];

const stats = [
  { value: "15,000+", label: "Leads Generated" },
  { value: "20+", label: "Happy Clients" },
  { value: "2,000+", label: "Campaigns Run" },
];

const Index = () => (
  <div className="pt-16">
    {/* HERO */}
    <section className="relative py-24 lg:py-32 bg-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Digital Marketing Agency Sri Lanka
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] mb-6">
            Social Media & Digital Marketing Solutions in Sri Lanka
          </h1>
          <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl">
            We help Sri Lankan businesses grow with professional social media management, Facebook advertising, Google Ads, and video production.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-sm px-7 h-12 rounded-xl">
              <Link to="/contact">
                Get Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/15 text-white hover:bg-white/5 text-sm px-7 h-12 rounded-xl">
              <Link to="/social-media-management-sri-lanka">Start Your Campaign</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* STATS */}
    <section className="border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 divide-x divide-border">
          {stats.map((s, i) => (
            <div key={i} className="py-10 text-center">
              <div className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ABOUT */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">About Us</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-6">
            Results-Driven Digital Marketing Agency
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Our digital marketing solutions are built to help businesses increase brand awareness, generate quality leads, and scale faster.
          </p>
          <p className="text-muted-foreground text-sm">
            Perfect for SMEs, salons, education institutes, real estate, healthcare, and service businesses in Sri Lanka.
          </p>
        </div>
      </div>
    </section>

    {/* SERVICES */}
    <section className="pb-20 lg:pb-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Services</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold">
            Our Digital Marketing Services
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <Link
              key={i}
              to={s.link}
              className="group rounded-2xl border border-border bg-card p-7 md:p-8 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-primary">
                  {s.icon}
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item, j) => (
                  <span key={j} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* WHY CHOOSE US */}
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Why Us</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold">
            Why Choose Our Agency
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyUs.map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-card rounded-xl p-5 border border-border hover:border-primary/20 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary shrink-0">
                {item.icon}
              </div>
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PROCESS */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Process</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold">
            Our Campaign Process
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {process.map((p, i) => (
            <div key={i} className="text-center group">
              <div className="w-12 h-12 rounded-full border-2 border-primary/20 text-primary font-heading font-bold text-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                {p.step}
              </div>
              <h3 className="font-heading text-sm font-bold mb-1.5">{p.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* LOCATIONS */}
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Coverage</p>
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">
          Services Across Sri Lanka
        </h2>
        <p className="text-muted-foreground text-sm mb-10">
          We provide social media marketing and digital advertising services in:
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {locations.map((loc) => (
            <span
              key={loc}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium hover:border-primary/20 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-primary" /> {loc}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* FINAL CTA + FORM */}
    <section className="py-20 lg:py-28 bg-foreground text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Get Started</p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-6">
              Start Your Campaign Today
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Generate consistent leads with Facebook ads, Google Ads, and professional social media management in Sri Lanka.
            </p>
            <div className="flex items-center gap-3 text-white/70">
              <Phone className="w-4 h-4" />
              <a href="tel:+94701772626" className="font-heading font-semibold hover:text-primary transition-colors">
                +94 70 177 2626
              </a>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 md:p-8">
            <h3 className="font-heading text-lg font-bold mb-1.5">Book a Free Consultation</h3>
            <p className="text-sm text-white/40 mb-6">Fill in the form and our team will contact you within 24 hours.</p>
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
