"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "UMN Mentoring",
    category: "Web Development",
    description: "Modern mentoring platform with advanced features for student-mentor matching.",
    link: "https://mentoring.umn.ac.id/#/",
    image: "/api/placeholder/800/600"
  },
  {
    id: 2,
    title: "AI Task Manager",
    category: "Full-Stack",
    description: "Intelligent project management tool with AI-powered task prioritization.",
    link: "#",
    image: "/api/placeholder/800/600"
  },
  {
    id: 3,
    title: "Real-Time Analytics",
    category: "Data Visualization",
    description: "Comprehensive analytics dashboard with real-time data visualization.",
    link: "#",
    image: "/api/placeholder/800/600"
  },
  {
    id: 4,
    title: "Crypto Trading Bot",
    category: "FinTech",
    description: "Automated cryptocurrency trading system with advanced algorithms.",
    link: "#",
    image: "/api/placeholder/800/600"
  }
];

export default function ModernProjects(): JSX.Element {
  return (
    <section className="section-spacing bg-white">
      <div className="container-editorial">

        {/* Simple Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ margin: "-50px" }}
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">Selected Work</h2>
          <div className="divider-center" />
        </motion.div>

        {/* Editorial Grid - 2 Columns on Desktop */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target={project.link.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="group block"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ margin: "-100px" }}
              aria-label={`View ${project.title} project - ${project.category}`}
            >
              {/* Project Image */}
              <div className="aspect-[4/3] bg-gray-100 mb-6 overflow-hidden hover-zoom">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 font-sans text-sm">Project Image</span>
                </div>
              </div>

              {/* Project Info - Minimal Text Overlay */}
              <div className="space-y-2">
                <p className="text-xs text-accent uppercase tracking-widest font-sans font-medium">
                  {project.category}
                </p>
                <h3 className="font-serif text-xl md:text-2xl font-bold group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 font-sans text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
