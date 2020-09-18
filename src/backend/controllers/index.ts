import { addUser, editUser, listUsers, removeUser } from '../use-cases'
import makeDeleteUser from './user/delete-user'
import makeGetUsers from './user/get-users'
import makePostUser from './user/post-user'
import makePatchUser from './user/patch-user'

const getUsers = makeGetUsers({ listUsers })
const postUser = makePostUser({ addUser })
const patchUser = makePatchUser({ editUser })
const deleteUser = makeDeleteUser({ removeUser })

export { getUsers, postUser, patchUser, deleteUser }
