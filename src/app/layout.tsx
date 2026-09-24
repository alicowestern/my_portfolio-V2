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
  title: "Alem Desta | Software Engineer",
  description: "Explore the portfolio of Alem Desta, a top software engineer and full-stack developer specializing in React, Next.js, and Java Spring Boot. Delivering enterprise-grade, secure systems.",
  metadataBase: new URL(siteUrl),
  keywords: [
    "Alem Desta", 
    "Best software engineer portfolio", 
    "Top Full Stack Developer", 
    "Software Engineer Ethiopia", 
    "Java Spring Boot Developer", 
    "React Developer", 
    "Next.js Portfolio", 
    "Enterprise Software Engineer", 
    "Tech Portfolio Inspiration",
    "Creative Developer Portfolio"
  ],
  authors: [{ name: "Alem Desta" }],
  creator: "Alem Desta",
  openGraph: {
    title: "Alem Desta | Software Engineer",
    description: "Full Stack Developer focused on enterprise solutions, secure architectures, and modern UI/UX.",
    url: siteUrl,
    siteName: "Alem Desta | Software Engineer",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 600,
        alt: "Alem Desta - Software Engineer"
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alem Desta | Software Engineer",
    description: "Top software engineer and full-stack developer.",
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
  jobTitle: 'Software Engineer & Full Stack Developer',
  description: 'Alem Desta is a top Software Engineer and Full Stack Developer based in Ethiopia, specializing in enterprise-grade systems, React, Next.js, and Java Spring Boot.',
  knowsAbout: ['Software Engineering', 'Full Stack Development', 'React', 'Next.js', 'Java Spring Boot', 'Enterprise Security'],
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
