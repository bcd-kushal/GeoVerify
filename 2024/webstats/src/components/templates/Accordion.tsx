'use client'
import { ChevronDownSvg } from "@/svgs/svgs"
import { AccordionType } from "@/types/types"
import { useState, useEffect, useRef } from "react"


export function Accordion({ title, children }:AccordionType) {
    const [isOpen, setIsOpen] = useState(false)
    const thisAccordion       = useRef(null)
    useEffect(() => {
        if(thisAccordion.current) {
            const el = thisAccordion.current as HTMLElement
            const fullHeight = el.getBoundingClientRect().height + (el.querySelector(".accordion-body")?.getBoundingClientRect().height || 0)
            
            // reveal or hide accordion data --------------------
            el.animate({
                height: isOpen ? (fullHeight + 30) + "px" : "60px",
            }, { duration: 500, fill:"forwards" })

            // highlight header ---------------------------------
            el.querySelector(".accordion-header")?.animate({
                background: isOpen ? "#ededed10" : "transparent"
            }, { duration:250, fill:"forwards" })

            // rotate arrow -------------------------------------
            el.querySelector(".chev")?.animate({
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
            }, { duration:250, fill:"forwards" })
        }
    }, [isOpen])
    return (
        <div ref={thisAccordion} onClick={()=>setIsOpen(prev=>!prev)} className=" flex flex-col items-stretch justify-stretch overflow-y-hidden h-[60px] w-full rounded-lg">
            <div className="accordion-header leading-[60px] px-4 flex items-center justify-between cursor-pointer duration-300 hover:bg-[#ededed10] rounded-lg mb-2" data-open="false">
                <span style={{fontSize:"20px"}}>{title}</span>
                <span className="chev" data-rotate="0"><ChevronDownSvg/></span>
            </div>
            <section className="accordion-body px-4">
                {children}
            </section>
        </div>
    )
}