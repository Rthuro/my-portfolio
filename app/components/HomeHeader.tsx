'use client'
import {motion} from "framer-motion"
import { IconEnvelope, IconFileContentFill24, IconGithub, IconLaptop, IconLinkedin } from "../assets/icons"
import Link from "next/link"
import { PortfolioAnalytics } from "../components/PortfolioAnalytics";
import { ChevronsLeftRight } from "lucide-react"

export function HomeHeader () {
    return <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
           className="w-[90%] md:w-[40%] mx-auto flex flex-col  gap-6">
            <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col gap-2">
              <p className=" font-bold text-xl md:text-3xl flex items-center gap-2">
                <IconLaptop size="24px" color="#ffff" />
                Ruthiemy Oribello
              </p>
              <p className=" font-medium font-mono text-zinc-200 text-sm md:text-md">
                Full Stack Developer | Web Designer | UI/UX
              </p>
              <p className="text-xs md:text-sm text-zinc-400 text-justify">I'm a Full Stack Developer with 2+ years of experience in web development. Love designing minimal and modern user interfaces. Currently interested in AI integration, Automation and AWS. Soon i'll dig dive into mobile development and design engineering.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-2 border-y border-zinc-900 py-3 ">
              <a href="/resume.pdf" target="_blank" className="cursor-pointer py-2 bg-zinc-50 text-zinc-800 font-medium flex items-center justify-center gap-1 rounded-lg  text-sm outline outline-zinc-600 border ">            
              <IconFileContentFill24 size="16px" color="#ffb900" />
                My resume
              </a>
              <Link href="/contact?emailType=general" className="py-3 bg-gradient-to-t from-zinc-800 to-zinc-400 text-white font-medium flex items-center justify-center gap-1 rounded-lg hover:brightness-110 transition-all duration-300 text-sm outline outline-zinc-600">
                <IconEnvelope size="16px" />
                Email me
              </Link>
              <div className="border-t border-zinc-900 w-full col-span-2 h-0.5">

              </div>
              <Link target="_blank" className="text-sm text-zinc-400 py-3 text-center border border-zinc-800 rounded-lg font-mono border-dashed flex items-center justify-center gap-1" href={"https://github.com/Rthuro"}>
                <IconGithub size="16px" />
                Github
              </Link>
              <Link target="_blank" className="text-sm text-zinc-400 py-3 text-center border border-zinc-800 rounded-lg font-mono border-dashed flex items-center justify-center gap-1" href={"https://www.linkedin.com/in/ruth-oribello/"}>
                <IconLinkedin size="16px" />
                LinkedIn
              </Link>
              <Link target="_blank" className="text-sm text-zinc-400 py-3 text-center border border-zinc-800 rounded-lg font-mono border-dashed flex items-center justify-center gap-1" href={"https://www.instagram.com/ruth.codes/"}>
                <img src="https://api.iconify.design/thesvg-color:instagram.svg" className="size-4" />
                Instagram
              </Link>
              <Link target="_blank" className="text-sm text-zinc-400 py-3 text-center border border-zinc-800 rounded-lg font-mono border-dashed flex items-center justify-center gap-1" href={"https://www.tiktok.com/@ruth.codes/"}>
                <img src="https://api.iconify.design/thesvg-color:tiktok-dark.svg" className="size-4" />
                TikTok
              </Link>
            </div>
            <div className="grid grid-cols-2 w-full gap-4">          
            <PortfolioAnalytics type='visitors'/>
            <PortfolioAnalytics type='current-visitors'/>
            </div>
        </motion.section>
} 