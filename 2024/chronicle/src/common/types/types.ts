
export type ClassNameType                   = string


export type ThemeType                       = 'light' | 'dark'
export type SocialLinkType                  = { label: string | JSX.Element, link:string }
export type CategoryLinkType                = { label: string, link:string }
export type SVGType                         = { width?: number | string, height?: number | string, fill?:string, name?: string, stroke?:string, className?:string }


export type SSGBlogStaticParamType          = Array<{ blogId: string }>



export type NextResponseType                = { status: boolean, data: any | null, count?: number } 



export type AvatarShadeType                 = 'orange' | 'emerald' | 'sky' | 'fuchsia' | 'yellow'




export type LinkListType                    = {
                                                top: { label: string, svg: JSX.Element, link: string }[],
                                                bottom: { label: string, svg: JSX.Element, link: string }[]
                                            }