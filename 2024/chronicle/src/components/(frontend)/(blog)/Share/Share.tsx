import { ClassNameType } from "@/common/types/types"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Share2Icon } from "lucide-react"
import Copy from "../../(atomic)/Copy/Copy"
import { DOMAIN } from "@/common/constants/domain"

export default function Share({ className, blogName, svgDimensions }: { className: ClassNameType, blogName: string, svgDimensions?: number }) {
    const SHARABLE_LINK = `${DOMAIN}/${blogName}`
    return (
        <Popover>
            <PopoverTrigger className={`p-2 cursor-pointer flex items-center justify-center ${className}`}>
                <Share2Icon width={svgDimensions || 18} height={svgDimensions || 18} name="share" />
            </PopoverTrigger>
            <PopoverContent className="flex flex-col items-stretch gap-1 justify-start p-3 pt-2.5 min-w-fit rounded-xl dark:border-white/30" collisionPadding={12}>
                <div className="flex items-center justify-between gap-2">
                    <span className="font-medium text-lg">Click to copy</span>
                    <Copy stringToCopy={SHARABLE_LINK} />
                </div>
                <input type="text" defaultValue={SHARABLE_LINK} disabled name="blog-link" aria-label="blog-link" className="border-none p-3 rounded-lg bg-zinc-500/15" />
            </PopoverContent>
        </Popover>
    )
}