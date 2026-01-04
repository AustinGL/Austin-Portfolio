"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About(): JSX.Element {
    const skills = [
        'JavaScript',
        'TypeScript',
        'React.js',
        'Next.js',
        'Python',
        'Laravel',
        'Tailwind',
        'Figma',
    ];

    return (
        <section
            id="about"
            className="relative min-h-screen overflow-hidden"
            style={{ backgroundColor: '#f5f5f0' }}
        >
            {/* Page indicator */}
            <motion.div
                className="absolute top-8 md:top-12 right-8 md:right-12 z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <span className="text-[#1a0a2e]/30 text-[10px] tracking-[0.2em] uppercase">02 / 04</span>
            </motion.div>

            {/* Main Content */}
            <div className="relative z-10 min-h-screen flex items-center py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        {/* Left - Image */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative aspect-[3/4] max-w-[400px] overflow-hidden">
                                <Image
                                    src="/profile.png"
                                    alt="Portrait of Austin Gilbert Liwanto - Full-Stack Developer and UI/UX Designer"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Subtle overlay */}
                                <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(to top, rgba(26, 10, 46, 0.3) 0%, transparent 40%)'
                                    }}
                                />
                            </div>

                            {/* Caption */}
                            <motion.div
                                className="mt-6"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-[#1a0a2e]/50 text-[10px] tracking-[0.2em] uppercase">
                                    Based in Indonesia • 20 Years Old
                                </p>
                                <p className="text-[#1a0a2e]/70 text-xs mt-1">
                                    Multimedia Nusantara University
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Right - Content */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Section Label */}
                            <div>
                                <p className="text-[#1a0a2e]/50 text-[10px] tracking-[0.3em] uppercase mb-4">
                                    About
                                </p>
                                <h2
                                    className="font-serif text-[#1a0a2e]"
                                    style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
                                >
                                    Profile
                                </h2>
                            </div>

                            {/* Quote */}
                            <blockquote className="border-l border-[#1a0a2e]/20 pl-6">
                                <p className="font-serif italic text-[#1a0a2e]/70 text-xl md:text-2xl leading-relaxed">
                                    I love building things that matter.
                                </p>
                            </blockquote>

                            {/* Body */}
                            <p className="text-[#1a0a2e]/70 leading-[1.9] text-[15px]">
                                I build websites and apps using React, Next.js, and Laravel. Most of my work
                                involves making things that are easy to use and nice to look at. I also do
                                UI/UX design on the side basically, if it involves making stuff for the web and solving problems, I'm into it.
                            </p>

                            {/* Skills */}
                            <div>
                                <p className="text-[#1a0a2e]/50 text-[10px] tracking-[0.3em] uppercase mb-6">
                                    Toolkit
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {skills.map((skill, index) => (
                                        <motion.span
                                            key={skill}
                                            className="px-4 py-2 text-xs tracking-[0.1em] uppercase text-[#1a0a2e]/70 border border-[#1a0a2e]/15"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                            viewport={{ once: true }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
