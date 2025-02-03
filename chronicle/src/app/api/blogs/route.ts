import { SSGBlogStaticParamType } from "@/common/types/types"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (): Promise<NextResponse> => {
    const allBlogs: SSGBlogStaticParamType = [
        { blogId: "shubham-naam-hai-mera" },
        { blogId: "proud-employee-makeindias" }
    ]

    return NextResponse.json(allBlogs, { status: 200 })

}