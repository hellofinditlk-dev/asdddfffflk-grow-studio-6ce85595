import ServicePageLayout from "@/components/ServicePageLayout";
import { Palette } from "lucide-react";

const GraphicDesign = () => (
  <ServicePageLayout
    metaTitle="Graphic Design Services Sri Lanka | From LKR 6,000"
    metaDescription="Professional graphic design in Sri Lanka. Logos, social media graphics, brochures & branding. Creative designs from LKR 6,000. Fast turnaround by Cypher Digital."
    canonical="https://cypherdigital.lk/graphic-design-sri-lanka"
    title="Graphic Design Services Sri Lanka"
    subtitle="Professional Creative Design"
    description="Stand out with stunning visuals crafted for your brand. From social media graphics and logos to brochures and packaging — our design team delivers creative, on-brand designs that capture attention and drive results, all at affordable prices."
    icon={<Palette className="w-7 h-7" />}
    serviceName="graphic design"
    stats={[
      { value: "500+", label: "Designs Delivered" },
      { value: "48hr", label: "Turnaround Time" },
      { value: "100%", label: "Custom Designs" },
      { value: "30+", label: "Brands Served" },
    ]}
    features={[
      "Logo design & complete brand identity kits",
      "Social media post & story design",
      "Flyer, brochure & leaflet design",
      "Business card & stationery design",
      "Banner & billboard design",
      "Packaging & label design",
      "Menu design for restaurants & cafés",
      "Presentation & pitch deck design",
      "Infographic & data visualization design",
      "Photo editing & retouching",
    ]}
    benefits={[
      "Professional designs that elevate your brand image and build customer trust",
      "Consistent visual identity across all marketing materials and platforms",
      "Quick turnaround — most designs delivered within 24–48 hours",
      "Unlimited revisions until you're 100% satisfied with the final design",
      "Save money compared to hiring a full-time in-house designer",
      "Print-ready and web-optimized files delivered in all formats you need",
    ]}
    processSteps={[
      { title: "Brief & Research", desc: "We understand your brand, goals, audience, and design preferences." },
      { title: "Concept Design", desc: "Our designers create initial concepts and mood boards for your review." },
      { title: "Revisions", desc: "We refine the design based on your feedback until it's perfect." },
      { title: "Final Delivery", desc: "You receive print-ready and digital files in all required formats." },
    ]}
    flexibleDescription="Great design doesn't have to be expensive. Cypher Digital offers flexible, budget-friendly graphic design services for Sri Lankan businesses of all sizes. Whether you need a single social media post or a full brand identity package, we have a plan that fits your budget."
    flexiblePoints={[
      "Per-design pricing starting from just LKR 6,000",
      "Monthly design retainer packages available",
      "No minimum order — get exactly what you need",
      "Bundle discounts for bulk design orders",
      "Unlimited revisions on every design",
      "Free design consultation before you commit",
    ]}
    faqs={[
      { q: "What types of designs do you create?", a: "We create everything from logos, social media graphics, flyers, brochures, business cards, banners, packaging, menus, presentations, and more. Every design is custom-made for your brand — no templates." },
      { q: "How long does a design take?", a: "Most designs are delivered within 24–48 hours. Complex projects like full brand identity kits or packaging design may take 3–5 business days. Rush delivery is available on request." },
      { q: "How many revisions do I get?", a: "We offer unlimited revisions on all designs until you're completely satisfied. We want to make sure the final result is exactly what you envisioned." },
      { q: "What file formats do you deliver?", a: "We deliver designs in all formats you need — PNG, JPG, PDF, SVG, AI, PSD, and more. Print-ready files with proper bleed and resolution are included at no extra charge." },
      { q: "Can you design for both print and digital?", a: "Absolutely! We design for all mediums — social media, websites, print materials, signage, packaging, and more. Each design is optimized for its intended use." },
      { q: "Is graphic design affordable for small businesses?", a: "Yes! Our per-design pricing starts from just LKR 6,000, making professional design accessible to startups and small businesses across Sri Lanka. No need for expensive agencies or full-time hires." },
    ]}
  />
);

export default GraphicDesign;
