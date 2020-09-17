import { DeleteWriteOpResultObject } from 'mongodb'
import { UsersDb } from '../../db/types'

export default function makeRemoveUser({ usersDb }: Props) {
    return async function removeUser(
        username: string
    ): Promise<DeleteWriteOpResultObject> {
        const exists = await usersDb.findOneByUsername(username)
        if (!exists) {
            throw new Error('No user with such username.')
        }
        return await usersDb.deleteOne(username)
    }
}

interface Props {
    usersDb: UsersDb
}
