import { motion } from "framer-motion";
import { Award, Users, Building2, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import aboutImg from "@/assets/about-img.jpg";

const highlights = [
  { icon: Award, label: "Uprawnienia bez ograniczeń" },
  { icon: Users, label: "Sprawdzona grupa projektantów" },
  { icon: Building2, label: "Setki zrealizowanych projektów" },
  { icon: Shield, label: "Pełna odpowiedzialność zawodowa" },
];

const OFirmie = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow text-center">
          <div className="line-decoration mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            O Firmie
          </h1>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Poznaj firmę Projekty Budowy — Adam Adrianowski.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={aboutImg}
                alt="Adam Adrianowski przy pracy"
                className="w-full aspect-square object-cover rounded-sm shadow-elevated"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="line-decoration" />
              <h2 className="text-3xl font-heading font-bold text-foreground">
                Adam Adrianowski
              </h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>
                  Jestem inżynierem budownictwa z wieloletnim doświadczeniem w projektowaniu i nadzorze technicznym. Posiadam nieograniczone uprawnienia budowlane do projektowania w branży konstrukcyjno-budowlanej oraz do kierowania robotami budowlanymi.
                </p>
                <p>
                  Prowadzę jednoosobową działalność, realizując zlecenia we współpracy ze sprawdzoną grupą projektantów — specjalistów z branży architektonicznej, sanitarnej i elektrycznej.
                </p>
                <p>
                  Moim celem jest zapewnienie najwyższej jakości usług projektowych i nadzoru, opartych na solidnej wiedzy technicznej i indywidualnym podejściu do każdego klienta.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-primary">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <h.icon className="w-10 h-10 text-primary-foreground mx-auto mb-3" />
                <p className="text-sm font-body font-medium text-primary-foreground/80">
                  {h.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OFirmie;
