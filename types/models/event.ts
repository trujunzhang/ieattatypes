export interface IFBEvent {
    id: string
    uniqueId: string
    createdAt: string
    updatedAt: string
    creatorId: string
    restaurantId?: string | null
    // url: string
    displayName: string
    want: string
    start: string
    end: string
    flag: string
}
