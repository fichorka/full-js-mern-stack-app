import { PASSWORD_MIN_LEN, PASSWORD_MAX_LEN } from './validationRules'

export default function makePassword(password: string | undefined): string {
    if (!password) {
        throw new Error('Password is required.')
    }

    if (password.length < PASSWORD_MIN_LEN) {
        throw new Error(
            `Password is shorter than ${PASSWORD_MIN_LEN} characters.`
        )
    }

    if (password.length > PASSWORD_MAX_LEN) {
        throw new Error(
            `Password is longer than ${PASSWORD_MAX_LEN} characters.`
        )
    }

    return password
}
