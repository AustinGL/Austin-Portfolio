"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
    return (
        <section
            className="min-h-screen flex flex-col items-center justify-center px-6"
            style={{ backgroundColor: '#1a0a2e' }}
        >
            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <p className="text-white/30 text-[10px] tracking-[0.4em] uppercase mb-8">
                    Error 404
                </p>

                <h1
                    className="font-serif text-white mb-4"
                    style={{ fontSize: 'clamp(80px, 20vw, 200px)' }}
                >
                    404
                </h1>

                <p className="text-white/50 text-lg md:text-xl mb-12 max-w-md mx-auto">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                <Link
                    href="/"
                    className="group relative inline-block text-sm tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors"
                >
                    Back to Home
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
            </motion.div>
        </section>
    );
}
