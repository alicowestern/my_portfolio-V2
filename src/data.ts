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
    about: "I am a 4th-year Software Engineering student with a deep interest in full stack development and requirement analysis. My approach is heavily influenced by my experience volunteering with humanitarian NGOs, where I learned to work with unclear requirements and build critical solutions for real users. I focus on clarity, usability, and structured thinking—ensuring that every line of code serves a clear human need."
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
    NextJS: { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
    TypeScript: { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    Tailwind: { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    FramerMotion: { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/0055FF" },
    SpringBoot: { name: "Spring Boot", icon: "https://cdn.simpleicons.org/springboot/6DB33F" },
    Figma: { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
    Git: { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
    GitHub: { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
    Swagger: { name: "Swagger", icon: "https://cdn.simpleicons.org/swagger/85EA2D" },
    Trello: { name: "Trello", icon: "https://cdn.simpleicons.org/trello/0052CC" },
    Express: { name: "Express", icon: "https://cdn.simpleicons.org/express/white" },
    Python: { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
    Pandas: { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas/150458" },
    D3: { name: "D3.js", icon: "https://cdn.simpleicons.org/d3/F9A03C" },
    PostgreSQL: { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
    MongoDB: { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    Jira: { name: "Jira", icon: "https://cdn.simpleicons.org/jira/0052CC" }
};

export const tools = [
    {
        category: "Frontend",
        items: [techStack.React, techStack.NextJS, techStack.TypeScript, techStack.Tailwind, techStack.FramerMotion]
    },
    {
        category: "Backend & Data",
        items: [techStack.SpringBoot, techStack.Express, techStack.Python, techStack.PostgreSQL, techStack.MongoDB, techStack.Pandas, techStack.D3]
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
        title: "CBE (SeeHere) Internal System",
        role: "Full Stack Developer",
        timeline: "",
        team: "",
        problem: "The Commercial Bank of Ethiopia required a robust internal tool (SeeHere) for managing and tracking organizational operations securely.",
        requirements: "A secure, LAN-hosted application tailored for internal banking operational requirements and high reliability.",
        solution: "Engineered a secure internal system designed to be hosted on the local network (LAN) for maximum security and performance.",
        outcome: "Delivered a reliable internal management tool ensuring data privacy and operational continuity.",
        tech: [techStack.React, techStack.SpringBoot, techStack.PostgreSQL],
        link: "https://github.com/alicowestern/SeeHere",
        demoUrl: "Recommended for LAN hosting"
    },
    {
        title: "Zebegna",
        role: "Full Stack Developer",
        timeline: "",
        team: "",
        problem: "Needed a localized solution for security/operational tracking utilizing internal infrastructure.",
        requirements: "A system relying on local GitLab and local hosting environments to maintain complete data sovereignty.",
        solution: "Built a customized system deployed entirely on local infrastructure, leveraging local GitLab for source control.",
        outcome: "Provided a fully sovereign, locally-hosted system meeting strict internal operational requirements.",
        tech: [techStack.NextJS, techStack.PostgreSQL, techStack.Tailwind],
        link: "#",
        demoUrl: "Local Hosting"
    }
];

export const realWorldContext = {
    content: "My approach to software engineering is heavily influenced by my time volunteering with NGOs and working in refugee camps. I learned to work with unclear requirements, limited resources, and users who needed critical fast solutions. This experience taught me that code is just a tool—the real skill is communication, prioritization, and truly understanding the human problem before writing a single character."
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


