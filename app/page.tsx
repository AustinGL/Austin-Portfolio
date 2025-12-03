"use client";
import React from "react";
import ModernNavbar from "./components/ModernNavbar";
import SimpleHero from "./components/SimpleHero";
import CleanAbout from "./components/CleanAbout";
import ModernProjects from "./components/ModernProjects";
import ModernContact from "./components/ModernContact";


export default function Page() {
  return (
    <div className="relative">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded-lg font-medium z-50 focus:outline-none focus:ring-2 focus:ring-black"
      >
        Skip to main content
      </a>

      {/* Modern Navigation */}
      <ModernNavbar />

      <main id="main-content">
        <section id="hero" className="min-h-screen" aria-label="Hero section">
          <SimpleHero />
        </section>
        
        <section id="about" className="min-h-screen" aria-label="About section">
          <CleanAbout />
        </section>
        
        <section id="projects" className="min-h-screen" aria-label="Projects section">
          <ModernProjects />
        </section>
        
        <section id="contact" className="min-h-screen" aria-label="Contact section">
          <ModernContact />
        </section>
      </main>

      {/* Loading indicator for smooth transitions */}
      <div 
        id="page-loading" 
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-white via-zinc-300 to-white z-50 origin-left scale-x-0 transition-transform duration-300"
        role="progressbar" 
        aria-label="Page loading progress"
      />
    </div>
  );
}
