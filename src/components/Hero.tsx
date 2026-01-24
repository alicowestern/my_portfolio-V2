"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { personalInfo } from "@/data";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-stone-50 dark:bg-stone-950">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 -left-4 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-96 h-96 bg-stone-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1"
                    >
                        <div className="space-y-4">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block px-4 py-1.5 text-sm font-semibold tracking-wider uppercase text-amber-700 dark:text-amber-400 bg-amber-100/50 dark:bg-amber-900/20 rounded-full border border-amber-200 dark:border-amber-800"
                            >
                                Portfolio
                            </motion.span>

                            <h1 className="text-4xl md:text-6xl font-bold font-serif text-stone-900 dark:text-stone-50 tracking-tight leading-tight">
                                Hi, I'm <span className="text-amber-600 dark:text-amber-500">{personalInfo.name}</span>
                                <div className="h-20 md:h-24 overflow-hidden mt-2">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={roleIndex}
                                            initial={{ y: 40, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -40, opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="text-2xl md:text-5xl font-sans text-stone-600 dark:text-stone-300"
                                        >
                                            {personalInfo.roles[roleIndex]}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </h1>

                            <p className="text-lg text-stone-600 dark:text-stone-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                {personalInfo.about}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                            <a
                                href="#contact"
                                className="group flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-stone-900 dark:bg-stone-50 dark:text-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 rounded-full transition-all hover:scale-105 shadow-lg"
                            >
                                Contact Me <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </a>
                            <a
                                href="/cv.pdf"
                                download
                                className="flex items-center gap-2 px-8 py-4 text-base font-medium text-stone-900 dark:text-stone-100 bg-white dark:bg-stone-800 hover:bg-stone-50 dark:hover:bg-stone-700 rounded-full border border-stone-200 dark:border-stone-700 transition-all hover:scale-105 shadow-sm"
                            >
                                Download CV <Download className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-6 pt-8">
                            {personalInfo.socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors transform hover:-translate-y-1"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image/Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative order-1 lg:order-2 flex justify-center"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem]">
                            {/* Decorative Rings */}
                            <div className="absolute inset-0 border-2 border-dashed border-stone-200 dark:border-stone-800 rounded-full animate-[spin_20s_linear_infinite]"></div>
                            <div className="absolute inset-4 border border-stone-100 dark:border-stone-800 rounded-full"></div>

                            {/* Main Image Container */}
                            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white dark:border-stone-900 shadow-2xl">
                                <Image
                                    src={personalInfo.profileImage || "/profile.jpg"}
                                    alt={personalInfo.name}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {/* Gradient Overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent pointer-events-none"></div>
                            </div>

                            {/* Floating Badges */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -right-4 top-20 bg-white dark:bg-stone-800 p-4 rounded-2xl shadow-xl border border-stone-100 dark:border-stone-700 hidden md:block"
                            >
                                <span className="text-2xl">💻</span>
                                <span className="ml-2 font-bold text-stone-800 dark:text-stone-200">Coder</span>
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -left-4 bottom-20 bg-white dark:bg-stone-800 p-4 rounded-2xl shadow-xl border border-stone-100 dark:border-stone-700 hidden md:block"
                            >
                                <span className="text-2xl">✨</span>
                                <span className="ml-2 font-bold text-stone-800 dark:text-stone-200">Creative</span>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
