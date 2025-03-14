"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const textGradient =
  "bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent";

export function AnimatedWords() {
  const words = ["Gamer", "Trekker", "Hiker", "Traveler", "Foodie"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[1.5em] w-32 inline-flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={`absolute font-bold ${textGradient}`}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
