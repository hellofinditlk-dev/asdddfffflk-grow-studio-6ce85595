import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import InquiryForm from "@/components/InquiryForm";
import { useEffect } from "react";
import {
  Megaphone, CheckCircle, BarChart3, Users, TrendingUp, Zap, Shield, Clock,
  Target, Smartphone, Eye, Globe, Layers, MousePointerClick, Brain,
  MessageCircle, Video, Share2, Heart, MapPin
} from "lucide-react";
import mascotGlasses from "@/assets/mascot-glasses.jpeg";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "30+", label: "Pages Managed" },
  { value: "500+", label: "Posts Created" },
  { value: "3x", label: "Engagement Growth" },
  { value: "Daily", label: "Monitoring" },
];

const features = [
  "Content planning & monthly editorial calendar",
  "Creative post design — graphics, carousels & infographics",
  "Daily or weekly post scheduling & publishing",
  "Inbox & comment management with quick response",
  "Instagram & Facebook Story creation",
  "Reels & short-form video content",
  "Monthly performance reports with analytics",
  "Competitor analysis & benchmarking",
  "Hashtag strategy & optimization",
  "Brand voice development & consistency",
];

const benefits = [
  "Build a consistent, professional brand presence across Facebook & Instagram",
  "Save 15+ hours per week while maintaining active, engaging social profiles",
  "Increase engagement rates by 2–5x with professionally designed content",
  "Convert followers into paying customers with strategic CTAs",
  "Stay ahead of competitors with data-driven content planning",
  "Never miss a customer message with dedicated inbox management",
];

const processSteps = [
  { title: "Brand Audit", desc: "We review your current social presence, audience, and competitors." },
  { title: "Content Strategy", desc: "A tailored content plan with themes, formats, and posting schedule." },
  { title: "Design & Publish", desc: "Our creative team designs and publishes engaging content daily/weekly." },
  { title: "Engage & Report", desc: "Community management, inbox handling, and monthly analytics reports." },
];

const flexiblePoints = [
  "Affordable monthly packages starting from LKR 60,000",
  "Choose 12, 16, or 20+ posts per month",
  "No annual contracts — flexible month-to-month plans",
  "Add-on services like reels or LinkedIn at low cost",
  "Save up to 70% compared to hiring an in-house social media manager",
  "Free brand audit before you commit",
];

const trustPoints = [
  { icon: <Shield className="w-5 h-5" />, title: "No Lock-in Contracts", desc: "Flexible monthly plans with no long-term commitments." },
  { icon: <BarChart3 className="w-5 h-5" />, title: "Transparent Reporting", desc: "Detailed monthly reports so you always know your ROI." },
  { icon: <Clock className="w-5 h-5" />, title: "Fast Turnaround", desc: "Campaigns go live within 3–5 business days." },
  { icon: <Users className="w-5 h-5" />, title: "Dedicated Manager", desc: "A single point of contact for all your marketing needs." },
];

const faqs = [
  { q: "What is social media marketing?", a: "Social media marketing involves promoting businesses through platforms like Facebook, Instagram, TikTok, and LinkedIn to increase brand awareness, generate leads, and drive sales." },
  { q: "Why is social media marketing important in Sri Lanka?", a: "Because millions of Sri Lankans are active daily on social media platforms. It's the most cost-effective way for businesses to reach, engage, and convert their target audience." },
  { q: "Which social media platform is best for my business?", a: "It depends on your business type. B2C brands typically do best on Instagram and Facebook, while B2B companies benefit from LinkedIn. TikTok is ideal for reaching younger audiences with viral content." },
  { q: "How many posts do you create per month?", a: "Our standard packages include 12–20 posts per month depending on the plan. This includes a mix of graphics, carousels, stories, and reels to keep your audience engaged." },
  { q: "Do you handle customer messages and comments?", a: "Yes! Inbox and comment management is included. We respond to customer queries professionally and escalate important messages to you immediately." },
  { q: "Which platforms do you manage?", a: "We primarily manage Facebook and Instagram pages. We can also manage LinkedIn, TikTok, and Google Business Profile as add-on services." },
  { q: "Can I approve posts before they go live?", a: "Absolutely. We share a monthly content calendar for your approval before publishing. You'll always have final say on what gets posted." },
  { q: "Do you create video content too?", a: "Yes, our packages include Reels and Story content. For more advanced video production like promotional videos, check our Video Production service." },
  { q: "How long does it take to see results?", a: "Organic social media growth typically shows meaningful results within 2–3 months. Paid social media advertising delivers immediate traffic and conversions from day one." },
  { q: "Is social media management affordable for small businesses?", a: "Yes! Our packages are specifically designed for Sri Lankan small businesses and startups. You get professional content, scheduling, and community management at a fraction of the cost of a full-time hire — starting from LKR 60,000/month." },
  { q: "What is the best social media marketing agency in Sri Lanka?", a: "Cypher Digital is a leading social media marketing agency in Sri Lanka providing ROI-driven strategies, professional content creation, community management, and performance-based advertising tailored for Sri Lankan businesses." },
];

const allServices = [
  { name: "Facebook Advertising", path: "/facebook-ads-sri-lanka", keyword: "Facebook Ads Sri Lanka", desc: "High-performing Facebook & Instagram ad campaigns for lead generation and brand awareness in Sri Lanka." },
  { name: "Google Ads", path: "/google-ads-sri-lanka", keyword: "Google Ads Sri Lanka", desc: "Google Search, Display & YouTube advertising to capture high-intent customers across Sri Lanka." },
  { name: "SEO", path: "/seo-services-sri-lanka", keyword: "SEO Services Sri Lanka", desc: "On-page and off-page search engine optimization to rank higher on Google in Sri Lanka." },
  { name: "Graphic Design", path: "/graphic-design-sri-lanka", keyword: "Graphic Design Sri Lanka", desc: "Professional logo design, social media graphics, and print design for Sri Lankan brands." },
  { name: "Video Production", path: "/video-production-sri-lanka", keyword: "Video Production Sri Lanka", desc: "Professional video content for ads, social media, and brand storytelling in Sri Lanka." },
  { name: "TikTok Marketing", path: "/tiktok-marketing-sri-lanka", keyword: "TikTok Marketing Sri Lanka", desc: "Viral TikTok campaigns, content creation, and ads for Sri Lankan businesses." },
];

const tocItems = [
  { id: "what-is", label: "What is Social Media Marketing?" },
  { id: "why-important", label: "Why It's Important in Sri Lanka" },
  { id: "platforms", label: "Top Platforms" },
  { id: "services", label: "Our Services" },
  { id: "whats-included", label: "What's Included" },
  { id: "process", label: "Our Process" },
  { id: "content-strategy", label: "Content Strategy" },
  { id: "advertising-strategy", label: "Advertising Strategy" },
  { id: "industry-strategies", label: "Industry-Specific Strategies" },
  { id: "influencer", label: "Influencer Marketing" },
  { id: "advanced", label: "Advanced Strategies" },
  { id: "pricing", label: "Pricing & Packages" },
  { id: "faqs", label: "FAQs" },
];

const SocialMediaManagement = () => {
  useEffect(() => {
    const scripts: HTMLScriptElement[] = [];
    const addSchema = (data: object) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
      scripts.push(s);
    };

    addSchema({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Social Media Marketing Sri Lanka",
      provider: {
        "@type": "LocalBusiness",
        name: "Cypher Digital",
        url: "https://cypherdigital.lk",
        telephone: "+94701772626",
        address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
      },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      serviceType: "Social Media Marketing",
      description: "Professional social media marketing services in Sri Lanka including content creation, social media advertising, community management, and performance analytics for businesses across all industries.",
      url: "https://cypherdigital.lk/social-media-management-sri-lanka",
    });

    addSchema({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    });

    addSchema({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk" },
        { "@type": "ListItem", position: 2, name: "Social Media Marketing Sri Lanka", item: "https://cypherdigital.lk/social-media-management-sri-lanka" },
      ],
    });

    addSchema({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Social Media Marketing Sri Lanka | Cypher Digital",
      description: "Professional social media marketing services in Sri Lanka. Content creation, social media advertising, community management & analytics from LKR 60,000/month.",
      url: "https://cypherdigital.lk/social-media-management-sri-lanka",
      dateModified: "2026-03-19",
      publisher: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" },
    });

    return () => { scripts.forEach((s) => s.remove()); };
  }, []);

  return (
    <div className="pt-16">
      <SEOHead
        title="Social Media Management Sri Lanka | Social Media Marketing"
        description="Social Media Management Sri Lanka with expert Social Media Marketing Sri Lanka services to grow your brand, boost engagement, and increase leads"
        canonical="https://cypherdigital.lk/social-media-management-sri-lanka"
      />

      {/* Breadcrumb */}
      <nav className="bg-secondary border-b border-border" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-foreground font-medium">Social Media Marketing Sri Lanka</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-foreground py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <Megaphone className="w-7 h-7" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Professional Page Management</p>
            <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Social Media Marketing Sri Lanka – Grow Your Business with Expert Social Media Management
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              Social media marketing in Sri Lanka has become one of the most powerful ways for businesses to reach, engage, and convert customers online. At Cypher Digital, we provide <strong className="text-white/80">data-driven social media marketing services in Sri Lanka</strong> designed to increase brand awareness, generate leads, and drive measurable business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-sm px-7 h-12 rounded-xl">
                <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20social%20media%20marketing" target="_blank" rel="noopener noreferrer">
                  Book a Free Consultation
                </a>
              </Button>
              <Button asChild size="lg" className="bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] text-sm px-7 h-12 rounded-xl font-semibold border-none">
                <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20get%20a%20free%20quote%20for%20social%20media%20marketing" target="_blank" rel="noopener noreferrer">
                  Get a Free Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
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

      {/* Snippet Bait + TOC */}
      <section className="py-16 lg:py-20" id="what-is">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Definition Box - Featured Snippet Target */}
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 mb-12">
              <h2 className="font-heading text-xl font-extrabold mb-3">What is Social Media Marketing?</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>Social media marketing</strong> is the process of using social media platforms like Facebook, Instagram, TikTok, LinkedIn, and YouTube to promote a business, build brand awareness, engage with customers, and drive sales. It includes organic content creation, community management, paid social media advertising, influencer partnerships, and performance analytics.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-heading text-sm font-bold mb-4">📋 Table of Contents</h3>
              <div className="grid sm:grid-cols-2 gap-1">
                {tocItems.map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="text-xs text-muted-foreground hover:text-primary transition-colors py-1">
                    → {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Important */}
      <section className="py-16 lg:py-20 bg-secondary" id="why-important">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-6">Why Social Media Marketing is Important in Sri Lanka</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Sri Lanka has a rapidly growing digital audience, with millions of users active daily on social media platforms. Businesses across every industry — from restaurants and fashion brands to real estate companies and educational institutions — are leveraging social media to connect with customers, build brands, and drive sales.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {[
                { icon: <Smartphone className="w-5 h-5" />, title: "High Mobile Usage", desc: "Sri Lanka is a mobile-first market. Most social media engagement happens on smartphones." },
                { icon: <TrendingUp className="w-5 h-5" />, title: "Growing Adoption", desc: "Social media usage continues to grow rapidly across all age demographics in Sri Lanka." },
                { icon: <Video className="w-5 h-5" />, title: "Video Dominance", desc: "Short-form video content on Reels and TikTok drives the highest engagement rates." },
                { icon: <Heart className="w-5 h-5" />, title: "Influencer-Driven Purchasing", desc: "Sri Lankan consumers increasingly trust influencer recommendations when making purchase decisions." },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-heading text-sm font-bold mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-sm font-bold mb-3 text-destructive">❌ Without Social Media Marketing</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>• Low brand visibility and awareness</li>
                  <li>• Missed customer engagement opportunities</li>
                  <li>• Falling behind competitors who are active online</li>
                  <li>• No direct channel to communicate with customers</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-sm font-bold mb-3 text-primary">✔ With the Right Strategy</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>• Build strong brand awareness and recognition</li>
                  <li>• Generate leads and drive sales consistently</li>
                  <li>• Engage directly with customers in real-time</li>
                  <li>• Create long-term customer loyalty and advocacy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 lg:py-20" id="platforms">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Platform Expertise</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Platforms That Dominate Social Media Marketing in Sri Lanka</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { emoji: "📘", title: "Facebook Marketing", desc: "Still the largest platform in Sri Lanka with the widest audience reach. Best for lead generation, advertising, promotions, and community building.", best: "Lead generation, advertising, promotions" },
                { emoji: "📸", title: "Instagram Marketing", desc: "Highly visual platform perfect for brands that rely on aesthetics. Ideal for fashion, food, lifestyle, beauty, and travel brands in Sri Lanka.", best: "Branding, fashion, food, lifestyle" },
                { emoji: "🎵", title: "TikTok Marketing", desc: "Fastest-growing platform in Sri Lanka. Short-form video content drives viral reach and massive engagement, especially with younger audiences.", best: "Viral content, youth audience, trends" },
                { emoji: "💼", title: "LinkedIn Marketing", desc: "The leading professional networking platform. Essential for B2B marketing, corporate branding, recruitment, and thought leadership.", best: "B2B marketing, corporate branding" },
              ].map((platform, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 transition-colors">
                  <div className="text-3xl mb-3">{platform.emoji}</div>
                  <h3 className="font-heading text-base font-bold mb-2">{platform.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{platform.desc}</p>
                  <p className="text-xs"><span className="font-semibold text-primary">Best for:</span> {platform.best}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 lg:py-20 bg-secondary" id="services">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">What We Offer</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Social Media Marketing Services We Offer in Sri Lanka</h2>
            </div>
            <div className="space-y-5">
              {[
                { icon: <Target className="w-5 h-5" />, title: "Social Media Strategy Development", desc: "We create a tailored social media strategy based on your industry, target audience, and business goals. Every campaign starts with research, competitor analysis, and clear KPIs." },
                { icon: <Layers className="w-5 h-5" />, title: "Content Creation & Management", desc: "Our creative team designs and produces posts, Reels, Stories, carousels, and videos that resonate with your audience and reflect your brand identity." },
                { icon: <Megaphone className="w-5 h-5" />, title: "Social Media Advertising", desc: "We run high-performance paid campaigns on Facebook Ads, Instagram Ads, and TikTok Ads to drive traffic, generate leads, and increase sales." },
                { icon: <MessageCircle className="w-5 h-5" />, title: "Community Management", desc: "We handle comments, direct messages, and customer queries professionally — building trust and keeping your audience engaged around the clock." },
                { icon: <BarChart3 className="w-5 h-5" />, title: "Analytics & Reporting", desc: "We track engagement, reach, conversions, and ROI with detailed monthly performance reports so you always know what's working." },
              ].map((service, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 flex items-start gap-4 hover:border-primary/20 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">{service.icon}</div>
                  <div>
                    <h3 className="font-heading text-sm font-bold mb-1">{service.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included + Form */}
      <section className="py-20 lg:py-28" id="whats-included">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-8">What's Included in Our Social Media Marketing Packages</h2>
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
                  Tell us about your business and we'll create a custom social media marketing strategy.
                </p>
                <InquiryForm service="social media management" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-28 bg-secondary" id="process">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">How It Works</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Our Social Media Marketing Process</h2>
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

      {/* Content Strategy */}
      <section className="py-16 lg:py-20" id="content-strategy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-6">Content Strategy for Social Media Success in Sri Lanka</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Content is the foundation of social media marketing. The right content strategy attracts followers, builds engagement, and converts audiences into paying customers. Here's what works best for Sri Lankan businesses:
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: <Video className="w-5 h-5" />, title: "Short-Form Videos", desc: "Reels and TikTok videos generate the highest engagement. Quick, entertaining, and educational videos drive massive organic reach." },
                { icon: <Brain className="w-5 h-5" />, title: "Educational Content", desc: "Posts that teach, inform, or solve problems build authority and trust with your audience." },
                { icon: <Heart className="w-5 h-5" />, title: "Entertaining Posts", desc: "Memes, trending audio, and relatable content create shareable moments that expand your reach." },
                { icon: <Users className="w-5 h-5" />, title: "User-Generated Content", desc: "Customer photos, reviews, and testimonials provide authentic social proof that drives purchasing decisions." },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-heading text-sm font-bold mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advertising Strategy / Funnel */}
      <section className="py-16 lg:py-20 bg-secondary" id="advertising-strategy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-6">Social Media Advertising Strategy</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Organic reach alone is not enough. A paid social media advertising strategy amplifies your content and delivers measurable results. We use a full-funnel approach to maximize ROI:
            </p>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { label: "Top Funnel", title: "Awareness", desc: "Brand awareness campaigns, video views, and reach campaigns to introduce your brand to new audiences.", color: "bg-primary/10 text-primary" },
                { label: "Middle Funnel", title: "Engagement", desc: "Retargeting campaigns, content engagement, and lead generation ads to nurture interested audiences.", color: "bg-[hsl(25,95%,53%)]/10 text-[hsl(25,95%,53%)]" },
                { label: "Bottom Funnel", title: "Conversion", desc: "Conversion-optimized campaigns, dynamic product ads, and direct response ads to drive sales.", color: "bg-green-500/10 text-green-600" },
              ].map((stage, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 text-center">
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${stage.color}`}>{stage.label}</span>
                  <h3 className="font-heading text-base font-bold mb-2">{stage.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Strategies */}
      <section className="py-16 lg:py-20" id="industry-strategies">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Industry Expertise</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Industry-Specific Social Media Strategies</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { emoji: "🍽️", title: "Restaurants & Cafés", desc: "Food photography, behind-the-scenes content, special offers, and location-based targeting.", link: "/restaurant-digital-marketing-sri-lanka" },
                { emoji: "👗", title: "Fashion & Apparel", desc: "Influencer collaborations, outfit reels, collection launches, and Instagram shopping.", link: "/fashion-brand-digital-marketing-sri-lanka" },
                { emoji: "🎓", title: "Education & Training", desc: "Student testimonials, course promotions, intake campaigns, and lead generation.", link: "/education-marketing-agency-sri-lanka" },
                { emoji: "🏠", title: "Real Estate", desc: "Virtual property tours, listing promotions, lead ads, and video walkthroughs.", link: "/real-estate-digital-marketing-sri-lanka" },
                { emoji: "🏨", title: "Hotels & Tourism", desc: "Destination content, booking promotions, influencer stays, and travel inspiration.", link: "/hotel-digital-marketing-sri-lanka" },
                { emoji: "💇", title: "Beauty & Wellness", desc: "Transformation reels, treatment showcases, before/after content, and local targeting.", link: "/beauty-salon-digital-marketing-sri-lanka" },
              ].map((industry, i) => (
                <Link key={i} to={industry.link} className="bg-card border border-border rounded-xl p-5 flex items-start gap-4 hover:border-primary/20 transition-colors group">
                  <span className="text-2xl">{industry.emoji}</span>
                  <div>
                    <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">{industry.title}</h3>
                    <p className="text-xs text-muted-foreground">{industry.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Influencer Marketing */}
      <section className="py-16 lg:py-20 bg-secondary" id="influencer">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-6">Influencer Marketing in Sri Lanka</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Influencers play a major role in social media marketing success. Sri Lankan consumers increasingly trust influencer recommendations, making influencer partnerships one of the most effective ways to build brand awareness and drive conversions.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-sm font-bold mb-2">Macro Influencers</h3>
                <p className="text-xs text-muted-foreground">Large following, broad reach. Ideal for brand awareness campaigns and product launches.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-sm font-bold mb-2">Micro Influencers</h3>
                <p className="text-xs text-muted-foreground">Smaller but highly engaged audiences. Higher conversion rates and more affordable partnerships.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Strategies */}
      <section className="py-16 lg:py-20" id="advanced">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Stay Ahead</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Advanced Social Media Marketing Strategies</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: <Video className="w-5 h-5" />, title: "Video-First Strategy", desc: "Reels and TikTok dominate engagement. We prioritize short-form video content that captures attention and drives sharing." },
                { icon: <Clock className="w-5 h-5" />, title: "Consistency & Scheduling", desc: "Regular posting at optimal times builds momentum and keeps your brand top-of-mind with your audience." },
                { icon: <MessageCircle className="w-5 h-5" />, title: "Engagement Optimization", desc: "Actively replying to comments, running polls, and creating interactive content boosts algorithm visibility." },
                { icon: <MousePointerClick className="w-5 h-5" />, title: "Retargeting Campaigns", desc: "Show targeted ads to users who have already interacted with your brand — dramatically improving conversion rates." },
              ].map((strategy, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5 flex items-start gap-4 hover:border-primary/20 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">{strategy.icon}</div>
                  <div>
                    <h3 className="font-heading text-sm font-bold mb-1">{strategy.title}</h3>
                    <p className="text-xs text-muted-foreground">{strategy.desc}</p>
                  </div>
                </div>
              ))}
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
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center text-primary mx-auto mb-4">{tp.icon}</div>
                <h3 className="font-heading text-sm font-bold mb-1.5">{tp.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{tp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28" id="faqs">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">FAQ</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Frequently Asked Questions About Social Media Marketing in Sri Lanka</h2>
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

      {/* Pricing */}
      <section className="py-20 lg:py-28 bg-secondary" id="pricing">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Affordable & Scalable</p>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Flexible & Cost-Effective Social Media Marketing Packages</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed text-center mb-10">
              Managing social media shouldn't cost a fortune. Cypher Digital offers affordable, flexible social media management packages perfect for small businesses, startups, and growing brands across Sri Lanka. Get professional content and engagement without the overhead of hiring an in-house team.
            </p>
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

      {/* Target Locations */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-lg font-bold mb-4">Social Media Marketing Services Across Sri Lanka</h2>
            <p className="text-xs text-muted-foreground mb-6">We help businesses grow their social media presence in <strong>Colombo</strong>, <strong>Negombo</strong>, <strong>Kandy</strong>, <strong>Galle</strong>, <strong>Dehiwala</strong>, <strong>Maharagama</strong>, <strong>Jaffna</strong>, <strong>Kurunegala</strong>, <strong>Matara</strong>, and across all of Sri Lanka.</p>
          </div>
        </div>
      </section>

      {/* Advertising Guide Link */}
      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Looking for comprehensive data on{" "}
            <Link to="/advertising-in-sri-lanka" className="text-primary font-semibold hover:underline">advertising in Sri Lanka</Link>?
            {" "}Our complete guide covers market statistics, advertising costs, best platforms, targeting strategies, and industry-specific insights for Sri Lankan businesses.
          </p>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Explore More</p>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold">Other Digital Marketing Services in Sri Lanka</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {allServices.slice(0, 3).map((s) => (
              <Link
                key={s.path}
                to={s.path}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 hover:shadow-card transition-all group"
              >
                <h3 className="font-heading text-sm font-bold mb-2 group-hover:text-primary transition-colors">{s.keyword}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </Link>
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
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-6">Ready to Dominate Social Media in Sri Lanka?</h2>
              <p className="text-white/50 mb-8 max-w-xl text-sm leading-relaxed">
                Stop competing blindly and start building a powerful social media presence. Partner with Cypher Digital and grow your business with expert social media marketing in Sri Lanka.
              </p>
              <div className="flex items-center gap-4 mb-6 bg-white/5 border border-white/10 rounded-2xl p-4">
                <img src={mascotGlasses} alt="Cypher Digital mascot" className="w-14 h-14 rounded-xl object-cover hidden sm:block" />
                <div>
                  <p className="text-white/80 text-sm font-medium mb-2">💬 Don't be shy — say hi! We'd love to hear about your goals.</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 rounded-xl h-11 px-6">
                      <a href="https://wa.me/94701772626?text=Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20social%20media%20marketing" target="_blank" rel="noopener noreferrer">Book Free Consultation</a>
                    </Button>
                    <Button asChild className="border border-white/20 bg-transparent rounded-xl h-11 px-6 hover:bg-white/5" style={{ color: "white" }}>
                      <a href="https://wa.me/94701772626" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7 md:p-8">
              <h3 className="font-heading text-lg font-bold text-white mb-1.5">Send Us Your Details</h3>
              <p className="text-sm text-white/40 mb-6">We'll reach out to you on WhatsApp.</p>
              <InquiryForm service="social media management" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaManagement;