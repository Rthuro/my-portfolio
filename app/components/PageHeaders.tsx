
interface PageHeadersProps{
    title: string;
    subtitle: string;
} 

export const PageHeaders = ({title, subtitle}: PageHeadersProps) => {

    return <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
            <p className=" font-semibold text-lg flex items-center font-mono">
                {title}
            </p>
        </div>
        <p className="text-sm text-zinc-400 text-justify">
            {subtitle}
        </p>
    </div>
}