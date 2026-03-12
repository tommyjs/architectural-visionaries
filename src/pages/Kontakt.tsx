import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import bannerImg from "@/assets/banner-kontakt.jpg";

const contactInfo = [
  { icon: Phone, label: "Telefon", value: "+48 000 000 000", href: "tel:+48000000000" },
  { icon: Mail, label: "E-mail", value: "kontakt@projektybudowy.pl", href: "mailto:kontakt@projektybudowy.pl" },
  { icon: MapPin, label: "Lokalizacja", value: "Polska" },
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
                        <p className="text-foreground font-body">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form
                className="space-y-6 bg-card border border-border p-8 rounded-sm"
                onSubmit={(e) => {
                  e.preventDefault();
                  // placeholder
                }}
              >
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  Wyślij wiadomość
                </h3>

                <div className="space-y-2">
                  <label className="text-xs font-body font-semibold uppercase tracking-wider text-muted-foreground">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
                    placeholder="Jan Kowalski"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-body font-semibold uppercase tracking-wider text-muted-foreground">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
                    placeholder="jan@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-body font-semibold uppercase tracking-wider text-muted-foreground">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
                    placeholder="+48 000 000 000"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-body font-semibold uppercase tracking-wider text-muted-foreground">
                    Wiadomość
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-foreground resize-none"
                    placeholder="Opisz swoje potrzeby..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 text-sm font-body font-semibold uppercase tracking-wider hover:bg-foreground/90 transition-colors rounded-sm"
                >
                  Wyślij wiadomość
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
