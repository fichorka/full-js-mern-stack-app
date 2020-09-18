import { EditUser } from '../../use-cases/user/edit-user'
import { Controller } from '../types'

export default function makePatchUser({ editUser }: MakeProps): Controller {
    const patchUser: Controller = async function (httpRequest) {
        try {
            const userInfo = httpRequest.body
            const patched = await editUser(userInfo)
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
