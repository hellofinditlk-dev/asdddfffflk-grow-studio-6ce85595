import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, CheckCircle, Megaphone, Target, Video, Search,
  BarChart3, Users, Lightbulb, Rocket, FileText, TrendingUp,
  Phone, ArrowUpRight, Palette, Globe, Eye, MousePointerClick,
  MapPin, ShoppingBag, GraduationCap, Building2, Sparkles, Zap, Star
} from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import SEOHead from "@/components/SEOHead";
import mascotDefault from "@/assets/mascot-default.jpeg";
import mascotSocial from "@/assets/mascot-social.jpeg";
import mascotGlasses from "@/assets/mascot-glasses.jpeg";
import mascotHeadset from "@/assets/mascot-headset.jpeg";

const services = [
  {
    icon: <Megaphone className="w-5 h-5" />,
    title: "Social Media Management",
    desc: "Complete Facebook and Instagram page management to build a strong online presence.",
    items: ["Content planning", "Creative post design", "Post scheduling", "Inbox management", "Monthly reports"],
    link: "/social-media-management-sri-lanka",
    accent: "from-purple-500/10 to-blue-500/10",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Facebook Advertising",
    desc: "Run high-performing Facebook campaigns to generate leads and sales.",
    items: ["Lead generation campaigns", "Awareness campaigns", "Remarketing campaigns", "Conversion campaigns", "Advanced audience targeting"],
    link: "/facebook-ads-sri-lanka",
    accent: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: "Google Ads",
    desc: "Capture customers actively searching for your services.",
    items: ["Google Search Ads", "Display Ads", "YouTube Ads", "Keyword research", "Conversion tracking"],
    link: "/google-ads-sri-lanka",
    accent: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "SEO Services",
    desc: "Boost your Google rankings with on-page and off-page SEO strategies.",
    items: ["On-page SEO", "Off-page SEO", "Technical SEO", "Local SEO", "Keyword research"],
    link: "/seo-services-sri-lanka",
    accent: "from-orange-500/10 to-yellow-500/10",
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Graphic Design",
    desc: "Professional logo, social media, and print design starting from LKR 6,000.",
    items: ["Logo design", "Social media graphics", "Flyers & brochures", "Packaging", "Brand identity"],
    link: "/graphic-design-sri-lanka",
    accent: "from-pink-500/10 to-rose-500/10",
  },
  {
    icon: <Video className="w-5 h-5" />,
    title: "Video Production",
    desc: "Professional video content that increases engagement and ad performance.",
    items: ["Promo videos", "Reels & short videos", "Brand videos", "Ad creatives", "Product videos"],
    link: "/video-production-sri-lanka",
    accent: "from-violet-500/10 to-purple-500/10",
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

const stats = [
  { value: "15,000+", label: "Leads Generated", icon: <Zap className="w-5 h-5" /> },
  { value: "20+", label: "Happy Clients", icon: <Star className="w-5 h-5" /> },
  { value: "2,000+", label: "Campaigns Run", icon: <Rocket className="w-5 h-5" /> },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Cypher Digital",
  description: "Leading digital marketing agency in Sri Lanka offering social media management, Facebook & Google Ads, SEO, video production & graphic design.",
  url: "https://cypherdigital.lk",
  telephone: "+94701772626",
  email: "info@cypherdigital.lk",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressCountry: "LK",
  },
  areaServed: { "@type": "Country", name: "Sri Lanka" },
  priceRange: "$$",
  sameAs: [
    "https://www.facebook.com/cypherdigitallk",
    "https://www.instagram.com/cypherdigitallk",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Cypher Digital",
  url: "https://cypherdigital.lk",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://cypherdigital.lk/blog?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const Index = () => (
  <div className="pt-16">
    <SEOHead
      title="Cypher Digital | Digital Marketing Agency Sri Lanka"
      description="Cypher Digital — leading digital marketing agency in Sri Lanka. Social media management, Facebook & Google Ads, SEO, video production & graphic design. Get a free consultation today."
      canonical="https://cypherdigital.lk"
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

    {/* HERO */}
    <section className="relative py-28 lg:py-36 bg-foreground overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <Sparkles className="w-3.5 h-3.5" />
              Digital Marketing Agency Sri Lanka
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Social Media & Digital Marketing{" "}
              <span className="bg-gradient-to-r from-primary to-[hsl(280,80%,65%)] bg-clip-text text-transparent">Solutions</span>
              {" "}in Sri Lanka
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl animate-fade-up" style={{ animationDelay: "0.3s" }}>
              We help Sri Lankan businesses grow with professional social media management, Facebook advertising, Google Ads, and video production.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all text-sm px-7 h-12 rounded-xl shadow-[0_0_24px_hsl(252_65%_55%/0.3)] hover:shadow-[0_0_32px_hsl(252_65%_55%/0.5)]">
                <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation" target="_blank" rel="noopener noreferrer">
                  Book a Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" className="bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] text-sm px-7 h-12 rounded-xl font-semibold border-none shadow-[0_0_24px_hsl(25_95%_53%/0.3)] hover:shadow-[0_0_32px_hsl(25_95%_53%/0.5)] transition-all">
                <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20get%20a%20free%20quote" target="_blank" rel="noopener noreferrer">
                  Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex justify-center animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px] animate-pulse-glow" />
              <img src={mascotDefault} alt="Cypher Digital mascot" className="relative w-72 h-72 rounded-3xl object-cover shadow-[0_0_40px_hsl(252_65%_55%/0.3)] animate-float" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* STATS */}
    <section className="relative -mt-8 z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl py-8 px-4 text-center shadow-card hover:shadow-card-hover transition-shadow animate-count-up"
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-primary mx-auto mb-3">
                {s.icon}
              </div>
              <div className="font-heading text-2xl md:text-3xl font-extrabold text-foreground mb-1">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ABOUT */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-10 items-center max-w-4xl mx-auto">
          <div className="text-center lg:text-right">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">About Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-6">
              Results-Driven Digital Marketing Agency
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Our digital marketing solutions are built to help businesses increase brand awareness, generate quality leads, and scale faster.
            </p>
          </div>
          <div className="hidden lg:block">
            <img src={mascotGlasses} alt="Cypher Digital mascot with glasses" className="w-48 h-48 rounded-2xl object-cover shadow-card-hover" />
          </div>
          <div className="text-center lg:text-left">
            <p className="text-muted-foreground text-sm">
              Perfect for SMEs, salons, education institutes, real estate, healthcare, and service businesses in Sri Lanka.
            </p>
            <p className="text-muted-foreground text-sm mt-3">
              Explore our comprehensive guide on{" "}
              <Link to="/advertising-in-sri-lanka" className="text-primary font-semibold hover:underline">advertising in Sri Lanka</Link>
              {" "}for market data, costs, and strategies.
            </p>
          </div>
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
              className={`group relative rounded-2xl border border-border bg-card p-7 md:p-8 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 overflow-hidden`}
            >
              {/* Subtle gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {s.icon}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
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
            <div key={i} className="group flex items-center gap-4 bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
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
            <div key={i} className="text-center group relative">
              {/* Connector line */}
              {i < process.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px bg-border" />
              )}
              <div className="w-12 h-12 rounded-full border-2 border-primary/20 text-primary font-heading font-bold text-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:scale-110 transition-all duration-300 relative z-10 bg-background">
                {p.step}
              </div>
              <h3 className="font-heading text-sm font-bold mb-1.5">{p.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* DIGITAL ADVERTISING IN SRI LANKA */}
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Digital Advertising</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-6">
            Advertising and Digital Marketing in Sri Lanka
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Sri Lanka's advertising industry has evolved rapidly with the growth of digital platforms and social media. Businesses today rely on a mix of traditional advertising and digital marketing strategies to reach their audiences effectively — from social media campaigns to search engine marketing and influencer collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-card border border-border rounded-2xl p-7 md:p-8 hover:shadow-card-hover transition-shadow duration-300">
            <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-primary mb-5">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3">Digital Advertising Landscape</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              The digital advertising landscape in Sri Lanka is driven by the increasing number of internet users and social media adoption. Platforms such as Facebook, Instagram, YouTube, and TikTok have become powerful marketing tools for brands targeting Sri Lankan consumers.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Cypher Digital provides a comprehensive overview of{" "}
              <Link to="/advertising-in-sri-lanka" className="text-primary font-semibold hover:underline">advertising in Sri Lanka</Link>
              , helping businesses understand how different advertising platforms perform in the local market.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-7 md:p-8 hover:shadow-card-hover transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Megaphone className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold">Social Media Advertising in Sri Lanka</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Social media advertising has become one of the most effective ways for businesses in Sri Lanka to connect with customers. Millions of Sri Lankans actively use social platforms every day, making them valuable channels for targeted marketing campaigns.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Advertisers reach potential customers through sponsored posts, video ads, influencer collaborations, and remarketing campaigns with advanced targeting based on location, interests, age groups, and purchasing behavior.
            </p>
          </div>
        </div>

        {/* WHY DIGITAL ADVERTISING */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h3 className="font-heading text-2xl font-extrabold mb-3">Why Businesses Use Digital Advertising in Sri Lanka</h3>
            <p className="text-muted-foreground text-sm">
              Companies that combine search engine marketing, social media advertising, and influencer marketing achieve stronger brand recognition and higher conversion rates.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { icon: <Target className="w-4 h-4" />, text: "Target specific audiences by demographics and interests" },
              { icon: <BarChart3 className="w-4 h-4" />, text: "Real-time campaign performance tracking and analytics" },
              { icon: <TrendingUp className="w-4 h-4" />, text: "Cost-effective marketing compared to traditional media" },
              { icon: <Eye className="w-4 h-4" />, text: "Increased brand visibility across multiple platforms" },
              { icon: <MousePointerClick className="w-4 h-4" />, text: "Better engagement with online audiences" },
              { icon: <Rocket className="w-4 h-4" />, text: "Measurable results and detailed campaign analytics" },
            ].map((item, i) => (
              <div key={i} className="group flex items-start gap-3 bg-secondary rounded-xl p-4 hover:bg-primary/5 transition-colors duration-300">
                <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center text-primary shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {item.icon}
                </div>
                <span className="text-sm text-muted-foreground leading-relaxed">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ADVERTISING PLATFORMS */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h3 className="font-heading text-2xl font-extrabold mb-3">Advertising Platforms Available in Sri Lanka</h3>
          <p className="text-muted-foreground text-sm">
            Businesses can promote their brands through a variety of advertising channels, each offering unique advantages depending on marketing objectives and target audience.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {[
            { icon: <Megaphone className="w-5 h-5" />, title: "Social Media Advertising", desc: "Facebook, Instagram, and TikTok campaigns for brand awareness and lead generation.", link: "/facebook-ads-sri-lanka" },
            { icon: <Search className="w-5 h-5" />, title: "Search Engine Advertising", desc: "Google Search and Display Ads to capture high-intent customers.", link: "/google-ads-sri-lanka" },
            { icon: <Users className="w-5 h-5" />, title: "Influencer Marketing", desc: "Collaborate with local influencers to reach niche audiences authentically.", link: "" },
          ].map((item, i) => (
            <div key={i} className="group bg-card border border-border rounded-xl p-6 hover:border-primary/20 hover:shadow-card-hover transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {item.icon}
              </div>
              <h4 className="font-heading text-sm font-bold mb-2">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
              {item.link && (
                <Link to={item.link} className="text-xs text-primary font-semibold hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* INDUSTRIES */}
        <div className="relative bg-foreground text-white rounded-2xl p-8 md:p-12 mb-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
          <div className="relative z-10">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Industries</p>
              <h3 className="font-heading text-2xl font-extrabold mb-3">Top Advertising Industries in Sri Lanka</h3>
              <p className="text-white/50 text-sm">
                Many companies in Sri Lanka now allocate a significant portion of their marketing budget to digital and social media advertising, as it provides measurable results compared to traditional channels.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { icon: <GraduationCap className="w-4 h-4" />, label: "Education Institutes" },
                { icon: <Building2 className="w-4 h-4" />, label: "Real Estate Companies" },
                { icon: <ShoppingBag className="w-4 h-4" />, label: "Ecommerce Brands" },
                { icon: <TrendingUp className="w-4 h-4" />, label: "Financial Services" },
                { icon: <MapPin className="w-4 h-4" />, label: "Tourism Companies" },
                { icon: <Phone className="w-4 h-4" />, label: "Mobile Retailers" },
                { icon: <Palette className="w-4 h-4" />, label: "Beauty & Salons" },
                { icon: <Lightbulb className="w-4 h-4" />, label: "Startup Brands" },
              ].map((item, i) => (
                <div key={i} className="group flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
                  <span className="text-primary">{item.icon}</span>
                  <span className="text-sm font-medium text-white/80">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ADVERTISING INSIGHTS CTA */}
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-heading text-xl font-extrabold mb-4">Advertising Insights and Market Data</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Cypher Digital provides insights into the Sri Lankan advertising industry, including digital marketing trends, platform usage statistics, and audience behavior. Access to these insights helps businesses make informed marketing decisions and develop effective advertising strategies.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/advertising-in-sri-lanka" className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-all shadow-[0_0_16px_hsl(252_65%_55%/0.2)] hover:shadow-[0_0_24px_hsl(252_65%_55%/0.4)]">
              Advertising in Sri Lanka Guide <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/blog" className="inline-flex items-center gap-2 bg-card border border-border text-foreground text-sm font-semibold px-5 py-2.5 rounded-xl hover:border-primary/20 transition-colors">
              Read Our Blog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* FINAL CTA + FORM */}
    <section className="relative py-20 lg:py-28 bg-foreground text-white overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/15 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Get Started</p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold mb-6">
              Start Your Campaign Today
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Generate consistent leads with Facebook ads, Google Ads, and professional social media management in Sri Lanka.
            </p>
            <div className="flex items-center gap-5 mb-6 bg-white/5 border border-white/10 rounded-2xl p-4">
              <img src={mascotHeadset} alt="Cypher Digital support mascot" className="w-16 h-16 rounded-xl object-cover hidden sm:block" />
              <div>
                <p className="text-white/80 text-sm font-medium mb-2">💬 Ready to grow? Drop us a message — we reply fast!</p>
                <div className="flex items-center gap-3 text-white/70">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+94701772626" className="font-heading font-semibold hover:text-primary transition-colors">
                    +94 70 177 2626
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 md:p-8 backdrop-blur-sm">
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
