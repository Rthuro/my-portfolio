import Link from "next/link";
import { IconLaptop, IconFileContentFill24, IconEnvelope, IconGithub, IconLinkedin } from "./assets/icons";
import { ProjectCarousel } from "./components/ProjectCarousel";
import GithubContribution from "./components/GithubContribution";
import { SectionHeader } from "./components/SectionHeader";
import { Section } from "./components/Section";
import { BlogList } from "./components/BlogList";
import { TechStack } from "./components/TechStack";
import { CertificateCard } from "./components/CertificateCard";
import { certificates } from "./data/certificates";
import { ExperienceList } from "./components/ExperienceList";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center text-zinc-200 gap-24 ">
      <section className="w-[90%] md:w-[40%] mx-auto flex flex-col  mt-24  gap-6">
        <div className="flex flex-col gap-2">
          <p className=" font-semibold text-lg flex items-center gap-1">
            <IconLaptop size="16px" color="#ffff" />
            Ruthiemy Oribello
          </p>
          <p className="text-sm text-zinc-400 text-justify">Full-stack Developer. Not much of a smartass but 100% reliable. Recently into AI integration and automation. Planning to get into mobile development and design engineering soon.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 border-y border-zinc-900 py-3 ">
          <button className="py-2 bg-zinc-50 text-zinc-800 font-medium flex items-center justify-center gap-1 rounded-lg  text-sm outline outline-zinc-600 border ">
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
            LinkedIn
          </Link>
        </div>
      </section>

      <Section
        header={<SectionHeader title="01 - Blogs" link="/blogs" />}
        children={<BlogList location="home" />}
      />

      <section className="flex flex-col items-center gap-4 overflow-hidden w-full ">
        <Section
          header={<SectionHeader title="02 - Projects" link="/projects" />
          }
        />
        <ProjectCarousel />
      </section>

      <Section
        header={<SectionHeader title="03 - Experience" link="/experience" />}
        children={<ExperienceList location="home" />}
      />

      <section className="flex flex-col items-center gap-4 w-full">
        <Section
          header={<SectionHeader title="04 - Tech Stack" link="/stack" />}
        />
        <TechStack />
      </section>


      <Section
        header={<SectionHeader title="05 - Certifications" link="/certificates" hasSectionLink={false} />}
        children={
          <div className="grid grid-cols-2 gap-4 w-full">
            {certificates.map((cert, idx) => (
              <CertificateCard key={idx} idx={idx} cert={cert} />
            ))}
          </div>
        }
      />

      <Section
        header={<SectionHeader title="06 - Github" link="https://github.com/Rthuro" viewLabel="@Rthuro" />}
        children={<GithubContribution />}
      />

      <Section
        header={<SectionHeader title="07 - Contact" link="" hasSectionLink={false} />}
        children={
          <div className="flex flex-col items-center justify-center py-12 rounded-xl gap-3 border border-zinc-800 w-full  bg-[repeating-linear-gradient(135deg,transparent_0,transparent_7px,rgba(255,255,255,0.04)_4px,transparent_9px)] shadow-md shadow-accent-dark/20">
            <p className="text-xl font-semibold">Open for Freelance Work</p>
            <p className="text-zinc-400 text-xs text-center">Full Stack Development | Web Design | Web Development</p>
            <Link href="/freelance" className="flex items-center justify-center gap-2 font-mono rounded-lg  text-sm font-semibold bg-zinc-200 py-2 px-4 text-zinc-900 outline outline-zinc-700 border mt-6 cursor-pointer">
              <IconEnvelope size="16px" color="#ffff" />
              Send me an email
            </Link>
          </div>
        }
      />
    </main>

  );
}
