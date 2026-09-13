"use client";

import { ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useCartStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const links = [
  { href: "#catalogue", label: "Catalogue" },
  { href: "#offres", label: "Offres de Lancement" },
  { href: "#avis", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const totalItems = useCartStore((s) => s.totalItems());
  const openCart = useCartStore((s) => s.openCart);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-noir/85 backdrop-blur-xl border-b border-gold/15 py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex flex-col leading-none">
          <span className="font-serif text-xl md:text-2xl gold-text tracking-wide">
            MATHIS
          </span>
          <span className="text-[10px] tracking-[0.35em] text-gold-soft/80 uppercase">
            Parfumerie · Dubaï & Inde
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-10 text-sm tracking-wide">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-cream/80 hover:text-gold transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={openCart}
            className="relative p-2 rounded-full border border-gold/30 hover:border-gold hover:bg-gold/5 transition-all"
            aria-label="Ouvrir le panier"
          >
            <ShoppingBag className="w-5 h-5 text-gold" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-gold text-noir text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center animate-gold-pulse">
                {totalItems}
              </span>
            )}
          </button>

          <button
            className="lg:hidden p-2 text-cream"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-noir/95 backdrop-blur-xl border-t border-gold/20 mt-3">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-cream/80 hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}