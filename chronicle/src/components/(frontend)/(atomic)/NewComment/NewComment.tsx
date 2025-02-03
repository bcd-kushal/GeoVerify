'use client'
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { CommentType } from "./utils/types"
import { useState } from "react"
import Avatar from "../Avatar/Avatar"
import CommentBubble from "../CommentBubble/CommentBubble"
import { __emptyFunction__ } from "@/common/utils/__emptyFunction__"
import Comment from "../../(blog)/Comment/Comment"

export default function NewComment({ children, blogTitle, onCancel, handleComment, className }: CommentType) {
    const [openComment, setOpenComment] = useState<boolean>(false)
    const [newComment, setNewComment] = useState<string>('')

    const updateComment = (str: string) => setNewComment(prev => str)

    return (
        <>
            <div onClick={() => setOpenComment(prev => true)} className={className || ""}>
                {children}
            </div>
            <Dialog open={openComment} onOpenChange={() => setOpenComment(prev => !prev)}>
                <DialogContent className="py-5 pr-5 pl-5.5 flex flex-col items-stretch justify-start rounded-lg gap-1.5 max-w-[95dvw] w-[500px]">
                    <span className="capitalize font-semibold text-2xl mt-2 truncate pr-8">{blogTitle.split("-").join(" ")}</span>
                    <span className="text-sm dark:text-zinc-500/90 mb-4">New comment</span>

                    <Comment newComment={true} comment={newComment} placeholder="Type a comment..." onEdit={updateComment} replies={[]} likes={0} id="" createdAt={new Date()} reader={{ id: "", name: "Kushal Kumar" }} />

                    <div className="flex items-center justify-end gap-4 mt-4 *:py-3 *:px-5 *:rounded-lg *:text-sm *:cursor-pointer *:transition-all *:duration-300">
                        <span className="text-zinc-500 hover:underline" onClick={() => setOpenComment(prev => false)}>Cancel</span>
                        <span className={`${newComment.length ? "bg-black dark:bg-white/90 hover:bg-black dark:hover:bg-white" : "bg-black/30 dark:bg-white/30"} text-white dark:text-black`}>Post comment</span>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}