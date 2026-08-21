import { PageLayout } from "../components/PageLayout";
import { PageHeaders } from "../components/PageHeaders";
import { experiences } from "../data/experiences";

function getInitials(company: string) {
    return company.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
}

export default function Experience() {
    return <PageLayout 
        headers={<PageHeaders title="Experience" subtitle="Timeline of my professional journey and growth." />} 
        children={
            <div className="flex flex-col">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="flex gap-4 w-full">
                        {/* Timeline column: avatar + line */}
                        <div className="flex flex-col items-center shrink-0">
                            <div className="size-10 rounded-full border border-zinc-700 bg-zinc-800 flex items-center justify-center text-xs font-semibold text-zinc-300 font-mono">
                                {getInitials(exp.company)}
                            </div>
                            {idx < experiences.length - 1 && (
                                <div className="w-px flex-1 bg-zinc-800" />
                            )}
                        </div>

                        {/* Content column */}
                        <div className="flex flex-col gap-1 pb-10 w-full">
                            {/* Company header */}
                            <p className="text-base font-semibold">{exp.company}</p>
                            <p className="text-xs text-zinc-500 font-mono">
                                {exp.duration}
                                {exp.location && <> · {exp.location}</>}
                            </p>

                            {/* Job title */}
                            <p className="text-sm font-semibold mt-4">{exp.title}</p>
                            <p className="text-xs text-zinc-500 font-mono">{exp.duration}</p>

                            {/* Responsibilities */}
                            <div className="flex flex-col gap-3 mt-3">
                                {exp.responsibilities.map((res, rIdx) => (
                                    <p key={rIdx} className="text-xs text-zinc-400 leading-relaxed">
                                        {res}
                                    </p>
                                ))}
                            </div>

                            <p className="text-xs text-zinc-200 font-mono mt-3">Tech Stack: {exp.techStack}</p>

                            {/* Skills */}
                            {exp.skills.length > 0 && (
                                <div className="flex flex-wrap items-center gap-2 mt-2">
                                    {exp.skills.map((skill, sIdx) => (
                                        <span key={sIdx} className="text-xs text-zinc-400 border border-zinc-700 px-3 py-1.5 rounded font-mono">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        }
    />
}
    