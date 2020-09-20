import { AddUser } from '../../use-cases/user/add-user'
import { Controller } from '../types'

export default function makePostUser({ addUser }: MakeProps): Controller {
    const postUser: Controller = async function (httpRequest) {
        try {
            const userInfo = httpRequest.body
            const posted = await addUser({ userInfo })

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 201,
                body: {
                    meta: {
                        status: 'success'
                    },
                    result: posted
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

    return postUser
}

interface MakeProps {
    addUser: AddUser
}
