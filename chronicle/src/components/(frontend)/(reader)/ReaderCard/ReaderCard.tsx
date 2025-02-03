import { ChildrenType } from "@/common/types/reactTypes"
import { ClassNameType } from "@/common/types/types"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Avatar from "../../(atomic)/Avatar/Avatar"
import { readerActions } from "./static/data"
import Link from "next/link"
import { LINKS } from "@/common/links/staticLinks"

export default function ReaderCard({ children, className }: { children: ChildrenType, className?: ClassNameType }) {
    return (
        <>
            {/* desktop =================================== */}
            <DropdownMenu>
                <DropdownMenuTrigger className={`hidden sm:flex p-0 min-w-fit outline-none focus:outline-none cursor-pointer ${className || ""}`}>
                    {children}
                </DropdownMenuTrigger>
                <DropdownMenuContent collisionPadding={14} sideOffset={-35} className="hidden sm:flex p-0 outline-none focus:outline-none min-w-fit border-none bg-transparent translate-y-[15%]">
                    <AboutReaderPopup />
                </DropdownMenuContent>
            </DropdownMenu>

            {/* mobile =================================== */}
            <Drawer>
                <DrawerTrigger className={`flex sm:hidden p-0 min-w-fit outline-none focus:outline-none cursor-pointer ${className || ""}`}>
                    {children}
                </DrawerTrigger>

                <DrawerContent className="flex sm:hidden p-0 outline-none focus:outline-none min-w-fit border-none bg-transparent">
                    <AboutReaderPopup />
                </DrawerContent>
            </Drawer>
        </>
    )
}


function AboutReaderPopup() {
    const readerOptions = readerActions({ comment: LINKS.VIEWER.COMMENTS, favorite: LINKS.VIEWER.FAVORITES, like: LINKS.VIEWER.LIKES, setting: LINKS.VIEWER.SETTINGS })

    return (
        <section className="w-screen sm:w-[250px] px-3.5 sm:px-4 pt-8 pb-5 sm:py-4 rounded-t-2xl sm:rounded-xl bg-background border-[1.5px] border-muted flex flex-col items-stretch justify-start">
            <div className="flex gap-3.5 sm:gap-0 pl-0.5 sm:pl-0 sm:flex-col justify-start items-center">
                <Avatar readerName="Kushal" shade="yellow" dimensions="w-[64px] h-[64px] sm:w-[72px] sm:h-[72px]" />
                <div className="flex flex-col justify-start sm:justify-center">
                    <span className="font-semibold text-2xl mt-2 line-clamp-1 sm:text-center">Kushal</span>
                    <span className="text-zinc-500/90 text-xs my-1.5 sm:my-1 line-clamp-1 sm:text-center">dev@kushalkumarsaha.com</span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-3.5 mt-5 *:rounded-md *:sm:rounded-xl *:overflow-hidden *:cursor-pointer">
                {readerOptions.map(({ label, svg, link }, index) => (
                    <Link href={link} className="group flex sm:flex-col items-center justify-start sm:justify-center py-2.5 px-1 sm:p-2 gap-3.5 sm:gap-2.5 sm:aspect-square text-neutral-400 sm:dark:bg-zinc-800/30 sm:hover:bg-zinc-800/80 transition-all duration-300" key={index}>
                        {svg}
                        <span className="text-neutral-400 group-hover:text-white transition-colors duration-300 text-base sm:text-xs">
                            {label}
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    )
}