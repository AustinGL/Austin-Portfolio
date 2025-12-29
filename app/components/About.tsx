"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About(): JSX.Element {
    const skills = [
        { name: 'JavaScript', category: 'Language' },
        { name: 'TypeScript', category: 'Language' },
        { name: 'React.js', category: 'Framework' },
        { name: 'Next.js', category: 'Framework' },
        { name: 'Python', category: 'Language' },
        { name: 'Laravel', category: 'Framework' },
        { name: 'Tailwind', category: 'Styling' },
        { name: 'Figma', category: 'Design' },
    ];

    return (
        <section
            id="about"
            className="relative min-h-screen overflow-hidden"
            style={{ backgroundColor: '#FAFAFA' }}
        >
            {/* Decorative background orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-25"
                    style={{
                        background: 'radial-gradient(circle, rgba(199, 162, 255, 0.4) 0%, transparent 60%)'
                    }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15"
                    style={{
                        background: 'radial-gradient(circle, rgba(139, 95, 191, 0.4) 0%, transparent 60%)'
                    }}
                />
            </div>

            {/* Border Frame with corner accents - CONSISTENT: inset-6 md:inset-10, w-6 h-6 corners */}
            <div className="absolute inset-6 md:inset-10 border border-[#5B2C86]/10 pointer-events-none" />
            <div className="absolute top-6 left-6 md:top-10 md:left-10 w-6 h-6 border-l-2 border-t-2 border-[#8B5FBF]/40 pointer-events-none" />
            <div className="absolute top-6 right-6 md:top-10 md:right-10 w-6 h-6 border-r-2 border-t-2 border-[#8B5FBF]/40 pointer-events-none" />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 w-6 h-6 border-l-2 border-b-2 border-[#8B5FBF]/40 pointer-events-none" />
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-6 h-6 border-r-2 border-b-2 border-[#8B5FBF]/40 pointer-events-none" />

            {/* Page indicator - CONSISTENT format */}
            <motion.div
                className="absolute top-8 md:top-12 right-8 md:right-14 z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <span className="text-[#5B2C86]/30 text-[10px] tracking-[0.2em] uppercase">02 / 04</span>
            </motion.div>

            {/* Section label - CONSISTENT format */}
            <motion.div
                className="absolute top-8 md:top-12 left-8 md:left-14 z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
            </motion.div>

            {/* Main Content */}
            <div className="relative z-10 min-h-screen flex items-center py-28 md:py-36">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left - Visual Block */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                            viewport={{ once: true }}
                        >
                            <div
                                className="relative aspect-[5/6] overflow-hidden shadow-2xl"
                                style={{ backgroundColor: '#5B2C86' }}
                            >
                                <Image
                                    src="/profile.png"
                                    alt="Austin Gilbert Liwanto"
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                {/* Gradient overlay */}
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background: 'linear-gradient(to top, rgba(91, 44, 134, 0.9) 0%, rgba(91, 44, 134, 0.3) 40%, transparent 60%)'
                                    }}
                                />

                                {/* Content overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                                    <p className="text-white text-[10px] tracking-[0.3em] uppercase mb-3">
                                        Based in Indonesia
                                    </p>
                                    <h3 className="font-serif font-semibold text-white text-2xl md:text-3xl mb-2">
                                        Multimedia Nusantara<br />University
                                    </h3>
                                    <p className="text-white text-[10px] tracking-[0.3em] uppercase">
                                        Undergraduate Student
                                    </p>
                                </div>

                                {/* Corner decorations */}
                                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#C7A2FF]/60" />
                                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#C7A2FF]/60" />
                            </div>

                            {/* Floating accent box */}
                            <motion.div
                                className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#5B2C86]/20 bg-white shadow-lg hidden lg:flex items-center justify-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-center">
                                    <p className="font-serif text-3xl font-bold text-[#5B2C86]">20</p>
                                    <p className="text-[9px] tracking-[0.2em] uppercase text-gray-500">Years Old</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right - Content */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <p className="text-[#8B5FBF] text-[10px] tracking-[0.3em] uppercase mb-4 font-medium">
                                    About Me
                                </p>
                                <h2
                                    className="font-serif font-bold text-[#5B2C86]"
                                    style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
                                >
                                    PROFILE
                                </h2>
                            </div>

                            {/* Pull Quote */}
                            <blockquote className="relative pl-4 border-[#C7A2FF]">
                                <span
                                    className="absolute -left-3 -top-4 text-[#C7A2FF]/40 font-serif"
                                    style={{ fontSize: '60px', lineHeight: 1 }}
                                >
                                    "
                                </span>
                                <p className="font-serif italic text-[#8B5FBF] text-xl md:text-2xl leading-relaxed">
                                    I love building things that matter.
                                </p>
                            </blockquote>

                            {/* Body */}
                            <p className="text-gray-500 leading-[1.9] max-w-lg text-[15px]">
                                I build websites and apps using React, Next.js, and Laravel. Most of my work
                                involves making things that are easy to use and nice to look at. I also do
                                UI/UX design on the side basically, if it involves making stuff for the web and solving problems, I'm into it.
                            </p>

                            {/* Skills Grid with enhanced hover */}
                            <div>
                                <p className="text-[#8B5FBF] text-[10px] tracking-[0.3em] uppercase mb-6 font-medium">
                                    Toolkit
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            className="group relative py-4 px-4 border border-[#5B2C86]/15 bg-white hover:border-[#5B2C86] hover:bg-[#5B2C86] transition-all duration-300 cursor-default"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.05 }}
                                            viewport={{ once: true }}
                                            whileHover={{ y: -3 }}
                                        >
                                            <p className="text-[#5B2C86] text-center text-sm font-medium group-hover:text-white transition-colors duration-300">
                                                {skill.name}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Decorative Background Text - CONSISTENT: opacity 0.04 */}
            <motion.div
                className="absolute bottom-[8%] left-0 right-0 pointer-events-none overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.04 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <p
                    className="font-serif font-bold text-[#5B2C86] whitespace-nowrap"
                    style={{
                        fontSize: 'clamp(100px, 25vw, 350px)',
                        letterSpacing: '-0.04em',
                        marginLeft: '-5%'
                    }}
                >
                    PROFILE
                </p>
            </motion.div>
        </section>
    );
}
