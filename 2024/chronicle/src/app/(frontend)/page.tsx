import AllBlogs from "@/components/(frontend)/AllBlogs/AllBlogs"
import CategoryTabs from "@/components/(frontend)/CategoryTabs/CategoryTabs"
import FeaturedBlogs from "@/components/(frontend)/FeaturedBlogs/FeaturedBlogs"
import { FeaturedBlogsType } from "@/components/(frontend)/FeaturedBlogs/utils/types"
import RecentlyRead from "@/components/(frontend)/RecentlyRead/RecentlyRead"
import { RecentlyReadDataType } from "@/components/(frontend)/RecentlyRead/utils/types"
import Title from "@/components/(frontend)/Title/Title"

export default async function Homepage() {
    const featuredBlogs: FeaturedBlogsType[] = [
        { id: "", tag: { label: "" }, title: "Understanding React Server Components", createdAt: new Date(), metrics: { likes: 17196, views: 4920292, comments: 1904 }, thumbnail: { alt: "", url: "https://github.com/bcd-kushal.png" }, description: "The study of Homo species is crucial for understanding human evolution. By examining fossils, tools, and other archaeological evidence, scientists can trace the development of physical and cultural traits that define modern humans." },
        { id: "", tag: { label: "" }, title: "Understanding React Server Components", createdAt: new Date(), metrics: { likes: 17196, views: 4920292, comments: 1904 }, thumbnail: { alt: "", url: "https://github.com/bcd-kushal.png" }, description: "The study of Homo species is crucial for understanding human evolution. By examining fossils, tools, and other archaeological evidence, scientists can trace the development of physical and cultural traits that define modern humans." },
        { id: "", tag: { label: "" }, title: "Understanding React Server Components", createdAt: new Date(), metrics: { likes: 17196, views: 4920292, comments: 1904 }, thumbnail: { alt: "", url: "https://github.com/bcd-kushal.png" }, description: "The study of Homo species is crucial for understanding human evolution. By examining fossils, tools, and other archaeological evidence, scientists can trace the development of physical and cultural traits that define modern humans." },
        { id: "", tag: { label: "" }, title: "Understanding React Server Components", createdAt: new Date(), metrics: { likes: 17196, views: 4920292, comments: 1904 }, thumbnail: { alt: "", url: "https://github.com/bcd-kushal.png" }, description: "The study of Homo species is crucial for understanding human evolution. By examining fossils, tools, and other archaeological evidence, scientists can trace the development of physical and cultural traits that define modern humans." },
        { id: "", tag: { label: "" }, title: "Understanding React Server Components", createdAt: new Date(), metrics: { likes: 17196, views: 4920292, comments: 1904 }, thumbnail: { alt: "", url: "https://github.com/bcd-kushal.png" }, description: "The study of Homo species is crucial for understanding human evolution. By examining fossils, tools, and other archaeological evidence, scientists can trace the development of physical and cultural traits that define modern humans." },
    ]

    const recentlyReadBlogs: RecentlyReadDataType = featuredBlogs

    return (
        <div className="flex flex-col gap-1 items-stretch justify-start min-h-screen px-3 min-[1200px]:px-0">
            <CategoryTabs />
            <Title config={{ label: "All posts", variant: "category", type: "text" }} />
            <FeaturedBlogs featuredBlogs={featuredBlogs} />

            <Title config={{ label: "Recently read", variant: "category", type: "text" }} />
            <RecentlyRead data={recentlyReadBlogs} />

            <Title config={{ label: "Latest", variant: "category", type: "text" }} />
            <AllBlogs category="all" />
        </div>
    )
}