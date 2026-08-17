
'use client'
import { IconChevronRightOutline18, IconDeskLampFill32, IconLaptop } from '../assets/icons';
import { featuredProjects } from '../data/projects';
import { motion } from 'framer-motion';
interface CardProps{
    proj: typeof featuredProjects[0];
    index?: number;
}

export const Card = ({proj, index = 0} : CardProps) => {

    return (
        <motion.div
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
         className='flex flex-col md:w-[800px] w-[90vw] text-zinc-100 group'>
            <div className="overflow-hidden rounded-lg relative">
                <img
                    src={proj.image}
                    alt={proj.title}
                    className="h-72 md:h-96 object-cover object-top w-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="hidden group-hover:flex flex-col gap-2 transition-all delay-300 absolute inset-0 items-center justify-center bg-black/80 rounded-md overflow-hidden">
                    <IconLaptop color="#ffffff" size="28px" />
                    <p className='text-lg font-medium font-mono'>View Project</p>
                </div>
            </div>
            <div className="flex items-center justify-between px-2 py-3  w-full">
<p className=' font-semibold flex items-center font-heading text-sm gap-1  '>
                    {proj.title} 
                </p>
                {proj.type && (
                    <p className='text-xs text-zinc-400'>
                        {proj.type}
                    </p>
                )}

            </div>
             
        </motion.div>
    );
};