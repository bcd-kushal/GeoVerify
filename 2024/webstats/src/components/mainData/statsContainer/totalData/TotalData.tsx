'use server'
import { Accordion } from "@/components/templates/Accordion"
import { EveningSvg, LateNightSvg, MorningSvg, NightSvg } from "@/svgs/svgs"

const countryStats = [
    {
        continent: "Europe",
        total: "140",
        data: [
            { country: "Romania", views: 30 },
            { country: "France", views: 0 },
        ]
    },
    {
        continent: "Asia",
        total: "140",
        data: [
            { country: "India", views: 19 },
            { country: "S Korea", views: 21 },
        ]
    },
    /* {
        continent: "Africa",
        total: "140",
        data: [
            { country: "", views: "" },
            { country: "", views: "" },
            { country: "", views: "" },
        ]
    }, */
    {
        continent: "N America",
        total: "140",
        data: [
            { country: "Illinois", views: 62 },
            { country: "USA", views: 7 },
        ]
    },
    {
        continent: "S America",
        total: "140",
        data: [
            { country: "Brazil", views: 2},
            { country: "Chile", views: 47 },
        ]
    },
    {
        continent: "Australia",
        total: "140",
        data: [
            { country: "Australia", views: 34 },
        ]
    },
]

export async function TotalData() {
    return (
        <section className="flex flex-wrap items-stretch justify-between *:w-full *:md:w-1/2">

            {/* left section ---------------------------------------------- */}
            <section className="md:border-r-[1px] h-full md:border-[#63636330] md:pr-4">
                <Accordion title="Countries">
                    <div className="text-[#f6737373] py-4 grid items-center text-center">nivo continent heatmap</div>
                    <div className="flex items-start justify-between gap-3">

                        {/* left side --------------------------------------- */}
                        <article className="min-w-[180px]">
                            {/* continent grouping ------------------ */}
                            {countryStats.map((continent,index) => (
                                <div className="group/continent flex flex-col gap-1 items-stretch justify-start mt-5" key={index}>
                                    <span className=" text-[10px] tracking-[0.16em] text-[#f67373] *:tracking-[0.16em] *:text-[#f67373] flex justify-between">{continent.continent.toUpperCase()} <span className="group-hover/continent:opacity-100 opacity-0 transition-opacity duration-300">{continent.total}</span></span>
                                    <section className="pl-3 *:leading-relaxed">
                                        {continent.data.map((country,inner_index) => (
                                            <div className="flex justify-between items-start *:duration-300 *:transition-colors *:hover:text-[#f67373]" key={String(index)+String(inner_index)}>
                                                <span>{country.country}</span>
                                                <span>{country.views}</span>
                                            </div>
                                        ))}
                                    </section>
                                </div>
                            ))}
                        </article>


                        <div className="">chart</div>
                    </div>
                </Accordion>

                <Accordion title="Cities">
                    <span></span>
                </Accordion>

                <Accordion title="Platforms & browsers">
                    <span></span>
                </Accordion>
            </section>




            {/* right section -------------------------------- */}
            <section className="md:pl-4">
                <Accordion title="Date & month">
                    <span></span>
                </Accordion>

                <Accordion title="Timings">
                    <section className="mt-4">
                        <div className="flex gap-3 items-center justify-start *:px-3 *:py-1 *:cursor-pointer *:rounded-md *:text-xs">
                            <button className="hover:bg-[#f6737331] transition-colors duration-300">Overall</button>
                            <button className="hover:bg-[#f6737331] transition-colors duration-300">Weekly</button>
                            <button className="bg-[#f6737331] border border-[#f67373] hover:bg-[#f6737331] transition-colors duration-300">Monthly</button>
                        </div>
                        <div className="">
                            <div className="flex items-start justify-between mt-3 *:flex-1 *:aspect-square *:grid *:items-center *:h-full">
                                <div className="">
                                    <span className="cursor-pointer row-start-1 col-start-1 w-fit relative left-1/2 -translate-x-1/2 bg-[#121212] px-4 z-[2] before:content-['320'] before:text-[#f67373] before:absolute before:p-2 before:left-1/2 before:-translate-x-1/2 before:top-[100%] hover:after:content-['Morning'] hover:after:absolute hover:after:p-2 hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:top-[-150%]  after:opacity-0 hover:after:opacity-100 after:duration-500 after:text-xs after:transition-opacity"> <MorningSvg/> </span>
                                    <span className="row-start-1 col-start-1 border-t-[1.5px]  border-[#fff3] w-1/2 left-1/2 relative"></span>
                                </div>

                                <div className="">
                                    <span className="cursor-pointer row-start-1 col-start-1 w-fit relative left-1/2 -translate-x-1/2 bg-[#121212] px-4 z-[2] before:content-['2081'] before:text-[#f67373] before:absolute before:p-2 before:left-1/2 before:-translate-x-1/2 before:top-[100%] hover:after:content-['Evening'] hover:after:absolute hover:after:p-2 hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:top-[-150%]  after:opacity-0 hover:after:opacity-100 after:duration-500 after:text-xs after:transition-opacity"> <EveningSvg/> </span>
                                    <span className="row-start-1 col-start-1 border-t-[1.5px]  border-[#fff3] relative"></span>
                                </div>

                                <div className="">
                                    <span className="cursor-pointer row-start-1 col-start-1 w-fit relative left-1/2 -translate-x-1/2 bg-[#121212] px-4 z-[2] before:content-['202'] before:text-[#f67373] before:absolute before:p-2 before:left-1/2 before:-translate-x-1/2 before:top-[100%] hover:after:content-['Night'] hover:after:absolute hover:after:p-2 hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:top-[-150%]  after:opacity-0 hover:after:opacity-100 after:duration-500 after:text-xs after:transition-opacity"> <NightSvg/> </span>
                                    <span className="row-start-1 col-start-1 border-t-[1.5px]  border-[#fff3] relative"></span>
                                </div>

                                <div className="">
                                    <span className="cursor-pointer row-start-1 col-start-1 w-fit relative left-1/2 -translate-x-1/2 bg-[#121212] px-4 z-[2] before:content-['202'] before:text-[#f67373] before:absolute before:p-2 before:left-1/2 before:-translate-x-1/2 before:top-[100%] hover:after:content-['Overnight'] hover:after:absolute hover:after:p-2 hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:top-[-150%]  after:opacity-0 hover:after:opacity-100 after:duration-500 after:text-xs after:transition-opacity"> <LateNightSvg/> </span>
                                    <span className="row-start-1 col-start-1 border-t-[1.5px] w-1/2  border-[#fff3] relative"></span>
                                </div>
                            </div>
                        </div>
                    </section>

                </Accordion>

                <Accordion title="Users">
                    <div className="2">hello</div>
                    <div className="2">hello</div>
                </Accordion>
            </section>

        </section>
    )
}