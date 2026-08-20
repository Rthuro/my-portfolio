import { PageHeaders } from "../components/PageHeaders";
import { PageLayout } from "../components/PageLayout";
import { allProjects } from "../data/projects";
import Link from "next/link";
import { IconGithub } from "../assets/icons";
import { Globe } from "lucide-react";

export default function Projects() {
    return <div className="flex flex-col gap-5 text-zinc-100">
        <PageLayout
            socialLinks={<>
                <Link target="_blank" href={"https://github.com/Rthuro"} className="p-2 rounded-lg bg-surface border border-zinc-800 hover:bg-zinc-900">
                    <IconGithub size="16px" />
                </Link>
                <Link target="_blank" href={"https://www.figma.com/design/ijPhJRSZlnjCXXQDshH2ci/Portfolio?node-id=0-1&p=f&t=XRKyPC4PmKftXXs1-0"} className="p-2 rounded-lg bg-surface border border-zinc-800 hover:bg-zinc-900">
                    <img src="https://api.iconify.design/logos:figma.svg" alt="Figma" className="size-4" />
                </Link>
            </>}
            headers={
                <PageHeaders title="Projects" subtitle="A collection of projects I've worked on." />
            }
            children={
                <div className="grid grid-cols-1 gap-6 ">
                    {allProjects.map((project, index) => (
                        <div key={index}  className="flex flex-col">
                            <img src={project.image} alt="" className="h-[280px] w-full object-cover object-top rounded-t-xl opacity-90 z-10" />
                           <div className="flex flex-col gap-2 py-6 px-4 rounded-xl border border-zinc-800 bg-zinc-900 shadow-xl -mt-8 z-10">
                                <p className="text-xs text-zinc-400 tracking-widest font-mono">{project.category.join(" · ").toLocaleUpperCase()}</p>
                                <p className="text-lg font-mono font-medium ">{project.title}</p>
                                <p className="text-xs text-justify">{project.description}</p>
                                {project.links && (
                                    <div className="flex items-center gap-4 mt-3">
                                        {project.links.github && (
                                            <Link className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 border-t border-zinc-700 outline outline-zinc-950 rounded-lg px-2 py-3 text-sm font-medium" href={project.links.github} target="_blank">
                                                <IconGithub size={"14px"} />
                                                GitHub
                                            </Link>
                                        )}
                                        {project.links.live && (
                                            <Link className="flex-1 flex items-center justify-center gap-2 bg-zinc-50 rounded-lg px-2 py-3 text-zinc-900 text-sm font-medium" href={project.links.live} target="_blank">
                                                <Globe size={14} />
                                                Live
                                            </Link>
                                        )}
                                    </div>
                                )}

                            </div> 
                        </div>
                        
                    ))}
                </div>
            }
        >
        </PageLayout>
    </div>
}