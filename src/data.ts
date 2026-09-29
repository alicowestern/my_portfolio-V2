import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const personalInfo = {
    name: "Alem Desta",
    headline: "Designing solutions that start with understanding the problem.",
    subHeadline: "Alem Desta, Software Engineer and Full-Stack Developer, focused on requirements analysis and building reliable, user-centered systems for real-world needs.",
    email: "alicox2024@gmail.com",
    github: "https://github.com/alicowestern",
    linkedin: "https://www.linkedin.com/in/alem-desta-73034137b",
    cvUrl: "/Alem-Desta-CV.pdf",
    profileImage: "/profile.jpg",
    about: "I'm a 5th-year Software Engineering student specializing in full-stack development and requirements analysis. Having engineered secure, enterprise systems for the Commercial Bank of Ethiopia and INSA, I deliver production-ready solutions for complex challenges. Volunteering with NGOs taught me to transform unclear requirements into critical tools for real users. I prioritize clarity, usability, and structured thinking - ensuring every line of code serves a human need."
};

export const focusAreas = [
    {
        title: "Problem Solving",
        description: "Breaking down ambiguity into manageable parts and identifying core constraints before writing a single line of code."
    },
    {
        title: "Requirement Analysis",
        description: "Understanding system goals and user needs upfront. I believe that a well-defined problem is a half-solved problem."
    },
    {
        title: "Software Design & Architecture",
        description: "Structuring scalable systems and clean interfaces. Moving beyond just UI/UX to ensure the entire application architecture is robust, secure, and maintainable."
    }
];

export const processSteps = [
    {
        title: "Understand",
        description: "Deep dive into the problem space. Who is this for? What are the constraints?"
    },
    {
        title: "Analyze",
        description: "Structuring requirements. Defining the 'what' before the 'how'."
    },
    {
        title: "Design",
        description: "Sketching solutions. UI/UX decisions based on user needs, not trends."
    },
    {
        title: "Implement",
        description: "Clean, semantic code. Functionality first, then polish."
    },
    {
        title: "Iterate",
        description: "Refining based on feedback. The solution is never truly 'finished', only improved."
    }
];

// Tech Stack Dictionary with Icons
export const techStack = {
    React: { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    NextJS: { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
    TypeScript: { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    Tailwind: { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    FramerMotion: { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/0055FF" },
    SpringBoot: { name: "Spring Boot", icon: "https://cdn.simpleicons.org/springboot/6DB33F" },
    Figma: { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
    Git: { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
    GitHub: { name: "GitHub", icon: "https://cdn.simpleicons.org/github/000000" },
    Swagger: { name: "Swagger", icon: "https://cdn.simpleicons.org/swagger/85EA2D" },
    Trello: { name: "Trello", icon: "https://cdn.simpleicons.org/trello/0052CC" },
    Express: { name: "Express", icon: "https://cdn.simpleicons.org/express/000000" },
    Python: { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
    Pandas: { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas/150458" },
    D3: { name: "D3.js", icon: "https://cdn.simpleicons.org/d3/F9A03C" },
    PostgreSQL: { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
    MongoDB: { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    Jira: { name: "Jira", icon: "https://cdn.simpleicons.org/jira/0052CC" },
    Vite: { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" },
    Java: { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    Keycloak: { name: "Keycloak", icon: "https://cdn.simpleicons.org/keycloak/4D4D4D" },
    Maven: { name: "Maven", icon: "https://cdn.simpleicons.org/apachemaven/C71A36" },
    SpringSecurity: { name: "Spring Security", icon: "https://cdn.simpleicons.org/springsecurity/6DB33F" },
    Flyway: { name: "Flyway", icon: "https://cdn.simpleicons.org/flyway/CC0200" },
    ChartJS: { name: "Chart.js", icon: "https://cdn.simpleicons.org/chartdotjs/FF6384" },
    Caddy: { name: "Caddy", icon: "https://cdn.simpleicons.org/caddy/1F88C0" },
    Cursor: { name: "Cursor", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2318181b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m4 4 7.07 17 2.51-7.39L21 11.07z'/%3E%3C/svg%3E" },
    Codex: { name: "OpenAI Codex", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2318181b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 8V4H8'/%3E%3Crect width='16' height='12' x='4' y='8' rx='2'/%3E%3Cpath d='M2 14h2'/%3E%3Cpath d='M20 14h2'/%3E%3Cpath d='M15 13v2'/%3E%3Cpath d='M9 13v2'/%3E%3C/svg%3E" },
    Antigravity: { name: "Antigravity", icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2338bdf8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z'/%3E%3Cpath d='m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z'/%3E%3Cpath d='M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0'/%3E%3Cpath d='M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5'/%3E%3C/svg%3E" }
};

export const tools = [
    {
        category: "Frontend",
        items: [techStack.React, techStack.NextJS, techStack.Vite, techStack.TypeScript, techStack.Tailwind, techStack.ChartJS, techStack.FramerMotion]
    },
    {
        category: "Backend & Data",
        items: [techStack.Java, techStack.SpringBoot, techStack.SpringSecurity, techStack.Express, techStack.Python, techStack.PostgreSQL, techStack.MongoDB, techStack.Flyway, techStack.Pandas, techStack.D3]
    },
    {
        category: "Security & Infrastructure",
        items: [techStack.Keycloak, techStack.Caddy, techStack.Maven]
    },
    {
        category: "Tools & AI",
        items: [techStack.Figma, techStack.Git, techStack.GitHub, techStack.Swagger, techStack.Trello, techStack.Jira, techStack.Cursor, techStack.Codex, techStack.Antigravity]
    }
];

export const projects = [
    {
        title: "My Chicken Addis",
        role: "Full Stack Developer",
        timeline: "",
        team: "",
        description: "Developed a full-stack web platform to streamline poultry farming operations, manage orders, and provide agricultural information. The application significantly improved operational efficiency and enhanced access to farmer services.",
        tech: [techStack.NextJS, techStack.React, techStack.Tailwind],
        link: "https://github.com/alicowestern/my_chicken_addis",
        demoUrl: "https://my-chicken-addis-chi.vercel.app/",
        media: null
    },
    {
        title: "SeeHere (CBE ATM Source of Truth)",
        role: "Full-Stack Developer / Software Engineer",
        timeline: "",
        team: "Commercial Bank of Ethiopia (CBE)",
        description: "Engineered a secure, centralized 'Source of Truth' system for the Commercial Bank of Ethiopia (CBE) to manage all ATMs and their 20+ dynamic attributes. Replacing vulnerable manual spreadsheets and fragmented communication, this Java Spring Boot and Next.js platform ensures hardware data remains consistently updated, synchronized, and secure across the bank's internal network.",
        tech: [techStack.NextJS, techStack.React, techStack.TypeScript, techStack.Tailwind, techStack.SpringBoot, techStack.PostgreSQL],
        link: "https://github.com/alicowestern/SeeHere",
        demoUrl: "Deployed on CBE LAN",
        media: {
            video: "/SeeHere Screen Recording 2026-09-18 222541-compressed.mp4",
            images: [
                "/SeeHereDashboard.png",
                "/SeeHereATMs.png",
                "/SeeHereBranches.png",
                "/SeeHereLogIn.png"
            ]
        }
    },
    {
        title: "Zebegna ዘበኛ (Device Exit Control System)",
        role: "Sole Full-Stack Developer",
        timeline: "",
        team: "INSA (Information Network Security Administration)",
        description: "Architected and deployed a security-hardened device exit control system for INSA to digitize enterprise hardware management. Built entirely solo, the platform integrates a Java Spring Boot backend, Keycloak OAuth2, and external ERP synchronization with a React/Vite dashboard for real-time tracking and multi-level approvals.",
        tech: [techStack.Java, techStack.SpringBoot, techStack.React, techStack.Vite, techStack.TypeScript, techStack.Tailwind, techStack.PostgreSQL, techStack.Swagger],
        link: "#",
        demoUrl: "Deployed on INSA Internal Network",
        media: {
            video: "/Zebegna Screen Recording 2026-09-18 223621-compressed.mp4",
            images: [
                "/ZebegnaDashboard.png",
                "/ZebegnaReportDashboard.png",
                "/ZebegnaLogIn.png"
            ]
        }
    }
];

export const realWorldContext = {
    content: "My approach to software engineering was shaped by volunteering with NGOs in refugee camps - where I learned to navigate unclear requirements and build critical solutions with limited resources - and sharpened by engineering enterprise systems for the Commercial Bank of Ethiopia and INSA. From humanitarian fieldwork to national-security infrastructure, these experiences taught me that code is just a tool - the real skill is communication, prioritization, and truly understanding the human problem before writing a single character."
};

export const socialLinks = [
    {
        name: "GitHub",
        icon: Github,
        href: "https://github.com/alicowestern"
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://www.linkedin.com/in/alem-desta-73034137b"
    },
    {
        name: "Email",
        icon: Mail,
        href: "mailto:alicox2024@gmail.com"
    },
    {
        name: "Instagram",
        icon: "https://cdn.simpleicons.org/instagram/E4405F",
        href: "https://instagram.com/alesdev00"
    },
    {
        name: "Facebook",
        icon: "https://cdn.simpleicons.org/facebook/1877F2",
        href: "https://facebook.com/alesdev00"
    },
    {
        name: "WhatsApp",
        icon: "https://cdn.simpleicons.org/whatsapp/25D366",
        href: "https://wa.me/251987575589"
    }
];


