import { motion, type Easing } from "framer-motion";
import { Compass, HardHat, FileText, PenTool, Building, Shield, ClipboardList, Search, FileCheck } from "lucide-react";
import Layout from "@/components/Layout";
import bannerImg from "@/assets/banner-uslugi.jpg";
import bannerImg from "@/assets/banner-uslugi.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as Easing },
  }),
};

const sections = [
  {
    id: "projektowanie",
    icon: Compass,
    title: "Projektowanie",
    description: "Projekty wykonawcze i techniczne w branży architektonicznej i konstrukcyjnej, a także sanitarnej i elektrycznej, realizowane we współpracy ze sprawdzoną grupą projektantów.",
    items: [
      { icon: PenTool, title: "Projekty architektoniczne i konstrukcyjne", desc: "Kompleksowe opracowania projektowe od koncepcji po projekt wykonawczy." },
      { icon: Building, title: "Instalacje sanitarne i elektryczne", desc: "Projekty w branży sanitarnej i elektrycznej we współpracy z wykwalifikowanymi specjalistami." },
      { icon: FileCheck, title: "Adaptacja projektów gotowych", desc: "Dostosowanie gotowych projektów typowych do indywidualnych potrzeb i warunków działki." },
      { icon: Shield, title: "Zastępstwo inwestorskie", desc: "Reprezentowanie inwestora przed organami administracji — pełnomocnictwo i prowadzenie spraw formalnych." },
    ],
  },
  {
    id: "nadzor",
    icon: HardHat,
    title: "Nadzór Techniczny",
    description: "Kierowanie budową i nadzór nad robotami budowlanymi w branży konstrukcyjno-budowlanej — uprawnienia bez ograniczeń. Nadzór inwestorski.",
    items: [
      { icon: HardHat, title: "Kierowanie budową", desc: "Prowadzenie budowy zgodnie z projektem, przepisami i sztuką budowlaną." },
      { icon: Shield, title: "Nadzór inwestorski", desc: "Kontrola jakości robót, zgodności z projektem i kosztorysem w imieniu inwestora." },
      { icon: ClipboardList, title: "Uprawnienia bez ograniczeń", desc: "Nieograniczone uprawnienia do kierowania robotami budowlanymi w branży konstrukcyjno-budowlanej." },
    ],
  },
  {
    id: "uslugi-techniczne",
    icon: FileText,
    title: "Usługi Techniczne",
    description: "Kosztorysy, przeglądy techniczne budynków, opinie techniczne i ekspertyzy.",
    items: [
      { icon: ClipboardList, title: "Kosztorysy", desc: "Sporządzanie kosztorysów inwestorskich, ofertowych i powykonawczych." },
      { icon: Search, title: "Przeglądy techniczne budynków", desc: "Okresowe przeglądy stanu technicznego obiektów budowlanych." },
      { icon: FileCheck, title: "Opinie i ekspertyzy", desc: "Opinie techniczne i ekspertyzy budowlane dotyczące stanu konstrukcji i rozwiązań projektowych." },
    ],
  },
];

const Uslugi = () => {
  return (
    <Layout>
      {/* Page header */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <div className="line-decoration mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Usługi
          </h1>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Kompleksowa oferta usług projektowych, nadzoru technicznego i doradztwa budowlanego.
          </p>
        </div>
      </section>

      {/* Service sections */}
      {sections.map((section, si) => (
        <section
          key={section.id}
          id={section.id}
          className={`section-padding ${si % 2 === 0 ? "bg-background" : "bg-secondary"}`}
        >
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <section.icon className="w-8 h-8 text-foreground" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  {section.title}
                </h2>
              </div>
              <p className="text-muted-foreground font-body max-w-2xl leading-relaxed">
                {section.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="p-6 bg-card border border-border rounded-sm card-hover"
                >
                  <item.icon className="w-8 h-8 text-foreground mb-4" />
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
};

export default Uslugi;
