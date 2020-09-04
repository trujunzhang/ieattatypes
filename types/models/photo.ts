/**
 * IFBPhotoStatus:
 *   
 */
// export enum IFBPhotoStatus {
//     offline_unknown = 'offline_unknown',
//     offline_match = 'offline_match',
//     online_unknown = 'online_unknown',
//     online_match = 'online_match'
// }

/**
 * Firebase updated object
 * 
 */
export interface IFBPhotoUpdateStatus{
    // photo's status
    // status: IFBPhotoStatus
}

export interface IFBPhoto {
    // Base(5)
    uniqueId: string
    flag: string
    createdAt: string
    updatedAt: string
    creatorId?: string
    // user(2)
    username: string
    avatarUrl: string
    // Common(3)
    originalUrl: string
    thumbnailUrl: string
    url?: string
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
