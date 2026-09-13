"use client";

import { motion } from "framer-motion";
import { Factory, HandHeart, Truck } from "lucide-react";

const items = [
  {
    icon: Factory,
    title: "Sourcing Direct Usine",
    desc: "Nous travaillons sans intermédiaire avec les meilleures usines de Dubaï et d'Inde pour vous garantir des prix imbattables.",
  },
  {
    icon: HandHeart,
    title: "Accompagnement Clé en Main",
    desc: "De la sélection des fragrances au branding, nous vous guidons à chaque étape du lancement de votre marque.",
  },
  {
    icon: Truck,
    title: "Livraison Internationale",
    desc: "Expédition sécurisée et suivie vers l'Europe, l'Afrique, le Moyen-Orient et l'Asie sous 7 à 14 jours.",
  },
];

export default function Reassurance() {
  return (
    <section id="offres" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-gold/80">
            Pourquoi Nous
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">
            Une <span className="gold-text">Excellence</span> Sans Compromis
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 hover:border-gold/50 hover:shadow-[0_20px_60px_-20px_rgba(212,175,55,0.35)] transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center mb-6 bg-gold/5">
                <it.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl mb-3">{it.title}</h3>
              <p className="text-cream/60 text-sm leading-relaxed">
                {it.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}