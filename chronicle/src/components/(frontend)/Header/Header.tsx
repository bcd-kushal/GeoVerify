import Link from "next/link"
import Search from "./components/Search/Search"
import { ThemeType } from "@/common/types/types"
import Avatar from "../(atomic)/Avatar/Avatar"
import { __emptyFunction__ } from "@/common/utils/__emptyFunction__"
import ReaderCard from "../(reader)/ReaderCard/ReaderCard"


export default async function Header({ theme }: { theme: ThemeType }) {
    return (
        <div className="py-1.5 sm:py-2 z-50 backdrop-blur-md sticky top-0 border-b-[1px] border-black/20 dark:border-white/20">
            <header className="max-w-[1200px] relative left-1/2 -translate-x-1/2 px-[12px] min-[1200px]:px-0 flex items-center justify-between">

                {/* left side -------------------------- */}
                <span className="flex gap-1 items-center">
                    <Link href={"/"} className="text-base font-medium py-2 mr-4">Blogs by Shubham</Link>
                </span>

                {/* right side -------------------------- */}
                <span className="flex items-center gap-3 sm:gap-4 justify-end">
                    <Search />
                    <ReaderCard>
                        <Avatar readerName="Kushal" dimensions="w-8 h-8 sm:w-[33.2px] sm:h-[33.2px]" shade="yellow" />
                    </ReaderCard>
                </span>

            </header>
        </div>
    )
}