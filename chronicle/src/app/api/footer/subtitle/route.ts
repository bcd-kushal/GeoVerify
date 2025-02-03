import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest): Promise<NextResponse> => {
    const queryParams = new URL(req.url).searchParams

    return NextResponse.json(queryParams, { status: 200 })

}