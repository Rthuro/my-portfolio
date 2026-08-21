'use client'
import { useSearchParams } from "next/navigation"
import { PageLayout } from "../components/PageLayout"
import { PageHeaders } from "../components/PageHeaders"
import { ContactForm } from "../components/ContactForm";

export default function Contact() {
    const searchParams = useSearchParams();

    const emailType = searchParams.get("emailType") || "general";

    
    return (
        <PageLayout
            headers={<PageHeaders title="Feel free to send me an email" subtitle="I typically respond within 24–48 hours." />}
            children={ <ContactForm emailType={emailType}/>}
        />
    )
}