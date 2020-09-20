import { Role } from '../entities/types'

export interface UserChanges {
    username?: string
    password?: string
    role?: Role
}
