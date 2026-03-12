import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import bannerImg from "@/assets/banner-kontakt.jpg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const contactInfo = [
  { icon: Phone, label: "Telefon", value: "+48 668 258 364", href: "tel:+48668258364" },
  { icon: Mail, label: "E-mail", value: "projektybudowy@gmail.com", href: "mailto:projektybudowy@gmail.com" },
  { icon: MapPin, label: "Lokalizacja", value: "Babice 104, 95-083 Lutomiersk, woj. łódzkie, <br /> NIP: 7312019875" },
  { icon: Clock, label: "Godziny pracy", value: "Pon–Pt: 8:00–16:00" },
];

const Kontakt = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <img src={bannerImg} alt="Nowoczesne biuro architektoniczne" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 container-narrow text-center">
          <div className="line-decoration mx-auto mb-6 !bg-background/60" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-background mb-4">
            Kontakt
          </h1>
          <p className="text-background/80 font-body max-w-xl mx-auto">
            Skontaktuj się, aby omówić swój projekt lub uzyskać wycenę.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <div className="line-decoration mb-6" />
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Dane kontaktowe
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Zapraszam do kontaktu telefonicznego lub mailowego. Chętnie odpowiem na pytania i pomogę w realizacji Państwa inwestycji.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary flex items-center justify-center rounded-sm shrink-0">
                      <c.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <p className="text-xs font-body font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                        {c.label}
                      </p>
                      {c.href ? (
                        <a href={c.href} className="text-foreground font-body hover:underline">
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-body"><div
                              dangerouslySetInnerHTML={{__html: c.value
                          }}
                        /></p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-card border border-border rounded-sm overflow-hidden h-full min-h-[400px]">
                <iframe 
                  title="Lokalizacja firmy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2468.7533299195243!2d19.253635476741927!3d51.77411649118379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a4c9ee6add115%3A0x4de88fef5bfd360b!2sBabice%20104%2C%2095-083%20Babice!5e0!3m2!1sen!2spl!4v1773314991278!5m2!1sen!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
