"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function VioletAbout(): JSX.Element {
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
            {/* Decorative background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-30"
                    style={{
                        background: 'radial-gradient(circle, rgba(199, 162, 255, 0.4) 0%, transparent 70%)'
                    }}
                />
            </div>

            {/* Border Frame */}
            <div className="absolute inset-4 md:inset-8 border border-[#5B2C86]/10 pointer-events-none" />

            {/* Top Bar */}
            <motion.div
                className="absolute top-6 md:top-10 left-6 md:left-12 right-6 md:right-12 flex justify-between items-start z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <span className="text-[#8B5FBF] text-[10px] tracking-[0.3em] uppercase">Profile</span>
                <span className="text-gray-400 text-[10px] tracking-[0.2em] uppercase">02 / 04</span>
            </motion.div>

            {/* Main Content */}
            <div className="relative z-10 min-h-screen flex items-center py-24 md:py-32">
                <div className="container-editorial">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left - Visual Block */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div
                                className="relative aspect-[6/7] overflow-hidden"
                                style={{ backgroundColor: '#5B2C86' }}
                            >
                                <Image
                                    src="/profile.png"
                                    alt="Austin Gilbert Liwanto"
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                {/* Gradient overlay for text readability */}
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background: 'linear-gradient(to top, rgba(91, 44, 134, 0.9) 0%, rgba(91, 44, 134, 0.3) 40%, transparent 70%)'
                                    }}
                                />

                                {/* Content overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                                    <p className="text-white text-[10px] tracking-[0.3em] uppercase mb-4">
                                        Based in Indonesia
                                    </p>
                                    <h3 className="font-serif font-bold text-white text-2xl md:text-3xl mb-4">
                                        Multimedia Nusantara<br />University
                                    </h3>
                                    <p className="text-white/70 text-sm">
                                        Undergraduate Student
                                    </p>
                                </div>

                                {/* Corner decorations */}
                                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#C7A2FF]" />
                                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#C7A2FF]" />
                            </div>
                        </motion.div>

                        {/* Right - Content */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <p className="text-[#8B5FBF] text-[10px] tracking-[0.3em] uppercase mb-4">
                                    About the Artist
                                </p>
                                <h2
                                    className="font-serif font-bold text-[#5B2C86]"
                                    style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
                                >
                                    PROFILE
                                </h2>
                            </div>

                            {/* Pull Quote */}
                            <blockquote className="relative pl-8 border-l-2 border-[#C7A2FF]">
                                <span
                                    className="absolute -left-4 -top-4 text-[#C7A2FF] font-serif"
                                    style={{ fontSize: '60px', lineHeight: 1 }}
                                >
                                    "
                                </span>
                                <p className="font-serif italic text-[#8B5FBF] text-xl md:text-2xl leading-relaxed">
                                    Obsessed with making things beautifull.
                                </p>
                            </blockquote>

                            {/* Body */}
                            <p className="text-gray-600 leading-relaxed max-w-lg">
                                My journey started with building websites, but quickly evolved into an obsession
                                with understanding how everything works—from pixels to databases. I believe great
                                digital experiences are invisible. They don't demand attention; they simply work.
                            </p>

                            {/* Skills Grid */}
                            <div>
                                <p className="text-[#8B5FBF] text-[10px] tracking-[0.3em] uppercase mb-6">
                                    Toolkit
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            className="p-3 border border-[#5B2C86]/20 bg-white hover:border-[#5B2C86] transition-colors group"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.05 }}
                                            viewport={{ once: true }}
                                        >
                                            <p className="text-[#5B2C86] text-center text-sm font-medium group-hover:text-[#8B5FBF] transition-colors">
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

            {/* Large Ghosted Text */}
            <motion.div
                className="absolute bottom-[10%] left-0 right-0 pointer-events-none overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.03 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <p
                    className="font-serif font-bold text-[#5B2C86] whitespace-nowrap"
                    style={{
                        fontSize: 'clamp(150px, 30vw, 400px)',
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
