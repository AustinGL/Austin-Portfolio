"use client";
import React from "react";
import SimpleHero from "./components/SimpleHero";
import CleanAbout from "./components/CleanAbout";
import ModernProjects from "./components/ModernProjects";
import ModernContact from "./components/ModernContact";

export default function Page() {
  return (
    <div className="relative bg-white">

      {/* Main Content */}
      <main>
        <section id="hero" className="min-h-screen">
          <SimpleHero />
        </section>

        <section id="about" className="min-h-screen">
          <CleanAbout />
        </section>

        <section id="projects" className="min-h-screen">
          <ModernProjects />
        </section>

        <section id="contact" className="min-h-screen">
          <ModernContact />
        </section>
      </main>
    </div>
  );
}
