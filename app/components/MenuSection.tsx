"use client";
import { useState } from "react";
import { useTranslations } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";

const MenuSection = () => {
  const t = useTranslations();
  const [active, setActive] = useState("all");
  const menuSection = t.menuSection;
  const items = menuSection?.items ? Object.values(menuSection.items) : [];
  const categories = menuSection?.categories
    ? Object.keys(menuSection.categories)
    : [];
  const filtered =
    active === "all" ? items : items.filter((i) => i.category === active);

  return (
    <section id="menu" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-5xl"
      >
        <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tight text-center text-foreground">
          {menuSection?.title || "Our Menu"}
        </h2>

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
              {(menuSection?.categories as Record<string, string>)?.[cat] ||
                cat}
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
      </motion.div>
    </section>
  );
};

export default MenuSection;
