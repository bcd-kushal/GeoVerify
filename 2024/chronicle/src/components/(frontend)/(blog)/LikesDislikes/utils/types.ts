export type LikesDislikesType = { likes: number, selected: LikeDislikeStateType, onLike: () => void, onDislike: () => void }

export type LikeDislikeStateType = 'like' | 'dislike' | 'none'