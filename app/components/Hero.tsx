"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/korean-bbq-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Korean BBQ background video"
      />
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
      {/* Background gradient simulating grill glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background z-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,_hsl(20_84%_48%/0.12)_0%,_transparent_60%)] z-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-30 text-center px-6">
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
          className="font-oswald text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-foreground leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]"
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
          An authentic Korean barbecue experience — grill your own premium cuts
          at your table.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#booking"
            className="relative rounded-lg bg-primary/70 backdrop-blur-sm px-6 py-2 font-oswald text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-md border border-primary/20 transition-all duration-200 hover:scale-102 hover:bg-primary/80 hover:shadow-primary/20 hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-primary/40"
            style={{ WebkitBackdropFilter: "blur(4px)" }}
          >
            Book a Table
          </a>
          <a
            href="#menu"
            className="relative rounded-lg bg-white/10 backdrop-blur-sm px-6 py-2 font-oswald text-sm font-semibold uppercase tracking-wider text-foreground shadow-md border border-white/20 transition-all duration-200 hover:scale-102 hover:bg-white/20 hover:text-primary hover:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
            style={{ WebkitBackdropFilter: "blur(4px)" }}
          >
            View Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
