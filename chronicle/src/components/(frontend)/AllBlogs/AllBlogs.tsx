import { AllBlogsType } from "./utils/types"
import BlogGhost from "../(blog)/BlogGhost/BlogGhost"
import LoadMore from "../(atomic)/LoadMore/LoadMore"
import { __emptyFunction__ } from "@/common/utils/__emptyFunction__"

export default function AllBlogs({ category }: { category: string }) {
    const allBlogs: AllBlogsType = [
        { id: "", title: "Understanding React Server Components", createdAt: new Date(), thumbnail: { alt: "", url: "https://github.com/bcd-kushal.png" } },
        { id: "", title: "Understanding React Server Components", createdAt: new Date(), thumbnail: { alt: "", url: "https://github.com/bcd-kushal.png" } },
        { id: "", title: "Understanding React Server Components", createdAt: new Date(), thumbnail: { alt: "", url: "https://github.com/bcd-kushal.png" } },
        { id: "", title: "Understanding React Server Components", createdAt: new Date(), thumbnail: { alt: "", url: "https://github.com/bcd-kushal.png" } },
        { id: "", title: "Understanding React Server Components", createdAt: new Date(), thumbnail: { alt: "", url: "https://github.com/bcd-kushal.png" } },
    ]
    
    return (
        <>
        <section className="mt-2 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8 md:gap-10">
            {allBlogs.map((blog, index) => (
                <BlogGhost blog={blog} page="category" key={index} />
            ))}
        </section>
        <LoadMore handleClick={__emptyFunction__} />
        </>
    )
}