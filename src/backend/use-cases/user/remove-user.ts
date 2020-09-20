import { UsersDb } from '../../db/types'

export default function makeRemoveUser({ usersDb }: Props): RemoveUser {
    const removeUser: RemoveUser = async function ({ username }) {
        const exists = await usersDb.findOneByUsername(username)
        if (!exists) {
            throw new Error('No user with such username.')
        }
        if (username) await usersDb.deleteOne(username)
        return username
    }

    return removeUser
}

interface Props {
    usersDb: UsersDb
}

export type RemoveUser = ({
    username
}: RemoveUserProps) => Promise<string | undefined>

interface RemoveUserProps {
    username: string | undefined
}
