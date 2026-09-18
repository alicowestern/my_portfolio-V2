"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Send, CheckCircle } from "lucide-react";
import { socialLinks } from "@/data";

export default function CTA() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const formRef = useRef<HTMLDivElement>(null);
    const contactLinks = socialLinks.filter((link) =>
        ["LinkedIn", "Email", "WhatsApp", "Instagram", "Facebook"].includes(link.name)
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Open mailto with filled data as fallback
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
        window.location.href = `mailto:alicox2024@gmail.com?subject=${subject}&body=${body}`;
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    useEffect(() => {
        if (!isFormOpen) return;
        const id = window.setTimeout(() => {
            formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
        return () => window.clearTimeout(id);
    }, [isFormOpen]);

    return (
        <section id="contact" className="scroll-mt-24 py-24 px-6 bg-[#0A0F1A] relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8]/20 to-transparent" />

            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 80, damping: 20 }}
                >
                    {/* Section Heading */}
                    <div className="text-center mb-12">
                        <span className="text-[#38BDF8] text-sm font-medium tracking-widest uppercase mb-3 block">Get In Touch</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-syne)] text-[#E5E7EB] mb-4">
                            Ready to build something{" "}
                            <span className="text-gradient">impactful?</span>
                        </h2>
                        <p className="text-base md:text-lg text-[#8B95A9] max-w-xl mx-auto leading-relaxed">
                            Whether you have a clear idea or just a rough problem statement, I&rsquo;m ready to help you analyze, design, and build the solution.
                        </p>
                        <div className="mt-6 flex items-center justify-center gap-4">
                            {contactLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-[#8B95A9] hover:text-[#38BDF8] hover:border-[#38BDF8]/40 hover:bg-[#38BDF8]/5 transition-all"
                                    aria-label={link.name}
                                >
                                    {typeof link.icon === "string" ? (
                                        <div className="relative w-5 h-5 opacity-70 hover:opacity-100 transition-opacity">
                                            <Image
                                                src={link.icon}
                                                alt={link.name}
                                                fill
                                                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                            />
                                        </div>
                                    ) : (
                                        <link.icon size={18} />
                                    )}
                                </a>
                            ))}
                        </div>
                        <div className="mt-8 flex items-center justify-center">
                            <button
                                type="button"
                                onClick={() => setIsFormOpen(true)}
                                className="inline-flex items-center gap-2 border border-white/10 text-[#E5E7EB] px-6 py-3 rounded-full text-sm font-semibold hover:border-[#38BDF8]/40 hover:text-[#38BDF8] transition-all"
                            >
                                Say Hello
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Gradient border card (reveals on Say Hello) */}
                    <motion.div
                        ref={formRef}
                        id="contact-form"
                        initial={false}
                        animate={isFormOpen ? { height: "auto", opacity: 1, marginTop: 0 } : { height: 0, opacity: 0, marginTop: -24 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative rounded-3xl p-[1px] bg-gradient-to-br from-[#38BDF8]/30 via-[#818CF8]/20 to-[#34D399]/30 overflow-hidden"
                        style={{ pointerEvents: isFormOpen ? "auto" : "none" }}
                    >
                        <div className="relative rounded-3xl overflow-hidden glass-card p-8 md:p-12">
                            {/* Background glows */}
                            <div className="absolute top-0 right-0 w-[300px] h-[200px] bg-[#38BDF8]/5 rounded-full blur-[100px] pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#818CF8]/5 rounded-full blur-[80px] pointer-events-none" />

                            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <div className="space-y-2">
                                        <label htmlFor="contact-name" className="block text-sm font-medium text-[#8B95A9]">
                                            Your Name
                                        </label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-[#E5E7EB] placeholder-[#8B95A9]/50 focus:outline-none focus:border-[#38BDF8]/50 focus:ring-1 focus:ring-[#38BDF8]/30 transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label htmlFor="contact-email" className="block text-sm font-medium text-[#8B95A9]">
                                            Your Email
                                        </label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-[#E5E7EB] placeholder-[#8B95A9]/50 focus:outline-none focus:border-[#38BDF8]/50 focus:ring-1 focus:ring-[#38BDF8]/30 transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label htmlFor="contact-message" className="block text-sm font-medium text-[#8B95A9]">
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-[#E5E7EB] placeholder-[#8B95A9]/50 focus:outline-none focus:border-[#38BDF8]/50 focus:ring-1 focus:ring-[#38BDF8]/30 transition-all resize-none"
                                        placeholder="Tell me about your project or idea..."
                                    />
                                </div>

                                {/* Submit */}
                                <div className="flex flex-wrap items-center gap-4">
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-[#0A0F1A] px-8 py-3.5 rounded-full font-bold text-base hover:shadow-[0_0_40px_rgba(56,189,248,0.3)] transition-shadow"
                                    >
                                        {submitted ? (
                                            <>
                                                <CheckCircle size={18} />
                                                Sent!
                                            </>
                                        ) : (
                                            <>
                                                <Send size={18} />
                                                Send Message
                                                <ArrowRight size={16} />
                                            </>
                                        )}
                                    </motion.button>

                                    <a
                                        href="mailto:alicox2024@gmail.com"
                                        className="inline-flex items-center gap-2 text-sm text-[#8B95A9] hover:text-[#38BDF8] transition-colors"
                                    >
                                        <Mail size={16} />
                                        alicox2024@gmail.com
                                    </a>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
