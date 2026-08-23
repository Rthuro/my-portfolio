'use client'
import { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { X, Maximize2 } from 'lucide-react'

interface ImageCarouselProps {
    images: string[];
}

export const ImageCarousel = ({ images }: ImageCarouselProps) => {
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [emblaRef] = useEmblaCarousel({
        align: 'start',
        containScroll: 'trimSnaps',
        dragFree: true,
    }, [WheelGesturesPlugin()])

    return (
        <>
            <div className="overflow-hidden w-full text-sm pt-0" ref={emblaRef}>
                <div className="flex gap-0.5 ">
                    {images.map((img, idx) => (
                        <div className="relative flex-[0_0_auto] h-auto" key={idx}>
                            <button type='button' 
                            onClick={() => setPreviewImage(img)}
                            className="absolute top-2 right-2 p-2 bg-zinc-800/80 text-white rounded">
                                <Maximize2 size={14} />
                            </button>
                            <img src={img} alt={img} className="w-[350px] md:h-[400px] h-auto object-cover" />
                        </div> 
                    ))}
                </div>
            </div>
            
            <ImagePreview 
                onOpenPreview={!!previewImage} 
                img={previewImage || ''} 
                onClose={() => setPreviewImage(null)} 
            />
        </>
    )
}

interface ImagePreviewProps {
    onOpenPreview: boolean;
    img: string;
    onClose: () => void;
}

function ImagePreview({onOpenPreview, img, onClose} : ImagePreviewProps) {
    if (!onOpenPreview) return null;
    
    return (
        <div className="fixed inset-0 z-50 p-4 bg-black/90 flex flex-col items-center justify-center">
            <button type="button" onClick={onClose} className='absolute top-4 right-4 p-2 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 transition-colors'>
                <X size={20} />
            </button>
            <img src={img} className='max-w-full max-h-full object-contain' />
        </div>
    )
}
