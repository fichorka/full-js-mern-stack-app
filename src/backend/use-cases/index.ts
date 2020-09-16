import { usersDb } from '../db'
import makeAddUser from './add-user'

export const addUser = makeAddUser({ usersDb })
