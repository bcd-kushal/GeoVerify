import "./globals.css"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import { BottomGridSvg, TopGridSvg } from "@/svgs/svgs"
import { Header } from "@/components/header/Header"
import { Footer } from "@/components/footer/Footer"
import { SiteList } from "@/components/siteList/SiteList"
import { AsciiBanner } from "@/utils/consoleAndTraffic/console"
import TrafficData from "@/utils/consoleAndTraffic/traffic"
import webstatsLogo from "@/app/favicon.png"

const inter = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Webstats: Kushal Kumar Saha",
	description: "Webstats: Kushal Kumar Saha",
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			{/* favicon ----------------- */}
			<head><link rel="shortcut icon" href={webstatsLogo.src} /></head>

			{/* layout ------------------ */}
			<body className="scrollbar-hide grid">
			
				{/* grid svgs */}
				<section className="row-start-1 col-start-1">
					<span className="fixed top-0 left-0"><TopGridSvg /></span>
					<span className="fixed bottom-0 right-0"><BottomGridSvg /></span>
				</section>

				{/* main content */}
				<section className="row-start-1 col-start-1 flex flex-col items-stretch gap-0 max-w-[1280px] relative left-1/2 -translate-x-1/2">
					<Header />
					<div className={`px-4 md:px-8 h-[calc(100dvh_-_243px)] md:h-[calc(100dvh_-_202px)] overflow-hidden flex flex-col gap-5 md:pt-4 md:gap-6 md:flex-row items-stretch justify-start md:justify-stretch w-full relative`} >
						<SiteList />
						{children}
					</div>
					<Footer />
				</section>

				{/* ascii banner + user traffic data */}
				<AsciiBanner/>
				<TrafficData/>
			</body>
		</html>
	)
}
