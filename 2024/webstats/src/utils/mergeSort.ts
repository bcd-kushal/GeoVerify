'use server'


export async function mergeSortDescendingWithLimit(obj:object, limit:number) {
    const entries = Object.entries(obj)

    function merge(left:any, right:any) {
        let result = []
        let leftIndex = 0
        let rightIndex = 0

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex][1] > right[rightIndex][1]) {
                result.push(left[leftIndex]);
                leftIndex++
            } else {
                result.push(right[rightIndex])
                rightIndex++
            }
        }

        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
    }

    function mergeSortRec(arr:any[]):any {
        if (arr.length <= 1) 
            return arr
        const mid = Math.floor(arr.length / 2)
        const left = arr.slice(0, mid)
        const right = arr.slice(mid)

        return merge( mergeSortRec(left), mergeSortRec(right) )
    }

    const sortedEntries = mergeSortRec(entries)
    const truncatedEntries = sortedEntries.slice(0, limit) 
    const sortedObject = Object.fromEntries(truncatedEntries)
    return sortedObject
}