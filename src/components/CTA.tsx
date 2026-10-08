"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { personalInfo, socialLinks } from "@/data";

type FormStatus = "idle" | "loading" | "success" | "error";
type ContactFormData = { name: string; email: string; message: string; website: string };

const emptyForm: ContactFormData = { name: "", email: "", message: "", website: "" };

export default function CTA() {
    const [formData, setFormData] = useState<ContactFormData>(emptyForm);
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [isFormOpen, setIsFormOpen] = useState(false);
    const formRef = useRef<HTMLDivElement>(null);
    const nameInputRef = useRef<HTMLInputElement>(null);
    const statusTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const contactLinks = socialLinks.filter((link) =>
        ["LinkedIn", "Email", "WhatsApp", "Instagram", "Facebook"].includes(link.name)
    );

    const resetStatusLater = () => {
        if (statusTimerRef.current) clearTimeout(statusTimerRef.current);
        statusTimerRef.current = setTimeout(() => {
            setStatus("idle");
            setErrorMessage("");
        }, 5000);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const submission = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
        };

        // Silently accept bot-filled honeypot submissions.
        if (formData.website) {
            setStatus("success");
            setFormData(emptyForm);
            resetStatusLater();
            return;
        }

        if (!submission.name || !submission.email || !submission.message) {
            setErrorMessage("Please complete your name, email, and message.");
            setStatus("error");
            resetStatusLater();
            return;
        }

        setStatus("loading");
        setErrorMessage("");

        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY?.trim();

        try {
            const endpoint = accessKey
                ? "https://api.web3forms.com/submit"
                : `https://formsubmit.co/ajax/${personalInfo.email}`;
            const payload = accessKey
                ? {
                    access_key: accessKey,
                    ...submission,
                    from_name: "Alem Desta Portfolio",
                    subject: `New portfolio message from ${submission.name}`,
                    botcheck: false,
                }
                : {
                    ...submission,
                    _subject: `New portfolio message from ${submission.name}`,
                    _template: "table",
                    _captcha: "false",
                    _honey: formData.website,
                    _url: window.location.href,
                };

            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json().catch(() => null) as {
                success?: boolean | string;
                message?: string;
            } | null;
            const succeeded = response.ok && (result?.success === true || result?.success === "true");

            if (!succeeded) {
                throw new Error(result?.message || "The message service could not accept your message.");
            }

            setStatus("success");
            setFormData(emptyForm);
            resetStatusLater();
        } catch (error) {
            setStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
            resetStatusLater();
        }
    };

    useEffect(() => {
        if (!isFormOpen) return;
        const id = window.setTimeout(() => {
            formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            nameInputRef.current?.focus({ preventScroll: true });
        }, 50);
        return () => window.clearTimeout(id);
    }, [isFormOpen]);

    useEffect(() => {
        return () => {
            if (statusTimerRef.current) clearTimeout(statusTimerRef.current);
        };
    }, []);

    return (
        <section id="contact" className="scroll-mt-24 py-12 md:py-16 px-6 relative">
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
                        <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-syne)] text-[#18181B] mb-4">
                            Ready to build something{" "}
                            <span className="text-gradient">impactful?</span>
                        </h2>
                        <p className="text-base md:text-lg text-[#52525B] max-w-xl mx-auto leading-relaxed">
                            Whether you have a clear idea or just a rough problem statement, I&rsquo;m ready to help you analyze, design, and build the solution.
                        </p>
                        <div className="mt-6 flex items-center justify-center gap-4">
                            {contactLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-[#52525B] hover:text-[#38BDF8] hover:border-[#38BDF8]/40 hover:bg-[#38BDF8]/5 transition-all"
                                    aria-label={link.name}
                                >
                                    {typeof link.icon === "string" ? (
                                        <div className="relative w-5 h-5 opacity-70 hover:opacity-100 transition-opacity flex items-center justify-center">
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
                        <div className="mt-8 flex items-center justify-center">
                            <button
                                type="button"
                                onClick={() => setIsFormOpen((open) => !open)}
                                aria-expanded={isFormOpen}
                                aria-controls="contact-form"
                                className="inline-flex items-center gap-2 border border-white/10 text-[#18181B] px-6 py-3 rounded-full text-sm font-semibold hover:border-[#38BDF8]/40 hover:text-[#38BDF8] transition-all"
                            >
                                {isFormOpen ? "Close Form" : "Say Hello"}
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Gradient border card (reveals on Say Hello) */}
                    <AnimatePresence initial={false}>
                        {isFormOpen && (
                    <motion.div
                        ref={formRef}
                        id="contact-form"
                        initial={{ height: 0, opacity: 0, marginTop: -24 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 0 }}
                        exit={{ height: 0, opacity: 0, marginTop: -24 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative rounded-3xl p-[1px] bg-gradient-to-br from-[#38BDF8]/30 via-[#818CF8]/20 to-[#34D399]/30 overflow-hidden"
                    >
                        <div className="relative rounded-3xl overflow-hidden glass-card p-8 md:p-12">
                            {/* Background glows */}
                            <div className="absolute top-0 right-0 w-[300px] h-[200px] bg-[#38BDF8]/5 rounded-full blur-[100px] pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#818CF8]/5 rounded-full blur-[80px] pointer-events-none" />

                            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                                <div className="absolute -left-[9999px]" aria-hidden="true">
                                    <label htmlFor="contact-website">Website</label>
                                    <input
                                        id="contact-website"
                                        name="_honey"
                                        type="text"
                                        tabIndex={-1}
                                        autoComplete="off"
                                        value={formData.website}
                                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                    />
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <div className="space-y-2">
                                        <label htmlFor="contact-name" className="block text-sm font-medium text-[#52525B]">
                                            Your Name
                                        </label>
                                        <input
                                            ref={nameInputRef}
                                            id="contact-name"
                                            name="name"
                                            type="text"
                                            required
                                            autoComplete="name"
                                            maxLength={100}
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-black/[0.02] border border-white/10 text-[#18181B] placeholder-[#8B95A9]/50 focus:outline-none focus:border-[#38BDF8]/50 focus:ring-1 focus:ring-[#38BDF8]/30 transition-all"
                                            placeholder="Ales Dev"
                                            disabled={status === "loading"}
                                        />
                                    </div>
                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label htmlFor="contact-email" className="block text-sm font-medium text-[#52525B]">
                                            Your Email
                                        </label>
                                        <input
                                            id="contact-email"
                                            name="email"
                                            type="email"
                                            required
                                            autoComplete="email"
                                            maxLength={254}
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-black/[0.02] border border-white/10 text-[#18181B] placeholder-[#8B95A9]/50 focus:outline-none focus:border-[#38BDF8]/50 focus:ring-1 focus:ring-[#38BDF8]/30 transition-all"
                                            placeholder="contact@alesdev.com"
                                            disabled={status === "loading"}
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label htmlFor="contact-message" className="block text-sm font-medium text-[#52525B]">
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        required
                                        rows={5}
                                        maxLength={5000}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-black/[0.02] border border-white/10 text-[#18181B] placeholder-[#8B95A9]/50 focus:outline-none focus:border-[#38BDF8]/50 focus:ring-1 focus:ring-[#38BDF8]/30 transition-all resize-none"
                                        placeholder="Tell me about your project or idea..."
                                        disabled={status === "loading"}
                                    />
                                </div>

                                {/* Submit + Status */}
                                <div className="flex flex-wrap items-center gap-4">
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: status === "loading" ? 1 : 1.03 }}
                                        whileTap={{ scale: status === "loading" ? 1 : 0.97 }}
                                        disabled={status === "loading"}
                                        className="inline-flex items-center gap-3 bg-[#18181B] text-[#FAFAFA] px-8 py-3.5 rounded-full font-bold text-base hover:bg-black hover:shadow-md transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {status === "loading" ? (
                                            <>
                                                <Loader2 size={18} className="animate-spin" />
                                                Sending...
                                            </>
                                        ) : status === "success" ? (
                                            <>
                                                <CheckCircle size={18} />
                                                Sent!
                                            </>
                                        ) : status === "error" ? (
                                            <>
                                                <AlertCircle size={18} />
                                                Failed — Try Again
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
                                        href={`mailto:${personalInfo.email}`}
                                        className="inline-flex items-center gap-2 text-sm text-[#52525B] hover:text-[#38BDF8] transition-colors"
                                    >
                                        <Mail size={16} />
                                        {personalInfo.email}
                                    </a>
                                </div>

                                {/* Toast notification */}
                                <AnimatePresence>
                                    {status === "success" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            role="status"
                                            aria-live="polite"
                                            className="flex items-center gap-2 text-[#34D399] text-sm bg-[#34D399]/10 border border-[#34D399]/20 rounded-xl px-4 py-3"
                                        >
                                            <CheckCircle size={16} />
                                            Message sent successfully! I&apos;ll get back to you soon.
                                        </motion.div>
                                    )}
                                    {status === "error" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            role="alert"
                                            className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3"
                                        >
                                            <AlertCircle size={16} />
                                            {errorMessage || "Something went wrong. Please try again or email me directly."}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </form>
                        </div>
                    </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}

