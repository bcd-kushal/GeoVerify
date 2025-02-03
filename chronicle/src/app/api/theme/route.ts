import { NextRequest, NextResponse } from "next/server"
import { COOKIE_THEME_KEY } from "@/common/constants/cookieKeys"
import { ThemeType } from "@/common/types/types"
import { cookies } from "next/headers"

const DEFAULT_COOKIE_KEY = COOKIE_THEME_KEY
const DEFAULT_COOKIE_VALUE: ThemeType = 'light'

export const GET = async (): Promise<NextResponse> => {
    try {
        if (cookies().has(DEFAULT_COOKIE_KEY))
            return NextResponse.json({ status: true, data: cookies().get(DEFAULT_COOKIE_KEY)?.value as ThemeType }, { status: 200 })
        return NextResponse.json({ status: true, data: DEFAULT_COOKIE_VALUE }, { status: 200 })
    }
    catch (err: any) {
        return NextResponse.json({ status: false, data: null }, { status: 500 })
    }
}


export const POST = async (req: NextRequest): Promise<NextResponse> => {
    try {
        const theme: ThemeType = await req.json()
        cookies().set(DEFAULT_COOKIE_KEY, theme)
        return NextResponse.json({ status: true, data: null }, { status: 200 })
    }
    catch (err: any) {
        return NextResponse.json({ status: false, data: null }, { status: 500 })
    }
}