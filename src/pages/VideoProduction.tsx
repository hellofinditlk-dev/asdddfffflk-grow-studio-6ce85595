import ServicePageLayout from "@/components/ServicePageLayout";
import { Video } from "lucide-react";

const VideoProduction = () => (
  <ServicePageLayout
    metaTitle="Video Production Sri Lanka | Social Media Videos from LKR 15,000"
    metaDescription="Professional video production for social media in Sri Lanka. Promotional videos, reels & short-form content. Cinematic quality from LKR 15,000. Boost your engagement."
    canonical="https://cypherdigital.lk/video-production-sri-lanka"
    title="Video Production for Social Media Sri Lanka"
    subtitle="Professional Video Content"
    description="Professional video content that increases engagement and supercharges your ad performance. From promotional videos to short-form reels — we deliver cinematic quality at prices that fit any Sri Lankan business budget."
    icon={<Video className="w-7 h-7" />}
    serviceName="video production"
    stats={[
      { value: "100+", label: "Videos Produced" },
      { value: "3x", label: "More Engagement" },
      { value: "48hr", label: "Fast Delivery" },
      { value: "4K", label: "Quality Output" },
    ]}
    features={[
      "Promotional brand videos for social media",
      "Instagram Reels & TikTok short-form videos",
      "Brand story & company profile videos",
      "Ad creative videos for Facebook & Google campaigns",
      "Product showcase & demo videos",
      "Customer testimonial & review videos",
      "Event coverage & highlight reels",
      "Professional editing, color grading & motion graphics",
      "Scriptwriting & storyboarding",
      "Drone footage & aerial videography",
    ]}
    benefits={[
      "Video content gets 3x more engagement than static image posts",
      "Boost ad performance by 20–40% with professional video creatives",
      "Build trust and authenticity with real brand storytelling",
      "Stand out from competitors with high-quality, cinematic production",
      "Repurpose one video shoot into 10+ pieces of content across channels",
      "Increase website conversion rates with embedded product videos",
    ]}
    processSteps={[
      { title: "Concept & Script", desc: "We develop creative concepts, scripts, and storyboards aligned with your brand." },
      { title: "Production", desc: "Professional filming with high-end equipment, lighting, and audio." },
      { title: "Post-Production", desc: "Expert editing, color grading, motion graphics, and sound design." },
      { title: "Delivery & Optimize", desc: "Multiple formats optimized for each platform — feed, stories, ads." },
    ]}
    flexibleDescription="High-quality video production doesn't have to cost a fortune. Cypher Digital offers flexible video packages for businesses of every size in Sri Lanka. Whether you need a single product video or a monthly content plan, we deliver professional results within your budget."
    flexiblePoints={[
      "Per-video pricing with no minimum order",
      "Bundle deals for monthly video content packages",
      "Quick-turnaround reels starting from LKR 15,000",
      "Flexible shoot schedules — weekdays or weekends",
      "Reuse footage for multiple formats at no extra cost",
      "Free creative consultation before every project",
    ]}
    faqs={[
      { q: "What types of videos do you produce?", a: "We produce promotional videos, social media reels, testimonial videos, product demos, brand stories, event coverage, and ad creatives. Each video is tailored to your specific goals and platform." },
      { q: "How long does a video project take?", a: "Simple social media videos can be delivered within 48–72 hours. Larger productions like brand videos or commercials typically take 1–2 weeks from concept to final delivery." },
      { q: "Do you handle filming or just editing?", a: "We offer both! We can handle the complete process from concept to filming to editing, or we can work with footage you provide. Our team has professional cameras, lighting, and audio equipment." },
      { q: "What formats do you deliver?", a: "We deliver videos in multiple formats optimized for each platform — square (1:1) for Instagram feed, vertical (9:16) for Reels/Stories, landscape (16:9) for YouTube/Facebook, and any custom ratio you need." },
      { q: "Can you create videos for my ad campaigns?", a: "Absolutely! Ad creative videos are one of our specialties. We create thumb-stopping video ads designed specifically for Facebook, Instagram, and Google ad campaigns with proven formats that drive conversions." },
      { q: "Is video production affordable for small businesses?", a: "Yes! We offer flexible per-video pricing and bundle packages designed for Sri Lankan small businesses. You don't need a massive budget to get professional, scroll-stopping video content." },
    ]}
  />
);

export default VideoProduction;
