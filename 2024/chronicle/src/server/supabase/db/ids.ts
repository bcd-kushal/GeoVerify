import { TableNamesType } from "./tables"

export const TABLE_ID_PRE: Record<keyof TableNamesType, string> = {
    BLOG_ATOMIC_TABLE:      'bla',
    BLOG_CARD_TABLE:        'blc',
    BLOG_COMMENTS_TABLE:    'blk',
    BLOG_FULL_TABLE:        'blf',
    BLOG_METRICS_TABLE:     'blm',
    COMMENTS_TABLE:         'cmt',
    IMAGES_TABLE:           'img',
    READER_ATOMIC_TABLE:    'rda',
    READER_FULL_TABLE:      'rdf',
    READER_PROFILE_TABLE:   'rdp',
    TAGS_TABLE:             'tag',
}