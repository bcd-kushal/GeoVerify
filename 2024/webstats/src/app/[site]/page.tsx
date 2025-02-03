'use server'
import { readSupabase } from "@/supabase/readSupa"
import { getUsefulFormattedData } from "@/supabase/processReadData"
import { getCleanData } from "@/supabase/processReadData"
import { StatsContainer } from "@/components/mainData/statsContainer/StatsContainer"
import ActivateTab from "@/utils/activateTab"


export default async function WebstatsPage({ params }: { params: { site: string } }) {

    const SITES_LIST = [
        { name: "Portfolio",    subtitle:"portfolio.kushalkumarsaha.com",   targetClassIndex:"traffic-portfolio" },
        { name: "Services",     subtitle:"services.kushalkumarsaha.com",    targetClassIndex:"traffic-services" },
        { name: "Stats",        subtitle:"stats.kushalkumarsaha.com",       targetClassIndex:"traffic-stats" },
    ]

    const sitesArray = SITES_LIST.map(site => site.name.toLowerCase())

    // check route is correct or not ------------------->
    const currRoute = params.site
    if (!sitesArray.includes(currRoute)) {
        throw new Error("Wakata")
    }

    const arr = SITES_LIST.filter(site => site.name.toLowerCase()===currRoute)[0]
    if (arr === undefined) {
        throw new Error("Wakata")
    }

    // pure route, process data ------------------->

    const name = arr.name
    const subtitle = arr.subtitle
    const lowerCaseName = name.toLowerCase()
    const dbData = await readSupabase({ tableName: `traffic-${lowerCaseName}` })

    // console.log(parseInt(String(Math.random()*100)) + ". " + dbData.map( data => data.date.substring(0,6)))

    const title = name
    const link = subtitle
    const dataAttrVal = lowerCaseName
    
    const allData = await getCleanData(dbData as any)
    
    const usefulData = await getUsefulFormattedData(dbData as any[])
    const monthlyViews = usefulData.monthsViews
    const highlightsData = usefulData.highlights
    
    return (
        <>
            <ActivateTab activeTab={lowerCaseName} />
            <StatsContainer
                title={title}
                link={link}
                monthlyViews={monthlyViews}
                highlightsData={highlightsData}
                // allData=		{allData} 
                dataAttrVal={dataAttrVal}
            />
        </>
    )

}
