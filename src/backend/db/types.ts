import { Db } from 'mongodb'

export type MakeDb = () => Promise<Db>
