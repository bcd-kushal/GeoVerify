import BlogPage from "@/components/pages/BlogPage"

export default async function BlogPost({ params }: { params: { blogId: string } }) {
    return <BlogPage blogId={params.blogId} />
}