"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CleanAbout(): JSX.Element {
  return (
    <section className="section-spacing bg-white">
      <div className="container-editorial">

        {/* Simple Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ margin: "-50px" }}
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">About</h2>
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
          <p className="text-lg leading-relaxed text-gray-700">
            Started as a curious developer exploring the endless possibilities of code.
            Over the years, I've honed my skills in full-stack development, working
            with cutting-edge technologies and frameworks.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            I believe in writing clean, maintainable code and creating solutions
            that not only work well but also provide exceptional user experiences.
            Every project is an opportunity to learn something new and push boundaries.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            When I'm not coding, you'll find me exploring new design trends,
            contributing to open source projects, and sharing knowledge with the
            developer community.
          </p>

          {/* Simple Skills List */}
          <div className="pt-12 border-t border-gray-200 mt-12">
            <h3 className="font-serif text-2xl font-bold mb-6">Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Figma', 'UI/UX', 'Performance', 'SEO'].map((skill) => (
                <span key={skill} className="text-sm text-gray-600 font-sans tracking-wide">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Simple CTA */}
          <div className="pt-12 text-center">
            <a href="#contact" className="btn-accent">
              Let's Connect
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
