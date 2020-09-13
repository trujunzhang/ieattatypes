export interface IFBReview {
    // Base(5)
    uniqueId: string
    flag: string
    createdAt: string
    updatedAt: string
    creatorId: string
    // Common(2)
    rate: number
    body: string
    // user(2)
    username: string
    avatarUrl: string
    // point(4)
    reviewType: string
    restaurantId?: string
    eventId?: string
    recipeId?: string
}
