import { User } from '../../entities/types'
import makeUser from '../../entities/user'
import { UsersDb } from '../types'

export default function makeAddUser({ usersDb }: Props) {
    return async function addUser(userInfo: User) {
        const user = makeUser(userInfo)
        const exists = await usersDb.findOneByUsername(user.username)
        if (exists) {
            throw new Error('Username is already taken.')
        }
        usersDb.insertOne(user)
    }
}

interface Props {
    usersDb: UsersDb
}
