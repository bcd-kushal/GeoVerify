export const getSlug = (str: string): string =>
    str.replace(/[^a-zA-Z0-9]/g, ' ').split(' ').filter(x => x.trim() !== '').join('-').toLowerCase()