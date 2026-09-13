"use client";

import { motion } from "framer-motion";
import { MessageCircle, Award, Globe2, Sparkles } from "lucide-react";

export default function MeetMathis() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-14 items-center">
        {/* PHOTO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-gold/30 gold-border-glow">
            <img
              src="/mathis.jpg"
              alt="Mathis"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-transparent opacity-60" />
          </div>

          <div className="absolute -bottom-6 -right-6 glass rounded-2xl px-5 py-4 border border-gold/40">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-gold" />
              <div>
                <p className="font-serif text-xl gold-text leading-none">+150</p>
                <p className="text-[10px] uppercase tracking-widest text-cream/60">
                  Marques lancées
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* TEXTE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-gold/80">
            Votre Accompagnant
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-6">
            Rencontrez <span className="gold-text">Mathis</span>
          </h2>

          <p className="text-cream/70 leading-relaxed mb-8">
            Spécialiste du sourcing de parfums entre Dubaï, l'Inde et l'Europe.
            Il accompagne des entrepreneurs dans le lancement de leur marque —
            de la sélection des essences à la négociation directe avec les
            usines.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { icon: Globe2, text: "Réseau Dubaï & Inde" },
              { icon: Sparkles, text: "Sourcing premium" },
              { icon: Award, text: "Marques lancées" },
              { icon: MessageCircle, text: "Suivi personnalisé" },
            ].map((c) => (
              <div
                key={c.text}
                className="flex items-center gap-3 text-sm text-cream/80"
              >
                <c.icon className="w-4 h-4 text-gold shrink-0" />
                {c.text}
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-lg border border-gold/40 hover:bg-gold hover:text-noir text-gold font-medium transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Demander l'analyse
          </a>
        </motion.div>
      </div>
    </section>
  );
}