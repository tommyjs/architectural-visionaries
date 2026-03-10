import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Compass, HardHat, FileText, ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: Compass,
    title: "Projektowanie",
    desc: "Projekty wykonawcze i techniczne w branży architektonicznej, konstrukcyjnej, sanitarnej i elektrycznej.",
    href: "/uslugi#projektowanie",
  },
  {
    icon: HardHat,
    title: "Nadzór Techniczny",
    desc: "Kierowanie budową i nadzór nad robotami budowlanymi — uprawnienia bez ograniczeń.",
    href: "/uslugi#nadzor",
  },
  {
    icon: FileText,
    title: "Usługi Techniczne",
    desc: "Kosztorysy, przeglądy techniczne, opinie i ekspertyzy budowlane.",
    href: "/uslugi#uslugi-techniczne",
  },
];

const strengths = [
  "Uprawnienia budowlane bez ograniczeń",
  "Wieloletnie doświadczenie w branży",
  "Współpraca ze sprawdzoną grupą projektantów",
  "Indywidualne podejście do każdego projektu",
  "Kompleksowa obsługa inwestycji",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="container-narrow relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="w-12 h-[2px] bg-primary-foreground mb-8" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Projekty Budowy
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 font-body leading-relaxed mb-10 max-w-lg">
              Profesjonalne projektowanie, nadzór techniczny i kompleksowe usługi inżynieryjne. Adam Adrianowski.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/uslugi"
                className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 text-sm font-body font-semibold uppercase tracking-wider hover:bg-accent transition-colors"
              >
                Nasze usługi
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-6 py-3 text-sm font-body font-semibold uppercase tracking-wider hover:bg-primary-foreground/10 transition-colors"
              >
                Kontakt
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <div className="line-decoration mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Zakres Usług
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Kompleksowa obsługa inwestycji budowlanych — od projektu po oddanie do użytku.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  to={service.href}
                  className="block p-8 bg-card border border-border rounded-sm card-hover group"
                >
                  <service.icon className="w-10 h-10 text-foreground mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-body font-semibold uppercase tracking-wider text-foreground">
                    Więcej <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="line-decoration mb-6" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Dlaczego warto z nami współpracować?
              </h2>
              <ul className="space-y-4">
                {strengths.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-foreground mt-0.5 shrink-0" />
                    <span className="text-muted-foreground font-body">{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="bg-primary text-primary-foreground p-12 md:p-16 text-center max-w-sm">
                <p className="text-5xl md:text-6xl font-heading font-bold mb-2">20+</p>
                <p className="text-sm font-body uppercase tracking-wider text-primary-foreground/70">
                  Lat doświadczenia
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center">
          <div className="line-decoration mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Potrzebujesz profesjonalnego wsparcia?
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto mb-8">
            Skontaktuj się z nami, aby omówić Twój projekt. Doradzimy i zaproponujemy optymalne rozwiązanie.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-body font-semibold uppercase tracking-wider hover:bg-foreground/90 transition-colors"
          >
            Skontaktuj się
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
