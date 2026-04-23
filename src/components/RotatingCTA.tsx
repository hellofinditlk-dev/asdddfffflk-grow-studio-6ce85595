import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Phone, Sparkles } from "lucide-react";

type Variant = {
  id: string;
  eyebrow: string;
  headline: string;
  body: string;
  primary: { label: string; to?: string; href?: string; icon: React.ComponentType<{ className?: string }> };
  secondary?: { label: string; href: string; icon: React.ComponentType<{ className?: string }> };
};

const VARIANTS: Variant[] = [
  {
    id: "consult",
    eyebrow: "Free Consultation",
    headline: "Get a Free 30-Min Strategy Call",
    body: "Talk to a Cypher Digital expert about your goals — no pressure, no fee. We'll map a plan tailored to your business.",
    primary: { label: "Book Free Consultation", to: "/contact", icon: ArrowRight },
    secondary: { label: "Chat on WhatsApp", href: "https://wa.me/94701772626?text=Hi%2C%20I%27d%20like%20a%20free%20consultation", icon: MessageCircle },
  },
  {
    id: "audit",
    eyebrow: "Limited Spots",
    headline: "Claim Your Free Marketing Audit",
    body: "We'll review your ads, social, SEO, and website — then send a personalised growth report worth Rs. 25,000. Free this month.",
    primary: { label: "Request My Free Audit", to: "/contact", icon: Sparkles },
    secondary: { label: "Call 070 177 2626", href: "tel:+94701772626", icon: Phone },
  },
  {
    id: "quote",
    eyebrow: "Quick Quote",
    headline: "Need a Quote? We Reply in 1 Hour",
    body: "Tell us what you need — Facebook Ads, SEO, Web, Video, or Events — and get a transparent quote the same business hour.",
    primary: { label: "Get Instant Quote", to: "/contact", icon: ArrowRight },
    secondary: { label: "WhatsApp Us", href: "https://wa.me/94701772626?text=Hi%2C%20I%20need%20a%20quote", icon: MessageCircle },
  },
];

const pickIndex = () => Math.floor(Math.random() * VARIANTS.length);

export const RotatingCTA = ({ placement = "inline" }: { placement?: "inline" | "sidebar" }) => {
  const initial = useMemo(() => pickIndex(), []);
  const [index, setIndex] = useState(initial);

  // Rotate the headline every 8s on the sidebar variant
  useEffect(() => {
    if (placement !== "sidebar") return;
    const t = setInterval(() => setIndex((i) => (i + 1) % VARIANTS.length), 8000);
    return () => clearInterval(t);
  }, [placement]);

  const v = VARIANTS[index];
  const PrimaryIcon = v.primary.icon;
  const SecondaryIcon = v.secondary?.icon;

  const containerCls =
    placement === "sidebar"
      ? "rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-accent/10 p-5 shadow-sm"
      : "rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-accent/10 p-6 md:p-8 shadow-sm";

  const headlineCls =
    placement === "sidebar"
      ? "font-heading text-lg font-extrabold text-foreground leading-snug"
      : "font-heading text-xl md:text-2xl font-extrabold text-foreground leading-snug";

  return (
    <aside className={containerCls} aria-label="Call to action" data-cta-id={v.id}>
      <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
        <Sparkles className="h-3 w-3" /> {v.eyebrow}
      </div>
      <h3 className={`mt-3 ${headlineCls}`}>{v.headline}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
      <div className={`mt-4 flex ${placement === "sidebar" ? "flex-col" : "flex-col sm:flex-row"} gap-2`}>
        {v.primary.to ? (
          <Link
            to={v.primary.to}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-bold !text-white shadow-md hover:opacity-90 transition-opacity"
          >
            <PrimaryIcon className="h-4 w-4" /> {v.primary.label}
          </Link>
        ) : (
          <a
            href={v.primary.href}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-bold !text-white shadow-md hover:opacity-90 transition-opacity"
          >
            <PrimaryIcon className="h-4 w-4" /> {v.primary.label}
          </a>
        )}
        {v.secondary && SecondaryIcon && (
          <a
            href={v.secondary.href}
            target={v.secondary.href.startsWith("http") ? "_blank" : undefined}
            rel={v.secondary.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/30 bg-background px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-primary/5 transition-colors"
          >
            <SecondaryIcon className="h-4 w-4" /> {v.secondary.label}
          </a>
        )}
      </div>
      {placement === "sidebar" && (
        <div className="mt-4 flex justify-center gap-1.5" aria-hidden="true">
          {VARIANTS.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${i === index ? "bg-primary" : "bg-primary/25"}`}
            />
          ))}
        </div>
      )}
    </aside>
  );
};

export default RotatingCTA;