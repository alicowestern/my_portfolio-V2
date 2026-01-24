"use client";

import { personalInfo } from "@/data";
import Section from "@/components/ui/Section";

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

                {/* Abstract/Image Placeholder */}
                <div className="relative aspect-square md:aspect-[4/5] bg-stone-200 dark:bg-stone-800 rounded-2xl overflow-hidden flex items-center justify-center">
                    {/* If user had an image, we'd use Next Image. For now, a stylish pattern or placeholder */}
                    <div className="absolute inset-0 bg-stone-300 dark:bg-stone-700 opacity-20 pattern-dots"></div>
                    <span className="text-stone-400 dark:text-stone-600 text-6xl font-serif font-black opacity-20">AD</span>
                </div>
            </div>
        </Section>
    );
}
