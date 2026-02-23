"use client";
import { useRef, useEffect } from "react";
import { useTranslations } from "../lib/i18n";
import { motion } from "framer-motion";

type Testimonial = {
  name: string;
  text: string;
  location: string;
};

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = useTranslations();
  const testimonials: Testimonial[] = t.testimonials.reviews;
  // Duplicate testimonials for seamless scroll
  const scrollingTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const container = containerRef.current;
    const scrollContent = scrollRef.current;
    if (!container || !scrollContent) return;

    let frameId: number;
    let scrollAmount = 0;
    const speed = 1; // px per frame

    function animate() {
      // Defensive null checks for TypeScript
      if (!container || !scrollContent) return;
      scrollAmount += speed;
      if (scrollAmount >= scrollContent.scrollWidth / 2) {
        scrollAmount = 0;
      }
      container.scrollLeft = scrollAmount;
      frameId = requestAnimationFrame(animate);
    }

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground text-center mb-4">
        {t.testimonials.title}
      </h2>
      <div
        className="overflow-x-hidden relative w-full mt-8"
        style={{ height: 220 }}
        ref={containerRef}
      >
        <div
          className="flex gap-6"
          ref={scrollRef}
          style={{ width: "max-content" }}
        >
          {scrollingTestimonials.map((testimonial, idx) => {
            // Get initials for avatar
            const initials = testimonial.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase();
            return (
              <div
                key={idx}
                className="flex-shrink-0 w-[350px] md:w-[400px] rounded-2xl border border-slate-200 bg-white p-6 hover:border-amber-300 transition-colors duration-300 shadow-sm"
              >
                <p className="text-slate-600 leading-relaxed text-sm">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-xs font-bold text-navy">
                    {initials}
                  </div>
                  <div>
                    <div className="font-medium text-slate-900 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
