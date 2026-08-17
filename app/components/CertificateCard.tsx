'use client'
import Link from "next/link";
import { motion } from "framer-motion";
import { Certificates } from "../data/certificates";

interface CertificateCardProps {
    cert: Certificates;
    idx: number;
}

export const CertificateCard = ({cert, idx}: CertificateCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15, ease: 'easeOut' }}
        >
        <Link href={cert.link} target="_blank" className="flex flex-col md:flex-row border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900 h-full">
            <img
            src={cert.icon}
            alt={cert.org}
            className=" w-full md:w-24 h-24 md:h-full object-contain border-r border-zinc-800 p-5 md:p-4 bg-zinc-800
    bg-[radial-gradient(rgba(148,163,184,0.18)_1px,transparent_1px)]
    bg-[size:12px_12px]"
            />
            <div className="flex-1 flex flex-col justify-between gap-3 p-4 bg-zinc-900">
                <div className="flex flex-col">
                    <h3 className="font-semibold text-sm mb-1 ">{cert.name}</h3>
                    <p className="text-zinc-400 text-xs mb-2">{cert.org}</p>
                </div>
            
            <span className="text-zinc-500 text-xs font-mono">{cert.date}</span>
            </div>
        </Link>
        </motion.div>
    )
}