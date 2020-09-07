export interface IFBUser {
    // Base(3)
    id: string
    createdAt: string
    updatedAt: string
    // Common(3)
    username: string
    slug: string
    email: string
    // Property(3)
    loginType: string
    originalUrl?: string
    thumbnailUrl?: string
}
