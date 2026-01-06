"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Contact(): JSX.Element {
    const email = "liwantoaustin@gmail.com";

    const socialLinks = [
        { icon: Github, href: "https://github.com/AustinGL", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/austin-gilbert-liwanto/", label: "LinkedIn" },
        { icon: Mail, href: `mailto:${email}`, label: "Email" }
    ];

    // Consistent hover transition
    const hoverTransition = "transition-all duration-300 ease-out";

    // Simple fade-in animation (Animation Type 1)
    const fadeIn = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    // Fade + slide up animation (Animation Type 2)
    const fadeSlideUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <section id="contact" style={{ backgroundColor: '#1a0a2e' }}>

            {/* Main Contact Section */}
            <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-32 relative overflow-hidden">

                {/* Decorative background elements */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse at 50% 50%, rgba(45, 27, 70, 0.5) 0%, transparent 60%)'
                    }}
                />

                <div className="relative z-10 text-center">
                    {/* Page indicator */}
                    <motion.p
                        className="text-white/30 text-[10px] tracking-[0.4em] uppercase mb-8"
                        {...fadeIn}
                    >
                        04 / 04
                    </motion.p>

                    {/* Title */}
                    <motion.h2
                        className="font-serif text-white mb-6"
                        style={{ fontSize: 'clamp(48px, 12vw, 120px)' }}
                        {...fadeSlideUp}
                    >
                        Let's Connect
                    </motion.h2>

                    {/* Decorative divider */}
                    <motion.div
                        className="w-16 h-[1px] bg-white/30 mx-auto mb-12"
                        {...fadeIn}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />

                    {/* Email */}
                    <motion.a
                        href={`mailto:${email}`}
                        className={`group relative inline-block font-serif text-xl md:text-2xl lg:text-3xl text-white/70 hover:text-white ${hoverTransition}`}
                        {...fadeSlideUp}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <span className="relative">
                            {email}
                            <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-white/40 origin-left scale-x-0 group-hover:scale-x-100 ${hoverTransition}`} />
                        </span>
                    </motion.a>

                    {/* Social Links */}
                    <motion.div
                        className="flex items-center justify-center gap-8 mt-16"
                        {...fadeSlideUp}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target={social.label !== "Email" ? "_blank" : undefined}
                                rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                                className={`group flex flex-col items-center gap-2 text-white/50 hover:text-white ${hoverTransition}`}
                                aria-label={social.label}
                            >
                                <div className={`relative p-4 rounded-full border border-white/20 group-hover:border-white/50 group-hover:bg-white/5 ${hoverTransition}`}>
                                    <social.icon className="w-5 h-5" />
                                </div>
                                <span className={`text-[10px] tracking-[0.15em] uppercase text-white/30 group-hover:text-white/70 ${hoverTransition}`}>
                                    {social.label}
                                </span>
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Resume Strip */}
            <motion.div
                className="py-16 md:py-20 border-t border-white/10 relative overflow-hidden"
                style={{ backgroundColor: '#2d1b46' }}
                {...fadeIn}
            >
                <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                    <div className="text-center md:text-left">
                        <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase mb-2">Resume</p>
                        <p className="text-white/70 text-base md:text-lg font-light">
                            Want to know more about me?
                        </p>
                    </div>
                    <a
                        href="/AustinGilbertLiwanto_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative flex items-center gap-3 text-xs tracking-[0.15em] uppercase text-white/70 hover:text-white border border-white/20 hover:border-white/50 px-10 py-4 overflow-hidden ${hoverTransition}`}
                    >
                        <span className={`absolute inset-0 bg-white/0 group-hover:bg-white/5 ${hoverTransition}`} />
                        <span className="relative">View Resume</span>
                        <ArrowUpRight className={`relative w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${hoverTransition}`} />
                    </a>
                </div>
            </motion.div>

            {/* Footer */}
            <div className="py-12 border-t border-white/5">
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                        <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase">
                            © {new Date().getFullYear()} Austin Gilbert Liwanto
                        </p>
                        <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase">
                            give it a try :D
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
