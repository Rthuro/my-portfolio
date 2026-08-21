import { PageLayout } from "../components/PageLayout"
import { PageHeaders } from "../components/PageHeaders"
import { blogs } from "../data/blogs"
import Link from "next/link"
import { Globe } from "lucide-react"
import { BlogList } from "../components/BlogList"

export default function Blogs() {
    return <PageLayout 
    headers={<PageHeaders title="blogs" subtitle="Thoughts, logs, web hunt and learnings." />}
    children={<BlogList location="blogs" />}
    />

}