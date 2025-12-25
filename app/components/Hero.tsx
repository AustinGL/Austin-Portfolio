"use client";
import React from "react";
import { motion } from "framer-motion";

export default function VioletHero(): JSX.Element {
    return (
        <section
            id="hero"
            className="relative min-h-screen overflow-hidden"
            style={{ backgroundColor: '#5B2C86' }}
        >
            {/* Magazine Border Frame */}
            <div className="absolute inset-4 md:inset-8 border border-white/20 pointer-events-none z-10" />

            {/* Main Content */}
            <div className="relative z-20 min-h-screen flex flex-col justify-center items-center px-6 py-20">

                {/* Masthead */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    {/* Decorative "Portfolio" script above */}
                    <motion.p
                        className="font-serif italic text-white/80 text-xl md:text-2xl mb-4 tracking-wide"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Portfolio
                    </motion.p>

                    {/* Main Name */}
                    <h1
                        className="font-serif font-bold text-white leading-[0.85] tracking-[-0.04em]"
                        style={{
                            fontSize: 'clamp(60px, 18vw, 200px)',
                            textShadow: '4px 4px 0px rgba(199, 162, 255, 0.3)'
                        }}
                    >
                        AUSTIN
                    </h1>

                    {/* Decorative line */}
                    <motion.div
                        className="flex items-center justify-center gap-4 my-4"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <div className="w-16 md:w-24 h-[2px] bg-gradient-to-r from-transparent to-[#C7A2FF]" />
                        <span className="text-[#C7A2FF] text-xl">✦</span>
                        <div className="w-16 md:w-24 h-[2px] bg-gradient-to-l from-transparent to-[#C7A2FF]" />
                    </motion.div>

                    <h1
                        className="font-serif font-bold text-white leading-[0.85] tracking-[-0.04em]"
                        style={{
                            fontSize: 'clamp(40px, 12vw, 140px)',
                            textShadow: '3px 3px 0px rgba(199, 162, 255, 0.3)'
                        }}
                    >
                        LIWANTO
                    </h1>
                </motion.div>

                {/* Role Badge */}
                <motion.div
                    className="mt-12 md:mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3">
                        <p className="text-white text-xs md:text-sm tracking-[0.3em] uppercase text-center">
                            Full-Stack Developer <span className="text-[#C7A2FF]">&</span> UI/UX Designer
                        </p>
                    </div>
                </motion.div>

                {/* CTAs - Mobile only */}
                <motion.div
                    className="mt-16 md:hidden flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <motion.a
                        href="#projects"
                        className="group relative px-8 py-4 bg-white text-[#5B2C86] text-xs tracking-[0.15em] uppercase font-medium min-w-[160px] text-center overflow-hidden"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="absolute inset-0 bg-[#C7A2FF] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Work</span>
                    </motion.a>
                    <motion.a
                        href="/AustinGilbertLiwanto_Resume.pdf"
                        download
                        className="group relative px-8 py-4 border border-white text-white text-xs tracking-[0.15em] uppercase font-medium min-w-[160px] text-center overflow-hidden"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative z-10 group-hover:text-[#5B2C86] transition-colors duration-300">Download CV</span>
                    </motion.a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                >
                    <motion.div
                        className="w-[1px] h-12 bg-[#C7A2FF]/50"
                        animate={{ scaleY: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            </div>

            {/* Large Ghosted Text Behind */}
            <motion.div
                className="absolute bottom-[5%] left-0 right-0 pointer-events-none overflow-hidden z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.05 }}
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
