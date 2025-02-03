'use server'
import "./StatsContainer.css"
import { MajorHighlights } from "./highlights/Highlights"
import { MonthlyViews } from "./monthlyViews/MonthlyViews"
import { LastEntry } from "./lastEntry/LastEntry"
import { TotalData } from "./totalData/TotalData"
import { DownloadSvg, RefreshSvg } from "@/svgs/svgs"
import { StatsContainerType } from "@/types/types"
import RefreshButton from "@/components/templates/Refresh"
import DownloadButton from "@/components/templates/Download"


export async function StatsContainer({ dataAttrVal, title, link, monthlyViews, highlightsData}:StatsContainerType) {


    return (
        <article className="flex-col items-stretch justify-start overflow-x-hidden scrollbar-hide article-width stats-box" data-site={dataAttrVal} data-active="false">
            {/* current selection header ------------------------- */}
            <div className="sticky top-0 pb-4 flex items-center justify-between border-b-[0.6667px] border-[#f6737350]">
                <div className="flex flex-col items-start justify-center gap-1" style={{width:"calc(100% - 60px)"}}>
                    <span className="text-2xl">{title}</span>
                    <a href={`https://${link}/`} className="text-xs truncate hover:underline hover:underline-offset-2 text-[#808080] hover:text-[#f6737373] transition-colors duration-200">{link}</a>
                </div>
                <div className="flex gap-2 items-center justify-end">
                    <DownloadButton/>
                    <RefreshButton/>
                </div>
            </div>
            <div className="overflow-y-scroll max-h-[calc(100%_-_68.67px)] relative scrollbar-hide py-5">
                <MonthlyViews data={monthlyViews} />
                <MajorHighlights topCities={highlightsData.cities} topCountries={highlightsData.countries} topBrowsers={highlightsData.browsers} topPlatforms={highlightsData.platforms} topDates={highlightsData.dates} topTimeRanges={highlightsData.timeRanges} />
                <LastEntry />
                <TotalData />
            </div>
        </article>
    )
}