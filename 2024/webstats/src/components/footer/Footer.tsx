'use server'
import { KushalKumarBgDarkSvg } from "@/svgs/svgs"
import Link from "next/link"

export async function Footer() {
    return (
        <footer className={`mt-6 flex flex-col md:flex-row gap-1 md:gap-2 md:items-center justify-center items-start md:justify-between px-4 md:px-8 py-3 text-lg`}>
            <div className="w-full">
                {/* title -------------------- */}
                <div className="flex gap-2 items-center justify-center md:justify-start w-full">
                    <KushalKumarBgDarkSvg dimensions={26} />
                    <span className="tracking-wide">Kushal Kumar</span>
                </div>

                {/* mobile links -------------------- */}
                <span className="flex md:hidden mt-3 gap-5 items-center justify-center *:text-xs">
                    <Link href="https://github.com/bcd-kushal/" target="_blank" className="hover:text-[#f67373] duration-300 transition-colors">GitHub</Link>
                    <Link href="https://linkedin.com/in/dev-kushal/" target="_blank" className="hover:text-[#f67373] duration-300 transition-colors">LinkedIn</Link>
                    <Link href="https://kushalkumarsaha.com/" target="_blank" className="hover:text-[#f67373] duration-300 transition-colors">Official</Link>
                    <Link href="https://blogs.kushalkumarsaha.com/" target="_blank" className="hover:text-[#f67373] duration-300 transition-colors">Blogs</Link>
                    <Link href="https://portfolio.kushalkumarsaha.com/" target="_blank" className="hover:text-[#f67373] duration-300 transition-colors">Portfolio</Link>
                </span>

                {/* credits -------------------- */}
                <div className="text-[9.2px] mt-5 sm:mt-2 mb-1 sm:text-[11px] italic text-[#ffffff81] transition-colors duration-300 hover:text-[#fff9] cursor-default group/credits text-center md:text-left sm:w-fit">Designed and created by <Link href="https://github.com/bcd-kushal/" target="_blank" className="group-hover/credits:text-[#f67373] italic text-[#ffffff81] duration-300 hover:underline">Kushal Kumar</Link> | All rights reserved</div>
            </div>
        </footer>
    )
}