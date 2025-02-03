import { ChildrenType } from "@/common/types/reactTypes"
import ReaderMobileNavigations from "@/components/(frontend)/(reader)/ReaderNavigation/ReaderMobileNavigation"
import ReaderPCNavigations from "@/components/(frontend)/(reader)/ReaderNavigation/ReaderPCNavigation"


export default async function ReaderPageLayout({ children }: { children: ChildrenType }) {
    return (
        <div className="relative sm:grid sm:grid-cols-[220px_auto]">
            <ReaderPCNavigations />
            <main className="px-3 sm:pl-7 sm:pr-0 sm:border-l-[1px] sm:dark:border-zinc-500/50 min-h-screen sm:min-h-[calc(100dvh_-_180px)]">
                {children}
            </main>

            {/* for mobile layout ---------------------*/}
            <ReaderMobileNavigations />
        </div>
    )
}
