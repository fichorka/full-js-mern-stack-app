import { Controller } from '../types'
import { EditItem } from '../../use-cases/item'

const makePatchItem: MakePatchItem = function ({ editItem }) {
    const patchItem: PatchItem = async function (httpRequest) {
        try {
            const { name } = httpRequest.params
            const changes = httpRequest.body

            const item = await editItem({ name, changes })
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 201,
                body: {
                    meta: {
                        status: 'success'
                    },
                    result: item
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
    return patchItem
}

export { makePatchItem }

type MakePatchItem = ({ editItem }: MakeProps) => PatchItem

type PatchItem = Controller<undefined>

interface MakeProps {
    editItem: EditItem
}
