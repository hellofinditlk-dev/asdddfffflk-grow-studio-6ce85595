import ServicePageLayout from "@/components/ServicePageLayout";
import { Search } from "lucide-react";

const SEOServices = () => (
  <ServicePageLayout
    metaTitle="SEO Services Sri Lanka | On-Page & Off-Page SEO from LKR 25,000"
    metaDescription="Boost your Google rankings with professional SEO services in Sri Lanka. On-page optimization, link building & technical SEO. Affordable packages from LKR 25,000/month."
    canonical="https://cypherdigital.lk/seo-services-sri-lanka"
    title="SEO Services Sri Lanka"
    subtitle="On-Page & Off-Page SEO"
    description="Boost your website's Google rankings with our comprehensive SEO services. We combine on-page optimization and off-page strategies to drive organic traffic and generate long-term leads for your Sri Lankan business — affordably and effectively."
    icon={<Search className="w-7 h-7" />}
    serviceName="SEO"
    stats={[
      { value: "50+", label: "Websites Optimized" },
      { value: "300%", label: "Avg Traffic Growth" },
      { value: "Top 10", label: "Google Rankings" },
      { value: "6 Months", label: "Avg Results Timeline" },
    ]}
    features={[
      "Comprehensive website SEO audit & analysis",
      "Keyword research & competitor gap analysis",
      "On-page optimization — meta titles, descriptions & headings",
      "Technical SEO — site speed, mobile-friendliness & Core Web Vitals",
      "Content optimization & internal linking strategy",
      "Schema markup & structured data implementation",
      "Google Search Console & Analytics setup",
      "High-quality backlink building & outreach",
      "Local SEO & Google Business Profile optimization",
      "Monthly SEO performance reports with ranking data",
      "Image optimization & alt tag implementation",
      "URL structure & sitemap optimization",
    ]}
    benefits={[
      "Get found by customers searching for your services on Google — 24/7 visibility",
      "Drive free, organic traffic without paying for every click like paid ads",
      "Build long-term authority and trust with higher search engine rankings",
      "Outrank your competitors for high-value local and national keywords",
      "Increase leads and sales with traffic that has real purchase intent",
      "Improve website speed, UX, and mobile experience as part of technical SEO",
    ]}
    processSteps={[
      { title: "SEO Audit", desc: "We analyze your website's current SEO health, rankings, and competitor landscape." },
      { title: "Strategy & Keywords", desc: "We create a keyword-driven SEO strategy targeting high-intent search terms." },
      { title: "On-Page & Technical", desc: "We optimize your site structure, content, meta tags, speed, and mobile UX." },
      { title: "Off-Page & Report", desc: "We build quality backlinks, citations, and deliver monthly ranking reports." },
    ]}
    flexibleDescription="SEO is the most cost-effective long-term marketing investment. Cypher Digital offers affordable, flexible SEO packages for Sri Lankan businesses — from one-time audits to ongoing monthly optimization. No long-term lock-ins, just measurable results that compound over time."
    flexiblePoints={[
      "Monthly SEO packages starting from LKR 25,000",
      "One-time SEO audit available for new websites",
      "No long-term contracts — month-to-month flexibility",
      "Transparent reporting so you see exactly what you're paying for",
      "Scalable plans as your rankings and traffic grow",
      "Free initial website SEO audit for new clients",
    ]}
    faqs={[
      { q: "What is the difference between on-page and off-page SEO?", a: "On-page SEO covers everything on your website — meta tags, content, headings, site speed, mobile optimization, and internal links. Off-page SEO focuses on external factors like backlinks, social signals, and online citations that build your site's authority and trust with Google." },
      { q: "How long does SEO take to show results?", a: "SEO is a long-term strategy. Most businesses start seeing noticeable improvements in rankings and traffic within 3–6 months. However, competitive industries may take longer. The results compound over time, making SEO one of the highest-ROI marketing channels." },
      { q: "Do you guarantee first page rankings?", a: "No ethical SEO agency can guarantee #1 rankings, as Google's algorithm considers 200+ factors. However, we consistently achieve top 10 rankings for targeted keywords through proven white-hat strategies. We focus on driving real traffic and leads, not empty promises." },
      { q: "Is SEO better than Google Ads?", a: "Both have their place. Google Ads delivers instant visibility but stops when you stop paying. SEO takes longer to build but delivers free, ongoing traffic. We recommend combining both — Google Ads for immediate leads and SEO for sustainable long-term growth." },
      { q: "Do you offer local SEO for businesses in Sri Lanka?", a: "Yes! Local SEO is one of our core strengths. We optimize your Google Business Profile, build local citations, and target location-specific keywords to help you rank for searches like 'near me' and city-based queries across Sri Lanka." },
      { q: "Is SEO affordable for small businesses?", a: "Absolutely. Our packages start from LKR 25,000/month, making professional SEO accessible for small businesses. Unlike paid ads where you pay per click, SEO traffic is free once you rank — making it the most cost-effective marketing channel long-term." },
    ]}
  />
);

export default SEOServices;
