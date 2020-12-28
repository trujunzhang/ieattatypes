export interface IFBRecipe {
    // Base(5)
    uniqueId: string
    flag: string
    createdAt: string
    updatedAt: string
    creatorId: string
    // Common(1)
    displayName: string
    price: string
    originalUrl: string
    thumbnailUrl: string
    // for review(2)
    rate: number
    reviewCount: number
    // point(1)
    restaurantId: string
}
