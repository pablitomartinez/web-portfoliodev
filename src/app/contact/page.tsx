// src/app/contact/page.tsx
import ContactForm from "../../components/ContactForm";
import WhatsAppButton from "../../components/Whatsapp";

export default function Contact() {
  return (
    <section className="min-h-screen" id="contact">
      <h1 className="text-4xl font-bold mb-8">Contacto</h1>
      <ContactForm />
      <WhatsAppButton />
    </section>
  );
}
