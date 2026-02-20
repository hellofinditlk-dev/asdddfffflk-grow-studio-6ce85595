import ServicePageLayout from "@/components/ServicePageLayout";
import { Video } from "lucide-react";

const VideoProduction = () => (
  <ServicePageLayout
    title="Video Production for Social Media Sri Lanka"
    subtitle="Professional Video Content"
    description="Professional video content that increases engagement and supercharges your ad performance. From promotional videos to short-form reels, we create content that converts."
    icon={<Video className="w-7 h-7" />}
    serviceName="video production"
    features={[
      "Promotional brand videos",
      "Instagram Reels & TikTok short videos",
      "Brand story videos",
      "Ad creative videos for Facebook & Google",
      "Product showcase videos",
      "Testimonial & review videos",
      "Event coverage videos",
      "Professional editing & motion graphics",
    ]}
    benefits={[
      "Video content gets 3x more engagement than static posts",
      "Boost ad performance with professional video creatives",
      "Build trust with authentic brand storytelling",
      "Stand out from competitors with high-quality production",
      "Repurpose content across all marketing channels",
    ]}
  />
);

export default VideoProduction;
