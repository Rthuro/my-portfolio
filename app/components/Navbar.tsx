"use client";

import img from "../assets/cute-img.jpg";
import { IconGithub } from "../assets/icons";
import Link from "next/link";
import { useActiveSection } from "../hooks/useActiveSection";
import { SquareTextIcon, Laptop, Briefcase, Award, Braces, Phone, Monitor } from "lucide-react";
import { link } from "fs";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { img: img.src, icon: '', href: "about", link: "#about" },
    { img: '', icon: SquareTextIcon, href: "blog", link: "/blogs" },
    { img: '', icon: Laptop, href: "projects", link: "/projects" },
    { img: '', icon: Briefcase, href: "experience", link: "/experience" },
    { img: '', icon: Braces, href: "tech-stack", link: "/stack" },
    { img: '', icon: Award, href: "certificates", link: "#certificates" },
    { img: '', icon: IconGithub, href: "github", link: "#github" },
    { img: '', icon: Phone, href: "contact", link: "/contact" },
    { img: '', icon: Monitor, href: "gear", link: "/gear" },
];

export function Navbar() {
    const [openMenu, setOnOpenMenu] = useState(false);
    const activeSection = useActiveSection(["about", "blog", "projects", "experience", "certificates", "tech-stack", "github", "contact"]);

    return (
        <div className="fixed top-6 w-fit flex flex-col items-center gap-2  z-50">
            <div className="relative flex items-center gap-2 py-2 px-3 bg-black/70 border border-zinc-800 rounded-xl  min-w-40 max-w-fit">
                {activeSection && navLinks.filter(nv => nv.href === activeSection).map((nv) => (
                    <div key={nv.href} className="flex items-center gap-3 justify-between w-full">
                        <div className="flex items-center gap-2">
                            {nv.img ?
                                <img src={nv.img} alt="" className="size-7 rounded-md" /> : <nv.icon size="20" className="" />}
                            <p className="text-sm font-mono uppercase tracking-wider">{nv.href}</p>
                        </div>

                        <button type="button"
                            className="cursor-pointer ml-auto p-1.5 bg-zinc-900 rounded-md"
                            onClick={() => openMenu ? setOnOpenMenu(false) : setOnOpenMenu(true)}>
                            {openMenu ? <X size="16" /> : <Menu size="16" />}
                        </button>
                    </div>
                ))}

                <AnimatePresence>
                {openMenu &&
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0, transition: { delay: 0.4, ease: "easeIn" } }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute top-14 left-0 right-0 flex flex-col items-center gap-1 bg-black/90 border border-zinc-800 p-1.5 rounded-xl "
                    >
                        {navLinks.map((navLink, idx) => {
                            const Icon = navLink.icon
                            return <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10, transition: { delay: (navLinks.length - 1 - idx) * 0.12 } }}
                                transition={{ delay: idx * 0.12 }}
                                className="w-full"
                            >
                                <Link
                                    href={navLink.link}
                                    onClick={() => setOnOpenMenu(false)}
                                    className={`flex items-center gap-3 p-2.5 rounded-lg hover:bg-zinc-800/70 ${activeSection == navLink.href ? "bg-zinc-800/60" : ''}`}>
                                    {navLink.img ? <img src={navLink.img} alt="" className="size-6 rounded-md" /> : <Icon size="18" className="" />}
                                    <p className="text-xs font-mono uppercase tracking-wider">{navLink.href}</p>
                                </Link>
                            </motion.div>
                        })}

                    </motion.div>
                }
                </AnimatePresence>
            </div>

        </div>
    )
}

{/* <Link
    href="#about"
>
    <img src={img.src} alt=""
        className={`${"about" === activeSection ? "border-zinc-600" : "border-transparent"} size-7 rounded-lg border-2`} />
</Link>
{navLinks.map((navLink, idx) => {
    const Icon = navLink.icon
    return <Link
        href={`#${navLink.href}`}
        key={idx}
        className={`${navLink.href === activeSection ? "bg-zinc-700/80" : "bg-none"} rounded-md p-1.5 transition-colors delay-75 ease-in`}>
        <Icon size="18" className="" />
    </Link>
})} */}