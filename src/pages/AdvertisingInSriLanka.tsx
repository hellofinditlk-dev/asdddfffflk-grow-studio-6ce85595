import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import InquiryForm from "@/components/InquiryForm";
import { useEffect } from "react";
import { TrendingUp, Users, Eye, Globe, ShoppingCart, ArrowRight, CheckCircle2, Megaphone, BarChart3, Target, Zap, Smartphone } from "lucide-react";
import heroImg from "@/assets/advertising-hero.jpg";
import typesImg from "@/assets/advertising-types.jpg";
import socialImg from "@/assets/advertising-social.jpg";
import benefitsImg from "@/assets/advertising-benefits.jpg";
import industriesImg from "@/assets/advertising-industries.jpg";
import trendsImg from "@/assets/advertising-trends.jpg";

const industries = [
  { title: "Hotel Advertising", desc: "Hotels must promote their services to travelers searching for accommodation online. Digital marketing strategies such as social media campaigns, search engine advertising, and travel content marketing can significantly increase bookings.", link: "/hotel-digital-marketing-sri-lanka", cta: "hotel digital marketing strategies in Sri Lanka", icon: "🏨" },
  { title: "Travel Agency Advertising", desc: "Travel agencies need to inspire potential travelers and promote destinations effectively through digital campaigns.", link: "/travel-agency-digital-marketing-sri-lanka", cta: "travel agency digital marketing in Sri Lanka", icon: "✈️" },
  { title: "Fashion Brand Advertising", desc: "Fashion brands depend heavily on visual marketing strategies and influencer collaborations to build their brand identity.", link: "/fashion-brand-digital-marketing-sri-lanka", cta: "fashion brand digital marketing", icon: "👗" },
  { title: "Restaurant Advertising", desc: "Restaurants attract customers through social media engagement, food photography, and local search marketing.", link: "/restaurant-digital-marketing-sri-lanka", cta: "restaurant digital marketing strategies", icon: "🍽️" },
  { title: "Real Estate Advertising", desc: "Property buyers now search online before contacting real estate agents. Digital marketing allows real estate companies to showcase listings and generate qualified leads.", link: "/real-estate-digital-marketing-sri-lanka", cta: "real estate digital marketing strategies in Sri Lanka", icon: "🏠" },
  { title: "Education Marketing", desc: "Education institutions must promote courses and attract students through digital platforms including social media, SEO, and targeted advertising.", link: "/education-marketing-agency-sri-lanka", cta: "education marketing strategies for institutes", icon: "🎓" },
  { title: "Beauty Salon Advertising", desc: "Beauty salons rely on social media marketing to showcase transformations and promote services to local customers.", link: "/beauty-salon-digital-marketing-sri-lanka", cta: "beauty salon digital marketing strategies", icon: "💇" },
  { title: "Automotive Advertising", desc: "Automotive businesses promote vehicles through targeted advertising, search engine marketing, and video marketing.", link: "/automotive-digital-marketing-sri-lanka", cta: "automotive digital marketing strategies", icon: "🚗" },
  { title: "Small Business Advertising", desc: "Small businesses can use digital marketing to compete with larger companies and reach local customers cost-effectively.", link: "/small-business-digital-marketing-sri-lanka", cta: "small business digital marketing strategies", icon: "🏪" },
  { title: "Ecommerce Advertising", desc: "Online stores depend heavily on advertising to attract traffic and increase online sales through SEO, paid ads, and social media.", link: "/ecommerce-digital-marketing-sri-lanka", cta: "ecommerce digital marketing strategies", icon: "🛒" },
];

const AdvertisingInSriLanka = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Advertising in Sri Lanka: The Complete Guide to Digital Advertising for Businesses",
      description: "Comprehensive guide to advertising in Sri Lanka covering digital advertising, social media ads, search engine advertising, and industry-specific strategies for business growth.",
      image: "https://cypherdigital.lk/og-advertising-sri-lanka.jpg",
      author: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" },
      publisher: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" },
      mainEntityOfPage: "https://cypherdigital.lk/advertising-in-sri-lanka",
      datePublished: "2025-03-16",
      dateModified: "2026-03-16",
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <>
      <SEOHead
        title="Advertising in Sri Lanka | Complete Digital Advertising Guide 2025"
        description="Learn about advertising in Sri Lanka. Comprehensive guide to digital advertising strategies, social media ads, search engine advertising, and industry-specific marketing for Sri Lankan businesses."
        canonical="https://cypherdigital.lk/advertising-in-sri-lanka"
      />

      {/* Hero with background image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Digital advertising dashboard showing marketing analytics for businesses in Sri Lanka" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-bg)/0.92)] to-[hsl(var(--hero-bg)/0.75)]" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-36 text-center max-w-4xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
            Complete Digital Advertising Guide 2025
          </span>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-[hsl(var(--hero-foreground))]">
            <a href="https://cypherdigital.lk/" className="text-primary hover:underline">Advertising in Sri Lanka</a>: The Complete Guide to Digital Advertising for Businesses
          </h1>
          <p className="text-lg md:text-xl text-[hsl(var(--hero-muted))] max-w-3xl mx-auto leading-relaxed">
            Discover how modern digital advertising strategies help Sri Lankan businesses increase brand awareness, attract customers, and drive measurable growth.
          </p>
        </div>
      </section>

      <article className="container mx-auto px-4 py-16 max-w-5xl">

        {/* Introduction */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              <a href="https://cypherdigital.lk/" className="text-primary font-semibold hover:underline">Advertising in Sri Lanka</a> has evolved dramatically over the past decade. Businesses are no longer limited to traditional advertising channels such as television, radio, and newspapers. Today, digital platforms allow businesses to reach their target audience more efficiently through data-driven campaigns.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Companies that invest in modern advertising strategies can increase brand awareness, attract customers, and generate measurable business growth. Whether you run a hotel, restaurant, ecommerce store, or real estate business, advertising plays a critical role in connecting your brand with potential customers.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              This guide explains how advertising works in Sri Lanka and how businesses can use modern marketing strategies to achieve better results.
            </p>
          </div>
        </section>

        {/* Types of Advertising - with image */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Types of Advertising in Sri Lanka</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Businesses in Sri Lanka use several advertising methods depending on their goals, target audience, and marketing budget.
              </p>
              <h3 className="font-heading text-xl font-bold mt-6 mb-3 flex items-center gap-2">
                <Megaphone className="w-5 h-5 text-primary" /> Digital Advertising
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Digital advertising is now the fastest-growing advertising channel in Sri Lanka. Online platforms allow businesses to target specific audiences based on demographics, interests, and online behavior.
              </p>
              <ul className="mt-3 space-y-2">
                {["Search engine advertising", "Social media advertising", "Display advertising", "Video advertising", "Influencer marketing"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={typesImg} alt="Types of digital advertising platforms including search, social media, display and video ads" className="w-full h-auto" loading="lazy" />
            </div>
          </div>

          {/* Social Media Advertising - with image */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg">
              <img src={socialImg} alt="Social media advertising platforms including Facebook, Instagram, TikTok, YouTube and LinkedIn for Sri Lankan businesses" className="w-full h-auto" loading="lazy" />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="font-heading text-xl font-bold mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" /> Social Media Advertising
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Social media platforms have become powerful advertising channels in Sri Lanka. Businesses can promote products and services directly to their audience through engaging content and targeted advertising campaigns.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /><Link to="/facebook-ads-sri-lanka" className="text-primary hover:underline">Facebook advertising</Link></li>
                <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> Instagram advertising</li>
                <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> TikTok advertising</li>
                <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> YouTube advertising</li>
                <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> LinkedIn advertising</li>
              </ul>
            </div>
          </div>

          {/* Search Engine Advertising */}
          <div className="mt-10 max-w-4xl mx-auto bg-secondary rounded-2xl p-8">
            <h3 className="font-heading text-xl font-bold mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" /> Search Engine Advertising
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              <Link to="/google-ads-sri-lanka" className="text-primary hover:underline">Search engine advertising</Link> helps businesses appear when customers search online for products or services. For example, when people search for terms like <strong>advertising agency Sri Lanka</strong>, <strong>digital marketing services Sri Lanka</strong>, or <strong>online marketing Sri Lanka</strong>, search engine ads appear at the top of search results.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Search advertising is highly effective because it targets users who already have strong purchase intent.
            </p>
          </div>
        </section>

        {/* Why Advertising Is Important - with benefits cards */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center mb-8">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Why Advertising Is Important for Businesses</h2>
              <p className="text-muted-foreground leading-relaxed">
                Advertising plays an essential role in business growth and brand development. Businesses that invest in effective advertising strategies often outperform competitors that rely only on traditional marketing.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={benefitsImg} alt="Advertising benefits showing business growth charts, brand awareness, customer engagement and increased sales" className="w-full h-auto" loading="lazy" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Eye, label: "Increased Brand Awareness" },
              { icon: Users, label: "Higher Customer Engagement" },
              { icon: Globe, label: "Improved Online Visibility" },
              { icon: TrendingUp, label: "Increased Website Traffic" },
              { icon: ShoppingCart, label: "Higher Sales & Conversions" },
              { icon: BarChart3, label: "Measurable ROI" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-sm">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Industry-Specific Advertising - with banner image */}
        <section className="mb-16">
          <div className="rounded-2xl overflow-hidden shadow-lg mb-10">
            <img src={industriesImg} alt="Industry-specific digital marketing strategies connecting hotels, travel, fashion, restaurants, real estate, education, beauty, automotive, small business and ecommerce sectors" className="w-full h-auto" loading="lazy" />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-center">Industry-Specific Advertising Strategies</h2>
          <p className="text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            Different industries require different advertising strategies because customer behavior and marketing channels vary across sectors.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {industries.map((item) => (
              <Link
                key={item.link}
                to={item.link}
                className="group block p-6 rounded-2xl border border-border bg-background hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-heading text-lg font-bold mb-1.5 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-2">{item.desc}</p>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Digital Advertising Trends - with image */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Digital Advertising Trends in Sri Lanka</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The advertising industry continues to evolve as new technologies and platforms emerge. Businesses that adapt to these trends can reach modern consumers more effectively.
              </p>
              <div className="space-y-3">
                {[
                  { icon: Smartphone, label: "Short-form video advertising" },
                  { icon: Users, label: "Influencer marketing campaigns" },
                  { icon: Zap, label: "AI-driven advertising" },
                  { icon: Target, label: "Personalized marketing campaigns" },
                  { icon: Smartphone, label: "Mobile-first advertising strategies" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 p-3 rounded-lg bg-secondary">
                    <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={trendsImg} alt="Future digital advertising trends including AI, mobile-first strategy, video marketing and personalization" className="w-full h-auto" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Choosing the Right Agency */}
        <section className="mb-16 bg-secondary rounded-2xl p-8 md:p-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Choosing the Right Advertising Agency</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Working with a professional advertising agency can help businesses develop effective marketing strategies and achieve measurable results. A professional agency provides services such as:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { to: "/social-media-management-sri-lanka", label: "Social Media Management" },
              { to: "/facebook-ads-sri-lanka", label: "Facebook Advertising" },
              { to: "/google-ads-sri-lanka", label: "Google Ads Management" },
              { to: "/seo-services-sri-lanka", label: "Search Engine Optimization" },
              { to: "/video-production-sri-lanka", label: "Video Marketing" },
              { to: "/graphic-design-sri-lanka", label: "Graphic Design" },
            ].map(({ to, label }) => (
              <Link key={to} to={to} className="flex items-center gap-2 p-3 rounded-lg bg-background border border-border hover:border-primary/30 hover:shadow-sm transition-all text-sm font-medium">
                <ArrowRight className="w-3.5 h-3.5 text-primary flex-shrink-0" /> {label}
              </Link>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mt-6">
            These services help businesses maximize their advertising investment and generate measurable ROI.
          </p>
        </section>

        {/* Future of Advertising */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">The Future of Advertising in Sri Lanka</h2>
          <p className="text-muted-foreground leading-relaxed">
            The future of <a href="https://cypherdigital.lk/" className="text-primary font-semibold hover:underline">advertising in Sri Lanka</a> will continue to be driven by digital technologies and data-driven marketing strategies. Businesses that adopt modern advertising methods will have a competitive advantage in reaching customers and building strong brands.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Advertising will continue to evolve as platforms introduce new tools and technologies that improve targeting, personalization, and campaign performance.
          </p>
        </section>

        {/* CTA + Inquiry Form */}
        <section className="bg-[hsl(var(--hero-bg))] text-[hsl(var(--hero-foreground))] rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Grow Your Business with Cypher Digital
              </h2>
              <p className="text-[hsl(var(--hero-muted))] leading-relaxed mb-4">
                Cypher Digital helps businesses grow through innovative digital advertising strategies. Our team specializes in creating customized marketing campaigns designed to increase visibility, generate leads, and drive business growth.
              </p>
              <p className="text-[hsl(var(--hero-muted))] leading-relaxed mb-6">
                If you want to improve your advertising strategy and attract more customers, contact Cypher Digital today to learn how our digital marketing solutions can help your business succeed.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Strategy Development", "Lead Generation", "Brand Growth", "ROI Focused"].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">{tag}</span>
                ))}
              </div>
            </div>
            <div className="bg-background rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold mb-4 text-foreground">Get a Free Consultation</h3>
              <InquiryForm service="Advertising" />
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default AdvertisingInSriLanka;
