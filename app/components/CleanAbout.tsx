"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CleanAbout(): JSX.Element {
  return (
    <section className="section-spacing bg-white">
      <div className="container-editorial">

        {/* Simple Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ margin: "-50px" }}
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">About Me</h2>
          <div className="divider-center" />
        </motion.div>

        {/* Single Column of Elegant Text */}
        <motion.div
          className="max-w-2xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ margin: "-50px" }}
        >
          <p className="text-base leading-relaxed text-gray-700 text-justify">
            I started my tech journey building websites, but these days I'm obsessed with figuring out how everything works and learning new things.
          </p>

          {/* Simple Skills List */}
          <div className="pt-8 border-t border-gray-200 mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {['JavaScript', 'TypeScript', 'Python', 'React.js', 'Next.js', 'Laravel', 'Tailwind CSS', 'Figma'].map((skill) => (
                <span key={skill} className="text-sm text-gray-600 font-sans tracking-wide">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Simple CTA */}
          <div className="pt-12 text-center">
            <a
              href="#contact"
              className="btn-minimal"
              aria-label="Navigate to contact section to connect with Austin"
            >
              Let's Connect
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
