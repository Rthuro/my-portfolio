import Link from "next/link";
import { IconChevronRightOutline18 } from "../assets/icons";

interface SectionHeaderProps {
    title: string;
    link: string;
    viewLabel?: string;
    hasSectionLink?:boolean
}

export const SectionHeader = ({title, link, viewLabel = "view all", hasSectionLink = true}:SectionHeaderProps) => {
    return <div className="flex items-center  text-sm justify-between  font-mono w-full">
          <p className="text-accent-light text-shadow-[0_0_12px_rgba(202,102,255,0.5)]">{title}</p>
          {hasSectionLink && <Link href={link} className="flex items-center gap-1" >
            {viewLabel} 
            <IconChevronRightOutline18 size="12px" />
          </Link>}
        </div>
    ;
}