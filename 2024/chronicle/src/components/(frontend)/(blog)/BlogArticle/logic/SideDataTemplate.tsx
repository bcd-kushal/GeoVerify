import { ChildrenType } from "@/common/types/reactTypes"

export function SideDataTemplate({ title, gap, children }: { title: string, gap: number | string, children: ChildrenType }) {
    return (
        <section className={`flex flex-col justify-start mb-10 gap-4`}>
            <span className={`text-xl font-semibold md:font-normal md:text-sm text-black/80 dark:text-white md:text-black/45 md:dark:text-white/40`}>{title}</span>
            <div className={`flex flex-col justify-start ${gap}`}>
                {children}
            </div>
        </section>
    )
}