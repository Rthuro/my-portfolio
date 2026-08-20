'use client'
import useEmblaCarousel from 'embla-carousel-react'
import { Card } from './Card'
import { featuredProjects } from '../data/projects'

export const ProjectCarousel = () => {
    const [emblaRef] = useEmblaCarousel({
        align: 'start',
        containScroll: 'trimSnaps',
        dragFree: true,
    })

    return (
        <div className="overflow-hidden w-[calc(100vw-3rem)] text-sm pt-0" ref={emblaRef}>
            <div className="flex gap-2 md:px-6">
                {featuredProjects.map((proj, idx) => (
                    <div className="flex-[0_0_auto]" key={idx}>
                        <Card index={idx} proj={proj} />
                    </div>
                ))}
            </div>
        </div>
    )
}
