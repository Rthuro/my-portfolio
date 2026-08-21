
interface PageHeadersProps{
    image:string;
    title: string;
    role: string;
    description: string;
    tools: string[];
} 

export const ProjectPageHeader = ({image, title, role, description, tools}: PageHeadersProps) => {

    return <div className="flex flex-col gap-2">
        {image && (
            <img src={image} alt={title} className="w-full h-[280px] object-cover object-top rounded-xl mb-6" />
        )}
        <p className="text-xs text-zinc-400 font-mono">{role}</p>
        <p className=" font-semibold text-5xl flex items-center">
            {title}
        </p>
        <p className="text-zinc-400 text-justify">
            {description}
        </p>
        {tools.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-4">
                {tools.map((skill, sIdx) => (
                    <span key={sIdx} className="text-[10px] text-zinc-400 border border-zinc-700 px-3 py-1.5 rounded font-mono">
                        {skill}
                    </span>
                ))}
            </div>
        )}
    </div>
}