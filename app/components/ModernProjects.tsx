"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "UMN Mentoring",
    category: "Web Development",
    description: "A web platform that shows the mentoring program’s event schedule and helps manage participant groups. It includes easy search and filter tools so mentors and admins can quickly find and organize participant information.",
    link: "https://mentoring.umn.ac.id/#/",
    github: "#",
    image: "/projects/MentoringUMN.avif"
  },
  {
    id: 2,
    title: "Melali",
    category: "Web Development",
    description: "A web-based platform designed to showcase Bali’s top tourism destinations, featuring detailed information on popular attractions, recommended hotels, and travel experiences. The system helps visitors easily explore, discover, and plan their trip with user-friendly navigation and helpful suggestions.",
    link: "#",
    github: "#",
    image: "/projects/Melali.avif"
  },
  {
    id: 3,
    title: "Evenlix",
    category: "Web Development",
    description: "A simple event management website with separate client and admin interfaces. Clients can browse events, buy tickets, and view their registration history in their profile. Administrators can add, edit, and delete events, as well as track user activity and registration data to manage the platform.",
    link: "#",
    github: "#",
    image: "/projects/Evenlix.avif"
  },
  {
    id: 4,
    title: "Co Waste",
    category: "UI/UX Design",
    description: "A mobile app that motivates users to recycle by turning their food waste into reward points. Users can redeem these points for different products or discounts, helping promote sustainable habits and reduce household waste.",
    link: "#",
    github: "#",
    image: "/projects/Co-Waste.avif"
  }
];

export default function ModernProjects(): JSX.Element {
  return (
    <section id="projects" className="section-spacing bg-white">
      <div className="container-editorial">

        {/* Simple Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ margin: "-50px" }}
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">Selected Projects</h2>
          <div className="divider-center" />
        </motion.div>

        {/* Full-Width Alternating Layout */}
        <div className="space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ margin: "-100px", once: true }}
            >
              {/* Alternating Grid Layout */}
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>

                {/* Project Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[16/10] bg-gray-900 overflow-hidden relative border border-gray-100">
                    <Image
                      src={project.image}
                      alt={`${project.title} - ${project.category} project screenshot`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority={index < 2}
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-4">
                    <p className="text-xs text-accent uppercase tracking-[0.25em] font-sans font-medium">
                      {project.category}
                    </p>
                    <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    <div className="divider" />
                    <p className="text-gray-600 font-sans text-base md:text-lg leading-relaxed max-w-xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Link Buttons - Visible on all screen sizes */}
                  <div className="flex items-center gap-4 md:gap-6 pt-4 md:pt-2">
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target={project.link.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-2 font-sans text-sm font-medium hover-accent transition-colors"
                        aria-label={`Visit ${project.title} website`}
                      >
                        <span>View Project</span>
                        <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </a>
                    )}
                    {project.link !== "#" && project.github !== "#" && (
                      <span className="text-gray-300">|</span>
                    )}
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-2 font-sans text-sm font-medium hover-accent transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <span>View Code</span>
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
