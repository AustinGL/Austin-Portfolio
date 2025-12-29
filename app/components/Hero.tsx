"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero(): JSX.Element {
    return (
        <section
            id="hero"
            className="relative min-h-screen overflow-hidden"
            style={{ backgroundColor: '#5B2C86' }}
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-30"
                    style={{
                        background: 'radial-gradient(circle, rgba(199, 162, 255, 0.4) 0%, transparent 60%)'
                    }}
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-20"
                    style={{
                        background: 'radial-gradient(circle, rgba(139, 95, 191, 0.5) 0%, transparent 60%)'
                    }}
                    animate={{
                        x: [0, -40, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Border Frame with corner accents - CONSISTENT: inset-6 md:inset-10, w-6 h-6 corners */}
            <div className="absolute inset-6 md:inset-10 border border-white/15 pointer-events-none z-10" />
            <div className="absolute top-6 left-6 md:top-10 md:left-10 w-6 h-6 border-l-2 border-t-2 border-[#C7A2FF]/60 pointer-events-none z-10" />
            <div className="absolute top-6 right-6 md:top-10 md:right-10 w-6 h-6 border-r-2 border-t-2 border-[#C7A2FF]/60 pointer-events-none z-10" />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 w-6 h-6 border-l-2 border-b-2 border-[#C7A2FF]/60 pointer-events-none z-10" />
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-6 h-6 border-r-2 border-b-2 border-[#C7A2FF]/60 pointer-events-none z-10" />

            {/* Page indicator - CONSISTENT format */}
            <motion.div
                className="absolute top-8 md:top-12 right-8 md:right-14 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase">01 / 04</span>
            </motion.div>

            {/* Main Content */}
            <div className="relative z-20 min-h-screen flex flex-col justify-center items-center px-6 py-20">

                {/* Masthead */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    {/* Decorative subtitle */}
                    <motion.p
                        className="font-serif italic text-[#C7A2FF] text-base md:text-lg mb-8 tracking-[0.3em]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Portfolio 2026
                    </motion.p>

                    {/* Main Name with shadow effect */}
                    <h1
                        className="font-serif font-bold text-white leading-[0.85] tracking-[-0.03em]"
                        style={{
                            fontSize: 'clamp(56px, 15vw, 160px)',
                            textShadow: '4px 4px 0px rgba(199, 162, 255, 0.25)'
                        }}
                    >
                        AUSTIN
                    </h1>

                    {/* Decorative Divider */}
                    <motion.div
                        className="flex items-center justify-center gap-4 my-6"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#C7A2FF]" />
                        <motion.span
                            className="text-[#C7A2FF] text-xl"
                            animate={{ rotate: [0, 180, 360] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                            ✦
                        </motion.span>
                        <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#C7A2FF]" />
                    </motion.div>

                    <h1
                        className="font-serif font-bold text-white leading-[0.85] tracking-[-0.03em]"
                        style={{
                            fontSize: 'clamp(44px, 12vw, 130px)',
                            textShadow: '3px 3px 0px rgba(199, 162, 255, 0.25)'
                        }}
                    >
                        LIWANTO
                    </h1>
                </motion.div>

                {/* Role Badge with decorative corners */}
                <motion.div
                    className="mt-14"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="relative">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/20 px-8 py-4">
                            <p className="text-white/90 text-xs md:text-sm tracking-[0.3em] uppercase text-center">
                                Full-Stack Developer <span className="text-[#C7A2FF] mx-2">✦</span> UI/UX Designer
                            </p>
                        </div>
                        <div className="absolute -top-1 -left-1 w-3 h-3 border-l border-t border-[#C7A2FF]" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 border-r border-t border-[#C7A2FF]" />
                        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l border-b border-[#C7A2FF]" />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r border-b border-[#C7A2FF]" />
                    </div>
                </motion.div>

                {/* CTAs with enhanced hover - Mobile only */}
                <motion.div
                    className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 md:hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <motion.a
                        href="#projects"
                        className="group relative px-10 py-4 bg-white text-[#5B2C86] text-xs tracking-[0.15em] uppercase font-semibold overflow-hidden"
                        whileHover={{ scale: 1.02, y: -3 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="absolute inset-0 bg-[#C7A2FF] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Work</span>
                    </motion.a>
                    <motion.a
                        href="/AustinGilbertLiwanto_Resume.pdf"
                        download
                        className="group relative px-10 py-4 border border-white/40 text-white text-xs tracking-[0.15em] uppercase font-semibold overflow-hidden"
                        whileHover={{ scale: 1.02, y: -3 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative z-10 group-hover:text-[#5B2C86] transition-colors duration-300">Download CV</span>
                    </motion.a>
                </motion.div>
            </div>

            {/* Decorative Background Text - CONSISTENT: opacity 0.04 */}
            <motion.div
                className="absolute bottom-[5%] left-0 right-0 pointer-events-none overflow-hidden z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.04 }}
                transition={{ duration: 1.5, delay: 0.5 }}
            >
                <p
                    className="font-serif font-bold text-white whitespace-nowrap"
                    style={{
                        fontSize: 'clamp(100px, 25vw, 350px)',
                        letterSpacing: '-0.04em',
                        marginLeft: '-5%'
                    }}
                >
                    CREATIVE
                </p>
            </motion.div>
        </section>
    );
}
