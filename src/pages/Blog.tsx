import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const blogPosts = [
  {
    slug: "why-social-media-management-important-businesses-sri-lanka",
    title: "Why Social Media Management is Important for Businesses in Sri Lanka",
    excerpt: "Discover why a structured social media strategy is essential for Sri Lankan businesses to grow their reach, engagement, and conversions.",
    date: "2026-02-26",
    keyword: "Social Media Management Sri Lanka",
  },
  {
    slug: "how-consistent-social-media-posting-builds-brand-trust",
    title: "How Consistent Social Media Posting Builds Brand Trust",
    excerpt: "Learn how consistent social media posting builds brand trust, improves algorithm reach, and drives long-term growth for Sri Lankan businesses.",
    date: "2026-02-26",
    keyword: "Social Media Management Sri Lanka",
  },
  {
    slug: "facebook-instagram-management-guide-sri-lankan-brands",
    title: "Facebook & Instagram Management Guide for Sri Lankan Brands",
    excerpt: "A complete guide to managing Facebook and Instagram for Sri Lankan brands — content strategy, visual branding, engagement, and analytics.",
    date: "2026-02-26",
    keyword: "Social Media Management Sri Lanka",
  },
  {
    slug: "complete-guide-facebook-ads-businesses-sri-lanka",
    title: "Complete Guide to Facebook Ads for Businesses in Sri Lanka",
    excerpt: "Learn how Facebook Ads can generate leads and drive sales for Sri Lankan businesses with advanced targeting and campaign optimization.",
    date: "2026-02-26",
    keyword: "Facebook Ads Sri Lanka",
  },
  {
    slug: "why-video-production-essential-business-growth-sri-lanka",
    title: "Why Video Production is Essential for Business Growth in Sri Lanka",
    excerpt: "Discover how professional video production helps Sri Lankan businesses capture attention, improve branding, and increase conversions.",
    date: "2026-02-26",
    keyword: "Video Production Sri Lanka",
  },
  {
    slug: "importance-professional-graphic-design-modern-brands",
    title: "Importance of Professional Graphic Design for Modern Brands",
    excerpt: "Learn why professional graphic design is critical for brand identity, marketing performance, and credibility for Sri Lankan businesses.",
    date: "2026-02-26",
    keyword: "Graphic Design Sri Lanka",
  },
  {
    slug: "how-google-ads-helps-businesses-high-intent-customers",
    title: "How Google Ads Helps Businesses Get High Intent Customers",
    excerpt: "Learn how Google Ads targets high-intent customers through search, display, and YouTube ads to drive conversions.",
    date: "2026-02-26",
    keyword: "Google Ads Sri Lanka",
  },
  {
    slug: "why-seo-important-long-term-business-growth",
    title: "Why SEO is Important for Long-Term Business Growth",
    excerpt: "Learn why SEO is essential for sustainable organic growth, visibility, and lead generation for businesses in Sri Lanka.",
    date: "2026-02-26",
    keyword: "SEO Services Sri Lanka",
  },
  {
    slug: "types-business-videos-increase-engagement-sales",
    title: "Types of Business Videos That Increase Engagement and Sales",
    excerpt: "Explore the types of business videos that boost engagement and sales — promotional, explainer, testimonial, and social media reels.",
    date: "2026-02-26",
    keyword: "Video Production Sri Lanka",
  },
  {
    slug: "how-strong-visual-branding-improves-marketing-performance",
    title: "How Strong Visual Branding Improves Marketing Performance",
    excerpt: "Learn how consistent visual branding improves marketing performance, brand recognition, and conversions.",
    date: "2026-02-26",
    keyword: "Graphic Design Sri Lanka",
  },
  {
    slug: "google-search-ads-vs-display-ads-difference",
    title: "Google Search Ads vs Display Ads — Understanding the Difference",
    excerpt: "Understand the difference between Google Search Ads and Display Ads, and how to use both for maximum ROI.",
    date: "2026-02-26",
    keyword: "Google Ads Sri Lanka",
  },
  {
    slug: "local-seo-strategies-sri-lankan-businesses",
    title: "Local SEO Strategies for Sri Lankan Businesses",
    excerpt: "Learn effective local SEO strategies — Google Business Profile, local keywords, citations, and reviews.",
    date: "2026-02-26",
    keyword: "SEO Services Sri Lanka",
  },
  {
    slug: "how-facebook-campaigns-help-businesses-grow-sri-lanka",
    title: "How Facebook Campaigns Help Businesses Grow in Sri Lanka",
    excerpt: "Learn how structured Facebook campaigns help Sri Lankan businesses reach targeted audiences, generate leads, and drive scalable growth.",
    date: "2026-02-26",
    keyword: "Facebook Ads Sri Lanka",
  },
  {
    slug: "facebook-campaign-strategy-guide-sri-lankan-brands",
    title: "Facebook Campaign Strategy Guide for Sri Lankan Brands",
    excerpt: "A strategic guide to Facebook campaign funnels — awareness, consideration, conversion, and retargeting for Sri Lankan brands.",
    date: "2026-02-26",
    keyword: "Facebook Ads Sri Lanka",
  },
  {
    slug: "how-ad-videos-increase-conversions-businesses",
    title: "How Ad Videos Increase Conversions for Businesses",
    excerpt: "Discover how ad videos drive conversions — hooks, storytelling, platform optimization, and measurable results.",
    date: "2026-02-26",
    keyword: "Video Production Sri Lanka",
  },
  {
    slug: "social-media-design-best-practices-better-engagement",
    title: "Social Media Design Best Practices for Better Engagement",
    excerpt: "Learn social media design best practices — visual hierarchy, consistency, and platform adaptation for better engagement.",
    date: "2026-02-26",
    keyword: "Graphic Design Sri Lanka",
  },
  {
    slug: "google-ads-vs-facebook-ads-which-better-business",
    title: "Google Ads vs Facebook Ads — Which is Better for Your Business?",
    excerpt: "Compare Google Ads and Facebook Ads — intent vs discovery, when to use each, and how to combine both.",
    date: "2026-02-26",
    keyword: "Google Ads Sri Lanka",
  },
  {
    slug: "how-to-rank-on-google-sri-lanka-practical-guide",
    title: "How to Rank on Google in Sri Lanka — Practical Guide",
    excerpt: "A practical guide to ranking on Google — keyword research, on-page SEO, technical optimization, and authority building.",
    date: "2026-02-26",
    keyword: "SEO Services Sri Lanka",
  },
];

const Blog = () => (
  <>
    <SEOHead
      title="Blog | Digital Marketing Insights Sri Lanka"
      description="Expert digital marketing tips, strategies, and insights for businesses in Sri Lanka. Learn about social media, SEO, Google Ads, and more."
      canonical="https://cypherdigital.lk/blog"
    />
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Our Blog</p>
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-4">Digital Marketing Insights</h1>
          <p className="text-muted-foreground">Expert strategies and tips for growing your business online in Sri Lanka.</p>
        </div>
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 hover:shadow-card transition-all group"
            >
              <time className="text-xs text-muted-foreground">{post.date}</time>
              <h2 className="font-heading text-lg font-bold mt-2 mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
              <span className="text-xs font-semibold text-primary mt-3 inline-block">Read More →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Blog;
