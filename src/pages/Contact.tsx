import InquiryForm from "@/components/InquiryForm";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import mascotHeadset from "@/assets/mascot-headset.jpeg";

const contactInfo = [
  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+94 70 177 2626", href: "tel:+94701772626" },
  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "info@cypherdigital.lk", href: "mailto:info@cypherdigital.lk" },
  { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Colombo, Sri Lanka" },
  { icon: <Clock className="w-5 h-5" />, label: "Working Hours", value: "Mon – Sat, 9AM – 6PM" },
];

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Cypher Digital",
  telephone: "+94701772626",
  email: "info@cypherdigital.lk",
  url: "https://cypherdigital.lk/contact",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressCountry: "LK",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
};

const Contact = () => (
  <div className="pt-16">
    <SEOHead
      title="Contact Cypher Digital | Get a Free Consultation"
      description="Contact Cypher Digital for a free digital marketing consultation. Call +94 70 177 2626 or visit us in Colombo, Sri Lanka. We're ready to grow your business."
      canonical="https://cypherdigital.lk/contact"
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
    <PageBreadcrumb items={[{ label: "Contact Us" }]} />
    <section className="section-dark py-20 lg:py-28">
      <div className="container mx-auto px-4 text-center animate-fade-up">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Get In Touch</p>
        <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Ready to grow your business with digital marketing? Get a free consultation and custom strategy for your brand.
        </p>
      </div>
    </section>

    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="font-heading text-2xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="font-medium hover:text-primary transition-colors">{c.value}</a>
                    ) : (
                      <p className="font-medium">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-card border border-border shadow-card">
              <div className="flex items-center gap-4 mb-4">
                <img src={mascotHeadset} alt="Cypher Digital support mascot" className="w-14 h-14 rounded-xl object-cover" />
                <div>
                  <h3 className="font-heading font-semibold">Prefer WhatsApp?</h3>
                  <p className="text-sm text-muted-foreground">Chat with us directly for a quick response.</p>
                </div>
              </div>
              <a
                href="https://wa.me/94701772626"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[hsl(142,70%,45%)] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border">
            <h3 className="font-heading text-xl font-bold mb-2">Send Us a Message</h3>
            <p className="text-sm text-muted-foreground mb-6">We'll get back to you within 24 hours.</p>
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
