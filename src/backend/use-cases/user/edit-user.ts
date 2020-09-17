import { UsersDb } from '../../db/types'
import { User } from '../../entities/types'
import makeUser from '../../entities/user'

export default function makeEditUser({ usersDb }: Props) {
    return async function editUser({
        username,
        ...changes
    }: User): Promise<User | null> {
        if (!username) {
            throw new Error('No username.')
        }

        if (!changes.role && !changes.password && !changes.newUsername) {
            throw new Error('No changes.')
        }

        if (changes.newUsername) {
            const exists = await usersDb.findOneByUsername(changes.newUsername)
            if (exists) {
                throw new Error('New username is already taken.')
            }
        }

        const existing = await usersDb.findOneByUsername(username)
        if (!existing) {
            throw new Error('No user with such Username')
        }

        const user = makeUser({ ...existing, ...changes })

        return await usersDb.updateOne(user)
    }
}

interface Props {
    usersDb: UsersDb
}
