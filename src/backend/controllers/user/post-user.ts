import { User } from '../../entities'
import { AddUser } from '../../use-cases/user/add-user'
import { Controller } from '../types'

const makePostUser: MakePostUser = function ({ addUser }) {
    const postUser: PostUser = async function (httpRequest) {
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

export { makePostUser }

type MakePostUser = ({ addUser }: MakeProps) => PostUser

type PostUser = Controller<User>

interface MakeProps {
    addUser: AddUser
}
