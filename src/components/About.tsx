"use client";

import { personalInfo } from "@/data";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Code, Database, Globe, Cpu } from "lucide-react";

export default function About() {
    return (
        <Section id="about" className="bg-stone-50 dark:bg-stone-950/20 rounded-3xl my-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold font-serif text-stone-900 dark:text-stone-50">About Me</h2>
                    <div className="w-16 h-1 bg-amber-500 rounded-full"></div>
                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-lg">
                        I am a {personalInfo.title} based in {personalInfo.address.split(',')[1].trim()}.
                        With a strong foundation in Software Engineering (BSc) and hands-on experience in humanitarian data analysis and community work, I bring a unique perspective to technology.
                    </p>
                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-lg">
                        My passion lies in leveraging technology—specifically AI and secure systems—to solve real-world problems. Whether it's building scalable web applications, ensuring data security, or analyzing complex datasets, I focus on creating impact.
                    </p>

                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                        {personalInfo.socials.filter(s => s.name === "Email" || s.name === "Location" || s.name === "Phone" || s.name === "LinkedIn").map((item) => (
                            <div key={item.name} className="flex flex-col">
                                <dt className="text-sm font-medium text-stone-500 dark:text-stone-400">{item.name}</dt>
                                <dd className="text-base font-semibold text-stone-900 dark:text-stone-100">{item.display}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* Creative Career Visualization */}
                <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-stone-900 to-stone-950 border border-stone-800 shadow-2xl flex items-center justify-center p-8 group">

                    {/* Background Glows */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-1000"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all duration-1000"></div>

                    {/* Code Terminal Card */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full bg-stone-900/90 backdrop-blur-md rounded-xl border border-stone-700/50 p-6 font-mono text-sm relative z-10 shadow-xl"
                    >
                        <div className="flex gap-2 mb-4 border-b border-stone-700/50 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            <div className="ml-auto text-xs text-stone-500">alem_profile.tsx</div>
                        </div>

                        <div className="space-y-2 font-medium">
                            <div className="flex">
                                <span className="text-purple-400 mr-2">const</span>
                                <span className="text-amber-200 mr-2">engineer</span>
                                <span className="text-stone-400">=</span>
                                <span className="text-stone-400 ml-2">{'{'}</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-blue-300">name</span>: <span className="text-green-400">'{personalInfo.name}'</span>,
                            </div>
                            <div className="pl-4">
                                <span className="text-blue-300">focus</span>: [<span className="text-green-400">'FullStack'</span>, <span className="text-green-400">'Data'</span>],
                            </div>
                            <div className="pl-4">
                                <span className="text-blue-300">passion</span>: <span className="text-green-400">'Humanitarian Tech'</span>,
                            </div>
                            <div className="pl-4">
                                <span className="text-blue-300">status</span>: <span className="text-amber-400">"Building Solutions"</span>
                            </div>
                            <div>
                                <span className="text-stone-400">{'}'}</span>;
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-stone-700/30 flex justify-between text-xs text-stone-500">
                            <span>Ln 1, Col 1</span>
                            <span>UTF-8</span>
                            <span>TypeScript JSX</span>
                        </div>
                    </motion.div>

                    {/* Floating Tech Icons */}
                    <motion.div
                        className="absolute top-12 left-8 p-3 bg-stone-800/80 backdrop-blur border border-stone-700 rounded-lg text-amber-500"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Code size={20} />
                    </motion.div>

                    <motion.div
                        className="absolute bottom-20 right-8 p-3 bg-stone-800/80 backdrop-blur border border-stone-700 rounded-lg text-blue-400"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                        <Database size={20} />
                    </motion.div>

                    <motion.div
                        className="absolute top-1/2 right-4 p-2 bg-stone-800/80 backdrop-blur border border-stone-700 rounded-lg text-purple-400"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                        <Cpu size={18} />
                    </motion.div>
                    <motion.div
                        className="absolute bottom-10 left-12 p-2 bg-stone-800/80 backdrop-blur border border-stone-700 rounded-lg text-green-400"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    >
                        <Globe size={18} />
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
