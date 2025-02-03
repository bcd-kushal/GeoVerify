import { LikeDislikeStateType } from "./types"

const SELECTED_STYLES = {
    TEXT: 'text-blue-600',
    BG: 'bg-[#2563eb15] hover:bg-[#2563eb40]',
    BORDER: 'border-blue-500 dark:border-blue-800'
}
const DFEAULT_STYLES = {
    TEXT: 'text-black/70 dark:text-white/55 hover:text-white',
    BG: 'bg-transparent',
    BORDER: 'border-black/20 md:border-black/40 dark:border-white/10'
}

export const COMMON_STYLES              = 'flex items-center justify-center gap-2 text-[15px] border-[1.5px] cursor-pointer transition-all duration-300'
export const FULL_DEFAULT_STYLES        = `${DFEAULT_STYLES.BG} ${DFEAULT_STYLES.TEXT} ${DFEAULT_STYLES.BORDER}`
export const FULL_SELECTED_STYLES       = `${SELECTED_STYLES.BG} ${SELECTED_STYLES.TEXT} ${SELECTED_STYLES.BORDER}`



export const DEFAULT_SELECTED_STATE: LikeDislikeStateType = 'none'