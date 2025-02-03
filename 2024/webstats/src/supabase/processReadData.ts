import { TimeSlotType, HighlightDataProps, DataProps, CleanDataType } from "@/types/types"

async function getTimeslot(timestr:string):Promise<TimeSlotType> {
    /*  morning     06-12           evening     12-19
        night       20-00           overnight   00-06   */
    const hr = parseInt(timestr.substring(0,2))
    if(hr>=6 && hr<=11)         return 'morning'
    else if(hr>=12 && hr<=18)   return 'evening'
    else if(hr>=19 && hr<=23)   return 'night'
    return 'overnight'
}


export const getUsefulFormattedData = async (data:DataProps[]): Promise<HighlightDataProps> => {

    const MONTHS = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]

    let cityCount:CleanDataType     = {},
        countryCount:CleanDataType  = {},
        browserCount:CleanDataType  = {},
        rangeCount:CleanDataType    = {},
        dateCount:CleanDataType     = {},
        platformCount:CleanDataType = {}

    let monthsViews:number[] = [0,0,0, 0,0,0, 0,0,0, 0,0,0]

    for(let i=0;i<data.length;i++) {

        // count monthly views =======================================
        const month = data[i]['date'].substring(3,6)
        if(MONTHS.includes(month))
            monthsViews[MONTHS.indexOf(month)] += 1

        
        // count city ==============================================
        const city = data[i].city || ""
        cityCount[city] = (city in cityCount) ? 1+cityCount[city] : 1
        

        // count country ==============================================
        const country = data[i].country || ""
        countryCount[country] = (country in countryCount) ? 1+countryCount[country] : 1
     

        // count browser ==============================================
        let browser = data[i].browser || ""
        if(browser==='null' || browser==='Not?A_Brand' || browser==='' || browser===null || browser===undefined)     browser = 'Others'
        browserCount[browser] = (browser in browserCount) ? 1+browserCount[browser] : 1



        // count platform ==============================================
        const platform = data[i].platform
        const isMobile = data[i].is_mobile
        const model = data[i].model
        const aspect = data[i].aspect
        let actualModel = ''

        if(model==='iPhone')
            actualModel = 'iPhone'
        else if(model==='Android Device') {
            if(isMobile)    actualModel = 'Android phone'
            else            actualModel = 'Android tab'
        }
        else if(model==='Mac') {
            if(aspect==='8:5' || aspect==='3:2')    actualModel = 'Macbook'
            else                                    actualModel = 'Mac Desktop'
        }

        if(actualModel===''){
            if(platform?.includes('Win'))     actualModel = 'Windows PC'
            else                              actualModel = 'Linux PC'
        }
        
        platformCount[actualModel] = (actualModel in platformCount) ? 1+platformCount[actualModel] : 1
        


        // count dates ==============================================
        const date = data[i].date.substring(0,6)
        dateCount[date] = (date in dateCount) ? 1+dateCount[date] : 1


        // count time range =========================================
        const time = data[i].time
        const timeslot = await getTimeslot(time)

        rangeCount[timeslot] = (timeslot in rangeCount) ? 1+rangeCount[timeslot] : 1

    }
    

    return ({
        highlights: {
            cities: cityCount,
            countries: countryCount,
            browsers: browserCount,
            timeRanges: rangeCount,
            dates: dateCount,
            platforms: platformCount,
        },
        
        monthsViews: monthsViews,
    })

}



export const getCleanData = async (data:{data:object}) => {
    return null
}