"use client";
import Link from "next/link";
import { personalInfo, socialLinks } from "@/data";

export default function Footer() {
    return (
        <footer className="relative py-12 px-6 bg-[#F5F5F0] overflow-hidden">
            {/* Gradient Divider */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8]/20 to-transparent" />

            <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">

                <div className="flex flex-col items-center md:items-start gap-1">
                    <Link
                        href="/"
                        className="text-lg font-bold tracking-tight font-[family-name:var(--font-syne)] text-gradient opacity-80 hover:opacity-100 transition-opacity"
                    >
                        Ale&apos;s Dev
                    </Link>
                    <div className="text-[#52525B] text-sm">
                        (c) {new Date().getFullYear()} All rights reserved.
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black/[0.02] p-3 rounded-full border border-black/5 text-[#52525B] hover:text-[#38BDF8] hover:border-[#38BDF8]/30 hover:bg-[#38BDF8]/5 transition-all flex items-center justify-center group"
                            aria-label={link.name}
                        >
                            {typeof link.icon === "string" ? (
                                <div className="relative w-5 h-5 flex items-center justify-center transition-transform group-hover:scale-110">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={link.icon}
                                        alt={link.name}
                                        width={20}
                                        height={20}
                                        className="object-contain w-full h-full transition-all duration-300"
                                        loading="lazy"
                                    />
                                </div>
                            ) : (
                                <link.icon size={18} />
                            )}
                        </a>
                    ))}
                </div>

            </div>
        </footer>
    );
}
