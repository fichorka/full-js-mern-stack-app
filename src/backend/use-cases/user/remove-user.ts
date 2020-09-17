import { UsersDb } from '../types'

export default function makeRemoveUser({ usersDb }: Props) {
    return async function removeUser(username: string) {
        const exists = await usersDb.findOneByUsername(username)
        if (!exists) {
            throw new Error('No user with such username.')
        }
        return usersDb.deleteOne(username)
    }
}

interface Props {
    usersDb: UsersDb
}
