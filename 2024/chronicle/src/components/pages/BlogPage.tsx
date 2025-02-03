import { GET_BLOG_API_ROUTE } from "@/common/links/fetchRoutes"
import { BLOGPAGE_REVALIDATION } from "@/common/constants/revalidateIntervals"
import { NextResponseType } from "@/common/types/types"
import BlogArticle from "@/components/(frontend)/(blog)/BlogArticle/BlogArticle"
import { notFound } from "next/navigation"


const getBlogArticle = async ({ blogId }: { blogId: string }): Promise<string | null> => {
    const url = GET_BLOG_API_ROUTE(blogId)
    const response: NextResponseType = await fetch(url, { next: { revalidate: BLOGPAGE_REVALIDATION } }).then(res => res.json())

    return response.data as string | null
}

export default async function BlogPage({ blogId }: { blogId: string }) {
    const blogArticle = await getBlogArticle({ blogId: blogId })

    if (blogArticle === null)
        notFound()

    return (
        <>
            <BlogArticle tag={blogId} blogArticle={blogArticle} />
        </>
    )
}