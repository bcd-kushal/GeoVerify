import { WhatsappSVG } from "@/common/svgs/svg";
import { SocialLinkType } from "@/common/types/types";
import { GithubIcon, GlobeIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { FooterLinksType } from "./utils/types";

export default async function Footer() {
    const socialLinks: SocialLinkType[] = [
        { label: < WhatsappSVG className="fill-zinc-500 group-hover:fill-black dark:group-hover:fill-white transition-colors duration-300" width={18} height={18} name="whatsapp"/>,  link: "https://wa.me" },
        { label: <LinkedinIcon className="stroke-zinc-500 group-hover:stroke-black dark:group-hover:stroke-white transition-colors duration-300" width={18} height={18} name="linkedin"/>,  link: "https://linkedin.com" },
        { label: <GlobeIcon className="stroke-zinc-500 group-hover:stroke-black dark:group-hover:stroke-white transition-colors duration-300" width={18} height={18} name="portfolio" />,   link: "https://shubhamsharma.vercel.app" },
        { label: <GithubIcon className="stroke-zinc-500 group-hover:stroke-black dark:group-hover:stroke-white transition-colors duration-300" width={18} height={18} name="github" />,     link: "https://github.com" },
    ]

    const footerLinks: FooterLinksType = [
        {
            title: "Myself", links: [
                { label: "Portfolio", link: "#" },
                { label: "Resume", link: "#" },
                { label: "Email", link: "#" },
            ]
        },
        {
            title: "Blogs", links: [
                { label: "All blogs", link: "/" },
                { label: "SEO blogs", link: "/category/seo" },
                { label: "Myself", link: "/category/myself" },
                { label: "Others", link: "/category/others" },
            ]
        },
    ]

    const subtitle = 'SEO Executive at AreInfotech'

    return (
        <div className="pt-5 pb-20 sm:pb-14 sm:pt-7 border-t-[1px] border-black/20 dark:border-white/20 dark:bg-[#12121290]">
            <footer className="relative left-1/2 -translate-x-1/2 max-w-[1200px] px-[12px] min-[1200px]:px-0 flex flex-col sm:flex-row gap-3 items-stretch sm:items-start justify-start sm:justify-between">
                {/* left side -------------------------------------- */}
                <section className="flex items-start flex-col justify-start">
                    <span className="font-medium text-lg">Shubham Sharma <span className="text-gray-700 dark:text-gray-500 text-sm">&copy; {new Date().getFullYear()}</span></span>
                    <Link href={"https://linkedin.com"} target="_blank" className="text-sm text-blue-700 dark:text-blue-500 hover:underline hover:underline-offset-2">{subtitle}</Link>

                    <div className="flex gap-4 items-end justify-start mt-10 mb-5 sm:mb-0 sm:mt-16">
                        {socialLinks.map(({ label, link }, index) => (
                            <Link href={link} target="_blank" key={index} className="p-1 group">{label}</Link>
                        ))}
                    </div>
                </section>


                {/* right side -------------------------------------- */}
                <section className="flex items-start gap-0 sm:gap-14 justify-start sm:justify-end *:w-1/2 sm:*:w-auto *:sm:min-w-fit flex-wrap">
                    {footerLinks.map(({ title, links }, index) => (
                        <div className="flex flex-col justify-start gap-1 md:pl-3 pr-7" key={index}>
                            <span className="font-medium text-lg mb-1">{title}</span>
                            {links.map(({ label, link }, index2) => (
                                <Link href={link} className="text-zinc-500 dark:text-zinc-500 transition-colors duration-300 hover:text-black dark:hover:text-white cursor-pointer" key={index2}>{label}</Link>
                            ))}
                        </div>
                    ))}
                </section>
            </footer>
        </div>
    )
}