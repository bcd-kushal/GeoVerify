import { ImageDocument } from "@/common/types/documents/documents"
import { AvatarShadeType } from "@/common/types/types"

export type AvatarType = { readerName: string, dimensions: string, shade: AvatarShadeType, img ?: ImageDocument }