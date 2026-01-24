"use client";

import { experience } from "@/data";
import Section from "@/components/ui/Section";
import { Briefcase } from "lucide-react";

export default function Experience() {
    return (
        <Section id="experience">
            <div className="flex flex-col items-center mb-12 text-center">
                <h2 className="text-3xl font-bold font-serif text-stone-900 dark:text-stone-50">Work Experience</h2>
                <div className="w-16 h-1 bg-amber-500 rounded-full mt-4"></div>
            </div>

            <div className="relative border-l border-stone-200 dark:border-stone-800 ml-3 md:ml-6 space-y-12">
                {experience.map((job, index) => (
                    <div key={index} className="relative pl-8 md:pl-12">
                        {/* Timeline Dot */}
                        <span className="absolute left-[-5px] top-1 h-3 w-3 rounded-full bg-amber-500 ring-4 ring-white dark:ring-stone-950"></span>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-bold text-stone-900 dark:text-stone-50">{job.role}</h3>
                            <span className="text-sm font-medium text-amber-600 dark:text-amber-500 bg-amber-50 dark:bg-amber-950/30 px-3 py-1 rounded-full border border-amber-100 dark:border-amber-900/50 w-fit mt-2 sm:mt-0">
                                {job.date}
                            </span>
                        </div>

                        <div className="flex items-center gap-2 mb-4 text-sm text-stone-500 dark:text-stone-400">
                            <Briefcase className="w-4 h-4" />
                            <span>{job.organization}</span>
                            <span>•</span>
                            <span>{job.location}</span>
                        </div>

                        <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                            {job.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
