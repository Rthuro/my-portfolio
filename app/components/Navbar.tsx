"use client";

import img from "../assets/cute-img.jpg";
import { IconGithub } from "../assets/icons";
import Link from "next/link";
import { useActiveSection } from "../hooks/usActiveSection";
import { SquareTextIcon, Laptop, Briefcase, Award, Braces, Phone } from "lucide-react";
import { link } from "fs";

const navLinks = [
  { icon: SquareTextIcon , href: "blog" },
  { icon: Laptop , href: "projects" },
  { icon: Briefcase , href: "experience" },
  { icon: Braces , href: "tech-stack" },
  { icon: Award , href: "certificates" },
  { icon: IconGithub , href: "github" },
  { icon: Phone , href: "contact" },
];

export function Navbar() {
    const activeSection = useActiveSection(["about", "blog", "projects", "experience", "certificates", "tech-stack", "github", "contact"]);

    return(
        <div className="fixed bottom-6 w-fit flex items-center gap-2 py-2 px-3 bg-black/70 border border-zinc-800  rounded-xl z-50">
            <Link 
            href="#about" 
           >
                <img src={img.src} alt=""
                 className={`${"about" === activeSection ? "border-zinc-600" : "border-transparent"} size-7 rounded-lg border-2`}/>
            </Link>
           {navLinks.map((navLink, idx) => {
            const Icon = navLink.icon
            return <Link 
            href={`#${navLink.href}`} 
            key={idx}
            className={`${navLink.href === activeSection ? "bg-zinc-700/70" : "bg-none"} rounded-md p-1.5 transition-colors delay-75 ease-in`}>
                <Icon size="18"  className="" />
            </Link>
           })}
      </div>
    )
}