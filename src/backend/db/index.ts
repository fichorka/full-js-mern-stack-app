import mongodb, { Db } from 'mongodb'
import { DB_NAME, MONGO_URI } from '../config/db'
import makeUsersDb from './users-db'
import makeItemsDb from './items-db'

const MongoClient = mongodb.MongoClient
const uri = String(MONGO_URI)
const dbName = DB_NAME
const client = new MongoClient(uri, { useNewUrlParser: true })

async function makeDb(): Promise<Db> {
    if (!client.isConnected()) {
        await client.connect()
    }
    return client.db(dbName)
}

const usersDb = makeUsersDb({ makeDb })

const itemsDb = makeItemsDb({ makeDb })

export { usersDb, itemsDb }
