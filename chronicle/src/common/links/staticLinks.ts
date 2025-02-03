const ADMIN_ROOT = `/${process.env.NEXT_PUBLIC_ADMIN_ROOT}`

export const LINKS = {
    HOMEPAGE: '/',

    VIEWER : {
        FAVORITES: '/u/favorites',
        COMMENTS: '/u/comments',
        LIKES: '/u/likes',
        
        SETTINGS: '/u/settings',
    },

    ADMIN: {
        _DEFAULT: `${ADMIN_ROOT}/blogs`,

        ROOT: ADMIN_ROOT,

        BLOGS: `${ADMIN_ROOT}/blogs`,
        FOOTER: `${ADMIN_ROOT}/footer`,
        DASHBOARD: `${ADMIN_ROOT}/dashboard`,
        ANALYTICS: `${ADMIN_ROOT}/analytics`,
    }
}

export const DB_ROUTE = {
    BLOGS: `./src/server/db/data/blogs.db`
}