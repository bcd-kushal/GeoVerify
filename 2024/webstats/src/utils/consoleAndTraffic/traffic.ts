'use client'

import { useEffect, useState } from "react"

export default function TrafficData() {
    const [ ip, setIP ] = useState('')
    const [ data, setData ] = useState({}) 
    useEffect(() => {
        
        // get IP ----------------------------------------
        const getTrafficAnalytics = async () => {
            fetch("https://api.ipify.org?format=json")
            .then(response => response.json())
            .then(data => { setIP(prev => ('ip' in data)? data.ip : "") })
            .catch(err => console.error("Failed to load ip"))
        }
        getTrafficAnalytics()

        // get battery ------------------------------------
        const getBatteryData = async () => {
            const data = ('getBattery' in navigator) ? await (navigator as any).getBattery() : ""
            setData(prev=>({
                ...prev,
                charging:('charging' in data) ? data.charging : null,
                percentage: ('level' in data) ? data.level*100 : null,
                willFullyChargeAfter: ('chargingTime' in data) ? typeof(data.chargingTime)==='number' ? data.chargingTime : null : null,
                willDischargeAfter: ('dischargingTime' in data) ? typeof(data.dischargingTime)==='number' ? data.dischargingTime : null : null
            }))
        }
        getBatteryData()
    
        // get architecture -------------------------------
        const getArchitecture = async () => {
            const userAgent = ('userAgent' in navigator) ? navigator.userAgent : ""
            if(Object.keys(userAgent).length===0){
                setData(prev=>({...prev,deviceModel: null,architecture: null}))
                return
            }
            let deviceModel:string|null = null
            let architecture:string|null = null
            if (/iPhone/.test(userAgent)) { deviceModel = "iPhone" } else if (/iPad/.test(userAgent)) { deviceModel = "iPad" } else if (/Android/.test(userAgent)) { deviceModel = "Android Device" } else if (/Macintosh/.test(userAgent)) { deviceModel = "Mac" }
            if(/x32/.test(userAgent)) { architecture = "32-bit" } else if (/x64/.test(userAgent)) { architecture = "64-bit" } else if (/x128/.test(userAgent)) { architecture = "128-bit" } else if (/x256/.test(userAgent)) { architecture = "256-bit" } else if (/x512/.test(userAgent)) { architecture = "512-bit" } else if (/x1024/.test(userAgent)) { architecture = "1024-bit" }
            setData(prev=>({
                ...prev,
                deviceModel: deviceModel,
                architecture: architecture
            }))
        }
        getArchitecture()

        // get space -------------------------------------
        const getSpace = async () => {
            let coord:{x:number|null,y:number|null,z:number|null} = { x:null, y:null, z:null }
            if(window.DeviceOrientationEvent) {
                window.addEventListener('deviceorientation',(e) => {
                    coord.x = e.beta
                    coord.y = e.gamma
                    coord.z = e.alpha
                },true)
            }
            let rates:{acceleration:DeviceMotionEventAcceleration |null,accNoGravity:DeviceMotionEventAcceleration |null,rotationRate:DeviceMotionEventRotationRate |null} = { acceleration:null, accNoGravity:null, rotationRate:null }
            if(window.DeviceMotionEvent) {
                window.addEventListener('devicemotion',(e) => {
                    [ rates.accNoGravity, rates.acceleration, rates.rotationRate ] = [ e.acceleration, e.accelerationIncludingGravity, e.rotationRate ]
                })
            }
            setData(prev=>({
                ...prev,
                space: coord.x ? coord : null,
                rates: rates.acceleration ? rates : null
            }))
        }
        getSpace()
        
        const restData = async () => {
            setData(prev=>({
                ...prev,
                maxBandwidth: ('connection' in navigator) ? (navigator as any).connection.downlink + "mbps" : null,
                networkType: ('connection' in navigator) ? (navigator as any).connection.effectiveType.toUpperCase() : null,
                platform: (('platform' in navigator) ? navigator.platform : false ) || ( ('userAgentData' in navigator) ? (navigator as any).userAgentData.platform : null ),
                latency: ('connection' in navigator) ? (navigator as any).connection.rtt + "ms" : null,
                height: window.screen.height,
                width: window.screen.width,
                pixelRatio: window.devicePixelRatio,
                isMobile: ('userAgentData' in navigator) ? (navigator as any).userAgentData.mobile : null,
                cpu_cores: ('hardwareConcurrency' in navigator) ? navigator.hardwareConcurrency : null,
                browser: ('userAgentData' in navigator) ? (navigator as any).userAgentData.brands.map((brand: { brand: any }) => brand.brand) : (/Safari/.test(navigator.userAgent)) ? ["Safari"] : [null],
                href: window.location.href,
                host: window.location.hostname,
                protocol: window.location.protocol,
                origin: window.location.origin
            }))
        }
        restData()

        return () => {}

    }, [])
    const dataToSend = {
        location: { ip: ip },

		network: {
			maxBandwidth: ('maxBandwidth' in data)? data.maxBandwidth : null,
			networkType: ('networkType' in data)? data.networkType : null,
			latency: ('latency' in data)? data.latency : null,
		},
		
		device: {
			platform: ('platform' in data)? data.platform : null,
			height: ('height' in data)? data.height : null,
			width: ('width' in data)? data.width : null,
			pixelRatio: ('pixelRatio' in data)? data.pixelRatio : null,
			isMobile: ('isMobile' in data)? data.isMobile : null,
			cpu_cores: ('cpu_cores' in data)? data.cpu_cores : null,
			browser: ('browser' in data)? data.browser : null,
			battery: {
                charging: ('charging' in data) ? data.charging : null,
			    percentage: ('percentage' in data) ? data.percentage : null,
			    willFullyChargeAfter: ('willFullyChargeAfter' in data) ? typeof(data.willFullyChargeAfter)==='number' ? data.willFullyChargeAfter : null : null,
			    willDischargeAfter: ('willDischargeAfter' in data) ? typeof(data.willDischargeAfter)==='number' ? data.willDischargeAfter : null : null,
            },
			architecture: ('architecture' in data)? data.architecture : null,
			model: ('deviceModel' in data)? data.deviceModel : null
		},

		origin: {
			href: ('href' in data)? data.href : null,
			host: ('host' in data)? data.host : null,
			protocol: ('protocol' in data)? data.protocol : null,
			origin: ('origin' in data)? data.origin : null
		}
    }
    
    const sendData = async () => {
        try {
            await fetch("https://kushal-server.vercel.app/user-traffic/stats",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataToSend)
            })
        }
        catch {}
    }    
    if(String(ip).length!==0)
        sendData()

    return(null)
}
