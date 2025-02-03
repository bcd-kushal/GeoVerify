'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CategoryTabType } from "./utils/types"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { ListIcon } from "lucide-react"


export default function CategoryTabs() {
    const categories: CategoryTabType[] = [
        { label: "All posts", link: "/" },
        { label: "SEO", link: "/category/seo" },
        { label: "Myself", link: "/category/myself" },
        { label: "Others", link: "/category/others" },
    ]

    const currPath = usePathname()

    return (
        <section>
            {/* NORMAL SLIDER ================================================= */}
            <div className="hidden sm:flex items-center justify-start gap-6 overflow-x-scroll pr-2 scrollbar-hide sm:pt-10">
                {categories.map(({ label, link }, index) => (
                    <Link href={link} key={index} className={`whitespace-nowrap py-3 px-1 transition-all duration-300 hover:text-black dark:hover:text-white ${link === currPath ? "text-black dark:text-white border-b-2 border-black dark:border-white" : "text-zinc-500"}`}>
                        {label}
                    </Link>
                ))}
            </div>

            {/* DRAWER ================================================= */}
            <div className="sm:hidden">
                <Drawer>
                    <DrawerTrigger className="min-w-fit">
                        <div className="cursor-pointer rounded-lg py-2 px-3 text-xs flex items-center gap-2 bg-gray-200 dark:bg-zinc-900 transition-colors duration-300">
                            <ListIcon height={14} width={14} className="-translate-y-[0.5px]" />
                            <span>Categories</span>
                        </div>
                    </DrawerTrigger>

                    <DrawerContent className="min-w-fit pb-4 pt-0 px-6 focus:outline-none outline-none">
                        <div className="flex flex-col items-stretch justify-start pt-4">
                            <span className="text-xl font-semibold mt-3 mb-5">All Categories</span>
                            {categories.map(({ label, link }, index) => (
                                <Link href={link} className={`rounded-lg py-2 ${link===currPath ? 'text-blue-600 dark:text-blue-500' : ''}`} prefetch key={index}>
                                    {link===currPath ? '• ' : ''}{label}
                                </Link>
                            ))}
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>
        </section>
    )
}