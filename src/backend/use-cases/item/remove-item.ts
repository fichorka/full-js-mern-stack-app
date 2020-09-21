import { ItemsDb } from '../../db/types'
import { Item } from '../../entities'

const makeRemoveItem: MakeRemoveItem = function ({ itemsDb }) {
    const removeItem: RemoveItem = async function ({ name }) {
        const exists = await itemsDb.findOneByName(name)
        if (!exists) {
            throw new Error('No item with such name.')
        }
        await itemsDb.deleteOneByName(name)
        return { name }
    }

    return removeItem
}

export { makeRemoveItem }

type MakeRemoveItem = ({ itemsDb }: { itemsDb: ItemsDb }) => RemoveItem

type RemoveItem = ({ name }: { name: string }) => Promise<Item>
