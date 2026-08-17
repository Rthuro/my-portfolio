'use client'
import { CarouselRow } from "./CarouselRow";
import { motion } from "framer-motion";

const techStacks = [
    {
        label: "JavaScript",
        icon: "https://api.iconify.design/logos:javascript.svg"
    },
    {
        label: "TypeScript",
        icon: "https://api.iconify.design/logos:typescript-icon.svg"
    },
    {
        label: "Python",
        icon: "https://api.iconify.design/logos:python.svg"
    },
    {
        label: "MySQL",
        icon: "https://api.iconify.design/devicon:mysql.svg"
    },
    {
        label: "PostgreSQL",
        icon: "https://api.iconify.design/logos:postgresql.svg"
    },
    {
        label: "HTML",
        icon: "https://api.iconify.design/devicon:html5.svg"
    },
    {
        label: "CSS",
        icon: "https://api.iconify.design/devicon:css3.svg"
    },
    {
        label: "React",
        icon: "https://api.iconify.design/logos:react.svg"
    },
    {
        label: "Next.js",
        icon: "https://api.iconify.design/devicon:nextjs.svg"
    },
    {
        label: "Django",
        icon: "https://api.iconify.design/thesvg-color:django.svg"
    },
    {
        label: "Tailwind CSS",
        icon: "https://api.iconify.design/logos:tailwindcss-icon.svg"
    },
];

const techStacks2 = [
    {
        label: "Node.js",
        icon: "https://api.iconify.design/logos:nodejs-icon.svg"
    },
    {
        label: "Zustand",
        icon: "https://api.iconify.design/devicon:zustand.svg"
    },
    {
        label: "Axios",
        icon: "https://api.iconify.design/thesvg-color:axios.svg"
    },
    {
        label: "Supabase",
        icon: "https://api.iconify.design/thesvg-color:supabase.svg"
    },
    {
        label: "Neon",
        icon: "https://api.iconify.design/thesvg-color:neon.svg"
    },
    {
        label: "Firebase Auth",
        icon: "https://api.iconify.design/devicon:firebase.svg"
    },
    {
        label: "Git",
        icon: "https://api.iconify.design/logos:git-icon.svg"
    },
    {
        label: "GitHub",
        icon: "https://api.iconify.design/thesvg-color:github-dark.svg"
    },
    {
        label: "VS Code",
        icon: "https://api.iconify.design/devicon:vscode.svg"
    },
    {
        label: "Antigravity IDE",
        icon: "https://api.iconify.design/logos:google-bard-icon.svg"
    },
    {
        label: "Postman",
        icon: "https://api.iconify.design/logos:postman-icon.svg"
    },
    {
        label: "Vite",
        icon: "https://api.iconify.design/thesvg-color:vite.svg"
    }
];

const techStacks3 = [
    {
        label: "Docker",
        icon: "https://api.iconify.design/logos:docker-icon.svg"
    },
    {
        label: "Vercel",
        icon: "https://api.iconify.design/thesvg-color:vercel-dark.svg"
    },
    {
        label: "Netlify",
        icon: "https://api.iconify.design/thesvg-color:netlify.svg"
    },
    {
        label: "Render",
        icon: "https://api.iconify.design/thesvg-color:render.svg"
    },
    {
        label: "Cloudinary CDN",
        icon: "https://api.iconify.design/thesvg-color:cloudinary.svg"
    },
    {
        label: "Resend API",
        icon: "https://api.iconify.design/thesvg-color:resend-dark.svg"
    },
    {
        label: "SMS Gateway",
        icon: "https://api.iconify.design/logos:android-icon.svg"
    },
    {
        label: "Figma",
        icon: "https://api.iconify.design/logos:figma.svg"
    },
    {
        label: "Canva",
        icon: "https://api.iconify.design/thesvg-color:canva.svg"
    },
];


export const TechStack = () => {
    return <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className="relative overflow-hidden space-y-3  md:w-[90%] w-full mx-auto">
        <div
            className="
      pointer-events-none
      absolute inset-y-0 left-0 z-10 w-20
      bg-gradient-to-r from-surface to-transparent
    "
        />

        <CarouselRow items={techStacks} direction="left" duration={50} />
        <CarouselRow items={techStacks2} direction="right" duration={70} />
        <CarouselRow items={techStacks3} direction="left" duration={50} />

        <div
            className="
      pointer-events-none
      absolute inset-y-0 right-0 z-10 w-20
      bg-gradient-to-l from-surface to-transparent
    "
        />
    </motion.div>
}