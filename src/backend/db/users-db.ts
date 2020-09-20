import { ObjectID } from 'mongodb'
import { User } from '../entities/types'
import { MakeDb, UsersDb } from './types'

export default function makeUsersDb({ makeDb }: Props): UsersDb {
    return {
        findAll,
        findOneById,
        findOneByUsername,
        insertOne,
        deleteOne,
        updateOne
    }

    async function findOneById(id: ObjectID) {
        const db = await makeDb()
        return await db.collection('users').findOne({ _id: id })
    }

    async function findOneByUsername(username: string) {
        const db = await makeDb()
        return await db.collection('users').findOne({ username })
    }

    async function findAll() {
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

    async function updateOne(user: User) {
        const db = await makeDb()
        const result = await db
            .collection('users')
            .updateOne({ _id: user._id }, { $set: { ...user } })
        return result.modifiedCount > 0 ? user : null
    }
}

interface Props {
    makeDb: MakeDb
}
