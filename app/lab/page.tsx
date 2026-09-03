"use client"
import { motion } from "framer-motion";

export default function Lab() {
    return <div className="relative w-full h-screen overflow-hidden"> 
        <motion.div className="bg-white absolute top-0 left-0 bottom-0 w-1/2 h-screen"
        initial={{ x:0}}
        animate={{x:"-100%"}}
        transition={{duration: 0.6,delay:0.2, ease:"easeInOut"}}
        ></motion.div>
         <motion.div className="bg-amber-300 border absolute top-0 right-0 bottom-0 w-1/2 h-screen text-white"
        initial={{ x:0}}
        animate={{x:"100%"}}
        transition={{duration: 0.6,delay:0.2, ease:"easeInOut"}}
        >
        </motion.div>
    </div>
}