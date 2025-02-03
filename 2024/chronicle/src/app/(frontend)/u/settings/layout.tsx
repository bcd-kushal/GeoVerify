import { ChildrenType } from "@/common/types/reactTypes"
import Title from "@/components/(frontend)/Title/Title"

export default async function ReaderCommentsLayout({ children }: { children: ChildrenType }) {
    return (
        <>
            <Title config={{ type: "text", label: "Settings", variant: "settings" }} />
            {children}
        </>
    )
}