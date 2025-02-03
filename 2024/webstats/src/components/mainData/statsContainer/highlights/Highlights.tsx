'use server'
import { HighlightsType } from "@/types/types"
import { mergeSortDescendingWithLimit } from "@/utils/mergeSort"

export async function MajorHighlights({ topCities, topCountries, topBrowsers, topTimeRanges, topDates, topPlatforms }: HighlightsType) {
    
    const LIMIT = 5

    const cities = await mergeSortDescendingWithLimit(topCities, LIMIT)
    const countries = await mergeSortDescendingWithLimit(topCountries, LIMIT)
    const browsers = await mergeSortDescendingWithLimit(topBrowsers, LIMIT)
    const timeranges = await mergeSortDescendingWithLimit(topTimeRanges, LIMIT)
    const dates = await mergeSortDescendingWithLimit(topDates, LIMIT)
    const platforms = await mergeSortDescendingWithLimit(topPlatforms, LIMIT)

    const capitalize = (str:string) => { return (str[0].toUpperCase() + str.slice(1)) }


    return (
        <section className="mt-4 mb-6 pt-2 flex flex-wrap md:flex-wrap gap-3 justify-stretch items-stretch *:min-w-full *:md:min-w-[310px] *:rounded-lg *:bg-[#2e2e2e40] *:py-4 *:px-5 *:flex-1 *:transition-colors *:duration-300 *:cursor-pointer *:flex *:flex-col *:md:flex-row *:items-center *:justify-stretch *:gap-4 *:md:gap-10">
            <div className="hover:bg-[#f6737322] group/tab">
                <div className="self-start md:self-center text-2xl md:max-w-[40%] mb-1 md:mb-0 group-hover/tab:text-[#f67373] transition-colors duration-300">Country</div>
                <div className="flex flex-col gap-1 items-stretch justify-center w-full">
                    {Object.entries(countries).map(([key, val],index) => (
                        (parseInt(val as string) > 0 && key !== 'null') ? (<span className="flex justify-between w-full *:text-[#fff7] *:hover:text-white *:transition-colors *:duration-300" key={index}> <span>{key}</span><span>{val}</span> </span>) : <span className="hidden" key={index}></span>
                    ))}
                </div>
            </div>


            <div className="hover:bg-[#f6737322] group/tab">
                <div className="self-start md:self-center text-2xl md:max-w-[40%] mb-1 md:mb-0 group-hover/tab:text-[#f67373] transition-colors duration-300">City</div>
                <div className="flex flex-col gap-1 items-stretch justify-center w-full">
                    {Object.entries(cities).map(([key, val],index) => (
                        (parseInt(val as string) > 0 && key !== 'null') ? (<span className="flex justify-between w-full *:text-[#fff7] *:hover:text-white *:transition-colors *:duration-300" key={index}> <span>{key}</span><span>{val}</span> </span>) : <span className="hidden" key={index}></span>
                    ))}
                </div>
            </div>


            <div className="hover:bg-[#f6737322] group/tab">
                <div className="self-start md:self-center text-2xl md:max-w-[40%] mb-1 md:mb-0 group-hover/tab:text-[#f67373] transition-colors duration-300">Browser</div>
                <div className="flex flex-col gap-1 items-stretch justify-center w-full">
                    {Object.entries(browsers).map(([key, val],index) => (
                        parseInt(val as string) > 0 ? (<span className="flex justify-between w-full *:text-[#fff7] *:hover:text-white *:transition-colors *:duration-300" key={index}> <span>{key}</span><span>{val}</span> </span>) : <span className="hidden" key={index}></span>
                    ))}
                </div>
            </div>

            <div className="hover:bg-[#f6737322] group/tab">
                <div className="self-start md:self-center text-2xl md:max-w-[40%] mb-1 md:mb-0 group-hover/tab:text-[#f67373] transition-colors duration-300">Time</div>
                <div className="flex flex-col gap-1 items-stretch justify-center w-full">
                    {Object.entries(timeranges).map(([key, val],index) => (
                        parseInt(val as string) > 0 ? (<span className="flex justify-between w-full *:text-[#fff7] *:hover:text-white *:transition-colors *:duration-300" key={index}> <span>{capitalize(key)}</span><span>{val}</span> </span>) : <span className="hidden" key={index}></span>
                    ))}
                </div>
            </div>


            <div className="hover:bg-[#f6737322] group/tab">
                <div className="self-start md:self-center text-2xl md:max-w-[40%] mb-1 md:mb-0 group-hover/tab:text-[#f67373] transition-colors duration-300">Date</div>
                <div className="flex flex-col gap-1 items-stretch justify-center w-full">
                    {Object.entries(dates).map(([key, val],index) => (
                        parseInt(val as string) > 0 ? (<span className="flex justify-between w-full *:text-[#fff7] *:hover:text-white *:transition-colors *:duration-300" key={index}> <span>{key}</span><span>{val}</span> </span>) : <span className="hidden" key={index}></span>
                    ))}
                </div>
            </div>


            <div className="hover:bg-[#f6737322] group/tab">
                <div className="self-start md:self-center text-2xl md:max-w-[40%] mb-1 md:mb-0 group-hover/tab:text-[#f67373] transition-colors duration-300">Platform</div>
                <div className="flex flex-col gap-1 items-stretch justify-center w-full">
                    {Object.entries(platforms).map(([key, val],index) => (
                        parseInt(val as string) > 0 ? (<span className="flex justify-between w-full *:text-[#fff7] *:hover:text-white *:transition-colors *:duration-300" key={index}> <span>{key}</span><span>{val}</span> </span>) : <span className="hidden" key={index}></span>
                    ))}
                </div>
            </div>
        </section>
    )
}