import { ChildrenType } from "@/common/types/reactTypes"

export default async function AdminLayout({ children }: { children: ChildrenType }) {
    return (
        <>
            {children}
        </>
    )
}