"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Contact(): JSX.Element {
    const email = "liwantoaustin@gmail.com";

    return (
        <section id="contact" className="relative">

            {/* Main Contact Section */}
            <div
                className="relative min-h-[80vh] overflow-hidden"
                style={{ backgroundColor: '#5B2C86' }}
            >
                {/* Animated background orbs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full opacity-20"
                        style={{
                            background: 'radial-gradient(circle, rgba(199, 162, 255, 0.4) 0%, transparent 60%)'
                        }}
                        animate={{
                            x: [0, 30, 0],
                            y: [0, 20, 0],
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full opacity-15"
                        style={{
                            background: 'radial-gradient(circle, rgba(139, 95, 191, 0.5) 0%, transparent 60%)'
                        }}
                        animate={{
                            x: [0, -25, 0],
                            y: [0, -15, 0],
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

                {/* Decorative Background Text */}
                <motion.div
                    className="absolute bottom-[5%] left-0 right-0 pointer-events-none overflow-hidden z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.04 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <p
                        className="font-serif font-bold text-white whitespace-nowrap"
                        style={{
                            fontSize: 'clamp(100px, 25vw, 350px)',
                            letterSpacing: '-0.04em',
                            marginLeft: '-5%'
                        }}
                    >
                        CONNECT
                    </p>
                </motion.div>

                {/* Border with corner accents */}
                <div className="absolute inset-6 md:inset-10 border border-white/15 pointer-events-none z-10" />
                <div className="absolute top-6 left-6 md:top-10 md:left-10 w-6 h-6 border-l-2 border-t-2 border-[#C7A2FF]/60 pointer-events-none z-10" />
                <div className="absolute top-6 right-6 md:top-10 md:right-10 w-6 h-6 border-r-2 border-t-2 border-[#C7A2FF]/60 pointer-events-none z-10" />
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 w-6 h-6 border-l-2 border-b-2 border-[#C7A2FF]/60 pointer-events-none z-10" />
                <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-6 h-6 border-r-2 border-b-2 border-[#C7A2FF]/60 pointer-events-none z-10" />

                {/* Page indicator - CONSISTENT format */}
                <motion.div
                    className="absolute top-8 md:top-12 right-8 md:right-14 z-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase">04 / 04</span>
                </motion.div>

                {/* Section label - CONSISTENT format */}
                <motion.div
                    className="absolute top-8 md:top-12 left-8 md:left-14 z-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[#C7A2FF] text-[10px] tracking-[0.3em] uppercase font-medium">Contact</span>
                </motion.div>

                {/* Main Content */}
                <div className="relative z-20 min-h-[80vh] flex flex-col items-center justify-center px-6 py-24">

                    <motion.div
                        className="text-center max-w-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-[#C7A2FF] text-[10px] tracking-[0.4em] uppercase mt-4 mb-6">
                        Get in Touch 
                        </p>

                        <h2
                            className="font-serif font-bold text-white mb-4"
                            style={{
                                fontSize: 'clamp(40px, 8vw, 80px)',
                                textShadow: '3px 3px 0px rgba(199, 162, 255, 0.2)'
                            }}
                        >
                            LET'S
                        </h2>
                        <h2
                            className="font-serif font-bold text-[#C7A2FF] mb-8"
                            style={{
                                fontSize: 'clamp(40px, 8vw, 80px)',
                                textShadow: '3px 3px 0px rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            CONNECT
                        </h2>

                        {/* Email with enhanced hover */}
                        <motion.a
                            href={`mailto:${email}`}
                            className="relative inline-flex items-center gap-3 group mb-12"
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="font-serif text-xl md:text-2xl lg:text-3xl text-white transition-colors duration-300 group-hover:text-[#C7A2FF]">
                                {email}
                            </span>
                            <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-[#C7A2FF] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            <span
                                className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-[#C7A2FF] to-[#8B5FBF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                            />
                        </motion.a>

                        {/* Social Icons with enhanced hover */}
                        <motion.div
                            className="flex justify-center gap-4 mb-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            {[
                                { icon: Github, href: "https://github.com/AustinGL", label: "GitHub" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/austin-gilbert-liwanto/", label: "LinkedIn" },
                                { icon: Mail, href: `mailto:${email}`, label: "Email" }
                            ].map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target={social.label !== "Email" ? "_blank" : undefined}
                                    rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                                    className="group relative p-5 border border-white/20 text-white overflow-hidden transition-all duration-300 hover:border-[#C7A2FF]"
                                    aria-label={social.label}
                                    whileHover={{ y: -3, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <span className="absolute inset-0 bg-[#C7A2FF] transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300" />
                                    <social.icon className="relative z-10 w-5 h-5 transition-colors duration-300 group-hover:text-[#5B2C86]" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Resume CTA Strip */}
            <div
                className="relative py-12 md:py-16"
                style={{ backgroundColor: '#8B5FBF' }}
            >
                {/* Decorative background text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                    <p
                        className="font-serif font-bold text-white/[0.06] whitespace-nowrap"
                        style={{ fontSize: 'clamp(60px, 12vw, 150px)', letterSpacing: '-0.04em' }}
                    >
                        RESUME
                    </p>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-white/60 text-[10px] tracking-[0.3em] uppercase mb-1">Download</p>
                        <p className="text-white text-lg font-serif">
                            Want to know more about me?
                        </p>
                    </div>
                    <motion.a
                        href="/AustinGilbertLiwanto_Resume.pdf"
                        download
                        className="group relative px-10 py-4 bg-white text-[#5B2C86] text-xs tracking-[0.15em] uppercase font-semibold overflow-hidden"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="absolute inset-0 bg-[#5B2C86] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">Download Resume</span>
                    </motion.a>
                </div>
            </div>

            {/* Footer */}
            <div className="py-10 bg-[#5B2C86] border-t border-white/10">
                <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-white/40 text-[10px] tracking-[0.15em] uppercase">
                        © 2026 Austin Gilbert Liwanto
                    </p>
                    <p className="text-white/40 text-[10px] tracking-[0.15em] uppercase flex items-center gap-2">
                        <span>Made with</span>
                        <motion.span
                            animate={{ scale: [1, 1.4, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            ♥
                        </motion.span>
                        <span>and lots of coffee</span>
                    </p>
                    <p className="text-white/40 text-[10px] tracking-[0.15em] uppercase">
                        Full-Stack Developer & UI/UX Designer
                    </p>
                </div>
            </div>
        </section>
    );
}
