import { Controller } from '../types'
import { RemoveUser } from '../../use-cases/user/remove-user'

export default function makeDeleteUser({ removeUser }: MakeProps): Controller {
    const deleteUser: Controller = async function (httpRequest) {
        try {
            const { username } = httpRequest.body
            await removeUser({ username })
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 201,
                body: {
                    meta: {
                        status: 'success',
                        message: 'User seccessfully deleted.'
                    }
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

    return deleteUser
}

interface MakeProps {
    removeUser: RemoveUser
}
