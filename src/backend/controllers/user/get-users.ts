import { ListUsers } from '../../use-cases/user/list-users'
import { Controller } from '../types'

export default function makeGetUsers({ listUsers }: MakeProps): Controller {
    const getUsers: Controller = async function (httpRequest) {
        try {
            const users = await listUsers(httpRequest?.body?.username)
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
                    status: 'fail',
                    message: err.message
                }
            }
        }
    }

    return getUsers
}

interface MakeProps {
    listUsers: ListUsers
}
