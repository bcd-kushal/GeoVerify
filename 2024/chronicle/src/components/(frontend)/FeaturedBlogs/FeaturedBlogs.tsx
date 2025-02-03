import { inThousands } from "@/common/utils/inThousands"
import { EyeIcon, ThumbsUpIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FeaturedBlogsComponentType } from "./utils/types"
import { FEATURED_BLOGS_ROW_SPANS } from "./utils/constants"
import moment from "moment"
import { DATE_FORMAT } from "@/common/constants/dateFormats"
import { generateBlogLink } from "@/common/links/generateLinks"
import BlogCard from "../(blog)/BlogCard/BlogCard"

export default function FeaturedBlogs({ featuredBlogs }: FeaturedBlogsComponentType) {
    return (
        <section className="mt-2 mb-8 sm:my-8 grid grid-cols-1 sm:grid-cols-2 grid-rows-[208px_208px_208px] sm:grid-rows-[110px_110px_110px_110px_110px_110px_110px] md:grid-rows-[65px_65px_65px_65px_65px_65px_65px] md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
            {featuredBlogs
                .filter((_, index) => index < 5)
                .map((blog, index) => (
                    <BlogCard key={index} blog={blog} className={FEATURED_BLOGS_ROW_SPANS[index] + (index === 3 || index === 4 ? ' hidden sm:grid' : ' grid')} />
                ))}
        </section>
    )
}