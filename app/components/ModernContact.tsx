"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Copy, Check } from "lucide-react";

export default function ModernContact(): JSX.Element {
  const [copied, setCopied] = useState(false);
  const email = "liwantoaustin@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="section-spacing bg-white">
      <div className="container-editorial">

        {/* Centered Heading */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
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
          <div className="flex items-center justify-center gap-3">
            <a
              href={`mailto:${email}`}
              className="text-xl md:text-2xl font-serif hover-underline inline-block"
            >
              {email}
            </a>
          </div>
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
          className="max-w-3xl mx-auto text-center pt-8 pb-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ margin: "-50px" }}
        >
          <p className="text-sm text-gray-500 font-light mb-6">
            More projects coming soon :D
          </p>
          <p className="text-sm text-gray-500 font-light">
            © 2025 Austin Gilbert Liwanto. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
