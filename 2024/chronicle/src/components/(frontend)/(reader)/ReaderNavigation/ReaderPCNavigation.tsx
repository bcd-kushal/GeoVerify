import { DATE_FORMAT } from "@/common/constants/dateFormats"
import Avatar from "@/components/(frontend)/(atomic)/Avatar/Avatar"
import LinksList from "@/components/(frontend)/LinksList/LinksList"
import moment from "moment"
import { settingsLinks } from "./static/constants"
import { LogOutIcon } from "lucide-react"


export default function ReaderPCNavigations() {
    return (
        <section className="sticky top-[74px] h-fit hidden sm:flex flex-col items-stretch justify-start gap-4 pr-4 pt-2">
            <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-center justify-start mt-4 mb-5">
                    <Avatar dimensions="w-[52px] h-[52px]" readerName="Kushal" shade="yellow" />
                    <div className="flex flex-col items-start justify-center gap-0.5">
                        <h1 className="font-semibold text-xl line-clamp-1">Kushal</h1>
                        <span className="dark:text-zinc-500/70 text-xs line-clamp-1">Joined: {moment(new Date()).format(DATE_FORMAT.SHORT)}</span>
                    </div>
                </div>
                <LinksList list={settingsLinks.top} />
            </div>
            <div className="h-[1px] dark:bg-zinc-500/50 my-3" />
            <div className="flex flex-col gap-2">
                <LinksList list={settingsLinks.bottom} />
                <span className={`flex items-center gap-3 py-3 text-sm transition-colors duration-300 rounded-lg dark:text-white/60 hover:dark:text-rose-700 cursor-pointer`}>
                    <LogOutIcon height={16} width={16} />
                    <span>Logout</span>
                </span>
            </div>
        </section>
    )
}