'use client'
import { RefreshSvg } from "@/svgs/svgs"
import { useRouter } from "next/navigation"

export default function RefreshButton() {
    const router = useRouter()
    return ( <span onClick={()=>router.refresh()} className="cursor-pointer hover:bg-[#ccc2] transition-all duration-300 p-3 rounded-full"><RefreshSvg/></span> )
}