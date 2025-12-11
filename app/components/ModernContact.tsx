"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ModernContact(): JSX.Element {
  return (
    <section className="section-spacing bg-white">
      <div className="container-editorial">

        {/* Centered Heading */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ margin: "-50px" }}
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">Get In Touch</h2>
          <div className="divider-center" />
          <p className="text-base text-gray-600 mt-6 font-light">
            Have a project in mind? Let's collaborate and create something beautiful.
          </p>
        </motion.div>

        {/* Centered Email Link */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ margin: "-50px" }}
        >
          <a
            href="mailto:liwantoaustin@gmail.com"
            className="text-xl md:text-2xl font-serif hover-underline inline-block"
          >
            liwantoaustin@gmail.com
          </a>
        </motion.div>

        {/* Social Icons - Minimal */}
        <motion.div
          className="flex justify-center gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ margin: "-50px" }}
        >
          <a
            href="https://github.com/AustinGL"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-accent transition-all duration-500"
            aria-label="Visit Austin's GitHub profile"
          >
            <Github className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/austin-gilbert-liwanto/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-accent transition-all duration-500"
            aria-label="Connect with Austin on LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          <a
            href="mailto:liwantoaustin@gmail.com"
            className="hover-accent transition-all duration-500"
            aria-label="Send email to liwantoaustin@gmail.com"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Simple Footer */}
        <motion.div
          className="text-center pt-12 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ margin: "-50px" }}
        >
          <p className="text-sm text-gray-500 font-sans mb-4">
            © {new Date().getFullYear()} Austin Gilbert Liwanto
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs text-gray-400 hover:text-accent transition-all duration-500 uppercase tracking-widest font-sans"
          >
            Back to Top
          </button>
        </motion.div>
      </div>
    </section>
  );
}
