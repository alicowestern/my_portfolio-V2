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
  keywords: ["Alem Desta", "Full Stack Developer", "Software Engineer", "Next.js", "React", "Spring Boot", "Ethiopia"],
  authors: [{ name: "Alem Desta" }],
  creator: "Alem Desta",
  openGraph: {
    title: "Alem Desta | Full Stack Developer",
    description: "Full Stack Developer focused on Requirement Analysis and UI/UX. View my projects and process.",
    url: siteUrl,
    siteName: "Alem Desta Portfolio",
    images: [
      {
        url: "/profile.jpg", // Consider replacing with a dedicated OG image 1200x630
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Alem Desta',
  url: siteUrl,
  jobTitle: 'Full Stack Developer',
  sameAs: [
    'https://github.com/alicowestern',
    'https://www.linkedin.com/in/alem-desta-73034137b'
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${syne.variable} font-sans antialiased bg-[#F5F5F0] text-[#18181B] selection:bg-[#38BDF8] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
