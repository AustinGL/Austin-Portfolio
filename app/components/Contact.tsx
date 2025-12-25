"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function VioletContact(): JSX.Element {
    const email = "liwantoaustin@gmail.com";

    return (
        <section id="contact" className="relative">

            {/* Main Contact Section */}
            <div
                className="relative min-h-[80vh] overflow-hidden"
                style={{ backgroundColor: '#5B2C86' }}
            >
                {/* Border */}
                <div className="absolute inset-4 md:inset-8 border border-white/20 pointer-events-none z-10" />

                {/* Top Bar */}
                <motion.div
                    className="absolute top-6 md:top-10 left-6 md:left-12 right-6 md:right-12 flex justify-between items-start z-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[#C7A2FF] text-[10px] tracking-[0.3em] uppercase">Contact</span>
                    <span className="text-white/50 text-[10px] tracking-[0.2em] uppercase">04 / 04</span>
                </motion.div>

                {/* Decorative background */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
                        style={{
                            background: 'radial-gradient(circle, rgba(199, 162, 255, 0.5) 0%, transparent 60%)'
                        }}
                    />
                </div>

                {/* Main Content */}
                <div className="relative z-20 min-h-[80vh] flex flex-col items-center justify-center px-6 py-24">

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-[#C7A2FF] text-[10px] tracking-[0.4em] uppercase mb-8">
                            Get in Touch
                        </p>

                        <h2 className="font-serif font-bold text-white mb-4" style={{ fontSize: 'clamp(48px, 10vw, 120px)' }}>
                            LET'S
                        </h2>
                        <h2 className="font-serif font-bold text-[#C7A2FF] mb-12" style={{ fontSize: 'clamp(48px, 10vw, 120px)' }}>
                            CONNECT
                        </h2>

                        <p className="text-white/60 text-sm max-w-md mx-auto mb-12">
                            Have a project in mind? Let's collaborate and create something extraordinary together.
                        </p>

                        {/* Email - Enhanced animated hover */}
                        <motion.a
                            href={`mailto:${email}`}
                            className="relative inline-block font-serif text-2xl md:text-4xl tracking-tight text-white group mb-12 cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="inline-block transition-all duration-300 group-hover:tracking-wide group-hover:text-[#C7A2FF]">
                                {email}
                            </span>
                            {/* Animated gradient underline */}
                            <span
                                className="absolute -bottom-2 left-0 w-full h-[3px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
                                style={{
                                    background: 'linear-gradient(90deg, #C7A2FF 0%, #8B5FBF 50%, #5B2C86 100%)'
                                }}
                            />
                            {/* Glow effect */}
                            <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl bg-[#C7A2FF] -z-10" />
                        </motion.a>

                        {/* Social Icons - Enhanced */}
                        <motion.div
                            className="flex justify-center gap-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <motion.a
                                href="https://github.com/AustinGL"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative p-4 border border-white/30 text-white overflow-hidden transition-all duration-300 hover:border-[#C7A2FF]"
                                aria-label="GitHub"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="absolute inset-0 bg-[#C7A2FF] transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300" />
                                <Github className="relative z-10 w-5 h-5 group-hover:text-[#5B2C86] transition-colors duration-300" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/austin-gilbert-liwanto/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative p-4 border border-white/30 text-white overflow-hidden transition-all duration-300 hover:border-[#C7A2FF]"
                                aria-label="LinkedIn"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="absolute inset-0 bg-[#C7A2FF] transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300" />
                                <Linkedin className="relative z-10 w-5 h-5 group-hover:text-[#5B2C86] transition-colors duration-300" />
                            </motion.a>
                            <motion.a
                                href={`mailto:${email}`}
                                className="group relative p-4 border border-white/30 text-white overflow-hidden transition-all duration-300 hover:border-[#C7A2FF]"
                                aria-label="Email"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="absolute inset-0 bg-[#C7A2FF] transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300" />
                                <Mail className="relative z-10 w-5 h-5 group-hover:text-[#5B2C86] transition-colors duration-300" />
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Large Ghosted Text */}
                <motion.div
                    className="absolute bottom-[5%] left-0 right-0 pointer-events-none overflow-hidden z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.05 }}
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
            </div>

            {/* Subscribe CTA Strip */}
            <motion.div
                className="relative py-12 md:py-16 overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #C7A2FF 0%, #8B5FBF 100%)'
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="relative z-10 container-editorial">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                        {/* Left */}
                        <div className="text-center md:text-left">
                            <p className="text-white/80 text-[10px] tracking-[0.3em] uppercase mb-2">
                                Don't Miss Out
                            </p>
                            <p className="font-serif font-semibold text-white text-xl md:text-2xl uppercase">
                                Register for the next drop
                            </p>
                        </div>

                        {/* QR Code */}
                        <div className="flex flex-col items-center gap-3">
                            <div className="bg-white p-3 rounded-lg shadow-lg">
                                <Image
                                    src="/resume-qr.svg"
                                    alt="Scan for resume"
                                    width={80}
                                    height={80}
                                    className="w-20 h-20"
                                />
                            </div>
                            <span className="text-white/70 text-[10px] tracking-[0.2em] uppercase">
                                Scan for CV
                            </span>
                        </div>

                        {/* CTA */}
                        <a
                            href="/AustinGilbertLiwanto_Resume.pdf"
                            download
                            className="px-8 py-4 bg-[#5B2C86] text-white text-xs tracking-[0.15em] uppercase font-medium hover:bg-white hover:text-[#5B2C86] transition-colors"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Footer */}
            <div className="py-8 bg-[#5B2C86] border-t border-white/10">
                <div className="container-editorial flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase">
                        © 2025 Austin Gilbert Liwanto
                    </p>
                    <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase">
                        Vol. 01 / Portfolio 2025
                    </p>
                    <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase">
                        Full-Stack Developer & UI/UX Designer
                    </p>
                </div>
            </div>
        </section>
    );
}
