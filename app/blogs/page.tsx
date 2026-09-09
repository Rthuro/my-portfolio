import type { Metadata } from "next"
import { PageLayout } from "../components/PageLayout"
import { PageHeaders } from "../components/PageHeaders"
import { blogs } from "../data/blogs"
import Link from "next/link"
import { Globe } from "lucide-react"
import { BlogList } from "../components/BlogList"

export const metadata: Metadata = {
    title: "Blog",
    description: "Thoughts, logs, web hunt and learnings from Ruthiemy Oribello — a full-stack developer and web designer.",
    alternates: { canonical: "/blogs" },
}


export default function Blogs() {
    return <PageLayout 
    headers={<PageHeaders title="blogs" subtitle="Thoughts, logs, web hunt and learnings." />}
    children={<BlogList location="blogs" />}
    />

}