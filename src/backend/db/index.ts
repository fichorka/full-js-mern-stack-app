import mongodb, { Db } from 'mongodb'
import { DB_NAME, MONGO_URI } from '../config/db'
import makeUsersDb from './users-db'

const MongoClient = mongodb.MongoClient
const uri = String(MONGO_URI)
const dbName = DB_NAME
const client = new MongoClient(uri, { useNewUrlParser: true })

export async function makeDb(): Promise<Db> {
    if (!client.isConnected()) {
        await client.connect()
    }
    return client.db(dbName)
}

export const usersDb = makeUsersDb({
    makeDb,
    parseId: (id: string) => new mongodb.ObjectID(id)
})
