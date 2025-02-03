import { NextRequest, NextResponse } from "next/server"
import { getBlogArticle } from "../controller"

export const GET = async (req: NextRequest): Promise<NextResponse> => {
    const url = req.url
    const blogId = url.split('/blogs/')[1]
    const responseData: string | null = await getBlogArticle(blogId)

    return NextResponse.json({ success: true, data: responseData }, { status: 200 })

}