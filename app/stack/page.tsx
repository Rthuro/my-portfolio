import { PageLayout } from "../components/PageLayout";
import { PageHeaders } from "../components/PageHeaders";
import { Stacks } from "../data/stacks";

export default function Stack () {
    return (
        <PageLayout
            headers={
                <PageHeaders 
                title="Tech Stack" 
                subtitle="Here's a list of technologies I've worked with" />
            }
            children={
                <div className="flex flex-col gap-6">
                    {Stacks.map((stack, sIdx) => (
                        <div key={sIdx} className="flex flex-col">
                            <p className="font-mono text-sm uppercase text-zinc-200 mb-2">
                                {stack.title}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {stack.techStacks.map((techStack, tsIdx) => (
                                    <div key={tsIdx} className="flex items-center gap-2 border border-zinc-800 rounded px-4 py-2">
                                        <img src={techStack.icon} alt={techStack.label} className="size-4" />
                                        <p className="text-xs font-medium text-zinc-400 text-justify">{techStack.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            }
        />
    )
}