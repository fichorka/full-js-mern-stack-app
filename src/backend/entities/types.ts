export interface User {
    username: string
    password: string
    role: string
    meta?: {
        createdOn: string
    }
}
