import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const personalInfo = {
    name: "Alem Desta",
    headline: "Designing solutions that start with understanding the problem.",
    subHeadline: "5th-year Software Engineering student and Full-Stack Developer, focused on requirements analysis and building reliable, user-centered systems for real-world needs.",
    email: "alicox2024@gmail.com",
    github: "https://github.com/alicowestern",
    linkedin: "https://www.linkedin.com/in/alem-desta-73034137b",
    cvUrl: "/Alem-Desta-CV.pdf",
    profileImage: "/profile.jpg",
    about: "I'm a 5th-year Software Engineering student specializing in full-stack development and requirements analysis. Having engineered secure, enterprise systems for the Commercial Bank of Ethiopia and INSA, I deliver production-ready solutions for complex challenges. Volunteering with NGOs taught me to transform unclear requirements into critical tools for real users. I prioritize clarity, usability, and structured thinking—ensuring every line of code serves a human need."
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
    Caddy: { name: "Caddy", icon: "https://cdn.simpleicons.org/caddy/1F88C0" }
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
        category: "Tools & Design",
        items: [techStack.Figma, techStack.Git, techStack.GitHub, techStack.Swagger, techStack.Trello, techStack.Jira]
    }
];

export const projects = [
    {
        title: "My Chicken Addis",
        role: "Full Stack Developer",
        timeline: "",
        team: "",
        problem: "Poultry farming operations and farmer services required a streamlined digital platform to manage operations efficiently.",
        requirements: "A fast, accessible web application for showcasing services, managing orders, and providing agricultural information.",
        solution: "Developed a comprehensive web platform for poultry farming services with a focus on usability and performance.",
        outcome: "Enhanced operational efficiency and improved access to farmer services.",
        tech: [techStack.NextJS, techStack.React, techStack.Tailwind],
        link: "https://github.com/alicowestern/my_chicken_addis",
        demoUrl: "https://my-chicken-addis-chi.vercel.app/"
    },
    {
        title: "SeeHere (CBE ATM Management System)",
        role: "Full-Stack Developer / Software Engineer",
        timeline: "",
        team: "Commercial Bank of Ethiopia (CBE)",
        problem: "Before SeeHere, tracking ATM statuses, coordinating maintenance, and managing branch contacts was manual, leading to delays in ATM servicing and scattered data.",
        requirements: "A secure, scalable, and centralized ATM Management System to digitize tracking, maintenance, and administrative management of the ATM network on the bank's LAN.",
        solution: "Developed a dynamic SSR frontend with Next.js and a Java Spring Boot backend with Role-Based Access Control, comprehensive audit logging, and a secure LAN deployment using Caddy.",
        outcome: "Delivered a system that significantly improved the bank's operational efficiency and hardware downtime response by replacing fragmented manual tracking.",
        tech: [techStack.NextJS, techStack.React, techStack.TypeScript, techStack.Tailwind, techStack.SpringBoot, techStack.PostgreSQL],
        link: "https://github.com/alicowestern/SeeHere",
        demoUrl: "Deployed on CBE LAN"
    },
    {
        title: "Zebegna ዘበኛ (Device Exit Control System)",
        role: "Sole Full-Stack Developer",
        timeline: "",
        team: "INSA (Information Network Security Administration)",
        problem: "INSA needed a secure, enterprise-grade system to strictly manage hardware device exit controls, multi-level approvals, and audit trails — replacing manual processes at a national security agency.",
        requirements: "A full-stack device exit control system with device registration, multi-level exit approvals, comprehensive audit logging, external ERP synchronization, automated document generation (PDF, Excel, Word), and Keycloak-based identity management.",
        solution: "Engineered the entire system solo — from authoring a 55-page SRS document through to deployment. Built a Java 17/Spring Boot 3.2 backend with Keycloak OAuth2, Resilience4j circuit breakers for ERP integration, and a React 19/Vite frontend with TanStack Query, Chart.js/Recharts dashboards, and strict RBAC.",
        outcome: "Delivered a production-ready, security-hardened system that digitized INSA's device exit workflow, enabling real-time tracking, automated reporting, and full regulatory compliance.",
        tech: [techStack.Java, techStack.SpringBoot, techStack.React, techStack.Vite, techStack.TypeScript, techStack.Tailwind, techStack.PostgreSQL, techStack.Swagger],
        link: "#",
        demoUrl: "Deployed on INSA Internal Network"
    }
];

export const realWorldContext = {
    content: "My approach to software engineering was shaped by volunteering with NGOs in refugee camps—where I learned to navigate unclear requirements and build critical solutions with limited resources—and sharpened by engineering enterprise systems for the Commercial Bank of Ethiopia and INSA. From humanitarian fieldwork to national-security infrastructure, these experiences taught me that code is just a tool—the real skill is communication, prioritization, and truly understanding the human problem before writing a single character."
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


