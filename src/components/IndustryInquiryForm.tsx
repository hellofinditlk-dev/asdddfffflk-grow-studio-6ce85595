import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send } from "lucide-react";
import type { IndustryFormField } from "@/data/industries";

interface IndustryInquiryFormProps {
  fields: IndustryFormField[];
  ctaButtonText: string;
  serviceName: string;
}

const IndustryInquiryForm = ({ fields, ctaButtonText, serviceName }: IndustryInquiryFormProps) => {
  const [form, setForm] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((f) => [f.name, ""]))
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name?.trim() || !form.phone?.trim()) {
      toast.error("Please fill in your name and phone number");
      return;
    }

    const lines = [
      `Hi, I'm ${form.name}.`,
      form.email ? `Email: ${form.email}` : "",
      `Phone: ${form.phone}`,
      ...fields
        .filter((f) => !["name", "email", "phone", "message"].includes(f.name) && form[f.name]?.trim())
        .map((f) => `${f.placeholder.replace(" *", "")}: ${form[f.name]}`),
      form.message ? `\n${form.message}` : "",
      `\nI'm interested in ${serviceName} services.`,
    ].filter(Boolean).join("\n");

    const waUrl = `https://wa.me/94701772626?text=${encodeURIComponent(lines)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp...");
    setForm(Object.fromEntries(fields.map((f) => [f.name, ""])));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) =>
        field.name === "message" ? (
          <Textarea
            key={field.name}
            placeholder={field.placeholder}
            value={form[field.name] || ""}
            onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
            className="bg-background/50 border-border min-h-[100px]"
            maxLength={1000}
          />
        ) : (
          <Input
            key={field.name}
            placeholder={field.placeholder}
            type={field.type || "text"}
            value={form[field.name] || ""}
            onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
            className="bg-background/50 border-border"
            maxLength={field.type === "email" ? 255 : 100}
            required={field.required}
          />
        )
      )}
      <Button
        type="submit"
        className="w-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition-opacity"
      >
        <Send className="w-4 h-4 mr-2" />
        {ctaButtonText}
      </Button>
    </form>
  );
};

export default IndustryInquiryForm;
