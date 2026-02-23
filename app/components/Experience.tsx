"use client";
import { motion } from "framer-motion";
import { Flame, Beef, UtensilsCrossed } from "lucide-react";
import { useTranslations } from "../lib/i18n";

const iconMap = {
  Flame,
  Beef,
  UtensilsCrossed,
};

type ExperienceStep = {
  title: string;
  heading: string;
  description: string;
  icon?: string;
};

export default function Experience() {
  const t = useTranslations();
  const steps = (t.experience.steps as ExperienceStep[]).map((step, i) => {
    const Icon = step.icon && iconMap[step.icon as keyof typeof iconMap];
    if (!Icon && step.icon) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          `Lucide icon '${step.icon}' not found. Check iconMap and JSON.`,
        );
      }
    }
    return {
      ...step,
      Icon,
      stepNumber: step.title || `Step ${i + 1}`,
    };
  });

  return (
    <section id="experience" className="py-24 px-6 bg-secondary/40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-4xl text-center"
      >
        <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
          {t.experience.title || (
            <span>
              The <span className="text-orange-500">Obba</span> Experience
            </span>
          )}
        </h2>
        <p className="mt-4 font-inter text-muted-foreground max-w-lg mx-auto">
          {t.experience.subtitle}
        </p>

        <div className="mt-16 grid gap-12 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.heading} className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                {step.Icon ? (
                  <step.Icon className="h-7 w-7 text-primary" />
                ) : (
                  <span className="h-7 w-7 text-primary">?</span>
                )}
              </div>
              <span className="mt-4 font-oswald text-xs uppercase tracking-[0.25em] text-primary">
                {step.stepNumber}
              </span>
              <h3 className="mt-2 font-oswald text-2xl font-bold uppercase text-foreground">
                {step.heading}
              </h3>
              <p className="mt-2 font-inter text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
