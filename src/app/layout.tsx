import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "Alem Desta | Full Stack Developer",
  description: "Full Stack Developer and Software Engineering student. Transforming complex requirements into clean, accessible interfaces.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Alem Desta | Full Stack Developer",
    description: "Full Stack Developer focused on Requirement Analysis and UI/UX. View my projects and process.",
    url: siteUrl,
    siteName: "Alem Desta Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alem Desta | Full Stack Developer",
    description: "Full Stack Developer and Software Engineering student.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${syne.variable} font-sans antialiased bg-[#0A0F1A] text-[#E5E7EB] selection:bg-[#38BDF8] selection:text-[#0A0F1A]`}
      >
        {children}
      </body>
    </html>
  );
}
