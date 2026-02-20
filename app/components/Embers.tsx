"use client";

import { motion } from "framer-motion";
import { useMemo, useId } from "react";

type EmberType = {
  id: number;
  delay: number;
  left: number;
  duration: number;
};

/* Simple seeded random generator */
function createSeededRandom(seed: number) {
  return function () {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

export default function Embers() {
  const reactId = useId();

  const embers = useMemo<EmberType[]>(() => {
    // Convert React's stable ID into a numeric seed
    const seedNumber = reactId
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);

    const random = createSeededRandom(seedNumber);

    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      delay: random() * 3,
      left: 10 + random() * 80,
      duration: 2 + random(),
    }));
  }, [reactId]);

  return (
    <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none">
      {embers.map((e) => (
        <motion.div
          key={e.id}
          className="absolute bottom-0 w-1 h-1 rounded-full bg-primary"
          style={{ left: `${e.left}%` }}
          initial={{ y: 0, opacity: 0.9, scale: 1 }}
          animate={{ y: -120, opacity: 0, scale: 0 }}
          transition={{
            duration: e.duration,
            delay: e.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}