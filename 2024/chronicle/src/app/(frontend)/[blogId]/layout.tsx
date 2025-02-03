import { GET_ALL_BLOGS_API_ROUTE } from "@/common/links/fetchRoutes"
import { BLOGPAGE_SSG_REVLAIDATION } from "@/common/constants/revalidateIntervals"
import { ChildrenType } from "@/common/types/reactTypes"
import { Share2Icon, StarIcon, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react"
import LikesDislikes from "@/components/(frontend)/(blog)/LikesDislikes/LikesDislikes"
import Favorite from "@/components/(frontend)/(blog)/Favorite/Favorite"

export async function generateStaticParams() {
    const url = GET_ALL_BLOGS_API_ROUTE()
    const blogs = await fetch(url, { next: { revalidate: BLOGPAGE_SSG_REVLAIDATION } }).then(res => res.json())

    return blogs
}

export default function BlogPostLayout({ children }: { children: ChildrenType }) {
    return (
        <>
            {children}
        </>
    )
}