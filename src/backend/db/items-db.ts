import { ObjectID } from 'mongodb'
import { Item } from '../entities/types'
import { ItemsDb, MakeDb } from './types'

export default function makeItemsDb({ makeDb }: Props): ItemsDb {
    return {
        findAll,
        findOneById,
        findOneByName,
        insertOne,
        deleteOneByName,
        updateOne
    }

    async function findOneById(id: ObjectID) {
        const db = await makeDb()
        return await db.collection('items').findOne({ _id: id })
    }

    async function findOneByName(name: string) {
        const db = await makeDb()
        return await db.collection('items').findOne({ name })
    }

    async function findAll() {
        const db = await makeDb()
        return await db.collection('items').find().toArray()
    }

    async function insertOne(item: Item) {
        const db = await makeDb()
        return await db.collection('items').insertOne(item)
    }

    async function deleteOneByName(name: string) {
        const db = await makeDb()
        return await db.collection('items').deleteOne({ name })
    }

    async function updateOne(item: Item) {
        const db = await makeDb()
        const result = await db
            .collection('items')
            .updateOne({ _id: item._id }, { $set: { ...item } })
        return result.modifiedCount > 0 ? item : null
    }
}

interface Props {
    makeDb: MakeDb
}
