import { ObjectID } from 'mongodb'
import { Item } from '../entities/types'
import { Query } from '../use-cases/types'
import { ItemsDb, MakeDb } from './types'

export default function makeItemsDb({ makeDb }: Props): ItemsDb {
    return {
        findAll,
        findOneById,
        findOneByName,
        insertOne,
        deleteOneById,
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

    async function findAll({
        name = '',
        order = -1,
        sortBy = 'name',
        limit = 10
    }: Query) {
        const db = await makeDb()
        const query: { name?: string } = {}
        if (name) query.name = name

        return await db
            .collection('items')
            .find(query)
            .limit(limit)
            .sort({ [sortBy]: order })
            .toArray()
    }

    async function insertOne(item: Item) {
        const db = await makeDb()
        return await db.collection('items').insertOne(item)
    }

    async function deleteOneById(id: string) {
        const db = await makeDb()
        return await db.collection('items').deleteOne({ _id: id })
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
