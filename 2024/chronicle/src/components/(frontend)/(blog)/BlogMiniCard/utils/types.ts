import { BlogCardDataDocument } from "@/common/types/documents/documents"

export type BlogMiniCardDataType = { title: BlogCardDataDocument["title"], thumbnail: BlogCardDataDocument["thumbnail"], createdAt: BlogCardDataDocument["createdAt"] }