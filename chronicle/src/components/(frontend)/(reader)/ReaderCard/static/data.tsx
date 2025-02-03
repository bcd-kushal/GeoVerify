import { StarIcon, MessageCircleIcon, ThumbsUpIcon, Settings2Icon } from "lucide-react"

export const readerActions = ({ favorite, comment, like, setting }: { favorite: string, comment: string, like: string, setting: string }) => [
    { label: "Favorites",   link: favorite,  svg: <StarIcon height={20} width={20} className="transition-all duration-300 group-hover:stroke-white sm:group-hover:stroke-yellow-600" /> },
    { label: "Comments",    link: comment,   svg: <MessageCircleIcon height={20} width={20} className="transition-all duration-300 group-hover:stroke-white sm:group-hover:stroke-green-700" /> },
    { label: "Likes",       link: like,      svg: <ThumbsUpIcon height={20} width={20} className="transition-all duration-300 group-hover:stroke-white sm:group-hover:stroke-blue-500" /> },
    { label: "Settings",    link: setting,   svg: <Settings2Icon height={20} width={20} className="transition-all duration-300 group-hover:stroke-white" /> },
]