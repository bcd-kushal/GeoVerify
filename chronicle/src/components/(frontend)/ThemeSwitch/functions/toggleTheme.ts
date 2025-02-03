import { ThemeType } from "@/common/types/types"
import { setThemeCookie } from "@/server/cookies/theme"

export const toggleTheme = (theme: ThemeType) => {
    setThemeCookie(theme === 'dark' ? 'light' : 'dark')
}