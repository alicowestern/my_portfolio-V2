"use client";

import { education, certifications } from "@/data";
import Section from "@/components/ui/Section";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
    return (
        <Section id="education">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Education Column */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <GraduationCap className="w-8 h-8 text-amber-600 dark:text-amber-500" />
                        <h2 className="text-3xl font-bold font-serif text-stone-900 dark:text-stone-50">Education</h2>
                    </div>

                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <div key={index} className="relative pl-6 border-l-2 border-stone-200 dark:border-stone-800">
                                <div className="mb-1 text-sm font-semibold text-amber-600 dark:text-amber-500 uppercase tracking-wider">
                                    {edu.date}
                                </div>
                                <h3 className="text-xl font-bold text-stone-900 dark:text-stone-50">{edu.degree}</h3>
                                <div className="text-lg font-medium text-stone-700 dark:text-stone-200 mb-2">{edu.institution}</div>
                                <p className="text-stone-600 dark:text-stone-400 text-sm mb-3 italic">{edu.location}</p>
                                <p className="text-stone-600 dark:text-stone-300 mb-3">{edu.description}</p>
                                < div className="inline-block px-3 py-1 bg-stone-100 dark:bg-stone-800 rounded-md text-sm font-medium text-stone-700 dark:text-stone-300">
                                    {edu.grade}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications Column */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <Award className="w-8 h-8 text-amber-600 dark:text-amber-500" />
                        <h2 className="text-3xl font-bold font-serif text-stone-900 dark:text-stone-50">Certifications</h2>
                    </div>

                    <div className="space-y-4">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="p-4 bg-stone-50 dark:bg-stone-900 rounded-xl border border-stone-100 dark:border-stone-800 hover:border-amber-200 dark:hover:border-amber-900/50 transition-colors"
                            >
                                <h3 className="font-semibold text-stone-900 dark:text-stone-50">{cert.name}</h3>
                                <div className="flex justify-between items-center mt-2 text-sm">
                                    <span className="text-stone-600 dark:text-stone-400">{cert.issuer}</span>
                                    <span className="text-stone-500 dark:text-stone-500 bg-white dark:bg-stone-950 px-2 py-0.5 rounded border border-stone-200 dark:border-stone-800">{cert.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
