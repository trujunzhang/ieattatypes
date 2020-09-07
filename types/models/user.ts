export interface IFBUser {
    id: string
    createdAt: string
    updatedAt: string
    // Common(3)
    username: string
    slug: string
    email: string
    // Property(4)
    loginType: string
    originalUrl?: string
    thumbnailUrl?: string
}
