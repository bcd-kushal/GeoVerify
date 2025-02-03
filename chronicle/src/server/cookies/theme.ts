'use server'
import { COOKIE_THEME_KEY } from "@/common/constants/cookieKeys"
import { ThemeType } from "@/common/types/types"
import { cookies } from "next/headers"

const DEFAULT_COOKIE_KEY = COOKIE_THEME_KEY
const DEFAULT_COOKIE_VALUE: ThemeType = 'light'

export const getThemeCookie = async () => {
    if (cookies().has(DEFAULT_COOKIE_KEY))
        return cookies().get(DEFAULT_COOKIE_KEY)?.value as ThemeType
    return DEFAULT_COOKIE_VALUE
}

export const setThemeCookie = async (theme: ThemeType) => {
    cookies().set(DEFAULT_COOKIE_KEY, theme)
}