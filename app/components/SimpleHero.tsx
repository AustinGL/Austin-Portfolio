"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, MapPin } from "lucide-react";

export default function SimpleHero(): JSX.Element {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden py-20">
      {/* Simplified background elements */}
      <div className="absolute inset-0">
        {/* Main glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/[0.015] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/[0.008] via-white/[0.002] to-transparent rounded-full" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[length:24px_24px]" />
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}} />
        <div className="absolute top-40 right-32 w-1 h-1 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}} />
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}} />
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center min-h-[85vh] justify-center">
          <div className="space-y-6 sm:space-y-8 max-w-4xl w-full">
            {/* Main heading */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Greeting text */}
              <div className="relative">
                <p className="text-xl sm:text-2xl lg:text-3xl text-zinc-300 font-extralight tracking-[0.2em] italic mb-3 sm:mb-4 relative z-10">
                  hello i'm
                </p>
              </div>
              
              <div className="relative">
                <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-8xl font-black text-white leading-[0.8] pb-6 sm:pb-8 relative z-10">
                  <motion.div
                    className="block relative"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    viewport={{ margin: "-10%" }}
                  >
                    Austin
                  </motion.div>
                  <motion.div 
                    className="text-zinc-300 block relative"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    viewport={{ margin: "-15%" }}
                  >
                    Gilbert
                  </motion.div>
                  <motion.div 
                    className="text-zinc-400 block relative"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    viewport={{ margin: "-15%" }}
                  >
                    Liwanto
                  </motion.div>
                </h1>
                {/* Subtle text shadow/glow */}
                <div className="absolute inset-0 text-6xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-8xl font-black leading-[0.8] pb-6 sm:pb-8 text-white/5 blur-lg pointer-events-none">
                  <div className="text-zinc-200 block">Austin</div>
                  <div className="text-zinc-300 block">Gilbert</div>
                  <div className="text-zinc-400 block">Liwanto</div>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div 
              className="relative max-w-2xl sm:max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-sm sm:text-base lg:text-lg text-zinc-400 leading-relaxed px-6 sm:px-4 lg:px-0 font-normal tracking-normal sm:tracking-wide relative z-10 text-center hover:text-zinc-300 transition-colors duration-300 ease-out">
                Informatics student in Tangerang, Banten. Passionate about Software Development and UI/UX Design. Always learning new things.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex flex-row gap-6 sm:gap-8 pt-6 sm:pt-10 lg:pt-8 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="https://github.com/AustinGL"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 sm:p-4 bg-zinc-900/50 border border-zinc-700/50 rounded-xl sm:rounded-2xl hover:bg-zinc-800/70 hover:border-zinc-600 hover:shadow-lg hover:shadow-zinc-500/20 hover:scale-110 active:scale-95 transition-all duration-300 ease-out backdrop-blur-sm"
                aria-label="Visit GitHub profile"
                title="GitHub"
              >
                <Github className="w-6 h-6 sm:w-7 sm:h-7 text-zinc-300 group-hover:text-white transition-colors duration-300 ease-out" />
              </a>

              <a
                href="https://www.linkedin.com/in/austin-gilbert-liwanto/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 sm:p-4 bg-zinc-900/50 border border-zinc-700/50 rounded-xl sm:rounded-2xl hover:bg-zinc-800/70 hover:border-zinc-600 hover:shadow-lg hover:shadow-zinc-500/20 hover:scale-110 active:scale-95 transition-all duration-300 ease-out backdrop-blur-sm"
                aria-label="Visit LinkedIn profile"
                title="LinkedIn"
              >
                <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 text-zinc-300 group-hover:text-white transition-colors duration-300 ease-out" />
              </a>

              <a
                href="mailto:liwantoaustin@gmail.com"
                className="group p-3 sm:p-4 bg-zinc-900/50 border border-zinc-700/50 rounded-xl sm:rounded-2xl hover:bg-zinc-800/70 hover:border-zinc-600 hover:shadow-lg hover:shadow-zinc-500/20 hover:scale-110 active:scale-95 transition-all duration-300 ease-out backdrop-blur-sm"
                aria-label="Send email"
                title="Email"
              >
                <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-zinc-300 group-hover:text-white transition-colors duration-300 ease-out" />
              </a>
            </motion.div>           
          </div>        
        </div>
      </div>
    </section>
  );
}
