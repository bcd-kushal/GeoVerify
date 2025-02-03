import { ChildrenType } from "@/common/types/reactTypes"
import { ClassNameType } from "@/common/types/types"

export type CommentType = {
    blogTitle: string
    onCancel: () => void, handleComment: () => void
    children: ChildrenType, className?: ClassNameType
}