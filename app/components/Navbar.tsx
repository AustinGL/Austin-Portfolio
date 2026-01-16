"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

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

    // Focus trap for mobile menu
    useEffect(() => {
        if (!isOpen || !mobileMenuRef.current) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
                menuButtonRef.current?.focus();
                return;
            }

            if (e.key !== 'Tab') return;

            const focusableElements = mobileMenuRef.current?.querySelectorAll(
                'button, a, [tabindex]:not([tabindex="-1"])'
            ) as NodeListOf<HTMLElement>;

            if (!focusableElements || focusableElements.length === 0) return;

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        // Focus first item when menu opens
        const firstFocusable = mobileMenuRef.current.querySelector(
            'button, a'
        ) as HTMLElement;
        firstFocusable?.focus();

        return () => document.removeEventListener('keydown', handleKeyDown);
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
                                    aria-current={activeSection === item.id ? 'page' : undefined}
                                    className={`group flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/50 focus-visible:outline-offset-4 ${activeSection === item.id ? 'text-white' : 'text-white/50 hover:text-white'
                                        }`}
                                >
                                    <span className="text-[10px] text-white/50">{item.num}</span>
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </nav>

                        {/* Resume Button */}
                        <a
                            href="/AustinGilbertLiwanto_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View Austin Gilbert Liwanto's Resume (opens in new tab)"
                            className="hidden md:block text-xs tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors border-b border-white/20 pb-1 hover:border-white/50"
                        >
                            View Resume
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            ref={menuButtonRef}
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
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
                        ref={mobileMenuRef}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Navigation menu"
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
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="View Austin Gilbert Liwanto's Resume (opens in new tab)"
                                className="mt-8 text-xs tracking-[0.2em] uppercase text-white/60 border-b border-white/20 pb-1"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                View Resume
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
