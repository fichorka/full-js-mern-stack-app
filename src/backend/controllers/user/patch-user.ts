import { User } from '../../entities'
import { UserChanges } from '../../routes/types'
import { EditUser } from '../../use-cases/user/edit-user'
import { Controller } from '../types'

export default function makePatchUser({
    editUser
}: MakeProps): Controller<User> {
    const patchUser: Controller<User> = async function (httpRequest) {
        try {
            const changes: UserChanges = httpRequest.body

            const currentUsername = httpRequest.params.username

            const patched = await editUser({
                username: currentUsername,
                changes
            })

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 201,
                body: {
                    meta: {
                        status: 'success'
                    },
                    result: patched
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

    return patchUser
}

interface MakeProps {
    editUser: EditUser
}
