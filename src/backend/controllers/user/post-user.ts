import { AddUser } from '../../use-cases/user/add-user'
import { HttpResponse } from '../types'

export default function makePostUser({ addUser }: MakeProps): PostUser {
    const postUser: PostUser = async function ({ httpRequest }) {
        try {
            const { userInfo } = httpRequest.body
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

type PostUser = ({ httpRequest }: PostUserProps) => Promise<HttpResponse>

interface PostUserProps {
    httpRequest: {
        body: {
            userInfo: {
                username: string
                password: string
                role: string
            }
        }
    }
}
