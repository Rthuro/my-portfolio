import { experiences } from "../data/experiences"

interface ExperienceListProps {
    location: 'home' | 'experiences'
}

export const ExperienceList = ({location} : ExperienceListProps) => {
    return (
        <section className="border-t border-zinc-900 flex flex-col w-full ">

        {location == 'home' ? (
            <div className="flex flex-col gap-4 w-full">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="border-b border-zinc-900 flex items-center justify-between py-3 px-1 gap-2 font-mono text-xs">
                        <p className="font-mono text-zinc-500">
                            {exp.year}
                        </p>
                        <div className="flex flex-1 items-center justify-between">
                            <p className="font-medium">
                                {exp.title} 
                            </p>
                            <p className="text-zinc-400 text-end">
                                {exp.company}
                            </p>
                        </div>
                        
                    </div>
                ))}
            </div>
        ) : (
            <></>
        )}
        </section>
    )
}