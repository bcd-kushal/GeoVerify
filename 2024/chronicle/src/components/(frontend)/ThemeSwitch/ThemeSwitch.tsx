'use client'
import { ThemeType } from "@/common/types/types"
import { MoonStarIcon, SunIcon } from "lucide-react"
import { toggleTheme } from "./functions/toggleTheme"

export default function ThemeSwitch({ theme }: { theme: ThemeType }) {
    return (
        <span className="group p-2 aspect-square transition-all duration-300 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-800 flex" onClick={() => toggleTheme(theme)}>
            {theme === 'dark' ? <MoonStarIcon width={20} height={20} className="stroke-zinc-500 transition-colors duration-300 group-hover:stroke-black dark:group-hover:stroke-white" /> : <SunIcon width={20} height={20} className="stroke-gray-500 transition-colors duration-300 group-hover:stroke-black dark:group-hover:stroke-white" />}
        </span>
    )
}