import { PageLayout } from "@/app/components/PageLayout";
import { ProjectPageHeader } from "@/app/components/ProjectPageHeader";
import { blogs } from "@/app/data/blogs";
import Link from "next/link";
import { Globe } from "lucide-react";

interface BlogProps {
    params: Promise<{ blog: String }>
}

export default async function Blog({ params }: BlogProps) {
    const { blog: id } = await params;
    const blog = blogs.find((b) => b.id === id);
    return (
        <PageLayout
            headers={
                <ProjectPageHeader
                    image={blog?.image ?? ''}
                    title={blog?.title ?? ''}
                    description={blog?.description ?? ''}
                />}
            children={<div className="flex flex-col">
                <div className="pt-4 border-t border-zinc-800">

                {blog?.link && (
                    <Link className="flex-1 flex items-center justify-center gap-2 bg-zinc-50 rounded-lg px-2 py-3 text-zinc-900 text-sm font-medium
                      w-full" 
                     href={blog.link} target="_blank">
                        <Globe size={14} />
                        View Blog
                    </Link>
                )}
                </div>

                {blog?.text}
            </div>}
        />
    )
}