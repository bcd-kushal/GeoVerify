import Link from "next/link"
import { generateBlogLink } from "@/common/links/generateLinks"
import moment from "moment"
import { DATE_FORMAT } from "@/common/constants/dateFormats"
import Image from "next/image"
import { BlogAtomicDataDocument } from "@/common/types/documents/documents"

export default function BlogGhost({ blog, page }: { blog: BlogAtomicDataDocument, page: "blog" | "category" }) {
    return (
        <Link href={generateBlogLink(blog.title)} className="group flex items-start justify-start gap-3" prefetch>
            <div className={`relative aspect-square rounded-full overflow-hidden translate-y-[2px] ${page==="category" ? "w-20" : "w-16"}`}>
                {blog.thumbnail.url ?
                    <Image src={blog.thumbnail.url} className="object-cover w-full h-full" height={80} width={80} unoptimized priority alt={blog.thumbnail.alt} />
                    :
                    <div className="flex items-center justify-center w-full h-full">{blog.title[0].toUpperCase()}</div>
                }
            </div>
            <div className={`flex flex-col items-start justify-start ${page==="category" ? "gap-1 sm:gap-2 lg:gap-3" : "gap-2"}`}>
                <span className={`${page==="category" ? "text-xl font-semibold lg:font-bold line-clamp-4" : "text-xl md:text-lg font-bold md:font-medium line-clamp-2 md:text-black/80 dark:md:text-white/80" } transition-colors duration-200 group-hover:text-blue-500`}>{blog.title}</span>
                <span className={`${page==="category" ? "text-sm text-black/60 dark:text-white/60" : "text-sm md:text-xs text-black/45 dark:text-white/40" }`}>{moment(blog.createdAt).format(DATE_FORMAT.FULL)}</span>
            </div>
        </Link>
    )
}