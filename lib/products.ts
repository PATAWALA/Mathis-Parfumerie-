export type Product = {
  id: string;
  name: string;
  origin: "Dubaï" | "Inde" | "Coffret";
  notes: string[];
  price: number;
  image: string;
  badge: string;
};

export const products: Product[] = [
  {
    id: "oud-royal",
    name: "Oud Royal Dubaï",
    origin: "Dubaï",
    notes: ["Oud", "Ambre", "Safran"],
    price: 124000,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
    badge: "Provenance Dubaï",
  },
  {
    id: "rose-taif",
    name: "Rose Taïf Impérial",
    origin: "Dubaï",
    notes: ["Rose", "Vanille", "Musc"],
    price: 108000,
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    badge: "Provenance Dubaï",
  },
  {
    id: "attar-mysore",
    name: "Attar Mysore Sandal",
    origin: "Inde",
    notes: ["Santal", "Vétiver", "Cèdre"],
    price: 138000,
    image:
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=800&q=80",
    badge: "Provenance Inde",
  },
  {
    id: "kannauj-jasmine",
    name: "Kannauj Jasmine Attar",
    origin: "Inde",
    notes: ["Jasmin", "Fleur d'oranger", "Musc blanc"],
    price: 115000,
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    badge: "Provenance Inde",
  },
  {
    id: "amber-noir",
    name: "Amber Noir Prestige",
    origin: "Dubaï",
    notes: ["Ambre", "Oud", "Vanille"],
    price: 130000,
    image:
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=800&q=80",
    badge: "Provenance Dubaï",
  },
  {
    id: "coffret-lancement",
    name: "Coffret Lancement Signature",
    origin: "Coffret",
    notes: ["Oud", "Rose", "Santal", "Musc"],
    price: 321000,
    image:
      "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?auto=format&fit=crop&w=800&q=80",
    badge: "Coffret Exclusif",
  },
  {
    id: "musk-al-haram",
    name: "Musk Al Haram",
    origin: "Dubaï",
    notes: ["Musc blanc", "Ambre", "Bois de santal"],
    price: 102000,
    image:
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
    badge: "Provenance Dubaï",
  },
  {
    id: "vetiver-india",
    name: "Vétiver Sacré Inde",
    origin: "Inde",
    notes: ["Vétiver", "Terre", "Poivre noir"],
    price: 118000,
    image:
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=800&q=80",
    badge: "Provenance Inde",
  },
];