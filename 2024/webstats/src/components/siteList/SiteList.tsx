'use server'
import "./SiteList.css"
import Link from "next/link"
import { SITES_LIST } from "@/data/sitesOnPreview"
import { ChevronRightSvg } from "@/svgs/svgs"

export async function SiteList() {
    return (
        <aside className="main group/list scrollbar-hide flex md:flex-col md:w-[220px] gap-2 items-center md:items-stretch justify-start overflow-x-scroll w-[calc(100dvw_-_32px)] md:overflow-x-auto md:overflow-y-scroll *:px-4 *:py-3 *:font-semibold *:rounded-lg *:flex *:w-full *:items-center *:justify-between *:duration-200 *:cursor-pointer *:tracking-wide">
            {SITES_LIST.map((site,index) => (
                <Link href={`/${site.name.toLowerCase()}`} className="group/asideTag site-tab hover:bg-[#6f6f6f35] min-w-[150px] transition-all duration-300" key={index}>
                    <span className=" flex flex-col items-start justify-center transition-all duration-300 w-full md:text-left md:w-fit">
                        <span className="group-hover/asideTag:text-[#f09393] transition-all duration-200 whitespace-nowrap site-name relative left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0">{site.name}</span>
                    </span>
                    <span className="transition-all hidden md:block -translate-x-2 opacity-0 group-hover/asideTag:opacity-100 group-hover/asideTag:translate-x-0 "><ChevronRightSvg/></span>
                </Link>
            ))}
        </aside>
    )
}