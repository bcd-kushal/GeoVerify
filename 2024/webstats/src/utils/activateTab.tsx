'use client'
import { useEffect } from "react"

export default function ActivateTab({ activeTab }: { activeTab:string }) {
    useEffect(() => {
        document.querySelectorAll(".site-tab").forEach( tab => {
            const result = tab.querySelector(".site-name")?.textContent?.toLowerCase()===activeTab
            result ? tab.classList.add("active-aside") : tab.classList.contains("active-aside") ? tab.classList.remove("active-aside") : null
        })
    }, [])
    return (null)
}