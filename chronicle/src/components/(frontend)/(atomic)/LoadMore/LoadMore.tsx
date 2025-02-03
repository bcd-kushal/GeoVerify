import { ClassNameType } from "@/common/types/types";

export default function LoadMore({ handleClick, label, className }: { handleClick: () => void, label?: string, className?: ClassNameType }) {
    return (
        <div className={`p-2 max-w-[370px] relative left-1/2 -translate-x-1/2 rounded-lg text-center bg-zinc-100 dark:bg-[#111] my-6 border-[1.5px] border-black/10 hover:border-black/30 text-black/50 hover:text-black/70 dark:border-white/10 dark:hover:border-white/20 dark:text-white/50 dark:hover:text-white dark:hover:bg-zinc-900 transition-all duration-300 cursor-pointer ${className || ""}`}>
            {label || "Load more"}
        </div>
    )
}