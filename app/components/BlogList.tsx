'use client'
import {motion} from "framer-motion"
import { blogs } from "../data/blogs";
import { BlogCard } from "./BlogCard";
import Link from "next/link";

interface BlogsProps {
    location: 'home' | 'blogs';
}

export const BlogList = ({location}: BlogsProps) => {
    const blogArr  = location === 'home' ? blogs.filter(blog => blog.isFeatured) : blogs;  
    const limit = blogArr.slice(0, 5);

    const listMotion = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <section className="flex flex-col w-full ">
            {location == 'home' ? (
                <motion.div
                variants={listMotion}
                initial="hidden"
                animate="visible"
                className="w-full"
            >
            {limit.map((blog, index) => (
                <motion.div
                    key={index}
                    variants={listMotion}
                >
                    <BlogCard
                        title={blog.title}
                        date={blog.date}
                        description={blog.description}
                        location={location}
                        link={`/blogs/${blog.id}`}
                    />
                </motion.div>
            ))}
            </motion.div>
            ):  (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {blogArr.map( (blog, index) => (
                        <Link href={`/blogs/${blog.id}`} key={index} className=" flex flex-col gap-2 group">
                            <img src={blog.image} alt="" className="w-full h-[250px] object-top object-cover rounded-xl border group-hover:opacity-80 transition-all duration-300 border-zinc-600" />
                            <p className="text-xs text-zinc-400 font-mono mt-2">{blog.date}</p>
                            <p className="text-lg font-semibold group-hover:text-zinc-400 ">{blog.title}</p>
                            <p className="text-xs text-justify text-zinc-400 ">{blog.description}</p>
                        </Link>
                    ))}
                </div>
            )}
            
        </section>
    );
}