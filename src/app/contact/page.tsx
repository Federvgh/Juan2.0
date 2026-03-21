import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-2">
        Get in Touch
      </p>
      <h1 className="text-3xl font-semibold tracking-tight mb-12">Contact</h1>

      <ContactForm />
    </div>
  );
}
