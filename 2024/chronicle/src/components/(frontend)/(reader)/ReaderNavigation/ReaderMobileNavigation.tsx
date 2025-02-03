'use client'
import { usePathname } from "next/navigation"
import { settingsLinks } from "./static/constants"
import Link from "next/link"


export default function ReaderMobileNavigations() {
    const currPath = usePathname()
    return (
        <section className="flex sticky bottom-0 w-screen items-center justify-evenly sm:hidden pt-1 pb-0.5 px-3 border-t-[1px] dark:border-white/10 h-fit">
            {settingsLinks.top.map(({ label, svg, link }, index) => (
                <Link href={link} key={index} className={`flex flex-col justify-center p-2 text-xs gap-1 items-center w-20 ${currPath.toLowerCase() === link.toLowerCase() ? "dark:text-blue-600" : "dark:text-white/80"}`}> {svg} <span>{label}</span> </Link>
            ))}
            {settingsLinks.bottom.map(({ label, svg, link }, index) => (
                <Link href={link} key={index} className={`flex flex-col justify-center p-2 text-xs gap-1 items-center w-20 ${currPath.toLowerCase() === link.toLowerCase() ? "dark:text-blue-600" : "dark:text-white/80"}`}> {svg} <span>{label}</span> </Link>
            ))}
        </section>
    )
}