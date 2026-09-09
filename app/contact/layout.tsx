import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Ruthiemy Oribello for freelance work, collaborations, or opportunities. Typically responds within 24–48 hours.",
    alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
