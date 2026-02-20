import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send } from "lucide-react";

interface InquiryFormProps {
  service?: string;
}

const InquiryForm = ({ service }: InquiryFormProps) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please fill in your name and phone number");
      return;
    }
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      toast.success("Thank you! We'll contact you within 24 hours.");
      setForm({ name: "", email: "", phone: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Your Name *"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="bg-background/50 border-border"
        maxLength={100}
        required
      />
      <Input
        placeholder="Email Address"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="bg-background/50 border-border"
        maxLength={255}
      />
      <Input
        placeholder="Phone Number *"
        type="tel"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="bg-background/50 border-border"
        maxLength={20}
        required
      />
      <Textarea
        placeholder={`Tell us about your ${service || "marketing"} needs...`}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="bg-background/50 border-border min-h-[100px]"
        maxLength={1000}
      />
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition-opacity"
      >
        <Send className="w-4 h-4 mr-2" />
        {loading ? "Sending..." : "Get Free Consultation"}
      </Button>
    </form>
  );
};

export default InquiryForm;
