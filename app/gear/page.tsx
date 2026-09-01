import { PageLayout } from "../components/PageLayout"
import { PageHeaders } from "../components/PageHeaders"
import img from "../assets/gear/gear.jpg"
import { gears } from "../data/gears"

export default function Gear() {
    return (
        <PageLayout
        headers={<PageHeaders title="Gear" subtitle="Tools that help my journey as a programmer. Not expensive but reliable." />} 
        children={<div 
            className="flex flex-col gap-12 items-center justify-center p-6 md:p-12 border border-zinc-800 bg-zinc-800
    bg-[radial-gradient(rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:10px_10px] rounded-2xl">
                <img src={img.src} alt="" className=" w-54 md:w-64 rounded-xl border border-zinc-400" />

            <div className="flex items-center flex-wrap gap-3 md:gap-12 justify-around text-[10px] w-full">
                {gears.map( (g, idx)=> (
                    <div
                    key={idx}
                    className="flex flex-col justify-end gap-2 font-mono text-center ">
                        <p className="max-w-54">{g.name}</p>
                        <p className="text-zinc-300 underline decoration-zinc-500 underline-offset-4 decoration-dotted max-w-54">{g.experience}</p>
                        <img src={g.img} alt="" className="mx-auto w-42 " />
                    </div>
                ))}
            </div>

        </div>}

         />
    )
}