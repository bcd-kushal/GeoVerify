import { getSlug } from "../utils/getSlug"
import { DOMAIN } from "../constants/domain"

const COMMON = `${DOMAIN}/api`

/**************************************************
** BLOGS **************
**************************************************/
export const GET_ALL_BLOGS_API_ROUTE    = ()            => `${COMMON}/blogs`
export const GET_BLOG_API_ROUTE         = (id:string)   => `${COMMON}/blogs/${getSlug(id)}`



/**************************************************
** FOOTER **************
**************************************************/



/**************************************************
** ANALYTICS **************
**************************************************/



/**************************************************
** THEME **************
**************************************************/
export const GET_THEME_API_ROUTE        = ()            => `${COMMON}/theme`