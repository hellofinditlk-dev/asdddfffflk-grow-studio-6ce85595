import ServicePageLayout from "@/components/ServicePageLayout";
import { Target } from "lucide-react";

const FacebookAds = () => (
  <ServicePageLayout
    title="Facebook Advertising Sri Lanka"
    subtitle="High-Performance Facebook Campaigns"
    description="Run high-performing Facebook & Instagram advertising campaigns to generate quality leads and drive sales for your Sri Lankan business."
    icon={<Target className="w-7 h-7" />}
    serviceName="Facebook advertising"
    features={[
      "Lead generation campaigns",
      "Brand awareness campaigns",
      "Remarketing & retargeting campaigns",
      "Conversion-optimized campaigns",
      "Advanced audience targeting & lookalike audiences",
      "A/B testing for ad creatives",
      "Landing page optimization",
      "Detailed ROI reporting",
    ]}
    benefits={[
      "Reach your ideal customers with precision targeting",
      "Generate quality leads at lower cost per acquisition",
      "Scale campaigns based on proven performance data",
      "Maximize return on ad spend with continuous optimization",
      "Track every conversion from click to customer",
    ]}
  />
);

export default FacebookAds;
