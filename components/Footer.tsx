import { MessageCircle, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-gold/15 bg-noir-soft/60 pt-16 pb-10 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <h4 className="font-serif text-2xl gold-text mb-4">
            MATHIS PARFUMERIE
          </h4>
          <p className="text-sm text-cream/60 leading-relaxed">
            Accompagnement premium pour le lancement de votre marque de parfums
            depuis Dubaï & l'Inde. Sourcing direct, gamme sur-mesure, livraison
            internationale.
          </p>
        </div>

        <div>
          <h5 className="text-xs uppercase tracking-[0.3em] text-gold mb-5">
            Navigation
          </h5>
          <ul className="space-y-3 text-sm text-cream/60">
            <li>
              <a href="#catalogue" className="hover:text-gold">
                Catalogue
              </a>
            </li>
            <li>
              <a href="#offres" className="hover:text-gold">
                Offres de Lancement
              </a>
            </li>
            <li>
              <a href="#avis" className="hover:text-gold">
                Avis Clients
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-xs uppercase tracking-[0.3em] text-gold mb-5">
            Contact
          </h5>
          <ul className="space-y-3 text-sm text-cream/60">
            <li className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-gold" />
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                WhatsApp Officiel
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold" />
              contact@mathis-parfumerie.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold" />
              Dubaï · Inde · International
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/40">
        <p>
          © {new Date().getFullYear()} Mathis Parfumerie. Tous droits réservés.
        </p>
        <p>Accompagnement Lancement — Dubaï & Inde</p>
      </div>
    </footer>
  );
}