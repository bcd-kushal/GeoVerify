'use server'

export async function MonthlyViews({data}: {data:number[]}) {

    const MONTHS = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
    let VIEWS: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 0; i < VIEWS.length; i++)
        VIEWS[i] = (data && (i < MONTHS.length)) ? data[i] : 0

    // get current month ---------------------------
    const index = new Date().getMonth()
    const currMonth = MONTHS[index]
    const currMonthViews = VIEWS[index]

    // remove curr month from full list ---------------------------
    MONTHS.splice(index, 1)
    VIEWS.splice(index, 1)

    // sort month list ---------------------
    /* let sortedList: object[] = [], noViewsList: object[] = []
    for (let i = 0; i < VIEWS.length; i++) {
        const month = MONTHS[i]
        if (VIEWS[i] !== 0)
            sortedList.push([month, VIEWS[i]])
        else
            noViewsList.push([month, VIEWS[i]])
    }
    sortedList = [...sortedList, ...noViewsList] */


    return (
        <div className="flex items-center justify-start">
            <div className="pr-[6px] md:pr-2 flex justify-start gap-[10px] items-center border-r-[1px] border-[#63636330]">
                <span className="hidden md:block">Views</span>
                <span className="py-2 px-4 bg-[#0007] border-[1px] border-[#f6737330] whitespace-nowrap rounded-lg hover:text-[#f67373] hover:bg-[#f6737311] transition-colors cursor-default duration-300">{currMonth}: {currMonthViews}</span>
            </div>

            <div className="relative overflow-x-scroll pl-[6px] md:pl-2 flex gap-2 md:gap-3 items-center justify-start scrollbar-hide">
                {VIEWS.map((view, index) => (<span className="py-2 px-4 bg-[#0007] whitespace-nowrap rounded-lg hover:text-[#f67373] hover:bg-[#f6737309] border-[1px] border-transparent hover:border-[#f6737330] transition-all cursor-default duration-300" key={index}>{MONTHS[index]}: {view}</span>))}
            </div>
        </div>
    )
}