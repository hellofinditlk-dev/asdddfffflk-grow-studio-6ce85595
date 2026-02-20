import ServicePageLayout from "@/components/ServicePageLayout";
import { Search } from "lucide-react";

const GoogleAds = () => (
  <ServicePageLayout
    title="Google Ads Sri Lanka"
    subtitle="Search & Display Advertising"
    description="Capture customers actively searching for your services with Google Search Ads, Display Ads, and YouTube Ads. Appear at the top when it matters most."
    icon={<Search className="w-7 h-7" />}
    serviceName="Google Ads"
    features={[
      "Google Search Ads setup & management",
      "Google Display Ads campaigns",
      "YouTube video advertising",
      "Comprehensive keyword research",
      "Conversion tracking setup",
      "Negative keyword optimization",
      "Ad copy creation & testing",
      "Monthly performance reporting",
    ]}
    benefits={[
      "Capture high-intent customers at the moment of search",
      "Only pay when people click on your ads",
      "Appear above organic results for competitive keywords",
      "Track ROI with precise conversion data",
      "Scale budgets based on proven performance",
    ]}
  />
);

export default GoogleAds;
