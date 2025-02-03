import { getSlug } from "../utils/getSlug"

export const generateBlogLink = (str:string) => `/${getSlug(str)}`
export const generateCategoryLink = (str:string) => `/category/${getSlug(str)}`
