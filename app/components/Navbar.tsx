"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const navItems = [
        { id: 'hero', label: 'Home', num: '01' },
        { id: 'about', label: 'About', num: '02' },
        { id: 'projects', label: 'Work', num: '03' },
        { id: 'contact', label: 'Contact', num: '04' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            sections.forEach((section, index) => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(navItems[index].id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <>
            {/* Top Navbar - Enhanced with centered links */}
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-5'}`}
                style={{
                    backgroundColor: isScrolled ? 'rgba(91, 44, 134, 0.98)' : 'transparent',
                    backdropFilter: isScrolled ? 'blur(12px)' : 'none',
                    boxShadow: isScrolled ? '0 4px 30px rgba(91, 44, 134, 0.3)' : 'none'
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex items-center justify-between">

                        {/* Left - Logo with animation */}
                        <motion.button
                            onClick={() => scrollToSection('hero')}
                            className="group relative font-serif text-2xl font-bold text-white"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10 group-hover:text-[#C7A2FF] transition-colors duration-300">AGL</span>
                            <motion.span
                                className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#C7A2FF] origin-left"
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>

                        {/* Center - Nav Links (pill style, centered) */}
                        <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
                            <div className="flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 backdrop-blur-sm border border-white/10">
                                {navItems.map((item) => (
                                    <motion.button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`relative px-4 py-2 rounded-full text-sm tracking-[0.05em] font-medium transition-all ${activeSection === item.id
                                                ? 'text-[#5B2C86]'
                                                : 'text-white/80 hover:text-white'
                                            }`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {/* Active background */}
                                        {activeSection === item.id && (
                                            <motion.span
                                                className="absolute inset-0 bg-white rounded-full -z-10"
                                                layoutId="navBg"
                                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                            />
                                        )}
                                        <span className="flex items-center gap-2">
                                            <span className={`text-[9px] ${activeSection === item.id ? 'text-[#8B5FBF]' : 'text-[#C7A2FF]'}`}>
                                                {item.num}
                                            </span>
                                            {item.label}
                                        </span>
                                    </motion.button>
                                ))}
                            </div>
                        </nav>

                        {/* Right - Resume Button */}
                        <motion.a
                            href="/AustinGilbertLiwanto_Resume.pdf"
                            download
                            className="hidden md:flex items-center gap-2 text-xs tracking-[0.1em] uppercase font-medium px-5 py-2.5 bg-white text-[#5B2C86] rounded-full overflow-hidden group relative"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="absolute inset-0 bg-[#C7A2FF] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative z-10 group-hover:text-white transition-colors">Resume</span>
                            <svg className="relative z-10 w-4 h-4 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </motion.a>

                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden relative w-10 h-10 flex items-center justify-center"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            whileTap={{ scale: 0.9 }}
                        >
                            <div className="relative w-6 h-5 flex flex-col justify-between">
                                <motion.span
                                    className="w-full h-[2px] bg-white rounded-full origin-left"
                                    animate={isOpen ? { rotate: 45, y: 0, x: 2 } : { rotate: 0, y: 0, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.span
                                    className="w-full h-[2px] bg-white rounded-full"
                                    animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2 }}
                                />
                                <motion.span
                                    className="w-full h-[2px] bg-white rounded-full origin-left"
                                    animate={isOpen ? { rotate: -45, y: 0, x: 2 } : { rotate: 0, y: 0, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.button>
                    </div>
                </div>

                {/* Progress bar */}
                <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#C7A2FF] to-[#8B5FBF]"
                    style={{
                        width: `${(navItems.findIndex(item => item.id === activeSection) + 1) / navItems.length * 100}%`,
                        opacity: isScrolled ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                />
            </motion.header>

            {/* Mobile Menu - Enhanced */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Gradient background */}
                        <motion.div
                            className="absolute inset-0"
                            style={{
                                background: 'linear-gradient(135deg, #5B2C86 0%, #8B5FBF 50%, #5B2C86 100%)'
                            }}
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 1.1 }}
                        />

                        {/* Decorative elements */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute top-1/4 -right-20 w-64 h-64 rounded-full bg-[#C7A2FF]/10 blur-3xl" />
                            <div className="absolute bottom-1/4 -left-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
                        </div>

                        {/* Border */}
                        <div className="absolute inset-4 border border-white/20 pointer-events-none rounded-2xl" />

                        <div className="relative h-full flex flex-col items-center justify-center gap-6">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="group flex items-center gap-4"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <span className={`text-sm font-mono ${activeSection === item.id ? 'text-[#C7A2FF]' : 'text-white/40'}`}>
                                        {item.num}
                                    </span>
                                    <span className={`font-serif text-4xl transition-all ${activeSection === item.id
                                            ? 'text-[#C7A2FF] translate-x-2'
                                            : 'text-white group-hover:text-[#C7A2FF] group-hover:translate-x-2'
                                        }`}>
                                        {item.label}
                                    </span>
                                    {activeSection === item.id && (
                                        <motion.div
                                            className="w-8 h-[2px] bg-[#C7A2FF]"
                                            layoutId="mobileActive"
                                        />
                                    )}
                                </motion.button>
                            ))}

                            {/* Resume button */}
                            <motion.a
                                href="/AustinGilbertLiwanto_Resume.pdf"
                                download
                                className="mt-8 px-8 py-4 bg-white text-[#5B2C86] text-sm tracking-widest uppercase font-medium rounded-full flex items-center gap-3 group"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Resume
                                <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </motion.a>

                            {/* Portfolio hint */}
                            <motion.p
                                className="absolute bottom-8 text-white/30 text-xs tracking-widest"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                Portfolio 2025
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
