export const inThousands = (num: number) => {
    // million ------------------
    if (num >= 1_000_000)
        return `${(num / 1_000_000).toFixed(1)}M`
    
    // thousands ------------------
    if (num >= 1_000)
        return `${(num / 1000).toFixed(1)}K`

    return `${num}`
}