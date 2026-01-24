"use client";

import { personalInfo } from "@/data";
import Section from "@/components/ui/Section";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
    return (
        <Section id="contact" className="mb-20">
            <div className="bg-white dark:bg-stone-900 rounded-3xl p-8 md:p-12 shadow-xl shadow-stone-200/50 dark:shadow-none border border-stone-100 dark:border-stone-800">
                <div className="grid md:grid-cols-2 gap-12">

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-serif text-stone-900 dark:text-stone-50 mb-4">Let's Connect</h2>
                            <p className="text-lg text-stone-600 dark:text-stone-300">
                                I'm currently looking for new opportunities in Software Engineering and AI.
                                Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>
                        </div>

                        <div className="space-y-4">
                            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 text-stone-600 hover:text-amber-600 dark:text-stone-300 dark:hover:text-amber-500 transition-colors group">
                                <div className="bg-stone-100 dark:bg-stone-800 p-3 rounded-full group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="text-lg">{personalInfo.email}</span>
                            </a>

                            <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-4 text-stone-600 hover:text-amber-600 dark:text-stone-300 dark:hover:text-amber-500 transition-colors group">
                                <div className="bg-stone-100 dark:bg-stone-800 p-3 rounded-full group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30 transition-colors">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <span className="text-lg">{personalInfo.phone}</span>
                            </a>

                            <div className="flex items-center gap-4 text-stone-600 dark:text-stone-300">
                                <div className="bg-stone-100 dark:bg-stone-800 p-3 rounded-full">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <span className="text-lg">{personalInfo.address}</span>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            {personalInfo.socials.filter(s => s.name !== "Email" && s.name !== "Phone" && s.name !== "Location").map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-stone-100 dark:bg-stone-800 rounded-full text-stone-600 dark:text-stone-400 hover:bg-amber-600 hover:text-white dark:hover:bg-amber-600 dark:hover:text-white transition-all transform hover:scale-110"
                                    aria-label={social.name}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Simple Form Placeholder or Visual */}
                    <div className="bg-stone-50 dark:bg-stone-950/50 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 flex flex-col justify-center items-center text-center">
                        <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-500 mb-4 animate-pulse">
                            <Mail size={32} />
                        </div>
                        <p className="text-stone-500 dark:text-stone-400 max-w-xs">
                            Feel free to reach out directly via email. I check my inbox daily.
                        </p>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="mt-6 px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors w-full sm:w-auto"
                        >
                            Send Info
                        </a>
                    </div>

                </div>
            </div>
        </Section>
    );
}
