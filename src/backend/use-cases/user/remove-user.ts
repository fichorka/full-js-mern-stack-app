import { DeleteWriteOpResultObject } from 'mongodb'
import { UsersDb } from '../../db/types'

export default function makeRemoveUser({ usersDb }: Props): RemoveUser {
    const removeUser: RemoveUser = async function ({
        username
    }): Promise<DeleteWriteOpResultObject> {
        const exists = await usersDb.findOneByUsername(username)
        if (!exists) {
            throw new Error('No user with such username.')
        }
        return await usersDb.deleteOne(username)
    }

    return removeUser
}

interface Props {
    usersDb: UsersDb
}

export type RemoveUser = ({
    username
}: RemoveUserProps) => Promise<DeleteWriteOpResultObject>

interface RemoveUserProps {
    username: string
}
