export interface IFBEvent {
    // Base(5)
    uniqueId: string
    flag: string
    createdAt: string
    updatedAt: string
    creatorId: string
    // Common(4)
    displayName: string
    want: string
    start: string
    end: string
    // for review(2)
    rate: number
    reviewCount: number
    // point(1)
    restaurantId: string
}
