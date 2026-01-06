"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero(): JSX.Element {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
            style={{ backgroundColor: '#1a0a2e' }}
        >
            {/* Subtle gradient overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(45, 27, 70, 0.4) 0%, transparent 70%)'
                }}
            />

            {/* Main Content */}
            <div className="relative z-10 text-center px-6 py-20">

                {/* Subtle pre-title */}
                <motion.p
                    className="text-white/30 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-8 md:mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Portfolio 2026
                </motion.p>

                {/* Main Name */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="flex flex-col gap-2 md:gap-4"
                >
                    <h1
                        className="font-serif font-normal text-white leading-[0.9] tracking-[-0.02em]"
                        style={{ fontSize: 'clamp(72px, 15vw, 180px)' }}
                    >
                        AUSTIN
                    </h1>
                    <h1
                        className="font-serif font-normal text-white/80 leading-[0.9] tracking-[-0.02em]"
                        style={{ fontSize: 'clamp(56px, 12vw, 140px)' }}
                    >
                        LIWANTO
                    </h1>
                </motion.div>

                {/* Role */}
                <motion.p
                    className="text-white/50 text-xs md:text-sm tracking-[0.3em] uppercase mt-12 md:mt-16 mx-auto max-w-max"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    Full-Stack Developer & UI/UX Designer
                </motion.p>

                {/* Mobile Resume Link */}
                <motion.a
                    href="/AustinGilbertLiwanto_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block md:hidden mt-8 text-sm tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors border-b border-white/40 pb-1 hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/50 focus-visible:outline-offset-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    Download Resume
                </motion.a>
            </div>
        </section>
    );
}
