import { ChildrenType } from "@/common/types/reactTypes"
import Title from "@/components/(frontend)/Title/Title"

export default async function ReaderFavoritesLayout({ children }: { children: ChildrenType }) {
    return (
        <>
            <Title config={{ type: "text", label: "Favorites", variant: "settings" }} />
            {children}
        </>
    )
}