'use client'
import { ThumbsUpIcon, ThumbsDownIcon } from "lucide-react"
import { LikeDislikeStateType, LikesDislikesType } from "./utils/types"
import { inThousands } from "@/common/utils/inThousands"
import { COMMON_STYLES, DEFAULT_SELECTED_STATE, FULL_DEFAULT_STYLES, FULL_SELECTED_STYLES } from "./utils/constants"
import { useState } from "react"

export default function LikesDislikes({ likes, selected, onDislike, onLike, type }: LikesDislikesType & { type: "expanded" | "default" }) {
    const [selectedBtn, setSelectedBtn] = useState<LikeDislikeStateType>(selected || DEFAULT_SELECTED_STATE)

    const handleTrigger = (selection: LikeDislikeStateType) => {
        if (selectedBtn === 'like') {
            if (selection === 'like') setSelectedBtn(prev => 'none')
            else setSelectedBtn(prev => selection)
        }
        if (selectedBtn === 'dislike') {
            if (selection === 'dislike') setSelectedBtn(prev => 'none')
            else setSelectedBtn(prev => selection)
        }
        if (selectedBtn === 'none') {
            if (selection !== 'none') setSelectedBtn(prev => selection)
        }

        if (selection === 'like') onLike()
        if (selection === 'dislike') onDislike()
    }

    return (
        <div className={`w-fit overflow-hidden items-stretch justify-start ${type === "default" ? "*:py-1 *:px-[14px] flex sm:hidden" : "*:px-5 *:py-2 hidden sm:flex"}`}>
            <div onClick={() => handleTrigger('like')} className={`${COMMON_STYLES} rounded-l-full ${selectedBtn === 'like' ? FULL_SELECTED_STYLES : FULL_DEFAULT_STYLES} ${selectedBtn !== 'like' ? "border-r-0" : ""}`}><ThumbsUpIcon width={16} height={16} /><span>{inThousands(likes)}</span></div>
            <div onClick={() => handleTrigger('dislike')} className={`${COMMON_STYLES} rounded-r-full ${selectedBtn === 'dislike' ? FULL_SELECTED_STYLES : FULL_DEFAULT_STYLES} ${selectedBtn === 'like' ? "border-l-0" : ""}`}><ThumbsDownIcon width={16} height={16} className={type === "expanded" ? "-translate-x-[2px]" : ""} /></div>
        </div>
    )
}