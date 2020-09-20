import { UsersDb } from '../../db/types'
import { User } from '../../entities/types'

export default function makeListUsers({ usersDb }: MakeProps): ListUsers {
    const listUsers: ListUsers = async function (username) {
        const users = username
            ? await usersDb
                  .findOneByUsername(username)
                  .then((res) => (res ? [res] : []))
            : await usersDb.findAll()

        if (!users.length) {
            if (username) {
                throw new Error('No user with such username.')
            } else {
                throw new Error('No users to display.')
            }
        }

        return username ? users[0] : users
    }

    return listUsers
}

interface MakeProps {
    usersDb: UsersDb
}

export type ListUsers = (username?: string) => Promise<User | User[] | []>
