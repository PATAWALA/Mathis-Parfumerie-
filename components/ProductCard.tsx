"use client";

import { motion } from "framer-motion";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Product } from "@/lib/products";
import { useCartStore } from "@/lib/store";

export default function ProductCard({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const addItem = useCartStore((s) => s.addItem);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="group glass rounded-2xl overflow-hidden hover:border-gold/50 transition-all duration-500 hover:shadow-[0_20px_60px_-20px_rgba(212,175,55,0.35)] flex flex-col"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-transparent opacity-70" />
        <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] bg-noir/70 backdrop-blur-md border border-gold/30 text-gold px-3 py-1.5 rounded-full">
          {product.badge}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-serif text-xl mb-2 group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.notes.map((n) => (
            <span
              key={n}
              className="text-[10px] uppercase tracking-wider text-cream/60 border border-cream/10 rounded-full px-2.5 py-0.5"
            >
              {n}
            </span>
          ))}
        </div>

        <div className="flex items-baseline justify-between mb-5">
          <span className="font-serif text-2xl gold-text">
            {product.price} €
          </span>
          <span className="text-[11px] text-cream/40">/ unité</span>
        </div>

        <div className="flex items-center justify-between border border-gold/20 rounded-lg mb-4">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="p-3 text-gold hover:bg-gold/10 transition-colors"
            aria-label="Diminuer"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="font-medium tabular-nums">{qty}</span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="p-3 text-gold hover:bg-gold/10 transition-colors"
            aria-label="Augmenter"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <button
          onClick={() => {
            addItem(product, qty);
            setQty(1);
          }}
          className="mt-auto w-full flex items-center justify-center gap-2 bg-gold/10 hover:bg-gold text-gold hover:text-noir border border-gold/40 hover:border-gold font-medium tracking-wide py-3.5 rounded-lg transition-all duration-300"
        >
          <ShoppingBag className="w-4 h-4" />
          Ajouter au Panier
        </button>
      </div>
    </motion.div>
  );
}