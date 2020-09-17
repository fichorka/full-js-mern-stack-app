import { User } from '../entities/types'
import { UsersDb } from '../use-cases/types'

export default function makeUsersDb({ makeDb, parseId }: Props): UsersDb {
    return {
        findAll,
        findOneById,
        findOneByUsername,
        insertOne,
        deleteOne
    }

    async function findOneById(id: string): Promise<User> {
        const db = makeDb()
        return await db.collection('users').findOne({ _id: parseId(id) })
    }

    async function findOneByUsername(username: string) {
        const db = await makeDb()
        return await db.collection('users').findOne({ username })
    }

    async function findAll(): Promise<User[]> {
        const db = await makeDb()
        return await db.collection('users').find().toArray()
    }

    async function insertOne(user: User) {
        const db = await makeDb()
        return await db.collection('users').insertOne(user)
    }

    async function deleteOne(username: string) {
        const db = await makeDb()
        return await db.collection('users').deleteOne({ username })
    }
}

interface Props {
    makeDb: CallableFunction
    parseId: CallableFunction
}
