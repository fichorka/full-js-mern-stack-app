import { ROLES } from './validationRules'

export default function makeRole(role: string | undefined): string {
    if (!role) {
        throw new Error('Role is required.')
    }

    if (!ROLES.includes(role)) {
        throw new Error(`Role is invalid.`)
    }

    return role
}
