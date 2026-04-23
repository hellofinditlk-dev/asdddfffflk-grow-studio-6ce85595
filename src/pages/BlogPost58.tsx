import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const BlogPost58 = () => (
  <>
    <SEOHead
      title="Motion Graphics vs Video Production Sri Lanka 2026 — Which Does Your Brand Need?"
      description="Understanding the difference between motion graphics and video production for Sri Lankan businesses. When to use each, what they cost, and how to choose the right format for your campaign."
      canonical="https://cypherdigital.lk/blog/motion-graphics-vs-video-production-sri-lanka"
    />
    <PageBreadcrumb items={[{ label: "Blog", href: "/blog" }, { label: "Article" }]} />
    <article className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <header className="mb-10">
            <time className="text-xs text-muted-foreground">April 23, 2026</time>
            <h1 className="font-heading text-2xl md:text-3xl font-extrabold mt-3 mb-4">Motion Graphics vs Video Production — Which Does Your Brand Need? (2026)</h1>
          </header>
          <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-5">
            <p>When clients come to Cypher Digital asking for "a video," we often need to ask: do you need motion graphics or video production? These are two distinct services with different costs, timelines, and use cases — choosing wrong wastes budget.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">What Is Motion Graphics?</h2>
            <p>Animated visual elements — text, icons, shapes, and graphics — brought to life through animation. No cameras, no filming, no locations. Created digitally with software like After Effects.</p>
            <p><strong>Common applications:</strong> Animated logo intros, social media animated posts, explainer videos (animated characters/icons), data visualisations, lower thirds, promotional banners, website animations.</p>
            <p><strong>Advantages:</strong> No filming, faster timeline (1–2 weeks), easy to update (change text/colours/data without reshooting), professional results without logistics, consistent with brand colours.</p>
            <p><strong>Use when:</strong> Explaining abstract/complex services, promotional content where filming is too costly, brand identity animations, data-driven content. Our <Link to="/motion-graphics-sri-lanka" className="text-primary font-semibold hover:underline">motion graphics service</Link> covers everything from social animations to full explainer videos.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">What Is Video Production?</h2>
            <p>Filming real people, locations, products, or events using cameras, lighting, and audio — then editing into a polished final product.</p>
            <p><strong>Common applications:</strong> Brand films, product demos, staff/culture videos, customer testimonials, event coverage, ad videos for Facebook/Instagram/YouTube, restaurant/food videos, hotel/property tours.</p>
            <p><strong>Advantages:</strong> Authentic — real people/locations build trust. Emotionally powerful. Versatile (cut into long-form, Reels, Stories, YouTube). Shows actual products and team.</p>
            <p><strong>Use when:</strong> Testimonials and case studies, product demos with real-world use, brand stories needing emotional connection, hotel/restaurant marketing, any content where authenticity is the key selling point. Our <Link to="/video-production-sri-lanka" className="text-primary font-semibold hover:underline">video production service</Link> covers short social content to full brand films.</p>

            <h2 className="font-heading text-xl font-bold text-foreground mt-8">Which Should You Choose?</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border border-border">
                <thead className="bg-muted">
                  <tr><th className="p-2 text-left">Factor</th><th className="p-2 text-left">Motion Graphics</th><th className="p-2 text-left">Video Production</th></tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border"><td className="p-2">Budget (SL)</td><td className="p-2">LKR 15,000 – 80,000</td><td className="p-2">LKR 30,000 – 250,000+</td></tr>
                  <tr className="border-t border-border"><td className="p-2">Timeline</td><td className="p-2">1–2 weeks</td><td className="p-2">2–6 weeks</td></tr>
                  <tr className="border-t border-border"><td className="p-2">Real people needed?</td><td className="p-2">No</td><td className="p-2">Yes</td></tr>
                  <tr className="border-t border-border"><td className="p-2">Filming/location?</td><td className="p-2">No</td><td className="p-2">Yes</td></tr>
                  <tr className="border-t border-border"><td className="p-2">Best for</td><td className="p-2">Concepts, data, processes</td><td className="p-2">People, products, places</td></tr>
                  <tr className="border-t border-border"><td className="p-2">Update ease</td><td className="p-2">Easy</td><td className="p-2">Requires reshoot</td></tr>
                  <tr className="border-t border-border"><td className="p-2">Emotional impact</td><td className="p-2">Medium</td><td className="p-2">High</td></tr>
                </tbody>
              </table>
            </div>

            <p><strong>Often the best answer is both:</strong> Motion graphics for social content, animated ads, and explainers — and video production for brand films, testimonials, and high-impact campaigns. Many of our clients use <Link to="/video-production-sri-lanka" className="text-primary font-semibold hover:underline">video production</Link> for hero campaign content, then our <Link to="/motion-graphics-sri-lanka" className="text-primary font-semibold hover:underline">motion graphics team</Link> creates animated variations and ad cuts from that footage.</p>

            <p><Link to="/contact" className="text-primary font-semibold hover:underline">📞 Book a Free Video Strategy Consultation →</Link></p>
          </div>
          <div className="mt-14 pt-10 border-t border-border">
            <h2 className="font-heading text-lg font-bold mb-5">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Why Video Production is Essential", path: "/blog/why-video-production-essential-business-growth-sri-lanka", desc: "Video for growth." },
                { label: "Types of Business Videos", path: "/blog/types-business-videos-increase-engagement-sales", desc: "Increase engagement." },
                { label: "How Ad Videos Increase Conversions", path: "/blog/how-ad-videos-increase-conversions-businesses", desc: "Use video as ads." },
                { label: "YouTube Ads Sri Lanka Complete Guide", path: "/blog/youtube-ads-sri-lanka-complete-guide", desc: "YouTube advertising." },
              ].map((s) => (
                <Link key={s.path} to={s.path} className="bg-card border border-border rounded-xl p-5 hover:border-primary/20 hover:shadow-card transition-all group">
                  <h3 className="font-heading text-sm font-bold mb-1 group-hover:text-primary transition-colors">{s.label}</h3>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  </>
);
export default BlogPost58;