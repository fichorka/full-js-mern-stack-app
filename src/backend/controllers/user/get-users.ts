import { ListUsers } from '../../use-cases/user/list-users'
import { HttpResponse } from '../types'

export default function makeGetUsers({ listUsers }: MakeProps): GetUser {
    const getUsers: GetUser = async function () {
        try {
            const users = await listUsers()
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
                    status: 'fail'
                }
            }
        }
    }
    return getUsers
}

interface MakeProps {
    listUsers: ListUsers
}

type GetUser = () => Promise<HttpResponse>
