import { NextResponse } from "next/server"

export type ApiResponseType = {
    status: "error" | "success" | "warning" | "unknown"
    } & ({
            data: Record<string, string>,
            status: "error" | "success" | "warning" | "unknown",
            count?: number
        } | {
            data: null
        })

export type ApiReturnType = NextResponse<ApiResponseType>