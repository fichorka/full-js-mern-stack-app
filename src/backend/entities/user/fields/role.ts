import { Role } from '../../types'
import { ROLES } from './validationRules'

export default function makeRole(role: Role | undefined): Role {
    if (!role) {
        throw new Error('Role is required.')
    }

    if (!ROLES.includes(role)) {
        throw new Error(`Role is invalid.`)
    }

    return role
}
