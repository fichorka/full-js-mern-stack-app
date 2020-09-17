import { Db, DeleteWriteOpResultObject, InsertOneWriteOpResult } from 'mongodb'
import { User } from '../entities/types'

export type MakeDb = () => Promise<Db>

export interface UsersDb {
    findAll(): Promise<User[] | []>
    findOneById(id: string): Promise<User | null>
    findOneByUsername(username: string | undefined): Promise<User | null>
    insertOne(user: User): Promise<InsertOneWriteOpResult<User & { _id: any }>>
    deleteOne(username: string): Promise<DeleteWriteOpResultObject>
    updateOne(user: User): Promise<User | null>
}
