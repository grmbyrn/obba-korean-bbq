"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Embers = dynamic(() => import("./Embers"), {
  ssr: false,
});

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background gradient simulating grill glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,_hsl(20_84%_48%/0.12)_0%,_transparent_60%)]" />

      {/* Embers */}
      <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none">
        <Embers />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-inter text-sm uppercase tracking-[0.3em] text-primary mb-4"
        >
          Barcelona&apos;s Finest
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-oswald text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-foreground leading-none"
        >
          Obba Korean
          <br />
          <span className="text-primary">BBQ</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-inter mt-6 max-w-md mx-auto text-muted-foreground text-base md:text-lg"
        >
          An authentic Korean barbecue experience — grill your own premium cuts at your table.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#booking"
            className="rounded-sm bg-primary px-8 py-3 font-oswald text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Book a Table
          </a>
          <a
            href="#menu"
            className="rounded-sm border border-foreground/30 px-8 py-3 font-oswald text-sm font-semibold uppercase tracking-wider text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            View Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
