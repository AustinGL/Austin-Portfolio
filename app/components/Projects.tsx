"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "UMN Mentoring",
        category: "Web Platform",
        year: "2024",
        description: "A web platform showcasing mentoring program schedules with advanced search and filter tools.",
        techStack: ["React.js", "TypeScript", "Vite", "Tailwind CSS"],
        link: "https://mentoring.umn.ac.id/#/",
        github: "",
        image: "/projects/MentoringUMN.avif"
    },
    {
        id: 2,
        title: "Melali",
        category: "Tourism Web",
        year: "2024",
        description: "Showcasing Bali's destinations with detailed attraction info and travel experiences.",
        techStack: ["React.js", "Tailwind CSS"],
        link: "https://melali-in-bali.vercel.app/",
        github: "",
        image: "/projects/Melali.avif"
    },
    {
        id: 3,
        title: "Evenlix",
        category: "Event Platform",
        year: "2023",
        description: "Event management with client and admin interfaces for browsing and ticketing.",
        techStack: ["PHP", "MySQL"],
        link: "https://moreno.xo.je/?i=1",
        github: "",
        image: "/projects/Evenlix.avif"
    },
    {
        id: 4,
        title: "Co Waste",
        category: "UI/UX Design",
        year: "2023",
        description: "Mobile app motivating users to recycle food waste into reward points.",
        techStack: ["Figma"],
        link: "https://www.figma.com/proto/rgtHJHgombG6W97CAwf0XL/Co-Waste?node-id=611-2985",
        github: "",
        image: "/projects/Co-Waste.avif"
    }
];

export default function Projects(): JSX.Element {
    return (
        <section id="projects" style={{ backgroundColor: '#1a0a2e' }}>

            {/* Section Header */}
            <div className="py-24 md:py-32 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-white/30 text-[10px] tracking-[0.4em] uppercase mb-6">
                        03 / 04
                    </p>
                    <h2
                        className="font-serif text-white"
                        style={{ fontSize: 'clamp(48px, 10vw, 120px)' }}
                    >
                        Work
                    </h2>
                    <p className="text-white/50 text-xs tracking-[0.2em] uppercase mt-6">
                        Selected Projects
                    </p>
                </motion.div>
            </div>

            {/* Projects */}
            {projects.map((project, index) => (
                <motion.article
                    key={project.id}
                    className={`min-h-[80vh] flex flex-col lg:flex-row ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                        }`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Image Side - Always cream background */}
                    <div
                        className="relative w-full lg:w-1/2 min-h-[50vh] lg:min-h-[80vh] flex items-center justify-center p-8 md:p-16"
                        style={{ backgroundColor: '#f5f5f0' }}
                    >
                        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain"
                                priority={index < 2}
                            />
                        </div>

                        {/* Year */}
                        <span className="absolute bottom-8 left-8 text-[10px] tracking-[0.2em] uppercase text-[#1a0a2e]/40">
                            {project.year}
                        </span>
                    </div>

                    {/* Content Side - Always purple background */}
                    <div
                        className="relative w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-16 bg-[#2d1b46]"
                    >
                        <div className="max-w-lg">
                            {/* Category */}
                            <motion.p
                                className="text-[10px] tracking-[0.3em] uppercase mb-4 text-white/50"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                {project.category}
                            </motion.p>

                            {/* Title */}
                            <motion.h3
                                className="font-serif mb-6 text-white"
                                style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                {project.title}
                            </motion.h3>

                            {/* Description */}
                            <motion.p
                                className="text-sm leading-[1.9] mb-8 text-white/60"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                {project.description}
                            </motion.p>

                            {/* Tech Stack */}
                            <motion.div
                                className="flex flex-wrap gap-2 mb-10"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                {project.techStack.map((tech: string) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 text-[10px] tracking-[0.1em] uppercase border text-white/60 border-white/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </motion.div>

                            {/* Links */}
                            <motion.div
                                className="flex items-center gap-6"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 group text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/50 focus-visible:outline-offset-4"
                                >
                                    <span className="relative text-xs tracking-[0.2em] uppercase">
                                        View Project
                                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                    </span>
                                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </a>

                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 group text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/50 focus-visible:outline-offset-4"
                                    >
                                        <span className="relative text-xs tracking-[0.2em] uppercase">
                                            Source
                                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                        </span>
                                        <Github className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
                                    </a>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </motion.article>
            ))}
        </section>
    );
}
