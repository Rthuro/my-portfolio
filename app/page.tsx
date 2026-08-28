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
import { HomeHeader } from "./components/HomeHeader";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center text-zinc-200 gap-24 ">
      <div className="fixed top-4 left-4 right-4  ">
        {/* nav bar */}
      </div>
      <HomeHeader />

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
            <Link href="/contact?emailType=freelance" className="flex items-center justify-center gap-2 font-mono rounded-lg  text-sm font-semibold bg-zinc-200 py-2 px-4 text-zinc-900 outline outline-zinc-700 border mt-6 cursor-pointer">
              <IconEnvelope size="16px" color="#ffff" />
              Send me an email
            </Link>
          </div>
        }
      />
    </main>

  );
}
