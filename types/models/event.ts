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
    // point(1)
    restaurantId: string
}
