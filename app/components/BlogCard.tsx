import Link from "next/link";

interface BlogProps {
    title: string;
    date: string;
    description: string;
    location: string;
    slug: string;
}

export function BlogCard({title, date, description, location, slug}: BlogProps) {
    const formatDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
    });
    return (
        <>
        {location == 'home' ? (
            <Link href={`/blogs/${slug}`} className="w-full flex justify-between items-center border-b border-zinc-900 py-4 px-2 hover:bg-zinc-900">
                <div className="flex flex-col gap-2 flex-1">
                    <p className="font-semibold">
                        {title}
                    </p>
                    <p className="text-zinc-400 text-xs  font-mono line-clamp-1">
                        {description}
                    </p>
                </div>
                <p className="text-zinc-500 text-xs w-fit font-mono">
                    {formatDate}
                </p>
            </Link>
        ) : ''}
        </>
    )
}