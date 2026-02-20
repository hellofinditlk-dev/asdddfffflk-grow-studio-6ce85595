import ServicePageLayout from "@/components/ServicePageLayout";
import { Megaphone } from "lucide-react";

const SocialMediaManagement = () => (
  <ServicePageLayout
    title="Social Media Management Sri Lanka"
    subtitle="Professional Page Management"
    description="Complete Facebook and Instagram page management to build a strong online presence for your business. We handle everything from content creation to community management."
    icon={<Megaphone className="w-7 h-7" />}
    serviceName="social media management"
    features={[
      "Content planning & editorial calendar",
      "Creative post design (graphics & carousels)",
      "Daily/weekly post scheduling",
      "Inbox & comment management",
      "Story & Reel creation",
      "Monthly performance reports",
      "Competitor analysis",
      "Hashtag strategy & optimization",
    ]}
    benefits={[
      "Build consistent brand presence across platforms",
      "Save time while maintaining active social profiles",
      "Increase engagement rates with professional content",
      "Convert followers into paying customers",
      "Stay ahead of competitors with strategic planning",
    ]}
  />
);

export default SocialMediaManagement;
