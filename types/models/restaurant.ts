export interface IFBRestaurant {
    // Base(5)
    uniqueId: string
    flag: string
    createdAt: string
    updatedAt: string
    creatorId: string | null
    // extra(1)
    extraNote: string
    // Check google(1)
    isNew: boolean
    // Location(3)
    geoHash: string
    latitude: number
    longitude: number
    // Common(4)
    displayName: string
    slug: string
    originalUrl: string
    thumbnailUrl: string
    // for review(2)
    rate: number
    reviewCount: number
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
