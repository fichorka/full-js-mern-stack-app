import { USERNAME_MIN_LEN, USERNAME_MAX_LEN } from './validationRules'

export default function makeUsername(username: string): string {
    if (!username) {
        throw new Error('Username is required.')
    }

    if (username.length < USERNAME_MIN_LEN) {
        throw new Error(
            `Username is shorter than ${USERNAME_MIN_LEN} characters.`
        )
    }

    if (username.length > USERNAME_MAX_LEN) {
        throw new Error(
            `Username is longer than ${USERNAME_MAX_LEN} characters.`
        )
    }

    return username
}
