import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const personalInfo = {
    name: "Alem Desta",
    title: "Full-Stack Developer | Software Engineer",
    email: "alicox2024@gmail.com",
    phone: "(+251) 987575589",
    address: "Mekelle University Main Campus, Mekelle, Ethiopia",
    linkedin: "https://www.linkedin.com/in/alem-desta-73034137b",
    github: "https://github.com/alicowestern",
    about: "Results-driven Software Engineer with expertise in frontend development and requirement analysis. Dedicated to building scalable, user-centric web applications and transforming complex requirements into seamless digital experiences.",
    roles: ["Software Engineer", "Frontend Developer", "Requirement Analyst"],
    profileImage: "/profile.jpg",
    socials: [
        {
            name: "Email",
            icon: Mail,
            href: "mailto:alicox2024@gmail.com",
            display: "alicox2024@gmail.com"
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            href: "https://www.linkedin.com/in/alem-desta-73034137b",
            display: "LinkedIn"
        },
        {
            name: "GitHub",
            icon: Github,
            href: "https://github.com/alicowestern",
            display: "GitHub"
        },
        {
            name: "Location",
            icon: MapPin,
            href: "#",
            display: "Mekelle, Ethiopia"
        },
        {
            name: "Phone",
            icon: Phone,
            href: "tel:+251987575589",
            display: "(+251) 987575589"
        }
    ]
};

export const education = [
    {
        institution: "Mekelle University",
        degree: "BSc in Software Engineering",
        date: "24/09/2019 – Current",
        location: "Mekelle, Ethiopia",
        description: "Bachelor's in Software Engineering-gaining expertise in software development, system design, and practical problem-solving using modern technologies for efficient, scalable solutions.",
    }
];

export const experience = [
    {
        role: "Community Social Worker",
        organization: "Danish Refugee Council",
        date: "01/10/2023 – 31/01/2025",
        location: "Al Gedarif State, Sudan",
        description: "Supported the Danish Refugee Council's food security and livelihood programs. Assisted in project management and community mobilization."
    },
    {
        role: "Community Development Social Worker",
        organization: "Danish Refugee Council",
        date: "01/09/2021 – 31/03/2023",
        location: "Al Gedarif state, Sudan",
        description: "Community Mobilizer (Site Management) experienced in community engagement, FCRM implementation, crowd management, and interpretation support for DRC staff."
    },
    {
        role: "Survey Enumerator",
        organization: "Solidaritès International",
        date: "30/03/2021 – 14/06/2021",
        location: "Al Gedarif State, Sudan",
        description: "Conducted water quality analyses for Solidarités International, assessing pH, FRC, and flow to ensure safe, reliable water access."
    }
];

export const skills = [
    { category: "Technical", items: ["Requirement gathering and analysis", "Version Control (Git)", "Software Development", "System Design"] },
    { category: "Productivity", items: ["Microsoft Excel", "Microsoft Word", "Google Drive", "Microsoft Powerpoint", "Figma", "Canva"] },
    { category: "Languages", items: ["Tigrigna (Mother Tongue)", "Amharic (Fluent C2)", "English (Upper-Intermediate B2)"] },
    { category: "Soft Skills", items: ["Team-work oriented", "Problem Solving", "Communication"] }
];

export const certifications = [
    {
        name: "Fundamentals of digital marketing",
        issuer: "Google",
        date: "09/2025"
    },
    {
        name: "Cybersecurity Fundamentals",
        issuer: "ADBI",
        date: "08/2025"
    },
    {
        name: "Elements of AI (2 ECTS)",
        issuer: "University of Helsinki",
        date: "08/2025"
    },
    {
        name: "Programming Fundamentals Nanodegree",
        issuer: "Udacity",
        date: "03/2025"
    },
    {
        name: "Entrepreneurship Development Workshop",
        issuer: "Mekelle University",
        date: "03/2024"
    },
    {
        name: "Humanitarian Principles: Confidentiality, Consent & Inclusion",
        issuer: "Danish Refugee Council",
        date: "03/2023"
    },
    {
        name: "Feedback and Complaints Response Mechanisms (FCRM) Training",
        issuer: "Danish Refugee Council",
        date: "08/2022"
    },
    {
        name: "Camp Coordination and Camp Management (CCCM) Training",
        issuer: "Danish Refugee Council",
        date: "03/2022"
    }
];

export const volunteering = [
    {
        role: "Vice Chairman & Co-Founder",
        organization: "Mahber Mthggaz Tegaru Tenedbah",
        date: "30/06/2023 – 30/11/2024",
        location: "Tunedbah Refugee Camp, Al-Gedarif, Sudan",
        description: "Co-founded and led a charity group supporting vulnerable populations with cash and material assistance, organizing year-round relief initiatives for all communities.",
        links: [
            { label: "Facebook", url: "https://www.facebook.com/share/1DKh4JTykw/" },
            { label: "Document", url: "https://drive.google.com/drive/folders/1_2W5rLjdyRgWktNJlt8ygZyFdrOfJSWr?usp=sharing" }
        ]
    },
    {
        role: "Youth Advisory Group (YAG) Member — e-SHE Program",
        organization: "Mekelle University",
        date: "30/04/2025 – CURRENT",
        description: "Selected as Mekelle University representative, contributing to youth empowerment and digital education initiatives.",
        links: [
            { label: "View Certificate/Doc", url: "https://drive.google.com/file/d/18_08KFoqmRytD3boL_ZNsXwiqHC2evTS/view?usp=sharing" }
        ]
    }
];
