"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageCircle, Calendar, ArrowUpRight } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Drop me a line",
    value: "hello@austin.dev",
    link: "mailto:hello@austin.dev"
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Check out my code",
    value: "@austindev",
    link: "https://github.com"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Let's connect",
    value: "Austin Developer",
    link: "https://linkedin.com"
  },
  {
    icon: MessageCircle,
    title: "Discord",
    description: "Join the community",
    value: "austin#1234",
    link: "https://discord.com"
  }
];

export default function ModernContact(): JSX.Element {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      
      {/* Simple background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto max-w-6xl px-6 relative">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ margin: "-20%", once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something <span className="text-zinc-300">Amazing</span>
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8 rounded-full" />
        </motion.div>

        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <a
            href="mailto:hello@austin.dev"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all duration-300 ease-out group text-lg"
          >
            <Mail className="w-6 h-6" />
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 ease-out" />
          </a>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactMethods.map((method, index) => (
            <a
              key={method.title}
              href={method.link}
              target={method.link.startsWith('mailto:') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="group p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 hover:scale-105 active:scale-95 transition-all duration-300 ease-out relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-opacity-50 focus:border-zinc-600"
              aria-label={`Contact via ${method.title}: ${method.value}`}
              title={`${method.description} - ${method.value}`}
            >
              
              {/* Background on hover */}
              <div className="absolute inset-0 bg-zinc-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-white p-3 mb-4 group-hover:scale-110 transition-transform duration-300 ease-out">
                  <method.icon className="w-6 h-6 text-black" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">
                  {method.title}
                </h3>
                
                <p className="text-zinc-400 text-sm mb-2">
                  {method.description}
                </p>
                
                <p className="text-zinc-300 text-sm font-medium">
                  {method.value}
                </p>
              </div>
            </a>
          ))}
        </div>



        {/* Footer */}
        <div className="text-center pt-12 border-t border-zinc-800/50">
          <p className="text-zinc-400 mb-6">
            Thanks for visiting my portfolio. Let's create something extraordinary together!
          </p>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center space-x-2 text-zinc-500 hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 ease-out group"
          >
            <span>Back to top</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300 ease-out" />
          </button>
        </div>
      </div>
    </section>
  );
}

