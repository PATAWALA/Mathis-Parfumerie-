"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles, Phone, Mail, User, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    project: "Lancement rapide",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    const msg = encodeURIComponent(
      `Bonjour Mathis 👋\n\nJe souhaite l'analyse de mon dossier.\n\n👤 ${form.name}\n📞 ${form.phone}\n📧 ${form.email}\n🎯 ${form.project}`
    );
    window.open(`https://wa.me/?text=${msg}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-noir via-noir-soft to-noir" />
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/70 to-noir/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* COPY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs tracking-[0.25em] uppercase text-gold">
              Analyse offerte
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl xl:text-7xl leading-[1.05] mb-6">
            Lancez votre
            <br />
            <span className="gold-text">Marque de Parfums</span>
            <br />
            Dubaï & Inde.
          </h1>

          <p className="text-cream/70 text-lg max-w-xl mb-8 leading-relaxed">
            Envoyez votre projet. Analyse gratuite sous 24h.
          </p>

          <div className="space-y-3">
            {[
              "Étude personnalisée de votre projet",
              "Fournisseurs directs Dubaï & Inde",
              "Devis clair, sans engagement",
            ].map((t) => (
              <div key={t} className="flex items-center gap-3 text-sm text-cream/80">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                {t}
              </div>
            ))}
          </div>
        </motion.div>

        {/* FORMULAIRE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="glass gold-border-glow rounded-2xl p-8 md:p-10"
        >
          {sent ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-7 h-7 text-gold" />
              </div>
              <p className="font-serif text-xl gold-text mb-2">Dossier reçu ✅</p>
              <p className="text-sm text-cream/60">
                Réponse sous 24h sur WhatsApp.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-gold/15">
                <img
                  src="/mathis.jpg"
                  alt="Mathis"
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold/50"
                />
                <div>
                  <p className="text-sm font-medium">Mathis</p>
                  <p className="text-[11px] text-cream/50">Sourcing Dubaï & Inde</p>
                </div>
                <span className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              </div>

              <h3 className="font-serif text-2xl mb-2">
                Analyse de votre dossier
              </h3>
              <p className="text-sm text-cream/60 mb-6">
                Réponse sous 24h · Confidentiel
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Field
                  icon={<User className="w-4 h-4" />}
                  placeholder="Nom complet"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                />
                <Field
                  icon={<Phone className="w-4 h-4" />}
                  placeholder="Téléphone / WhatsApp"
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                />
                <Field
                  icon={<Mail className="w-4 h-4" />}
                  placeholder="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                />

                <select
                  value={form.project}
                  onChange={(e) => setForm({ ...form, project: e.target.value })}
                  className="w-full bg-noir-card/70 border border-gold/20 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold"
                >
                  <option>Lancement rapide</option>
                  <option>Fournisseurs Dubaï</option>
                  <option>Fournisseurs Inde</option>
                  <option>Gamme complète</option>
                </select>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-soft via-gold to-gold-soft text-noir font-semibold py-4 rounded-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all animate-gold-pulse"
                >
                  Analyser mon Dossier
                </button>

                <p className="text-[11px] text-center text-cream/40">
                  🔒 Confidentiel · Sans engagement
                </p>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  icon,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/70">
        {icon}
      </span>
      <input
        type={type}
        required
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-noir-card/70 border border-gold/20 rounded-lg pl-11 pr-4 py-3.5 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold"
      />
    </div>
  );
}