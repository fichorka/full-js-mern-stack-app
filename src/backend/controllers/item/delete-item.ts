import { Controller } from '../types'
import { Query } from '../../use-cases/types'
import { RemoveItem } from '../../use-cases/item'

const makeDeleteItem: MakeDeleteItem = function ({ removeItem }) {
    const deleteUser: DeleteItem = async function (httpRequest) {
        try {
            const { name } = httpRequest.params

            if (!name) {
                throw new Error('Name is requires.')
            }

            await removeItem({ name })

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 204,
                body: {
                    meta: {
                        status: 'success',
                        message: 'Item successfully deleted.'
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

export { makeDeleteItem }

type MakeDeleteItem = ({ removeItem }: MakeProps) => DeleteItem

type DeleteItem = Controller<Query>

interface MakeProps {
    removeItem: RemoveItem
}
