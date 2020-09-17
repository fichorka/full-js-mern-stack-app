import { usersDb } from '../../db'
import makeAddUser from './add-user'
import makeRemoveUser from './remove-user'

export const addUser = makeAddUser({ usersDb })
export const removeUser = makeRemoveUser({ usersDb })
