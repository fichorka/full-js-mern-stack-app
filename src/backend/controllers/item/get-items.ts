import { ListItems } from '../../use-cases/item'
import { Query } from '../../use-cases/types'
import { Controller, HttpRequest } from '../types'

const makeGetItems: MakeGetItems = function ({ listItems }) {
    const getItems: Controller<Query> = async function (httpRequest) {
        try {
            const options = httpRequest.body
            const users = await listItems(options)

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 201,
                body: {
                    meta: {
                        status: 'success'
                    },
                    result: users
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

    return getItems
}

export { makeGetItems }

type MakeGetItems = ({ listItems }: MakeProps) => Controller

interface MakeProps {
    listItems: ListItems
}
