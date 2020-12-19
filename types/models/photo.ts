export interface IFBPhoto {
    // Base(5)
    uniqueId: string
    flag: string
    createdAt: string
    updatedAt: string
    creatorId: string
    // user(2)
    username: string
    avatarUrl: string
    // Common(3)
    originalUrl: string
    thumbnailUrl: string
    // extra
    extraNote: string
    // point(4)
    photoType: string
    restaurantId?: string
    recipeId?: string
    userId?: string
    // Location(3)
    geoHash: string
    latitude: number
    longitude: number
    // photo's status
    // status: IFBPhotoStatus
    // offline(1)
    offlinePath: string
}
