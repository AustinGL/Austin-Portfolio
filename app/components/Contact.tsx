"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact(): JSX.Element {
    const email = "liwantoaustin@gmail.com";

    return (
        <section id="contact" style={{ backgroundColor: '#1a0a2e' }}>

            {/* Main Contact Section */}
            <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-24">

                {/* Page indicator */}
                <motion.p
                    className="text-white/30 text-[10px] tracking-[0.4em] uppercase mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    04 / 04
                </motion.p>

                {/* Title */}
                <motion.h2
                    className="font-serif text-white text-center mb-8"
                    style={{ fontSize: 'clamp(40px, 10vw, 100px)' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Get in Touch
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    className="text-white/50 text-sm md:text-base text-center max-w-md mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Have a project in mind or just want to say hello? I'd love to hear from you.
                </motion.p>

                {/* Email */}
                <motion.a
                    href={`mailto:${email}`}
                    className="group relative font-serif text-xl md:text-2xl lg:text-3xl text-white/80 hover:text-white transition-colors mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    {email}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.a>

                {/* Social Links */}
                <motion.div
                    className="flex items-center gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    {[
                        { icon: Github, href: "https://github.com/AustinGL", label: "GitHub" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/austin-gilbert-liwanto/", label: "LinkedIn" },
                        { icon: Mail, href: `mailto:${email}`, label: "Email" }
                    ].map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target={social.label !== "Email" ? "_blank" : undefined}
                            rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                            className="text-white/50 hover:text-white transition-colors p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/50 focus-visible:outline-offset-2"
                            aria-label={social.label}
                        >
                            <social.icon className="w-6 h-6 md:w-5 md:h-5" />
                        </a>
                    ))}
                </motion.div>
            </div>

            {/* Resume Strip */}
            <div
                className="py-12 md:py-16 border-t border-white/10"
                style={{ backgroundColor: '#2d1b46' }}
            >
                <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase mb-1">Download</p>
                        <p className="text-white/70 text-sm">
                            Want to know more about my experience?
                        </p>
                    </div>
                    <a
                        href="/AustinGilbertLiwanto_Resume.pdf"
                        download
                        className="text-xs tracking-[0.15em] uppercase text-white/70 hover:text-white border border-white/30 hover:border-white px-8 py-3 transition-all"
                    >
                        Download Resume
                    </a>
                </div>
            </div>

            {/* Footer */}
            <div className="py-10 border-t border-white/5">
                <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-white/30 text-[10px] tracking-[0.15em] uppercase">
                        © {new Date().getFullYear()} Austin Gilbert Liwanto
                    </p>
                    <p className="text-white/30 text-[10px] tracking-[0.15em] uppercase">
                        Made with a lot of coffee
                    </p>
                </div>
            </div>
        </section>
    );
}
