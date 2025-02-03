import { CommandIcon, MessageCircleIcon, Settings2Icon, StarIcon, ThumbsUpIcon } from "lucide-react"
import { LINKS } from "@/common/links/staticLinks"
import { LinkListType } from "@/common/types/types"

export const settingsLinks: LinkListType = {
    top: [
        { label: 'Favorites', svg: <StarIcon height={16} width={16} />, link: LINKS.VIEWER.FAVORITES },
        { label: 'Comments', svg: <MessageCircleIcon height={16} width={16} />, link: LINKS.VIEWER.COMMENTS },
        { label: 'Likes', svg: <ThumbsUpIcon height={16} width={16} />, link: LINKS.VIEWER.LIKES }
    ],
    bottom: [
        { label: 'Settings', svg: <Settings2Icon height={16} width={16} />, link: LINKS.VIEWER.SETTINGS }
    ]
}