"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";
import { cn } from "@/lib/utils";

const filters = [
  { key: "all", label: "Tous" },
  { key: "Dubaï", label: "Collection Dubaï" },
  { key: "Inde", label: "Collection Inde" },
  { key: "Coffret", label: "Coffrets de Lancement" },
] as const;

export default function Catalogue() {
  const [active, setActive] = useState<(typeof filters)[number]["key"]>("all");

  const filtered =
    active === "all" ? products : products.filter((p) => p.origin === active);

  return (
    <section id="catalogue" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.4em] text-gold/80">
            Notre Sélection
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-4">
            Collection <span className="gold-text">Signature</span>
          </h2>
          <p className="text-cream/60 max-w-2xl mx-auto">
            Des fragrances d'exception, sourcées directement auprès de nos
            partenaires à Dubaï et en Inde.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm tracking-wide border transition-all duration-300",
                active === f.key
                  ? "bg-gold text-noir border-gold font-medium shadow-[0_0_25px_rgba(212,175,55,0.35)]"
                  : "border-gold/25 text-cream/70 hover:border-gold/60 hover:text-gold"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}