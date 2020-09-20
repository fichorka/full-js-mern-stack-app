import {
    Db,
    DeleteWriteOpResultObject,
    InsertOneWriteOpResult,
    ObjectID
} from 'mongodb'
import { Item, User } from '../entities/types'

export type MakeDb = () => Promise<Db>

export interface UsersDb {
    findAll(): Promise<User[] | []>
    findOneById(id: ObjectID): Promise<User | null>
    findOneByUsername(username: string | undefined): Promise<User | null>
    insertOne(user: User): Promise<InsertOneWriteOpResult<User & { _id: any }>>
    deleteOne(username: string): Promise<DeleteWriteOpResultObject>
    updateOne(user: User): Promise<User | null>
}

export interface ItemsDb {
    findAll(): Promise<Item[] | []>
    findOneById(id: ObjectID): Promise<Item | null>
    findOneByName(name: string | undefined): Promise<Item | null>
    insertOne(item: Item): Promise<InsertOneWriteOpResult<Item & { _id: any }>>
    deleteOneByName(name: string): Promise<DeleteWriteOpResultObject>
    updateOne(item: Item): Promise<Item | null>
}
