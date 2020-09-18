import { usersDb } from '../../db'
import makeAddUser from './add-user'
import makeListUsers from './list-users'
import makeRemoveUser from './remove-user'

export const addUser = makeAddUser({ usersDb })
export const removeUser = makeRemoveUser({ usersDb })
export const listUsers = makeListUsers({ usersDb })
