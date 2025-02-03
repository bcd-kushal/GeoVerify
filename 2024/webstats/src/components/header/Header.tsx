'use server'
import { KushalKumarBgWebstatsSvg } from "@/svgs/svgs"
import { maxContentSpace } from "@/decorators/universals"
import "./Header.css"
import Link from "next/link"

export const Header = async () => {
    return (
        <header className="mb-2 sticky top-0" >
            <nav className={`flex gap-2 items-center justify-center sm:justify-between px-4 md:px-8 py-2 md:py-3 text-lg ${maxContentSpace}`} >

                {/* left side ---------------------- */}
                <Link href="/"  className="wiggle-grp flex items-center justify-start gap-3 w-fit">
                    <KushalKumarBgWebstatsSvg/>
                    <div className="flex flex-col justify-center items-start w-fit">
                        <span className="hidden md:block text-[10px] tracking-[0.15em] text-[#f67373]">STATS</span>
                        <span className="wiggle-target font-medium tracking-wider md:mt-[-12px] pt-[7px] md:pt-0 text-3xl">Kushal Kumar</span>
                        <span className="block md:hidden mt-[-8.5px] text-[10px] tracking-[0.15em] text-[#f67373] self-end mr-[3px] md:mr-0">STATS</span>
                    </div>
                </Link>

                {/* right side ---------------------- */}
                <div className="hidden md:flex gap-6 justify-end items-center *:cursor-pointer *:transition-all *:duration-300">
                    <Link href="https://kushalkumarsaha.com/" target="_blank" className=" text-[15px] tracking-wider hover:text-[#f67373]">Official</Link>
                    <Link href="https://blogs.kushalkumarsaha.com/" target="_blank" className="text-[15px] tracking-wider hover:text-[#f67373]">Blogs</Link>
                    <Link href="https://portfolio.kushalkumarsaha.com/" target="_blank" className=" text-[15px] tracking-wider hover:text-[#f67373]">Portfolio</Link>
                </div>
            </nav>
        </header>
    )
}