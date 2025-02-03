'use server'

import { LoaderSvg } from "@/svgs/svgs"

export default async function LoadingComponent() {
    return (
        <span className="flex flex-col gap-2 items-center justify-center w-full h-full">
            <pre className="animate-spin"><LoaderSvg dimensions={28}/></pre>
            <pre className="text-lg">Loading...</pre>
        </span>
    )
}