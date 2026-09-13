"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles, Phone, Mail, User } from "lucide-react";

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
      `Bonjour Mathis, je souhaite réserver un appel de lancement.\n\nNom: ${form.name}\nTéléphone: ${form.phone}\nEmail: ${form.email}\nProjet: ${form.project}`
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
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs tracking-[0.25em] uppercase text-gold">
              Accompagnement Premium
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl xl:text-7xl leading-[1.05] mb-6">
            Lancez Votre Propre
            <br />
            <span className="gold-text">Marque de Parfums</span>
            <br />
            depuis Dubaï & l'Inde.
          </h1>

          <p className="text-cream/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Accédez aux meilleurs fournisseurs, créez votre gamme sur-mesure et
            réservez votre accompagnement personnalisé dès aujourd'hui.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-cream/60">
            {["Sourcing direct usine", "Livraison internationale", "Clé en main"].map(
              (t) => (
                <div key={t} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  {t}
                </div>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="glass gold-border-glow rounded-2xl p-8 md:p-10"
        >
          <h3 className="font-serif text-2xl mb-1">Réservez votre appel</h3>
          <p className="text-sm text-cream/60 mb-8">
            Réponse sous 24h — Créneaux limités cette semaine.
          </p>

          {sent ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-7 h-7 text-gold" />
              </div>
              <p className="font-serif text-xl gold-text mb-2">
                Demande envoyée
              </p>
              <p className="text-sm text-cream/60">
                Nous vous contactons très vite sur WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
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

              <div>
                <label className="block text-xs uppercase tracking-widest text-gold/80 mb-2">
                  Votre projet
                </label>
                <select
                  value={form.project}
                  onChange={(e) =>
                    setForm({ ...form, project: e.target.value })
                  }
                  className="w-full bg-noir-card/70 border border-gold/20 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors"
                >
                  <option>Lancement rapide</option>
                  <option>Fournisseurs Dubaï</option>
                  <option>Fournisseurs Inde</option>
                  <option>Gamme complète</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gold-soft via-gold to-gold-soft text-noir font-semibold tracking-wide py-4 rounded-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all animate-gold-pulse"
              >
                Réserver mon Appel de Lancement
              </button>

              <p className="text-[11px] text-center text-cream/40">
                🔒 Vos données restent confidentielles.
              </p>
            </form>
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
        className="w-full bg-noir-card/70 border border-gold/20 rounded-lg pl-11 pr-4 py-3.5 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}