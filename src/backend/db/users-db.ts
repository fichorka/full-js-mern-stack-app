import { User } from '../entities/user/user'

export default function makeUsersDb({ makeDb, parseId }: Props): UsersDb {
    return {
        findAll,
        findOneById,
        insertOne
    }

    async function findOneById(id: string): Promise<User> {
        const db = makeDb()
        return await db.collection('users').findOne({ _id: parseId(id) })
    }

    async function findAll(): Promise<User[]> {
        const db = await makeDb()
        return await db.collection('users').find()
    }

    async function insertOne(user: User) {
        const db = await makeDb()
        return await db.collection('users').insertOne(user)
    }
}

interface Props {
    makeDb: CallableFunction
    parseId: CallableFunction
}

interface UsersDb {
    findAll: CallableFunction
    findOneById: CallableFunction
    insertOne: CallableFunction
}
