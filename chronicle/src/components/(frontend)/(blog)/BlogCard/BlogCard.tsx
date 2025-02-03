import Link from "next/link"
import Image from "next/image"
import { generateBlogLink } from "@/common/links/generateLinks"
import { inThousands } from "@/common/utils/inThousands"
import { EyeIcon, ThumbsUpIcon } from "lucide-react"
import moment from "moment"
import { DATE_FORMAT } from "@/common/constants/dateFormats"
import { FeaturedBlogsType } from "../../FeaturedBlogs/utils/types"
import { ClassNameType } from "@/common/types/types"

export default function BlogCard({ blog, className }: { blog: FeaturedBlogsType, className: ClassNameType }) {
    const { title, thumbnail, description, createdAt, metrics: { views, likes } } = blog
    
    return (
        <Link href={generateBlogLink(title)} className={`group border-[1.5px] border-black/25 dark:border-white/25 hover:border-blue-600 hover:dark:border-white/50 rounded-lg relative *:row-start-1 *:col-start-1 overflow-hidden transition-all duration-200 ${className || ""}`}>
            {thumbnail ?
                <div className="z-[2] overflow-hidden w-full relative">
                    <Image src={thumbnail.url || ""} alt={thumbnail.alt} width={400} height={550} className="object-center object-cover w-full h-full transition-all duration-300 scale-105 group-hover:scale-100" />
                </div>
                :
                <></>
            }
            <div className="z-[4] bg-gradient-to-t dark:from-black/95 from-zinc-100 from-15% dark:from-35% to-black/5 group-hover:from-5% dark:group-hover:from-10% group-hover:to-transparent w-full h-full flex flex-col items-stretch justify-end p-4 transition-all duration-300">
                <h2 className="text-xl font-semibold leading-tight mb-2 md:mb-[7px] line-clamp-3 text-black dark:text-white group-hover:text-blue-700 dark:group-hover:text-white transition-colors duration-200">{title}</h2>
                <p className="hidden sm:webkit-box line-clamp-2 text-black/60 dark:text-white/40 text-sm mb-3 md:mb-4">{description}</p>
                <div className="flex items-center justify-between text-xs text-black/60 dark:text-white/60">
                    <span className="flex justify-start -translate-x-[3px]">
                        <ThumbsUpIcon height={12} className="translate-y-[1px]" /> {inThousands(likes)}
                        <EyeIcon height={12} className="translate-y-[1.5px] ml-1" /> {inThousands(views)}
                    </span>
                    <span>{moment(createdAt).format(DATE_FORMAT.SHORT)}</span>
                </div>
            </div>
        </Link>
    )
}