"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function SimpleHero(): JSX.Element {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-white flex items-center justify-center relative px-6">

      {/* Main Content - Truly Centered */}
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          className="space-y-8 w-full text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Name in Large Serif */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
            Austin Gilbert<br />
            <span className="block mt-1 md:mt-2">Liwanto</span>
          </h1>

          {/* Elegant Divider */}
          <div className="flex justify-center">
            <div className="w-16 h-px bg-accent" />
          </div>

          {/* Tagline */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-gray-600 font-light tracking-wide max-w-2xl mx-auto px-4">
            Full-Stack Developer & UI/UX Designer
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator - Fixed at Bottom */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-accent transition-all duration-500 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        aria-label="Scroll to next section"
      >
        <span className="text-xs tracking-widest uppercase font-sans">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
}
