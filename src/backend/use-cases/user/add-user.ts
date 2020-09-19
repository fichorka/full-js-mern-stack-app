import { UsersDb } from '../../db/types'
import { User } from '../../entities/types'
import makeUser from '../../entities/user'

export default function makeAddUser({ usersDb }: MakeProps): AddUser {
    const addUser: AddUser = async function ({ userInfo }) {
        const user = makeUser(userInfo)
        const exists = await usersDb.findOneByUsername(user.username)
        if (exists) {
            throw new Error('Username is already taken.')
        }
        await usersDb.insertOne(user)
        return user
    }

    return addUser
}

interface MakeProps {
    usersDb: UsersDb
}

export type AddUser = ({ userInfo }: AddProps) => Promise<User>

interface AddProps {
    userInfo: User
}
