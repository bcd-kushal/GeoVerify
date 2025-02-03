'use server'
import { SITES_LIST } from "@/data/sitesOnPreview"
import { readSupabase } from "@/supabase/readSupa"
import { getUsefulFormattedData } from "@/supabase/processReadData"
import { StatsContainer } from "./statsContainer/StatsContainer"
import { getCleanData } from "@/supabase/processReadData"
import { TrafficDataType } from "@/types/types"


export async function MainData() {

    let trafficData:TrafficDataType = {}

    for(let i=0;i<SITES_LIST.length;i++) {
        const name = SITES_LIST[i].name 
        const subtitle = SITES_LIST[i].subtitle
        const lowerCaseName = name.toLowerCase()
        const dbData = await readSupabase({tableName:`traffic-${lowerCaseName}`})
    
        const usefulData = await getUsefulFormattedData(dbData as any[])
    
        trafficData[lowerCaseName] = {
            title: name,
            link: subtitle,
            monthlyViews: usefulData.monthsViews,
            highlightsData: usefulData.highlights,
            allData: await getCleanData(dbData as any),
            dataAttrVal: lowerCaseName
        }
    }

    return (
        <main className="relative grid">
            { Object.entries(trafficData).map( (data,index) => (
                <StatsContainer
                    title=			{data[1].title} 
                    link=			{data[1].link} 
                    monthlyViews=	{data[1].monthlyViews} 
                    highlightsData=	{data[1].highlightsData} 
                    // allData=		{data[1].allData} 
                    dataAttrVal=	{data[1].dataAttrVal}
                    key             = {index}
                />
            )) }
        </main>
    )
}