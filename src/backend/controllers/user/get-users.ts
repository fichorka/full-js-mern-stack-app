import { User } from '../../entities'
import { ListUsers } from '../../use-cases/user/list-users'
import { Controller } from '../types'

export default function makeGetUsers({
    listUsers
}: MakeProps): Controller<User> {
    const getUsers: Controller<User> = async function (httpRequest) {
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

interface MakeProps {
    listUsers: ListUsers
}
