import { AspectType } from "@/types/types"

// aspect ratio ======================================================

export const getAspect = ({w,h}:AspectType) => {
    const gcd = (a:number, b:number):number => { return b === 0 ? a : gcd(b, a % b) }
    const divisor = gcd(w, h)
    const numerator = w / divisor
    const denominator = h / divisor
    return `${numerator}:${denominator}`
}