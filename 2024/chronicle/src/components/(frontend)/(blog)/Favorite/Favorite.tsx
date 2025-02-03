'use client'
import { ClassNameType } from "@/common/types/types"
import { StarIcon } from "lucide-react"
import { useState } from "react"
import { DEFAULT_FAVORITE_ENABLED_STATE, FAVORITE_FILLED_SHADE } from "./utils/constants"

export default function Favorite({ className, isSelected, onSelect, svgDimensions }: { className: ClassNameType, isSelected: boolean, onSelect: () => void, svgDimensions?: number }) {
    const [filledStar, setFilledStar] = useState<boolean>(isSelected || DEFAULT_FAVORITE_ENABLED_STATE)

    const handleToggle = () => {
        onSelect()
        setFilledStar(prev => !prev)
    }

    return (
        <span onClick={handleToggle} className={`p-2 cursor-pointer transition-all duration-300 ${className}`}>
            <StarIcon width={svgDimensions || 18} height={svgDimensions || 18} name="favorite" stroke={filledStar ? FAVORITE_FILLED_SHADE : "currentColor"} fill={filledStar ? FAVORITE_FILLED_SHADE : "transparent"} className="transition-all duration-300" />
        </span>
    )
}