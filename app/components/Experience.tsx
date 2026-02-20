"use client";
import { motion } from "framer-motion";
import { Flame, Beef, UtensilsCrossed } from "lucide-react";

const steps = [
  {
    icon: Flame,
    title: "Select",
    description:
      "Choose from our premium cuts of marinated beef, pork, and chef combos.",
  },
  {
    icon: Beef,
    title: "Grill",
    description:
      "Cook it yourself on our traditional tabletop charcoal grills to your perfect doneness.",
  },
  {
    icon: UtensilsCrossed,
    title: "Enjoy",
    description:
      "Wrap in fresh lettuce with ssamjang, garlic, and our signature sides.",
  },
];

const Experience = () => (
  <section id="experience" className="py-24 px-6 bg-secondary/40">
    <div className="container mx-auto max-w-4xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground"
      >
        The <span className="text-orange-500">Obba</span> Experience
      </motion.h2>
      <p className="mt-4 font-inter text-muted-foreground max-w-lg mx-auto">
        Korean BBQ is more than a meal — it&apos;s an interactive dining ritual.
      </p>

      <div className="mt-16 grid gap-12 sm:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
              <step.icon className="h-7 w-7 text-primary" />
            </div>
            <span className="mt-4 font-oswald text-xs uppercase tracking-[0.25em] text-primary">
              Step {i + 1}
            </span>
            <h3 className="mt-2 font-oswald text-2xl font-bold uppercase text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 font-inter text-sm text-muted-foreground">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
