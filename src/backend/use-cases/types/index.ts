export interface UsersDb {
    findAll: CallableFunction
    findOneById: CallableFunction
    findOneByUsername: CallableFunction
    insertOne: CallableFunction
}
