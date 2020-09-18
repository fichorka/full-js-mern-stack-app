import { UsersDb } from '../../db/types'
import { User } from '../../entities/types'

export default function makeListUsers({ usersDb }: MakeProps) {
    const listUsers: ListUsers = async function () {
        const users = await usersDb.findAll()
        return users
    }

    return listUsers
}

interface MakeProps {
    usersDb: UsersDb
}

export type ListUsers = () => Promise<User[] | []>
