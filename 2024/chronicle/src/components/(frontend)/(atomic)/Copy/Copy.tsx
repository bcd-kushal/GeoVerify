'use client'
import { ClassNameType } from "@/common/types/types"
import { CheckIcon, CopyIcon, LoaderCircleIcon } from "lucide-react"
import { useEffect, useState } from "react"

export default function Copy({ stringToCopy, className }: { stringToCopy: string, className?: ClassNameType }) {
    const [isCopied, setIsCopied] = useState<boolean>(false)

    const handleClipboardCopy = () => {
        try {
            navigator.clipboard.writeText(stringToCopy)
        } finally {
            setIsCopied(prev => true)
        }
    }

    useEffect(() => {
        if (isCopied) {
            const timeout = setTimeout(() => setIsCopied(prev => false), 1500)
            return () => clearTimeout(timeout)
        }
    }, [isCopied])

    return (
        <div onClick={!isCopied ? handleClipboardCopy : () => { }} className={`transition-all duration-300 rounded-md flex items-center justify-center p-[11px] ${isCopied ? "hover:bg-transparent dark:hover:bg-transparent" : "cursor-pointer hover:bg-black/10 dark:hover:bg-white/10"} ${className || ""} `}>
            {
                isCopied ? <CheckIcon width={18} height={18} stroke="#00aa00" />
                    : <CopyIcon width={18} height={18} />
            }
        </div>
    )
}