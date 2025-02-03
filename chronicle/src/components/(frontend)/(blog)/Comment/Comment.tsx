'use client'
import Avatar from "../../(atomic)/Avatar/Avatar"
import CommentBubble from "../../(atomic)/CommentBubble/CommentBubble"
import { CommentBubbleType } from "../../(atomic)/CommentBubble/utils/types"
import { DEFAULT_PLACEHOLDER } from "./utils/constants"
import { CommentType } from "./utils/types"

export default function Comment(props: CommentType) {
    const { newComment, comment, reader: { id: readerId, name: readerName, pfp: readerPfp } } = props

    const config: CommentBubbleType =
        newComment ? { textareaDisabled: false, textareaValue: comment, handleInputChange: props.onEdit, placeholder: props.placeholder || DEFAULT_PLACEHOLDER }
            : { textareaDisabled: true, commentString: comment }

    return (
        <section className="grid grid-cols-[40px_auto] sm:grid-cols-[45px_auto] gap-4">
            <Avatar readerName="Kushal" shade="emerald" img={{ url: "https://github.com/bcd-kushal.png", alt: "" }} dimensions={"w-[40px] h-[40px] sm:w-[45px] sm:h-[45px]"} />
            <CommentBubble config={config} />
        </section>
    )
}