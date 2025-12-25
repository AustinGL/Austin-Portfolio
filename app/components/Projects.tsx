"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "UMN Mentoring",
        category: "Web Platform",
        year: "2024",
        description: "A web platform showcasing mentoring program schedules with advanced search and filter tools.",
        pullQuote: "Connecting mentors and students through intuitive digital experiences.",
        link: "https://mentoring.umn.ac.id/#/",
        image: "/projects/MentoringUMN.avif"
    },
    {
        id: 2,
        title: "Melali",
        category: "Tourism Web",
        year: "2024",
        description: "Showcasing Bali's destinations with detailed attraction info and travel experiences.",
        pullQuote: "Where wanderlust meets digital craft.",
        link: "https://melali-in-bali.vercel.app/",
        image: "/projects/Melali.avif"
    },
    {
        id: 3,
        title: "Evenlix",
        category: "Event Platform",
        year: "2023",
        description: "Event management with client and admin interfaces for browsing and ticketing.",
        pullQuote: "Every great event deserves a seamless experience.",
        link: "https://moreno.xo.je/?i=1",
        image: "/projects/Evenlix.avif"
    },
    {
        id: 4,
        title: "Co Waste",
        category: "UI/UX Design",
        year: "2023",
        description: "Mobile app motivating users to recycle food waste into reward points.",
        pullQuote: "Turning waste into worth, one tap at a time.",
        link: "https://www.figma.com/proto/rgtHJHgombG6W97CAwf0XL/Co-Waste?node-id=611-2985",
        image: "/projects/Co-Waste.avif"
    }
];

export default function VioletProjects(): JSX.Element {
    return (
        <section id="projects" className="bg-white">

            {/* Section Header - Magazine Style */}
            <div
                className="relative py-24 md:py-32 overflow-hidden"
                style={{ backgroundColor: '#5B2C86' }}
            >
                {/* Decorative background text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                    <p
                        className="font-serif font-bold text-white/5 whitespace-nowrap"
                        style={{ fontSize: 'clamp(150px, 30vw, 400px)', letterSpacing: '-0.04em' }}
                    >
                        WORKS
                    </p>
                </div>

                {/* Border */}
                <div className="absolute inset-4 md:inset-8 border border-white/20 pointer-events-none" />

                {/* Header Content */}
                <motion.div
                    className="relative z-10 text-center px-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-[#C7A2FF] text-[10px] tracking-[0.4em] uppercase mb-6">
                        Selected Works
                    </p>
                    <h2 className="font-serif font-bold text-white" style={{ fontSize: 'clamp(48px, 10vw, 120px)' }}>
                        PROJECTS
                    </h2>
                    <div className="flex items-center justify-center gap-4 mt-6">
                        <div className="w-12 md:w-20 h-[2px] bg-gradient-to-r from-transparent to-[#C7A2FF]" />
                        <span className="text-[#C7A2FF]">✦</span>
                        <div className="w-12 md:w-20 h-[2px] bg-gradient-to-l from-transparent to-[#C7A2FF]" />
                    </div>
                </motion.div>
            </div>

            {/* Project Spreads */}
            {projects.map((project, index) => (
                <motion.article
                    key={project.id}
                    className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div
                        className={`relative w-full lg:w-[50%] min-h-[40vh] lg:min-h-[80vh] flex items-center justify-center p-6 md:p-8 lg:p-12 group overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                        style={{ backgroundColor: '#FFFFFF' }}
                    >
                        {/* Background text*/}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden gap-2">
                            {[...Array(5)].map((_, i) => (
                                <span
                                    key={i}
                                    className="font-serif font-bold text-[#5B2C86]/[0.03] whitespace-nowrap uppercase"
                                    style={{ fontSize: 'clamp(60px, 12vw, 150px)' }}
                                >
                                    {project.title} • {project.title} • {project.title}
                                </span>
                            ))}
                        </div>

                        {/* Image Container */}
                        <div className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] z-10">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
                                className="object-contain transition-transform duration-700 group-hover:scale-105"
                                priority={index < 2}
                            />
                        </div>

                        {/* Violet overlay on hover */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
                            style={{
                                background: 'linear-gradient(135deg, rgba(91, 44, 134, 0.1) 0%, rgba(139, 95, 191, 0.1) 100%)'
                            }}
                        />
                    </div>

                    {/* Content Side - 50% */}
                    <div
                        className={`relative w-full lg:w-[50%] flex flex-col justify-between p-8 md:p-12 lg:p-16 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                        style={{ backgroundColor: index % 2 === 0 ? '#FAFAFA' : 'white' }}
                    >
                        {/* Category & Year */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#8B5FBF] text-[11px] tracking-[0.2em] uppercase">
                                {project.category} — {project.year}
                            </span>
                        </motion.div>

                        {/* Middle - Content */}
                        <motion.div
                            className="my-8 lg:my-0"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            {/* Title */}
                            <h3
                                className="font-serif font-bold text-[#5B2C86] mb-6"
                                style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
                            >
                                {project.title}
                            </h3>

                            {/* Pull Quote */}
                            <blockquote className="relative pl-6 mb-8 border-l-2 border-[#C7A2FF]">
                                <span
                                    className="absolute -left-2 -top-1 text-[#C7A2FF]/50 font-serif"
                                    style={{ fontSize: '36px', lineHeight: 1 }}
                                >
                                    "
                                </span>
                                <p className="font-serif italic text-[#8B5FBF] text-base md:text-lg leading-relaxed">
                                    {project.pullQuote}
                                </p>
                            </blockquote>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                                {project.description}
                            </p>
                        </motion.div>

                        {/* Bottom - Link */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <motion.a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-3 text-[#5B2C86] overflow-hidden"
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="relative text-xs tracking-[0.2em] uppercase font-medium">
                                    View Project
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C7A2FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                </span>
                                <span className="relative flex items-center justify-center w-8 h-8 border border-[#5B2C86]/30 group-hover:border-[#C7A2FF] group-hover:bg-[#C7A2FF] transition-all duration-300">
                                    <ArrowUpRight className="w-4 h-4 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </span>
                            </motion.a>

                            {/* Decorative line */}
                            <div className="w-12 h-[2px] bg-[#C7A2FF] mt-6" />
                        </motion.div>


                    </div>
                </motion.article>
            ))}

            {/* Subscribe/CTA Strip */}
            <motion.div
                className="relative py-16 md:py-24 overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #5B2C86 0%, #8B5FBF 100%)'
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {/* Border */}
                <div className="absolute inset-4 md:inset-8 border border-white/20 pointer-events-none" />

                <div className="relative z-10 container-editorial text-center">
                    <p className="text-[#C7A2FF] text-[10px] tracking-[0.4em] uppercase mb-4">
                        Want to see more?
                    </p>
                    <h3 className="font-serif font-bold text-white text-3xl md:text-5xl mb-8">
                        Let's Create Together
                    </h3>
                    <a
                        href="#contact"
                        className="inline-block px-8 py-4 bg-white text-[#5B2C86] text-xs tracking-[0.15em] uppercase font-medium hover:bg-[#C7A2FF] transition-colors"
                    >
                        Get in Touch
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
