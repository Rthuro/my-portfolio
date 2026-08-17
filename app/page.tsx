import Link from "next/link";
import {IconLaptop, IconFileContentFill24, IconEnvelope, IconGithub, IconLinkedin, IconChevronRightOutline18} from "./assets/icons";
import { featuredProjects } from "./data/projects";
import { Card } from "./components/Card";
import GithubContribution from "./components/GithubContribution";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center text-zinc-200 gap-10 ">
      <section className="w-[90%] md:w-[40%] mx-auto flex flex-col  mt-12  gap-6">
       <div className="flex flex-col gap-2">
         <p className=" font-semibold text-lg flex items-center gap-1">
          <IconLaptop size="16px" color="#ffff" />
          Ruthiemy Oribello
        </p>
        <p className="text-sm text-zinc-400 text-justify">Full-stack Developer. Not much of a smartass but 100% reliable. Recently into AI integration and automation. Planning to get into mobile development and design engineering soon.
        </p>
       </div>
       <div className="grid grid-cols-2 gap-2 border-y border-zinc-900 py-3 ">
        <button className="py-2 bg-zinc-50 text-zinc-800 font-medium flex items-center justify-center gap-1 rounded-lg  text-sm font-medium">
          <IconFileContentFill24 size="16px" color="#ffb900" />
          My resume
        </button>
        <button className="py-3 bg-gradient-to-t from-zinc-800 to-zinc-400 text-white font-medium flex items-center justify-center gap-1 rounded-lg hover:brightness-110 transition-all duration-300 text-sm outline outline-zinc-600">
          <IconEnvelope size="16px" />
          Email me
        </button>
        <Link target="_blank" className="text-sm text-zinc-400 py-3 text-center border border-zinc-800 rounded-lg font-mono border-dashed flex items-center justify-center gap-1" href={"https://github.com/Rthuro"}>
          <IconGithub size="16px" />
          Github
        </Link>
        <Link target="_blank" className="text-sm text-zinc-400 py-3 text-center border border-zinc-800 rounded-lg font-mono border-dashed flex items-center justify-center gap-1" href={"https://www.linkedin.com/in/ruth-oribello/"}>
          <IconLinkedin size="16px" />
          Linkedin
        </Link>
      </div>
    </section>
    
    <section className="flex flex-col items-center gap-4 overflow-hidden text-sm">
        <div className="flex items-center justify-between w-[95%] md:w-[60%] font-mono">
          <p className="text-accent-light text-shadow-[0_0_12px_rgba(202,102,255,0.5)]">02 - Projects</p>
          <Link href={"/projects"} className="flex items-center gap-1" >
            view all 
            <IconChevronRightOutline18 size="12px" />
          </Link>
        </div>
        <div className="overflow-x-auto w-[calc(100vw-3rem)] scrollbar-none">
                <div className="flex gap-2 w-fit md:px-6">
                    {featuredProjects.map((proj, idx) => (
                        <Card key={idx} index={idx} proj={proj}  />
                    ))}
                </div>
            </div>    
      </section>

      <section className="flex flex-col items-center gap-4 text-sm w-[95%] md:w-[60%]">
        <div className="flex items-center justify-between  font-mono w-full">
          <p className="text-accent-light text-shadow-[0_0_12px_rgba(202,102,255,0.5)]">03 - Experience</p>
          <Link href={"/experience"} className="flex items-center gap-1" >
            view all 
            <IconChevronRightOutline18 size="12px" />
          </Link>
        </div>
      </section>

      <section className="flex flex-col items-center gap-4 text-sm w-[95%] md:w-[60%]">
        <div className="flex items-center justify-between  font-mono w-full">
          <p className="text-accent-light text-shadow-[0_0_12px_rgba(202,102,255,0.5)]">04 - Certifications</p>
          <Link href={"/certificates"} className="flex items-center gap-1" >
            view all 
            <IconChevronRightOutline18 size="12px" />
          </Link>
        </div>
        
      </section>

      <section className="flex flex-col items-center gap-4 text-sm w-[95%] md:w-[60%]">
        <div className="flex items-center justify-between font-mono w-full">
          <p className="text-accent-light text-shadow-[0_0_12px_rgba(202,102,255,0.5)]">05 - Github</p>
          <Link href={"https://github.com/Rthuro"} className="flex items-center gap-1" >
            @Rthuro
            <IconChevronRightOutline18 size="12px" />
          </Link>
        </div>
        <GithubContribution />

      </section>
    </main>
    
  );
}
