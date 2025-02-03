import moment from "moment"
import { DATE_FORMAT } from "@/common/constants/dateFormats"
import { CalendarIcon, ArrowLeftIcon } from "lucide-react"
import Title from "@/components/(frontend)/Title/Title"
import Tag from "@/components/(frontend)/Tag/Tag"
import Favorite from "../../Favorite/Favorite"
import Share from "../../Share/Share"
import { BlogTopHeadingType } from "../utils/types"
import { __emptyFunction__ } from "@/common/utils/__emptyFunction__"

export default function BlogTopHeading({ title, tag, date }: BlogTopHeadingType) {
    return (
        <section className="min-h-[310px] md:min-h-[260px] pb-16">
            <div className="mb-16 w-fit flex items-center text-sm gap-2 justify-start cursor-pointer transition-all duration-300 text-zinc-500 hover:text-black dark:hover:text-white"><ArrowLeftIcon height={12} width={12} /> <span>Back to Blog</span></div>
            <Title config={{ type: "text", label: title, variant: "blog" }} />
            <div className="text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3 sm:gap-2">
                <Tag label={tag} type="link" />
                <Favorite className="hidden sm:block" isSelected={false} onSelect={__emptyFunction__} svgDimensions={20} />
                <Share className="hidden sm:block" blogName={tag} svgDimensions={20} />
            </div>
            <div className="text-zinc-700 dark:text-zinc-400 text-xs pt-2 flex items-center justify-start gap-2 mt-2 md:hidden"><CalendarIcon height={15} width={15} /><span>{moment(date).format(DATE_FORMAT.FULL)}</span></div>
        </section>
    )
}