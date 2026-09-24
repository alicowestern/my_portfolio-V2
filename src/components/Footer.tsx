"use client";
import Link from "next/link";
import { personalInfo, socialLinks } from "@/data";

export default function Footer() {
    return (
        <footer className="relative py-12 px-6 overflow-hidden">
            {/* Gradient Divider */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8]/20 to-transparent" />

            <div className="container mx-auto max-w-5xl flex flex-col items-center justify-center relative z-10">

                <div className="flex flex-col items-center gap-1">
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

            </div>
        </footer>
    );
}

