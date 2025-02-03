'use client'
import Image from "next/image"
import { AvatarType } from "./utils/types"

export default function Avatar({ readerName, img, dimensions, shade }: AvatarType) {
    const theme = shade === 'emerald' ? 'from-emerald-600/50 to-emerald-950/50'
                : shade === 'fuchsia' ? 'from-fuchsia-600/50 to-fuchsia-950/50'
                : shade === 'orange'  ? 'from-orange-600/50 to-orange-950/50'
                : shade === 'sky'     ? 'from-sky-600/50 to-sky-950/50'
                                      : 'from-yellow-600/50 to-yellow-950/50'

    return (
        <span className={`relative aspect-square rounded-full overflow-hidden bg-gradient-to-br ${theme} text-sm flex items-center justify-center ${dimensions || "w-9 h-9"}`}>
            {
                img && img.url ? <Image src={img.url} alt={img.alt} width={200} height={200} unoptimized priority decoding="async" draggable={false} className="object-cover w-full h-full" />
                    : `${readerName[0].toUpperCase()}`
            }
        </span>
    )
}