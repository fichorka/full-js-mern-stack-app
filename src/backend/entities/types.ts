export interface User {
    _id?: string
    id?: string
    username?: string
    newUsername?: string
    password?: string
    role?: string
    meta?: {
        createdOn?: string
        modifiedOn?: string
    }
}
