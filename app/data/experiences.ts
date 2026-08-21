
interface Experience {
    title: string;
    company: string;
    duration: string;
    location? : string,
    year:string;
    description: string;
    responsibilities: string[];
    skills: string[];
    techStack: string;
}


export const experiences: Experience[] = [
    {
        title: "Freelance Web Developer & Designer",
        company: "Freelance",
        duration: "2025 - Present",
        year: "2026",
        description: "Freelance Web Developer and Designer specializing in modern, responsive web applications and custom graphics for clients.",
        responsibilities: [
            "Built a custom website portfolio for client suited her favorite aesthetic style and make it more responsive and interactive than simple canva and google site. ",
            "Design the UI/UX for 'Sign Speak: a Real-Time ASL Translator with Subtitles' a proposed interface for client's Strategic Initiative Proposal. It is a structured output where students design a professional venture, career strategy, or process improvement project.",
            "Designed the end-to-end UI/UX for ’Kindiverse’, a culturally responsive educational app for children ages 3–8, client achieved a top 1.25 final presentation grade, by developing 216 developmentally appropriate, high-fidelity screens featuring interactive storytelling and play-based learning modules. It is a structured output where students design a professional venture, career strategy, or process improvement project.",
            "Built CRUD systems using Java Swing for Object Oriented Programming Final Requirement."
        ],
        skills: [
            "Web Development",
            "UI/UX",
        ],
        techStack: "React, Tailwind CSS, Figma"
    },
    {
        title: "Full Stack Developer",
        company: "Thesis",
        duration: "Feb 2025 – May 2026",
        location: "Zamboanga City",
        year: "2026",
        description: "Thesis Project - HearEase an AI-driven system employing Deep Neural Networks (DNN) to maximize barangay hearing schedules and forecast case resolution times.",
        responsibilities: [
            "Architected and developed the full-stack web application (React/Vite, Django REST Framework, PostgreSQL/Supabase) as the primary contributor (˜91% of commits), delivering digital case management, role-based access control with Firebase Auth, automated document generation, and an analytics dashboard.",
            "Built RESTful APIs for case workflows, hearing scheduling, and multi-channel notifications (email via Resend, SMS via Android gateway), and integrated a Deep Neural Network model into the scheduling pipeline to automate hearing date prediction and case resolution forecasting.",
            "Implemented real-time notification/verification systems, Zustand state management, and lazy-loaded routing, deploying to Vercel (frontend) and Render (backend) for a pilot deployment in Barangay Tetuan, Zamboanga City."
        ],
        skills: [
            "Full-Stack Development",
            "System Design",
            "Database Design"
        ],
        techStack: "React, Django REST Framework, PostgreSQL, Supabase, Vercel, Render, Firebase Auth, Resend, SMS Gateway"
    },
    {
        title: "Full Stack Developer Intern",
        company: "Western Mindanao State University",
        duration: "May 2025 - August 2025",
        location: "Zamboanga City",
        year: "2025",
        description: "Practicum Immersion / Internship",

        responsibilities: [
            "Built a WMSU Sports Portal, a comprehensive system for managing university sports events, teams, and results.",
            "Architecting a 20+ table PostgreSQL schema, 22 RESTful API route groups, and a React 19 frontend with 12 state stores.",
            "Containerized the backend with a multi-stage Docker build and deployed the frontend on Vercel, integrating Firebase OAuth, Cloudinary CDN, and Neon serverless PostgreSQL for a fully cloud-native architecture."
        ],
        skills: [
            "Full-Stack Development",
            "System Design",
            "Database Design"
        ],
        techStack: "React, Node.js, PostgreSQL, Firebase Auth, Cloudinary, Neon"
    },  
]