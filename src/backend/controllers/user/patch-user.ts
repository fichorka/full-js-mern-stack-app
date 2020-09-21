import { User } from '../../entities'
import { UserChanges } from '../../routes/types'
import { EditUser } from '../../use-cases/user/edit-user'
import { Controller } from '../types'

const makePatchUser: MakePatchUser = function ({ editUser }) {
    const patchUser: PatchUser = async function (httpRequest) {
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

export { makePatchUser }

type MakePatchUser = ({ editUser }: MakeProps) => PatchUser

type PatchUser = Controller<User>

interface MakeProps {
    editUser: EditUser
}
