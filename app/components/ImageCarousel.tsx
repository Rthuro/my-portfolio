'use client'
import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

interface ImageCarouselProps {
    images: string[];
}

export const ImageCarousel = ({ images }: ImageCarouselProps) => {
    const [emblaRef] = useEmblaCarousel({
        align: 'start',
        containScroll: 'trimSnaps',
        dragFree: true,
    }, [WheelGesturesPlugin()])

    return (
        <div className="overflow-hidden w-full text-sm pt-0" ref={emblaRef}>
            <div className="flex gap-0.5 ">
                {images.map((img, idx) => (
                    <div className="flex-[0_0_auto] h-auto" key={idx}>
                        <img src={img} alt={img} className=" w-[40vw] h-auto object-cover" />
                    </div> 
                ))}
            </div>
        </div>
    )
}