'use client'
import { motion } from "framer-motion";

interface CarouselRowProps {
    items: Array<{ label: string; icon: string }>;
    direction?: "left" | "right";
    duration?: number;
}

export const CarouselRow = ({ items, direction = "left", duration = 35 }: CarouselRowProps) => {
    const duplicatedItems = [...items, ...items];
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
        >
            <motion.div
                className="flex w-max gap-3"
                initial={{
                    x: direction === "left" ? 0 : "-50%",
                }}
                animate={{
                    x: direction === "left" ? "-50%" : 0,
                }}
                transition={{
                    delay: 0.7,
                    duration: duration,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
            >
                {duplicatedItems.map((item, index) => (
                    <div
                        key={`${item}-${index}`}
                        className="
                        shrink-0 rounded-full
                        border border-white/10
                        bg-white/10
                        px-4 py-2
                        text-sm text-zinc-100
                        flex items-center gap-2
            "
                    >
                        <img src={item.icon} alt={item.label} className="size-5" />
                        <p>{item.label}</p>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
}