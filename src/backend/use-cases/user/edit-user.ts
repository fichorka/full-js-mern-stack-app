import { UsersDb } from '../../db/types'
import { User } from '../../entities/types'
import makeUser from '../../entities/user'
import { UserChanges } from '../../routes/types'

export default function makeEditUser({ usersDb }: Props): EditUser {
    const editUser: EditUser = async function ({ username, changes }) {
        const existing = await usersDb.findOneByUsername(username)

        if (!existing) {
            throw new Error('No user with such Username')
        }

        if (!username) {
            throw new Error('No username.')
        }

        if (!changes.role && !changes.password && !changes.username) {
            throw new Error('No changes.')
        }

        if (changes.username) {
            const exists = await usersDb.findOneByUsername(changes.username)
            if (exists) {
                throw new Error('New username is already taken.')
            }
        }

        const user = await makeUser({
            userInfo: { ...existing, ...changes, meta: existing.meta },
            isPasswordHashed: Boolean(changes.password)
        })

        return await usersDb.updateOne(user)
    }

    return editUser
}

interface Props {
    usersDb: UsersDb
}

export type EditUser = ({
    username,
    changes
}: {
    username: string | undefined
    changes: UserChanges
}) => Promise<User | null>
