'use client'
import { DownloadSvg } from "@/svgs/svgs"
import { useRouter } from "next/navigation"

export default function DownloadButton() {
    return (
        <span className="cursor-pointer hover:bg-[#ccc2] transition-all duration-300 p-3 rounded-full"><DownloadSvg/></span>
    )
}