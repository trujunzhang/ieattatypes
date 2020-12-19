export interface IFBPeopleInEvent {
    // Base(5)
    uniqueId: string
    flag: string
    createdAt: string
    updatedAt: string
    creatorId: string
    // Common(1)
    recipes: string[]
    // point(3)
    restaurantId: string
    eventId: string
    userId: string
}
