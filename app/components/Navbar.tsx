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

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

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

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
                return;
            }

            const keyToIndex: { [key: string]: number } = {
                '1': 0,
                '2': 1,
                '3': 2,
                '4': 3,
            };

            if (keyToIndex[e.key] !== undefined) {
                const targetSection = navItems[keyToIndex[e.key]];
                if (targetSection) {
                    scrollToSection(targetSection.id);
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <>
            {/* Minimal Navbar */}
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6 md:py-8'}`}
                style={{
                    backgroundColor: isScrolled ? 'rgba(26, 10, 46, 0.95)' : 'transparent',
                    backdropFilter: isScrolled ? 'blur(8px)' : 'none',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex items-center justify-between">

                        {/* Logo */}
                        <button
                            onClick={() => scrollToSection('hero')}
                            className="font-serif text-xl md:text-2xl text-white tracking-wider hover:opacity-70 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/50 focus-visible:outline-offset-4"
                        >
                            AGL
                        </button>

                        <nav className="hidden md:flex items-center gap-10">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`group flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/50 focus-visible:outline-offset-4 ${activeSection === item.id ? 'text-white' : 'text-white/50 hover:text-white'
                                        }`}
                                >
                                    <span className="text-[10px] text-white/30">{item.num}</span>
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </nav>

                        {/* Resume Button */}
                        <a
                            href="/AustinGilbertLiwanto_Resume.pdf"
                            download
                            className="hidden md:block text-xs tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors border-b border-white/20 pb-1 hover:border-white/50"
                        >
                            Resume
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden relative w-8 h-8 flex items-center justify-center"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            <div className="relative w-6 h-4 flex flex-col justify-between">
                                <motion.span
                                    className="w-full h-[1px] bg-white"
                                    animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.span
                                    className="w-full h-[1px] bg-white"
                                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                />
                                <motion.span
                                    className="w-full h-[1px] bg-white"
                                    animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 md:hidden"
                        style={{ backgroundColor: '#1a0a2e' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="h-full flex flex-col items-center justify-center gap-8">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="flex items-center gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <span className="text-sm text-white/30">{item.num}</span>
                                    <span className={`font-serif text-3xl ${activeSection === item.id ? 'text-white' : 'text-white/60'
                                        }`}>
                                        {item.label}
                                    </span>
                                </motion.button>
                            ))}

                            <motion.a
                                href="/AustinGilbertLiwanto_Resume.pdf"
                                download
                                className="mt-8 text-xs tracking-[0.2em] uppercase text-white/50 border-b border-white/20 pb-1"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                Download Resume
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
