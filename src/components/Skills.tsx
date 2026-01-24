"use client";

import { skills } from "@/data";
import Section from "@/components/ui/Section";
import { CheckCircle2 } from "lucide-react";

export default function Skills() {
    return (
        <Section id="skills" className="bg-stone-50 dark:bg-stone-900/50 rounded-3xl my-8">
            <div className="flex flex-col items-center mb-12 text-center">
                <h2 className="text-3xl font-bold font-serif text-stone-900 dark:text-stone-50">Skills & Expertise</h2>
                <div className="w-16 h-1 bg-amber-500 rounded-full mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {skills.map((category, idx) => (
                    <div
                        key={category.category}
                        className="bg-white dark:bg-stone-900 p-6 rounded-xl border border-stone-100 dark:border-stone-800 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <h3 className="text-xl font-bold text-stone-900 dark:text-stone-50 mb-4 pb-2 border-b border-stone-100 dark:border-stone-800">
                            {category.category}
                        </h3>
                        <ul className="space-y-3">
                            {category.items.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-stone-600 dark:text-stone-300">
                                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
