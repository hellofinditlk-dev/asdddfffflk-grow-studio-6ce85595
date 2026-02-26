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
