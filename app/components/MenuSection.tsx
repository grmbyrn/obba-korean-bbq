"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  category: string;
};

const menuItems: MenuItem[] = [
  {
    name: "Chadol Baegi",
    description: "Thinly sliced beef brisket, marbled and tender",
    price: "€16",
    category: "Beef",
  },
  {
    name: "Galbi",
    description: "Premium marinated short ribs, sweet soy glaze",
    price: "€22",
    category: "Beef",
  },
  {
    name: "Bulgogi",
    description: "Classic marinated beef, sesame and pear",
    price: "€18",
    category: "Beef",
  },
  {
    name: "Wagyu Special",
    description: "A5 Japanese wagyu, limited daily availability",
    price: "€38",
    category: "Beef",
  },
  {
    name: "Samgyeopsal",
    description: "Thick-cut pork belly, unseasoned perfection",
    price: "€14",
    category: "Pork",
  },
  {
    name: "Dwaeji Bulgogi",
    description: "Spicy marinated pork, gochujang glaze",
    price: "€15",
    category: "Pork",
  },
  {
    name: "Moksal",
    description: "Pork collar, well-marbled and juicy",
    price: "€14",
    category: "Pork",
  },
  {
    name: "Obba Combo",
    description: "Chef's selection of beef and pork for two",
    price: "€42",
    category: "Combos",
  },
  {
    name: "Family Feast",
    description: "Premium mix for 4 with all sides included",
    price: "€78",
    category: "Combos",
  },
  {
    name: "Soju Classic",
    description: "Korean rice spirit, original or flavored",
    price: "€8",
    category: "Drinks",
  },
  {
    name: "Makgeolli",
    description: "Traditional milky rice wine, slightly sweet",
    price: "€7",
    category: "Drinks",
  },
  {
    name: "Korean Craft Beer",
    description: "Rotating selection of Korean craft lagers",
    price: "€6",
    category: "Drinks",
  },
];

const categories = ["All", "Beef", "Pork", "Combos", "Drinks"];

const MenuSection = () => {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All"
      ? menuItems
      : menuItems.filter((i) => i.category === active);

  return (
    <section id="menu" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tight text-center text-foreground"
        >
          Our <span className="text-primary">Menu</span>
        </motion.h2>

        {/* Filter Bar */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-sm px-5 py-2 font-oswald text-sm uppercase tracking-wider transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="rounded-md border border-border bg-card p-5 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-oswald text-lg font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-1 font-inter text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <p className="mt-4 font-oswald text-xl font-bold text-primary">
                  {item.price}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
