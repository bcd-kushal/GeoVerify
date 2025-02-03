import { ApiResponseType, ApiReturnType } from "@/common/types/apiTypes"
import { ImageDocument } from "@/common/types/documents/documents"
import { supa } from "@/server/supabase/client/client"
import { TABLE_NAMES } from "@/server/supabase/db/tables"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (req: NextRequest): Promise<ApiReturnType> => {
    const body: ImageDocument = await req.json()

    const { data, error } = await supa.from(TABLE_NAMES.IMAGES_TABLE).insert([body]).select()

    if (data)
        return NextResponse.json({ data: data, status: "success" }, { status: 200 })
    return NextResponse.json({ data: null, status: "error" })
}