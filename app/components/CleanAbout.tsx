"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Zap, Users } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Development",
    description: "Building scalable applications with modern frameworks and best practices."
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating intuitive and visually appealing user interfaces."
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed and exceptional user experience."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with teams to deliver exceptional results."
  }
];

export default function CleanAbout(): JSX.Element {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto max-w-6xl px-6">
        
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
            About <span className="text-zinc-300">Me</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-white mx-auto mb-8 rounded-full"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ margin: "-20%" }}
          />
          <motion.p 
            className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ margin: "-20%" }}
          >
            
          </motion.p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left side - Story */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ margin: "-20%" }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                Started as a curious developer exploring the endless possibilities of code. 
                Over the years, I've honed my skills in full-stack development, working 
                with cutting-edge technologies and frameworks.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating solutions 
                that not only work well but also provide exceptional user experiences. 
                Every project is an opportunity to learn something new and push boundaries.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with the 
                developer community.
              </p>
            </div>
            
            <motion.button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-all duration-300 mt-6"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Let's Work Together</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </motion.button>
          </motion.div>

          {/* Right side - Skills grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ margin: "-20%" }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1 * index + 0.2, 
                  ease: "easeOut",
                  scale: { type: "spring", stiffness: 100 }
                }}
                viewport={{ margin: "-10%" }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-lg bg-white p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-6 h-6 text-black" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{skill.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats section */}
        
      </div>
    </section>
  );
}

