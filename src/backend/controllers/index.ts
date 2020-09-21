import {
    addItem,
    addUser,
    editItem,
    editUser,
    listItems,
    listUsers,
    removeItem,
    removeUser
} from '../use-cases'
import makeDeleteUser from './user/delete-user'
import makeGetUsers from './user/get-users'
import makePostUser from './user/post-user'
import makePatchUser from './user/patch-user'
import {
    makeGetItems,
    makePostItem,
    makeDeleteItem,
    makePatchItem
} from './item'

const getUsers = makeGetUsers({ listUsers })
const postUser = makePostUser({ addUser })
const patchUser = makePatchUser({ editUser })
const deleteUser = makeDeleteUser({ removeUser })

const postItem = makePostItem({ addItem })
const getItems = makeGetItems({ listItems })
const deleteItem = makeDeleteItem({ removeItem })
const patchItem = makePatchItem({ editItem })

export {
    getUsers,
    postUser,
    patchUser,
    deleteUser,
    postItem,
    getItems,
    deleteItem,
    patchItem
}
