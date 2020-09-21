import { Controller } from '../types'
import { RemoveUser } from '../../use-cases/user/remove-user'
import { User } from '../../entities'

const makeDeleteUser: MakeDeleteUser = function ({ removeUser }) {
    const deleteUser: DeleteUser = async function (httpRequest) {
        try {
            const { username } = httpRequest.params
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

export { makeDeleteUser }

type MakeDeleteUser = ({ removeUser }: MakeProps) => DeleteUser

type DeleteUser = Controller<User>

interface MakeProps {
    removeUser: RemoveUser
}
