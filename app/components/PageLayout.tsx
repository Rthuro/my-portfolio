'use client'
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IconGithub } from "../assets/icons";

interface PageLayoutProps {
    children: React.ReactNode;
    headers: React.ReactNode;
    socialLinks?: React.ReactNode;
}
export function PageLayout({ children, headers, socialLinks }: PageLayoutProps) {
    const router = useRouter();
    return <div className="relative w-full pt-24 z-20 text-zinc-100">
        <div className="fixed flex items-center justify-between w-full gap-4 py-6 px-4 md:px-10 top-0 z-20">
            <button type="button" onClick={() => router.back()} className="text-left flex items-center gap-2 cursor-pointer bg-surface px-3 py-2 rounded-lg font-medium text-sm backdrop-blur-xs border border-zinc-600">
                <ArrowLeft className="size-3.5" />
                Back
            </button>
            {socialLinks && <div className="flex items-center gap-2">
                {socialLinks}
            </div>}
        </div>
        <div className="relative w-[90%] md:w-[50%] flex flex-col gap-6 mx-auto">
            {headers}
            {children}
        </div>
    </div>

}