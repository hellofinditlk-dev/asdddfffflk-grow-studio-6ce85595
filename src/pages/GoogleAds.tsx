import ServicePageLayout from "@/components/ServicePageLayout";
import { Search } from "lucide-react";

const GoogleAds = () => (
  <ServicePageLayout
    metaTitle="Google Ads Management Sri Lanka | Search & Display Ads"
    metaDescription="Google Ads management in Sri Lanka. Search Ads, Display Ads & YouTube Ads with 5x average ROAS. Affordable campaigns from LKR 50,000/month. Free account audit."
    canonical="https://cypherdigital.lk/google-ads-sri-lanka"
    title="Google Ads Sri Lanka"
    subtitle="Search & Display Advertising"
    description="Capture customers actively searching for your services with Google Search Ads, Display Ads, and YouTube Ads. Appear at the top of Google when it matters most — with affordable, performance-driven campaigns built for Sri Lankan businesses."
    icon={<Search className="w-7 h-7" />}
    serviceName="Google Ads"
    stats={[
      { value: "5x", label: "Avg ROAS" },
      { value: "70%", label: "Lower CPC" },
      { value: "150+", label: "Keywords Managed" },
      { value: "24hr", label: "Campaign Setup" },
    ]}
    features={[
      "Google Search Ads setup & ongoing management",
      "Google Display Ads with banner design",
      "YouTube video advertising campaigns",
      "Comprehensive keyword research & planning",
      "Conversion tracking & Google Analytics setup",
      "Negative keyword optimization to reduce wasted spend",
      "Ad copy creation, extensions & A/B testing",
      "Landing page recommendations for better Quality Score",
      "Competitor ad analysis & bidding strategy",
      "Monthly performance reporting with insights",
    ]}
    benefits={[
      "Capture high-intent customers at the exact moment they search for your services",
      "Only pay when people click on your ads — complete budget control",
      "Appear above organic results for competitive keywords instantly",
      "Track ROI with precise conversion data and attribution",
      "Scale budgets up or down based on proven performance metrics",
      "Reach customers across Google Search, YouTube, Gmail, and partner sites",
    ]}
    processSteps={[
      { title: "Keyword Research", desc: "We identify high-intent keywords your customers are searching for." },
      { title: "Campaign Structure", desc: "Organized ad groups, compelling copy, and proper bid strategies." },
      { title: "Tracking Setup", desc: "Google Analytics, conversion tracking, and call tracking integration." },
      { title: "Optimize & Report", desc: "Weekly optimizations with monthly performance reports and insights." },
    ]}
    flexibleDescription="Google Ads doesn't have to be expensive. Cypher Digital helps Sri Lankan businesses get the most out of every rupee with smart bidding strategies and continuous optimization. Whether you're a small local business or a growing brand, we have a cost-effective plan that fits your goals."
    flexiblePoints={[
      "Flexible monthly budgets starting from LKR 50,000",
      "No setup fees for new campaigns",
      "Weekly optimization to reduce wasted ad spend",
      "Transparent pricing with no hidden management costs",
      "Free Google Ads account audit for new clients",
      "Scalable plans that grow with your business",
    ]}
    faqs={[
      { q: "How much does Google Ads cost in Sri Lanka?", a: "Google Ads works on a pay-per-click model. We recommend a minimum ad spend of LKR 50,000/month depending on your industry competition. Our management fee is separate from the ad spend." },
      { q: "How is Google Ads different from Facebook Ads?", a: "Google Ads captures people actively searching for your product or service (high intent), while Facebook Ads targets people based on interests and behaviors. We often recommend using both for maximum results." },
      { q: "How long does it take to set up a Google Ads campaign?", a: "We can have your campaign live within 24–48 hours. However, proper keyword research and strategy planning takes 3–5 business days for optimal results." },
      { q: "Do you provide Google Ads reports?", a: "Yes, you'll receive detailed monthly reports covering clicks, impressions, cost per click, conversions, cost per conversion, and Quality Score improvements." },
      { q: "Can you help with my existing Google Ads account?", a: "Absolutely. We offer free audits of existing accounts to identify wasted spend and optimization opportunities before we take over management." },
      { q: "Is Google Ads suitable for small businesses in Sri Lanka?", a: "Definitely. Google Ads lets you set your own daily budget, so you only spend what you can afford. Even with a modest budget, you can target high-intent local searches and generate quality leads cost-effectively." },
    ]}
  />
);

export default GoogleAds;
