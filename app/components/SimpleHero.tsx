"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";

export default function SimpleHero(): JSX.Element {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-white flex items-center justify-center relative px-4 sm:px-6">

      {/* Main Content - Truly Centered */}
      <div className="w-full max-w-5xl mx-auto">
        <div className="w-full text-center">
          {/* Tagline First */}
          <motion.p
            className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-light tracking-wide max-w-2xl mx-auto px-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ margin: "-50px" }}
          >
            Full-Stack Developer & UI/UX Designer
          </motion.p>

          {/* Divider and Name Group */}
          <div className="space-y-1">
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ margin: "-50px" }}
            >
              <div className="w-12 sm:w-16 h-px bg-accent" />
            </motion.div>

            {/* Name */}
            <motion.h1
              className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ margin: "-50px" }}
            >
              Austin Gilbert<br />
              <span className="block mt-1 md:mt-2">Liwanto</span>
            </motion.h1>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ margin: "-50px" }}
          >
            <a
              href="/resume.pdf"
              download="Austin_Gilbert_Liwanto_Resume.pdf"
              className="btn-minimal inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              aria-label="Download Austin Gilbert Liwanto's resume as PDF file"
            >
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="btn-minimal inline-flex items-center justify-center w-full sm:w-auto"
              aria-label="Navigate to contact section to get in touch"
            >
              <span>Get In Touch</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Fixed at Bottom */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-accent transition-all duration-500 cursor-pointer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ margin: "-50px" }}
        aria-label="Scroll down to next section"
      >
        <span className="text-xs tracking-widest uppercase font-sans">Scroll</span>
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
      </motion.button>
    </section>
  );
}
