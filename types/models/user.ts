export interface IFBUser {
    id: string
    createdAt: string
    updatedAt: string
    // Common(4)
    username: string
    password: string
    slug: string
    email: string
    // Property(4)
    loginType: string
    originalUrl?: string
    thumbnailUrl?: string
}
