'use server'
import { DockerIcon, GitHubSvg, LeftArrowSvg, NextJSIcon, SupabaseIcon, TSIcon, TailwindIcon, VercelIcon } from "@/svgs/svgs"
import ActivateTab from "@/utils/activateTab"
import Link from "next/link"

export default async function HomePage() {
	return (
		<>
			<section className="w-full h-fit relative top-1/4 -translate-y-1/4 flex flex-col items-start justify-start gap-2">
				<div className="my-3 pt-3 flex flex-col gap-1">
					<span className="text-xs mb-[-7px] text-[#bbb]">Introducing,</span>
					<h1 className="text-[50px] leading-[50px] font-medium my-2 text-[#ccc]">Webstats</h1>
					<h4 className="md:max-w-[420px] pt-1 text-lg leading-5 text-[#999]">A free open-source user traffic monitorance website to your various owned websites.</h4>
				</div>

				<div className="flex my-5 items-center gap-3 *:rounded-md *:py-2 *:px-3 *:text-sm">
					<Link href={"/portfolio"} className="border-[0.667px] border-[#f6737379] text-[#f6737399] hover:text-white hover:bg-[#f6737399] transition-colors duration-300">Check Portfolio</Link>
					<Link href={"https://github.com/bcd-kushal/Webstats/"} target="_blank" className="flex gap-2 items-center justify-center hover:bg-[#30303069] duration-300 transition-colors"><GitHubSvg dimensions={16} /> <span>GitHub</span></Link>
				</div>

				<div className="group/start mt-8 flex gap-4 items-center justify-start">
					<span className="group-hover/start:-translate-x-1 duration-200 transition-transform"><LeftArrowSvg dimensions={15} stroke="#bbb"  className="group-hover/start:stroke-[#fff] duration-200 transition-colors"/></span>
					<div className="flex flex-col">
						<span className="text-xs text-[#f6737369] group-hover/start:text-[#f6737399] duration-200 transition-colors">To get started,</span>
						<span className="text-lg text-[#bbb] group-hover/start:text-white duration-200 transition-colors">Click on one of the tabs to the side</span>
					</div>
				</div>
			</section>

			<article className="*:text-right *:italic absolute bottom-0 right-0 flex flex-col gap-1 mx-4 md:mx-8 max-w-[400px] text-xs text-gray-400 hover:text-white transition-colors duration-300">
				<span>Webstats is a passion project, powered by:</span>
				<span className="flex items-center justify-end gap-2">
					<NextJSIcon />
					<TSIcon/>
					<TailwindIcon/>
					<SupabaseIcon/>
					<DockerIcon/>
					<VercelIcon/>
				</span>
			</article>
			<ActivateTab activeTab="" />
		</>
	)
}
