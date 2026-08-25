'use client'
import { PageLayout } from "../components/PageLayout"
import { PageHeaders } from "../components/PageHeaders"
import { ContactForm } from "../components/ContactForm";
import {use} from 'react'

export default function Contact({
    searchParams
} : {
    searchParams: Promise<{emailType: "general" | "freelance"}>
}) {
    const {emailType = "general" } = use(searchParams)
    return (
        <PageLayout
            headers={<PageHeaders title="Feel free to send me an email" subtitle="I typically respond within 24–48 hours." />}
            children={
                <ContactForm emailType={emailType}/>
            }
        />
    )
}