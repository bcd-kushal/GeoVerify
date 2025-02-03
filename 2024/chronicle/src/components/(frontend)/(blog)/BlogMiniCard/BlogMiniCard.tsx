import Link from "next/link"
import { generateBlogLink } from "@/common/links/generateLinks"
import Image from "next/image"
import moment from "moment"
import { DATE_FORMAT } from "@/common/constants/dateFormats"
import { BlogMiniCardDataType } from "./utils/types"

export default function BlogMiniCard({ title, createdAt, thumbnail }: BlogMiniCardDataType) {
    return (
        <Link href={generateBlogLink(title)} className="group border-[1.5px] border-black/25 dark:border-white/25 hover:border-blue-600 hover:dark:border-white/50 rounded-lg grid *:row-start-1 *:col-start-1 transition-all duration-200 overflow-hidden" prefetch>
            <div className="z-[2] w-3/5 relative overflow-hidden">
                {thumbnail.url ?
                    <Image src={thumbnail.url} height={200} width={380} className="h-full w-full object-cover object-center scale-105 group-hover:scale-100 transition-all duration-300" unoptimized alt={thumbnail.alt} />
                    :
                    <span>{title[0].toUpperCase()}</span>
                }
            </div>
            <div className="z-[4] py-3 bg-gradient-to-l from-zinc-100 dark:from-black from-55% via-white/50 dark:via-black/50 via-90% to-white/5 dark:to-black/5 group-hover:via-white/30 dark:group-hover:via-transparent group-hover:to-transparent grid grid-cols-[3fr_7fr]">
                <span></span>
                <div className="flex flex-col items-start justify-between gap-2">
                    <h2 className="text-xl font-semibold line-clamp-2 text-black dark:text-white group-hover:text-blue-700 dark:group-hover:text-white transition-all duration-200">{title}</h2>
                    <span className="text-sm text-zinc-500">{moment(createdAt).format(DATE_FORMAT.FULL)}</span>
                </div>
            </div>
        </Link>
    )
}