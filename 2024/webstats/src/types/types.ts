import React from "react"

export type ClassNameType       = string
export type SitesListType       = { name:string, subtitle:string, targetClassIndex:string }[]
export type AspectType          = {w:number,h:number}
export type ChildrenType        = Readonly<React.ReactNode>

export interface HighlightDataProps { 
    highlights: {
        cities: object,
        countries:  object,
        browsers: object,
        timeRanges: object,
        dates: object,
        platforms: object,
    },
    monthsViews: number[]
}

export interface HighlightsType {
    topCities: { [key:string]:number },
    topCountries: { [key:string]:number },
    topBrowsers: { [key:string]:number },
    topTimeRanges: { [key:string]:number },
    topDates: { [key:string]:number },
    topPlatforms: { [key:string]:number }
}

export interface DataProps {
    city:string|null,
    country:string|null,
    browser:string|null,
    platform:string|null,
    is_mobile:boolean,
    model:string|null,
    aspect:string|null,
    date:string,
    time:string
}

export type CleanDataType = {
    [key:string]: number
}

export type TimeSlotType        = 'morning' | 'evening' | 'night' | 'overnight'


export interface StatsContainerType { 
    dataAttrVal: string, 
    title: string, 
    link: string, 
    monthlyViews: number[], 
    highlightsData: any
}

interface TrafficDataObjectType {
    title: string,
    link: string, 
    highlightsData: object,
    allData: null,
    dataAttrVal: string,
    monthlyViews: number[]
}

export type TrafficDataType     = { [key:string]: TrafficDataObjectType }

export type AccordionType       = { title:string, children:ChildrenType }
// svgs =====================
export type SVGType             = { className?:ClassNameType, dimensions?: number|string, fill?:string, stroke?:string }