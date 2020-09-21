import { Item } from '../../entities'
import { AddItem } from '../../use-cases/item'
import { Controller } from '../types'

const makePostItem: MakePostItem = function ({ addItem }) {
    const postItem: PostItem = async function (httpRequest) {
        try {
            const itemInfo = httpRequest.body
            const posted = await addItem({ itemInfo })

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

    return postItem
}

export { makePostItem }

type MakePostItem = ({ addItem }: MakeProps) => PostItem

type PostItem = Controller<Item>

interface MakeProps {
    addItem: AddItem
}
