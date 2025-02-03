'use client'
import { LinkListType } from "@/common/types/types"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function LinksList({ list }: { list: LinkListType["bottom"] | LinkListType["top"] }) {
    const currPath = usePathname()
    return (
        <>
            {list.map(({ label, svg, link }, index) => (
                <Link href={link} prefetch key={index} className={`flex items-center gap-3 py-3 text-sm transition-colors duration-300 rounded-lg ${link.toLowerCase() === currPath.toLowerCase() ? 'text-blue-500' : 'dark:text-white/60 dark:hover:text-white'}`}>
                    {svg}
                    <span>{label}</span>
                </Link>
            ))}
        </>
    )
}