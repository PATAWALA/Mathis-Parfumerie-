"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { useCartStore } from "@/lib/store";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    totalPrice,
  } = useCartStore();

  const handleWhatsApp = () => {
    const lines = items.map(
      (i) => `• ${i.name} — ${i.quantity} × ${i.price}€ = ${i.quantity * i.price}€`
    );
    const total = totalPrice();
    const message = encodeURIComponent(
      `Bonjour Mathis 👋\n\nJe souhaite valider ma commande PATAWALA :\n\n${lines.join(
        "\n"
      )}\n\n💰 Total : ${total}€\n\nMerci de me confirmer la disponibilité et les modalités de livraison.`
    );
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            className="fixed inset-0 z-[60] bg-noir/70 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-noir-soft border-l border-gold/20 flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b border-gold/15">
              <div>
                <h3 className="font-serif text-2xl gold-text">Votre Panier</h3>
                <p className="text-xs text-cream/50 mt-1">
                  {items.length} article{items.length !== 1 ? "s" : ""}
                </p>
              </div>
              <button
                onClick={closeCart}
                className="p-2 rounded-full border border-gold/20 hover:border-gold hover:bg-gold/10 transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5 text-gold" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-20 text-cream/40">
                  <p className="font-serif text-lg mb-2">Votre panier est vide</p>
                  <p className="text-sm">Découvrez notre collection signature.</p>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    className="glass rounded-xl p-3 flex gap-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg border border-gold/20"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-2 mb-1">
                        <h4 className="font-serif text-sm truncate">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-cream/40 hover:text-red-400 transition-colors shrink-0"
                          aria-label="Supprimer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-gold mb-3">{item.price} €</p>
                      <div className="flex items-center justify-between border border-gold/20 rounded-lg w-fit">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-2 text-gold hover:bg-gold/10 transition-colors"
                          aria-label="Diminuer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-sm tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-2 text-gold hover:bg-gold/10 transition-colors"
                          aria-label="Augmenter"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-gold/15 p-6 space-y-4 bg-noir/40">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm uppercase tracking-widest text-cream/60">
                    Sous-total
                  </span>
                  <span className="font-serif text-3xl gold-text">
                    {totalPrice()} €
                  </span>
                </div>
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold-soft via-gold to-gold-soft text-noir font-semibold tracking-wide py-4 rounded-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Valider la commande via WhatsApp
                </button>
                <p className="text-[11px] text-center text-cream/40">
                  Vous serez redirigé vers WhatsApp avec le récap pré-rempli.
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}