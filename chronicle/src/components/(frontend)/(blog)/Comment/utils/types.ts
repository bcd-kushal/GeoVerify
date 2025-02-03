import { CommentDocument } from "@/common/types/documents/documents"

export type CommentType =
    CommentDocument
    & ({ newComment: true, placeholder?: string, onEdit: (str: string) => void }
        | { newComment: false })