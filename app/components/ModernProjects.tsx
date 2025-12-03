"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Play, Code2, Zap, Star } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "UMN Mentoring",
    description: "Modern online store with advanced features including payment integration, inventory management, real-time analytics, and comprehensive admin dashboard.",
    tech: ["React.js", "Typescript", "Vite"],
    github: "https://github.com",
    demo: "https://mentoring.umn.ac.id/#/",
    category: "Front-End",
    featured: true,
    status: "Live"
  },
  {
    id: 2,
    title: "AI Task Manager",
    description: "Intelligent project management tool with AI-powered task prioritization, natural language processing, team collaboration, and productivity insights.",
    tech: ["React", "Node.js", "OpenAI", "Socket.io", "MongoDB", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "AI/ML",
    featured: true,
    status: "Live"
  },
  {
    id: 3,
    title: "Real-Time Analytics",
    description: "Comprehensive analytics dashboard with real-time data visualization, custom reports, interactive charts, and business intelligence features.",
    tech: ["React", "D3.js", "WebSocket", "FastAPI", "Python", "Chart.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Data Viz",
    featured: false,
    status: "Development"
  },
  {
    id: 4,
    title: "Crypto Trading Bot",
    description: "Automated cryptocurrency trading system with advanced algorithms, risk management, backtesting capabilities, and portfolio optimization.",
    tech: ["Python", "FastAPI", "Pandas", "PostgreSQL", "Docker", "Kubernetes"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "FinTech",
    featured: true,
    status: "Live"
  }
];

const categories = ["All", "Front-End", "Full-Stack", "Machine Learning", "UI/UX"];

export default function ModernProjects(): JSX.Element {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      
      {/* Simple background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ margin: "-10%" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6 overflow-hidden"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ margin: "-10%" }}
          >
            Featured <span className="text-zinc-300">Projects</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-white mx-auto mb-8 rounded-full"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ margin: "-10%" }}
          />
        </motion.div>

        {/* Category filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ margin: "-10%" }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                // Announce change for screen readers
                const announcement = `Filtering projects by ${category === 'All' ? 'all categories' : category}`;
                const ariaLive = document.createElement('div');
                ariaLive.setAttribute('aria-live', 'polite');
                ariaLive.setAttribute('aria-atomic', 'true');
                ariaLive.className = 'sr-only';
                ariaLive.textContent = announcement;
                document.body.appendChild(ariaLive);
                setTimeout(() => document.body.removeChild(ariaLive), 1000);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveCategory(category);
                }
                // Arrow key navigation
                if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                  const buttons = Array.from(document.querySelectorAll('[data-category-filter]'));
                  const currentIndex = buttons.findIndex(btn => btn === e.target);
                  const nextIndex = e.key === 'ArrowLeft' 
                    ? (currentIndex - 1 + buttons.length) % buttons.length
                    : (currentIndex + 1) % buttons.length;
                  (buttons[nextIndex] as HTMLElement).focus();
                }
              }}
              data-category-filter
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                activeCategory === category
                  ? 'bg-white text-black focus:ring-black'
                  : 'bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 focus:ring-zinc-500'
              }`}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.08 + 0.2,
                ease: "easeOut"
              }}
              viewport={{ margin: "-20px" }}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-pressed={activeCategory === category}
              aria-label={`Filter projects by ${category === 'All' ? 'all categories' : category}`}
              title={`Show ${category === 'All' ? 'all projects' : `${category} projects`}`}
            >
              {category}
              {activeCategory === category && (
                <motion.span 
                  className="ml-2 text-xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  aria-hidden="true"
                >
                  ✓
                </motion.span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid - alternating layout */}
        <div className="space-y-24">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
              initial={{ 
                opacity: 0, 
                y: 80,
                scale: 0.95
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                scale: 1
              }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ margin: "-30px" }}
            >
              
              {/* Project Image */}
              <motion.div 
                className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                initial={{ 
                  opacity: 0,
                  x: index % 2 === 1 ? 50 : -50,
                  rotateY: index % 2 === 1 ? 15 : -15
                }}
                whileInView={{ 
                  opacity: 1,
                  x: 0,
                  rotateY: 0
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15 + 0.2,
                  ease: "easeOut"
                }}
                viewport={{}}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: index % 2 === 1 ? -3 : 3,
                  transition: { duration: 0.3 }
                }}
              >
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute -top-4 -left-4 z-20 px-4 py-2 bg-white text-black text-sm font-semibold rounded-full shadow-lg flex items-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span>Featured</span>
                  </div>
                )}

                {/* Status badge */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-medium bg-zinc-800/50 text-zinc-300 border border-zinc-700">
                  <div className="w-2 h-2 rounded-full inline-block mr-2 bg-zinc-300" />
                  {project.status}
                </div>

                <div className="relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-zinc-800 via-zinc-900 to-black flex items-center justify-center relative">
                    
                    {/* Simple background pattern */}
                    <div className="absolute inset-0 bg-zinc-900/20" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
                    
                    {/* Project preview content */}
                    <div className="text-center z-10">
                      <Code2 className="w-16 h-16 text-zinc-600 mb-4 mx-auto" />
                      <span className="text-zinc-500 text-lg font-medium">Project Preview</span>
                    </div>
                  </div>
                  
                  {/* Enhanced hover overlay */}
                  <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-6">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all shadow-lg"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-white/90 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-black hover:bg-white transition-all shadow-lg"
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Project Content */}
              <motion.div 
                className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                initial={{ 
                  opacity: 0, 
                  x: index % 2 === 1 ? 60 : -60,
                  y: 30
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  y: 0
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15 + 0.3,
                  ease: "easeOut"
                }}
                viewport={{}}
              >
                
                {/* Category tag */}
                <motion.div 
                  className="inline-flex items-center space-x-2 text-sm font-medium text-zinc-400"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.15 + 0.4,
                    ease: "easeOut"
                  }}
                  viewport={{}}
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: 360 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.2 + 0.6,
                      ease: "easeOut"
                    }}
                  >
                    <Zap className="w-4 h-4 text-zinc-500" />
                  </motion.div>
                  <span>{project.category}</span>
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold text-white transition-all duration-300 overflow-hidden"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.15 + 0.5,
                    ease: "easeOut"
                  }}
                  viewport={{}}
                >
                  {project.title}
                </motion.h3>

                {/* Description */}
                <motion.p 
                  className="text-zinc-300 leading-relaxed text-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.15 + 0.6,
                    ease: "easeOut"
                  }}
                  viewport={{}}
                >
                  {project.description}
                </motion.p>
                
                {/* Tech stack */}
                <motion.div 
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.15 + 0.7,
                    ease: "easeOut"
                  }}
                  viewport={{}}
                >
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 bg-zinc-900/60 border border-zinc-700 text-zinc-300 rounded-lg text-sm font-medium hover:border-zinc-600 transition-colors"
                      initial={{ opacity: 0, scale: 0.6, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.2 + 0.9 + techIndex * 0.08,
                        ease: "backOut"
                      }}
                      viewport={{}}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                
                {/* Action buttons */}
                <motion.div 
                  className="flex flex-wrap gap-4 pt-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.15 + 0.8,
                    ease: "easeOut"
                  }}
                  viewport={{}}
                >
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.2 + 1.1,
                      ease: "easeOut"
                    }}
                    viewport={{}}
                    whileHover={{ y: -5, scale: 1.05, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-5 h-5" />
                    <span>Live Demo</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 border border-zinc-700 text-zinc-300 font-semibold rounded-lg hover:border-zinc-600 hover:text-white transition-all duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.2 + 1.2,
                      ease: "easeOut"
                    }}
                    viewport={{}}
                    whileHover={{ y: -5, scale: 1.05, x: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
