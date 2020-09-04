export interface IFBRestaurant {
    // Base(5)
    uniqueId: string
    flag: string
    createdAt: string
    updatedAt: string
    creatorId: string | null
    // Location(3)
    geoHash: string
    latitude: number
    longitude: number
    // Common(3)
    displayName: string
    originalUrl: string
    thumbnailUrl: string
    // extra
    extraNote: string
    // Check google
    isNew: boolean
    // Google api(8)
    address: string
    street_number: string
    route: string
    locality: string
    sublocality: string
    country: string
    postal_code: string
    administrative_area: string
}
