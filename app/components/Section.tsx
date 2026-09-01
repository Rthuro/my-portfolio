'use client'
import { motion } from "framer-motion";

interface SectionProps {
    id: string;
    header: React.ReactNode;
    children?: React.ReactNode;
}

export const Section = ({id, header, children}: SectionProps) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center gap-6 w-[95%] md:w-[60%] scroll-mt-32"
            id={id}>
            {header}
            {children}
        </motion.section>
    );
}