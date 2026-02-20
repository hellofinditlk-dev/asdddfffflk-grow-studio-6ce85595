import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, CheckCircle, Megaphone, Target, Video, Search,
  BarChart3, Users, Lightbulb, Rocket, FileText, TrendingUp,
  MapPin, Phone
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import InquiryForm from "@/components/InquiryForm";

const services = [
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Social Media Management Sri Lanka",
    desc: "Complete Facebook and Instagram page management to build a strong online presence.",
    items: ["Content planning", "Creative post design", "Post scheduling", "Inbox management", "Monthly reports"],
    link: "/social-media-management-sri-lanka",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Facebook Advertising Sri Lanka",
    desc: "Run high-performing Facebook campaigns to generate leads and sales.",
    items: ["Lead generation campaigns", "Awareness campaigns", "Remarketing campaigns", "Conversion campaigns", "Advanced audience targeting"],
    link: "/facebook-ads-sri-lanka",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Google Ads Sri Lanka",
    desc: "Capture customers actively searching for your services.",
    items: ["Google Search Ads", "Display Ads", "YouTube Ads", "Keyword research", "Conversion tracking"],
    link: "/google-ads-sri-lanka",
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Video Production for Social Media",
    desc: "Professional video content that increases engagement and ad performance.",
    items: ["Promo videos", "Reels & short videos", "Brand videos", "Ad creatives", "Product videos"],
    link: "/video-production-sri-lanka",
  },
];

const whyUs = [
  { icon: <Lightbulb className="w-5 h-5" />, text: "Strategy-first campaigns" },
  { icon: <TrendingUp className="w-5 h-5" />, text: "Lead generation focused" },
  { icon: <BarChart3 className="w-5 h-5" />, text: "Multi-channel marketing approach" },
  { icon: <Users className="w-5 h-5" />, text: "Creative content team" },
  { icon: <FileText className="w-5 h-5" />, text: "Transparent reporting" },
  { icon: <Rocket className="w-5 h-5" />, text: "Affordable packages in Sri Lanka" },
];

const process = [
  { step: "01", title: "Strategy & Planning", desc: "We analyze your business, competitors, and target audience." },
  { step: "02", title: "Content Creation", desc: "Our creative team designs engaging content for your brand." },
  { step: "03", title: "Campaign Launch", desc: "We launch targeted campaigns across selected platforms." },
  { step: "04", title: "Optimization & Scaling", desc: "Continuous optimization to maximize ROI and results." },
  { step: "05", title: "Reporting", desc: "Transparent monthly reports with actionable insights." },
];

const locations = ["Colombo", "Kandy", "Gampaha", "Negombo", "Kalutara", "Kurunegala", "Sri Lanka Wide"];

const Index = () => (
  <div className="pt-16">
    {/* HERO */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Digital marketing Sri Lanka" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-dark opacity-80" />
      </div>
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl animate-fade-up">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Digital Marketing Agency Sri Lanka
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground leading-tight mb-6">
            Social Media & Digital Marketing Campaign Solutions in{" "}
            <span className="text-gradient-primary">Sri Lanka</span>
          </h1>
          <p className="text-lg text-hero-muted leading-relaxed mb-8 max-w-2xl">
            We help Sri Lankan businesses grow with professional social media management, Facebook advertising campaigns, Google Ads, and high-quality video production designed to generate leads and increase sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition-opacity text-base px-8">
              <Link to="/contact">
                Get Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-hero-foreground/20 text-hero-foreground hover:bg-hero-foreground/10 text-base px-8">
              <Link to="/social-media-management-sri-lanka">Start Your Campaign</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* ABOUT */}
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Results-Driven Digital Marketing Agency in Sri Lanka
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Our digital marketing solutions are built to help businesses increase brand awareness, generate quality leads, and scale faster. We manage your social media pages, run targeted advertising campaigns, and create engaging content that converts.
          </p>
          <p className="text-muted-foreground">
            Perfect for SMEs, salons, education institutes, real estate, healthcare, and service businesses in Sri Lanka.
          </p>
        </div>
      </div>
    </section>

    {/* SERVICES */}
    <section className="section-dark py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-14">
          Our Digital Marketing Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-card/5 border border-border/10 rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                {s.icon}
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-5">{s.desc}</p>
              <ul className="space-y-2 mb-6">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 group-hover:shadow-glow transition-shadow">
                <Link to={s.link}>Learn More <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* WHY CHOOSE US */}
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-14">
          Why Choose Our Digital Marketing Agency
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-card hover:shadow-card-hover transition-shadow border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                {item.icon}
              </div>
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PROCESS */}
    <section className="section-dark py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-14">
          Our Campaign Process
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {process.map((p, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-primary text-primary-foreground font-heading font-bold text-lg flex items-center justify-center mx-auto mb-4">
                {p.step}
              </div>
              <h3 className="font-heading font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* LOCATIONS */}
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
          Digital Marketing Services Across Sri Lanka
        </h2>
        <p className="text-muted-foreground mb-10">
          We provide social media marketing and digital advertising services in:
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {locations.map((loc) => (
            <span
              key={loc}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border shadow-card text-sm font-medium"
            >
              <MapPin className="w-4 h-4 text-primary" /> {loc}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* FINAL CTA + FORM */}
    <section className="section-dark py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Start Your Social Media Marketing Campaign Today
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Generate consistent leads with Facebook ads, Google Ads, and professional social media management in Sri Lanka.
            </p>
            <div className="flex items-center gap-3 text-primary">
              <Phone className="w-5 h-5" />
              <a href="tel:+94771234567" className="font-heading font-semibold text-lg hover:underline">
                +94 77 123 4567
              </a>
            </div>
          </div>
          <div className="bg-card/5 border border-border/10 rounded-2xl p-6 md:p-8">
            <h3 className="font-heading text-xl font-bold mb-2">Book a Free Consultation</h3>
            <p className="text-sm text-muted-foreground mb-6">Fill in the form and our team will contact you within 24 hours.</p>
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
