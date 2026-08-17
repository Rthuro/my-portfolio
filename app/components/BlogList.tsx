'use client'
import {motion} from "framer-motion"
import { Blogs } from "../data/blogs";
import { BlogCard } from "./BlogCard";

interface BlogsProps {
    location: 'home' | 'blogs';
}

export const BlogList = ({location}: BlogsProps) => {
    const blogArr  = location === 'home' ? Blogs.filter(blog => blog.isFeatured) : Blogs;  
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
        <section className="border-t border-zinc-900 flex flex-col w-full ">
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
                        slug={blog.slug}
                    />
                </motion.div>
            ))}
            </motion.div>
            ): ''}
            
        </section>
    );
}