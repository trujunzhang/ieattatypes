export interface IFBUser {
    id: string
    createdAt: string
    updatedAt: string
    username: string
    password: string
    slug: string
    email: string
    loginType: string
    originalUrl?: string
    thumbnailUrl?: string
    url?: string
}
