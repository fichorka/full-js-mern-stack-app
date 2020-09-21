import { ListUsers } from '../../use-cases/user/list-users'
import { Controller } from '../types'

const makeGetUsers: MakeGetUsers = function ({ listUsers }) {
    const getUsers: GetUsers = async function (httpRequest) {
        try {
            const username = httpRequest?.params?.username
            const users = await listUsers(username)

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 201,
                body: {
                    meta: {
                        status: 'success'
                    },
                    result: users
                }
            }
        } catch (err) {
            console.log(err)
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 400,
                body: {
                    meta: {
                        status: 'fail',
                        message: err.message
                    }
                }
            }
        }
    }

    return getUsers
}

export { makeGetUsers }

type MakeGetUsers = ({ listUsers }: MakeProps) => GetUsers

type GetUsers = Controller<undefined>

interface MakeProps {
    listUsers: ListUsers
}
