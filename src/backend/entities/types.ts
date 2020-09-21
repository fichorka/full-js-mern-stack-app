export interface User {
    _id?: string
    id?: string
    username?: string
    newUsername?: string
    password?: string
    role?: Role
    meta?: {
        createdOn?: string
        modifiedOn?: string
    }
}

export interface Item {
    _id?: string
    id?: string
    name?: string
    price?: number
    description?: string
    images?: string[]
}

export type Role = 'customer' | 'admin'
