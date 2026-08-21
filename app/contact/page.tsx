'use client'
import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { PageLayout } from "../components/PageLayout"
import { PageHeaders } from "../components/PageHeaders"
import { ContactForm } from "../components/ContactForm";

function ContactContent() {
    const searchParams = useSearchParams();
    const emailType = searchParams.get("emailType") || "general";
    
    return <ContactForm emailType={emailType}/>
}

export default function Contact() {
    return (
        <PageLayout
            headers={<PageHeaders title="Feel free to send me an email" subtitle="I typically respond within 24–48 hours." />}
            children={
                <Suspense fallback={<div className="animate-pulse bg-zinc-800/50 rounded-xl h-[400px]"></div>}>
                    <ContactContent />
                </Suspense>
            }
        />
    )
}