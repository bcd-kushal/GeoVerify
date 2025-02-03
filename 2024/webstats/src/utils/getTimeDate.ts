


// date and time ======================================================
function getTimeDate() {
    const fixSpacing = (n:number) => { return n.toString().length===1? '0'+String(n) : String(n) }
    const time = new Date()
    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return(`[${fixSpacing(time.getDate())}-${MONTHS[time.getMonth()]},${fixSpacing(time.getHours())}:${fixSpacing(time.getMinutes())}:${fixSpacing(time.getSeconds())}]`)
}

