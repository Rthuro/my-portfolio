'use client'
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { PageLayout } from "../components/PageLayout"
import { PageHeaders } from "../components/PageHeaders"
import { MailCheck, MailQuestionMark } from "lucide-react"

const inputStyle = "outline-none focus:ring-1 focus:ring-accent-amber-500/80 focus:border-accent-amber-500/80  border border-zinc-800 p-2 rounded-lg bg-zinc-800 text-sm placeholder:text-zinc-500"

export default function Contact() {
    const searchParams = useSearchParams();

    const emailType = searchParams.get("emailType");

    const [type, setType] = useState<"freelance" | "general">(
    emailType === "freelance" ? "freelance" : "general"
    );
    
    const [loader, setLoader] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState({
        error: false,
        message: ''
    })
    const [failed, setFailed] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [service, setService] = useState('full-stack')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const handleSubmit = async () => {

        if(!name || !email || !message) {
            setError({
                error: true,
                message: 'Please fill in all the required fields.'
            })
            setTimeout(() => setError({
                error: false,
                message: ''
            }), 4000)
            return;
        } else if (!regexEmail.test(email)) {
            setError({
                error: true,
                message: 'Please enter a valid email address.'
            })
            setTimeout(() => setError({
                error: false,
                message: ''
            }), 4000)
            return;
        }

        const formatSubject = type === 'general' ? subject : `${subject} | ${service}`;

        try {
            setLoader(true)
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    subject: formatSubject,
                    message,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                console.error(data.error);
                return;
            }

            setLoader(false)
            setSuccess(true)
            setTimeout(() => setSuccess(false), 4000)
            setName('')
            setEmail('')
            setService('full-stack')
            setSubject('')
            setMessage('')
        } catch (error) {
            console.log(error)
            setFailed(true)
            setTimeout(() => setFailed(false), 4000)
            setLoader(false)
        }
    }
    return (
        <PageLayout
            headers={<PageHeaders title="Feel free to send me an email" subtitle="I typically respond within 24–48 hours." />}
            children={
                <div className="flex flex-col gap-3">
                    {success && (
                        <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm animate-fade-in">
                            <MailCheck size={16} />
                            <p>Message sent successfully! I&apos;ll get back to you soon.</p>
                        </div>
                    )}
                    {error.error && (
                        <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm animate-fade-in">
                            <MailQuestionMark size={16} />
                            <p>{error.message}</p>
                        </div>
                    )}
                    {failed && (
                        <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm animate-fade-in">
                            <MailQuestionMark size={16} />
                            <p>Message failed to send. Please try again later.</p>
                        </div>
                    )}
                    <div className="flex items-center gap-2">
                        <button className={`${type === 'general' ? 'text-white' : 'text-zinc-500'} cursor-pointer`}
                            onClick={() => setType('general')}
                        >
                            General
                        </button>
                        <span className="text-zinc-500">|</span>
                        <button className={`${type === 'freelance' ? 'text-white' : 'text-zinc-500'} cursor-pointer`}
                            onClick={() => setType('freelance')}
                        >
                            Freelance
                        </button>
                    </div>
                    <div className="border border-zinc-800 p-4 rounded-xl flex flex-col gap-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <input type="text" className={inputStyle} placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                            <input type="text" className={inputStyle} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        {
                            type === "freelance" && (
                                <select className={inputStyle} value={service} onChange={(e) => setService(e.target.value)}>
                                    <option value="full-stack">Full Stack Development — starts at ₱12,000 (~$210)</option>
                                    <option value="web-design">Web Design / UI/UX — starts at ₱5,000 (~$90)</option>
                                    <option value="web-development">Web Development — starts at ₱8,000 (~$140)</option>
                                    <option value="other">Other</option>
                                </select>
                            )
                        }
                        <input type="text" className={inputStyle} placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                        <textarea className={inputStyle} rows={4} placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        <button className="mt-2 py-3 bg-gradient-to-t from-zinc-800 to-zinc-400 text-white font-medium flex items-center justify-center gap-1 rounded-lg hover:brightness-110 transition-all duration-300 text-sm outline outline-zinc-400 border border-zinc-600" 
                        onClick={handleSubmit}
                        disabled={loader}
                        >
                            {loader ? 'Sending...' : 'Send'}
                        </button>
                    </div>
                </div>

            }
        />
    )
}