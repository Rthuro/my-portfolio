import { allProjects } from "@/app/data/projects";
import { PageLayout } from "@/app/components/PageLayout";
import { ProjectPageHeader } from "@/app/components/ProjectPageHeader";
import Link from "next/link";
import { Globe } from "lucide-react";
import { IconGithub } from "@/app/assets/icons";
import { ImageCarousel } from "@/app/components/ImageCarousel";

interface ProjectPageProps {
    params: Promise<{ project: string }>
}

export default async function ProjectPage({ params, }: ProjectPageProps) {
    const { project: id } = await params;
    const project = allProjects.find(p => p.id == id);
    return (
        <PageLayout
            headers={
                <>
                    <ProjectPageHeader image={project?.image ?? ''} title={project?.title ?? ''} role={project?.role ?? ''} description={project?.description ?? ''} tools={project?.techStack || project?.tools || []} />
                </>
            }
            children={
                <div className="flex flex-col gap-8">
                    {project?.links && (
                        <div className="flex items-center gap-4 border-t border-zinc-800 pt-4">
                            {project.links.github && (
                                <Link className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 border-t border-zinc-500 outline outline-zinc-800 rounded-lg px-2 py-3 text-sm font-medium" href={project.links.github} target="_blank">
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

                            {project.links.screens && (
                                <Link className="flex-1 flex items-center justify-center gap-2 bg-zinc-50 rounded-lg px-2 py-3 text-zinc-900 text-sm font-medium" href={project.links.live} target="_blank">
                                    <Globe size={14} />
                                    Figma Screens
                                </Link>
                            )}
                        </div>
                    )}

                    <div className="flex flex-col gap-2">
                        <p className="text-lg text-zinc-200 font-medium pt-4">
                            Overview
                        </p>
                        <p className="text-zinc-400 text-justify ">{project?.overview}</p>
                    </div>

                    {project?.images && (
                        <div className="flex flex-col">
                            <p className="text-lg text-zinc-200 mb-2">
                                Gallery
                            </p>
                            <ImageCarousel images={project.images} />
                        </div>
                    )}

                    <div className="flex flex-col">
                        <p className="text-lg text-zinc-200 mb-2">
                            Features
                        </p>
                        {project?.features?.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-start border-t border-zinc-800 p-2 gap-4">
                                <p className="text-[10px] font-mono mt-1">{fIdx + 1}</p>
                                <p className=" text-sm flex-1 text-zinc-400 text-justify font-medium">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            }
        />
    );
}
