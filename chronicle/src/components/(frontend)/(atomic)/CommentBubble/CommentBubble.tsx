import { CommentBubbleType } from "./utils/types"
import styles from "./static/styles/commentBox.module.css"
import { HeartIcon, ReplyIcon } from "lucide-react"
import { ClassNameType } from "@/common/types/types"

export default function CommentBubble({ config, className }: { config: CommentBubbleType, className?: ClassNameType }) {
    return (
        <div className="flex flex-col">
            <div className={`bg-zinc-400 dark:bg-zinc-800 rounded-3xl rounded-ss-none relative ${config.textareaDisabled ? "w-fit min-w-[210px] pl-4 pr-[18px] pt-2.5 pb-4" : "px-4 pt-2.5 pb-3"}`}>
                {/* FRAGMENT ======================================== */}
                <span className={`-z-10 absolute top-0 left-0 h-8 w-10 bg-zinc-400 dark:bg-zinc-800 -translate-x-2 ${styles.commentBoxFragment}`} />

                {/* NAME ====================================== */}
                <div className="flex items-baseline justify-start gap-4 mb-2 mt-1">
                    <div className="font-medium dark:text-white/60">Kushal Kumar</div>
                    <span className="text-sm dark:text-zinc-500/95">{"Today"}</span>
                </div>

                {/* COMMENT BOX ===================================== */}
                {config.textareaDisabled ?
                    <span>{config.commentString}</span>
                    :
                    <textarea className="bg-transparent w-full h-[100px] sm:h-[120px] resize-none overflow-hidden outline-none focus:outline-none placeholder:text-zinc-500/60" value={config.textareaValue} onChange={(e) => config.handleInputChange(e.target.value)} placeholder={config.placeholder} name="new-comment" aria-label="new-comment" />
                }
            </div>
            <span className="my-2 px-3.5 dark:text-zinc-500 flex items-center justify-start gap-4 text-sm">
                <Likes totalLikes={0} isLiked={false} handleOnLike={() => { }} />
                <Reply disabled handleReply={() => { }} />
            </span>
        </div>
    )
}

const Likes = ({ totalLikes, isLiked, handleOnLike }: { totalLikes: number, isLiked: boolean, handleOnLike: () => void }) => {
    return (
        <span className="flex items-center justify-start gap-2 cursor-pointer transition-colors duration-300 hover:text-black dark:hover:text-white" onClick={handleOnLike}>
            <HeartIcon width={14} height={14} stroke={isLiked ? "#aa0000" : "currentColor"} fill={isLiked ? "#aa0000" : "#fff0"} />
            <span>{totalLikes || 0}</span>
        </span>
    )
}

const Reply = ({ disabled, handleReply }: { disabled: boolean, handleReply: () => void }) => {
    return (
        <span className={`flex items-center justify-start gap-2 ${disabled ? "cursor-default" : "cursor-pointer transition-colors duration-300 hover:text-black dark:hover:text-white"}`} onClick={disabled ? () => { } : handleReply}>
            <ReplyIcon width={17} height={17} />
            <span>{"Reply"}</span>
        </span>
    )
}
