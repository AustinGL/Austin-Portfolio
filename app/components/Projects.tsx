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
        pullQuote: "Connecting mentors and students through intuitive design.",
        techStack: ["React.js", "Tailwind CSS", "Node.js", "MySQL"],
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
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
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
        techStack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
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
        techStack: ["Figma", "Prototyping", "UI/UX", "Mobile Design"],
        link: "https://www.figma.com/proto/rgtHJHgombG6W97CAwf0XL/Co-Waste?node-id=611-2985",
        image: "/projects/Co-Waste.avif"
    }
];

export default function Projects(): JSX.Element {
    return (
        <section id="projects" className="bg-white">

            {/* Section Header */}
            <div className="relative py-28 md:py-36 overflow-hidden" style={{ backgroundColor: '#5B2C86' }}>
                {/* Decorative background text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                    <p
                        className="font-serif font-bold text-white/[0.04] whitespace-nowrap"
                        style={{ fontSize: 'clamp(150px, 28vw, 400px)', letterSpacing: '-0.04em' }}
                    >
                        WORKS
                    </p>
                </div>

                {/* Border with corner accents - CONSISTENT: inset-6 md:inset-10, w-6 h-6 corners */}
                <div className="absolute inset-6 md:inset-10 border border-white/15 pointer-events-none" />
                <div className="absolute top-6 left-6 md:top-10 md:left-10 w-6 h-6 border-l-2 border-t-2 border-[#C7A2FF]/60" />
                <div className="absolute top-6 right-6 md:top-10 md:right-10 w-6 h-6 border-r-2 border-t-2 border-[#C7A2FF]/60" />
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 w-6 h-6 border-l-2 border-b-2 border-[#C7A2FF]/60" />
                <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-6 h-6 border-r-2 border-b-2 border-[#C7A2FF]/60" />

                {/* Page indicator - CONSISTENT format */}
                <div className="absolute top-8 md:top-12 right-8 md:right-14 z-20">
                    <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase">03 / 04</span>
                </div>

                {/* Header Content */}
                <motion.div
                    className="relative z-10 text-center px-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-[#C7A2FF] text-[10px] tracking-[0.4em] uppercase mb-4">
                        Selected Works
                    </p>
                    <h2
                        className="font-serif font-bold text-white"
                        style={{
                            fontSize: 'clamp(48px, 12vw, 120px)',
                            textShadow: '3px 3px 0px rgba(199, 162, 255, 0.2)'
                        }}
                    >
                        PROJECTS
                    </h2>
                    <div className="flex items-center justify-center gap-4 mt-6">
                        <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#C7A2FF]" />
                        <motion.span
                            className="text-[#C7A2FF] text-xl"
                            animate={{ rotate: [0, 180, 360] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            >
                                ✦
                            </motion.span>
                        <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#C7A2FF]" />
                    </div>
                </motion.div>
            </div>

            {/* Project Spreads - Magazine Style */}
            {projects.map((project, index) => (
                <React.Fragment key={project.id}>
                    <motion.article
                        className="relative min-h-[85vh] flex flex-col lg:flex-row overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {/* Image Side */}
                        <div
                            className={`relative w-full lg:w-[55%] min-h-[45vh] lg:min-h-[85vh] flex items-center justify-center p-8 md:p-12 lg:p-16 group overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                            style={{ backgroundColor: '#FFFFFF' }}
                        >
                            {/* Dot pattern background */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                                style={{
                                    backgroundImage: `radial-gradient(circle at 1px 1px, #5B2C86 1px, transparent 0)`,
                                    backgroundSize: '24px 24px'
                                }}
                            />

                            {/* Image Container */}
                            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] z-10 bg-white">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 55vw"
                                    className="object-contain"
                                    priority={index < 2}
                                />
                            </div>



                            {/* Year tag */}
                            <div className={`absolute bottom-8 ${index % 2 === 0 ? 'left-8' : 'right-8'} z-20`}>
                                <span className="text-[10px] tracking-[0.2em] uppercase px-4 py-2 bg-white border border-[#5B2C86]/20 text-[#5B2C86]">
                                    {project.year}
                                </span>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div
                            className={`relative w-full lg:w-[45%] flex flex-col justify-center p-8 md:p-12 lg:p-16 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                            style={{ backgroundColor: '#F5F5F5' }}
                        >
                            {/* Decorative border */}
                            <div className="absolute inset-6 border border-[#5B2C86]/5 pointer-events-none hidden lg:block" />

                            {/* Decorative background text */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                                <p
                                    className="font-serif font-bold text-[#5B2C86]/[0.02] whitespace-nowrap uppercase"
                                    style={{ fontSize: 'clamp(60px, 10vw, 140px)' }}
                                >
                                    {project.title}
                                </p>
                            </div>

                            {/* Category */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="mb-6 relative z-10"
                            >
                                <span className="text-[#8B5FBF] text-[10px] tracking-[0.25em] uppercase font-medium">
                                    ✦ {project.category}
                                </span>
                            </motion.div>

                            {/* Title */}
                            <motion.h3
                                className="font-serif font-bold text-[#5B2C86] mb-6 relative z-10"
                                style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                {project.title}
                            </motion.h3>

                            {/* Pull Quote */}
                            <motion.blockquote
                                className="relative pl-6 mb-6 border-l-2 border-[#C7A2FF] z-10"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.35 }}
                                viewport={{ once: true }}
                            >
                                <span
                                    className="absolute -left-3 -top-2 text-[#C7A2FF]/40 font-serif"
                                    style={{ fontSize: '36px', lineHeight: 1 }}
                                >
                                    "
                                </span>
                                <p className="font-serif italic text-[#8B5FBF] text-base md:text-lg leading-relaxed">
                                    {project.pullQuote}
                                </p>
                            </motion.blockquote>

                            {/* Description */}
                            <motion.p
                                className="text-gray-500 text-sm leading-[1.8] max-w-md mb-6 relative z-10"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                {project.description}
                            </motion.p>

                            {/* Tech Stack */}
                            <motion.div
                                className="flex flex-wrap gap-2 mb-8 relative z-10"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.45 }}
                                viewport={{ once: true }}
                            >
                                {project.techStack.map((tech: string) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 text-[10px] tracking-[0.1em] uppercase bg-[#5B2C86]/5 border border-[#5B2C86]/15 text-[#5B2C86] font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </motion.div>

                            {/* Link with enhanced hover */}
                            <motion.a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-4 self-start z-10"
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.45 }}
                                viewport={{ once: true }}
                            >
                                <span className="relative text-xs tracking-[0.2em] uppercase font-semibold text-[#5B2C86]">
                                    View Project
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C7A2FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                </span>
                                <span className="relative flex items-center justify-center w-10 h-10 border border-[#5B2C86]/30 group-hover:border-[#5B2C86] group-hover:bg-[#5B2C86] transition-all duration-300">
                                    <ArrowUpRight className="w-4 h-4 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </span>
                            </motion.a>

                            {/* Decorative line */}
                            <div className="w-20 h-[2px] bg-gradient-to-r from-[#C7A2FF] to-transparent mt-10 relative z-10" />
                        </div>
                    </motion.article>

                    {/* Separator between projects */}
                    {
                        index < projects.length - 1 && (
                            <div className="py-8 bg-white flex items-center justify-center gap-6">
                                <div className="w-24 md:w-40 h-[1px] bg-gradient-to-r from-transparent to-[#C7A2FF]" />
                                <span className="text-[#C7A2FF] text-lg">✦</span>
                                <div className="w-24 md:w-40 h-[1px] bg-gradient-to-l from-transparent to-[#C7A2FF]" />
                            </div>
                        )
                    }
                </React.Fragment>
            ))
            }
        </section >
    );
}
