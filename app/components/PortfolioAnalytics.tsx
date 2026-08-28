'use client'
import { useEffect, useState } from "react"
import { memoji } from "../data/assets"

interface Type {
    type: 'visitors' | 'current-visitors';
}

export function PortfolioAnalytics({ type }: Type) {

    const [visit, setVisits] = useState<number>(0)

    useEffect(() => {
        fetch(`/api/analytics?type=${type}`)
            .then((res) => res.json())
            .then((data) => {
                setVisits(data.data.visitors)
            })
            .catch(console.error)
    }, [])

    return (
        <>
            {type === 'visitors' && (
                <div className="flex flex-wrap items-center justify-center gap-3 bg-zinc-200 border border-zinc-800 p-4 md:p-5 rounded-3xl">
                    <div className="flex gap-0.5">
                        {(visit > 0) && memoji.slice(0, 3).map((mem, idx) => (
                            <img key={idx} src={mem.src} alt="mem" className={`size-10 md:size-12 object-center rounded-full p-1 border-2 border-white bg-zinc-100 ${idx == 0 || idx == 2 ? "mt-3" : ""} `} />

                        ))}
                    </div>

                    <p className=" text-zinc-700 text-sm">
                        <span className="text-zinc-900 font-bold mr-1">{visit ?? "..."}</span> total visits
                    </p>
                </div>
            )}

            {type === 'current-visitors' && (
                <div className="flex flex-col items-center justify-center gap-3 bg-zinc-900 border border-zinc-800 p-4 md:p-5  rounded-3xl">
                    <div className="flex items-end">
                        <div className="flex items-center">
                            {(visit > 0) && memoji.slice(0, visit > 5 ? 5 : visit).map((mem, idx) => (
                                <img key={idx} src={mem.src} alt="mem" className={`size-10 md:size-12 object-center rounded-full p-1 border-2 border-white bg-zinc-100 ${idx > 0 && "-ml-5"} z-[${idx}] `} />

                            ))}
                        </div>
                        {visit > 5 && (
                            <p className="backdrop-blur-lg py-0.5 px-2 rounded-full border-1 border-white  text-[10px] font-mono font-medium z-[10] -ml-4">
                                +{visit - 5}
                            </p>
                        )}

                    </div>
                    <p className=" text-zinc-200 text-sm">
                        <span className="text-white font-bold mr-1">{visit ?? "..."}</span> people viewing now
                    </p>
                </div>
            )}
        </>
    )
}