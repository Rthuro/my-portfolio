
interface TechStack {
    label: string;
    icon: string;
}
interface Stack {
    title: string;
    techStacks: TechStack[];
}

export const Stacks: Stack[] = [
    {
        title: 'Frontend',
        techStacks: [
            {
                label: "JavaScript",
                icon: "https://api.iconify.design/logos:javascript.svg"
            }, {
                label: "TypeScript",
                icon: "https://api.iconify.design/logos:typescript-icon.svg"
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
                label: "Tailwind CSS",
                icon: "https://api.iconify.design/logos:tailwindcss-icon.svg"
            }, {
                label: "Axios",
                icon: "https://api.iconify.design/thesvg-color:axios.svg"
            },
            {
                label: "Vite",
                icon: "https://api.iconify.design/thesvg-color:vite.svg"
            }
        ]
    },
    {
        title: 'backend',
        techStacks: [
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
                label: "Django REST",
                icon: "https://api.iconify.design/thesvg-color:django.svg"
            }, {
                label: "Node.js",
                icon: "https://api.iconify.design/logos:nodejs-icon.svg"
            },
            {
                label: "Zustand",
                icon: "https://api.iconify.design/devicon:zustand.svg"
            },
        ]
    },
    {
        title: "Database",
        techStacks: [
            {
                label: "Supabase",
                icon: "https://api.iconify.design/thesvg-color:supabase.svg"
            },
            {
                label: "Neon",
                icon: "https://api.iconify.design/thesvg-color:neon.svg"
            }
        ]
    },
    {
        title: "Third-party services",
        techStacks: [
            {
                label: "Firebase Auth",
                icon: "https://api.iconify.design/devicon:firebase.svg"
            }, {
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
        ]
    }, {
        title: "devops & cloud",
        techStacks: [
            {
                label: "Docker",
                icon: "https://api.iconify.design/logos:docker-icon.svg"
            },
            {
                label: "Github Actions",
                icon: "https://api.iconify.design/thesvg-color:github-dark.svg"
            }
        ]
    }, {
        title: "Deployment",
        techStacks: [
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
        ]
    },
    {
        title: "development tools",
        techStacks: [
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
            }
        ]
    }, {
        title: "design tools",
        techStacks: [
            {
                label: "Figma",
                icon: "https://api.iconify.design/logos:figma.svg"
            },
            {
                label: "Canva",
                icon: "https://api.iconify.design/thesvg-color:canva.svg"
            },
        ]
    }
]


